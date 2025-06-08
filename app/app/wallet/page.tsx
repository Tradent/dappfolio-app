"use client"

import { useState } from "react"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckCircle2Icon,
  CopyIcon,
  DollarSignIcon,
  EyeIcon,
  EyeOffIcon,
  FilterIcon,
  LockIcon,
  PlusIcon,
  RefreshCwIcon,
  SearchIcon,
  ShieldIcon,
  WalletIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function WalletPage() {
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const walletBalance = {
    fiat: 24680.75,
    crypto: 15420.32,
    total: 40101.07,
    change: 3.2,
  }

  const cryptoAssets = [
    {
      name: "Ethereum",
      symbol: "ETH",
      balance: 4.28,
      value: 8560.0,
      change: 2.4,
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/abstract-geometric-shapes-JLmK8BMtroAZKOlg7zIL379gHvqM7d.png",
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      balance: 0.12,
      value: 4800.32,
      change: -1.2,
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/abstract-geometric-shapes-JLmK8BMtroAZKOlg7zIL379gHvqM7d.png",
    },
    {
      name: "Property Token",
      symbol: "PROP",
      balance: 250,
      value: 2000.0,
      change: 5.7,
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/abstract-geometric-shapes-JLmK8BMtroAZKOlg7zIL379gHvqM7d.png",
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      balance: 60,
      value: 60.0,
      change: 0,
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/abstract-geometric-shapes-JLmK8BMtroAZKOlg7zIL379gHvqM7d.png",
    },
  ]

  const recentTransactions = [
    {
      id: "TX123456",
      type: "Received",
      amount: 1500.0,
      currency: "USD",
      from: "Tenant: John Smith",
      date: "2023-04-12",
      status: "Completed",
    },
    {
      id: "TX123455",
      type: "Sent",
      amount: 0.5,
      currency: "ETH",
      to: "Property Tokenization",
      date: "2023-04-10",
      status: "Completed",
    },
    {
      id: "TX123454",
      type: "Received",
      amount: 25,
      currency: "PROP",
      from: "Property Dividend",
      date: "2023-04-08",
      status: "Completed",
    },
    {
      id: "TX123453",
      type: "Sent",
      amount: 750.0,
      currency: "USD",
      to: "Maintenance Service",
      date: "2023-04-05",
      status: "Completed",
    },
    {
      id: "TX123452",
      type: "Received",
      amount: 2200.0,
      currency: "USD",
      from: "Tenant: Sarah Johnson",
      date: "2023-04-01",
      status: "Completed",
    },
  ]

  const paymentMethods = [
    { id: 1, name: "Chase Bank ****4567", type: "Bank Account", default: true },
    { id: 2, name: "Visa ****1234", type: "Credit Card", default: false },
    { id: 3, name: "MetaMask Wallet", type: "Crypto Wallet", address: "0x71C...93E4", default: false },
  ]

  const propertyTokens = [
    { id: 1, property: "Urban Glass Facade", tokens: 100, value: 10000, apy: 8.5, icon: "/urban-glass-facade.png" },
    {
      id: 2,
      property: "Tropical Beachfront Escape",
      tokens: 50,
      value: 7500,
      apy: 9.2,
      icon: "/tropical-beachfront-escape.png",
    },
    { id: 3, property: "Modern City Office", tokens: 75, value: 6000, apy: 7.8, icon: "/modern-city-office.png" },
    {
      id: 4,
      property: "Vast Warehouse Interior",
      tokens: 25,
      value: 2500,
      apy: 6.5,
      icon: "/vast-warehouse-interior.png",
    },
  ]

  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Wallet</h1>
        <p className="text-muted-foreground">Manage your finances, crypto assets, and property tokens</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setBalanceVisible(!balanceVisible)} className="h-8 w-8">
              {balanceVisible ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </Button>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {balanceVisible ? `${walletBalance.total.toLocaleString()}` : "••••••"}
            </div>
            <div className="flex items-center pt-1 text-sm text-muted-foreground">
              {walletBalance.change > 0 ? (
                <ArrowUpIcon className="mr-1 h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownIcon className="mr-1 h-4 w-4 text-red-500" />
              )}
              <span className={walletBalance.change > 0 ? "text-green-500" : "text-red-500"}>
                {Math.abs(walletBalance.change)}%
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
          <CardFooter className="p-2">
            <div className="grid w-full grid-cols-2 gap-2">
              <Button size="sm" className="w-full">
                <ArrowDownIcon className="mr-2 h-4 w-4" />
                Deposit
              </Button>
              <Button size="sm" variant="outline" className="w-full">
                <ArrowUpIcon className="mr-2 h-4 w-4" />
                Withdraw
              </Button>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fiat Balance</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {balanceVisible ? `${walletBalance.fiat.toLocaleString()}` : "••••••"}
            </div>
            <div className="pt-2">
              <Progress value={(walletBalance.fiat / walletBalance.total) * 100} className="h-2" />
            </div>
            <p className="pt-1 text-xs text-muted-foreground">
              {Math.round((walletBalance.fiat / walletBalance.total) * 100)}% of total balance
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Crypto Balance</CardTitle>
            <WalletIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {balanceVisible ? `${walletBalance.crypto.toLocaleString()}` : "••••••"}
            </div>
            <div className="pt-2">
              <Progress value={(walletBalance.crypto / walletBalance.total) * 100} className="h-2" />
            </div>
            <p className="pt-1 text-xs text-muted-foreground">
              {Math.round((walletBalance.crypto / walletBalance.total) * 100)}% of total balance
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="payments">Payment Methods</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <RefreshCwIcon className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button size="sm">
              <PlusIcon className="mr-2 h-4 w-4" />
              New Transaction
            </Button>
          </div>
        </div>

        <TabsContent value="overview" className="space-y-6 pt-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Crypto Assets</CardTitle>
                <CardDescription>Your cryptocurrency and token holdings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cryptoAssets.map((asset, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={asset.icon || "/placeholder.svg"} alt={asset.name} />
                          <AvatarFallback>{asset.symbol.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{asset.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {asset.balance} {asset.symbol}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${asset.value.toLocaleString()}</div>
                        <div
                          className={`text-sm ${asset.change > 0 ? "text-green-500" : asset.change < 0 ? "text-red-500" : "text-muted-foreground"}`}
                        >
                          {asset.change > 0 ? "+" : ""}
                          {asset.change}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Assets
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest financial activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.slice(0, 4).map((tx, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full ${tx.type === "Received" ? "bg-green-100" : "bg-red-100"}`}
                        >
                          {tx.type === "Received" ? (
                            <ArrowDownIcon className="h-4 w-4 text-green-500" />
                          ) : (
                            <ArrowUpIcon className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{tx.type}</div>
                          <div className="text-sm text-muted-foreground">
                            {tx.type === "Received" ? "From: " + tx.from : "To: " + tx.to}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-medium ${tx.type === "Received" ? "text-green-500" : "text-red-500"}`}>
                          {tx.type === "Received" ? "+" : "-"}
                          {tx.amount} {tx.currency}
                        </div>
                        <div className="text-sm text-muted-foreground">{tx.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Property Tokens</CardTitle>
              <CardDescription>Your tokenized real estate investments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {propertyTokens.map((token) => (
                  <Card key={token.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={token.icon || "/placeholder.svg"}
                        alt={token.property}
                        className="h-full w-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold truncate">{token.property}</h3>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{token.tokens} Tokens</span>
                        <Badge variant="outline" className="text-green-500">
                          {token.apy}% APY
                        </Badge>
                      </div>
                      <div className="mt-2 text-sm font-medium">${token.value.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full justify-between">
                <Button variant="outline">Buy Tokens</Button>
                <Button variant="outline">Sell Tokens</Button>
                <Button variant="outline">View All Properties</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="assets" className="space-y-6 pt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>All Assets</CardTitle>
                <CardDescription>Manage your cryptocurrency and token holdings</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search assets..." className="pl-8 w-[200px]" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="crypto">Cryptocurrency</SelectItem>
                    <SelectItem value="token">Property Tokens</SelectItem>
                    <SelectItem value="stablecoin">Stablecoins</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Asset</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead>Value (USD)</TableHead>
                    <TableHead>24h Change</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cryptoAssets.map((asset, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={asset.icon || "/placeholder.svg"} alt={asset.name} />
                            <AvatarFallback>{asset.symbol.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{asset.name}</div>
                            <div className="text-sm text-muted-foreground">{asset.symbol}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {asset.balance} {asset.symbol}
                      </TableCell>
                      <TableCell>${asset.value.toLocaleString()}</TableCell>
                      <TableCell>
                        <span
                          className={`flex items-center ${asset.change > 0 ? "text-green-500" : asset.change < 0 ? "text-red-500" : "text-muted-foreground"}`}
                        >
                          {asset.change > 0 ? (
                            <ArrowUpIcon className="mr-1 h-4 w-4" />
                          ) : asset.change < 0 ? (
                            <ArrowDownIcon className="mr-1 h-4 w-4" />
                          ) : null}
                          {asset.change > 0 ? "+" : ""}
                          {asset.change}%
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Send
                          </Button>
                          <Button size="sm" variant="outline">
                            Receive
                          </Button>
                          <Button size="sm" variant="outline">
                            Trade
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
              <CardDescription>Distribution of your investment portfolio</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-6">
              <div
                className="h-[300px] w-[300px] rounded-full border-8 border-background"
                style={{
                  background: "conic-gradient(#3b82f6 0% 40%, #10b981 40% 65%, #6366f1 65% 85%, #f59e0b 85% 100%)",
                }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">${walletBalance.total.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Total Value</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                  <div className="text-sm">Property Tokens (40%)</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  <div className="text-sm">Ethereum (25%)</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded-full bg-indigo-500"></div>
                  <div className="text-sm">Bitcoin (20%)</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                  <div className="text-sm">Stablecoins (15%)</div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6 pt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View and filter your financial activities</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search transactions..." className="pl-8 w-[200px]" />
                </div>
                <Button variant="outline" size="icon">
                  <FilterIcon className="h-4 w-4" />
                </Button>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="sent">Sent</SelectItem>
                    <SelectItem value="received">Received</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>From/To</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((tx, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono text-sm">{tx.id}</TableCell>
                      <TableCell>
                        <Badge variant={tx.type === "Received" ? "success" : "default"}>{tx.type}</Badge>
                      </TableCell>
                      <TableCell className={tx.type === "Received" ? "text-green-500" : "text-red-500"}>
                        {tx.type === "Received" ? "+" : "-"}
                        {tx.amount} {tx.currency}
                      </TableCell>
                      <TableCell>{tx.type === "Received" ? tx.from : tx.to}</TableCell>
                      <TableCell>{tx.date}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <CheckCircle2Icon className="mr-2 h-4 w-4 text-green-500" />
                          {tx.status}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Showing 5 of 24 transactions</div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Export Transactions</CardTitle>
              <CardDescription>Download your transaction history for accounting or tax purposes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input id="start-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input id="end-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="format">Format</Label>
                  <Select defaultValue="csv">
                    <SelectTrigger id="format">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="json">JSON</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Export Transactions</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your connected accounts and wallets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        {method.type === "Bank Account" ? (
                          <BuildingIcon className="h-5 w-5" />
                        ) : method.type === "Credit Card" ? (
                          <CreditCardIcon className="h-5 w-5" />
                        ) : (
                          <WalletIcon className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{method.name}</div>
                        <div className="text-sm text-muted-foreground">{method.type}</div>
                        {method.address && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            {method.address}
                            <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
                              <CopyIcon className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {method.default && (
                        <Badge variant="outline" className="mr-2">
                          Default
                        </Badge>
                      )}
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500">
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <PlusIcon className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Connect Bank Account</CardTitle>
                <CardDescription>Securely link your bank account for deposits and withdrawals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-4 hover:bg-muted/50 cursor-pointer">
                    <img src="/bank-of-america-building.png" alt="Bank of America" className="mb-2 h-10 w-10" />
                    <div className="text-sm font-medium">Bank of America</div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-4 hover:bg-muted/50 cursor-pointer">
                    <img src="/chase-octagon.png" alt="Chase" className="mb-2 h-10 w-10" />
                    <div className="text-sm font-medium">Chase</div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-4 hover:bg-muted/50 cursor-pointer">
                    <img src="/stagecoach-silhouette.png" alt="Wells Fargo" className="mb-2 h-10 w-10" />
                    <div className="text-sm font-medium">Wells Fargo</div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-4 hover:bg-muted/50 cursor-pointer">
                    <img src="/citibank-logo-display.png" alt="Citibank" className="mb-2 h-10 w-10" />
                    <div className="text-sm font-medium">Citibank</div>
                  </div>
                </div>
                <Button className="w-full">Connect Bank Account</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connect Crypto Wallet</CardTitle>
                <CardDescription>Link your blockchain wallet for crypto transactions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-4 hover:bg-muted/50 cursor-pointer">
                    <img src="/metamask-fox-logo.png" alt="MetaMask" className="mb-2 h-10 w-10" />
                    <div className="text-sm font-medium">MetaMask</div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-4 hover:bg-muted/50 cursor-pointer">
                    <img src="/abstract-crypto-wallet.png" alt="Coinbase Wallet" className="mb-2 h-10 w-10" />
                    <div className="text-sm font-medium">Coinbase Wallet</div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-4 hover:bg-muted/50 cursor-pointer">
                    <img src="/abstract-interconnected-nodes.png" alt="WalletConnect" className="mb-2 h-10 w-10" />
                    <div className="text-sm font-medium">WalletConnect</div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-4 hover:bg-muted/50 cursor-pointer">
                    <img src="/stylized-shield-logo.png" alt="Trust Wallet" className="mb-2 h-10 w-10" />
                    <div className="text-sm font-medium">Trust Wallet</div>
                  </div>
                </div>
                <Button className="w-full">Connect Wallet</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch id="2fa" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Transaction Notifications</h4>
                    <p className="text-sm text-muted-foreground">Receive alerts for all wallet activities</p>
                  </div>
                  <Switch id="notifications" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Transaction Approval</h4>
                    <p className="text-sm text-muted-foreground">Require approval for transactions above $1,000</p>
                  </div>
                  <Switch id="approval" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Auto-Lock Wallet</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatically lock wallet after 15 minutes of inactivity
                    </p>
                  </div>
                  <Switch id="auto-lock" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Security Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recovery Options</CardTitle>
              <CardDescription>Set up recovery methods for your wallet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center space-x-4">
                  <ShieldIcon className="h-8 w-8 text-amber-500" />
                  <div>
                    <h4 className="font-medium">Backup Recovery Phrase</h4>
                    <p className="text-sm text-muted-foreground">
                      Your 12-word recovery phrase can be used to restore your wallet if you lose access. Keep it in a
                      safe place and never share it with anyone.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    <LockIcon className="mr-2 h-4 w-4" />
                    View Recovery Phrase
                  </Button>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center space-x-4">
                  <MailIcon className="h-8 w-8 text-blue-500" />
                  <div>
                    <h4 className="font-medium">Recovery Email</h4>
                    <p className="text-sm text-muted-foreground">
                      Add a recovery email address to help secure your account and recover access if needed.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <Input placeholder="Enter recovery email" />
                  <Button>Save</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
