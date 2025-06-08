import Link from "next/link"
import { Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPage() {
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

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-babyblue-900 mb-8">Privacy Policy</h1>

            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-gray-600 mb-6">Last Updated: April 14, 2025</p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">Introduction</h2>
              <p className="mb-4">
                At Dappfolio, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our platform, including any
                related mobile applications.
              </p>
              <p className="mb-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access the site or use our services.
              </p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">Information We Collect</h2>
              <p className="mb-4">
                We collect information that you provide directly to us when you register for an account, create or
                modify your profile, set preferences, or make purchases through the platform.
              </p>
              <h3 className="text-xl font-semibold text-babyblue-700 mt-6 mb-3">Personal Information</h3>
              <p className="mb-4">This may include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, and contact information</li>
                <li>Username and password</li>
                <li>Profile information</li>
                <li>Payment information</li>
                <li>Blockchain wallet addresses</li>
                <li>Property information and documentation</li>
              </ul>

              <h3 className="text-xl font-semibold text-babyblue-700 mt-6 mb-3">Usage Information</h3>
              <p className="mb-4">
                We automatically collect certain information about how you interact with our platform, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Log and usage data</li>
                <li>Device information</li>
                <li>Location information</li>
                <li>Cookies and tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing transactions and managing your account</li>
                <li>Sending you technical notices, updates, security alerts, and support messages</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Developing new products and services</li>
                <li>Monitoring and analyzing trends, usage, and activities</li>
                <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
                <li>Personalizing your experience</li>
              </ul>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">Sharing Your Information</h2>
              <p className="mb-4">We may share the information we collect in various ways, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  With vendors, consultants, and other service providers who need access to such information to carry
                  out work on our behalf
                </li>
                <li>
                  In response to a request for information if we believe disclosure is in accordance with, or required
                  by, any applicable law, regulation, or legal process
                </li>
                <li>
                  If we believe your actions are inconsistent with our user agreements or policies, or to protect the
                  rights, property, and safety of Dappfolio or others
                </li>
                <li>
                  In connection with, or during negotiations of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business by another company
                </li>
                <li>
                  Between and among Dappfolio and our current and future parents, affiliates, subsidiaries, and other
                  companies under common control and ownership
                </li>
                <li>With your consent or at your direction</li>
              </ul>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">Data Security</h2>
              <p className="mb-4">
                We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
                access, disclosure, alteration, and destruction. However, no internet or electronic transmission is ever
                fully secure or error-free.
              </p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">Your Rights and Choices</h2>
              <p className="mb-4">
                You have certain rights regarding the personal information we hold about you, subject to local law.
                These may include the rights to access, correct, delete, restrict processing of, and object to
                processing of your personal information.
              </p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">Changes to this Privacy Policy</h2>
              <p className="mb-4">
                We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising
                the date at the top of the policy and, in some cases, we may provide you with additional notice (such as
                adding a statement to our website or sending you a notification).
              </p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mb-4">
                <strong>Email:</strong> privacy@dappfolio.com
                <br />
                <strong>Address:</strong> 123 Blockchain Way, Suite 400, San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
