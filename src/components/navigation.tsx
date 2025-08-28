"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { PlanBadge } from "@/components/plan-badge"
import { Car, Menu, X, User, LogOut, Settings } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="ultra-glass fixed top-0 left-0 right-0 z-50 border-b border-emerald-500/10">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ultra-glow">
                <Car className="h-7 w-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-black gradient-text">SUPERCAR</div>
                <div className="text-xs text-muted-foreground font-medium -mt-1">Documentation Platform</div>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {session ? (
              <>
                <Link href="/browse">
                  <Button variant="ghost" className="text-base font-medium hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300">
                    Browse
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="ghost" className="text-base font-medium hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300">
                    Pricing
                  </Button>
                </Link>
                {session.user.role === "admin" && (
                  <Link href="/admin">
                    <Button variant="ghost" className="text-base font-medium hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300">
                      Admin
                    </Button>
                  </Link>
                )}
                <PlanBadge 
                  planType={session.user.planType}
                  expiresAt={session.user.expiresAt}
                />
                <div className="flex items-center space-x-3">
                  <Link href="/account">
                    <Button variant="ghost" size="icon" className="w-11 h-11 rounded-2xl hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300">
                      <User className="h-5 w-5" />
                    </Button>
                  </Link>
                  <ThemeToggle />
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="w-11 h-11 rounded-2xl hover:bg-red-500/10 hover:text-red-400 transition-all duration-300"
                    onClick={() => signOut()}
                  >
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="text-base font-medium hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-2xl ultra-glow scale-on-hover transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
                <ThemeToggle />
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {session ? (
                <>
                  <Link href="/browse" className="block">
                    <Button variant="ghost" className="w-full justify-start">
                      Browse
                    </Button>
                  </Link>
                  <Link href="/pricing" className="block">
                    <Button variant="ghost" className="w-full justify-start">
                      Pricing
                    </Button>
                  </Link>
                  <Link href="/account" className="block">
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Account
                    </Button>
                  </Link>
                  {session.user.role === "admin" && (
                    <Link href="/admin" className="block">
                      <Button variant="ghost" className="w-full justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        Admin
                      </Button>
                    </Link>
                  )}
                  <div className="px-3 py-2">
                    <PlanBadge 
                      planType={session.user.planType}
                      expiresAt={session.user.expiresAt}
                    />
                  </div>
                  <div className="flex items-center justify-between px-3">
                    <ThemeToggle />
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => signOut()}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/login" className="block">
                    <Button variant="ghost" className="w-full justify-start">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup" className="block">
                    <Button className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                  <div className="px-3 py-2">
                    <ThemeToggle />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
