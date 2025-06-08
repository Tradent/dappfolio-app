"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ReferenceLine,
} from "recharts"

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Portfolio Analytics</h1>
        <p className="text-muted-foreground">
          Comprehensive blockchain metrics and performance data for your property portfolio
        </p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Portfolio Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="tokenization">Tokenization</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain Data</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <OverviewCard title="Total Properties" value="12" change="+2" period="from last month" />
            <OverviewCard title="Portfolio Value" value="$2.4M" change="+14.2%" period="from last month" positive />
            <OverviewCard title="Tokenized Assets" value="7" change="58%" period="of portfolio" />
            <OverviewCard title="Average Yield" value="5.8%" change="+0.3%" period="from last month" positive />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <PortfolioValueChart />
            <PortfolioCompositionChart />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <YieldPerformanceChart />
            <TokenDistributionChart />
            <TopPerformersChart />
          </div>
        </TabsContent>

        <TabsContent value="performance" className="mt-6">
          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <PerformanceComparisonChart />
              <HistoricalReturnsChart />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <PropertyTypePerformanceChart />
              <RegionalPerformanceChart />
              <YieldTrendsChart />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tokenization" className="mt-6">
          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <TokenizationOverviewChart />
              <TokenValueTrendsChart />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <TokenHoldersDistributionChart />
              <TokenLiquidityChart />
              <TokenizationRateChart />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="blockchain" className="mt-6">
          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <BlockchainTransactionsChart />
              <SmartContractInteractionsChart />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <GasUsageChart />
              <ContractSecurityScoreChart />
              <BlockchainNetworkChart />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function OverviewCard({
  title,
  value,
  change,
  period,
  positive,
}: {
  title: string
  value: string
  change: string
  period: string
  positive?: boolean
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-babyblue-50 to-babyblue-100 pb-2">
        <CardTitle className="text-sm font-medium text-babyblue-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="text-2xl font-bold text-babyblue-900">{value}</div>
        <p className={`text-xs ${positive ? "text-babyblue-600" : "text-muted-foreground"}`}>
          {change} {period}
        </p>
      </CardContent>
    </Card>
  )
}

function PortfolioValueChart() {
  const data = [
    { month: "Jan", value: 2100000 },
    { month: "Feb", value: 2150000 },
    { month: "Mar", value: 2200000 },
    { month: "Apr", value: 2250000 },
    { month: "May", value: 2300000 },
    { month: "Jun", value: 2350000 },
    { month: "Jul", value: 2400000 },
  ]

  const blueColors = {
    stroke: "#3b82f6",
    fill: "#93c5fd",
    gradient1: "#dbeafe",
    gradient2: "#bfdbfe",
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Value</CardTitle>
        <CardDescription>Total portfolio value over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={blueColors.gradient2} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={blueColors.gradient1} stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <YAxis
                tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                domain={["dataMin - 100000", "dataMax + 100000"]}
              />
              <Tooltip
                formatter={(value: number) => [`${value.toLocaleString()}`, "Portfolio Value"]}
                labelFormatter={(label) => `Month: ${label}`}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={blueColors.stroke}
                strokeWidth={2}
                fill="url(#colorValue)"
                activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2, fill: "#ffffff" }}
              />
              <ReferenceLine
                y={2250000}
                label={{ value: "Target", position: "insideTopRight", fill: "#3b82f6" }}
                stroke="#3b82f6"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function PortfolioCompositionChart() {
  const data = [
    { name: "Residential", value: 1400000 },
    { name: "Commercial", value: 750000 },
    { name: "Industrial", value: 250000 },
  ]

  const BLUE_COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Composition</CardTitle>
        <CardDescription>Breakdown by property type</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                innerRadius={60}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={BLUE_COLORS[index % BLUE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value.toLocaleString()}`, "Value"]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                formatter={(value, entry) => {
                  const { payload } = entry as any
                  return (
                    <span style={{ color: "#374151" }}>
                      {value}: ${payload.value.toLocaleString()}
                    </span>
                  )
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function YieldPerformanceChart() {
  const data = [
    { month: "Jan", yield: 5.2 },
    { month: "Feb", yield: 5.3 },
    { month: "Mar", yield: 5.5 },
    { month: "Apr", yield: 5.6 },
    { month: "May", yield: 5.7 },
    { month: "Jun", yield: 5.8 },
    { month: "Jul", yield: 5.8 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Yield Performance</CardTitle>
        <CardDescription>Average APY across portfolio</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <YAxis
                domain={[5, 6]}
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, "APY"]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Line
                type="monotone"
                dataKey="yield"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4, stroke: "#3b82f6", strokeWidth: 2, fill: "#ffffff" }}
                activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2, fill: "#ffffff" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function TokenDistributionChart() {
  const data = [
    { name: "Available", value: 350 },
    { name: "Owned", value: 650 },
  ]

  const BLUE_COLORS = ["#60a5fa", "#1d4ed8"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Token Distribution</CardTitle>
        <CardDescription>Ownership across portfolio</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={BLUE_COLORS[index % BLUE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value} tokens`, ""]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function TopPerformersChart() {
  const data = [
    { name: "Property A", yield: 7.2 },
    { name: "Property B", yield: 6.8 },
    { name: "Property C", yield: 6.5 },
    { name: "Property D", yield: 6.2 },
    { name: "Property E", yield: 5.9 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performers</CardTitle>
        <CardDescription>Highest yielding properties</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
              <XAxis
                type="number"
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                tickFormatter={(value) => `${value}%`}
              />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                width={80}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, "APY"]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Bar dataKey="yield" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

// New charts for Performance tab
function PerformanceComparisonChart() {
  const data = [
    { month: "Jan", portfolio: 5.2, market: 4.8 },
    { month: "Feb", portfolio: 5.3, market: 4.7 },
    { month: "Mar", portfolio: 5.5, market: 4.9 },
    { month: "Apr", portfolio: 5.6, market: 5.0 },
    { month: "May", portfolio: 5.7, market: 5.1 },
    { month: "Jun", portfolio: 5.8, market: 5.0 },
    { month: "Jul", portfolio: 5.8, market: 4.9 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Comparison</CardTitle>
        <CardDescription>Portfolio vs Market Average</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <YAxis
                domain={[4.5, 6]}
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, ""]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="portfolio"
                name="Your Portfolio"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4, stroke: "#3b82f6", strokeWidth: 2, fill: "#ffffff" }}
              />
              <Line
                type="monotone"
                dataKey="market"
                name="Market Average"
                stroke="#94a3b8"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4, stroke: "#94a3b8", strokeWidth: 2, fill: "#ffffff" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function HistoricalReturnsChart() {
  const data = [
    { year: "2018", return: 4.2 },
    { year: "2019", return: 4.8 },
    { year: "2020", return: 3.9 },
    { year: "2021", return: 5.3 },
    { year: "2022", return: 5.7 },
    { year: "2023", return: 6.1 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historical Returns</CardTitle>
        <CardDescription>Annual portfolio performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <YAxis
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, "Return"]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Bar dataKey="return" fill="#60a5fa" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.return > 5 ? "#3b82f6" : "#93c5fd"} />
                ))}
              </Bar>
              <ReferenceLine
                y={5}
                stroke="#1d4ed8"
                strokeDasharray="3 3"
                label={{ value: "Target", position: "insideBottomRight", fill: "#1d4ed8" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function PropertyTypePerformanceChart() {
  const data = [
    { type: "Residential", yield: 5.4 },
    { type: "Commercial", yield: 6.2 },
    { type: "Industrial", yield: 7.1 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Type Performance</CardTitle>
        <CardDescription>Yield by property category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="type" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <YAxis
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, "Yield"]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Bar dataKey="yield" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={["#93c5fd", "#60a5fa", "#3b82f6"][index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function RegionalPerformanceChart() {
  const data = [
    { region: "New York", yield: 5.8 },
    { region: "Chicago", yield: 6.3 },
    { region: "Miami", yield: 5.5 },
    { region: "LA", yield: 6.1 },
    { region: "Austin", yield: 6.7 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Regional Performance</CardTitle>
        <CardDescription>Yield by location</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="region" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <YAxis
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                tickFormatter={(value) => `${value}%`}
                domain={[5, 7]}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, "Yield"]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Bar dataKey="yield" fill="#60a5fa" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function YieldTrendsChart() {
  const data = [
    { quarter: "Q3 2022", residential: 5.1, commercial: 5.9, industrial: 6.8 },
    { quarter: "Q4 2022", residential: 5.2, commercial: 6.0, industrial: 6.9 },
    { quarter: "Q1 2023", residential: 5.3, commercial: 6.1, industrial: 7.0 },
    { quarter: "Q2 2023", residential: 5.4, commercial: 6.2, industrial: 7.1 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Yield Trends</CardTitle>
        <CardDescription>Quarterly performance by type</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="quarter" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <YAxis
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                tickFormatter={(value) => `${value}%`}
                domain={[5, 7.5]}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, ""]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="residential"
                name="Residential"
                stroke="#93c5fd"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="commercial"
                name="Commercial"
                stroke="#60a5fa"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="industrial"
                name="Industrial"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

// New charts for Tokenization tab
function TokenizationOverviewChart() {
  const data = [
    { name: "Tokenized", value: 7 },
    { name: "Traditional", value: 5 },
  ]

  const BLUE_COLORS = ["#3b82f6", "#e5e7eb"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tokenization Overview</CardTitle>
        <CardDescription>Tokenized vs traditional properties</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={BLUE_COLORS[index % BLUE_COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function TokenValueTrendsChart() {
  const data = [
    { month: "Jan", value: 720 },
    { month: "Feb", value: 740 },
    { month: "Mar", value: 760 },
    { month: "Apr", value: 750 },
    { month: "May", value: 770 },
    { month: "Jun", value: 790 },
    { month: "Jul", value: 810 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Token Value Trends</CardTitle>
        <CardDescription>Average token price over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <YAxis
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                tickFormatter={(value) => `${value}`}
                domain={[700, 850]}
              />
              <Tooltip
                formatter={(value: number) => [`${value}`, "Token Price"]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4, stroke: "#3b82f6", strokeWidth: 2, fill: "#ffffff" }}
                activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2, fill: "#ffffff" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function TokenHoldersDistributionChart() {
  const data = [
    { name: "Investors", value: 65 },
    { name: "Platform", value: 20 },
    { name: "Reserve", value: 15 },
  ]

  const BLUE_COLORS = ["#3b82f6", "#60a5fa", "#93c5fd"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Token Holders</CardTitle>
        <CardDescription>Distribution of token ownership</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
                paddingAngle={2}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={BLUE_COLORS[index % BLUE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value}%`, ""]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function TokenLiquidityChart() {
  const data = [
    { day: "Mon", volume: 12500 },
    { day: "Tue", volume: 9800 },
    { day: "Wed", volume: 15200 },
    { day: "Thu", volume: 18900 },
    { day: "Fri", volume: 21500 },
    { day: "Sat", volume: 8700 },
    { day: "Sun", volume: 7200 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Token Liquidity</CardTitle>
        <CardDescription>Daily trading volume</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <YAxis
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Tooltip
                formatter={(value: number) => [`${value.toLocaleString()}`, "Volume"]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Bar dataKey="volume" fill="#60a5fa" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function TokenizationRateChart() {
  const data = [
    { quarter: "Q3 2022", rate: 42 },
    { quarter: "Q4 2022", rate: 48 },
    { quarter: "Q1 2023", rate: 52 },
    { quarter: "Q2 2023", rate: 58 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tokenization Rate</CardTitle>
        <CardDescription>Percentage of tokenized properties</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="quarter" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <YAxis
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                tickFormatter={(value) => `${value}%`}
                domain={[40, 60]}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, "Rate"]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4, stroke: "#3b82f6", strokeWidth: 2, fill: "#ffffff" }}
              />
              <ReferenceLine
                y={50}
                stroke="#1d4ed8"
                strokeDasharray="3 3"
                label={{ value: "Target", position: "insideBottomRight", fill: "#1d4ed8" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

// New charts for Blockchain tab
function BlockchainTransactionsChart() {
  const data = [
    { week: "W1", transactions: 124 },
    { week: "W2", transactions: 186 },
    { week: "W3", transactions: 245 },
    { week: "W4", transactions: 302 },
    { week: "W5", transactions: 265 },
    { week: "W6", transactions: 198 },
    { week: "W7", transactions: 278 },
    { week: "W8", transactions: 340 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blockchain Transactions</CardTitle>
        <CardDescription>Weekly transaction volume</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTransactions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="week" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <YAxis tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <Tooltip
                formatter={(value: number) => [`${value}`, "Transactions"]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Area
                type="monotone"
                dataKey="transactions"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorTransactions)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function SmartContractInteractionsChart() {
  const data = [
    { name: "Token Purchases", value: 42 },
    { name: "Property Tokenization", value: 18 },
    { name: "Yield Distribution", value: 24 },
    { name: "NFT Minting", value: 16 },
  ]

  const BLUE_COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Smart Contract Interactions</CardTitle>
        <CardDescription>Types of blockchain operations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={BLUE_COLORS[index % BLUE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value}%`, ""]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Legend layout="vertical" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function GasUsageChart() {
  const data = [
    { month: "Jan", gas: 0.42 },
    { month: "Feb", gas: 0.38 },
    { month: "Mar", gas: 0.45 },
    { month: "Apr", gas: 0.52 },
    { month: "May", gas: 0.48 },
    { month: "Jun", gas: 0.44 },
    { month: "Jul", gas: 0.39 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gas Usage</CardTitle>
        <CardDescription>Monthly blockchain fees</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} />
              <YAxis
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                tickFormatter={(value) => `${value} ETH`}
              />
              <Tooltip
                formatter={(value: number) => [`${value} ETH`, "Gas"]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Line
                type="monotone"
                dataKey="gas"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4, stroke: "#3b82f6", strokeWidth: 2, fill: "#ffffff" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function ContractSecurityScoreChart() {
  const data = [
    { name: "Token Contract", score: 92 },
    { name: "Property Registry", score: 95 },
    { name: "Yield Distribution", score: 88 },
    { name: "NFT Marketplace", score: 90 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contract Security</CardTitle>
        <CardDescription>Security scores by contract</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
              <XAxis type="number" tick={{ fill: "#6b7280" }} axisLine={{ stroke: "#d1d5db" }} domain={[80, 100]} />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#d1d5db" }}
                width={120}
              />
              <Tooltip
                formatter={(value: number) => [`${value}/100`, "Score"]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
              <Bar dataKey="score" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20}>
                {data.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.score >= 90 ? "#3b82f6" : "#60a5fa"} />
                ))}
              </Bar>
              <ReferenceLine
                x={90}
                stroke="#1d4ed8"
                strokeDasharray="3 3"
                label={{ value: "Target", position: "insideTopLeft", fill: "#1d4ed8" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function BlockchainNetworkChart() {
  const data = [
    { name: "Solana", value: 65 },
    { name: "Ethereum", value: 25 },
    { name: "Polygon", value: 10 },
  ]

  const BLUE_COLORS = ["#3b82f6", "#1d4ed8", "#60a5fa"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blockchain Networks</CardTitle>
        <CardDescription>Distribution by platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
                paddingAngle={2}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={BLUE_COLORS[index % BLUE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value}%`, ""]}
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
