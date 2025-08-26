"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { SessionType } from "./therapist-card"

interface TimeSlot {
  time: string
  available: boolean
  sessionType: SessionType
}

interface SchedulingCalendarProps {
  therapistName: string
  sessionTypes: SessionType[]
  pricePerSession: number
  onTimeSelect: (date: Date, timeSlot: TimeSlot) => void
  selectedDate?: Date
  selectedTime?: TimeSlot
}

const generateTimeSlots = (sessionTypes: SessionType[]): TimeSlot[] => {
  const baseSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
  ]

  return baseSlots.map((time) => ({
    time,
    available: Math.random() > 0.3, // Simulate availability
    sessionType: sessionTypes[Math.floor(Math.random() * sessionTypes.length)],
  }))
}

const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const days = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null)
  }

  // Add all days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day))
  }

  return days
}

const isDateAvailable = (date: Date) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Only allow booking for future dates and weekdays
  return date >= today && date.getDay() !== 0 && date.getDay() !== 6
}

export function SchedulingCalendar({
  therapistName,
  sessionTypes,
  pricePerSession,
  onTimeSelect,
  selectedDate,
  selectedTime,
}: SchedulingCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewingDate, setViewingDate] = useState(selectedDate || null)
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])

  const days = getDaysInMonth(currentDate)
  const dayNames = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]

  const handleDateClick = (date: Date) => {
    if (!isDateAvailable(date)) return

    setViewingDate(date)
    setTimeSlots(generateTimeSlots(sessionTypes))
  }

  const handleTimeSelect = (timeSlot: TimeSlot) => {
    if (!timeSlot.available || !viewingDate) return
    onTimeSelect(viewingDate, timeSlot)
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
    setViewingDate(null)
    setTimeSlots([])
  }

  const getSessionTypeIcon = (type: SessionType) => {
    switch (type) {
      case SessionType.VIDEO:
        return "📹"
      case SessionType.PHONE:
        return "📞"
      case SessionType.IN_PERSON:
        return "🏢"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Agenda con {therapistName}</h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium min-w-32 text-center">
            {currentDate.toLocaleString("es-ES", { month: "long" }).charAt(0).toUpperCase() + currentDate.toLocaleString("es-ES", { month: "long" }).slice(1)} {currentDate.getFullYear()}
          </span>
          <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar Grid */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-base flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4" />
              <span>Seleccioná una fecha</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-xs font-medium text-muted-foreground p-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((date, index) => {
                if (!date) {
                  return <div key={index} className="p-2" />
                }

                const isAvailable = isDateAvailable(date)
                const isSelected = viewingDate && date.toDateString() === viewingDate.toDateString()
                const isToday = date.toDateString() === new Date().toDateString()

                return (
                  <button
                    key={date.toISOString()}
                    onClick={() => handleDateClick(date)}
                    disabled={!isAvailable}
                    className={cn(
                      "p-2 text-sm rounded-md transition-colors",
                      "hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary",
                      isAvailable ? "cursor-pointer" : "cursor-not-allowed opacity-50",
                      isSelected && "bg-primary text-primary-foreground",
                      isToday && !isSelected && "bg-accent text-accent-foreground font-semibold",
                      !isAvailable && "text-muted-foreground",
                    )}
                  >
                    {date.getDate()}
                  </button>
                )
              })}
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              <p>• Las fechas disponibles son clickeables</p>
              <p>• Los fines de semana no están disponibles</p>
            </div>
          </CardContent>
        </Card>

        {/* Time Slots */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-base flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>
                {viewingDate
                  ? `Horarios disponibles - ${viewingDate.toLocaleDateString("es-ES", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}`
                  : "Seleccioná una fecha para ver los horarios disponibles"}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {viewingDate ? (
              <div className="space-y-3">
                {timeSlots.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                    {timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => handleTimeSelect(slot)}
                        disabled={!slot.available}
                        className={cn(
                          "p-3 text-sm rounded-md border transition-all",
                          "flex items-center justify-between",
                          slot.available
                            ? "hover:bg-primary hover:text-primary-foreground cursor-pointer border-border"
                            : "opacity-50 cursor-not-allowed bg-muted border-muted",
                          selectedTime?.time === slot.time && "bg-primary text-primary-foreground",
                        )}
                      >
                        <span>{slot.time}</span>
                        <span className="text-xs">{getSessionTypeIcon(slot.sessionType)}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-8">No hay horarios disponibles para esta fecha</p>
                )}

                {timeSlots.some((slot) => slot.available) && (
                  <div className="mt-4 p-3 bg-muted rounded-md">
                    <div className="flex items-center justify-between text-sm">
                      <span>Costo de la sesión:</span>
                      <span className="font-semibold">${pricePerSession}</span>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                      <span>📹 Video</span>
                      <span>📞 Teléfono</span>
                      <span>🏢 En persona</span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Selecciona una fecha del calendario para ver los horarios disponibles.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
