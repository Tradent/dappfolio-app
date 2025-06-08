import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-babyblue-600">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-babyblue-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-600 hover:text-babyblue-600">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/documentation" className="text-gray-600 hover:text-babyblue-600">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-600 hover:text-babyblue-600">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/api-reference" className="text-gray-600 hover:text-babyblue-600">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-babyblue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-babyblue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-babyblue-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-babyblue-600">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-babyblue-600">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-600 hover:text-babyblue-600">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Dappfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
