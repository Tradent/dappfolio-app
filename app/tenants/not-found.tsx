import Link from "next/link"
import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TenantsNotFound() {
  return (
    <div className="container mx-auto py-16 flex flex-col items-center justify-center text-center">
      <div className="rounded-full bg-muted p-6 mb-6">
        <Users className="h-12 w-12 text-muted-foreground" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Tenant Not Found</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        The tenant you're looking for doesn't exist or has been removed from the system.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/tenants">View All Tenants</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}
