"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PropertyFilters() {
  const [priceRange, setPriceRange] = useState([100000, 1000000])
  const [showTokenizedOnly, setShowTokenizedOnly] = useState(false)

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="property-type">Property Type</Label>
          <Select>
            <SelectTrigger id="property-type">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="industrial">Industrial</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select>
            <SelectTrigger id="status">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="occupied">Occupied</SelectItem>
              <SelectItem value="vacant">Vacant</SelectItem>
              <SelectItem value="maintenance">Under Maintenance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Select>
            <SelectTrigger id="location">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
              <SelectItem value="miami">Miami</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="price-range">Price Range</Label>
            <span className="text-sm text-muted-foreground">
              ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
            </span>
          </div>
          <Slider
            id="price-range"
            defaultValue={[100000, 1000000]}
            max={2000000}
            step={50000}
            minStepsBetweenThumbs={1}
            onValueChange={setPriceRange}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="tokenized" checked={showTokenizedOnly} onCheckedChange={setShowTokenizedOnly} />
          <Label htmlFor="tokenized">Tokenized properties only</Label>
        </div>

        <div className="pt-4 flex justify-between">
          <Button variant="outline">Reset</Button>
          <Button className="bg-app-blue hover:bg-app-blue-dark">Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  )
}
