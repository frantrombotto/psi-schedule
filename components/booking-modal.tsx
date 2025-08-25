"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { SchedulingCalendar } from "./scheduling-calendar"

interface TimeSlot {
  time: string
  available: boolean
  sessionType: "video" | "in-person" | "phone"
}

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  therapist: {
    id: string
    name: string
    credentials: string
    pricePerSession: number
    sessionTypes: ("video" | "in-person" | "phone")[]
    avatar: string
  }
}

export function BookingModal({ isOpen, onClose, therapist }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null)

  const handleTimeSelect = (date: Date, timeSlot: TimeSlot) => {
    setSelectedDate(date)
    setSelectedTime(timeSlot)
  }

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // Here you would typically send the booking data to your backend
      console.log("Booking:", {
        therapistId: therapist.id,
        date: selectedDate,
        time: selectedTime,
        price: therapist.pricePerSession,
      })

      // For now, just show an alert
      alert(`Appointment booked with ${therapist.name} on ${selectedDate.toLocaleDateString()} at ${selectedTime.time}`)
      onClose()

      // Reset selections
      setSelectedDate(null)
      setSelectedTime(null)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent showCloseButton={false} className="max-w-5xl sm:max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Book Appointment</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <SchedulingCalendar
            therapistName={therapist.name}
            sessionTypes={therapist.sessionTypes}
            pricePerSession={therapist.pricePerSession}
            onTimeSelect={handleTimeSelect}
            selectedDate={selectedDate || undefined}
            selectedTime={selectedTime || undefined}
          />

          {selectedDate && selectedTime && (
            <div className="border-t pt-6">
              <div className="bg-muted p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Appointment Summary</h4>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Therapist:</strong> {therapist.name}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p>
                    <strong>Time:</strong> {selectedTime.time}
                  </p>
                  <p>
                    <strong>Session Type:</strong> {selectedTime.sessionType}
                  </p>
                  <p>
                    <strong>Fee:</strong> ${therapist.pricePerSession}
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button onClick={handleBooking}>Confirm Booking</Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
