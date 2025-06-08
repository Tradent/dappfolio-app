"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

// Sample analytics data - in a real app, this would come from blockchain queries
const valueData = [
  { month: "Jan", value: 720000 },
  { month: "Feb", value: 725000 },
  { month: "Mar", value: 730000 },
  { month: "Apr", value: 735000 },
  { month: "May", value: 740000 },
  { month: "Jun", value: 745000 },
  { month: "Jul", value: 750000 },
]

const yieldData = [
  { month: "Jan", yield: 4.8 },
  { month: "Feb", yield: 4.9 },
  { month: "Mar", yield: 5.0 },
  { month: "Apr", yield: 5.1 },
  { month: "May", yield: 5.2 },
  { month: "Jun", yield: 5.2 },
  { month: "Jul", yield: 5.2 },
]

const transactionData = [
  { date: "Jul 1", tokens: 25, price: 750 },
  { date: "Jul 5", tokens: 10, price: 755 },
  { date: "Jul 12", tokens: 50, price: 760 },
  { date: "Jul 18", tokens: 15, price: 765 },
  { date: "Jul 25", tokens: 30, price: 770 },
]

interface PropertyAnalyticsProps {
  propertyId: string
}

export function PropertyAnalytics({ propertyId }: PropertyAnalyticsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Property Analytics</h2>
      <p className="text-muted-foreground">Blockchain-based metrics and performance data for this property.</p>

      <Tabs defaultValue="value">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="value">Value History</TabsTrigger>
          <TabsTrigger value="yield">Yield Performance</TabsTrigger>
          <TabsTrigger value="transactions">Token Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="value" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Property Value Over Time</CardTitle>
              <CardDescription>Historical property valuation based on blockchain data</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  value: {
                    label: "Property Value",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={valueData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-value)" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="var(--color-value)" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="var(--color-value)"
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Current Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$750,000</div>
                <p className="text-sm text-green-600">+4.2% since purchase</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Projected Value (1yr)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$795,000</div>
                <p className="text-sm text-green-600">+6.0% growth</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="yield" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Yield Performance</CardTitle>
              <CardDescription>Historical APY yield from property tokenization</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  yield: {
                    label: "APY (%)",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yieldData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="yield" stroke="var(--color-yield)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Current APY</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">5.2%</div>
                <p className="text-sm text-green-600">+0.4% from initial</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Yield Paid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$19,500</div>
                <p className="text-sm text-muted-foreground">Since tokenization</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Next Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">Aug 15</div>
                <p className="text-sm text-muted-foreground">Est. $3,250</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Token Transactions</CardTitle>
              <CardDescription>Token trading activity on the blockchain</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  tokens: {
                    label: "Tokens Traded",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={transactionData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="tokens" fill="var(--color-tokens)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Token Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactionData.map((tx, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                    <div>
                      <p className="font-medium">{tx.date}</p>
                      <p className="text-sm text-muted-foreground">
                        {tx.tokens} tokens @ ${tx.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${(tx.tokens * tx.price).toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Transaction Value</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
