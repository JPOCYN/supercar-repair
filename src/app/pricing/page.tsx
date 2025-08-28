import { Navigation } from "@/components/navigation"
import { PricingCards } from "@/components/pricing-cards"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Gift, Users, Headphones } from "lucide-react"
import Link from "next/link"

// Import pricing data
import pricingPlans from "@/data/pricing-plans.json"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant access to professional McLaren repair manuals. 
            Purchase activation codes on our Shopify store and redeem them in your account.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mb-16">
          <PricingCards plans={pricingPlans} />
        </div>

        {/* How to Purchase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How to Get Access</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>1. Buy on Shopify</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Purchase your activation code from our secure Shopify store. 
                  Choose the plan that fits your needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Gift className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>2. Redeem Code</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Go to your account settings and enter your activation code. 
                  Access is activated immediately upon redemption.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>3. Access Manuals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Browse and access all McLaren repair manuals. 
                  Download sections for offline use in your workshop.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            Already have an activation code? Redeem it now in your account settings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="https://your-store.myshopify.com" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Shop Activation Codes
              </a>
            </Button>
            <Link href="/account">
              <Button variant="outline" size="lg">
                <Gift className="h-4 w-4 mr-2" />
                Redeem in Account
              </Button>
            </Link>
          </div>
        </div>

        {/* Support */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <Headphones className="h-8 w-8 mx-auto mb-2 text-primary" />
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our support team is available to help with activation codes, 
                technical issues, and manual access questions.
              </CardDescription>
              <Button variant="outline" className="mt-4">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
