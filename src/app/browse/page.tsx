"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Navigation } from "@/components/navigation"
import { BrandPills } from "@/components/brand-pills"
import { SearchInput } from "@/components/search-input"
import { ModelGrid } from "@/components/model-grid"
import { LockedOverlay } from "@/components/locked-overlay"
import { Brand, Model } from "@/types"

// Import mock data
import brandsData from "@/data/brands.json"
import modelsData from "@/data/models.json"

export default function BrowsePage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [selectedBrand, setSelectedBrand] = useState("mclaren")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const brands = brandsData as Brand[]
  const models = modelsData as Model[]

  const filteredModels = useMemo(() => {
    return models.filter(model => {
      const matchesBrand = model.brandId === selectedBrand
      const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesBrand && matchesSearch
    })
  }, [models, selectedBrand, searchQuery])

  const hasAccess = session?.user?.planType && session?.user?.expiresAt && 
                   new Date(session.user.expiresAt) > new Date()

  const handleViewManual = (model: Model) => {
    if (hasAccess) {
      router.push(`/manual/${model.brandId}/${model.slug}`)
    }
    // If no access, the ModelCard will show locked state
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Repair Manuals</h1>
          <p className="text-muted-foreground">
            Access comprehensive repair documentation for professional supercar maintenance.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Select Brand</h2>
          <BrandPills
            brands={brands}
            selectedBrand={selectedBrand}
            onBrandSelect={setSelectedBrand}
          />
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Search Models</h2>
          <div className="max-w-md">
            <SearchInput
              placeholder="Search by model name..."
              onSearch={setSearchQuery}
              value={searchQuery}
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">
            {brands.find(b => b.slug === selectedBrand)?.name} Models
          </h2>
          <ModelGrid
            models={filteredModels}
            isLoading={isLoading}
            onViewManual={handleViewManual}
          />
        </div>
      </div>

      {/* Show locked overlay if user tries to access without subscription */}
      {/* This could be triggered by a state variable if needed */}
    </div>
  )
}
