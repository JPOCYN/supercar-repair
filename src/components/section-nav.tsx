"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { Section, ManualPage } from "@/types"
import { cn } from "@/lib/utils"

interface SectionNavProps {
  sections: Section[]
  pages: ManualPage[]
  currentBrand: string
  currentModel: string
  currentSection?: string
  currentPage?: string
}

export function SectionNav({ 
  sections, 
  pages, 
  currentBrand, 
  currentModel, 
  currentSection, 
  currentPage 
}: SectionNavProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(currentSection ? [currentSection] : [])
  )
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleSection = (sectionSlug: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionSlug)) {
      newExpanded.delete(sectionSlug)
    } else {
      newExpanded.add(sectionSlug)
    }
    setExpandedSections(newExpanded)
  }

  const getSectionPages = (sectionId: string) => {
    return pages.filter(page => page.sectionId === sectionId)
  }

  const NavContent = () => (
    <div className="space-y-2">
      {sections.map((section) => {
        const sectionPages = getSectionPages(section.id)
        const isExpanded = expandedSections.has(section.slug)
        const isCurrentSection = currentSection === section.slug

        return (
          <div key={section.id}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-between text-left font-medium",
                isCurrentSection && "bg-muted"
              )}
              onClick={() => toggleSection(section.slug)}
            >
              <span>{section.name}</span>
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
            
            {isExpanded && sectionPages.length > 0 && (
              <div className="ml-4 space-y-1 mt-1">
                {sectionPages.map((page) => (
                  <Link
                    key={page.id}
                    href={`/manual/${currentBrand}/${currentModel}/${section.slug}/${page.slug}`}
                    className={cn(
                      "block px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors",
                      currentPage === page.slug && "bg-primary text-primary-foreground"
                    )}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full justify-start"
        >
          <Menu className="h-4 w-4 mr-2" />
          Manual Sections
        </Button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="fixed top-0 left-0 h-full w-80 bg-background border-r p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Manual Sections</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <NavContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <div className="sticky top-4 bg-background border rounded-lg p-4">
          <h2 className="font-semibold mb-4">Manual Sections</h2>
          <NavContent />
        </div>
      </div>
    </>
  )
}
