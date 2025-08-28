import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { User } from "@/types"
import { logger } from "@/lib/utils"

// Mock user data - In production, this would be a database
const users: User[] = [
  {
    id: "1",
    email: "admin@example.com",
    password: "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPjQKMdZGCvBG", // password123
    role: "admin",
    theme: "dark",
    planType: "year",
    expiresAt: new Date("2025-01-01")
  },
  {
    id: "2", 
    email: "user@example.com",
    password: "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPjQKMdZGCvBG", // password123
    role: "user",
    theme: "dark"
  }
]

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = users.find(u => u.email === credentials.email)
        
        if (!user) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
        
        if (!isPasswordValid) {
          return null
        }

        logger("login", { email: user.email, role: user.role })

        return {
          id: user.id,
          email: user.email,
          role: user.role,
          planType: user.planType,
          expiresAt: user.expiresAt?.toISOString(),
          theme: user.theme
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.planType = user.planType
        token.expiresAt = user.expiresAt
        token.theme = user.theme
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
        session.user.planType = token.planType as string
        session.user.expiresAt = token.expiresAt as string
        session.user.theme = token.theme as string
      }
      return session
    }
  },
  pages: {
    signIn: "/login"
  }
}

export async function createUser(email: string, password: string): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 12)
  
  const newUser: User = {
    id: Date.now().toString(),
    email,
    password: hashedPassword,
    role: "user",
    theme: "dark"
  }
  
  users.push(newUser)
  logger("signup", { email })
  
  return newUser
}

export async function redeemActivationCode(userId: string, code: string): Promise<boolean> {
  // This would typically update a database
  // For now, we'll just simulate the redemption
  const user = users.find(u => u.id === userId)
  if (!user) return false
  
  // Mock validation - in production this would check against activation codes database
  if (code.startsWith("MCL-")) {
    if (code.includes("1DAY")) {
      user.planType = "day"
      user.expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)
    } else if (code.includes("1WEEK")) {
      user.planType = "week" 
      user.expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    } else if (code.includes("1MO")) {
      user.planType = "month"
      user.expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    } else if (code.includes("1YR")) {
      user.planType = "year"
      user.expiresAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    }
    
    user.activationCode = code
    logger("redeem", { userId, code, planType: user.planType })
    return true
  }
  
  return false
}
