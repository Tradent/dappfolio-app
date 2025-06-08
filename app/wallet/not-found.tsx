import Link from "next/link"
import { WalletIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WalletNotFound() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center space-y-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <WalletIcon className="h-10 w-10 text-muted-foreground" />
      </div>
      <h1 className="text-3xl font-bold">Wallet Not Found</h1>
      <p className="text-muted-foreground">The wallet page you're looking for doesn't exist or has been moved.</p>
      <Button asChild>
        <Link href="/wallet">Return to Wallet Dashboard</Link>
      </Button>
    </div>
  )
}
