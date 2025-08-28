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
      startTs,
      endTs,
      status, // optional; defaults to CONFIRMED by schema
      price,
    } = body || {}

    if (!therapistId || !userId || !sessionType || !startTs || !endTs) {
      return NextResponse.json(
        { error: 'therapistId, userId, sessionType, startTs, and endTs are required' },
        { status: 400 }
      )
    }

    const created = await prisma.appointment.create({
      data: {
        therapistId,
        userId,
        sessionType,
        startTs,
        endTs,
        status,
        price,
      },
    })

    return NextResponse.json({ data: created }, { status: 201 })
  } catch (error: unknown) {
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 })
  }
}

