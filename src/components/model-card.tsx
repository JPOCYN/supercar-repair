"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Model } from "@/types"
import { Lock, BookOpen } from "lucide-react"
import { useSession } from "next-auth/react"

interface ModelCardProps {
  model: Model
  onViewManual: (model: Model) => void
}

export function ModelCard({ model, onViewManual }: ModelCardProps) {
  const { data: session } = useSession()
  const hasAccess = session?.user?.planType && session?.user?.expiresAt && 
                   new Date(session.user.expiresAt) > new Date()

  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={model.image}
            alt={model.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="mb-2">{model.name}</CardTitle>
        <CardDescription className="mb-4">
          Complete repair manual with diagnostics, wiring diagrams, and maintenance procedures.
        </CardDescription>
        
        <Button 
          onClick={() => onViewManual(model)}
          className="w-full"
          variant={hasAccess ? "default" : "outline"}
        >
          {hasAccess ? (
            <>
              <BookOpen className="h-4 w-4 mr-2" />
              View Manual
            </>
          ) : (
            <>
              <Lock className="h-4 w-4 mr-2" />
              Manual Locked
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
