"use client"

import { useSession } from "next-auth/react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlanBadge } from "@/components/plan-badge"
import { ActivationRedeemForm } from "@/components/activation-redeem-form"
import { ThemeToggle } from "@/components/theme-toggle"
import { User, Mail, Calendar, Settings } from "lucide-react"

export default function AccountPage() {
  const { data: session } = useSession()

  if (!session) {
    return null // Middleware will redirect to login
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
          <p className="text-muted-foreground">
            Manage your profile, subscription, and preferences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Profile Information</span>
              </CardTitle>
              <CardDescription>
                Your account details and role information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{session.user.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Role</p>
                  <p className="text-sm text-muted-foreground capitalize">{session.user.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Current Plan</p>
                  <div className="mt-1">
                    <PlanBadge 
                      planType={session.user.planType}
                      expiresAt={session.user.expiresAt}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Preferences</span>
              </CardTitle>
              <CardDescription>
                Customize your experience and interface.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Theme</p>
                  <p className="text-sm text-muted-foreground">Switch between light and dark mode</p>
                </div>
                <ThemeToggle />
              </div>
            </CardContent>
          </Card>

          {/* Activation Code Redemption */}
          <div className="lg:col-span-2">
            <ActivationRedeemForm />
          </div>

          {/* Subscription Details */}
          {session.user.planType && (
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Subscription Details</CardTitle>
                  <CardDescription>
                    Information about your current plan and access.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Plan Type</p>
                      <p className="text-sm text-muted-foreground capitalize">
                        {session.user.planType} Access
                      </p>
                    </div>
                    
                    {session.user.expiresAt && (
                      <div>
                        <p className="text-sm font-medium mb-1">Expires</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(session.user.expiresAt).toLocaleDateString()}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Access includes:</strong> All McLaren repair manuals, 
                      downloadable sections, search functionality, and mobile access.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
