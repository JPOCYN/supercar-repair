"use client"

import { Badge } from "@/components/ui/badge"
import { formatTimeLeft } from "@/lib/utils"
import { Clock } from "lucide-react"

interface PlanBadgeProps {
  planType?: string
  expiresAt?: string
}

export function PlanBadge({ planType, expiresAt }: PlanBadgeProps) {
  if (!planType || !expiresAt) {
    return (
      <Badge variant="outline" className="gap-1">
        <Clock className="h-3 w-3" />
        No Plan
      </Badge>
    )
  }

  const expirationDate = new Date(expiresAt)
  const timeLeft = formatTimeLeft(expirationDate)
  const isExpired = expirationDate.getTime() <= Date.now()

  const planNames = {
    day: "Day",
    week: "Week", 
    month: "Month",
    year: "Year"
  }

  const planName = planNames[planType as keyof typeof planNames] || planType

  return (
    <Badge 
      variant={isExpired ? "destructive" : "default"}
      className="gap-1"
    >
      <Clock className="h-3 w-3" />
      {planName} - {timeLeft}
    </Badge>
  )
}
