import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold text-babyblue-600">Dappfolio</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Features
            </Link>
            <Link href="/how-it-works" className="transition-colors hover:text-foreground/80 text-foreground/60">
              How It Works
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Pricing
            </Link>
            <Link href="/roadmap" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Roadmap
            </Link>
            <Link href="/documentation" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Documentation
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button size="sm" className="bg-babyblue-600 hover:bg-babyblue-700" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
