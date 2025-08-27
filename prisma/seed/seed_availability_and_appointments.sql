-- Seed availability rules, exceptions, and appointments for therapist 'seed-1'
-- Assumptions based on schema.prisma:
-- - timezone is America/Argentina/Buenos_Aires (already set in therapist seed)
-- - sessionType values are free-text strings; using 'Online' and 'Presencial'

-- Ensure therapist exists
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM therapists t WHERE t.id = 'seed-1') THEN
    RAISE EXCEPTION 'Therapist seed-1 does not exist. Run sample_therapists.sql first.';
  END IF;
END $$;

-- Seed users referenced by appointments
INSERT INTO users ("id", "firstName", "lastName", "email", "phone", "location", "timezone", "created_at", "updated_at")
VALUES
  ('user-a1', 'Ana', 'Gómez', 'ana.gomez@example.com', '+54 9 11 5555-1111', 'CABA, Argentina', 'America/Argentina/Buenos_Aires', now(), now()),
  ('user-b2', 'Bruno', 'Pérez', 'bruno.perez@example.com', '+54 9 11 5555-2222', 'Córdoba, Argentina', 'America/Argentina/Buenos_Aires', now(), now())
ON CONFLICT DO NOTHING;

-- Availability Rules
-- Weekday: 1 = Monday, ... 5 = Friday (Postgres extract(dow) returns 1..7 if set that way; here we rely on app logic consuming weekday as 1-7)
-- Online (morning slots): Monday to Friday, 09:00-12:00
INSERT INTO availability_rules ("id", "therapistId", "sessionType", "weekday", "startTime", "endTime", "createdAt", "updatedAt")
VALUES
  (gen_random_uuid(), 'seed-1', 'Online', 1, TIME '09:00', TIME '12:00', now(), now()),
  (gen_random_uuid(), 'seed-1', 'Online', 3, TIME '09:00', TIME '12:00', now(), now()),
  (gen_random_uuid(), 'seed-1', 'Online', 5, TIME '09:00', TIME '12:00', now(), now())
ON CONFLICT DO NOTHING;

-- Presencial (afternoon slots): Tuesday and Thursday, 14:00-18:00
INSERT INTO availability_rules ("id", "therapistId", "sessionType", "weekday", "startTime", "endTime", "createdAt", "updatedAt")
VALUES
  (gen_random_uuid(), 'seed-1', 'Presencial', 2, TIME '14:00', TIME '18:00', now(), now()),
  (gen_random_uuid(), 'seed-1', 'Presencial', 4, TIME '14:00', TIME '18:00', now(), now()),
  (gen_random_uuid(), 'seed-1', 'Presencial', 6, TIME '09:00', TIME '13:00', now(), now()),
  (gen_random_uuid(), 'seed-1', 'Presencial', 3, TIME '15:00', TIME '19:00', now(), now())
ON CONFLICT DO NOTHING;

-- Availability Exception: next Wednesday fully blocked (no sessions that day)
-- Compute next Wednesday date (assuming Sunday=0 .. Saturday=6)
WITH today AS (
  SELECT (current_date) AS d
), next_wed AS (
  SELECT (d + ((10 - EXTRACT(DOW FROM d)::int) % 7))::date AS w FROM today
)
INSERT INTO availability_exceptions ("id", "therapistId", "sessionType", "date", "startTime", "endTime", "isBlocked", "notes", "createdAt", "updatedAt")
SELECT gen_random_uuid(), 'seed-1', 'Online', w, NULL, NULL, true, 'Capacitación - día bloqueado', now(), now() FROM next_wed
ON CONFLICT DO NOTHING;

-- Appointments: two bookings in the next week
-- Appointment 1: Online, next Monday 09:30-10:20
WITH base AS (
  SELECT (current_date) AS d
), next_mon AS (
  SELECT (d + ((8 - EXTRACT(DOW FROM d)::int) % 7))::date AS m FROM base
)
INSERT INTO appointments ("id", "therapistId", "sessionType", "userId", "startTs", "endTs", "status", "createdAt", "updatedAt")
SELECT gen_random_uuid(), 'seed-1', 'Online', 'user-a1', (m + TIME '09:30') AT TIME ZONE 'America/Argentina/Buenos_Aires', (m + TIME '10:20') AT TIME ZONE 'America/Argentina/Buenos_Aires', 'CONFIRMED'::"AppointmentStatus", now(), now() FROM next_mon
ON CONFLICT DO NOTHING;

-- Appointment 2: Presencial, next Thursday 15:00-15:50
WITH base AS (
  SELECT (current_date) AS d
), next_thu AS (
  SELECT (d + ((11 - EXTRACT(DOW FROM d)::int) % 7))::date AS t FROM base
)
INSERT INTO appointments ("id", "therapistId", "sessionType", "userId", "startTs", "endTs", "status", "createdAt", "updatedAt")
SELECT gen_random_uuid(), 'seed-1', 'Presencial', 'user-b2', (t + TIME '15:00') AT TIME ZONE 'America/Argentina/Buenos_Aires', (t + TIME '15:50') AT TIME ZONE 'America/Argentina/Buenos_Aires', 'CONFIRMED'::"AppointmentStatus", now(), now() FROM next_thu
ON CONFLICT DO NOTHING;

