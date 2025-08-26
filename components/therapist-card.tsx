"use client"

import { useState } from "react"
import { Star, Clock, MapPin, Phone, Video, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookingModal } from "./booking-modal"

export enum SessionType {
  VIDEO = "Video",
  PHONE = "Teléfono",
  IN_PERSON = "En persona",
}

interface TherapistCardProps {
  therapist: {
    id: string
    name: string
    credentials: string
    specialties: string[]
    rating: number
    reviewCount: number
    pricePerSession: number
    location: string
    nextAvailable: string
    avatar: string
    acceptsInsurance: boolean
    sessionTypes: SessionType[]
    languages: string[]
    yearsExperience: number
  }
}

export function TherapistCard({ therapist }: TherapistCardProps) {
  const [showBookingModal, setShowBookingModal] = useState(false)

  return (
    <>
      <Card className="hover:shadow-lg transition-all duration-200 border-border">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <Avatar className="w-16 h-16 flex-shrink-0">
              <AvatarImage src={therapist.avatar || "/placeholder.svg"} alt={therapist.name} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {therapist.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-foreground text-lg leading-tight">{therapist.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{therapist.credentials}</p>
                  <p className="text-xs text-muted-foreground">{therapist.yearsExperience} años de experiencia</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(therapist.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{therapist.rating}</span>
                <span className="text-sm text-muted-foreground">({therapist.reviewCount} opiniones)</span>
              </div>

              <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{therapist.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>Próximo disponible: {therapist.nextAvailable}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-3">
                {therapist.sessionTypes.includes(SessionType.VIDEO) && (
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Video className="h-3 w-3" />
                    <span>Video</span>
                  </div>
                )}
                {therapist.sessionTypes.includes(SessionType.PHONE) && (
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    <span>Teléfono</span>
                  </div>
                )}
                {therapist.sessionTypes.includes(SessionType.IN_PERSON) && (
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <MessageCircle className="h-3 w-3" />
                    <span>In-person</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {therapist.specialties.slice(0, 3).map((specialty) => (
                  <Badge key={specialty} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
                {therapist.specialties.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{therapist.specialties.length - 3} more
                  </Badge>
                )}
              </div>

              <div className="flex items-center space-x-4 mb-4 text-xs text-muted-foreground">
                {therapist.acceptsInsurance && <span className="text-green-600 font-medium">Trabaja con obra social</span>}
                <span>Languages: {therapist.languages.join(", ")}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-left">
                  <span className="text-lg font-semibold text-foreground">${therapist.pricePerSession}</span>
                  <span className="text-sm text-muted-foreground">/session</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" onClick={() => setShowBookingModal(true)}>
                    Agendar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} therapist={therapist} />
    </>
  )
}
