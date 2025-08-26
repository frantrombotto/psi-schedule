"use client"

import { useState, useMemo, useEffect } from "react"
import { Search, Filter, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TherapistCard } from "@/components/therapist-card"
import { FilterPanel } from "@/components/filter-panel"
import { SessionType } from "@/components/therapist-card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type Therapist = {
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


export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [therapists, setTherapists] = useState<Therapist[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)
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
    return therapists.filter((therapist) => {
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
  }, [searchQuery, filters, therapists])

  const fetchTherapists = async (query: string) => {
    setIsLoading(true)
    setApiError(null)
    try {
      const url = new URL("/api/therapists", window.location.origin)
      if (query.trim()) url.searchParams.set("search", query.trim())
      const res = await fetch(url.toString(), { cache: "no-store" })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = await res.json()
      const data = (json?.data || []).map((t: any) => ({
        ...t,
        sessionTypes: t.sessionTypes || [],
        nextAvailable: t.nextAvailable ?? "",
      })) as Therapist[]
      setTherapists(data)
    } catch (err: any) {
      setApiError(err?.message || "Error fetching therapists")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTherapists("")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              <Button size="lg" className="h-12 px-8" onClick={() => fetchTherapists(searchQuery)} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Buscando...
                  </>
                ) : (
                  "Buscar"
                )}
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
              {isLoading
                ? "Cargando..."
                : apiError
                ? "Ocurrió un error al cargar los psicólogos"
                : `Mostrando ${filteredTherapists.length} psicólogo${filteredTherapists.length !== 1 ? "s" : ""}`}
            </p>
          </div>

          {/* Filters now appear in a Popover; no inline panel here to avoid layout shift */}
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-card rounded-xl border p-6 animate-pulse">
                  <div className="flex items-start space-x-4">
                    <div className="h-16 w-16 rounded-full bg-muted" />
                    <div className="flex-1 space-y-3">
                      <div className="h-4 w-1/3 bg-muted rounded" />
                      <div className="h-3 w-2/3 bg-muted rounded" />
                      <div className="h-3 w-1/2 bg-muted rounded" />
                      <div className="h-8 w-full bg-muted rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : apiError ? (
            <div className="text-center py-12">
              <p className="text-lg text-destructive mb-4">{apiError}</p>
              <Button variant="outline" onClick={() => fetchTherapists(searchQuery)}>
                Reintentar
              </Button>
            </div>
          ) : filteredTherapists.length === 0 ? (
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
