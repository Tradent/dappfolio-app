"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  Phone,
  Home,
  Calendar,
  CreditCard,
  FileText,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Download,
  Upload,
  Edit,
  Trash2,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample tenant data - in a real app, this would come from an API
const tenant = {
  id: "t1",
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  phone: "(555) 123-4567",
  property: "Urban Glass Facade",
  unit: "301",
  leaseStart: "2023-06-01",
  leaseEnd: "2024-05-31",
  moveInDate: "2023-06-01",
  rent: 2200,
  securityDeposit: 2200,
  status: "current",
  balance: 0,
  documents: [
    { id: "d1", name: "Lease Agreement", type: "PDF", date: "2023-05-15", size: "1.2 MB" },
    { id: "d2", name: "Tenant Application", type: "PDF", date: "2023-05-10", size: "850 KB" },
    { id: "d3", name: "Credit Report", type: "PDF", date: "2023-05-10", size: "1.5 MB" },
    { id: "d4", name: "Move-in Inspection", type: "PDF", date: "2023-06-01", size: "2.3 MB" },
  ],
  payments: [
    { id: "p1", date: "2023-11-01", amount: 2200, type: "Rent", status: "Completed", method: "Bank Transfer" },
    { id: "p2", date: "2023-10-01", amount: 2200, type: "Rent", status: "Completed", method: "Bank Transfer" },
    { id: "p3", date: "2023-09-01", amount: 2200, type: "Rent", status: "Completed", method: "Bank Transfer" },
    { id: "p4", date: "2023-08-01", amount: 2200, type: "Rent", status: "Completed", method: "Bank Transfer" },
    { id: "p5", date: "2023-07-01", amount: 2200, type: "Rent", status: "Completed", method: "Bank Transfer" },
    { id: "p6", date: "2023-06-01", amount: 2200, type: "Rent", status: "Completed", method: "Bank Transfer" },
    {
      id: "p7",
      date: "2023-05-15",
      amount: 2200,
      type: "Security Deposit",
      status: "Completed",
      method: "Bank Transfer",
    },
  ],
  maintenanceRequests: [
    {
      id: "m1",
      title: "Leaking Faucet in Bathroom",
      date: "2023-10-25",
      status: "completed",
      priority: "medium",
      description: "The bathroom sink faucet is leaking constantly, causing water waste and noise.",
      resolution: "Plumber replaced the washer and tightened connections.",
    },
    {
      id: "m2",
      title: "HVAC Not Cooling Properly",
      date: "2023-09-12",
      status: "completed",
      priority: "high",
      description: "Air conditioning is running but not cooling the apartment below 78 degrees.",
      resolution: "HVAC technician recharged refrigerant and cleaned filters.",
    },
    {
      id: "m3",
      title: "Dishwasher Not Draining",
      date: "2023-11-05",
      status: "in-progress",
      priority: "medium",
      description: "Dishwasher fills with water but doesn't drain properly after cycle completes.",
      resolution: null,
    },
  ],
  notes: [
    {
      id: "n1",
      date: "2023-10-15",
      author: "Property Manager",
      content: "Tenant requested information about lease renewal options.",
    },
    {
      id: "n2",
      date: "2023-09-20",
      author: "Maintenance",
      content: "Tenant always provides clear access for scheduled maintenance.",
    },
    {
      id: "n3",
      date: "2023-07-05",
      author: "Property Manager",
      content: "Tenant reported noise complaint about unit 302, issue was resolved.",
    },
  ],
}

export default function TenantDetailsPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")

  // In a real app, you would fetch tenant data based on the ID
  // const { data: tenant, isLoading, error } = useTenant(params.id)

  // Get tenant initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/tenants">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Tenant Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-blue-100 text-blue-800">{getInitials(tenant.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{tenant.name}</CardTitle>
                  <CardDescription>Tenant since {new Date(tenant.moveInDate).toLocaleDateString()}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{tenant.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{tenant.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div>{tenant.property}</div>
                    <div className="text-sm text-muted-foreground">Unit {tenant.unit}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div>
                      Lease: {new Date(tenant.leaseStart).toLocaleDateString()} -{" "}
                      {new Date(tenant.leaseEnd).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {tenant.status === "current" ? (
                        <span className="text-green-600">Active Lease</span>
                      ) : tenant.status === "ending" ? (
                        <span className="text-amber-600">Ending Soon</span>
                      ) : (
                        <span className="text-red-600">Inactive</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline" size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Monthly Rent</span>
                <span className="font-medium">${tenant.rent.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Security Deposit</span>
                <span className="font-medium">${tenant.securityDeposit.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Current Balance</span>
                <span className={tenant.balance > 0 ? "font-medium text-red-600" : "font-medium text-green-600"}>
                  ${tenant.balance.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Last Payment</span>
                <span className="font-medium">{new Date(tenant.payments[0].date).toLocaleDateString()}</span>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <Button className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                Record Payment
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tenant Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Payment Status</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span className="font-medium">Current</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Lease End</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-blue-500 mr-2" />
                          <span className="font-medium">{new Date(tenant.leaseEnd).toLocaleDateString()}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Maintenance</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center">
                          <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                          <span className="font-medium">1 Open Request</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      {[
                        ...tenant.payments.slice(0, 2),
                        ...tenant.maintenanceRequests.slice(0, 1),
                        ...tenant.notes.slice(0, 1),
                      ]
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .slice(0, 4)
                        .map((item, index) => {
                          let icon
                          let title
                          let description

                          if ("amount" in item) {
                            icon = <CreditCard className="h-8 w-8 p-1.5 bg-green-100 text-green-600 rounded-full" />
                            title = `Payment: $${item.amount}`
                            description = `${item.type} payment on ${new Date(item.date).toLocaleDateString()}`
                          } else if ("title" in item) {
                            icon = <Home className="h-8 w-8 p-1.5 bg-amber-100 text-amber-600 rounded-full" />
                            title = item.title
                            description = `Maintenance request on ${new Date(item.date).toLocaleDateString()}`
                          } else {
                            icon = <MessageSquare className="h-8 w-8 p-1.5 bg-blue-100 text-blue-600 rounded-full" />
                            title = `Note by ${item.author}`
                            description = item.content
                          }

                          return (
                            <div key={index} className="flex gap-4">
                              {icon}
                              <div>
                                <div className="font-medium">{title}</div>
                                <div className="text-sm text-muted-foreground">{description}</div>
                              </div>
                            </div>
                          )
                        })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Notes</h3>
                    <div className="space-y-4">
                      {tenant.notes.map((note) => (
                        <div key={note.id} className="border rounded-md p-4">
                          <div className="flex justify-between items-start">
                            <div className="font-medium">{note.author}</div>
                            <div className="text-sm text-muted-foreground">
                              {new Date(note.date).toLocaleDateString()}
                            </div>
                          </div>
                          <p className="mt-2 text-sm">{note.content}</p>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="mt-4 w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Add Note
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payments" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Payment History</CardTitle>
                    <CardDescription>View all payments and transactions</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Method</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tenant.payments.map((payment) => (
                          <TableRow key={payment.id}>
                            <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                            <TableCell>{payment.type}</TableCell>
                            <TableCell>${payment.amount.toLocaleString()}</TableCell>
                            <TableCell>
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800">
                                {payment.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{payment.method}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-6">
                  <Button variant="outline">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Payment Analytics
                  </Button>
                  <Button>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Record Payment
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Documents</CardTitle>
                    <CardDescription>Manage tenant documents and files</CardDescription>
                  </div>
                  <Button>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Document
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Document Name</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Date Added</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tenant.documents.map((doc) => (
                          <TableRow key={doc.id}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-muted-foreground" />
                                <span>{doc.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{doc.type}</TableCell>
                            <TableCell>{new Date(doc.date).toLocaleDateString()}</TableCell>
                            <TableCell>{doc.size}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon">
                                  <Download className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="maintenance" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Maintenance Requests</CardTitle>
                    <CardDescription>View and manage maintenance issues</CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Request
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tenant.maintenanceRequests.map((request) => (
                      <Card key={request.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{request.title}</CardTitle>
                              <CardDescription>{new Date(request.date).toLocaleDateString()}</CardDescription>
                            </div>
                            <Badge
                              className={
                                request.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : request.status === "in-progress"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-blue-100 text-blue-800"
                              }
                            >
                              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">{request.description}</p>
                          {request.resolution && (
                            <div className="mt-4 pt-4 border-t">
                              <p className="text-sm font-medium">Resolution:</p>
                              <p className="text-sm text-muted-foreground">{request.resolution}</p>
                            </div>
                          )}
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                          {request.status !== "completed" && (
                            <>
                              <Button variant="outline" size="sm">
                                Update Status
                              </Button>
                              <Button size="sm">Mark Complete</Button>
                            </>
                          )}
                          {request.status === "completed" && (
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
