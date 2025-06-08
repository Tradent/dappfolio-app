"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Building2, MapPin, Home, Warehouse, Store } from "lucide-react"

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
    image: "/modern-city-office.png",
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
    image: "/tropical-beachfront-escape.png",
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
    image: "/vast-warehouse-interior.png",
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
    image: "/vibrant-city-shop.png",
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
    image: "/cozy-suburban-home.png",
    status: "Occupied",
  },
]

interface PropertyListProps {
  limit?: number
  filter?:
    | "tokenized"
    | "traditional"
    | "residential"
    | "commercial"
    | "industrial"
    | "tokenized-residential"
    | "tokenized-commercial"
    | "tokenized-industrial"
}

export function PropertyList({ limit, filter }: PropertyListProps) {
  let filteredProperties = [...properties]

  if (filter) {
    if (filter === "tokenized") {
      filteredProperties = filteredProperties.filter((p) => p.tokenized)
    } else if (filter === "traditional") {
      filteredProperties = filteredProperties.filter((p) => !p.tokenized)
    } else if (filter === "residential") {
      filteredProperties = filteredProperties.filter((p) => p.type === "Residential")
    } else if (filter === "commercial") {
      filteredProperties = filteredProperties.filter((p) => p.type === "Commercial")
    } else if (filter === "industrial") {
      filteredProperties = filteredProperties.filter((p) => p.type === "Industrial")
    } else if (filter === "tokenized-residential") {
      filteredProperties = filteredProperties.filter((p) => p.tokenized && p.type === "Residential")
    } else if (filter === "tokenized-commercial") {
      filteredProperties = filteredProperties.filter((p) => p.tokenized && p.type === "Commercial")
    } else if (filter === "tokenized-industrial") {
      filteredProperties = filteredProperties.filter((p) => p.tokenized && p.type === "Industrial")
    }
  }

  if (limit) {
    filteredProperties = filteredProperties.slice(0, limit)
  }

  return (
    <div className="space-y-4">
      {filteredProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}

function PropertyCard({ property }: { property: any }) {
  const getPropertyIcon = (type: string) => {
    switch (type) {
      case "Residential":
        return <Home className="h-4 w-4" />
      case "Commercial":
        return <Store className="h-4 w-4" />
      case "Industrial":
        return <Warehouse className="h-4 w-4" />
      default:
        return <Building2 className="h-4 w-4" />
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
            <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
            {property.tokenized && <Badge className="absolute left-2 top-2 bg-app-blue text-white">Tokenized</Badge>}
          </div>
          <div className="flex flex-col flex-grow p-4 min-w-0 w-full">
            <div className="flex justify-between items-start">
              <div className="min-w-0 pr-4">
                <h3 className="font-medium text-lg truncate">{property.title}</h3>
                <div className="flex items-center text-app-gray-500 text-sm mt-1 truncate">
                  <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                  <span className="truncate">{property.address}</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/properties/${property.id}`}>View Details</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/properties/${property.id}/edit`}>Edit Property</Link>
                    </DropdownMenuItem>
                    {!property.tokenized && <DropdownMenuItem>Tokenize</DropdownMenuItem>}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 mt-4">
              <div className="min-w-0 overflow-hidden">
                <p className="text-xs text-app-gray-500">Property Type</p>
                <div className="flex items-center mt-1">
                  {getPropertyIcon(property.type)}
                  <span className="ml-1 text-sm truncate">{property.type}</span>
                </div>
              </div>
              <div className="min-w-0 overflow-hidden">
                <p className="text-xs text-app-gray-500">Status</p>
                <Badge
                  variant="outline"
                  className={
                    property.status === "Occupied"
                      ? "bg-app-green-light text-app-green border-app-green"
                      : "bg-app-yellow-light text-app-yellow-dark border-app-yellow"
                  }
                >
                  {property.status}
                </Badge>
              </div>
              <div className="min-w-0 overflow-hidden">
                <p className="text-xs text-app-gray-500">Size</p>
                <p className="text-sm truncate">{property.sqft.toLocaleString()} sqft</p>
              </div>
              <div className="min-w-0 overflow-hidden">
                <p className="text-xs text-app-gray-500">Value</p>
                <p className="text-sm font-medium truncate">${property.price.toLocaleString()}</p>
                {property.tokenized && property.yield && (
                  <p className="text-xs text-app-green">{property.yield}% APY</p>
                )}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t flex flex-wrap justify-end gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/properties/${property.id}`}>View Details</Link>
              </Button>
              <Button asChild size="sm" className="bg-app-blue hover:bg-app-blue-dark">
                <Link href={`/properties/${property.id}/manage`}>Manage</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
