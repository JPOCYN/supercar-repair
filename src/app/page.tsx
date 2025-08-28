import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Car, Shield, Search, Download, Clock, Zap, Star, Users, ArrowRight, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8 fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Next-gen repair documentation</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 fade-in-up stagger-1">
            <span className="gradient-text">Premium</span><br />
            <span className="text-foreground">Supercar Manuals</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed fade-in-up stagger-2">
            Unlock professional-grade McLaren repair documentation. Trusted by certified technicians worldwide 
            for precision diagnostics and comprehensive procedures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-in-up stagger-3">
            <Link href="/login">
              <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 glow-effect group">
                <span>Start Repairing</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 glass-card hover:bg-primary/5">
                Try Free Demo
              </Button>
            </Link>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground fade-in-up stagger-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>5,000+ Professional Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Certified Documentation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="gradient-text">Professionals</span> Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the next generation of automotive documentation with features designed for the modern workshop.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Factory Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    Official documentation sourced directly from McLaren engineering specifications and service protocols.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    Instant search across thousands of procedures with AI-powered content discovery and smart suggestions.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Work Anywhere</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    Seamless offline synchronization ensures you have access to critical information even without internet.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Always Current</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    Real-time updates deliver the latest technical bulletins and procedure revisions directly to your workspace.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started in <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of professionals who trust our platform for their McLaren service needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-20 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary to-purple-500"></div>
            <div className="hidden md:block absolute top-20 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary to-purple-500"></div>
            
            <div className="text-center group relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-2xl font-bold text-white shadow-2xl group-hover:scale-110 transition-transform glow-effect">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Purchase Access</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Choose your preferred plan duration and purchase activation codes through our secure platform.
              </p>
            </div>

            <div className="text-center group relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-2xl font-bold text-white shadow-2xl group-hover:scale-110 transition-transform glow-effect">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Activate Account</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Create your free account and redeem your activation code to unlock premium features instantly.
              </p>
            </div>

            <div className="text-center group relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-2xl font-bold text-white shadow-2xl group-hover:scale-110 transition-transform glow-effect">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Start Repairing</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Access comprehensive McLaren documentation and elevate your service capabilities today.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/pricing">
              <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 glow-effect">
                View Pricing Plans
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-muted/30 to-background border-t border-primary/10">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl gradient-text">Supercar Repair</span>
            </div>
            
            <p className="text-muted-foreground mb-2 text-lg">
              © 2024 Supercar Repair Manuals. All rights reserved.
            </p>
            <p className="text-muted-foreground/60 text-sm">
              This product is not affiliated with or endorsed by McLaren Automotive Limited.
            </p>
            
            <div className="mt-8 pt-8 border-t border-primary/10">
              <p className="text-xs text-muted-foreground/40">
                Professional automotive documentation platform trusted by certified technicians worldwide.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
