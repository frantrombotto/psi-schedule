# Psi Mammoliti – Therapist Schedule Website

Live Demo: **[v0-therapist-schedule-website.vercel.app](https://v0-therapist-schedule-website.vercel.app)**

## Overview

Psi Mammoliti is a therapist discovery and scheduling app. Users can browse therapists, filter by specialties and session type, view availability in a calendar, and book appointments. The backend exposes endpoints for therapists, availability, and appointment creation, backed by PostgreSQL via Prisma.

## Features

- Browse therapists with profile cards (rating, specialties, languages, price, etc.)
- Filter panel for specialties, session type, languages, and more
- Availability calendar per therapist (rules + exceptions merged with existing bookings)
- Booking modal with session summary and price
- Appointment creation API with price tracking
- Success/error notifications via Material UI Snackbar
- Timezone-aware slot generation using date-fns and date-fns-tz

## Known issues
- Disable time slots already taken by appointments -> Fix logic on date/ time comparisson
- Implement DB transaction or optimistic insertion in appointment creation

## Future suggestions
- User creation, including sign in and log in
- Send notification after appointment was set via email/SMS

## Tech Stack

- Next.js 15, React 19
- Prisma ORM (PostgreSQL)
- Shadcn/Radix UI components + Material UI Snackbar
- TypeScript

## API Endpoints

- GET `/api/therapists?search=&page=1&pageSize=12`
  - Returns paginated therapists with optional search across name, credentials, location, specialties, and languages.
- GET `/api/therapists/:id/availability?from_date=YYYY-MM-DD&to_date=YYYY-MM-DD&user_timezone=Area/City`
  - Returns merged availability windows (rules, exceptions, and existing appointments) as bookable time slots.
- POST `/api/appointments`
  - Body: `therapistId`, `userId`, `sessionType`, `startTs`, `endTs`, optional `status`, `price`
  - Creates an appointment record.

## Getting Started (Local Development)

### Prerequisites

- Node.js 18+ (20+ recommended)
- pnpm (`npm i -g pnpm`)
- A PostgreSQL database

### 1) Install dependencies

```bash
pnpm install
```

### 2) Configure environment

Create a `.env` file at the project root with your database URL:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DBNAME?schema=public"
```

### 3) Apply database migrations

```bash
pnpm prisma migrate deploy
```

### 4) Seed sample data

Run the seed SQL files in order using `psql` (or your favorite SQL client):

```bash
# Therapists
psql "$DATABASE_URL" -f prisma/seed/sample_therapists.sql

# Availability rules, exceptions, and sample appointments
psql "$DATABASE_URL" -f prisma/seed/seed_availability_and_appointments.sql
```

### 5) Run the dev server

```bash
pnpm dev
```

Visit http://localhost:3000

## Production build

```bash
pnpm build
pnpm start
```

Ensure `DATABASE_URL` is set in the environment.

## Live Deployment

- Vercel project: https://vercel.com/frantrombottos-projects/v0-therapist-schedule-website
- Live app: https://v0-therapist-schedule-website.vercel.app

## Notes

- If you modify `prisma/schema.prisma`, regenerate the client:

```bash
pnpm prisma generate
```

- Seed data includes availability rules/exceptions and example appointments

- See an initial analysis for the software components:

![Challenge Analysis](psi-mammoliti-challenge-v0.png)
