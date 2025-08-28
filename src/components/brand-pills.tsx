"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brand } from "@/types"

interface BrandPillsProps {
  brands: Brand[]
  selectedBrand: string
  onBrandSelect: (brandSlug: string) => void
}

export function BrandPills({ brands, selectedBrand, onBrandSelect }: BrandPillsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {brands.map((brand) => (
        <Button
          key={brand.id}
          variant={selectedBrand === brand.slug ? "default" : "outline"}
          onClick={() => onBrandSelect(brand.slug)}
          disabled={!brand.enabled}
          className="relative"
        >
          {brand.name}
          {!brand.enabled && (
            <Badge variant="secondary" className="ml-2 text-xs">
              Soon
            </Badge>
          )}
        </Button>
      ))}
    </div>
  )
}
