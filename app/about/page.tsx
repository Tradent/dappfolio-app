import Link from "next/link"
import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">Dappfolio</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="/features" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Features
              </Link>
              <Link href="/how-it-works" className="text-base font-medium text-gray-500 hover:text-gray-900">
                How It Works
              </Link>
              <Link href="/pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/roadmap" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Roadmap
              </Link>
            </nav>
            <div className="flex items-center">
              <Link
                href="/app"
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Launch App
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              About <span className="text-blue-600">Dappfolio</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transforming real estate ownership through blockchain technology and decentralized finance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-lg text-gray-500">
                Founded in 2023, Dappfolio emerged from a vision to democratize real estate investment through
                blockchain technology. Our founders recognized the inefficiencies in traditional real estate
                markets—high entry barriers, illiquidity, and opaque transactions—and set out to create a solution that
                leverages the power of decentralized finance.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                What began as a concept for tokenizing real estate assets has evolved into a comprehensive platform that
                enables fractional ownership, transparent property management, and seamless transactions on the
                blockchain. Today, Dappfolio is pioneering the intersection of real estate and Web3 technology.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/blockchain-real-estate.png"
                  alt="Blockchain real estate concept"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              To make real estate investment accessible, transparent, and efficient through blockchain technology.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-md bg-blue-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Decentralization</h3>
                <p className="mt-2 text-base text-gray-500">
                  Eliminating intermediaries and creating trustless systems for real estate transactions and management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-md bg-blue-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Tokenization</h3>
                <p className="mt-2 text-base text-gray-500">
                  Converting real estate assets into digital tokens to enable fractional ownership and liquidity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 rounded-md bg-blue-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Transparency</h3>
                <p className="mt-2 text-base text-gray-500">
                  Leveraging blockchain's immutable ledger to provide complete transparency in all transactions and
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Leadership Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Meet the blockchain and real estate experts behind Dappfolio.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full overflow-hidden">
                <Image
                  src="/confident-leader.png"
                  alt="Elena Rodriguez"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Elena Rodriguez</h3>
              <p className="text-sm text-blue-600">CEO & Co-Founder</p>
              <p className="mt-2 text-base text-gray-500">
                Former blockchain architect with experience at major DeFi protocols and a background in commercial real
                estate investment.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full overflow-hidden">
                <Image src="/confident-cto.png" alt="David Wei" width={160} height={160} className="object-cover" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">David Wei</h3>
              <p className="text-sm text-blue-600">CTO & Co-Founder</p>
              <p className="mt-2 text-base text-gray-500">
                Smart contract developer who previously built tokenization platforms and decentralized exchanges for
                digital assets.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full overflow-hidden">
                <Image
                  src="/confident-coo.png"
                  alt="Marcus Johnson"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Marcus Johnson</h3>
              <p className="text-sm text-blue-600">COO</p>
              <p className="mt-2 text-base text-gray-500">
                Real estate operations expert with 12+ years of experience in property management and proptech
                innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mt-10 lg:mt-0 lg:order-first">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/blockchain-architecture.png"
                  alt="Dappfolio blockchain architecture"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:pl-8">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Technology</h2>
              <p className="mt-4 text-lg text-gray-500">
                Dappfolio is built on a robust blockchain infrastructure that enables secure, transparent, and efficient
                real estate operations.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">
                    <strong className="font-medium text-gray-900">Smart Contracts:</strong> Automated, self-executing
                    contracts that handle property transactions, rental agreements, and dividend distributions.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">
                    <strong className="font-medium text-gray-900">NFT Standards:</strong> Non-fungible tokens that
                    represent unique properties and their ownership records on the blockchain.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">
                    <strong className="font-medium text-gray-900">DeFi Integration:</strong> Connections to
                    decentralized finance protocols for lending, borrowing, and yield generation against real estate
                    assets.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">
                    <strong className="font-medium text-gray-900">DAO Governance:</strong> Decentralized autonomous
                    organization structure that allows property token holders to vote on management decisions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
