"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlusCircle } from "lucide-react"

// Sample NFT data - in a real app, this would come from an API or blockchain query
const nfts = [
  {
    id: "nft1",
    name: "Modern Art Installation",
    artist: "Digital Creator",
    description: "A digital art installation that enhances the property's aesthetic value.",
    image: "/placeholder.svg?height=400&width=400&query=abstract digital art",
    value: 2500,
    boost: "+0.5% APY",
  },
  {
    id: "nft2",
    name: "Smart Home System",
    artist: "Tech Innovations",
    description: "A tokenized smart home system that adds functionality and value.",
    image: "/placeholder.svg?height=400&width=400&query=smart home system",
    value: 5000,
    boost: "+0.8% APY",
  },
  {
    id: "nft3",
    name: "Virtual Property Tour",
    artist: "VR Experiences",
    description: "An immersive virtual tour of the property with interactive elements.",
    image: "/placeholder.svg?height=400&width=400&query=virtual reality headset",
    value: 1800,
    boost: "+0.3% APY",
  },
]

interface PropertyNFTsProps {
  propertyId: string
}

export function PropertyNFTs({ propertyId }: PropertyNFTsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">NFT Assets</h2>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add NFT Asset
        </Button>
      </div>

      <p className="text-muted-foreground">NFT assets attached to this property that boost its value and yield.</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {nfts.map((nft) => (
          <Card key={nft.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{nft.name}</CardTitle>
              <p className="text-sm text-muted-foreground">by {nft.artist}</p>
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
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div>
                <p className="font-semibold">${nft.value.toLocaleString()}</p>
                <Badge variant="outline" className="text-green-600">
                  {nft.boost}
                </Badge>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
