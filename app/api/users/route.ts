import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// POST /api/users
// Minimal user creation; extend with validation/business rules later
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, location, timezone } = body || {}

    if (!firstName || !lastName || !email || !phone || !location || !timezone) {
      return NextResponse.json(
        { error: 'firstName, lastName, email, phone, location, and timezone are required' },
        { status: 400 }
      )
    }

    const created = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        location,
        timezone,
      },
    })

    return NextResponse.json({ data: created }, { status: 201 })
  } catch (error: unknown) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  }
}

