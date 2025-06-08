import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="app-container">
      <AppSidebar />
      <AppHeader />
      <main className="app-main p-6 overflow-auto">{children}</main>
    </div>
  )
}
