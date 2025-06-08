"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowUpDown,
  Calendar,
  ChevronDown,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  Filter,
  Plus,
  Printer,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

// Sample data for financial metrics
const financialMetrics = [
  { name: "Total Revenue", value: "$124,500.00", change: "+12.5%", trend: "up" },
  { name: "Total Expenses", value: "$45,230.00", change: "+3.2%", trend: "up" },
  { name: "Net Income", value: "$79,270.00", change: "+18.7%", trend: "up" },
  { name: "Occupancy Rate", value: "94%", change: "+2.1%", trend: "up" },
]

// Sample data for recent transactions
const recentTransactions = [
  {
    id: "TR-7829",
    date: "2023-04-10",
    description: "Rent Payment - Unit 301",
    property: "Urban Glass Facade",
    category: "Income",
    amount: 2200.0,
    status: "completed",
  },
  {
    id: "TR-7830",
    date: "2023-04-09",
    description: "Plumbing Repair",
    property: "Cozy Suburban Home",
    category: "Expense",
    amount: -450.0,
    status: "completed",
  },
  {
    id: "TR-7831",
    date: "2023-04-08",
    description: "Security Deposit - Unit 205",
    property: "Modern City Office",
    category: "Income",
    amount: 3000.0,
    status: "completed",
  },
  {
    id: "TR-7832",
    date: "2023-04-07",
    description: "Landscaping Service",
    property: "Tropical Beachfront Escape",
    category: "Expense",
    amount: -850.0,
    status: "completed",
  },
  {
    id: "TR-7833",
    date: "2023-04-06",
    description: "Rent Payment - Unit 102",
    property: "Vibrant City Shop",
    category: "Income",
    amount: 1800.0,
    status: "completed",
  },
]

// Sample data for income breakdown
const incomeData = [
  { name: "Rent", value: 85000 },
  { name: "Deposits", value: 12000 },
  { name: "Late Fees", value: 3500 },
  { name: "Other", value: 5000 },
]

// Sample data for expense breakdown
const expenseData = [
  { name: "Maintenance", value: 18000 },
  { name: "Utilities", value: 12000 },
  { name: "Insurance", value: 8000 },
  { name: "Property Tax", value: 15000 },
  { name: "Management", value: 7000 },
]

// Sample data for monthly financial trends
const monthlyTrends = [
  { name: "Jan", income: 32000, expenses: 18000, profit: 14000 },
  { name: "Feb", income: 34000, expenses: 16000, profit: 18000 },
  { name: "Mar", income: 36000, expenses: 17000, profit: 19000 },
  { name: "Apr", income: 38000, expenses: 18500, profit: 19500 },
  { name: "May", income: 40000, expenses: 19000, profit: 21000 },
  { name: "Jun", income: 42000, expenses: 20000, profit: 22000 },
]

// Sample data for upcoming payments
const upcomingPayments = [
  {
    id: "PAY-1234",
    dueDate: "2023-04-15",
    description: "Property Insurance - Q2",
    amount: 4500.0,
    status: "pending",
  },
  {
    id: "PAY-1235",
    dueDate: "2023-04-18",
    description: "Property Tax - Urban Glass Facade",
    amount: 6200.0,
    status: "pending",
  },
  {
    id: "PAY-1236",
    dueDate: "2023-04-22",
    description: "Utility Bills - Multiple Properties",
    amount: 3800.0,
    status: "pending",
  },
]

// Sample data for budget vs actual
const budgetData = [
  { category: "Rent Income", budgeted: 90000, actual: 85000, variance: -5000 },
  { category: "Maintenance", budgeted: 15000, actual: 18000, variance: 3000 },
  { category: "Utilities", budgeted: 10000, actual: 12000, variance: 2000 },
  { category: "Insurance", budgeted: 8000, actual: 8000, variance: 0 },
  { category: "Property Tax", budgeted: 15000, actual: 15000, variance: 0 },
  { category: "Management", budgeted: 8000, actual: 7000, variance: -1000 },
]

// Colors for charts
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

export default function AccountingPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProperty, setSelectedProperty] = useState("all")
  const [dateRange, setDateRange] = useState("month")

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Accounting & Finance</h1>
          <p className="text-muted-foreground">
            Manage your property finances, track income and expenses, and generate reports.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Select Date Range
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Transaction
          </Button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {financialMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.name}</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="budgeting">Budgeting</TabsTrigger>
          <TabsTrigger value="taxes">Tax Documents</TabsTrigger>
        </TabsList>

        {/* Dashboard Tab */}
        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Monthly Financial Trends */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Monthly Financial Trends</CardTitle>
                <CardDescription>Income, expenses, and profit over time</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyTrends} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="income" fill="#0088FE" name="Income" />
                      <Bar dataKey="expenses" fill="#FF8042" name="Expenses" />
                      <Bar dataKey="profit" fill="#00C49F" name="Profit" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Income Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Income Breakdown</CardTitle>
                <CardDescription>Sources of revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={incomeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {incomeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Expense Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Where your money goes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your latest financial activities</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Property</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.slice(0, 5).map((transaction) => (
                      <TableRow
                        key={transaction.id}
                        className="cursor-pointer hover:bg-muted/50"
                        onClick={() => router.push(`/app/accounting/transactions/${transaction.id}`)}
                      >
                        <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.property}</TableCell>
                        <TableCell>
                          <Badge variant={transaction.category === "Income" ? "default" : "destructive"}>
                            {transaction.category}
                          </Badge>
                        </TableCell>
                        <TableCell
                          className={`text-right ${transaction.amount >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          ${Math.abs(transaction.amount).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Upcoming Payments */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Payments</CardTitle>
                <CardDescription>Bills and scheduled payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingPayments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{payment.description}</p>
                        <p className="text-sm text-muted-foreground">
                          Due: {new Date(payment.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${payment.amount.toFixed(2)}</p>
                        <Badge variant="outline">{payment.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Payment Schedule
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Transactions Tab */}
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Transactions</CardTitle>
              <CardDescription>View and manage all financial transactions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Filters */}
              <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search transactions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-[250px]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Select value={selectedProperty} onValueChange={setSelectedProperty}>
                    <SelectTrigger className="w-full md:w-[200px]">
                      <SelectValue placeholder="Select property" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Properties</SelectItem>
                      <SelectItem value="urban-glass">Urban Glass Facade</SelectItem>
                      <SelectItem value="cozy-suburban">Cozy Suburban Home</SelectItem>
                      <SelectItem value="modern-city">Modern City Office</SelectItem>
                      <SelectItem value="tropical-beach">Tropical Beachfront Escape</SelectItem>
                      <SelectItem value="vibrant-city">Vibrant City Shop</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2 ml-auto">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    More Filters
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Transaction
                  </Button>
                </div>
              </div>

              {/* Transactions Table */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">
                      <div className="flex items-center space-x-1">
                        <span>ID</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Date</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Property</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <span>Amount</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transaction) => (
                    <TableRow
                      key={transaction.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => router.push(`/app/accounting/transactions/${transaction.id}`)}
                    >
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.property}</TableCell>
                      <TableCell>
                        <Badge variant={transaction.category === "Income" ? "default" : "destructive"}>
                          {transaction.category}
                        </Badge>
                      </TableCell>
                      <TableCell
                        className={`text-right ${transaction.amount >= 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        ${Math.abs(transaction.amount).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{transaction.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <ChevronDown className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Transaction</DropdownMenuItem>
                            <DropdownMenuItem>Add Receipt</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Delete Transaction</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Showing 1-5 of 24 transactions</p>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>Generate and view financial reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Income Statement</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground">Revenue, expenses, and profit for a specific period</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Generate Report
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Balance Sheet</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground">
                      Assets, liabilities, and equity at a specific point in time
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Generate Report
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Cash Flow Statement</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground">Cash inflows and outflows for a specific period</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Generate Report
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Rent Roll</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground">Current tenants, lease terms, and rent amounts</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Generate Report
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Expense Report</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground">Detailed breakdown of expenses by category</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Generate Report
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Property Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground">Financial performance metrics for each property</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Generate Report
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>Your previously generated reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Name</TableHead>
                    <TableHead>Generated Date</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Format</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Income Statement</TableCell>
                    <TableCell>Apr 10, 2023</TableCell>
                    <TableCell>Q1 2023</TableCell>
                    <TableCell>PDF</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Printer className="h-4 w-4" />
                        <span className="sr-only">Print</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Balance Sheet</TableCell>
                    <TableCell>Apr 5, 2023</TableCell>
                    <TableCell>Q1 2023</TableCell>
                    <TableCell>PDF</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Printer className="h-4 w-4" />
                        <span className="sr-only">Print</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Rent Roll</TableCell>
                    <TableCell>Apr 1, 2023</TableCell>
                    <TableCell>April 2023</TableCell>
                    <TableCell>Excel</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Printer className="h-4 w-4" />
                        <span className="sr-only">Print</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Budgeting Tab */}
        <TabsContent value="budgeting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Budget vs. Actual</CardTitle>
              <CardDescription>Compare your budgeted amounts with actual spending</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Budgeted</TableHead>
                    <TableHead className="text-right">Actual</TableHead>
                    <TableHead className="text-right">Variance</TableHead>
                    <TableHead>Progress</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {budgetData.map((item) => (
                    <TableRow key={item.category}>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className="text-right">${item.budgeted.toLocaleString()}</TableCell>
                      <TableCell className="text-right">${item.actual.toLocaleString()}</TableCell>
                      <TableCell
                        className={`text-right ${item.variance > 0 ? "text-red-600" : item.variance < 0 ? "text-green-600" : ""}`}
                      >
                        {item.variance > 0 ? "+" : ""}
                        {item.variance.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Progress
                            value={(item.actual / item.budgeted) * 100}
                            className="h-2 w-full"
                            indicatorClassName={item.actual > item.budgeted ? "bg-red-500" : "bg-green-500"}
                          />
                          <span className="ml-2 text-xs">{Math.round((item.actual / item.budgeted) * 100)}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Create New Budget
              </Button>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Generate Budget Report
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Budget Planning</CardTitle>
              <CardDescription>Create and manage budgets for your properties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 font-medium">Active Budgets</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="font-medium">Annual Operating Budget 2023</p>
                          <p className="text-sm text-muted-foreground">Jan 1, 2023 - Dec 31, 2023</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="font-medium">Capital Improvements Q2 2023</p>
                          <p className="text-sm text-muted-foreground">Apr 1, 2023 - Jun 30, 2023</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="font-medium">Marketing Budget 2023</p>
                          <p className="text-sm text-muted-foreground">Jan 1, 2023 - Dec 31, 2023</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium">Budget Templates</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="font-medium">Annual Operating Budget</p>
                          <p className="text-sm text-muted-foreground">Standard template for yearly operations</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Use
                        </Button>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="font-medium">Property Renovation</p>
                          <p className="text-sm text-muted-foreground">Template for renovation projects</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Use
                        </Button>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="font-medium">New Property Acquisition</p>
                          <p className="text-sm text-muted-foreground">Template for property purchases</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Use
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Create Custom Budget
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Tax Documents Tab */}
        <TabsContent value="taxes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tax Documents</CardTitle>
              <CardDescription>Manage tax-related documents and filings</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="documents">
                <TabsList className="mb-4">
                  <TabsTrigger value="documents">Tax Documents</TabsTrigger>
                  <TabsTrigger value="filings">Tax Filings</TabsTrigger>
                  <TabsTrigger value="calendar">Tax Calendar</TabsTrigger>
                </TabsList>

                <TabsContent value="documents" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">1099 Forms</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">Income reported to contractors and vendors</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          <FileText className="mr-2 h-4 w-4" />
                          Generate Forms
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Property Tax Statements</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">Annual property tax assessments and payments</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          <FileText className="mr-2 h-4 w-4" />
                          View Statements
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Depreciation Schedules</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground">
                          Asset depreciation calculations for tax purposes
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          <FileText className="mr-2 h-4 w-4" />
                          View Schedules
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="filings" className="space-y-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tax Year</TableHead>
                        <TableHead>Form Type</TableHead>
                        <TableHead>Filing Status</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>2022</TableCell>
                        <TableCell>Schedule E</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Filed
                          </Badge>
                        </TableCell>
                        <TableCell>Apr 15, 2023</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2022</TableCell>
                        <TableCell>1099-MISC Forms</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Filed
                          </Badge>
                        </TableCell>
                        <TableCell>Jan 31, 2023</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2023</TableCell>
                        <TableCell>Estimated Tax Payments</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            Pending
                          </Badge>
                        </TableCell>
                        <TableCell>Jun 15, 2023</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                          <Button variant="ghost" size="sm">
                            <CreditCard className="h-4 w-4" />
                            <span className="sr-only">Pay</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="calendar" className="space-y-4">
                  <div className="rounded-lg border">
                    <div className="grid grid-cols-7 gap-px bg-muted">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="bg-background p-3 text-center text-sm font-medium">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-px bg-muted">
                      {Array.from({ length: 35 }).map((_, i) => {
                        const day = i - 5
                        const isCurrentMonth = day >= 1 && day <= 30
                        const isToday = day === 15
                        const hasTaxEvent = [15, 17].includes(day)

                        return (
                          <div
                            key={i}
                            className={`bg-background p-3 ${isCurrentMonth ? "" : "text-muted-foreground"} ${isToday ? "bg-blue-50" : ""}`}
                          >
                            {isCurrentMonth && (
                              <>
                                <div className="text-right text-sm">{day}</div>
                                {hasTaxEvent && (
                                  <div className="mt-2">
                                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 text-xs">
                                      {day === 15 ? "Quarterly Taxes Due" : "Property Tax Due"}
                                    </Badge>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
