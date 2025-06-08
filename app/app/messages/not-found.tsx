import Link from "next/link"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MessagesNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <MessageSquare className="h-16 w-16 text-babyblue-600 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Messages Not Found</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        We couldn't find the messages you're looking for. It may have been moved or deleted.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/app/messages">Go to Messages</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/app">Back to Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}
