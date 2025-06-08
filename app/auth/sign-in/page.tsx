"use client"

import { EmailSignInForm } from "@/components/auth/email-sign-in-form"
import { SocialSignIn } from "@/components/auth/social-sign-in"
import { WalletConnection } from "@/components/auth/wallet-connection"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function SignInPage() {
  return (
    <AuthLayout title="Sign in to your account" description="Enter your credentials to access your account">
      <div className="space-y-6">
        <EmailSignInForm />
        <SocialSignIn />
        <WalletConnection />
      </div>
    </AuthLayout>
  )
}
