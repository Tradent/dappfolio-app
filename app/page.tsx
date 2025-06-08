import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Coins, Globe, Shield } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm transition-shadow">
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
              <Link href="/how-it-works" className="text-gray-600 hover:text-babyblue-600">
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
      <section className="bg-gradient-to-b from-babyblue-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-babyblue-900 leading-tight">
                Manage & Tokenize Your Real Estate Portfolio
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Dappfolio combines traditional property management with blockchain technology to provide a seamless
                experience for property owners, investors, and tenants.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-babyblue-500 hover:bg-babyblue-600 text-white" asChild>
                  <Link href="/app">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/urban-glass-facade.png"
                alt="Modern property management dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-babyblue-900">Everything You Need to Manage Your Properties</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              From traditional property management to blockchain tokenization, Dappfolio provides all the tools you need
              in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Building className="h-10 w-10 text-babyblue-500" />}
              title="Property Management"
              description="Easily manage all your properties, tenants, maintenance requests, and financial data in one place."
            />
            <FeatureCard
              icon={<Coins className="h-10 w-10 text-babyblue-500" />}
              title="Asset Tokenization"
              description="Convert your properties into digital tokens on the blockchain for fractional ownership and liquidity."
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-babyblue-500" />}
              title="Marketplace"
              description="Buy, sell, and trade tokenized property assets on our integrated marketplace."
            />
            <FeatureCard
              icon={<ChartBar className="h-10 w-10 text-babyblue-500" />}
              title="Analytics & Reporting"
              description="Get detailed insights into your portfolio performance with advanced analytics and custom reports."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-babyblue-500" />}
              title="Tenant Portal"
              description="Provide your tenants with a dedicated portal for rent payments, maintenance requests, and communication."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-babyblue-500" />}
              title="Secure Transactions"
              description="All transactions are secured by blockchain technology, ensuring transparency and immutability."
            />
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-babyblue-300 text-babyblue-700" asChild>
              <Link href="/features">
                View All Features <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-babyblue-900">How Dappfolio Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform simplifies property management and tokenization in just a few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Add Your Properties"
              description="Import your existing properties or add new ones to your portfolio with our easy-to-use interface."
            />
            <StepCard
              number="2"
              title="Manage & Optimize"
              description="Use our comprehensive tools to manage tenants, maintenance, finances, and optimize your portfolio performance."
            />
            <StepCard
              number="3"
              title="Tokenize & Trade"
              description="Convert eligible properties into digital tokens and access new investment opportunities on our marketplace."
            />
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-babyblue-300 text-babyblue-700" asChild>
              <Link href="/how-it-works">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-babyblue-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your portfolio size and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="$49"
              description="Perfect for small property owners"
              features={["Up to 5 properties", "Basic property management", "Tenant portal", "Email support"]}
              buttonText="Get Started"
              buttonVariant="outline"
            />
            <PricingCard
              title="Professional"
              price="$99"
              description="Ideal for growing portfolios"
              features={[
                "Up to 20 properties",
                "Advanced property management",
                "Basic tokenization",
                "Analytics & reporting",
                "Priority support",
              ]}
              buttonText="Get Started"
              buttonVariant="primary"
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="For large property portfolios"
              features={[
                "Unlimited properties",
                "Full property management suite",
                "Advanced tokenization",
                "Custom analytics & API access",
                "Dedicated account manager",
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
            />
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-babyblue-300 text-babyblue-700" asChild>
              <Link href="/pricing">
                Compare All Plans <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-babyblue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Ready to Transform Your Property Management?</h2>
            <p className="mt-4 text-lg text-babyblue-100">
              Join thousands of property owners who are already using Dappfolio to streamline their operations and
              unlock new investment opportunities.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-babyblue-900 hover:bg-babyblue-50" asChild>
                <Link href="/app">
                  Launch App <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-babyblue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-babyblue-100 text-babyblue-600 font-bold text-xl mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-babyblue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "outline" | "primary"
  highlighted?: boolean
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border ${
        highlighted ? "border-babyblue-300 ring-2 ring-babyblue-200" : "border-gray-100"
      } p-6 flex flex-col h-full ${highlighted ? "transform scale-105" : ""}`}
    >
      <h3 className="text-xl font-semibold text-babyblue-900">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        {price !== "Custom" && <span className="ml-1 text-gray-500">/month</span>}
      </div>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
      <ul className="mt-6 space-y-3 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-babyblue-500 flex-shrink-0 mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button
          className={buttonVariant === "primary" ? "w-full bg-babyblue-500 hover:bg-babyblue-600 text-white" : "w-full"}
          variant={buttonVariant === "primary" ? "default" : "outline"}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

function Building(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}

function ChartBar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
