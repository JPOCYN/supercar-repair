export interface User {
  id: string
  email: string
  password: string
  role: 'user' | 'admin'
  activationCode?: string
  planType?: 'day' | 'week' | 'month' | 'year'
  expiresAt?: Date
  theme: 'light' | 'dark'
}

export interface Brand {
  id: string
  name: string
  slug: string
  enabled: boolean
}

export interface Model {
  id: string
  brandId: string
  name: string
  slug: string
  year?: string
  image: string
}

export interface Section {
  id: string
  name: string
  slug: string
  order: number
}

export interface ManualPage {
  id: string
  modelId: string
  sectionId: string
  title: string
  slug: string
  content: string
}

export interface ActivationCode {
  id: string
  code: string
  planType: 'day' | 'week' | 'month' | 'year'
  status: 'unused' | 'redeemed' | 'expired'
  redeemedBy?: string
  redeemedAt?: Date
  expiresAt?: Date
}

export interface PricingPlan {
  id: string
  name: string
  duration: string
  price: string
  features: string[]
  popular?: boolean
}
