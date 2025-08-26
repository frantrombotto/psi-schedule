import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@/generated/prisma'

// Simple DTO to decouple DB shape from response
function therapistToDTO(t: any) {
  return {
    id: t.id,
    name: t.name,
    credentials: t.credentials,
    specialties: t.specialties,
    rating: t.rating,
    reviewCount: t.reviewCount,
    pricePerSession: t.pricePerSession,
    location: t.location,
    nextAvailable: t.nextAvailable,
    avatar: t.avatar,
    acceptsInsurance: t.acceptsInsurance,
    sessionTypes: t.sessionTypes,
    languages: t.languages,
    yearsExperience: t.yearsExperience,
  }
}

// GET /api/therapists?search=&page=1&pageSize=12
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const search = (searchParams.get('search') || '').trim()
  const page = Math.max(1, Number(searchParams.get('page') || 1))
  const pageSize = Math.min(50, Math.max(1, Number(searchParams.get('pageSize') || 12)))

  const where: Prisma.TherapistWhereInput = search
    ? {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { credentials: { contains: search, mode: 'insensitive' } },
          { location: { contains: search, mode: 'insensitive' } },
          { specialties: { has: search } },
          { languages: { has: search } },
        ],
      }
    : {}

  const [total, therapists] = await Promise.all([
    prisma.therapist.count({ where }),
    prisma.therapist.findMany({
      where,
      orderBy: { rating: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
  ])

  const data = therapists.map(therapistToDTO)

  return NextResponse.json({
    data,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
  })
}

