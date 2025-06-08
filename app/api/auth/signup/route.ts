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
    const { email, password, name } = await request.json()

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json({ message: "Email, password, and name are required" }, { status: 400 })
    }

    // Check if user already exists
    if (users.some((u) => u.email === email)) {
      return NextResponse.json({ message: "Email already in use" }, { status: 409 })
    }

    // Create new user
    const newUser = {
      id: (users.length + 1).toString(),
      email,
      password, // In a real app, this would be hashed
      name,
      isEmailVerified: false, // Requires verification
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    users.push(newUser)

    // In a real app, send verification email here

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json(
      {
        user: userWithoutPassword,
        message: "Sign up successful. Please verify your email.",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error in sign up:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
