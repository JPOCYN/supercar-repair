"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ModelSwitcher } from "@/components/model-switcher"
import { SectionNav } from "@/components/section-nav"
import { EmptyState } from "@/components/empty-state"
import { LockedOverlay } from "@/components/locked-overlay"
import { SearchInput } from "@/components/search-input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, ArrowRight } from "lucide-react"

// Import mock data
import modelsData from "@/data/models.json"
import sectionsData from "@/data/sections.json"
import manualPagesData from "@/data/manual-pages.json"
import { Model, Section, ManualPage } from "@/types"

interface ManualPageProps {
  params: Promise<{
    brand: string
    model: string
  }>
}

export default function ManualOverviewPage({ params }: ManualPageProps) {
  const [resolvedParams, setResolvedParams] = useState<{
    brand: string
    model: string
  } | null>(null)
  const { data: session } = useSession()
  const router = useRouter()
  
  const models = modelsData as Model[]
  const sections = sectionsData as Section[]
  const pages = manualPagesData as ManualPage[]

  useEffect(() => {
    params.then(setResolvedParams)
  }, [params])

  // Show loading state while params are being resolved
  if (!resolvedParams) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading manual...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentModel = models.find(m => m.slug === resolvedParams.model && m.brandId === resolvedParams.brand)
  const brandModels = models.filter(m => m.brandId === resolvedParams.brand)
  
  const hasAccess = session?.user?.planType && session?.user?.expiresAt && 
                   new Date(session.user.expiresAt) > new Date()

  useEffect(() => {
    if (!hasAccess) {
      // Could show locked overlay or redirect
    }
  }, [hasAccess])

  if (!currentModel) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <EmptyState
            variant="models"
            title="Model Not Found"
            description="The requested model could not be found. Please check the URL or browse available models."
            action={{
              label: "Browse Models",
              onClick: () => router.push("/browse")
            }}
          />
        </div>
      </div>
    )
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <LockedOverlay 
          title="Manual Access Required"
          description={`Purchase an activation code to unlock the ${currentModel.name} repair manual.`}
        />
      </div>
    )
  }

  const modelPages = pages.filter(p => p.modelId === currentModel.id)
  const sectionsWithPages = sections.map(section => ({
    ...section,
    pageCount: modelPages.filter(p => p.sectionId === section.id).length
  }))

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <Breadcrumbs 
            items={[
              { label: "Manuals" },
              { label: resolvedParams.brand.toUpperCase() },
              { label: currentModel.name }
            ]}
          />
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{currentModel.name} Repair Manual</h1>
              <p className="text-muted-foreground">
                Complete technical documentation and repair procedures
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <ModelSwitcher 
                models={brandModels}
                currentModel={resolvedParams.model}
                currentBrand={resolvedParams.brand}
              />
              <div className="w-64">
                <SearchInput 
                  placeholder="Search manual content..."
                  onSearch={() => {}} // TODO: Implement search
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          <SectionNav
            sections={sections}
            pages={modelPages}
            currentBrand={resolvedParams.brand}
            currentModel={resolvedParams.model}
          />
          
          <div className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Book className="h-6 w-6" />
                  <span>Manual Sections</span>
                </CardTitle>
                <CardDescription>
                  Select a section to view detailed repair procedures and technical information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {sectionsWithPages.map((section) => (
                    <Card key={section.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold mb-1">{section.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {section.pageCount} page{section.pageCount !== 1 ? 's' : ''} available
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => router.push(`/manual/${resolvedParams.brand}/${resolvedParams.model}/${section.slug}`)}
                            disabled={section.pageCount === 0}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {sectionsWithPages.every(s => s.pageCount === 0) && (
                  <EmptyState
                    title="No Content Available"
                    description="Manual content for this model is currently being updated. Please check back soon."
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
