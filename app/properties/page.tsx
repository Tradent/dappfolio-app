import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Filter, Plus, Search, SlidersHorizontal } from "lucide-react"
import { PropertyList } from "@/components/property-list"
import Link from "next/link"

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Properties</h1>
          <p className="text-muted-foreground">Manage and monitor all your properties in one place.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button className="bg-app-blue hover:bg-app-blue-dark" asChild>
            <Link href="/properties/add">
              <Plus className="mr-2 h-4 w-4" /> Add Property
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-app-gray-500" />
          <Input type="search" placeholder="Search properties..." className="w-full pl-8" />
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
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Properties</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="industrial">Industrial</TabsTrigger>
              <TabsTrigger value="tokenized">
                <Link href="/properties/tokenized" className="w-full h-full flex items-center justify-center">
                  Tokenized
                </Link>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <PropertyList />
            </TabsContent>
            <TabsContent value="residential">
              <PropertyList filter="residential" />
            </TabsContent>
            <TabsContent value="commercial">
              <PropertyList filter="commercial" />
            </TabsContent>
            <TabsContent value="industrial">
              <PropertyList filter="industrial" />
            </TabsContent>
            <TabsContent value="tokenized">
              <PropertyList filter="tokenized" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
