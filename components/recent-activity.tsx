"use client"

import { AlertCircle, Check, Coins, DollarSign, MessageSquare } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "payment",
    title: "Rent Payment Received",
    description: "Modern Apartment in Downtown",
    time: "Today, 10:42 AM",
    icon: DollarSign,
  },
  {
    id: 2,
    type: "maintenance",
    title: "Maintenance Request Completed",
    description: "Commercial Office Space",
    time: "Yesterday, 2:15 PM",
    icon: Check,
  },
  {
    id: 3,
    type: "tokenization",
    title: "Property Tokenized",
    description: "Industrial Warehouse",
    time: "Jul 25, 2023",
    icon: Coins,
  },
  {
    id: 4,
    type: "message",
    title: "New Message from Tenant",
    description: "John Smith - Beachfront Villa",
    time: "Jul 24, 2023",
    icon: MessageSquare,
  },
  {
    id: 5,
    type: "alert",
    title: "Inspection Due",
    description: "Downtown Retail Space",
    time: "Jul 22, 2023",
    icon: AlertCircle,
  },
]

export function RecentActivity() {
  const getIconColor = (type: string) => {
    switch (type) {
      case "payment":
        return "text-app-green bg-app-green-light"
      case "maintenance":
        return "text-app-blue bg-app-blue-light"
      case "tokenization":
        return "text-app-yellow-dark bg-app-yellow-light"
      case "message":
        return "text-app-blue bg-app-blue-light"
      case "alert":
        return "text-app-red bg-app-red-light"
      default:
        return "text-app-gray-500 bg-app-gray-100"
    }
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start">
          <div className={`p-2 rounded-full mr-3 ${getIconColor(activity.type)}`}>
            <activity.icon className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm">{activity.title}</p>
            <p className="text-sm text-app-gray-500">{activity.description}</p>
            <p className="text-xs text-app-gray-400 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
