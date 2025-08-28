"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Car, Search } from "lucide-react"
import { Model } from "@/types"
import { SearchInput } from "@/components/search-input"

interface ModelSwitcherProps {
  models: Model[]
  currentModel: string
  currentBrand: string
}

export function ModelSwitcher({ models, currentModel, currentBrand }: ModelSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const currentModelData = models.find(m => m.slug === currentModel)
  
  const filteredModels = models.filter(model => 
    model.brandId === currentBrand && 
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleModelSelect = (model: Model) => {
    router.push(`/manual/${model.brandId}/${model.slug}`)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="justify-between min-w-48"
      >
        <div className="flex items-center space-x-2">
          <Car className="h-4 w-4" />
          <span>{currentModelData?.name || currentModel}</span>
        </div>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <Card className="absolute top-full mt-1 w-80 z-20">
            <CardContent className="p-3">
              <div className="mb-3">
                <SearchInput
                  placeholder="Search models..."
                  onSearch={setSearchQuery}
                  value={searchQuery}
                />
              </div>
              
              <div className="max-h-60 overflow-y-auto space-y-1">
                {filteredModels.map((model) => (
                  <Button
                    key={model.id}
                    variant="ghost"
                    className="w-full justify-start h-auto p-2"
                    onClick={() => handleModelSelect(model)}
                  >
                    <div className="flex items-center space-x-3">
                      <img 
                        src={model.image} 
                        alt={model.name}
                        className="w-12 h-8 object-cover rounded"
                      />
                      <span>{model.name}</span>
                    </div>
                  </Button>
                ))}
              </div>
              
              {filteredModels.length === 0 && (
                <div className="text-center py-4 text-muted-foreground">
                  <Search className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">No models found</p>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
