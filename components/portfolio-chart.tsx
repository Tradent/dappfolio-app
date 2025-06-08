"use client"

import { useState } from "react"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from "recharts"

const data = [
  { month: "Jan", value: 2100000, tokens: 1800000 },
  { month: "Feb", value: 2150000, tokens: 1850000 },
  { month: "Mar", value: 2200000, tokens: 1900000 },
  { month: "Apr", value: 2250000, tokens: 1950000 },
  { month: "May", value: 2300000, tokens: 2000000 },
  { month: "Jun", value: 2350000, tokens: 2050000 },
  { month: "Jul", value: 2400000, tokens: 2100000 },
]

export function PortfolioChart() {
  const [chartType, setChartType] = useState<"line" | "area">("area")

  const formatYAxis = (value: number) => `${(value / 1000000).toFixed(1)}M`

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean
    payload?: any[]
    label?: string
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-babyblue-100 shadow-md rounded-md">
          <p className="font-medium text-babyblue-900">{label}</p>
          <p className="text-sm text-babyblue-700">
            Total Value: <span className="font-medium">${(payload[0].value / 1000000).toFixed(2)}M</span>
          </p>
          <p className="text-sm text-green-600">
            Tokenized: <span className="font-medium">${(payload[1].value / 1000000).toFixed(2)}M</span>
          </p>
          <p className="text-xs text-babyblue-500 mt-1">
            Tokenization Rate: {((payload[1].value / payload[0].value) * 100).toFixed(1)}%
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="overflow-x-auto pb-4">
      <div className="min-w-[600px]">
        <div className="flex justify-end mb-2">
          <div className="flex bg-babyblue-50 rounded-md p-1">
            <button
              className={`px-3 py-1 text-xs rounded-md transition-colors ${chartType === "line" ? "bg-white shadow-sm" : "text-babyblue-600"}`}
              onClick={() => setChartType("line")}
            >
              Line
            </button>
            <button
              className={`px-3 py-1 text-xs rounded-md transition-colors ${chartType === "area" ? "bg-white shadow-sm" : "text-babyblue-600"}`}
              onClick={() => setChartType("area")}
            >
              Area
            </button>
          </div>
        </div>

        <div className="h-[300px]">
          {chartType === "line" ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
                <XAxis dataKey="month" tick={{ fill: "#5f6368" }} axisLine={{ stroke: "#dadce0" }} />
                <YAxis
                  tickFormatter={formatYAxis}
                  tick={{ fill: "#5f6368" }}
                  axisLine={{ stroke: "#dadce0" }}
                  domain={["dataMin - 100000", "dataMax + 100000"]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Total Value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                  animationDuration={1500}
                />
                <Line
                  type="monotone"
                  dataKey="tokens"
                  name="Tokenized Value"
                  stroke="#34a853"
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34a853" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#34a853" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
                <XAxis dataKey="month" tick={{ fill: "#5f6368" }} axisLine={{ stroke: "#dadce0" }} />
                <YAxis
                  tickFormatter={formatYAxis}
                  tick={{ fill: "#5f6368" }}
                  axisLine={{ stroke: "#dadce0" }}
                  domain={["dataMin - 100000", "dataMax + 100000"]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="value"
                  name="Total Value"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  animationDuration={1500}
                />
                <Area
                  type="monotone"
                  dataKey="tokens"
                  name="Tokenized Value"
                  stroke="#34a853"
                  fillOpacity={1}
                  fill="url(#colorTokens)"
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  )
}
