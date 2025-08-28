import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Car, Shield, Search, Download, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Professional Supercar Repair Manuals
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access comprehensive repair documentation for McLaren supercars. 
            Professional-grade manuals with detailed procedures, diagnostics, and technical specifications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="text-lg px-8 py-6">
                Login to Access
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Manuals?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Professional Grade</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Factory-level documentation used by certified technicians worldwide.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Search className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Searchable Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Find exactly what you need with our advanced search functionality.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Download className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Offline Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Download sections for offline access in your workshop.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Always Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Regular updates with the latest service bulletins and procedures.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Purchase on Shopify</h3>
              <p className="text-muted-foreground">
                Buy activation codes for your desired plan duration from our Shopify store.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Redeem Your Code</h3>
              <p className="text-muted-foreground">
                Sign up for free, then redeem your activation code in your account settings.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Access Manuals</h3>
              <p className="text-muted-foreground">
                Unlock complete access to all McLaren repair manuals and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Car className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Supercar Repair</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Supercar Repair Manuals. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This product is not affiliated with or endorsed by McLaren Automotive Limited.
          </p>
        </div>
      </footer>
    </div>
  )
}
