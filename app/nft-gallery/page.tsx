import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, PlusCircle } from "lucide-react"

// Sample NFT data
const nfts = [
  {
    id: "nft1",
    name: "Modern Art Installation",
    artist: "Digital Creator",
    description: "A digital art installation that enhances the property's aesthetic value.",
    image: "/placeholder.svg?height=400&width=400&query=abstract digital art",
    value: 2500,
    boost: "+0.5% APY",
    property: "Modern Apartment in Downtown",
    attached: true,
  },
  {
    id: "nft2",
    name: "Smart Home System",
    artist: "Tech Innovations",
    description: "A tokenized smart home system that adds functionality and value.",
    image: "/placeholder.svg?height=400&width=400&query=smart home system",
    value: 5000,
    boost: "+0.8% APY",
    property: "Commercial Office Space",
    attached: true,
  },
  {
    id: "nft3",
    name: "Virtual Property Tour",
    artist: "VR Experiences",
    description: "An immersive virtual tour of the property with interactive elements.",
    image: "/placeholder.svg?height=400&width=400&query=virtual reality headset",
    value: 1800,
    boost: "+0.3% APY",
    property: "Beachfront Villa",
    attached: true,
  },
  {
    id: "nft4",
    name: "Sustainable Energy Certificate",
    artist: "Green Future",
    description: "A certificate representing sustainable energy improvements to the property.",
    image: "/placeholder.svg?height=400&width=400&query=solar panels on roof",
    value: 3200,
    boost: "+0.6% APY",
    property: null,
    attached: false,
  },
  {
    id: "nft5",
    name: "Digital Twin",
    artist: "Meta Architects",
    description: "A complete digital replica of the property with interactive elements.",
    image: "/placeholder.svg?height=400&width=400&query=digital twin building",
    value: 4500,
    boost: "+0.7% APY",
    property: null,
    attached: false,
  },
  {
    id: "nft6",
    name: "Historical Significance Token",
    artist: "Heritage Collective",
    description: "A token representing the historical significance of the property location.",
    image: "/placeholder.svg?height=400&width=400&query=historical building certificate",
    value: 2800,
    boost: "+0.4% APY",
    property: null,
    attached: false,
  },
]

export default function NFTGalleryPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">NFT Gallery</h1>
          <p className="text-muted-foreground">Browse and manage NFT assets to enhance your property value</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New NFT
        </Button>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search NFTs..." className="w-full pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All NFTs</TabsTrigger>
          <TabsTrigger value="attached">Attached to Properties</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nfts.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="attached" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nfts
              .filter((nft) => nft.attached)
              .map((nft) => (
                <NFTCard key={nft.id} nft={nft} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="available" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nfts
              .filter((nft) => !nft.attached)
              .map((nft) => (
                <NFTCard key={nft.id} nft={nft} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface NFTCardProps {
  nft: {
    id: string
    name: string
    artist: string
    description: string
    image: string
    value: number
    boost: string
    property: string | null
    attached: boolean
  }
}

function NFTCard({ nft }: NFTCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{nft.name}</CardTitle>
            <p className="text-sm text-muted-foreground">by {nft.artist}</p>
          </div>
          {nft.attached && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Attached
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="overflow-hidden rounded-md">
          <Image
            src={nft.image || "/placeholder.svg"}
            alt={nft.name}
            width={400}
            height={400}
            className="h-48 w-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <p className="mt-2 text-sm">{nft.description}</p>
        {nft.property && <p className="mt-1 text-sm text-muted-foreground">Attached to: {nft.property}</p>}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div>
          <p className="font-semibold">${nft.value.toLocaleString()}</p>
          <Badge variant="outline" className="text-green-600">
            {nft.boost}
          </Badge>
        </div>
        <Button variant="outline" size="sm">
          {nft.attached ? "Manage" : "Attach to Property"}
        </Button>
      </CardFooter>
    </Card>
  )
}
