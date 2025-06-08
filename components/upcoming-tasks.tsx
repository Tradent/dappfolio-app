"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, PenToolIcon as Tool, Users } from "lucide-react"

const tasks = [
  {
    id: 1,
    title: "Property Inspection",
    property: "Modern Apartment in Downtown",
    dueDate: "Aug 15, 2023",
    priority: "high",
    type: "inspection",
  },
  {
    id: 2,
    title: "Lease Renewal",
    property: "Commercial Office Space",
    dueDate: "Aug 20, 2023",
    priority: "medium",
    type: "lease",
  },
  {
    id: 3,
    title: "Maintenance Request",
    property: "Beachfront Villa",
    dueDate: "Aug 22, 2023",
    priority: "high",
    type: "maintenance",
  },
  {
    id: 4,
    title: "Tenant Screening",
    property: "Industrial Warehouse",
    dueDate: "Aug 25, 2023",
    priority: "medium",
    type: "tenant",
  },
]

export function UpcomingTasks() {
  const getTaskIcon = (type: string) => {
    switch (type) {
      case "inspection":
        return <Calendar className="h-4 w-4" />
      case "lease":
        return <FileText className="h-4 w-4" />
      case "maintenance":
        return <Tool className="h-4 w-4" />
      case "tenant":
        return <Users className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-app-red text-white">High</Badge>
      case "medium":
        return <Badge className="bg-app-yellow text-app-gray-900">Medium</Badge>
      case "low":
        return <Badge className="bg-app-green text-white">Low</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-start border-b pb-4 last:border-0 last:pb-0">
          <div className="p-2 rounded-full bg-app-gray-100 mr-3">{getTaskIcon(task.type)}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-sm">{task.title}</p>
                <p className="text-sm text-app-gray-500">{task.property}</p>
                <div className="flex items-center mt-1">
                  <Calendar className="h-3.5 w-3.5 text-app-gray-400 mr-1" />
                  <span className="text-xs text-app-gray-500">{task.dueDate}</span>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                {getPriorityBadge(task.priority)}
                <Button variant="outline" size="sm">
                  Complete
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
