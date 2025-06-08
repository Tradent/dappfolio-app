import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Filter, Search, SlidersHorizontal } from "lucide-react"
import { PropertyList } from "@/components/property-list"
import Link from "next/link"

export default function TokenizedPropertiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tokenized Properties</h1>
          <p className="text-muted-foreground">Manage your tokenized real estate assets.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" asChild>
            <Link href="/app/properties">View All Properties</Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-app-gray-500" />
          <Input type="search" placeholder="Search tokenized properties..." className="w-full pl-8" />
        </div>
        <Button variant="outline" className="md:ml-auto">
          <Filter className="mr-2 h-4 w-4" /> Filters
        </Button>
        <Button variant="outline">
          <SlidersHorizontal className="mr-2 h-4 w-4" /> Sort
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <PropertyList filter="tokenized" />
        </CardContent>
      </Card>
    </div>
  )
}
