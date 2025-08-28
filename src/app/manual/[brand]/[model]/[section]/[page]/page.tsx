"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ModelSwitcher } from "@/components/model-switcher"
import { SectionNav } from "@/components/section-nav"
import { ManualContent } from "@/components/manual-content"
import { EmptyState } from "@/components/empty-state"
import { LockedOverlay } from "@/components/locked-overlay"
import { SearchInput } from "@/components/search-input"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Import mock data
import modelsData from "@/data/models.json"
import sectionsData from "@/data/sections.json"
import manualPagesData from "@/data/manual-pages.json"
import { Model, Section, ManualPage } from "@/types"

interface ManualPageProps {
  params: {
    brand: string
    model: string
    section: string
    page: string
  }
}

export default function ManualPageView({ params }: ManualPageProps) {
  const { data: session } = useSession()
  const router = useRouter()
  
  const models = modelsData as Model[]
  const sections = sectionsData as Section[]
  const pages = manualPagesData as ManualPage[]

  const currentModel = models.find(m => m.slug === params.model && m.brandId === params.brand)
  const currentSection = sections.find(s => s.slug === params.section)
  const currentPage = pages.find(p => 
    p.modelId === currentModel?.id && 
    p.sectionId === currentSection?.id && 
    p.slug === params.page
  )
  
  const brandModels = models.filter(m => m.brandId === params.brand)
  const modelPages = pages.filter(p => p.modelId === currentModel?.id)
  
  const hasAccess = session?.user?.planType && session?.user?.expiresAt && 
                   new Date(session.user.expiresAt) > new Date()

  if (!currentModel || !currentSection || !currentPage) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <EmptyState
            title="Page Not Found"
            description="The requested manual page could not be found. Please check the URL or browse available content."
            action={{
              label: "Back to Manual",
              onClick: () => router.push(`/manual/${params.brand}/${params.model}`)
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

  // Get navigation pages for prev/next
  const sectionPages = modelPages.filter(p => p.sectionId === currentSection.id)
  const currentPageIndex = sectionPages.findIndex(p => p.id === currentPage.id)
  const prevPage = currentPageIndex > 0 ? sectionPages[currentPageIndex - 1] : null
  const nextPage = currentPageIndex < sectionPages.length - 1 ? sectionPages[currentPageIndex + 1] : null

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <Breadcrumbs 
            items={[
              { label: "Manuals", href: "/browse" },
              { label: params.brand.toUpperCase(), href: `/manual/${params.brand}/${params.model}` },
              { label: currentModel.name, href: `/manual/${params.brand}/${params.model}` },
              { label: currentSection.name },
              { label: currentPage.title }
            ]}
          />
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {currentSection.name} • {currentModel.name}
              </p>
              <h1 className="text-3xl font-bold">{currentPage.title}</h1>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <ModelSwitcher 
                models={brandModels}
                currentModel={params.model}
                currentBrand={params.brand}
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
            currentBrand={params.brand}
            currentModel={params.model}
            currentSection={params.section}
            currentPage={params.page}
          />
          
          <div className="flex-1">
            <div className="bg-background">
              <ManualContent 
                content={currentPage.content}
                title={currentPage.title}
              />
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-12 pt-6 border-t">
                {prevPage ? (
                  <Button 
                    variant="outline"
                    onClick={() => router.push(`/manual/${params.brand}/${params.model}/${params.section}/${prevPage.slug}`)}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {prevPage.title}
                  </Button>
                ) : (
                  <div />
                )}
                
                {nextPage ? (
                  <Button 
                    onClick={() => router.push(`/manual/${params.brand}/${params.model}/${params.section}/${nextPage.slug}`)}
                  >
                    {nextPage.title}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
