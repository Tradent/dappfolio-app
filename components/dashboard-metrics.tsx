"use client"

import type React from "react"

import { ArrowDownRight, ArrowUpRight, Building2, Coins, DollarSign, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Properties"
        value="12"
        change="+2"
        changeText="from last month"
        trend="up"
        icon={Building2}
        color="blue-light"
      />
      <MetricCard
        title="Portfolio Value"
        value="$2.4M"
        change="+14.2%"
        changeText="from last month"
        trend="up"
        icon={DollarSign}
        color="blue"
      />
      <MetricCard
        title="Tokenized Assets"
        value="7"
        change="58%"
        changeText="of portfolio"
        trend="neutral"
        icon={Coins}
        color="blue-dark"
      />
      <MetricCard
        title="Total Investors"
        value="24"
        change="+4"
        changeText="from last month"
        trend="up"
        icon={Users}
        color="blue-darker"
      />
    </div>
  )
}

interface MetricCardProps {
  title: string
  value: string
  change: string
  changeText: string
  trend: "up" | "down" | "neutral"
  icon: React.ComponentType<{ className?: string }>
  color: "blue-light" | "blue" | "blue-dark" | "blue-darker"
}

function MetricCard({ title, value, change, changeText, trend, icon: Icon, color }: MetricCardProps) {
  const colorMap = {
    "blue-light": "bg-babyblue-100 text-babyblue-500",
    blue: "bg-babyblue-200 text-babyblue-600",
    "blue-dark": "bg-babyblue-300 text-babyblue-700",
    "blue-darker": "bg-babyblue-400 text-babyblue-800",
  }

  return (
    <Card className={`dashboard-stat-card accent-${color} border-babyblue-100`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-babyblue-600">{title}</p>
            <h3 className="text-2xl font-bold mt-1 text-babyblue-900">{value}</h3>
          </div>
          <div className={`p-2 rounded-full ${colorMap[color]}`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-4 flex items-center">
          {trend === "up" && <ArrowUpRight className="h-4 w-4 text-babyblue-600 mr-1" />}
          {trend === "down" && <ArrowDownRight className="h-4 w-4 text-babyblue-500 mr-1" />}
          <span
            className={
              trend === "up" ? "text-babyblue-600" : trend === "down" ? "text-babyblue-500" : "text-babyblue-400"
            }
          >
            {change}
          </span>
          <span className="text-xs text-babyblue-400 ml-1">{changeText}</span>
        </div>
      </CardContent>
    </Card>
  )
}
