import { Button } from "@/components/ui/button"
import { FileX, Search, Lock, Car } from "lucide-react"

interface EmptyStateProps {
  variant?: "search" | "locked" | "general" | "models"
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function EmptyState({ variant = "general", title, description, action }: EmptyStateProps) {
  const getIcon = () => {
    switch (variant) {
      case "search":
        return <Search className="h-12 w-12 text-muted-foreground" />
      case "locked":
        return <Lock className="h-12 w-12 text-muted-foreground" />
      case "models":
        return <Car className="h-12 w-12 text-muted-foreground" />
      default:
        return <FileX className="h-12 w-12 text-muted-foreground" />
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-4">
        {getIcon()}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md">{description}</p>
      {action && (
        <Button onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  )
}
