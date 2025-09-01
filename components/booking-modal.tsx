"use client"

import { useState, type SyntheticEvent } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { SchedulingCalendar } from "./scheduling-calendar"
import { SessionType } from "./therapist-card"
import { addMinutes } from "date-fns"
import { toZonedTime } from 'date-fns-tz';
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"

function TimezoneIndicator({ timezone }: { timezone: string }) {
  const getTimezoneOffset = () => {
    const now = new Date()
    const offset = now.getTimezoneOffset()
    const hours = Math.abs(Math.floor(offset / 60))
    const minutes = Math.abs(offset % 60)
    const sign = offset > 0 ? '-' : '+'
    return `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
      <div className="flex items-center space-x-2 text-blue-800">
        <span className="text-lg">🌍</span>
        <span className="text-sm font-medium">
          Los horarios mostrados están en tu zona horaria: ({getTimezoneOffset()}) {timezone}
        </span>
      </div>
    </div>
  )
}

interface TimeSlot {
  time: string
  available: boolean
  sessionType: SessionType
}

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  therapist: {
    id: string
    name: string
    credentials: string
    pricePerSession: number
    sessionTypes: SessionType[]
    avatar: string
    defaultDurationMinutes: number
  }
}

export function BookingModal({ isOpen, onClose, therapist }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const clientTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success")

  const handleTimeSelect = (date: Date, timeSlot: TimeSlot) => {
    setSelectedDate(date)
    setSelectedTime(timeSlot)
  }

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return

    try {
      setIsSubmitting(true)

      const start = combineDateAndTime(selectedDate, selectedTime.time, clientTimezone)
      const end = addMinutes(start, therapist.defaultDurationMinutes)

      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          therapistId: therapist.id,
          userId: 'user-a1', // TODO: Ask user for their info and create user if not exists
          sessionType: selectedTime.sessionType,
          date: selectedDate.toISOString().split('T')[0],
          startTime: start.toTimeString().split(' ')[0],
          endTime: end.toTimeString().split(' ')[0],
          timezone: clientTimezone,
          price: therapist.pricePerSession,
          status: 'CONFIRMED', // TODO: Implement appointment status confirmation
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error || 'No se pudo crear la cita')
      }

      const successMsg = `Cita agendada con ${therapist.name} el ${selectedDate.toLocaleDateString()} a las ${selectedTime.time}`
      setSnackbarMessage(successMsg)
      setSnackbarSeverity("success")
      setSnackbarOpen(true)

      setSelectedDate(null)
      setSelectedTime(null)
    } catch (e: unknown) {
      console.error('error', e)

      const msg = e instanceof Error ? e.message : 'Ocurrió un error al crear la cita'
      setSnackbarMessage(msg)
      setSnackbarSeverity("error")
      setSnackbarOpen(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const combineDateAndTime = (date: Date, timeStr: string, tz: string): Date => {
    const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)

    if (!match) {
      return new Date(date.setHours(9, 0, 0, 0))
    }
    
    let hours = parseInt(match[1], 10)
    const minutes = parseInt(match[2], 10)
    const ampm = match[3].toUpperCase()
    if (ampm === 'PM' && hours !== 12) hours += 12
    if (ampm === 'AM' && hours === 12) hours = 0
    // Format the date portion in the client's timezone to ensure the correct calendar day
    const ymd = date.toISOString().split('T')[0]
    const hh = String(hours).padStart(2, '0')
    const mm = String(minutes).padStart(2, '0')
    const localIso = `${ymd}T${hh}:${mm}:00`
    // Interpret the local wall time string in the client's environment timezone
    // and rely on Date to produce the correct absolute instant; toISOString will be UTC
    return toZonedTime(localIso, tz);
  }

  const handleSnackbarClose = (_event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return
    setSnackbarOpen(false)
    onClose()
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent showCloseButton={false} className="max-w-5xl sm:max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Agendar cita</span>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <TimezoneIndicator timezone={clientTimezone} />
            <SchedulingCalendar
              therapistName={therapist.name}
              sessionTypes={therapist.sessionTypes}
              pricePerSession={therapist.pricePerSession}
              onTimeSelect={handleTimeSelect}
              selectedDate={selectedDate || undefined}
              selectedTime={selectedTime || undefined}
              therapistId={therapist.id}
            />

            {selectedDate && selectedTime && (
              <div className="border-t pt-6">
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Resumen de la cita</h4>
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>Psicólogo:</strong> {therapist.name}
                    </p>
                    <p>
                      <strong>Fecha:</strong>{" "}
                      {selectedDate.toLocaleDateString("es-ES", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p>
                      <strong>Hora:</strong> {selectedTime.time}
                    </p>
                    <p>
                      <strong>Tipo de sesión:</strong> {selectedTime.sessionType}
                    </p>
                    <p>
                      <strong>Costo de la sesión:</strong> ${therapist.pricePerSession}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button onClick={handleBooking} disabled={isSubmitting}>{isSubmitting ? 'Creando…' : 'Confirmar reserva'}</Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} variant="filled" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  )
}
