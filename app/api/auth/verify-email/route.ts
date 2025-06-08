import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { token } = await request.json()

    // Validate input
    if (!token) {
      return NextResponse.json({ message: "Token is required" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Verify the token is valid
    // 2. Find the user associated with the token
    // 3. Mark the user's email as verified
    // 4. Invalidate the token

    // Mock user for demonstration
    const user = {
      id: "2",
      email: "verified@example.com",
      name: "Verified User",
      isEmailVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    return NextResponse.json({
      user,
      message: "Email verified successfully",
    })
  } catch (error) {
    console.error("Error in verify email:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
