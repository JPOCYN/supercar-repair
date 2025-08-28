import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Car, Shield, Search, Download, Clock, Zap, Star, Users, ArrowRight, Sparkles, ChevronRight, Play, Award, TrendingUp, Activity, Globe, Layers } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ultra-modern background */}
      <div className="absolute inset-0 mesh-bg opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/10 to-transparent rounded-full blur-3xl floating-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-[800px] h-[800px] bg-gradient-to-l from-blue-500/8 to-transparent rounded-full blur-3xl floating-fast"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-500/8 to-transparent rounded-full blur-3xl floating-slow" style={{animationDelay: '4s'}}></div>
      
      <Navigation />
      
      {/* Revolutionary Hero Section */}
      <section className="relative pt-40 pb-32 px-4">
        <div className="max-w-8xl mx-auto">
          <div className="text-center max-w-6xl mx-auto">
            {/* Announcement */}
            <div className="inline-flex items-center gap-3 ultra-glass rounded-full px-6 py-3 mb-12 slide-in-left">
              <div className="w-2 h-2 bg-emerald-400 rounded-full pulse-glow"></div>
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Revolutionary Documentation Platform
              </span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black mb-12 leading-none fade-in-up stagger-1">
              <span className="gradient-text block mb-4">SUPERCAR</span>
              <span className="text-foreground block">MASTERY</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-16 max-w-5xl mx-auto leading-relaxed font-light fade-in-up stagger-2">
              Elite McLaren documentation platform trusted by
              <span className="gradient-accent-text font-semibold"> 10,000+ professional technicians</span> worldwide.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 fade-in-up stagger-3">
              <Link href="/login">
                <Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 ultra-glow scale-on-hover group rounded-2xl font-semibold">
                  <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>Launch Platform</span>
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg" variant="outline" className="text-xl px-12 py-8 ultra-glass hover:bg-emerald-500/10 scale-on-hover rounded-2xl font-semibold border-emerald-500/20">
                  <span>Explore Demo</span>
                  <Sparkles className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>
            
            {/* Ultra Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto fade-in-up stagger-4">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">10K+</div>
                <div className="text-muted-foreground font-medium">Expert Technicians</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">99.9%</div>
                <div className="text-muted-foreground font-medium">Platform Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">24/7</div>
                <div className="text-muted-foreground font-medium">Global Access</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">4.9★</div>
                <div className="text-muted-foreground font-medium">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Features */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent"></div>
        
        <div className="max-w-8xl mx-auto relative">
          <div className="text-center mb-24 slide-in-right">
            <div className="inline-flex items-center gap-2 ultra-glass rounded-full px-6 py-2 mb-8">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Advanced Capabilities</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="gradient-text">NEXT-LEVEL</span><br />
              <span className="text-foreground">DOCUMENTATION</span>
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light">
              Powered by cutting-edge technology and trusted by industry leaders worldwide.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="group slide-in-left stagger-1">
              <div className="ultra-glass rounded-3xl p-12 scale-on-hover border border-emerald-500/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-blue-400"></div>
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-8 ultra-glow">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 gradient-text">Factory Certified</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Official McLaren engineering specifications and OEM-approved service protocols trusted by authorized dealers globally.
                </p>
                <div className="flex items-center text-emerald-400 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group slide-in-left stagger-2">
              <div className="ultra-glass rounded-3xl p-12 scale-on-hover border border-emerald-500/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-8 ultra-glow">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 gradient-accent-text">AI-Powered Search</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Revolutionary semantic search with machine learning algorithms that understand context and provide intelligent recommendations.
                </p>
                <div className="flex items-center text-blue-400 font-semibold">
                  <span>Explore AI</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group slide-in-left stagger-3">
              <div className="ultra-glass rounded-3xl p-12 scale-on-hover border border-emerald-500/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-8 ultra-glow">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 gradient-accent-text">Global Platform</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Cloud-native infrastructure with edge computing ensures lightning-fast access from any location worldwide, 24/7.
                </p>
                <div className="flex items-center text-purple-400 font-semibold">
                  <span>View Network</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
            <div className="text-center fade-in-up stagger-4">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center">
                <Shield className="h-8 w-8 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Enterprise Security</h4>
              <p className="text-muted-foreground">Bank-level encryption with SOC2 compliance</p>
            </div>
            
            <div className="text-center fade-in-up stagger-5">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                <Layers className="h-8 w-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Seamless Integration</h4>
              <p className="text-muted-foreground">API-first architecture with existing tools</p>
            </div>
            
            <div className="text-center fade-in-up stagger-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                <Download className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Offline Sync</h4>
              <p className="text-muted-foreground">Progressive web app with smart caching</p>
            </div>
            
            <div className="text-center fade-in-up stagger-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center">
                <Clock className="h-8 w-8 text-pink-400" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Real-time Updates</h4>
              <p className="text-muted-foreground">Live synchronization across all devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Process */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5"></div>
        
        <div className="max-w-8xl mx-auto relative">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 ultra-glass rounded-full px-6 py-2 mb-8 fade-in-up">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Streamlined Workflow</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight fade-in-up stagger-1">
              <span className="gradient-text">INSTANT</span><br />
              <span className="text-foreground">ACTIVATION</span>
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light fade-in-up stagger-2">
              Get professional access in under 60 seconds with our revolutionary onboarding process.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16 relative">
            {/* Animated connection paths */}
            <div className="hidden lg:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-full opacity-60"></div>
            <div className="hidden lg:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60"></div>
            
            {/* Step 1 */}
            <div className="text-center group relative z-10 fade-in-up stagger-3">
              <div className="w-32 h-32 mx-auto mb-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-4xl font-black text-white ultra-glow scale-on-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <span className="relative">01</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 gradient-text">Choose Plan</h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-sm mx-auto">
                Select from flexible subscription options designed for every workshop size and budget.
              </p>
              <div className="ultra-glass rounded-2xl p-6 border border-emerald-500/10">
                <div className="text-emerald-400 font-semibold text-sm mb-2">STARTING AT</div>
                <div className="text-3xl font-black text-foreground">$29<span className="text-lg text-muted-foreground">/mo</span></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center group relative z-10 fade-in-up stagger-4">
              <div className="w-32 h-32 mx-auto mb-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-4xl font-black text-white ultra-glow scale-on-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <span className="relative">02</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 gradient-accent-text">Instant Setup</h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-sm mx-auto">
                Automated account provisioning with immediate access to your personalized dashboard and tools.
              </p>
              <div className="ultra-glass rounded-2xl p-6 border border-blue-500/10">
                <div className="text-blue-400 font-semibold text-sm mb-2">SETUP TIME</div>
                <div className="text-3xl font-black text-foreground">&lt; 60<span className="text-lg text-muted-foreground">sec</span></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center group relative z-10 fade-in-up stagger-5">
              <div className="w-32 h-32 mx-auto mb-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-4xl font-black text-white ultra-glow scale-on-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <span className="relative">03</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 gradient-accent-text">Full Access</h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-sm mx-auto">
                Complete McLaren documentation library with advanced search, offline sync, and real-time updates.
              </p>
              <div className="ultra-glass rounded-2xl p-6 border border-purple-500/10">
                <div className="text-purple-400 font-semibold text-sm mb-2">DOCUMENTATION</div>
                <div className="text-3xl font-black text-foreground">50K+<span className="text-lg text-muted-foreground">pages</span></div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-20 fade-in-up stagger-6">
            <Link href="/pricing">
              <Button size="lg" className="text-2xl px-16 py-8 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 hover:from-emerald-600 hover:via-blue-600 hover:to-purple-600 ultra-glow scale-on-hover rounded-2xl font-bold">
                <Play className="mr-3 w-6 h-6" />
                Start Your Journey
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ultra Footer */}
      <footer className="relative py-24 px-4 border-t border-emerald-500/10">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent"></div>
        
        <div className="max-w-8xl mx-auto relative">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center ultra-glow">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-4xl font-black gradient-text">SUPERCAR</div>
                <div className="text-lg text-muted-foreground font-medium">Documentation Platform</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="ultra-glass rounded-2xl p-8 border border-emerald-500/10">
                <h4 className="text-xl font-bold mb-4 gradient-text">Enterprise Grade</h4>
                <p className="text-muted-foreground">SOC2 compliant with 99.9% uptime SLA and enterprise security standards.</p>
              </div>
              
              <div className="ultra-glass rounded-2xl p-8 border border-blue-500/10">
                <h4 className="text-xl font-bold mb-4 gradient-accent-text">Global Network</h4>
                <p className="text-muted-foreground">Edge computing infrastructure across 50+ regions for optimal performance.</p>
              </div>
              
              <div className="ultra-glass rounded-2xl p-8 border border-purple-500/10">
                <h4 className="text-xl font-bold mb-4 gradient-accent-text">24/7 Support</h4>
                <p className="text-muted-foreground">Expert technical support team available around the clock for all users.</p>
              </div>
            </div>
            
            <div className="pt-12 border-t border-emerald-500/10">
              <p className="text-muted-foreground mb-4 text-lg">
                © 2024 Supercar Documentation Platform. All rights reserved.
              </p>
              <p className="text-muted-foreground/60 text-sm mb-8">
                This product is not affiliated with or endorsed by McLaren Automotive Limited.
              </p>
              
              <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground/40">
                <span>Trusted by 10,000+ professionals worldwide</span>
                <span>•</span>
                <span>ISO 27001 Certified</span>
                <span>•</span>
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
