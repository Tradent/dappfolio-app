import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
      <h1 className="text-3xl font-bold tracking-tight mb-2">Marketplace Not Found</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        We couldn't find the marketplace you're looking for. It may have been removed or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/app/marketplace">Return to Marketplace</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/app">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}
