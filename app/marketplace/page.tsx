import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample marketplace listings
const listings = [
  {
    id: "listing1",
    title: "Modern Apartment in Downtown",
    type: "property",
    address: "123 Main St, New York, NY",
    price: 750000,
    tokenized: true,
    tokenPrice: 750,
    availableTokens: 350,
    image: "/urban-glass-facade.png",
    description: "A beautiful modern apartment in the heart of downtown with excellent rental potential.",
  },
  {
    id: "listing2",
    title: "Commercial Office Space",
    type: "property",
    address: "456 Business Ave, Chicago, IL",
    price: 1250000,
    tokenized: true,
    tokenPrice: 1250,
    availableTokens: 200,
    image: "/modern-city-office.png",
    description: "Prime commercial office space in a high-traffic business district with stable tenants.",
  },
  {
    id: "listing3",
    title: "Modern Art Installation",
    type: "nft",
    artist: "Digital Creator",
    price: 2500,
    boost: "+0.5% APY",
    image: "/placeholder.svg?height=400&width=400&query=abstract digital art",
    description: "A digital art installation that enhances the property's aesthetic value.",
  },
  {
    id: "listing4",
    title: "Smart Home System",
    type: "nft",
    artist: "Tech Innovations",
    price: 5000,
    boost: "+0.8% APY",
    image: "/placeholder.svg?height=400&width=400&query=smart home system",
    description: "A tokenized smart home system that adds functionality and value to any property.",
  },
  {
    id: "listing5",
    title: "Beachfront Villa",
    type: "property",
    address: "789 Ocean Dr, Miami, FL",
    price: 2100000,
    tokenized: false,
    image: "/tropical-beachfront-escape.png",
    description: "Luxurious beachfront villa with panoramic ocean views and private beach access.",
  },
  {
    id: "listing6",
    title: "Sustainable Energy Certificate",
    type: "nft",
    artist: "Green Future",
    price: 3200,
    boost: "+0.6% APY",
    image: "/placeholder.svg?height=400&width=400&query=solar panels on roof",
    description: "A certificate representing sustainable energy improvements to boost property value.",
  },
]

export default function MarketplacePage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Marketplace</h1>
        <p className="text-muted-foreground">Discover and invest in properties and NFT assets</p>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search marketplace..." className="w-full pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
        <div className="flex-1 md:flex md:justify-end">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by: Newest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Sort by: Newest</SelectItem>
              <SelectItem value="price-high">Sort by: Price (High to Low)</SelectItem>
              <SelectItem value="price-low">Sort by: Price (Low to High)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Listings</TabsTrigger>
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="tokens">Property Tokens</TabsTrigger>
          <TabsTrigger value="nfts">NFT Assets</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <MarketplaceCard key={listing.id} listing={listing} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="properties" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings
              .filter((listing) => listing.type === "property" && !listing.tokenized)
              .map((listing) => (
                <MarketplaceCard key={listing.id} listing={listing} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="tokens" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings
              .filter((listing) => listing.type === "property" && listing.tokenized)
              .map((listing) => (
                <MarketplaceCard key={listing.id} listing={listing} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="nfts" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings
              .filter((listing) => listing.type === "nft")
              .map((listing) => (
                <MarketplaceCard key={listing.id} listing={listing} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface MarketplaceCardProps {
  listing: any // Using any for simplicity, but would use proper types in a real app
}

function MarketplaceCard({ listing }: MarketplaceCardProps) {
  const isProperty = listing.type === "property"
  const isNFT = listing.type === "nft"

  return (
    <Card>
      <div className="relative">
        <Image
          src={listing.image || "/placeholder.svg"}
          alt={listing.title}
          width={500}
          height={300}
          className="h-48 w-full object-cover"
        />
        {isProperty && listing.tokenized && (
          <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">Tokenized</Badge>
        )}
        {isNFT && <Badge className="absolute left-2 top-2 bg-purple-600 text-white">NFT Asset</Badge>}
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-start">
          <div>
            <CardTitle className="text-lg line-clamp-1">{listing.title}</CardTitle>
            {isProperty && <p className="text-sm text-muted-foreground line-clamp-1">{listing.address}</p>}
            {isNFT && <p className="text-sm text-muted-foreground">by {listing.artist}</p>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm line-clamp-2 mb-2">{listing.description}</p>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-2xl font-bold">${listing.price.toLocaleString()}</p>
            {isProperty && listing.tokenized && (
              <p className="text-sm text-muted-foreground">
                {listing.availableTokens} tokens @ ${listing.tokenPrice}
              </p>
            )}
            {isNFT && listing.boost && (
              <Badge variant="outline" className="text-green-600">
                {listing.boost}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">
          {isProperty && !listing.tokenized && "View Property"}
          {isProperty && listing.tokenized && "Buy Tokens"}
          {isNFT && "Purchase NFT"}
        </Button>
      </CardFooter>
    </Card>
  )
}
