import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Calendar,
  Clock,
  Coins,
  GraduationCap,
  Heart,
  HeartHandshake,
  MapPin,
  MonitorSmartphone,
  PiggyBank,
  Search,
  Sparkles,
  Timer,
  Users,
} from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="bg-blue-600 text-white p-2 rounded-md mr-2">
                  <Coins className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold text-gray-900">Dappfolio</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-blue-600">
                Features
              </Link>
              <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600">
                How It Works
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-blue-600">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:inline-flex">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/app">Launch App</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900">Build the Future of Real Estate</h1>
            <p className="mt-4 text-lg text-gray-600">
              Join our team and help revolutionize property ownership through blockchain technology.
            </p>
            <div className="mt-8 relative max-w-md mx-auto">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <Search className="h-5 w-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder="Search open positions..."
                  className="flex-1 py-2 px-3 focus:outline-none"
                />
                <Button className="rounded-none bg-blue-600 hover:bg-blue-700 text-white">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Why Join Dappfolio?</h2>
              <p className="mt-4 text-lg text-gray-600">
                We're building the infrastructure for the future of real estate ownership and management. At Dappfolio,
                you'll work on groundbreaking blockchain technology that's transforming a trillion-dollar industry.
              </p>
              <ul className="mt-6 space-y-4">
                <BenefitItem
                  icon={<Sparkles className="h-5 w-5 text-blue-600" />}
                  text="Develop cutting-edge blockchain applications for real-world assets"
                />
                <BenefitItem
                  icon={<Users className="h-5 w-5 text-blue-600" />}
                  text="Collaborate with experts in blockchain, real estate, and finance"
                />
                <BenefitItem
                  icon={<GraduationCap className="h-5 w-5 text-blue-600" />}
                  text="Learn and grow in the rapidly evolving Web3 and tokenization space"
                />
                <BenefitItem
                  icon={<Heart className="h-5 w-5 text-blue-600" />}
                  text="Make a meaningful impact on how people invest in and manage property"
                />
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/blockchain-team-collaboration.png"
                alt="Dappfolio team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Benefits</h2>
            <p className="mt-4 text-lg text-gray-600">
              We take care of our team so they can focus on building the future of real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<HeartHandshake className="h-8 w-8 text-blue-600" />}
              title="Comprehensive Healthcare"
              description="Medical, dental, and vision coverage for you and your dependents."
            />
            <BenefitCard
              icon={<PiggyBank className="h-8 w-8 text-blue-600" />}
              title="Crypto Compensation"
              description="Option to receive part of your salary in cryptocurrency or property tokens."
            />
            <BenefitCard
              icon={<Timer className="h-8 w-8 text-blue-600" />}
              title="Flexible Work Hours"
              description="Work when you're most productive with flexible scheduling."
            />
            <BenefitCard
              icon={<MonitorSmartphone className="h-8 w-8 text-blue-600" />}
              title="Remote-First Culture"
              description="Work from anywhere in the world with our distributed team."
            />
            <BenefitCard
              icon={<Calendar className="h-8 w-8 text-blue-600" />}
              title="Unlimited PTO"
              description="Take time off when you need it, with no fixed limit on vacation days."
            />
            <BenefitCard
              icon={<GraduationCap className="h-8 w-8 text-blue-600" />}
              title="Web3 Education"
              description="Budget for blockchain courses, conferences, and certifications."
            />
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  All Departments
                </Button>
                <Button variant="ghost" size="sm">
                  Engineering
                </Button>
                <Button variant="ghost" size="sm">
                  Product
                </Button>
                <Button variant="ghost" size="sm">
                  Business
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <JobListing
                title="Smart Contract Engineer"
                department="Engineering"
                location="Remote"
                type="Full-time"
                description="Design and implement secure, efficient smart contracts for real estate tokenization, property management, and automated rental agreements."
              />
              <JobListing
                title="Blockchain Frontend Developer"
                department="Engineering"
                location="Remote"
                type="Full-time"
                description="Build intuitive interfaces for our decentralized real estate platform, integrating with wallets and blockchain infrastructure."
              />
              <JobListing
                title="DeFi Integration Specialist"
                department="Engineering"
                location="Remote"
                type="Full-time"
                description="Develop connections between our tokenized real estate platform and DeFi protocols for lending, borrowing, and yield generation."
              />
              <JobListing
                title="Tokenization Product Manager"
                department="Product"
                location="Remote"
                type="Full-time"
                description="Lead the product strategy for our property tokenization features, working with legal, engineering, and business teams."
              />
              <JobListing
                title="Real Estate Blockchain Analyst"
                department="Business"
                location="Remote"
                type="Full-time"
                description="Analyze market opportunities for blockchain applications in real estate and develop tokenization models for different property types."
              />
              <JobListing
                title="Web3 Community Manager"
                department="Marketing"
                location="Remote"
                type="Full-time"
                description="Build and engage our community of property investors, token holders, and real estate professionals across Discord, Twitter, and other platforms."
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Don't see a position that matches your skills?</p>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-700">
                Submit General Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Life at Dappfolio</h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear directly from our team members about building the future of real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working at Dappfolio has given me the opportunity to apply blockchain technology to solve real-world problems in the property market. It's exciting to see our smart contracts facilitating transactions that used to take weeks."
              name="Alex Chen"
              role="Senior Smart Contract Engineer"
              image="/coding-workspace.png"
            />
            <TestimonialCard
              quote="The vision of democratizing real estate investment through tokenization is what drew me to Dappfolio. Every day, we're making property ownership more accessible to people who were previously excluded from this asset class."
              name="Priya Sharma"
              role="Product Manager"
              image="/product-manager-workspace.png"
            />
            <TestimonialCard
              quote="As someone with both blockchain and real estate experience, Dappfolio is the perfect intersection of my interests. We're not just talking about disruption—we're actually building the infrastructure for the future of property ownership."
              name="Marcus Johnson"
              role="Business Development"
              image="/business-meeting.png"
            />
          </div>
        </div>
      </section>

      {/* Web3 Education */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Web3 Education Program</h2>
            <p className="mt-4 text-lg text-gray-600">We invest in our team's blockchain knowledge and skills.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to premium blockchain and Web3 courses</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weekly internal tech talks on blockchain innovations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mentorship from experienced blockchain developers</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Library of books and research papers on tokenization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conference & Events</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sponsored attendance at major blockchain conferences</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Opportunities to speak and present at industry events</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quarterly hackathons with real estate technology partners</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Annual team retreat focused on blockchain innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Ready to Revolutionize Real Estate?</h2>
            <p className="mt-4 text-lg text-blue-100">
              Join our team and help build the decentralized future of property ownership and management.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Learn About Our Culture
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

function BenefitItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <span className="ml-3 text-gray-700">{text}</span>
    </li>
  )
}

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

interface JobListingProps {
  title: string
  department: string
  location: string
  type: string
  description: string
}

function JobListing({ title, department, location, type, description }: JobListingProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="flex flex-wrap gap-2 mt-2 mb-4 md:mb-0">
            <span className="inline-flex items-center text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {department}
            </span>
            <span className="inline-flex items-center text-xs font-medium text-gray-600 px-2 py-1 rounded-full border border-gray-200">
              <MapPin className="h-3 w-3 mr-1" />
              {location}
            </span>
            <span className="inline-flex items-center text-xs font-medium text-gray-600 px-2 py-1 rounded-full border border-gray-200">
              <Clock className="h-3 w-3 mr-1" />
              {type}
            </span>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
          <Link href="#">
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <p className="text-gray-600 mt-4">{description}</p>
    </div>
  )
}

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  image: string
}

function TestimonialCard({ quote, name, role, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="relative mb-6">
        <span className="text-blue-200 text-6xl absolute -top-8 left-0">"</span>
        <p className="text-gray-700 relative z-10">{quote}</p>
      </div>
      <div className="flex items-center">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}
