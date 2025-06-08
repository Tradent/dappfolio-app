import { NextResponse } from "next/server"

// Mock user database
const users = [
  {
    id: "1",
    email: "demo@example.com",
    password: "password123", // In a real app, this would be hashed
    name: "Demo User",
    isEmailVerified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
    }

    // Find user by email
    const user = users.find((u) => u.email === email)

    // Check if user exists and password is correct
    if (!user || user.password !== password) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
    }

    // Check if email is verified
    if (!user.isEmailVerified) {
      return NextResponse.json({ message: "Please verify your email before signing in" }, { status: 403 })
    }

    // Create session (in a real app, this would set cookies, etc.)
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      user: userWithoutPassword,
      message: "Sign in successful",
    })
  } catch (error) {
    console.error("Error in sign in:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
