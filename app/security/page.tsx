import Link from "next/link"
import { Coins, Lock, Shield, ShieldCheck, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"

export default function SecurityPage() {
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
      <section className="bg-gradient-to-b from-babyblue-50 to-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-babyblue-100 rounded-full mb-6">
              <ShieldCheck className="h-8 w-8 text-babyblue-600" />
            </div>
            <h1 className="text-4xl font-bold text-babyblue-900">Security at Dappfolio</h1>
            <p className="mt-4 text-lg text-gray-600">
              We take the security of your data and digital assets seriously. Learn about our comprehensive approach to
              protecting your information and investments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 text-babyblue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-babyblue-800">Data Encryption</h3>
                </div>
                <p className="text-gray-600">
                  All sensitive data is encrypted both in transit and at rest using industry-standard encryption
                  protocols. Your information is protected at every step.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-babyblue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-babyblue-800">Blockchain Security</h3>
                </div>
                <p className="text-gray-600">
                  Our blockchain implementation uses state-of-the-art security measures, including multi-signature
                  wallets and secure smart contracts that undergo rigorous auditing.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-babyblue-900 mb-6">Our Security Practices</h2>

            <div className="space-y-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-babyblue-800 mb-4">Infrastructure Security</h3>
                <p className="text-gray-600 mb-4">
                  Our infrastructure is hosted on secure cloud platforms with multiple layers of protection, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Distributed denial-of-service (DDoS) protection</li>
                  <li>Web application firewalls</li>
                  <li>Intrusion detection and prevention systems</li>
                  <li>Regular security scans and penetration testing</li>
                  <li>24/7 monitoring and alerting</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-babyblue-800 mb-4">Account Security</h3>
                <p className="text-gray-600 mb-4">
                  We implement multiple measures to ensure your account remains secure:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Two-factor authentication (2FA)</li>
                  <li>Strong password requirements</li>
                  <li>Session management and automatic timeouts</li>
                  <li>Login notifications for suspicious activity</li>
                  <li>IP address monitoring and restrictions</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-babyblue-800 mb-4">Smart Contract Security</h3>
                <p className="text-gray-600 mb-4">Our smart contracts undergo a rigorous security process:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Multiple independent security audits</li>
                  <li>Formal verification where applicable</li>
                  <li>Extensive testing in development and testnet environments</li>
                  <li>Bug bounty programs to incentivize responsible disclosure</li>
                  <li>Gradual rollout with monitoring for unexpected behavior</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-babyblue-800 mb-4">Compliance and Certifications</h3>
                <p className="text-gray-600 mb-4">
                  We maintain compliance with relevant security standards and regulations:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>SOC 2 Type II certification</li>
                  <li>GDPR compliance for European users</li>
                  <li>CCPA compliance for California residents</li>
                  <li>Regular independent security assessments</li>
                  <li>Industry best practices for financial technology</li>
                </ul>
              </div>
            </div>

            <div className="bg-babyblue-50 p-6 rounded-lg border border-babyblue-100 mb-16">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-babyblue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-babyblue-800 mb-2">Security Best Practices</h3>
                  <p className="text-gray-600 mb-4">
                    While we implement robust security measures, we recommend users follow these best practices:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Enable two-factor authentication on your account</li>
                    <li>Use a unique, strong password for your Dappfolio account</li>
                    <li>Keep your recovery phrases and private keys secure and offline</li>
                    <li>Be vigilant about phishing attempts and only access Dappfolio through official channels</li>
                    <li>Regularly review your account activity for any unauthorized transactions</li>
                    <li>Keep your devices and software up to date with security patches</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-babyblue-900 mb-6">Reporting Security Issues</h2>
            <p className="text-gray-600 mb-6">
              We appreciate the work of security researchers in improving the security of our platform. If you discover
              a security vulnerability, please report it to us at{" "}
              <a href="mailto:security@dappfolio.com" className="text-babyblue-600 hover:underline">
                security@dappfolio.com
              </a>
              .
            </p>
            <p className="text-gray-600 mb-8">
              We have a responsible disclosure policy and will work with you to address any valid security concerns
              promptly.
            </p>

            <div className="text-center">
              <Button size="lg" className="bg-babyblue-500 hover:bg-babyblue-600 text-white">
                Contact Our Security Team
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
