import { Skeleton } from "@/components/ui/skeleton"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function ResetPasswordLoading() {
  return (
    <AuthLayout title="Reset your password" description="Enter your new password below">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>

          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </AuthLayout>
  )
}
