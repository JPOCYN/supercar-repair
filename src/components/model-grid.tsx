"use client"

import { Model } from "@/types"
import { ModelCard } from "@/components/model-card"
import { EmptyState } from "@/components/empty-state"
import { Skeleton } from "@/components/ui/skeleton"

interface ModelGridProps {
  models: Model[]
  isLoading?: boolean
  onViewManual: (model: Model) => void
}

export function ModelGrid({ models, isLoading, onViewManual }: ModelGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    )
  }

  if (models.length === 0) {
    return (
      <EmptyState
        title="No models found"
        description="Try adjusting your search criteria or check back later for new models."
        action={{
          label: "Clear Search",
          onClick: () => window.location.reload()
        }}
      />
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {models.map((model) => (
        <ModelCard
          key={model.id}
          model={model}
          onViewManual={onViewManual}
        />
      ))}
    </div>
  )
}
