import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { addMinutes, format } from 'date-fns';
import { toZonedTime, formatInTimeZone } from 'date-fns-tz';

type Slot = {
  start: string;
  available: boolean;
  sessionType: string;
};

export type TherapistAvailability = {
  data: {
    therapistId: string;
    range: { from: string | null; to: string | null };
    slots: Record<string, Slot[]>;
  };
};
// GET /api/therapists/:id/availability
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
): Promise<NextResponse<TherapistAvailability | { error: string }>> {
  const therapistId = context.params?.id;

  const { searchParams } = new URL(req.url);
  const fromDate = searchParams.get('from_date');
  const toDate = searchParams.get('to_date');
  const userTimezone = searchParams.get('user_timezone');

  const [therapist, rules, exceptions, appts] = await Promise.all([
    prisma.therapist.findUnique({
      where: { id: therapistId },
    }),
    prisma.availabilityRule.findMany({
      where: { therapistId: therapistId },
    }),
    prisma.availabilityException.findMany({
      where: {
        therapistId: therapistId,
        date: {
          gte: new Date(new Date(fromDate ?? '').setHours(0, 0, 0, 0)),
          lte: new Date(new Date(toDate ?? '').setHours(23, 59, 59, 999)),
        },
      },
    }),
    prisma.appointment.findMany({
      where: {
        therapistId: therapistId,
        status: { in: ['CONFIRMED', 'PENDING'] },
        date: {
          gte: new Date(new Date(fromDate ?? '').setHours(0, 0, 0, 0)),
          lte: new Date(new Date(toDate ?? '').setHours(23, 59, 59, 999)),
        },
      },
    }),
  ]);
  if (!therapist) {
    return NextResponse.json({ error: 'Therapist not found' }, { status: 404 });
  }

  const slots: Record<string, Slot[]> = {};

  const datesForAppointments: string[] = getDateRangeArray(
    fromDate ?? '',
    toDate ?? ''
  );

  for (const date of datesForAppointments) {
    const dateWeekday = new Date(date).getDay();
    const dayRules = rules.filter((rule) => rule.weekday === dateWeekday);
    let availabilityWindows =
      dayRules.map((rule) => {
        // TODO: Implement time zone conversion
        const start = localDateTimeToUtc(
          date,
          rule.startTime.toISOString().split('T')[1],
          userTimezone ?? 'America/Argentina/Buenos_Aires'
        );
        const end = localDateTimeToUtc(
          date,
          rule.endTime.toISOString().split('T')[1],
          userTimezone ?? 'America/Argentina/Buenos_Aires'
        );
        return {
          start,
          end,
          sessionType: rule.sessionType,
        };
      }) ?? [];

    const dayExceptions = exceptions.filter(
      (e) => e.date.toISOString().split('T')[0] === date
    );
    if (dayExceptions.some((e) => e.isBlocked)) {
      availabilityWindows = []; // block full day
    }
    for (const ex of dayExceptions.filter(
      (e) => !e.isBlocked && e.startTime && e.endTime
    )) {
      // TODO: Implement time zone conversion
      availabilityWindows.push({
        start: localDateTimeToUtc(
          date,
          ex.startTime?.toISOString().split('T')[1] ?? '',
          userTimezone ?? 'America/Argentina/Buenos_Aires'
        ),
        end: localDateTimeToUtc(
          date,
          ex.endTime?.toISOString().split('T')[1] ?? '',
          userTimezone ?? 'America/Argentina/Buenos_Aires'
        ),
        sessionType: ex.sessionType,
      });
    }

    for (const window of availabilityWindows) {
      let start = window.start;

      while (
        addMinutes(start, therapist.defaultDurationMinutes) <= window.end
      ) {
        const slotStart = start;
        const slotEnd = addMinutes(start, therapist.defaultDurationMinutes);

        const checkExistingAppointment = appts
          .filter((a) => a.date.toISOString().split('T')[0] === date)
          .some((a) => {
            const timezonedStart = toZonedTime(a.startTime, a.timezone);
            timezonedStart.setFullYear(slotStart.getFullYear(), slotStart.getMonth(), slotStart.getDate());
            const timezonedEnd = toZonedTime(a.endTime, a.timezone);
            timezonedEnd.setFullYear(slotEnd.getFullYear(), slotEnd.getMonth(), slotEnd.getDate());
            return !(timezonedEnd <= slotStart || timezonedStart >= slotEnd);
          });

        slots[date] = slots[date] ?? [];
        slots[date].push({
          start: formatInTimeZone(slotStart, 'UTC', 'hh:mm a'),
          available: !checkExistingAppointment,
          sessionType: window.sessionType,
        });

        start = addMinutes(start, 30);
      }
    }
  }

  return NextResponse.json({
    data: {
      therapistId,
      range: { from: fromDate, to: toDate },
      slots,
    },
  });
}

const getDateRangeArray = (from: string, to: string): string[] => {
  if (!from || !to) {
    return [];
  }
  const start = new Date(from);
  const end = new Date(to);
  const dates: string[] = [];
  let current = new Date(start);
  while (current <= end) {
    dates.push(current.toISOString().split('T')[0]);
    current.setUTCDate(current.getUTCDate() + 1);
  }
  return dates;
};

const localDateTimeToUtc = (
  dateStr: string,
  timeStr: string,
  tz: string
): Date => {
  const local = `${dateStr}T${timeStr}`;
  return toZonedTime(local, tz);
};
