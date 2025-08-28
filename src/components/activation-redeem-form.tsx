"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, CheckCircle, XCircle } from "lucide-react"

export function ActivationRedeemForm() {
  const { data: session, update } = useSession()
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setMessage("Activation code redeemed successfully! Your access has been updated.")
        setCode("")
        // Update the session to reflect the new plan
        await update()
      } else {
        setIsSuccess(false)
        setMessage(data.message || "Failed to redeem activation code")
      }
    } catch {
      setIsSuccess(false)
      setMessage("An error occurred while redeeming the code")
    }

    setIsLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Gift className="h-5 w-5" />
          <span>Redeem Activation Code</span>
        </CardTitle>
        <CardDescription>
          Enter your activation code purchased from our Shopify store to unlock manual access.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Activation Code</Label>
            <Input
              id="code"
              type="text"
              placeholder="MCL-1MO-XXXXXX"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              required
            />
            <p className="text-xs text-muted-foreground">
              Format: MCL-[DURATION]-[CODE] (e.g., MCL-1MO-ABC123)
            </p>
          </div>

          {message && (
            <div className={`flex items-center space-x-2 p-3 rounded-lg ${
              isSuccess ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
            }`}>
              {isSuccess ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <XCircle className="h-4 w-4" />
              )}
              <span className="text-sm">{message}</span>
            </div>
          )}

          <Button type="submit" disabled={isLoading || !code.trim()}>
            {isLoading ? "Redeeming..." : "Redeem Code"}
          </Button>
        </form>

        <div className="mt-4 p-3 bg-muted rounded-lg">
          <p className="text-xs text-muted-foreground">
            <strong>Don&apos;t have a code?</strong> Purchase activation codes from our Shopify store. 
            Codes are delivered instantly and provide immediate access to all manuals.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
