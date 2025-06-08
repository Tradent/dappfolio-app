"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save, Trash2, Upload } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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

export default function EditPropertyPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [property, setProperty] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    price: 0,
    type: "",
    status: "",
    sqft: 0,
    bedrooms: 0,
    bathrooms: 0,
    yearBuilt: 0,
    description: "",
    tokenized: false,
    yield: 0,
  })

  // Fetch property data
  useEffect(() => {
    const fetchProperty = () => {
      // In a real app, this would be an API call
      const foundProperty = properties.find((p) => p.id === params.id)

      if (foundProperty) {
        setProperty(foundProperty)
        setFormData({
          title: foundProperty.title,
          address: foundProperty.address,
          price: foundProperty.price,
          type: foundProperty.type,
          status: foundProperty.status,
          sqft: foundProperty.sqft,
          bedrooms: foundProperty.bedrooms || 0,
          bathrooms: foundProperty.bathrooms || 0,
          yearBuilt: foundProperty.yearBuilt,
          description: foundProperty.description,
          tokenized: foundProperty.tokenized,
          yield: foundProperty.yield || 0,
        })
      }
      setIsLoading(false)
    }

    fetchProperty()
  }, [params.id])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]:
        name === "price" ||
        name === "sqft" ||
        name === "bedrooms" ||
        name === "bathrooms" ||
        name === "yearBuilt" ||
        name === "yield"
          ? Number.parseFloat(value) || 0
          : value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // In a real app, this would be an API call to update the property
    setTimeout(() => {
      // Navigate back to the property details page
      router.push(`/properties/${params.id}`)
    }, 1000)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto py-6">
        <div className="flex justify-center">
          <p>Loading property details...</p>
        </div>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="container mx-auto py-6">
        <div className="flex justify-center">
          <p>Property not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link href={`/properties/${params.id}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Property
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Edit Property</h1>
        </div>
        <Button onClick={handleSubmit} disabled={isSaving} className="bg-app-blue hover:bg-app-blue-dark">
          {isSaving ? "Saving..." : "Save Changes"}
          {!isSaving && <Save className="ml-2 h-4 w-4" />}
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Property Title</Label>
                <Input id="title" name="title" value={formData.title} onChange={handleInputChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Property Type</Label>
                  <Select value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Residential">Residential</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                      <SelectItem value="Industrial">Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Occupied">Occupied</SelectItem>
                      <SelectItem value="Vacant">Vacant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearBuilt">Year Built</Label>
                  <Input
                    id="yearBuilt"
                    name="yearBuilt"
                    type="number"
                    value={formData.yearBuilt}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sqft">Square Feet</Label>
                <Input
                  id="sqft"
                  name="sqft"
                  type="number"
                  value={formData.sqft}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {formData.type === "Residential" && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Input
                      id="bedrooms"
                      name="bedrooms"
                      type="number"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Input
                      id="bathrooms"
                      name="bathrooms"
                      type="number"
                      step="0.5"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {property.images.map((image: string, index: number) => (
                  <div key={index} className="relative group">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Property image ${index + 1}`}
                      width={200}
                      height={150}
                      className="h-32 w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                      <Button variant="destructive" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    {index === 0 && <Badge className="absolute left-2 top-2 bg-primary">Main Image</Badge>}
                  </div>
                ))}
                <div className="flex h-32 items-center justify-center rounded-md border-2 border-dashed border-muted-foreground/25">
                  <div className="flex flex-col items-center">
                    <Upload className="mb-1 h-6 w-6 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Add Image</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tokenization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="tokenized"
                  checked={formData.tokenized}
                  onCheckedChange={(checked) => handleSwitchChange("tokenized", checked)}
                />
                <Label htmlFor="tokenized">This property is tokenized</Label>
              </div>

              {formData.tokenized && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="yield">Yield (%)</Label>
                    <Input
                      id="yield"
                      name="yield"
                      type="number"
                      step="0.1"
                      value={formData.yield}
                      onChange={handleInputChange}
                    />
                  </div>
                  {property.tokenDetails && (
                    <div className="space-y-2">
                      <Label>Token Details</Label>
                      <p className="text-sm text-muted-foreground">
                        {property.tokenDetails.totalTokens} tokens total, {property.tokenDetails.availableTokens}{" "}
                        available
                      </p>
                      <p className="text-sm text-muted-foreground">Token price: ${property.tokenDetails.tokenPrice}</p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" type="button" asChild>
              <Link href={`/properties/${params.id}`}>Cancel</Link>
            </Button>
            <Button type="submit" disabled={isSaving} className="bg-app-blue hover:bg-app-blue-dark">
              {isSaving ? "Saving..." : "Save Changes"}
              {!isSaving && <Save className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
