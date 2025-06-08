import { NextResponse } from "next/server"

// This would typically come from a database
const tenants = [
  {
    id: "t1",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "(555) 123-4567",
    property: "Urban Glass Facade",
    unit: "301",
    leaseStart: "2023-06-01",
    leaseEnd: "2024-05-31",
    rent: 2200,
    status: "current",
    balance: 0,
  },
  // More tenants would be here
]

export async function GET() {
  // In a real app, you would fetch from a database
  // and implement pagination, filtering, etc.
  return NextResponse.json(tenants)
}

export async function POST(request: Request) {
  try {
    const tenant = await request.json()

    // In a real app, you would validate and save to a database
    // For now, we'll just return the tenant with a fake ID
    return NextResponse.json(
      {
        ...tenant,
        id: `t${Date.now()}`,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Failed to create tenant" }, { status: 400 })
  }
}
