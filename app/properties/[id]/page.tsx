import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Building2, Coins, ImageIcon, MapPin, Share2 } from "lucide-react"
import { PropertyNFTs } from "@/components/property-nfts"
import { PropertyAnalytics } from "@/components/property-analytics"

// Sample property data - in a real app, this would come from an API or database
const properties = [
  {
    id: "1",
    title: "Modern Apartment in Downtown",
    address: "123 Main St, New York, NY",
    price: 750000,
    tokenized: true,
    yield: 5.2,
    type: "Residential",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    yearBuilt: 2015,
    description:
      "A beautiful modern apartment in the heart of downtown. Features include floor-to-ceiling windows, hardwood floors, and a private balcony with city views. The building offers amenities such as a fitness center, rooftop pool, and 24-hour concierge service.",
    images: [
      "/urban-glass-facade.png",
      "/sleek-urban-kitchen.png",
      "/minimalist-urban-bedroom.png",
      "/sleek-urban-bathroom.png",
    ],
    tokenDetails: {
      totalTokens: 1000,
      availableTokens: 350,
      tokenPrice: 750,
      marketCap: 750000,
    },
    status: "Occupied",
  },
  {
    id: "2",
    title: "Commercial Office Space",
    address: "456 Business Ave, Chicago, IL",
    price: 1250000,
    tokenized: true,
    yield: 6.8,
    type: "Commercial",
    sqft: 3500,
    yearBuilt: 2010,
    description:
      "Prime commercial office space in a high-traffic business district. Modern design with open floor plan, high ceilings, and abundant natural light. Includes dedicated parking spaces and 24/7 security.",
    images: [
      "/modern-city-office.png",
      "/minimalist-workspace.png",
      "/modern-conference.png",
      "/modern-office-reception.png",
    ],
    tokenDetails: {
      totalTokens: 1250,
      availableTokens: 500,
      tokenPrice: 1000,
      marketCap: 1250000,
    },
    status: "Vacant",
  },
  {
    id: "3",
    title: "Beachfront Villa",
    address: "789 Ocean Dr, Miami, FL",
    price: 2100000,
    tokenized: false,
    type: "Residential",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    yearBuilt: 2018,
    description:
      "Luxurious beachfront villa with panoramic ocean views. Features include a private pool, outdoor kitchen, and direct beach access. The interior boasts high-end finishes, a gourmet kitchen, and a home automation system.",
    images: [
      "/tropical-beachfront-escape.png",
      "/serene-beach-villa-living.png",
      "/tropical-villa-infinity-pool.png",
      "/tropical-suite-retreat.png",
    ],
    status: "Occupied",
  },
  {
    id: "4",
    title: "Industrial Warehouse",
    address: "101 Factory Ln, Detroit, MI",
    price: 850000,
    tokenized: true,
    yield: 7.5,
    type: "Industrial",
    sqft: 12000,
    yearBuilt: 2005,
    description:
      "Spacious industrial warehouse with excellent logistics capabilities. Features include high ceilings, loading docks, and a modern office area. Located near major highways for easy transportation access.",
    images: [
      "/vast-warehouse-interior.png",
      "/bustling-dockyard.png",
      "/placeholder.svg?height=600&width=800&query=warehouse office space",
      "/placeholder.svg?height=600&width=800&query=warehouse exterior",
    ],
    tokenDetails: {
      totalTokens: 850,
      availableTokens: 200,
      tokenPrice: 1000,
      marketCap: 850000,
    },
    status: "Vacant",
  },
  {
    id: "5",
    title: "Downtown Retail Space",
    address: "202 Shopping Blvd, Los Angeles, CA",
    price: 1750000,
    tokenized: true,
    yield: 4.9,
    type: "Commercial",
    sqft: 2800,
    yearBuilt: 2012,
    description:
      "Prime retail space in a high-foot-traffic shopping district. Features large display windows, modern interior, and ample storage space. Surrounded by complementary businesses that drive consistent customer flow.",
    images: [
      "/vibrant-city-shop.png",
      "/placeholder.svg?height=600&width=800&query=retail store interior",
      "/placeholder.svg?height=600&width=800&query=retail storefront",
      "/placeholder.svg?height=600&width=800&query=retail space storage",
    ],
    tokenDetails: {
      totalTokens: 1750,
      availableTokens: 800,
      tokenPrice: 1000,
      marketCap: 1750000,
    },
    status: "Occupied",
  },
  {
    id: "6",
    title: "Suburban Family Home",
    address: "303 Maple St, Austin, TX",
    price: 650000,
    tokenized: false,
    type: "Residential",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2400,
    yearBuilt: 2008,
    description:
      "Charming family home in a quiet suburban neighborhood. Features include a spacious backyard, updated kitchen, and finished basement. Close to schools, parks, and shopping centers.",
    images: [
      "/cozy-suburban-home.png",
      "/placeholder.svg?height=600&width=800&query=suburban house kitchen",
      "/placeholder.svg?height=600&width=800&query=suburban house backyard",
      "/placeholder.svg?height=600&width=800&query=suburban house living room",
    ],
    status: "Occupied",
  },
]

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id)

  if (!property) {
    notFound()
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 flex items-center">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link href="/properties">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Link>
        </Button>
        <div className="ml-auto flex items-center space-x-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/properties/${property.id}/edit`}>
              <Building2 className="mr-2 h-4 w-4" />
              Edit Property
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          {!property.tokenized ? (
            <Button>
              <Coins className="mr-2 h-4 w-4" />
              Tokenize Property
            </Button>
          ) : (
            <Button>
              <Coins className="mr-2 h-4 w-4" />
              Buy Tokens
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="relative mb-6 overflow-hidden rounded-lg">
            <Image
              src={property.images[0] || "/placeholder.svg"}
              alt={property.title}
              width={800}
              height={600}
              className="h-[400px] w-full object-cover"
            />
            {property.tokenized && (
              <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">Tokenized</Badge>
            )}
          </div>

          <div className="mb-6 grid grid-cols-4 gap-2">
            {property.images.slice(1).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${property.title} - Image ${index + 2}`}
                  width={200}
                  height={150}
                  className="h-24 w-full object-cover"
                />
              </div>
            ))}
          </div>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="nfts">NFT Assets</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Description</h2>
                  <p className="mt-2 text-muted-foreground">{property.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">Property Details</h2>
                  <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Property Type</p>
                      <p className="font-medium">{property.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Year Built</p>
                      <p className="font-medium">{property.yearBuilt}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Square Feet</p>
                      <p className="font-medium">{property.sqft.toLocaleString()}</p>
                    </div>
                    {property.bedrooms && (
                      <div>
                        <p className="text-sm text-muted-foreground">Bedrooms</p>
                        <p className="font-medium">{property.bedrooms}</p>
                      </div>
                    )}
                    {property.bathrooms && (
                      <div>
                        <p className="text-sm text-muted-foreground">Bathrooms</p>
                        <p className="font-medium">{property.bathrooms}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">Location</h2>
                  <div className="mt-2 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                    <p>{property.address}</p>
                  </div>
                  <div className="mt-4 h-64 overflow-hidden rounded-lg bg-muted">
                    {/* Map would go here in a real application */}
                    <div className="flex h-full items-center justify-center">
                      <p className="text-muted-foreground">Map view would be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="nfts">
              <PropertyNFTs propertyId={property.id} />
            </TabsContent>

            <TabsContent value="analytics">
              <PropertyAnalytics propertyId={property.id} />
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>{property.title}</CardTitle>
              <CardDescription className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                {property.address}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-3xl font-bold">${property.price.toLocaleString()}</p>
                {property.tokenized && property.yield && (
                  <p className="text-sm text-green-600">{property.yield}% APY</p>
                )}
                <Badge
                  variant="outline"
                  className={
                    property.status === "Occupied"
                      ? "mt-2 bg-green-50 text-green-700 border-green-200"
                      : "mt-2 bg-amber-50 text-amber-700 border-amber-200"
                  }
                >
                  {property.status}
                </Badge>
              </div>

              <Separator />

              {property.tokenized && property.tokenDetails && (
                <div className="space-y-2">
                  <h3 className="font-semibold">Token Details</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Tokens</p>
                      <p>{property.tokenDetails.totalTokens}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Available</p>
                      <p>{property.tokenDetails.availableTokens}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Token Price</p>
                      <p>${property.tokenDetails.tokenPrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Market Cap</p>
                      <p>${property.tokenDetails.marketCap.toLocaleString()}</p>
                    </div>
                  </div>

                  <Button className="w-full">Buy Tokens</Button>
                </div>
              )}

              <Separator />

              <div className="space-y-2">
                <h3 className="font-semibold">Property Features</h3>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                    {property.type}
                  </li>
                  <li className="flex items-center">
                    <ImageIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    {property.sqft.toLocaleString()} sqft
                  </li>
                  {property.bedrooms && <li>{property.bedrooms} Bedrooms</li>}
                  {property.bathrooms && <li>{property.bathrooms} Bathrooms</li>}
                </ul>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-semibold">Contact</h3>
                <Button variant="outline" className="w-full">
                  Request Information
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
