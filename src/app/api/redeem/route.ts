import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions, redeemActivationCode } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    const { code } = await request.json()

    if (!code) {
      return NextResponse.json(
        { message: "Activation code is required" },
        { status: 400 }
      )
    }

    // Validate code format
    const codeRegex = /^MCL-(1DAY|1WEEK|1MO|1YR)-[A-Z0-9]+$/
    if (!codeRegex.test(code)) {
      return NextResponse.json(
        { message: "Invalid activation code format" },
        { status: 400 }
      )
    }

    const success = await redeemActivationCode(session.user.id, code)

    if (success) {
      return NextResponse.json(
        { message: "Activation code redeemed successfully" },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { message: "Invalid or already used activation code" },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error("Redeem error:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}
