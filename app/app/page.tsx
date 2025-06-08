import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Building2, ChevronRight, Coins, FileText, Plus, Users } from "lucide-react"
import { DashboardMetrics } from "@/components/dashboard-metrics"
import { PropertyList } from "@/components/property-list"
import { RecentActivity } from "@/components/recent-activity"
import { UpcomingTasks } from "@/components/upcoming-tasks"
import { PortfolioChart } from "@/components/portfolio-chart"

export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-babyblue-900">Dashboard</h1>
          <p className="text-babyblue-600">Welcome back to your property management dashboard.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button className="bg-babyblue-500 hover:bg-babyblue-600 text-white" asChild>
            <Link href="/app/properties/add">
              <Plus className="mr-2 h-4 w-4" /> Add Property
            </Link>
          </Button>
        </div>
      </div>

      <DashboardMetrics />

      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-4 space-y-6">
          <section className="content-section">
            <div className="content-section-header flex-col items-start space-y-4">
              <h2 className="content-section-title">Properties Overview</h2>
              <Tabs defaultValue="all" className="w-full">
                <div className="flex items-center justify-between">
                  <TabsList className="bg-babyblue-50">
                    <TabsTrigger
                      value="all"
                      className="text-sm data-[state=active]:bg-babyblue-200 data-[state=active]:text-babyblue-800"
                    >
                      All Properties
                    </TabsTrigger>
                    <TabsTrigger
                      value="tokenized"
                      className="text-sm data-[state=active]:bg-babyblue-200 data-[state=active]:text-babyblue-800"
                    >
                      Tokenized
                    </TabsTrigger>
                    <TabsTrigger
                      value="traditional"
                      className="text-sm data-[state=active]:bg-babyblue-200 data-[state=active]:text-babyblue-800"
                    >
                      Traditional
                    </TabsTrigger>
                  </TabsList>
                  <Link href="/app/properties" className="text-sm text-babyblue-600 flex items-center">
                    View All <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <TabsContent value="all" className="mt-4 space-y-4">
                  <PropertyList limit={3} />
                </TabsContent>
                <TabsContent value="tokenized" className="mt-4 space-y-4">
                  <PropertyList limit={3} filter="tokenized" />
                </TabsContent>
                <TabsContent value="traditional" className="mt-4 space-y-4">
                  <PropertyList limit={3} filter="traditional" />
                </TabsContent>
              </Tabs>
            </div>
          </section>

          <section className="content-section">
            <div className="content-section-header">
              <h2 className="content-section-title">Portfolio Performance</h2>
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center space-x-1 mr-2">
                  <div className="flex items-center space-x-1">
                    <div className="h-3 w-3 rounded-full bg-babyblue-500"></div>
                    <span className="text-xs text-babyblue-700">Total Value</span>
                  </div>
                  <div className="flex items-center space-x-1 ml-3">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-babyblue-700">Tokenized Value</span>
                  </div>
                </div>
                <div className="relative">
                  <select
                    className="appearance-none bg-white border border-babyblue-200 rounded-md py-1 pl-3 pr-8 text-sm text-babyblue-700 focus:outline-none focus:ring-2 focus:ring-babyblue-300"
                    defaultValue="6months"
                  >
                    <option value="1month">Last Month</option>
                    <option value="3months">Last 3 Months</option>
                    <option value="6months">Last 6 Months</option>
                    <option value="1year">Last Year</option>
                    <option value="all">All Time</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-babyblue-500">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 p-4 bg-white rounded-lg border border-babyblue-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-babyblue-600">Total Portfolio Value</div>
                  <div className="text-2xl font-bold text-babyblue-900">$2,400,000</div>
                  <div className="text-xs text-green-600 flex items-center">
                    <svg
                      className="h-3 w-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    14.3% since January
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-sm text-babyblue-600">Tokenized Value</div>
                  <div className="text-2xl font-bold text-green-600">$2,100,000</div>
                  <div className="text-xs text-green-600 flex items-center">
                    <svg
                      className="h-3 w-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    16.7% since January
                  </div>
                </div>
              </div>
              <PortfolioChart />
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-babyblue-50 rounded-md">
                  <div className="text-xs text-babyblue-600">Properties</div>
                  <div className="text-lg font-semibold text-babyblue-900">12</div>
                </div>
                <div className="p-2 bg-babyblue-50 rounded-md">
                  <div className="text-xs text-babyblue-600">Tokenized</div>
                  <div className="text-lg font-semibold text-babyblue-900">8</div>
                </div>
                <div className="p-2 bg-babyblue-50 rounded-md">
                  <div className="text-xs text-babyblue-600">ROI</div>
                  <div className="text-lg font-semibold text-green-600">8.7%</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="md:col-span-3 space-y-6">
          <section className="content-section">
            <div className="content-section-header">
              <h2 className="content-section-title">Upcoming Tasks</h2>
              <Link href="/app/tasks" className="text-sm text-babyblue-600 flex items-center">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <UpcomingTasks />
          </section>

          <section className="content-section">
            <div className="content-section-header">
              <h2 className="content-section-title">Recent Activity</h2>
              <Link href="/app/activity" className="text-sm text-babyblue-600 flex items-center">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <RecentActivity />
          </section>

          <div className="grid grid-cols-2 gap-4">
            <QuickActionCard
              title="Add Property"
              description="List a new property in your portfolio"
              icon={Building2}
              href="/app/properties/add"
              color="light"
            />
            <QuickActionCard
              title="Tokenize Asset"
              description="Convert property to blockchain tokens"
              icon={Coins}
              href="/app/properties/tokenize"
              color="medium"
            />
            <QuickActionCard
              title="Add Tenant"
              description="Register a new tenant"
              icon={Users}
              href="/app/tenants/add"
              color="dark"
            />
            <QuickActionCard
              title="Create Report"
              description="Generate financial reports"
              icon={FileText}
              href="/app/reports"
              color="darker"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface QuickActionCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  color: "light" | "medium" | "dark" | "darker"
}

function QuickActionCard({ title, description, icon: Icon, href, color }: QuickActionCardProps) {
  const colorClasses = {
    light: "bg-babyblue-50 text-babyblue-600 hover:bg-babyblue-100 border-babyblue-100",
    medium: "bg-babyblue-100 text-babyblue-700 hover:bg-babyblue-200 border-babyblue-200",
    dark: "bg-babyblue-200 text-babyblue-800 hover:bg-babyblue-300 border-babyblue-300",
    darker: "bg-babyblue-300 text-babyblue-900 hover:bg-babyblue-400 border-babyblue-400",
  }

  return (
    <Link href={href}>
      <Card className={`h-full transition-colors ${colorClasses[color]}`}>
        <CardContent className="p-4 flex flex-col h-full">
          <Icon className="h-6 w-6 mb-2" />
          <h4 className="font-medium">{title}</h4>
          <p className="text-xs mt-1">{description}</p>
          <ArrowRight className="h-4 w-4 mt-auto ml-auto" />
        </CardContent>
      </Card>
    </Link>
  )
}
