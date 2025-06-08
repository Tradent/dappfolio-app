"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus, ChevronDown } from "lucide-react"

export function DashboardHeader() {
  const [walletConnected, setWalletConnected] = useState(false)

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Welcome to Dappfolio</h1>
        <p className="text-muted-foreground">Manage your property portfolio with blockchain technology</p>
      </div>
      <div className="flex items-center space-x-2">
        {!walletConnected ? (
          <Button onClick={() => setWalletConnected(true)}>Connect Wallet</Button>
        ) : (
          <>
            <Button variant="outline" size="sm">
              <span className="mr-2">8Kvw...3Hua</span>
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Add New <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Create New</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" /> Add Property
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" /> Tokenize Asset
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" /> Create NFT
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </div>
  )
}
