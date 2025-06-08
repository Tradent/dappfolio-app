import { NextResponse } from "next/server"

// Mock wallet data
const walletData = {
  balance: {
    fiat: 24680.75,
    crypto: 15420.32,
    total: 40101.07,
    change: 3.2,
  },
  cryptoAssets: [
    { name: "Ethereum", symbol: "ETH", balance: 4.28, value: 8560.0, change: 2.4 },
    { name: "Bitcoin", symbol: "BTC", balance: 0.12, value: 4800.32, change: -1.2 },
    { name: "Property Token", symbol: "PROP", balance: 250, value: 2000.0, change: 5.7 },
    { name: "USD Coin", symbol: "USDC", balance: 60, value: 60.0, change: 0 },
  ],
  transactions: [
    {
      id: "TX123456",
      type: "Received",
      amount: 1500.0,
      currency: "USD",
      from: "Tenant: John Smith",
      date: "2023-04-12",
      status: "Completed",
    },
    {
      id: "TX123455",
      type: "Sent",
      amount: 0.5,
      currency: "ETH",
      to: "Property Tokenization",
      date: "2023-04-10",
      status: "Completed",
    },
    {
      id: "TX123454",
      type: "Received",
      amount: 25,
      currency: "PROP",
      from: "Property Dividend",
      date: "2023-04-08",
      status: "Completed",
    },
    {
      id: "TX123453",
      type: "Sent",
      amount: 750.0,
      currency: "USD",
      to: "Maintenance Service",
      date: "2023-04-05",
      status: "Completed",
    },
    {
      id: "TX123452",
      type: "Received",
      amount: 2200.0,
      currency: "USD",
      from: "Tenant: Sarah Johnson",
      date: "2023-04-01",
      status: "Completed",
    },
  ],
  paymentMethods: [
    { id: 1, name: "Chase Bank ****4567", type: "Bank Account", default: true },
    { id: 2, name: "Visa ****1234", type: "Credit Card", default: false },
    { id: 3, name: "MetaMask Wallet", type: "Crypto Wallet", address: "0x71C...93E4", default: false },
  ],
  propertyTokens: [
    { id: 1, property: "Urban Glass Facade", tokens: 100, value: 10000, apy: 8.5 },
    { id: 2, property: "Tropical Beachfront Escape", tokens: 50, value: 7500, apy: 9.2 },
    { id: 3, property: "Modern City Office", tokens: 75, value: 6000, apy: 7.8 },
    { id: 4, property: "Vast Warehouse Interior", tokens: 25, value: 2500, apy: 6.5 },
  ],
}

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(walletData)
}

export async function POST(request: Request) {
  const data = await request.json()

  // Process transaction or update wallet data
  // This is a mock implementation

  return NextResponse.json({
    success: true,
    message: "Transaction processed successfully",
    transactionId: `TX${Math.floor(Math.random() * 1000000)}`,
  })
}
