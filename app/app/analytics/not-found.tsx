import Link from "next/link"
import { BarChartIcon as ChartBarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AnalyticsNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="bg-muted/30 p-4 rounded-full mb-4">
        <ChartBarIcon className="h-12 w-12 text-muted-foreground" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Analytics Not Found</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        The analytics data you're looking for couldn't be found or doesn't exist. It may have been moved or deleted.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/app/analytics">Return to Analytics</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/app">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}
