import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"
import Image from "next/image"

export default function GuidesPage() {
  return (
    <>
      <SiteHeader />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Blockchain Real Estate Guides
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Step-by-step tutorials and comprehensive guides to help you navigate the world of tokenized real estate.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-babyblue-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  Tokenization Guides
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/guides/tokenize-your-property" className="text-gray-600 hover:text-babyblue-600">
                        How to Tokenize Your Property
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/fractional-ownership" className="text-gray-600 hover:text-babyblue-600">
                        Setting Up Fractional Ownership
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/token-standards" className="text-gray-600 hover:text-babyblue-600">
                        Understanding Property Token Standards
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/token-marketplace" className="text-gray-600 hover:text-babyblue-600">
                        Listing Tokens on the Marketplace
                      </Link>
                    </li>
                  </ul>
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-babyblue-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                  </div>
                  DeFi Integration Guides
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/guides/yield-farming" className="text-gray-600 hover:text-babyblue-600">
                        Yield Farming with Property Tokens
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/liquidity-pools" className="text-gray-600 hover:text-babyblue-600">
                        Creating Liquidity Pools
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/staking-rewards" className="text-gray-600 hover:text-babyblue-600">
                        Setting Up Staking Rewards
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/rental-income" className="text-gray-600 hover:text-babyblue-600">
                        Automating Rental Income Distribution
                      </Link>
                    </li>
                  </ul>
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-babyblue-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  Security & Governance
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/guides/wallet-security" className="text-gray-600 hover:text-babyblue-600">
                        Securing Your Wallet
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/dao-participation" className="text-gray-600 hover:text-babyblue-600">
                        Participating in Property DAOs
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/voting-rights" className="text-gray-600 hover:text-babyblue-600">
                        Understanding Voting Rights
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/multisig" className="text-gray-600 hover:text-babyblue-600">
                        Setting Up Multi-signature Wallets
                      </Link>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Guide</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <Image
                  src="/blockchain-real-estate.png"
                  alt="Tokenized real estate properties"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Complete Guide to Tokenizing Your First Property</h3>
                <p className="mt-4 text-gray-600">
                  This comprehensive guide walks you through the entire process of tokenizing a real estate property on
                  the blockchain, from legal considerations and documentation to technical implementation and token
                  distribution. Learn how to transform traditional real estate assets into liquid, tradable digital
                  tokens.
                </p>
                <div className="mt-6">
                  <Link
                    href="/guides/complete-tokenization"
                    className="text-babyblue-600 hover:text-babyblue-500 font-medium"
                  >
                    Read the full guide →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    </>
  )
}
