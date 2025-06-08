"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  Plus,
  Download,
  Mail,
  Phone,
  Calendar,
  Home,
  CreditCard,
  FileText,
  MoreHorizontal,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample tenant data
const tenants = [
  {
    id: "t1",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "(555) 123-4567",
    property: "Urban Glass Facade",
    unit: "301",
    leaseStart: "2023-06-01",
    leaseEnd: "2024-05-31",
    rent: 2200,
    status: "current", // current, late, ending
    balance: 0,
    documents: 4,
    lastPayment: "2023-11-01",
    paymentStatus: "on-time", // on-time, late, pending
  },
  {
    id: "t2",
    name: "Morgan Smith",
    email: "morgan.smith@example.com",
    phone: "(555) 234-5678",
    property: "Cozy Suburban Home",
    unit: "Main",
    leaseStart: "2023-03-15",
    leaseEnd: "2024-03-14",
    rent: 1850,
    status: "late",
    balance: 1850,
    documents: 3,
    lastPayment: "2023-10-01",
    paymentStatus: "late",
  },
  {
    id: "t3",
    name: "Taylor Williams",
    email: "taylor.williams@example.com",
    phone: "(555) 345-6789",
    property: "Modern City Office",
    unit: "Suite 400",
    leaseStart: "2023-01-01",
    leaseEnd: "2023-12-31",
    rent: 3500,
    status: "ending",
    balance: 0,
    documents: 5,
    lastPayment: "2023-11-01",
    paymentStatus: "on-time",
  },
  {
    id: "t4",
    name: "Jordan Lee",
    email: "jordan.lee@example.com",
    phone: "(555) 456-7890",
    property: "Tropical Beachfront Escape",
    unit: "Villa 3",
    leaseStart: "2023-07-01",
    leaseEnd: "2024-06-30",
    rent: 4200,
    status: "current",
    balance: 0,
    documents: 6,
    lastPayment: "2023-11-01",
    paymentStatus: "on-time",
  },
  {
    id: "t5",
    name: "Casey Brown",
    email: "casey.brown@example.com",
    phone: "(555) 567-8901",
    property: "Vibrant City Shop",
    unit: "Shop 12",
    leaseStart: "2023-05-15",
    leaseEnd: "2025-05-14",
    rent: 3800,
    status: "current",
    balance: 3800,
    documents: 4,
    lastPayment: "2023-10-15",
    paymentStatus: "pending",
  },
]

// Sample lease applications
const applications = [
  {
    id: "a1",
    name: "Riley Garcia",
    email: "riley.garcia@example.com",
    phone: "(555) 678-9012",
    property: "Urban Glass Facade",
    unit: "405",
    applicationDate: "2023-11-05",
    status: "pending", // pending, approved, rejected
    creditScore: 720,
    income: 85000,
    documents: 3,
  },
  {
    id: "a2",
    name: "Jamie Wilson",
    email: "jamie.wilson@example.com",
    phone: "(555) 789-0123",
    property: "Cozy Suburban Home",
    unit: "Guest House",
    applicationDate: "2023-11-02",
    status: "approved",
    creditScore: 750,
    income: 92000,
    documents: 5,
  },
  {
    id: "a3",
    name: "Drew Martinez",
    email: "drew.martinez@example.com",
    phone: "(555) 890-1234",
    property: "Modern City Office",
    unit: "Suite 202",
    applicationDate: "2023-10-28",
    status: "rejected",
    creditScore: 580,
    income: 60000,
    documents: 2,
  },
]

export default function TenantsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [propertyFilter, setPropertyFilter] = useState("all")

  // Filter tenants based on search term and filters
  const filteredTenants = tenants.filter((tenant) => {
    const matchesSearch =
      tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.property.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || tenant.status === statusFilter
    const matchesProperty = propertyFilter === "all" || tenant.property === propertyFilter

    return matchesSearch && matchesStatus && matchesProperty
  })

  // Get unique properties for filter dropdown
  const uniqueProperties = [...new Set(tenants.map((tenant) => tenant.property))]

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Tenant Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Tenant
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
            <CardTitle className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>Current Tenants</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-3xl font-bold">{tenants.filter((t) => t.status === "current").length}</div>
            <p className="text-sm text-muted-foreground">Active leases</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
              <span>Late Payments</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-3xl font-bold">{tenants.filter((t) => t.paymentStatus === "late").length}</div>
            <p className="text-sm text-muted-foreground">Tenants with overdue rent</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-amber-500" />
              <span>Expiring Leases</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-3xl font-bold">{tenants.filter((t) => t.status === "ending").length}</div>
            <p className="text-sm text-muted-foreground">Leases ending within 30 days</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tenants">
        <TabsList>
          <TabsTrigger value="tenants">Current Tenants</TabsTrigger>
          <TabsTrigger value="applications">Lease Applications</TabsTrigger>
          <TabsTrigger value="history">Tenant History</TabsTrigger>
        </TabsList>

        <TabsContent value="tenants" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tenants..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex gap-2">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="current">Current</SelectItem>
                      <SelectItem value="late">Late Payment</SelectItem>
                      <SelectItem value="ending">Ending Soon</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={propertyFilter} onValueChange={setPropertyFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by property" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Properties</SelectItem>
                      {uniqueProperties.map((property) => (
                        <SelectItem key={property} value={property}>
                          {property}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tenant</TableHead>
                      <TableHead>Property / Unit</TableHead>
                      <TableHead>Lease Period</TableHead>
                      <TableHead>Monthly Rent</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTenants.length > 0 ? (
                      filteredTenants.map((tenant) => (
                        <TableRow key={tenant.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{tenant.name}</div>
                              <div className="text-sm text-muted-foreground flex items-center gap-2">
                                <Mail className="h-3 w-3" /> {tenant.email}
                              </div>
                              <div className="text-sm text-muted-foreground flex items-center gap-2">
                                <Phone className="h-3 w-3" /> {tenant.phone}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{tenant.property}</div>
                            <div className="text-sm text-muted-foreground">Unit: {tenant.unit}</div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <div>{new Date(tenant.leaseStart).toLocaleDateString()}</div>
                                <div className="text-sm text-muted-foreground">
                                  to {new Date(tenant.leaseEnd).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">${tenant.rent.toLocaleString()}</div>
                            <div className="text-sm text-muted-foreground">
                              {tenant.balance > 0 ? (
                                <span className="text-red-500">Balance: ${tenant.balance}</span>
                              ) : (
                                <span className="text-green-500">Paid</span>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            {tenant.status === "current" && tenant.paymentStatus === "on-time" && (
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800">
                                Current
                              </Badge>
                            )}
                            {tenant.status === "current" && tenant.paymentStatus === "pending" && (
                              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 hover:text-amber-800">
                                Payment Pending
                              </Badge>
                            )}
                            {tenant.status === "late" && (
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 hover:text-red-800">
                                Late Payment
                              </Badge>
                            )}
                            {tenant.status === "ending" && (
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800">
                                Ending Soon
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  <Link href={`/app/tenants/${tenant.id}`} className="flex w-full">
                                    View Details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <CreditCard className="mr-2 h-4 w-4" /> Record Payment
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <FileText className="mr-2 h-4 w-4" /> View Documents
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <Mail className="mr-2 h-4 w-4" /> Send Message
                                </DropdownMenuItem>
                                <DropdownMenuItem>Edit Tenant</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-4">
                          No tenants found matching your filters
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Lease Applications</h3>
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  New Application
                </Button>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Property / Unit</TableHead>
                      <TableHead>Application Date</TableHead>
                      <TableHead>Credit Score</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{app.name}</div>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                              <Mail className="h-3 w-3" /> {app.email}
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                              <Phone className="h-3 w-3" /> {app.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{app.property}</div>
                          <div className="text-sm text-muted-foreground">Unit: {app.unit}</div>
                        </TableCell>
                        <TableCell>{new Date(app.applicationDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="font-medium">{app.creditScore}</div>
                          <div className="text-sm text-muted-foreground">Income: ${app.income.toLocaleString()}/yr</div>
                        </TableCell>
                        <TableCell>
                          {app.status === "pending" && (
                            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 hover:text-amber-800">
                              Pending
                            </Badge>
                          )}
                          {app.status === "approved" && (
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800">
                              Approved
                            </Badge>
                          )}
                          {app.status === "rejected" && (
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100 hover:text-red-800">
                              Rejected
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View Application</DropdownMenuItem>
                              <DropdownMenuItem>Review Documents</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Approve Application</DropdownMenuItem>
                              <DropdownMenuItem>Reject Application</DropdownMenuItem>
                              <DropdownMenuItem>Request More Info</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Tenant History</h3>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
              </div>

              <div className="text-center py-8">
                <Home className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-medium">Tenant History</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  View past tenants, lease history, and payment records
                </p>
                <Button className="mt-4" variant="outline">
                  View Archived Tenants
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
