"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import {
  BarChart3,
  Building2,
  ChevronLeft,
  ChevronRight,
  Coins,
  Home,
  MessageSquare,
  Settings,
  ShoppingBag,
  Users,
  Wallet,
} from "lucide-react"

export function AppSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Load collapsed state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed")
    if (savedState !== null) {
      setCollapsed(savedState === "true")
    }
  }, [])

  // Save collapsed state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", collapsed.toString())
  }, [collapsed])

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <aside
      className={`app-sidebar transition-all duration-300 ${collapsed ? "collapsed-sidebar" : ""}`}
      onMouseEnter={collapsed ? handleMouseEnter : undefined}
      onMouseLeave={collapsed ? handleMouseLeave : undefined}
    >
      <div className="flex h-14 items-center border-b px-4 justify-between relative">
        {collapsed ? (
          <div
            className="flex items-center justify-center w-full cursor-pointer"
            onClick={toggleSidebar}
            aria-label="Expand sidebar"
          >
            {isHovering ? (
              <div className="flex items-center justify-center w-full">
                <ChevronRight size={24} className="text-babyblue-500" />
              </div>
            ) : (
              <div className="bg-babyblue-500 text-white p-1 rounded-md">
                <Coins className="h-6 w-6" />
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/app" className="flex items-center">
              <div className="bg-babyblue-500 text-white p-1 rounded-md mr-2">
                <Coins className="h-6 w-6" />
              </div>
              <span className="font-bold text-babyblue-900">Dappfolio</span>
            </Link>
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-md hover:bg-gray-100 text-gray-500"
              aria-label="Collapse sidebar"
            >
              <ChevronLeft size={20} />
            </button>
          </>
        )}
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          <Link
            href="/app"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-babyblue-900 ${
              pathname === "/app" ? "bg-babyblue-100 text-babyblue-900" : "text-gray-500"
            }`}
            title="Dashboard"
          >
            <Home className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Dashboard</span>}
          </Link>
          <Link
            href="/app/properties"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-babyblue-900 ${
              pathname.startsWith("/app/properties") ? "bg-babyblue-100 text-babyblue-900" : "text-gray-500"
            }`}
            title="Properties"
          >
            <Building2 className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Properties</span>}
          </Link>
          <Link
            href="/app/tenants"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-babyblue-900 ${
              pathname.startsWith("/app/tenants") ? "bg-babyblue-100 text-babyblue-900" : "text-gray-500"
            }`}
            title="Tenants"
          >
            <Users className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Tenants</span>}
          </Link>
          <Link
            href="/app/maintenance"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-babyblue-900 ${
              pathname.startsWith("/app/maintenance") ? "bg-babyblue-100 text-babyblue-900" : "text-gray-500"
            }`}
            title="Maintenance"
          >
            <span className="relative flex h-5 w-5 items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-wrench"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            {!collapsed && <span>Maintenance</span>}
          </Link>
          <Link
            href="/app/accounting"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-babyblue-900 ${
              pathname.startsWith("/app/accounting") ? "bg-babyblue-100 text-babyblue-900" : "text-gray-500"
            }`}
            title="Accounting"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-receipt flex-shrink-0"
            >
              <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 17.5v-11" />
            </svg>
            {!collapsed && <span>Accounting</span>}
          </Link>
          <Link
            href="/app/messages"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-babyblue-900 ${
              pathname.startsWith("/app/messages") ? "bg-babyblue-100 text-babyblue-900" : "text-gray-500"
            }`}
            title="Messages"
          >
            <MessageSquare className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Messages</span>}
          </Link>
          <Link
            href="/app/analytics"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-babyblue-900 ${
              pathname.startsWith("/app/analytics") ? "bg-babyblue-100 text-babyblue-900" : "text-gray-500"
            }`}
            title="Analytics"
          >
            <BarChart3 className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Analytics</span>}
          </Link>
          <Link
            href="/app/marketplace"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-babyblue-900 ${
              pathname.startsWith("/app/marketplace") ? "bg-babyblue-100 text-babyblue-900" : "text-gray-500"
            }`}
            title="Marketplace"
          >
            <ShoppingBag className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Marketplace</span>}
          </Link>
          <Link
            href="/app/wallet"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-babyblue-900 ${
              pathname.startsWith("/app/wallet") ? "bg-babyblue-100 text-babyblue-900" : "text-gray-500"
            }`}
            title="Wallet"
          >
            <Wallet className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Wallet</span>}
          </Link>
          <Link
            href="/app/settings"
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-babyblue-900 ${
              pathname.startsWith("/app/settings") ? "bg-babyblue-100 text-babyblue-900" : "text-gray-500"
            }`}
            title="Settings"
          >
            <Settings className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Settings</span>}
          </Link>
        </nav>
      </div>
    </aside>
  )
}
