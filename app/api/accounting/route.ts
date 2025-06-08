import { NextResponse } from "next/server"

// Sample data for financial transactions
const transactions = [
  {
    id: "TR-7829",
    date: "2023-04-10",
    description: "Rent Payment - Unit 301",
    property: "Urban Glass Facade",
    category: "Income",
    amount: 2200.0,
    status: "completed",
  },
  {
    id: "TR-7830",
    date: "2023-04-09",
    description: "Plumbing Repair",
    property: "Cozy Suburban Home",
    category: "Expense",
    amount: -450.0,
    status: "completed",
  },
  {
    id: "TR-7831",
    date: "2023-04-08",
    description: "Security Deposit - Unit 205",
    property: "Modern City Office",
    category: "Income",
    amount: 3000.0,
    status: "completed",
  },
  // More transactions would be here in a real API
]

export async function GET(request: Request) {
  // Get query parameters
  const { searchParams } = new URL(request.url)
  const property = searchParams.get("property")
  const category = searchParams.get("category")
  const startDate = searchParams.get("startDate")
  const endDate = searchParams.get("endDate")

  // Filter transactions based on query parameters
  let filteredTransactions = [...transactions]

  if (property && property !== "all") {
    filteredTransactions = filteredTransactions.filter((t) => t.property.toLowerCase().includes(property.toLowerCase()))
  }

  if (category) {
    filteredTransactions = filteredTransactions.filter((t) => t.category.toLowerCase() === category.toLowerCase())
  }

  if (startDate) {
    filteredTransactions = filteredTransactions.filter((t) => new Date(t.date) >= new Date(startDate))
  }

  if (endDate) {
    filteredTransactions = filteredTransactions.filter((t) => new Date(t.date) <= new Date(endDate))
  }

  // Return filtered transactions
  return NextResponse.json({
    transactions: filteredTransactions,
    total: filteredTransactions.length,
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.description || !body.amount || !body.category || !body.property) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would save this to a database
    const newTransaction = {
      id: `TR-${Math.floor(Math.random() * 10000)}`,
      date: body.date || new Date().toISOString().split("T")[0],
      description: body.description,
      property: body.property,
      category: body.category,
      amount: Number.parseFloat(body.amount),
      status: "completed",
    }

    return NextResponse.json(
      {
        transaction: newTransaction,
        message: "Transaction created successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Failed to create transaction" }, { status: 500 })
  }
}
