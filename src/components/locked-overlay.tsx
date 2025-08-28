import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, ShoppingCart } from "lucide-react"

interface LockedOverlayProps {
  title?: string
  description?: string
  showPricingButton?: boolean
}

export function LockedOverlay({ 
  title = "Manual Access Required",
  description = "Purchase an activation code to unlock all McLaren repair manuals.",
  showPricingButton = true
}: LockedOverlayProps) {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Lock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {showPricingButton && (
            <Link href="/pricing">
              <Button className="w-full">
                <ShoppingCart className="h-4 w-4 mr-2" />
                View Pricing Plans
              </Button>
            </Link>
          )}
          <Link href="/account">
            <Button variant="outline" className="w-full">
              Already Have a Code?
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
