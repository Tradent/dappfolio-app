"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  FileText,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  PencilLine,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

// Sample data for a maintenance request
const maintenanceRequest = {
  id: "MR-1001",
  property: "Urban Glass Facade",
  unit: "101",
  tenant: {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    avatar: "/placeholder.svg?key=znm4f",
  },
  issue: "Leaking faucet in kitchen",
  description:
    "The kitchen sink faucet has been leaking steadily for the past two days. Water is pooling in the cabinet underneath. I've placed a bucket to catch the water for now.",
  priority: "Medium",
  status: "In Progress",
  dateSubmitted: "2023-04-10",
  assignedTo: "Bob's Plumbing",
  scheduledDate: "2023-04-15",
  scheduledTime: "10:00 AM - 12:00 PM",
  estimatedCost: "$150",
  actualCost: null,
  photos: ["/placeholder.svg?key=1cp9n", "/placeholder.svg?key=55ny7"],
  documents: [
    { name: "Maintenance Request Form.pdf", size: "245 KB", date: "2023-04-10" },
    { name: "Plumbing Quote.pdf", size: "180 KB", date: "2023-04-12" },
  ],
  updates: [
    {
      date: "2023-04-12",
      time: "09:15 AM",
      user: "System",
      message: "Maintenance request assigned to Bob's Plumbing",
    },
    {
      date: "2023-04-12",
      time: "10:30 AM",
      user: "Jane Admin",
      message: "Scheduled service for April 15, 10:00 AM - 12:00 PM",
    },
    {
      date: "2023-04-13",
      time: "02:45 PM",
      user: "Bob's Plumbing",
      message: "Confirmed appointment for April 15. Will bring replacement parts for the faucet.",
    },
  ],
  notes: [
    {
      date: "2023-04-11",
      user: "Jane Admin",
      note: "Called tenant to get more details about the leak. They mentioned it started after using the garbage disposal.",
    },
  ],
}

// Status badge component
function StatusBadge({ status }: { status: string }) {
  const statusStyles = {
    Open: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    "In Progress": "bg-blue-100 text-blue-800 hover:bg-blue-200",
    Scheduled: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    Completed: "bg-green-100 text-green-800 hover:bg-green-200",
    Cancelled: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  }

  return (
    <Badge variant="outline" className={statusStyles[status as keyof typeof statusStyles]}>
      {status}
    </Badge>
  )
}

// Priority badge component
function PriorityBadge({ priority }: { priority: string }) {
  const priorityStyles = {
    High: "bg-red-100 text-red-800 hover:bg-red-200",
    Medium: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    Low: "bg-green-100 text-green-800 hover:bg-green-200",
  }

  return (
    <Badge variant="outline" className={priorityStyles[priority as keyof typeof priorityStyles]}>
      {priority}
    </Badge>
  )
}

export default function MaintenanceRequestPage({ params }: { params: { id: string } }) {
  const [newNote, setNewNote] = useState("")

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/maintenance">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Maintenance
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Maintenance Request {params.id}</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline">
            <PencilLine className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                Actions
                <MoreHorizontal className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Request Actions</DropdownMenuLabel>
              <DropdownMenuItem>Update Status</DropdownMenuItem>
              <DropdownMenuItem>Reassign Vendor</DropdownMenuItem>
              <DropdownMenuItem>Reschedule</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Mark as Complete</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Cancel Request</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{maintenanceRequest.issue}</CardTitle>
                  <CardDescription>
                    {maintenanceRequest.property} - Unit {maintenanceRequest.unit}
                  </CardDescription>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StatusBadge status={maintenanceRequest.status} />
                  <span className="text-sm text-muted-foreground">Submitted on {maintenanceRequest.dateSubmitted}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">{maintenanceRequest.description}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Photos</h3>
                <div className="grid grid-cols-2 gap-2">
                  {maintenanceRequest.photos.map((photo, index) => (
                    <div key={index} className="relative aspect-video rounded-md overflow-hidden">
                      <img
                        src={photo || "/placeholder.svg"}
                        alt={`Maintenance issue photo ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Documents</h3>
                <div className="space-y-2">
                  {maintenanceRequest.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm font-medium">{doc.name}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-4">{doc.size}</span>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="updates" className="space-y-4">
            <TabsList>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="costs">Costs</TabsTrigger>
            </TabsList>

            <TabsContent value="updates" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {maintenanceRequest.updates.map((update, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                            <MessageSquare className="h-5 w-5 text-blue-700" />
                          </div>
                          {index < maintenanceRequest.updates.length - 1 && <div className="h-full w-px bg-border" />}
                        </div>
                        <div className="flex flex-col space-y-1 pb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{update.user}</span>
                            <span className="text-xs text-muted-foreground">
                              {update.date} at {update.time}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{update.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <h3 className="text-sm font-medium mb-2">Add Update</h3>
                  <div className="grid w-full gap-2">
                    <Textarea placeholder="Add a new update or message..." className="min-h-[100px]" />
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <Paperclip className="mr-2 h-4 w-4" />
                        Attach File
                      </Button>
                      <Button size="sm">Post Update</Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Internal Notes</CardTitle>
                  <CardDescription>Notes are only visible to property managers and staff</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {maintenanceRequest.notes.map((note, index) => (
                      <div key={index} className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{note.user}</span>
                          <span className="text-sm text-muted-foreground">{note.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{note.note}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <h3 className="text-sm font-medium mb-2">Add Note</h3>
                  <div className="grid w-full gap-2">
                    <Textarea
                      placeholder="Add an internal note..."
                      className="min-h-[100px]"
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                    />
                    <div className="flex justify-end">
                      <Button size="sm" disabled={!newNote.trim()}>
                        Add Note
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="costs" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Cost Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium mb-1">Estimated Cost</h3>
                        <p className="text-2xl font-bold">{maintenanceRequest.estimatedCost}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-1">Actual Cost</h3>
                        <p className="text-2xl font-bold">{maintenanceRequest.actualCost || "Pending"}</p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-sm font-medium mb-2">Cost Breakdown</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Labor (2 hours @ $65/hr)</span>
                          <span className="text-sm font-medium">$130.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Parts (Faucet replacement)</span>
                          <span className="text-sm font-medium">$20.00</span>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Total</span>
                          <span className="text-sm font-medium">$150.00</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Payment Status</h3>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                        Pending
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Update Cost Information
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Request Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Priority</div>
                <div>
                  <PriorityBadge priority={maintenanceRequest.priority} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Status</div>
                <div>
                  <StatusBadge status={maintenanceRequest.status} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Assigned To</div>
                <div className="font-medium">{maintenanceRequest.assignedTo}</div>
              </div>

              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Scheduled</div>
                <div className="font-medium">{maintenanceRequest.scheduledDate}</div>
                <div className="text-sm">{maintenanceRequest.scheduledTime}</div>
              </div>

              <Separator />

              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Tenant</div>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage
                      src={maintenanceRequest.tenant.avatar || "/placeholder.svg"}
                      alt={maintenanceRequest.tenant.name}
                    />
                    <AvatarFallback>
                      {maintenanceRequest.tenant.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{maintenanceRequest.tenant.name}</div>
                    <div className="text-xs text-muted-foreground">Unit {maintenanceRequest.unit}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Contact Information</div>
                <div className="text-sm">{maintenanceRequest.tenant.email}</div>
                <div className="text-sm">{maintenanceRequest.tenant.phone}</div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Tenant
              </Button>
              <Button variant="outline" size="sm">
                <User className="mr-2 h-4 w-4" />
                View Profile
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schedule Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Current Schedule</div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{maintenanceRequest.scheduledDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{maintenanceRequest.scheduledTime}</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="text-sm font-medium">Reschedule</div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Date</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Time</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Morning</SelectLabel>
                            <SelectItem value="8-10">8:00 AM - 10:00 AM</SelectItem>
                            <SelectItem value="10-12">10:00 AM - 12:00 PM</SelectItem>
                            <SelectLabel>Afternoon</SelectLabel>
                            <SelectItem value="12-2">12:00 PM - 2:00 PM</SelectItem>
                            <SelectItem value="2-4">2:00 PM - 4:00 PM</SelectItem>
                            <SelectItem value="4-6">4:00 PM - 6:00 PM</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button size="sm">Update Schedule</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
