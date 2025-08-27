-- CreateEnum
CREATE TYPE "public"."AppointmentStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');

-- CreateTable
CREATE TABLE "public"."therapists" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "credentials" TEXT NOT NULL,
    "specialties" TEXT[],
    "rating" DOUBLE PRECISION NOT NULL,
    "reviewCount" INTEGER NOT NULL,
    "pricePerSession" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "nextAvailable" TEXT,
    "avatar" TEXT NOT NULL,
    "acceptsInsurance" BOOLEAN NOT NULL,
    "sessionTypes" TEXT[],
    "languages" TEXT[],
    "yearsExperience" INTEGER NOT NULL,
    "timezone" TEXT NOT NULL,
    "defaultDurationMinutes" INTEGER NOT NULL DEFAULT 50,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "therapists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."availability_rules" (
    "id" TEXT NOT NULL,
    "therapistId" TEXT NOT NULL,
    "sessionType" TEXT NOT NULL,
    "weekday" INTEGER NOT NULL,
    "startTime" TIME NOT NULL,
    "endTime" TIME NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "availability_rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."availability_exceptions" (
    "id" TEXT NOT NULL,
    "therapistId" TEXT NOT NULL,
    "sessionType" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "startTime" TIME,
    "endTime" TIME,
    "isBlocked" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "availability_exceptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."appointments" (
    "id" TEXT NOT NULL,
    "therapistId" TEXT NOT NULL,
    "sessionType" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "startTs" TIMESTAMPTZ(6) NOT NULL,
    "endTs" TIMESTAMPTZ(6) NOT NULL,
    "status" "public"."AppointmentStatus" NOT NULL DEFAULT 'CONFIRMED',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "therapists_timezone_idx" ON "public"."therapists"("timezone");

-- CreateIndex
CREATE INDEX "availability_rules_therapistId_weekday_idx" ON "public"."availability_rules"("therapistId", "weekday");

-- CreateIndex
CREATE INDEX "availability_exceptions_therapistId_date_idx" ON "public"."availability_exceptions"("therapistId", "date");

-- CreateIndex
CREATE INDEX "appointments_therapistId_startTs_endTs_idx" ON "public"."appointments"("therapistId", "startTs", "endTs");

-- CreateIndex
CREATE UNIQUE INDEX "appointments_therapistId_startTs_endTs_key" ON "public"."appointments"("therapistId", "startTs", "endTs");

-- AddForeignKey
ALTER TABLE "public"."availability_rules" ADD CONSTRAINT "availability_rules_therapistId_fkey" FOREIGN KEY ("therapistId") REFERENCES "public"."therapists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."availability_exceptions" ADD CONSTRAINT "availability_exceptions_therapistId_fkey" FOREIGN KEY ("therapistId") REFERENCES "public"."therapists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointments" ADD CONSTRAINT "appointments_therapistId_fkey" FOREIGN KEY ("therapistId") REFERENCES "public"."therapists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointments" ADD CONSTRAINT "appointments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
