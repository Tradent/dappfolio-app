import Link from "next/link"
import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"

export default function BlogPage() {
  // Mock blog post data
  const featuredPost = {
    id: "blockchain-real-estate",
    title: "How Blockchain is Revolutionizing Real Estate Ownership",
    excerpt:
      "Explore how blockchain technology is eliminating intermediaries, reducing costs, and creating new investment opportunities in real estate.",
    date: "April 10, 2025",
    author: "Elena Rodriguez",
    authorRole: "CEO & Co-Founder",
    readTime: "8 min read",
    image: "/interconnected-property-ledger.png",
  }

  const recentPosts = [
    {
      id: "tokenization-benefits",
      title: "Real Estate Tokenization: Unlocking Liquidity in Illiquid Assets",
      excerpt:
        "How blockchain-based tokenization is transforming real estate from an illiquid asset class to a liquid, tradable investment.",
      date: "April 5, 2025",
      author: "David Wei",
      category: "Tokenization",
      image: "/real-estate-tokens.png",
    },
    {
      id: "smart-contracts-leases",
      title: "Smart Contracts: Automating Property Management",
      excerpt:
        "How smart contracts are streamlining rent collection, maintenance requests, and tenant screening while reducing administrative overhead.",
      date: "March 28, 2025",
      author: "Marcus Johnson",
      category: "Technology",
      image: "/blockchain-property-transfer.png",
    },
    {
      id: "defi-real-estate",
      title: "DeFi Meets Real Estate: New Financing Models",
      excerpt:
        "Exploring how decentralized finance protocols are creating innovative funding mechanisms for property acquisition and development.",
      date: "March 15, 2025",
      author: "Sophia Chen",
      category: "Finance",
      image: "/decentralized-property-management.png",
    },
  ]

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

      {/* Blog Hero */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Dappfolio <span className="text-blue-600">Insights</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              The latest on blockchain real estate, tokenization, and decentralized property management.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={800}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                  {featuredPost.date} • {featuredPost.readTime}
                </div>
                <Link href={`/blog/${featuredPost.id}`} className="block mt-1">
                  <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition">
                    {featuredPost.title}
                  </h3>
                </Link>
                <p className="mt-4 text-gray-500">{featuredPost.excerpt}</p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/confident-leader.png"
                      alt={featuredPost.author}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                    <p className="text-sm text-gray-500">{featuredPost.authorRole}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href={`/blog/${featuredPost.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                    Read full article →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="flex-shrink-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition">{post.title}</h3>
                  </Link>
                  <p className="mt-3 text-base text-gray-500 flex-1">{post.excerpt}</p>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src="/confident-professional.png"
                        alt={post.author}
                        width={40}
                        height={40}
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/blog/topics/tokenization" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="h-12 w-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600">Tokenization</h3>
                <p className="mt-2 text-sm text-gray-500">12 articles</p>
              </div>
            </Link>
            <Link href="/blog/topics/defi" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="h-12 w-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600">DeFi</h3>
                <p className="mt-2 text-sm text-gray-500">8 articles</p>
              </div>
            </Link>
            <Link href="/blog/topics/smart-contracts" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="h-12 w-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600">Smart Contracts</h3>
                <p className="mt-2 text-sm text-gray-500">15 articles</p>
              </div>
            </Link>
            <Link href="/blog/topics/property-management" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="h-12 w-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600">Property Management</h3>
                <p className="mt-2 text-sm text-gray-500">10 articles</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white">Subscribe to Our Newsletter</h2>
            <p className="mt-4 text-lg text-blue-100">
              Get the latest insights on blockchain real estate and property management delivered to your inbox.
            </p>
            <form className="mt-8 sm:flex justify-center">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-white focus:border-white sm:max-w-xs border-white rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
