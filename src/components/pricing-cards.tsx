"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ExternalLink } from "lucide-react"
import { PricingPlan } from "@/types"

interface PricingCardsProps {
  plans: PricingPlan[]
}

export function PricingCards({ plans }: PricingCardsProps) {
  const handleBuyCode = (planId: string) => {
    // In a real app, this would redirect to Shopify
    const shopifyUrl = `https://your-store.myshopify.com/products/mclaren-${planId}-access-code`
    window.open(shopifyUrl, '_blank')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((plan) => (
        <Card key={plan.id} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
          {plan.popular && (
            <Badge className="absolute -top-2 left-1/2 -translate-x-1/2">
              Most Popular
            </Badge>
          )}
          
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{plan.name}</CardTitle>
            <CardDescription>{plan.duration}</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">{plan.price}</span>
            </div>
          </CardHeader>
          
          <CardContent>
            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          
          <CardFooter>
            <Button 
              className="w-full" 
              variant={plan.popular ? "default" : "outline"}
              onClick={() => handleBuyCode(plan.id)}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Buy Code on Shopify
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
