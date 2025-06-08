import { NextResponse } from "next/server"

export async function POST() {
  // In a real app, you would clear the session, cookies, etc.
  return NextResponse.json({ message: "Signed out successfully" })
}
