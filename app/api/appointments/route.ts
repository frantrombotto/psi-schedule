import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { toZonedTime } from 'date-fns-tz';

// POST /api/appointments
// Minimal creation endpoint. Further validation/business rules to be added later.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      therapistId,
      userId,
      sessionType,
      date, // date in YYYY-MM-DD format
      startTime, // time in HH:MM:SS format
      endTime, // time in HH:MM:SS format
      timezone,
      status, // optional; defaults to CONFIRMED by schema
      price,
    } = body || {}

    if (!therapistId || !userId || !sessionType || !date || !startTime || !endTime || !timezone) {
      return NextResponse.json(
        { error: 'therapistId, userId, sessionType, date, startTime, endTime, and timezone are required' },
        { status: 400 }
      )
    }

    const created = await prisma.appointment.create({
      data: {
        therapistId,
        userId,
        sessionType,
        date: new Date(`${date}T00:00:00.000Z`),
        startTime: new Date(`1970-01-01T${startTime}Z`),
        endTime: new Date(`1970-01-01T${endTime}Z`),
        timezone,
        status,
        price,
      },
    })

    return NextResponse.json({ data: created }, { status: 201 })
  } catch (error: unknown) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 })
  }
}

