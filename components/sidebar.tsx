"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Building2,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  PieChart,
  Settings,
  Shield,
  ShoppingBag,
  Users,
  Wallet,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const mainNavItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  {
    name: "Properties",
    href: "/properties",
    icon: Building2,
    subItems: [
      { name: "All Properties", href: "/properties" },
      { name: "Add Property", href: "/properties/add" },
      { name: "Tokenized Properties", href: "/properties/tokenized" },
    ],
  },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "NFT Gallery", href: "/nft-gallery", icon: ImageIcon },
  { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
]

const managementNavItems = [
  { name: "Tenants", href: "/tenants", icon: Users },
  { name: "Maintenance", href: "/maintenance", icon: Building2 },
  { name: "Accounting", href: "/accounting", icon: PieChart },
  { name: "Messages", href: "/messages", icon: MessageSquare },
]

const settingsNavItems = [
  { name: "Security", href: "/security", icon: Shield },
  { name: "Wallet", href: "/wallet", icon: Wallet },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [openAccordions, setOpenAccordions] = useState<string[]>(["properties", "management", "account"])

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-40 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 transform bg-background border-r transition-transform duration-200 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-6 w-6" />
            <span className="font-bold text-xl">Dappfolio</span>
          </Link>
        </div>
        <nav className="space-y-1 px-2 py-4">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

            if (item.subItems) {
              return (
                <Accordion
                  key={item.name}
                  type="multiple"
                  value={openAccordions}
                  onValueChange={setOpenAccordions}
                  className="border-none"
                >
                  <AccordionItem value="properties" className="border-none">
                    <AccordionTrigger
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium no-underline hover:no-underline",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      <div className="flex items-center">
                        <item.icon className="mr-2 h-5 w-5" />
                        <span>{item.name}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9 pt-1 pb-0">
                      <div className="space-y-1">
                        {item.subItems.map((subItem) => {
                          const isSubActive = pathname === subItem.href
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                "block rounded-md px-3 py-2 text-sm font-medium",
                                isSubActive
                                  ? "bg-primary text-primary-foreground"
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                              )}
                            >
                              {subItem.name}
                            </Link>
                          )
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <item.icon className="mr-2 h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="px-2 py-2">
          <Accordion type="multiple" value={openAccordions} onValueChange={setOpenAccordions} className="border-none">
            <AccordionItem value="management" className="border-none">
              <AccordionTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-muted hover:text-foreground no-underline hover:no-underline">
                Property Management
              </AccordionTrigger>
              <AccordionContent className="space-y-1 pt-1 pb-0">
                {managementNavItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      <item.icon className="mr-2 h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="px-2 py-2">
          <Accordion type="multiple" value={openAccordions} onValueChange={setOpenAccordions} className="border-none">
            <AccordionItem value="account" className="border-none">
              <AccordionTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-muted hover:text-foreground no-underline hover:no-underline">
                Account
              </AccordionTrigger>
              <AccordionContent className="space-y-1 pt-1 pb-0">
                {settingsNavItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      <item.icon className="mr-2 h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
}
