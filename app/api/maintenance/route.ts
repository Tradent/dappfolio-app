import { NextResponse } from "next/server"

// Mock maintenance data
const maintenanceRequests = [
  {
    id: "1",
    title: "Leaking Roof",
    property: {
      id: "101",
      name: "Urban Glass Facade",
      address: "123 Downtown Ave, New York, NY 10001",
      image: "/urban-glass-facade.png",
    },
    tenant: {
      id: "201",
      name: "Acme Corporation",
      email: "contact@acmecorp.com",
      phone: "(212) 555-1234",
    },
    description: "Water leaking from ceiling in the main conference room during heavy rain.",
    status: "open",
    priority: "high",
    category: "plumbing",
    createdAt: "2023-11-15T10:30:00Z",
    updatedAt: "2023-11-15T14:45:00Z",
    assignedTo: {
      id: "301",
      name: "John Smith",
      company: "Quick Fix Plumbing",
      phone: "(212) 555-7890",
    },
    scheduledDate: "2023-11-17T09:00:00Z",
    estimatedCost: 750,
    images: ["/maintenance/leak1.jpg", "/maintenance/leak2.jpg"],
    notes: [
      {
        id: "401",
        author: "Property Manager",
        text: "Tenant reports this happens every time it rains heavily.",
        timestamp: "2023-11-15T11:00:00Z",
      },
      {
        id: "402",
        author: "John Smith",
        text: "Will need to inspect the roof and possibly replace some flashing.",
        timestamp: "2023-11-15T15:30:00Z",
      },
    ],
  },
  {
    id: "2",
    title: "HVAC Not Working",
    property: {
      id: "102",
      name: "Modern City Office",
      address: "456 Business Park, Chicago, IL 60601",
      image: "/modern-city-office.png",
    },
    tenant: {
      id: "202",
      name: "TechStart Inc.",
      email: "facilities@techstart.com",
      phone: "(312) 555-4321",
    },
    description: "Air conditioning system not cooling properly on the 3rd floor. Temperature reaching 85°F.",
    status: "in_progress",
    priority: "high",
    category: "hvac",
    createdAt: "2023-11-14T08:15:00Z",
    updatedAt: "2023-11-16T11:20:00Z",
    assignedTo: {
      id: "302",
      name: "Sarah Johnson",
      company: "Climate Control Services",
      phone: "(312) 555-6543",
    },
    scheduledDate: "2023-11-16T13:00:00Z",
    estimatedCost: 1200,
    images: ["/maintenance/hvac1.jpg"],
    notes: [
      {
        id: "403",
        author: "Property Manager",
        text: "Multiple tenants have complained about the heat.",
        timestamp: "2023-11-14T09:30:00Z",
      },
      {
        id: "404",
        author: "Sarah Johnson",
        text: "Initial inspection shows compressor issues. Parts ordered.",
        timestamp: "2023-11-16T11:20:00Z",
      },
    ],
  },
  {
    id: "3",
    title: "Broken Window",
    property: {
      id: "103",
      name: "Cozy Suburban Home",
      address: "789 Maple Street, Austin, TX 78701",
      image: "/cozy-suburban-home.png",
    },
    tenant: {
      id: "203",
      name: "David Wilson",
      email: "david.wilson@email.com",
      phone: "(512) 555-8765",
    },
    description: "Living room window cracked during recent storm. Glass intact but needs replacement.",
    status: "scheduled",
    priority: "medium",
    category: "structural",
    createdAt: "2023-11-13T16:45:00Z",
    updatedAt: "2023-11-15T10:15:00Z",
    assignedTo: {
      id: "303",
      name: "Mike Brown",
      company: "Clear View Glass",
      phone: "(512) 555-2468",
    },
    scheduledDate: "2023-11-18T10:00:00Z",
    estimatedCost: 350,
    images: ["/maintenance/window1.jpg"],
    notes: [
      {
        id: "405",
        author: "Tenant",
        text: "Window was damaged during the thunderstorm last night.",
        timestamp: "2023-11-13T16:45:00Z",
      },
      {
        id: "406",
        author: "Property Manager",
        text: "Vendor scheduled for Saturday morning. Tenant will be home.",
        timestamp: "2023-11-15T10:15:00Z",
      },
    ],
  },
  {
    id: "4",
    title: "Electrical Outlet Not Working",
    property: {
      id: "104",
      name: "Vibrant City Shop",
      address: "101 Retail Row, San Francisco, CA 94105",
      image: "/vibrant-city-shop.png",
    },
    tenant: {
      id: "204",
      name: "Fashion Forward Boutique",
      email: "manager@fashionforward.com",
      phone: "(415) 555-9876",
    },
    description: "Multiple outlets on the north wall not working. Affecting display lighting.",
    status: "completed",
    priority: "medium",
    category: "electrical",
    createdAt: "2023-11-10T09:20:00Z",
    updatedAt: "2023-11-12T16:30:00Z",
    assignedTo: {
      id: "304",
      name: "Lisa Chen",
      company: "PowerUp Electric",
      phone: "(415) 555-1357",
    },
    completedDate: "2023-11-12T16:00:00Z",
    actualCost: 275,
    images: [],
    notes: [
      {
        id: "407",
        author: "Property Manager",
        text: "Scheduled emergency electrician visit.",
        timestamp: "2023-11-10T10:00:00Z",
      },
      {
        id: "408",
        author: "Lisa Chen",
        text: "Replaced faulty circuit breaker and tested all outlets. All working now.",
        timestamp: "2023-11-12T16:30:00Z",
      },
    ],
  },
  {
    id: "5",
    title: "Clogged Drain in Master Bath",
    property: {
      id: "105",
      name: "Tropical Beachfront Escape",
      address: "202 Oceanview Dr, Miami, FL 33139",
      image: "/tropical-beachfront-escape.png",
    },
    tenant: {
      id: "205",
      name: "Emily Johnson",
      email: "emily.j@email.com",
      phone: "(305) 555-6789",
    },
    description: "Shower drain backing up in master bathroom. Water draining very slowly.",
    status: "open",
    priority: "low",
    category: "plumbing",
    createdAt: "2023-11-16T07:50:00Z",
    updatedAt: "2023-11-16T07:50:00Z",
    assignedTo: null,
    estimatedCost: null,
    images: ["/maintenance/drain1.jpg"],
    notes: [
      {
        id: "409",
        author: "Tenant",
        text: "Issue started yesterday. I tried using drain cleaner but it didn't help.",
        timestamp: "2023-11-16T07:50:00Z",
      },
    ],
  },
  {
    id: "6",
    title: "Parking Lot Pothole",
    property: {
      id: "106",
      name: "Vast Warehouse Interior",
      address: "303 Industrial Blvd, Dallas, TX 75247",
      image: "/vast-warehouse-interior.png",
    },
    tenant: {
      id: "206",
      name: "Global Distribution Co.",
      email: "facilities@globaldistribution.com",
      phone: "(214) 555-3456",
    },
    description: "Large pothole in the main entrance of the parking lot. Causing damage to delivery trucks.",
    status: "scheduled",
    priority: "medium",
    category: "grounds",
    createdAt: "2023-11-12T14:10:00Z",
    updatedAt: "2023-11-15T09:45:00Z",
    assignedTo: {
      id: "305",
      name: "Robert Paving Inc.",
      company: "Robert Paving Inc.",
      phone: "(214) 555-7890",
    },
    scheduledDate: "2023-11-19T08:00:00Z",
    estimatedCost: 1800,
    images: ["/maintenance/pothole1.jpg", "/maintenance/pothole2.jpg"],
    notes: [
      {
        id: "410",
        author: "Property Manager",
        text: "Getting quotes from three paving companies.",
        timestamp: "2023-11-12T16:30:00Z",
      },
      {
        id: "411",
        author: "Property Manager",
        text: "Selected Robert Paving. Work scheduled for Sunday to minimize disruption.",
        timestamp: "2023-11-15T09:45:00Z",
      },
    ],
  },
]

export async function GET(request: Request) {
  // Get the URL and create a URL object to parse query parameters
  const { searchParams } = new URL(request.url)

  // Get the id parameter
  const id = searchParams.get("id")

  // If id is provided, return the specific maintenance request
  if (id) {
    const maintenanceRequest = maintenanceRequests.find((request) => request.id === id)

    if (!maintenanceRequest) {
      return NextResponse.json({ error: "Maintenance request not found" }, { status: 404 })
    }

    return NextResponse.json(maintenanceRequest)
  }

  // Get filter parameters
  const status = searchParams.get("status")
  const priority = searchParams.get("priority")
  const category = searchParams.get("category")
  const property = searchParams.get("property")
  const search = searchParams.get("search")?.toLowerCase()

  // Apply filters
  let filteredRequests = [...maintenanceRequests]

  if (status) {
    filteredRequests = filteredRequests.filter((request) => request.status === status)
  }

  if (priority) {
    filteredRequests = filteredRequests.filter((request) => request.priority === priority)
  }

  if (category) {
    filteredRequests = filteredRequests.filter((request) => request.category === category)
  }

  if (property) {
    filteredRequests = filteredRequests.filter((request) => request.property.id === property)
  }

  if (search) {
    filteredRequests = filteredRequests.filter(
      (request) =>
        request.title.toLowerCase().includes(search) ||
        request.description.toLowerCase().includes(search) ||
        request.property.name.toLowerCase().includes(search) ||
        request.tenant.name.toLowerCase().includes(search),
    )
  }

  // Return the filtered maintenance requests
  return NextResponse.json(filteredRequests)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real application, validate the request body and save to database
    // For this mock, we'll just return a success response with a new ID

    const newRequest = {
      id: (maintenanceRequests.length + 1).toString(),
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: body.status || "open",
    }

    return NextResponse.json(newRequest, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}
