import { AuthLayout } from "@/components/auth/auth-layout"
import { Loader2 } from "lucide-react"

export default function VerifyEmailLoading() {
  return (
    <AuthLayout title="Verify your email" description="Please verify your email address to continue">
      <div className="flex flex-col items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <p className="mt-4 text-center">Verifying your email address...</p>
      </div>
    </AuthLayout>
  )
}
