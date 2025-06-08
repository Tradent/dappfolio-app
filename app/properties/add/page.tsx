"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Building2, Save, Upload } from "lucide-react"

export default function AddPropertyPage() {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    price: 0,
    type: "",
    status: "Vacant",
    sqft: 0,
    bedrooms: 0,
    bathrooms: 0,
    yearBuilt: new Date().getFullYear(),
    description: "",
    tokenized: false,
    yield: 0,
  })

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

    // In a real app, this would be an API call to create the property
    setTimeout(() => {
      // Navigate back to the properties list
      router.push("/properties")
    }, 1000)
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link href="/properties">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Add New Property</h1>
        </div>
        <Button onClick={handleSubmit} disabled={isSaving} className="bg-app-blue hover:bg-app-blue-dark">
          {isSaving ? "Saving..." : "Save Property"}
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
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Modern Apartment in Downtown"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Full property address"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={formData.price || ""}
                    onChange={handleInputChange}
                    placeholder="e.g., 750000"
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
                    value={formData.yearBuilt || ""}
                    onChange={handleInputChange}
                    placeholder="e.g., 2015"
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
                  value={formData.sqft || ""}
                  onChange={handleInputChange}
                  placeholder="e.g., 1200"
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
                      value={formData.bedrooms || ""}
                      onChange={handleInputChange}
                      placeholder="e.g., 2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Input
                      id="bathrooms"
                      name="bathrooms"
                      type="number"
                      step="0.5"
                      value={formData.bathrooms || ""}
                      onChange={handleInputChange}
                      placeholder="e.g., 2.5"
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
                  placeholder="Provide a detailed description of the property"
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
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-md p-8 text-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="p-3 rounded-full bg-muted">
                    <Upload className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium">Upload Property Images</h3>
                  <p className="text-sm text-muted-foreground">Drag & drop image files here, or click to browse</p>
                  <Button variant="outline" type="button" className="mt-2">
                    Choose Files
                  </Button>
                  <p className="text-xs text-muted-foreground">Maximum file size: 10MB (JPEG, PNG, WebP)</p>
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
                <Label htmlFor="tokenized">Tokenize this property</Label>
              </div>

              {formData.tokenized && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="yield">Expected Yield (%)</Label>
                    <Input
                      id="yield"
                      name="yield"
                      type="number"
                      step="0.1"
                      value={formData.yield || ""}
                      onChange={handleInputChange}
                      placeholder="e.g., 5.2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Tokenization Details</Label>
                    <p className="text-sm text-muted-foreground">
                      Additional tokenization details will be configured after property creation.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" type="button" asChild>
              <Link href="/properties">Cancel</Link>
            </Button>
            <Button type="submit" disabled={isSaving} className="bg-app-blue hover:bg-app-blue-dark">
              {isSaving ? "Saving..." : "Create Property"}
              {!isSaving && <Building2 className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
