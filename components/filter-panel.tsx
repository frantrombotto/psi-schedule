"use client"

import { useState } from "react"
import { X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface FilterPanelProps {
  filters: {
    specialties: string[]
    priceRange: [number, number]
    acceptsInsurance: boolean | null
    sessionTypes: string[]
    languages: string[]
    minRating: number
  }
  onFiltersChange: (filters: any) => void
  onClose: () => void
}

const availableSpecialties = [
  "Anxiety",
  "Depression",
  "Trauma",
  "PTSD",
  "Couples Therapy",
  "Family Therapy",
  "ADHD",
  "Autism",
  "Child Therapy",
  "Addiction",
  "Substance Abuse",
  "Eating Disorders",
  "OCD",
  "Panic Disorders",
  "Bipolar",
  "Grief",
  "Anger Management",
  "Self-Esteem",
]

const availableSessionTypes = ["video", "in-person", "phone"]
const availableLanguages = ["English", "Spanish", "Mandarin", "Korean", "French", "German"]

export function FilterPanel({ filters, onFiltersChange, onClose }: FilterPanelProps) {
  const [openSections, setOpenSections] = useState({
    specialties: true,
    price: true,
    insurance: true,
    sessionTypes: true,
    languages: false,
    rating: false,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const updateFilter = (key: string, value: any) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const toggleSpecialty = (specialty: string) => {
    const newSpecialties = filters.specialties.includes(specialty)
      ? filters.specialties.filter((s) => s !== specialty)
      : [...filters.specialties, specialty]
    updateFilter("specialties", newSpecialties)
  }

  const toggleSessionType = (type: string) => {
    const newTypes = filters.sessionTypes.includes(type)
      ? filters.sessionTypes.filter((t) => t !== type)
      : [...filters.sessionTypes, type]
    updateFilter("sessionTypes", newTypes)
  }

  const toggleLanguage = (language: string) => {
    const newLanguages = filters.languages.includes(language)
      ? filters.languages.filter((l) => l !== language)
      : [...filters.languages, language]
    updateFilter("languages", newLanguages)
  }

  const clearAllFilters = () => {
    onFiltersChange({
      specialties: [],
      priceRange: [50, 300],
      acceptsInsurance: null,
      sessionTypes: [],
      languages: [],
      minRating: 0,
    })
  }

  return (
    <Card className="w-80 h-fit">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg">Filters</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear All
          </Button>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 max-h-96 overflow-y-auto">
        {/* Specialties */}
        <Collapsible open={openSections.specialties} onOpenChange={() => toggleSection("specialties")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <Label className="text-sm font-medium">Specialties</Label>
            {openSections.specialties ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            {availableSpecialties.map((specialty) => (
              <div key={specialty} className="flex items-center space-x-2">
                <Checkbox
                  id={specialty}
                  checked={filters.specialties.includes(specialty)}
                  onCheckedChange={() => toggleSpecialty(specialty)}
                />
                <Label htmlFor={specialty} className="text-sm">
                  {specialty}
                </Label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Price Range */}
        <Collapsible open={openSections.price} onOpenChange={() => toggleSection("price")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <Label className="text-sm font-medium">Price Range</Label>
            {openSections.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-2">
            <div className="px-2">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => updateFilter("priceRange", value)}
                max={300}
                min={50}
                step={10}
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Insurance */}
        <Collapsible open={openSections.insurance} onOpenChange={() => toggleSection("insurance")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <Label className="text-sm font-medium">Insurance</Label>
            {openSections.insurance ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="accepts-insurance"
                checked={filters.acceptsInsurance === true}
                onCheckedChange={(checked) => updateFilter("acceptsInsurance", checked ? true : null)}
              />
              <Label htmlFor="accepts-insurance" className="text-sm">
                Accepts Insurance
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="no-insurance"
                checked={filters.acceptsInsurance === false}
                onCheckedChange={(checked) => updateFilter("acceptsInsurance", checked ? false : null)}
              />
              <Label htmlFor="no-insurance" className="text-sm">
                Self-Pay Only
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Session Types */}
        <Collapsible open={openSections.sessionTypes} onOpenChange={() => toggleSection("sessionTypes")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <Label className="text-sm font-medium">Session Types</Label>
            {openSections.sessionTypes ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            {availableSessionTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  checked={filters.sessionTypes.includes(type)}
                  onCheckedChange={() => toggleSessionType(type)}
                />
                <Label htmlFor={type} className="text-sm capitalize">
                  {type.replace("-", " ")}
                </Label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Languages */}
        <Collapsible open={openSections.languages} onOpenChange={() => toggleSection("languages")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <Label className="text-sm font-medium">Languages</Label>
            {openSections.languages ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            {availableLanguages.map((language) => (
              <div key={language} className="flex items-center space-x-2">
                <Checkbox
                  id={language}
                  checked={filters.languages.includes(language)}
                  onCheckedChange={() => toggleLanguage(language)}
                />
                <Label htmlFor={language} className="text-sm">
                  {language}
                </Label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Rating */}
        <Collapsible open={openSections.rating} onOpenChange={() => toggleSection("rating")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <Label className="text-sm font-medium">Minimum Rating</Label>
            {openSections.rating ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-2">
            <div className="px-2">
              <Slider
                value={[filters.minRating]}
                onValueChange={(value) => updateFilter("minRating", value[0])}
                max={5}
                min={0}
                step={0.1}
                className="w-full"
              />
            </div>
            <div className="text-center text-sm text-muted-foreground">
              {filters.minRating.toFixed(1)} stars and above
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
