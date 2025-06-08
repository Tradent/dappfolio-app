import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="mb-6">Sorry, the tokenized properties page could not be found.</p>
      <Button asChild>
        <Link href="/properties">Return to Properties</Link>
      </Button>
    </div>
  )
}
