"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth/auth-context"
import { wallets, connectWallet, signMessage } from "@/lib/auth/wallet-utils"
import Image from "next/image"

export function WalletConnection() {
  const { signInWithWallet } = useAuth()
  const [connecting, setConnecting] = useState<string | null>(null)

  const handleWalletConnect = async (walletType: string) => {
    try {
      setConnecting(walletType)

      // Connect to wallet
      const address = await connectWallet(walletType)

      // Sign a message to verify ownership
      const message = "Sign this message to authenticate with Dappfolio"
      const signature = await signMessage(walletType, address, message)

      // Authenticate with the backend
      await signInWithWallet(walletType)
    } catch (error) {
      console.error(`Error connecting to ${walletType}:`, error)
    } finally {
      setConnecting(null)
    }
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground">Or connect wallet</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {wallets.map((wallet) => (
          <Button
            key={wallet.type}
            variant="outline"
            className="flex flex-col items-center justify-center h-24 p-2"
            disabled={connecting !== null}
            onClick={() => handleWalletConnect(wallet.type)}
          >
            <div className="relative w-10 h-10 mb-2">
              <Image src={wallet.icon || "/placeholder.svg"} alt={wallet.name} fill className="object-contain" />
            </div>
            <span className="text-xs">{wallet.name}</span>
            {connecting === wallet.type && <span className="text-xs text-muted-foreground mt-1">Connecting...</span>}
          </Button>
        ))}
      </div>
    </div>
  )
}
