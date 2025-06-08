"use client"

import { EmailSignUpForm } from "@/components/auth/email-sign-up-form"
import { SocialSignIn } from "@/components/auth/social-sign-in"
import { WalletConnection } from "@/components/auth/wallet-connection"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function SignUpPage() {
  return (
    <AuthLayout title="Create an account" description="Enter your information to create an account">
      <div className="space-y-6">
        <EmailSignUpForm />
        <SocialSignIn />
        <WalletConnection />
      </div>
    </AuthLayout>
  )
}
