"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Coins, ExternalLink, Heart, MoreHorizontal, Share2 } from "lucide-react"

// Sample property data
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
    image: "/urban-glass-facade.png",
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
    image: "/modern-city-office.png",
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
    image: "/tropical-beachfront-escape.png",
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
    image: "/vast-warehouse-interior.png",
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
    image: "/vibrant-city-shop.png",
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
    image: "/placeholder.svg?height=300&width=500&query=suburban house",
  },
]

export function PropertyGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden">
          <div className="relative">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              width={500}
              height={300}
              className="h-48 w-full object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 bg-background/80 hover:bg-background/90"
            >
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to favorites</span>
            </Button>
            {property.tokenized && (
              <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">Tokenized</Badge>
            )}
          </div>
          <CardHeader className="p-4 pb-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold line-clamp-1">{property.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">{property.address}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Share2 className="mr-2 h-4 w-4" /> Share
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ExternalLink className="mr-2 h-4 w-4" /> View Details
                  </DropdownMenuItem>
                  {!property.tokenized && (
                    <DropdownMenuItem>
                      <Coins className="mr-2 h-4 w-4" /> Tokenize
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">${property.price.toLocaleString()}</p>
                {property.tokenized && property.yield && (
                  <p className="text-sm text-green-600">{property.yield}% APY</p>
                )}
              </div>
              <div className="text-right text-sm">
                <p>{property.type}</p>
                <p>
                  {property.bedrooms && `${property.bedrooms} bd • `}
                  {property.bathrooms && `${property.bathrooms} ba • `}
                  {property.sqft.toLocaleString()} sqft
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button asChild className="w-full">
              <Link href={`/properties/${property.id}`}>View Property</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
