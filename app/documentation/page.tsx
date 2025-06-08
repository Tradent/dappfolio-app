import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function DocumentationPage() {
  return (
    <>
      <SiteHeader />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-babyblue-600">Documentation</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Master Decentralized Real Estate
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive documentation to help you navigate the world of tokenized real estate assets,
              blockchain-based property management, and decentralized finance for real estate investments.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 md:grid-cols-3 lg:grid-cols-3">
            <div className="border-l border-gray-300 pl-6">
              <h3 className="text-lg font-semibold leading-7 text-gray-900">Getting Started</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Learn how to set up your wallet, connect to the platform, and start managing tokenized real estate
                assets.
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/docs/wallet-setup" className="text-gray-600 hover:text-babyblue-600">
                    Wallet Setup
                  </Link>
                </li>
                <li>
                  <Link href="/docs/connecting-to-dappfolio" className="text-gray-600 hover:text-babyblue-600">
                    Connecting to Dappfolio
                  </Link>
                </li>
                <li>
                  <Link href="/docs/understanding-tokens" className="text-gray-600 hover:text-babyblue-600">
                    Understanding Property Tokens
                  </Link>
                </li>
                <li>
                  <Link href="/docs/first-property" className="text-gray-600 hover:text-babyblue-600">
                    Adding Your First Property
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-l border-gray-300 pl-6">
              <h3 className="text-lg font-semibold leading-7 text-gray-900">Smart Contracts</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Explore our smart contract architecture and learn how property tokenization works on the blockchain.
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/docs/property-nft-standard" className="text-gray-600 hover:text-babyblue-600">
                    Property NFT Standard
                  </Link>
                </li>
                <li>
                  <Link href="/docs/rental-agreements" className="text-gray-600 hover:text-babyblue-600">
                    Smart Rental Agreements
                  </Link>
                </li>
                <li>
                  <Link href="/docs/revenue-distribution" className="text-gray-600 hover:text-babyblue-600">
                    Automated Revenue Distribution
                  </Link>
                </li>
                <li>
                  <Link href="/docs/governance" className="text-gray-600 hover:text-babyblue-600">
                    DAO Governance Model
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-l border-gray-300 pl-6">
              <h3 className="text-lg font-semibold leading-7 text-gray-900">Advanced Features</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Discover advanced features for property management, fractional ownership, and DeFi integrations.
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/docs/fractional-ownership" className="text-gray-600 hover:text-babyblue-600">
                    Fractional Ownership
                  </Link>
                </li>
                <li>
                  <Link href="/docs/defi-integrations" className="text-gray-600 hover:text-babyblue-600">
                    DeFi Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/docs/property-analytics" className="text-gray-600 hover:text-babyblue-600">
                    On-Chain Property Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/docs/cross-chain" className="text-gray-600 hover:text-babyblue-600">
                    Cross-Chain Compatibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    </>
  )
}
