import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Car, Shield, Search, Download, Clock, Zap, Star, Users, ArrowRight, Sparkles, ChevronRight, Play, Award, TrendingUp, Activity, Globe, Layers } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-background to-purple-500/5"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-violet-500/10 to-transparent rounded-full blur-3xl floating-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-purple-500/8 to-transparent rounded-full blur-3xl floating-fast"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-500/8 to-transparent rounded-full blur-3xl floating-slow" style={{animationDelay: '4s'}}></div>
      
      <Navigation />
      
      {/* Premium Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            {/* Announcement */}
            <div className="inline-flex items-center gap-3 premium-glass rounded-full px-6 py-3 mb-16 fade-in-up">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">
                Enterprise Documentation Platform
              </span>
              <ChevronRight className="w-4 h-4 text-violet-400" />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-12 leading-[0.9] tracking-tight fade-in-up stagger-1">
              <span className="gradient-text block mb-3">Supercar</span>
              <span className="text-foreground/90 block">Documentation</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground/80 mb-16 max-w-4xl mx-auto leading-relaxed font-light fade-in-up stagger-2">
              Professional McLaren repair documentation trusted by
              <span className="gradient-accent-text font-medium"> 10,000+ certified technicians</span> globally.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 fade-in-up stagger-3">
              <Link href="/login">
                <Button size="lg" className="premium-button w-full sm:w-auto text-lg px-10 py-4 rounded-xl font-medium group">
                  <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Launch Platform</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-10 py-4 premium-card hover:bg-violet-500/5 rounded-xl font-medium border-violet-500/20">
                  <span>View Demo</span>
                  <Sparkles className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            {/* Premium Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto fade-in-up stagger-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">10K+</div>
                <div className="text-sm md:text-base text-muted-foreground/70 font-medium">Expert Technicians</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-sm md:text-base text-muted-foreground/70 font-medium">Platform Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-sm md:text-base text-muted-foreground/70 font-medium">Global Access</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">4.9★</div>
                <div className="text-sm md:text-base text-muted-foreground/70 font-medium">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 premium-glass rounded-full px-6 py-2 mb-8">
              <Activity className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">Platform Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              <span className="gradient-text">Enterprise-Grade</span><br />
              <span className="text-foreground/90">Documentation</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
              Advanced platform built for professional automotive service teams worldwide.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group">
              <div className="premium-card p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 premium-glow">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Factory Certified</h3>
                <p className="text-muted-foreground/70 leading-relaxed mb-6">
                  Official McLaren engineering specifications and OEM-approved service protocols trusted by authorized dealers globally.
                </p>
                <div className="flex items-center text-violet-400 font-medium group-hover:text-violet-300 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="premium-card p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6 premium-glow">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">AI-Powered Search</h3>
                <p className="text-muted-foreground/70 leading-relaxed mb-6">
                  Advanced semantic search with machine learning algorithms that understand context and provide intelligent recommendations.
                </p>
                <div className="flex items-center text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
                  <span>Explore AI</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="premium-card p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 premium-glow">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Global Platform</h3>
                <p className="text-muted-foreground/70 leading-relaxed mb-6">
                  Cloud-native infrastructure with edge computing ensures lightning-fast access from any location worldwide, 24/7.
                </p>
                <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                  <span>View Network</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-violet-500/20 to-violet-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-violet-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Enterprise Security</h4>
              <p className="text-sm text-muted-foreground/70">Bank-level encryption with SOC2 compliance</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layers className="h-6 w-6 text-indigo-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Seamless Integration</h4>
              <p className="text-sm text-muted-foreground/70">API-first architecture with existing tools</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Download className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Offline Sync</h4>
              <p className="text-sm text-muted-foreground/70">Progressive web app with smart caching</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-6 w-6 text-pink-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Real-time Updates</h4>
              <p className="text-sm text-muted-foreground/70">Live synchronization across all devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Process */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 premium-glass rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">Streamlined Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              <span className="gradient-text">Instant</span><br />
              <span className="text-foreground/90">Activation</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
              Get professional access in under 60 seconds with our streamlined onboarding.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative">
            {/* Connection paths - desktop only */}
            <div className="hidden lg:block absolute top-1/3 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full opacity-40"></div>
            <div className="hidden lg:block absolute top-1/3 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-40"></div>
            
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white premium-glow group-hover:scale-110 transition-transform">
                <span>01</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Choose Plan</h3>
              <p className="text-muted-foreground/70 leading-relaxed mb-6 max-w-sm mx-auto">
                Select from flexible subscription options designed for every workshop size and budget.
              </p>
              <div className="premium-card p-4 border border-violet-500/20">
                <div className="text-violet-400 font-medium text-sm mb-1">STARTING AT</div>
                <div className="text-2xl font-bold text-foreground">$29<span className="text-base text-muted-foreground/70">/mo</span></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-2xl font-bold text-white premium-glow group-hover:scale-110 transition-transform">
                <span>02</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Instant Setup</h3>
              <p className="text-muted-foreground/70 leading-relaxed mb-6 max-w-sm mx-auto">
                Automated account provisioning with immediate access to your personalized dashboard and tools.
              </p>
              <div className="premium-card p-4 border border-indigo-500/20">
                <div className="text-indigo-400 font-medium text-sm mb-1">SETUP TIME</div>
                <div className="text-2xl font-bold text-foreground">&lt; 60<span className="text-base text-muted-foreground/70">sec</span></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-2xl font-bold text-white premium-glow group-hover:scale-110 transition-transform">
                <span>03</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Full Access</h3>
              <p className="text-muted-foreground/70 leading-relaxed mb-6 max-w-sm mx-auto">
                Complete McLaren documentation library with advanced search, offline sync, and real-time updates.
              </p>
              <div className="premium-card p-4 border border-purple-500/20">
                <div className="text-purple-400 font-medium text-sm mb-1">DOCUMENTATION</div>
                <div className="text-2xl font-bold text-foreground">50K+<span className="text-base text-muted-foreground/70">pages</span></div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/pricing">
              <Button size="lg" className="premium-button text-lg px-12 py-4 rounded-xl font-medium group">
                <Play className="mr-3 w-5 h-5" />
                Start Your Journey
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="relative py-24 px-4 border-t border-violet-500/10">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center premium-glow">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">Supercar</div>
                <div className="text-sm text-muted-foreground/70">Documentation Platform</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="premium-card p-6 border border-violet-500/10">
                <h4 className="text-lg font-semibold mb-3 text-foreground">Enterprise Grade</h4>
                <p className="text-sm text-muted-foreground/70">SOC2 compliant with 99.9% uptime SLA and enterprise security standards.</p>
              </div>
              
              <div className="premium-card p-6 border border-indigo-500/10">
                <h4 className="text-lg font-semibold mb-3 text-foreground">Global Network</h4>
                <p className="text-sm text-muted-foreground/70">Edge computing infrastructure across 50+ regions for optimal performance.</p>
              </div>
              
              <div className="premium-card p-6 border border-purple-500/10">
                <h4 className="text-lg font-semibold mb-3 text-foreground">24/7 Support</h4>
                <p className="text-sm text-muted-foreground/70">Expert technical support team available around the clock for all users.</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-violet-500/10">
              <p className="text-muted-foreground/70 mb-4">
                © 2024 Supercar Documentation Platform. All rights reserved.
              </p>
              <p className="text-muted-foreground/50 text-sm mb-8">
                This product is not affiliated with or endorsed by McLaren Automotive Limited.
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground/40">
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
