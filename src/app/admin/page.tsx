"use client"

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Skeleton } from "@/components/ui/skeleton"
import { 
  Settings, 
  Code, 
  Users, 
  Eye, 
  Plus, 
  Copy, 
  Check,
  AlertTriangle 
} from "lucide-react"
import { ActivationCode, Brand } from "@/types"

// Import mock data
import activationCodesData from "@/data/activation-codes.json"
import brandsData from "@/data/brands.json"

export default function AdminPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [codes, setCodes] = useState<ActivationCode[]>([])
  const [brands, setBrands] = useState<Brand[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [newCodeType, setNewCodeType] = useState<'day' | 'week' | 'month' | 'year'>('month')

  useEffect(() => {
    if (session?.user?.role !== 'admin') {
      router.push('/browse')
      return
    }

    // Load mock data
    setCodes(activationCodesData as ActivationCode[])
    setBrands(brandsData as Brand[])
    setIsLoading(false)
  }, [session, router])

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const generateCode = () => {
    const prefix = 'MCL'
    const duration = {
      day: '1DAY',
      week: '1WEEK', 
      month: '1MO',
      year: '1YR'
    }[newCodeType]
    
    const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase()
    const newCode = `${prefix}-${duration}-${randomSuffix}`
    
    const code: ActivationCode = {
      id: Date.now().toString(),
      code: newCode,
      planType: newCodeType,
      status: 'unused'
    }
    
    setCodes([code, ...codes])
  }

  const toggleBrand = (brandId: string) => {
    setBrands(brands.map(brand => 
      brand.id === brandId 
        ? { ...brand, enabled: !brand.enabled }
        : brand
    ))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unused': return 'default'
      case 'redeemed': return 'secondary'
      case 'expired': return 'destructive'
      default: return 'outline'
    }
  }

  if (session?.user?.role !== 'admin') {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage activation codes, brand settings, and system configuration.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stats Overview */}
          <div className="lg:col-span-3 grid md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Code className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-2xl font-bold">{codes.filter(c => c.status === 'unused').length}</p>
                    <p className="text-xs text-muted-foreground">Unused Codes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-2xl font-bold">{codes.filter(c => c.status === 'redeemed').length}</p>
                    <p className="text-xs text-muted-foreground">Active Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-2xl font-bold">{codes.filter(c => c.status === 'expired').length}</p>
                    <p className="text-xs text-muted-foreground">Expired Codes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-2xl font-bold">{codes.length}</p>
                    <p className="text-xs text-muted-foreground">Total Codes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Brand Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Brand Settings</span>
              </CardTitle>
              <CardDescription>
                Enable or disable brands for public access.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{brand.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {brand.enabled ? 'Public' : 'Coming Soon'}
                    </p>
                  </div>
                  <Switch
                    checked={brand.enabled}
                    onCheckedChange={() => toggleBrand(brand.id)}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Code Generator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Generate Code</span>
              </CardTitle>
              <CardDescription>
                Create new activation codes for distribution.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="codeType">Plan Type</Label>
                <select
                  id="codeType"
                  value={newCodeType}
                  onChange={(e) => setNewCodeType(e.target.value as any)}
                  className="w-full p-2 border border-input bg-background rounded-md"
                >
                  <option value="day">Day Pass</option>
                  <option value="week">Weekly Access</option>
                  <option value="month">Monthly Pro</option>
                  <option value="year">Annual Ultimate</option>
                </select>
              </div>
              
              <Button onClick={generateCode} className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Generate Code
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest code redemptions and system events.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {codes
                  .filter(c => c.status === 'redeemed')
                  .slice(0, 5)
                  .map((code) => (
                    <div key={code.id} className="flex items-center justify-between text-sm">
                      <div>
                        <p className="font-medium">{code.code}</p>
                        <p className="text-muted-foreground">{code.redeemedBy}</p>
                      </div>
                      <Badge variant="secondary">Redeemed</Badge>
                    </div>
                  ))}
                
                {codes.filter(c => c.status === 'redeemed').length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No recent activity
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activation Codes Table */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Activation Codes</CardTitle>
            <CardDescription>
              Manage all activation codes and their status.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Code</th>
                      <th className="text-left py-2">Type</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Redeemed By</th>
                      <th className="text-left py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {codes.map((code) => (
                      <tr key={code.id} className="border-b">
                        <td className="py-2 font-mono text-sm">{code.code}</td>
                        <td className="py-2 capitalize">{code.planType}</td>
                        <td className="py-2">
                          <Badge variant={getStatusColor(code.status)}>
                            {code.status}
                          </Badge>
                        </td>
                        <td className="py-2 text-sm">
                          {code.redeemedBy || '-'}
                        </td>
                        <td className="py-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(code.code)}
                          >
                            {copiedCode === code.code ? (
                              <Check className="h-3 w-3" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
