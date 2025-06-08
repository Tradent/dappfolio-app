import Link from "next/link"
import { FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AccountingNotFound() {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center space-y-4 text-center">
      <div className="rounded-full bg-muted p-6">
        <FileQuestion className="h-12 w-12 text-muted-foreground" />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
        <p className="text-muted-foreground">The accounting page you're looking for doesn't exist or has been moved.</p>
      </div>
      <Button asChild>
        <Link href="/app/accounting">Return to Accounting Dashboard</Link>
      </Button>
    </div>
  )
}
