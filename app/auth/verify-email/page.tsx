"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth/auth-context"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function VerifyEmailPage() {
  const { verifyEmail, state } = useAuth()
  const [isVerifying, setIsVerifying] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        return
      }

      setIsVerifying(true)
      try {
        const success = await verifyEmail(token)
        setIsSuccess(success)
      } catch (err) {
        setError("Failed to verify email. The link may be invalid or expired.")
      } finally {
        setIsVerifying(false)
      }
    }

    verify()
  }, [token, verifyEmail])

  return (
    <AuthLayout title="Verify your email" description="Please verify your email address to continue">
      <div className="space-y-6">
        {isVerifying ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <p className="mt-4 text-center">Verifying your email address...</p>
          </div>
        ) : token ? (
          isSuccess ? (
            <div className="space-y-4">
              <Alert className="border-green-500 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <AlertDescription>
                  Your email has been verified successfully. You can now sign in to your account.
                </AlertDescription>
              </Alert>
              <Button className="w-full" onClick={() => (window.location.href = "/auth/sign-in")}>
                Sign in
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {error || state.error || "Failed to verify email. The link may be invalid or expired."}
                </AlertDescription>
              </Alert>
              <Button className="w-full" onClick={() => (window.location.href = "/auth/sign-in")}>
                Return to sign in
              </Button>
            </div>
          )
        ) : (
          <div className="space-y-4">
            <p className="text-center">
              We've sent a verification email to your inbox. Please check your email and click the verification link.
            </p>
            <p className="text-center text-sm text-gray-500">If you don't see the email, check your spam folder.</p>
            <div className="text-center">
              <Link href="/auth/sign-in" className="text-blue-600 hover:text-blue-500">
                Return to sign in
              </Link>
            </div>
          </div>
        )}
      </div>
    </AuthLayout>
  )
}
