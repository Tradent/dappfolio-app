import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export default function SettingsNotFound() {
  return (
    <div className="container mx-auto py-12 flex flex-col items-center justify-center text-center">
      <div className="rounded-full bg-muted p-6 mb-6">
        <Settings className="h-12 w-12 text-muted-foreground" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Settings Not Found</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        We couldn't find the settings page you're looking for. It might have been moved or doesn't exist.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/app/settings">Go to Settings</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/app">Back to Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}
