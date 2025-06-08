import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MaintenanceNotFound() {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold mb-4">Maintenance Request Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        The maintenance request you're looking for doesn't exist or has been removed.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/app/maintenance">View All Maintenance Requests</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/app">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}
