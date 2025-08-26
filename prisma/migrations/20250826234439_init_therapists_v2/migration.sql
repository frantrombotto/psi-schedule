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
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "therapists_pkey" PRIMARY KEY ("id")
);
