import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="mb-8">
        <AlertCircle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold tracking-tight">Maintenance Request Not Found</h1>
        <p className="text-muted-foreground mt-2">
          The maintenance request you're looking for doesn't exist or has been removed.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/maintenance">View All Maintenance Requests</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/maintenance?new=true">Create New Request</Link>
        </Button>
      </div>
    </div>
  )
}
