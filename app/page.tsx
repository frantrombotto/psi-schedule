"use client"

import { useState, useMemo } from "react"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TherapistCard } from "@/components/therapist-card"
import { FilterPanel } from "@/components/filter-panel"
import { SessionType } from "@/components/therapist-card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const sampleTherapists = [
  {
    id: "1",
    name: "Lic. Sofía Martínez",
    credentials: "Licenciada en Psicología, Mat. N° 23456 (Colegio de Psicólogos CABA)",
    specialties: ["Ansiedad", "Depresión", "Trauma", "Trastorno por Estrés Postraumático (TEPT)"],
    rating: 4.9,
    reviewCount: 127,
    pricePerSession: 150,
    location: "Palermo, Ciudad de Buenos Aires",
    nextAvailable: "Hoy 15:00",
    avatar: "/professional-woman-therapist.png",
    acceptsInsurance: true,
    sessionTypes: [SessionType.VIDEO, SessionType.IN_PERSON],
    languages: ["Español", "Inglés"],
    yearsExperience: 12,
  },
  {
    id: "2",
    name: "Lic. Martín Chen",
    credentials: "Licenciado en Psicología, Especialista en Terapia Familiar, Mat. N° 34567 (Colegio de Psicólogos PBA)",
    specialties: ["Terapia de pareja", "Terapia familiar", "Comunicación"],
    rating: 4.8,
    reviewCount: 89,
    pricePerSession: 180,
    location: "San Isidro, Provincia de Buenos Aires",
    nextAvailable: "Mañana 10:00",
    avatar: "/professional-asian-male-therapist.png",
    acceptsInsurance: false,
    sessionTypes: [SessionType.VIDEO, SessionType.IN_PERSON],
    languages: ["Español", "Portugués"],
    yearsExperience: 8,
  },
  {
    id: "3",
    name: "Dra. Emilia Rodríguez",
    credentials: "Doctora en Psicología, Mat. N° 45678 (Colegio de Psicólogos de Córdoba)",
    specialties: ["TDAH", "Autismo", "Terapia infantil", "Problemas conductuales"],
    rating: 4.9,
    reviewCount: 156,
    pricePerSession: 120,
    location: "Córdoba, Córdoba",
    nextAvailable: "Lunes 14:00",
    avatar: "/professional-latina-female-therapist.png",
    acceptsInsurance: true,
    sessionTypes: [SessionType.VIDEO, SessionType.IN_PERSON],
    languages: ["Español", "Inglés"],
    yearsExperience: 15,
  },
  {
    id: "4",
    name: "Lic. Juan Pérez",
    credentials: "Psicólogo Clínico, Mat. N° 56789 (Colegio de Psicólogos de Rosario)",
    specialties: ["Adicciones", "Abuso de sustancias", "Manejo de la ira"],
    rating: 4.7,
    reviewCount: 73,
    pricePerSession: 140,
    location: "Rosario, Santa Fe",
    nextAvailable: "Miércoles 16:00",
    avatar: "/professional-black-male-therapist.png",
    acceptsInsurance: true,
    sessionTypes: [SessionType.VIDEO],
    languages: ["Español"],
    yearsExperience: 10,
  },
  {
    id: "5",
    name: "Lic. Lucía Gómez",
    credentials: "Licenciada en Psicología, Mat. N° 67890 (Colegio de Psicólogos de La Plata)",
    specialties: ["Trastornos alimentarios", "Imagen corporal", "Autoestima"],
    rating: 4.8,
    reviewCount: 94,
    pricePerSession: 160,
    location: "Mar del Plata, Provincia de Buenos Aires",
    nextAvailable: "Viernes 11:00",
    avatar: "/professional-blonde-female-therapist.png",
    acceptsInsurance: false,
    sessionTypes: [SessionType.VIDEO, SessionType.IN_PERSON],
    languages: ["Español"],
    yearsExperience: 9,
  },
  {
    id: "6",
    name: "Lic. Diego Kim",
    credentials: "Licenciado en Psicología, Mat. N° 78901 (Colegio de Psicólogos CABA)",
    specialties: ["Ansiedad", "TOC", "Trastornos de pánico", "Mindfulness"],
    rating: 4.9,
    reviewCount: 112,
    pricePerSession: 135,
    location: "Belgrano, Ciudad de Buenos Aires",
    nextAvailable: "Hoy 18:00",
    avatar: "/professional-korean-male-therapist.png",
    acceptsInsurance: true,
    sessionTypes: [SessionType.VIDEO, SessionType.IN_PERSON],
    languages: ["Español", "Inglés"],
    yearsExperience: 7,
  },
];


export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    specialties: [],
    priceRange: [50, 300] as [number, number],
    acceptsInsurance: null,
    sessionTypes: [],
    languages: [],
    minRating: 0,
  })

  const filteredTherapists = useMemo(() => {
    return sampleTherapists.filter((therapist) => {
      // Text search
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesName = therapist.name.toLowerCase().includes(query)
        const matchesSpecialty = therapist.specialties.some((s) => s.toLowerCase().includes(query))
        const matchesCredentials = therapist.credentials.toLowerCase().includes(query)
        if (!matchesName && !matchesSpecialty && !matchesCredentials) return false
      }

      // Specialty filter
      if (filters.specialties.length > 0) {
        const hasMatchingSpecialty = filters.specialties.some((specialty) => therapist.specialties.includes(specialty))
        if (!hasMatchingSpecialty) return false
      }

      // Price range filter
      if (therapist.pricePerSession < filters.priceRange[0] || therapist.pricePerSession > filters.priceRange[1]) {
        return false
      }

      // Insurance filter
      if (filters.acceptsInsurance !== null) {
        if (therapist.acceptsInsurance !== filters.acceptsInsurance) return false
      }

      // Session types filter
      if (filters.sessionTypes.length > 0) {
        const hasMatchingSessionType = filters.sessionTypes.some((type) => therapist.sessionTypes.includes(type))
        if (!hasMatchingSessionType) return false
      }

      // Languages filter
      if (filters.languages.length > 0) {
        const hasMatchingLanguage = filters.languages.some((language) => therapist.languages.includes(language))
        if (!hasMatchingLanguage) return false
      }

      // Rating filter
      if (therapist.rating < filters.minRating) return false

      return true
    })
  }, [searchQuery, filters])

  const getActiveFilterCount = () => {
    let count = 0
    if (filters.specialties.length > 0) count++
    if (filters.priceRange[0] > 50 || filters.priceRange[1] < 300) count++
    if (filters.acceptsInsurance !== null) count++
    if (filters.sessionTypes.length > 0) count++
    if (filters.languages.length > 0) count++
    if (filters.minRating > 0) count++
    return count
  }

  const removeSpecialtyFilter = (specialty: string) => {
    setFilters((prev) => ({
      ...prev,
      specialties: prev.specialties.filter((s) => s !== specialty),
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold">Psi Mammoliti</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                Encuentra tu psicólogo
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                Acerca de nosotros
              </a>
              <Button variant="secondary" size="sm">
                Iniciar sesión
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Encuentra el psicólogo perfecto para ti</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Conecta con profesionales de salud mental según tu necesidad. Agendá tu sesión de forma rápida y segura.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Busca por especialidad, nombre o credenciales..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Popover open={filtersOpen} onOpenChange={setFiltersOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className={getActiveFilterCount() > 0 ? "bg-primary/10 border-primary" : ""}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                    {getActiveFilterCount() > 0 && (
                      <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                        {getActiveFilterCount()}
                      </Badge>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <FilterPanel
                    filters={filters}
                    onFiltersChange={setFilters}
                    onClose={() => setFiltersOpen(false)}
                  />
                </PopoverContent>
              </Popover>
              <div className="hidden md:flex items-center space-x-2">
                {filters.specialties.slice(0, 4).map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="flex items-center space-x-1">
                    <span>{specialty}</span>
                    <X
                      className="h-3 w-3 cursor-pointer hover:text-destructive"
                      onClick={() => removeSpecialtyFilter(specialty)}
                    />
                  </Badge>
                ))}
                {filters.specialties.length > 4 && (
                  <Badge variant="secondary">+{filters.specialties.length - 4} more</Badge>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Mostrando {filteredTherapists.length} psicólogo{filteredTherapists.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Filters now appear in a Popover; no inline panel here to avoid layout shift */}
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTherapists.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No se encontraron psicólogos que coincidan con tus criterios.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setFilters({
                    specialties: [],
                    priceRange: [50, 300],
                    acceptsInsurance: null,
                    sessionTypes: [],
                    languages: [],
                    minRating: 0,
                  })
                }}
              >
                Limpiar todos los filtros
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTherapists.map((therapist) => (
                <TherapistCard key={therapist.id} therapist={therapist} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
