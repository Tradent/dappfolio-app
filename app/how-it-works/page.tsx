import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Coins } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="bg-babyblue-500 text-white p-2 rounded-md mr-2">
                  <Coins className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold text-babyblue-900">Dappfolio</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-babyblue-600">
                Features
              </Link>
              <Link href="/how-it-works" className="text-babyblue-600 font-medium">
                How It Works
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-babyblue-600">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:inline-flex">
                Sign In
              </Button>
              <Button className="bg-babyblue-500 hover:bg-babyblue-600 text-white" asChild>
                <Link href="/app">Launch App</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-babyblue-50 to-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-babyblue-900">How Dappfolio Works</h1>
            <p className="mt-4 text-lg text-gray-600">
              Our platform simplifies property management and tokenization with an intuitive workflow designed for
              property owners and investors.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 h-full w-0.5 bg-babyblue-200" aria-hidden="true"></div>
              <div className="space-y-16">
                <ProcessStep
                  number="1"
                  title="Create Your Account"
                  description="Sign up for Dappfolio in minutes. Connect your wallet if you plan to use blockchain features, or start with traditional property management."
                  image="/colorful-abstract-shapes.png"
                  imageAlt="Account creation screen"
                />
                <ProcessStep
                  number="2"
                  title="Add Your Properties"
                  description="Import your existing properties or add new ones to your portfolio. Enter property details, upload images, and set up your management preferences."
                  image="/urban-glass-facade.png"
                  imageAlt="Property addition interface"
                />
                <ProcessStep
                  number="3"
                  title="Manage Your Portfolio"
                  description="Use our comprehensive tools to manage tenants, maintenance, finances, and optimize your portfolio performance. Track metrics and generate reports."
                  image="/modern-city-office.png"
                  imageAlt="Portfolio management dashboard"
                />
                <ProcessStep
                  number="4"
                  title="Tokenize Eligible Properties"
                  description="Convert properties into digital tokens on the blockchain. Set token parameters, ownership structure, and dividend distribution rules."
                  image="/abstract-geometric-shapes.png"
                  imageAlt="Tokenization process visualization"
                />
                <ProcessStep
                  number="5"
                  title="Access the Marketplace"
                  description="List your tokenized properties for sale or investment, or browse opportunities to diversify your portfolio with fractional ownership in other properties."
                  image="/tropical-beachfront-escape.png"
                  imageAlt="Marketplace interface"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-babyblue-900">Use Cases</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover how different types of users leverage Dappfolio to achieve their real estate goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UseCase
              title="Property Owners"
              description="Streamline management of your properties, reduce administrative overhead, and explore tokenization to unlock new value from your assets."
              points={[
                "Centralize property management operations",
                "Automate rent collection and financial reporting",
                "Tokenize properties for fractional sales while maintaining control",
                "Access new capital through the marketplace",
              ]}
            />
            <UseCase
              title="Real Estate Investors"
              description="Diversify your portfolio with fractional ownership in premium properties, access detailed analytics, and trade tokens with ease."
              points={[
                "Invest in fractional property ownership with lower capital requirements",
                "Diversify across multiple properties and locations",
                "Enjoy liquidity not available in traditional real estate",
                "Track performance with detailed analytics",
              ]}
            />
            <UseCase
              title="Property Managers"
              description="Enhance your service offerings with powerful tools for managing multiple properties, owners, and tenants in one platform."
              points={[
                "Manage properties for multiple owners efficiently",
                "Streamline maintenance workflows and vendor relationships",
                "Provide owners with real-time reporting and insights",
                "Offer tokenization as a value-added service",
              ]}
            />
            <UseCase
              title="Real Estate Developers"
              description="Fund projects through tokenization, manage development processes, and connect with investors interested in new opportunities."
              points={[
                "Raise capital for new developments through tokenization",
                "Track construction progress and budgets",
                "Manage pre-sales and investor relations",
                "Transition completed projects to property management",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-babyblue-900">Our Technology</h2>
            <p className="mt-4 text-lg text-gray-600">
              Dappfolio combines cutting-edge blockchain technology with proven property management systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TechCard
              title="Blockchain Integration"
              description="Built on secure, scalable blockchain infrastructure to enable tokenization, smart contracts, and transparent transactions."
            />
            <TechCard
              title="Smart Contracts"
              description="Automated agreements that handle token issuance, ownership transfers, dividend distribution, and governance."
            />
            <TechCard
              title="Property Management System"
              description="Comprehensive tools for traditional property management, from tenant screening to maintenance tracking."
            />
            <TechCard
              title="Analytics Engine"
              description="Advanced data processing to provide insights, forecasts, and performance metrics for your portfolio."
            />
            <TechCard
              title="Secure Wallet Integration"
              description="Connect popular cryptocurrency wallets to manage your tokenized assets and transactions."
            />
            <TechCard
              title="API Ecosystem"
              description="Integrate with third-party services for payments, property listings, credit checks, and more."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-babyblue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-babyblue-100">
              Join thousands of property owners and investors who are already using Dappfolio to transform their real
              estate operations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-babyblue-900 hover:bg-babyblue-50" asChild>
                <Link href="/app">
                  Launch App <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-babyblue-800" asChild>
                <Link href="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

function ProcessStep({
  number,
  title,
  description,
  image,
  imageAlt,
}: {
  number: string
  title: string
  description: string
  image: string
  imageAlt: string
}) {
  return (
    <div className="relative">
      <div className="flex items-start">
        <div className="flex items-center justify-center h-9 w-9 rounded-full bg-babyblue-500 text-white font-bold text-lg -ml-4.5 relative z-10">
          {number}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-babyblue-900">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-4 rounded-lg overflow-hidden shadow-md">
            <Image src={image || "/placeholder.svg"} alt={imageAlt} width={600} height={300} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

function UseCase({
  title,
  description,
  points,
}: {
  title: string
  description: string
  points: string[]
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold text-babyblue-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-babyblue-500 flex-shrink-0 mr-2 mt-0.5" />
            <span className="text-gray-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TechCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-babyblue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
