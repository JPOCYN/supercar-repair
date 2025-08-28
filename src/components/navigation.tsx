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
    <nav className="glass-card fixed top-0 left-0 right-0 z-50 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl gradient-text">Supercar Repair</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {session ? (
              <>
                <Link href="/browse">
                  <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary">Browse</Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary">Pricing</Button>
                </Link>
                {session.user.role === "admin" && (
                  <Link href="/admin">
                    <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary">Admin</Button>
                  </Link>
                )}
                <PlanBadge 
                  planType={session.user.planType}
                  expiresAt={session.user.expiresAt}
                />
                <div className="flex items-center space-x-2">
                  <Link href="/account">
                    <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                      <User className="h-4 w-4" />
                    </Button>
                  </Link>
                  <ThemeToggle />
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => signOut()}
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-primary hover:bg-primary/90 glow-effect">Sign Up</Button>
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
