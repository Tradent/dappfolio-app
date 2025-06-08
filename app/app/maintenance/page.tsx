"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, Calendar, Clock, Filter, Home, Plus, PenToolIcon as Tool, User2, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample maintenance data
const maintenanceRequests = [
  {
    id: "MR-1001",
    property: "Cozy Suburban Home",
    unit: "Main House",
    tenant: "John Smith",
    issue: "Leaking kitchen faucet",
    priority: "Medium",
    status: "Open",
    dateSubmitted: "2023-04-10",
    assignedTo: "Bob's Plumbing",
    estimatedCost: "$150-200",
    scheduledDate: "2023-04-15",
    scheduledTime: "10:00 AM - 12:00 PM",
    images: ["/exposed-pipes.png"],
    notes: "Tenant reported water pooling under the sink. May need replacement parts.",
  },
  {
    id: "MR-1002",
    property: "Urban Glass Facade",
    unit: "Apt 301",
    tenant: "Sarah Johnson",
    issue: "HVAC not cooling properly",
    priority: "High",
    status: "In Progress",
    dateSubmitted: "2023-04-09",
    assignedTo: "Cool Air Services",
    estimatedCost: "$300-450",
    scheduledDate: "2023-04-12",
    scheduledTime: "1:00 PM - 3:00 PM",
    images: ["/residential-hvac-system.png"],
    notes: "Technician diagnosed issue with compressor. Parts ordered.",
  },
  {
    id: "MR-1003",
    property: "Modern City Office",
    unit: "Suite 500",
    tenant: "Acme Corp",
    issue: "Broken window in conference room",
    priority: "Medium",
    status: "Scheduled",
    dateSubmitted: "2023-04-08",
    assignedTo: "Glass Masters",
    estimatedCost: "$500-700",
    scheduledDate: "2023-04-14",
    scheduledTime: "9:00 AM - 11:00 AM",
    images: ["/shattered-pane.png"],
    notes: "Custom glass needs to be ordered. Temporary board installed.",
  },
  {
    id: "MR-1004",
    property: "Tropical Beachfront Escape",
    unit: "Villa 3",
    tenant: "Michael Brown",
    issue: "Pool pump making loud noise",
    priority: "Low",
    status: "Completed",
    dateSubmitted: "2023-04-05",
    assignedTo: "Poolside Maintenance",
    estimatedCost: "$250",
    scheduledDate: "2023-04-07",
    scheduledTime: "2:00 PM - 4:00 PM",
    images: ["/backyard-pool-pump.png"],
    notes: "Pump bearing replaced. System now operating normally.",
  },
  {
    id: "MR-1005",
    property: "Vast Warehouse Interior",
    unit: "Warehouse A",
    tenant: "Logistics Plus",
    issue: "Loading dock door stuck",
    priority: "High",
    status: "Open",
    dateSubmitted: "2023-04-11",
    assignedTo: "Unassigned",
    estimatedCost: "TBD",
    scheduledDate: "Not scheduled",
    scheduledTime: "N/A",
    images: ["/bustling-warehouse-dock.png"],
    notes: "Urgent issue affecting operations. Need immediate assessment.",
  },
]

// Sample vendors
const vendors = [
  { id: 1, name: "Bob's Plumbing", specialty: "Plumbing", rating: 4.8 },
  { id: 2, name: "Cool Air Services", specialty: "HVAC", rating: 4.5 },
  { id: 3, name: "Glass Masters", specialty: "Windows & Glass", rating: 4.7 },
  { id: 4, name: "Poolside Maintenance", specialty: "Pool Services", rating: 4.6 },
  { id: 5, name: "ElectroPro", specialty: "Electrical", rating: 4.9 },
  { id: 6, name: "Green Lawn Care", specialty: "Landscaping", rating: 4.4 },
  { id: 7, name: "Locksmith Express", specialty: "Security & Locks", rating: 4.7 },
  { id: 8, name: "Roofing Experts", specialty: "Roofing", rating: 4.8 },
]

// Sample maintenance metrics
const metrics = {
  open: 12,
  inProgress: 8,
  scheduled: 5,
  completed: 45,
  averageResolutionTime: "3.2 days",
  satisfactionRate: 92,
  monthlySpend: "$12,450",
  yearToDateSpend: "$48,750",
}

export default function MaintenancePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  // Filter maintenance requests based on search term and filters
  const filteredRequests = maintenanceRequests.filter((request) => {
    const matchesSearch =
      request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.issue.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || request.status === statusFilter
    const matchesPriority = priorityFilter === "all" || request.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesPriority
  })

  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Maintenance Management</h1>
        <p className="text-muted-foreground">Track, manage, and resolve maintenance requests across your properties</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Open Requests</CardTitle>
            <Tool className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.open}</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.inProgress}</div>
            <p className="text-xs text-muted-foreground">-1 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Resolution Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.averageResolutionTime}</div>
            <p className="text-xs text-muted-foreground">-0.5 days from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Spend</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.monthlySpend}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="requests" className="w-full">
        <TabsList>
          <TabsTrigger value="requests">Maintenance Requests</TabsTrigger>
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Search requests..."
                className="w-[250px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Scheduled">Scheduled</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Request
            </Button>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-2 p-4 font-medium border-b">
              <div className="col-span-1">ID</div>
              <div className="col-span-2">Property</div>
              <div className="col-span-2">Tenant</div>
              <div className="col-span-3">Issue</div>
              <div className="col-span-1">Priority</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-2">Actions</div>
            </div>

            {filteredRequests.length > 0 ? (
              filteredRequests.map((request) => (
                <div key={request.id} className="grid grid-cols-12 gap-2 p-4 items-center border-b hover:bg-muted/50">
                  <div className="col-span-1 font-mono text-sm">{request.id}</div>
                  <div className="col-span-2 flex items-center">
                    <Home className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{request.property}</span>
                  </div>
                  <div className="col-span-2 flex items-center">
                    <User2 className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{request.tenant}</span>
                  </div>
                  <div className="col-span-3 truncate">{request.issue}</div>
                  <div className="col-span-1">
                    <Badge
                      variant={
                        request.priority === "High"
                          ? "destructive"
                          : request.priority === "Medium"
                            ? "default"
                            : "outline"
                      }
                    >
                      {request.priority}
                    </Badge>
                  </div>
                  <div className="col-span-1">
                    <Badge
                      variant={
                        request.status === "Open"
                          ? "outline"
                          : request.status === "In Progress"
                            ? "secondary"
                            : request.status === "Scheduled"
                              ? "default"
                              : "success"
                      }
                    >
                      {request.status}
                    </Badge>
                  </div>
                  <div className="col-span-2 flex space-x-2">
                    <Link href={`/app/maintenance/${request.id}`}>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      Update
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-muted-foreground">
                No maintenance requests found matching your filters.
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="vendors" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Input placeholder="Search vendors..." className="w-[250px]" />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  <SelectItem value="Plumbing">Plumbing</SelectItem>
                  <SelectItem value="HVAC">HVAC</SelectItem>
                  <SelectItem value="Electrical">Electrical</SelectItem>
                  <SelectItem value="General">General</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Vendor
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vendors.map((vendor) => (
              <Card key={vendor.id}>
                <CardHeader>
                  <CardTitle>{vendor.name}</CardTitle>
                  <CardDescription>{vendor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold">{vendor.rating}</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(vendor.rating) ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-sm">
                    <div className="flex justify-between">
                      <span>Active Jobs:</span>
                      <span>3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completed Jobs:</span>
                      <span>27</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. Response Time:</span>
                      <span>1.2 days</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm">Assign Job</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Schedule</CardTitle>
              <CardDescription>View and manage upcoming maintenance appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">April 2023</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Today
                  </Button>
                  <Button variant="outline" size="icon">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-100 text-blue-700 rounded-md p-2 text-center">
                        <div className="text-xs">APR</div>
                        <div className="text-lg font-bold">12</div>
                      </div>
                      <div>
                        <h4 className="font-medium">HVAC Repair - Urban Glass Facade</h4>
                        <p className="text-sm text-muted-foreground">1:00 PM - 3:00 PM • Cool Air Services</p>
                      </div>
                    </div>
                    <Badge>In Progress</Badge>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-100 text-blue-700 rounded-md p-2 text-center">
                        <div className="text-xs">APR</div>
                        <div className="text-lg font-bold">14</div>
                      </div>
                      <div>
                        <h4 className="font-medium">Window Replacement - Modern City Office</h4>
                        <p className="text-sm text-muted-foreground">9:00 AM - 11:00 AM • Glass Masters</p>
                      </div>
                    </div>
                    <Badge variant="outline">Scheduled</Badge>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-100 text-blue-700 rounded-md p-2 text-center">
                        <div className="text-xs">APR</div>
                        <div className="text-lg font-bold">15</div>
                      </div>
                      <div>
                        <h4 className="font-medium">Plumbing Repair - Cozy Suburban Home</h4>
                        <p className="text-sm text-muted-foreground">10:00 AM - 12:00 PM • Bob's Plumbing</p>
                      </div>
                    </div>
                    <Badge variant="outline">Scheduled</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Spend</CardTitle>
                <CardDescription>Year-to-date maintenance expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{metrics.yearToDateSpend}</div>
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Plumbing</span>
                      <span>$12,450 (25.5%)</span>
                    </div>
                    <Progress value={25.5} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>HVAC</span>
                      <span>$15,200 (31.2%)</span>
                    </div>
                    <Progress value={31.2} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Electrical</span>
                      <span>$8,300 (17.0%)</span>
                    </div>
                    <Progress value={17} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>General Repairs</span>
                      <span>$6,800 (14.0%)</span>
                    </div>
                    <Progress value={14} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Other</span>
                      <span>$6,000 (12.3%)</span>
                    </div>
                    <Progress value={12.3} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Request Resolution</CardTitle>
                <CardDescription>Average time to resolve by priority</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Badge variant="destructive" className="mr-2">
                        High
                      </Badge>
                      <span>Priority Requests</span>
                    </div>
                    <span className="font-medium">1.5 days</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">75% resolved within SLA</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Badge className="mr-2">Medium</Badge>
                      <span>Priority Requests</span>
                    </div>
                    <span className="font-medium">3.2 days</span>
                  </div>
                  <Progress value={92} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">92% resolved within SLA</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">
                        Low
                      </Badge>
                      <span>Priority Requests</span>
                    </div>
                    <span className="font-medium">5.8 days</span>
                  </div>
                  <Progress value={98} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">98% resolved within SLA</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tenant Satisfaction</CardTitle>
              <CardDescription>Based on post-maintenance surveys</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-8">
                <div className="relative h-40 w-40">
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      className="text-muted stroke-current"
                      strokeWidth="10"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    />
                    <circle
                      className="text-blue-500 stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      strokeDasharray={`${metrics.satisfactionRate * 2.51} ${100 * 2.51}`}
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                    />
                    <text x="50" y="50" dy="0.35em" textAnchor="middle" className="text-2xl font-bold">
                      {metrics.satisfactionRate}%
                    </text>
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">4.6/5</div>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
                <div>
                  <div className="text-2xl font-bold">87%</div>
                  <p className="text-sm text-muted-foreground">Response Rate</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-2">Recent Feedback</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 rounded-md border p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?key=5qble" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">"Very prompt service and professional repair. Thank you!"</p>
                      <p className="text-xs text-muted-foreground">John Smith • 2 days ago</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
