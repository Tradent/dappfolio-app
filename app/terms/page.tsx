import Link from "next/link"
import { Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"

export default function TermsPage() {
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
            <h1 className="text-3xl font-bold text-babyblue-900 mb-8">Terms of Service</h1>

            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-gray-600 mb-6">Last Updated: April 14, 2025</p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using Dappfolio's website, mobile applications, or any other services provided by
                Dappfolio (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If
                you do not agree to these Terms, you may not access or use the Services.
              </p>
              <p className="mb-4">
                We may modify these Terms at any time. If we do so, we will notify you by posting the modified Terms on
                the Site or through other communications. It is important that you review the Terms whenever we modify
                them because your continued use of the Services after we have posted modified Terms constitutes your
                agreement to the modified Terms.
              </p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">2. Eligibility</h2>
              <p className="mb-4">
                You must be at least 18 years of age to access or use our Services. By accessing or using our Services,
                you represent and warrant that you are 18 years of age or older and have the legal capacity to enter
                into these Terms.
              </p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">3. Account Registration</h2>
              <p className="mb-4">
                To access certain features of the Services, you may be required to register for an account. When you
                register, you agree to provide accurate, current, and complete information about yourself and to update
                such information as necessary to keep it accurate, current, and complete.
              </p>
              <p className="mb-4">
                You are responsible for safeguarding your account credentials and for all activities that occur under
                your account. You agree to notify us immediately of any unauthorized use of your account or any other
                breach of security. We cannot and will not be liable for any loss or damage arising from your failure to
                comply with the above requirements.
              </p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">4. Services and Content</h2>
              <p className="mb-4">
                Our Services allow you to manage real estate properties, tokenize assets, and participate in a
                marketplace for tokenized real estate. The Services may include features such as property management
                tools, blockchain integration, and financial reporting.
              </p>
              <p className="mb-4">
                You are solely responsible for all data, information, and other content that you upload, post, or
                otherwise provide or store in connection with or through the Services ("Your Content"). You represent
                and warrant that you have all rights necessary to upload, post, or otherwise provide Your Content
                without violation of any law or these Terms.
              </p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">5. Blockchain Transactions</h2>
              <p className="mb-4">
                Certain features of our Services involve blockchain transactions. You acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Blockchain transactions are irreversible and cannot be canceled once initiated</li>
                <li>You are solely responsible for maintaining the security of your wallet and private keys</li>
                <li>
                  We are not responsible for any loss of digital assets due to wallet compromise, user error, or
                  blockchain network issues
                </li>
                <li>Blockchain transactions may be subject to network fees that are outside of our control</li>
                <li>The regulatory status of blockchain assets is uncertain and may change over time</li>
              </ul>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">6. Fees and Payment</h2>
              <p className="mb-4">
                Certain aspects of the Services may be provided for a fee. You agree to pay all fees associated with the
                Services you use. We may change our fee structure at any time by posting the changes on the Site or
                through other communications.
              </p>
              <p className="mb-4">
                All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you shall be
                responsible for payment of all such taxes, levies, or duties.
              </p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">7. Intellectual Property Rights</h2>
              <p className="mb-4">
                The Services and all content and materials included on the Services, including, but not limited to,
                text, graphics, logos, button icons, images, audio clips, data compilations, and software, and the
                compilation thereof (collectively, the "Content") are the property of Dappfolio or its licensors and are
                protected by copyright, trademark, and other laws.
              </p>
              <p className="mb-4">
                We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the
                Services and Content for your personal or internal business purposes. This license does not include the
                right to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modify or copy the Content</li>
                <li>Use the Content for any commercial purpose</li>
                <li>Transfer the Content to another person</li>
                <li>Reverse engineer, decompile, or disassemble the Services</li>
                <li>Remove any copyright or other proprietary notations from the Content</li>
              </ul>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL DAPPFOLIO, ITS AFFILIATES, OR THEIR RESPECTIVE
                OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL,
                OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES</li>
                <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES</li>
                <li>ANY CONTENT OBTAINED FROM THE SERVICES</li>
                <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
              </ul>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">9. Governing Law</h2>
              <p className="mb-4">
                These Terms and your access to and use of the Services shall be governed by and construed and enforced
                in accordance with the laws of the State of California, without regard to conflict of law rules or
                principles that would cause the application of the laws of any other jurisdiction.
              </p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">10. Dispute Resolution</h2>
              <p className="mb-4">
                Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by
                arbitration in San Francisco, California, using the English language in accordance with the Arbitration
                Rules and Procedures of JAMS then in effect, by one commercial arbitrator with substantial experience in
                resolving intellectual property and commercial contract disputes.
              </p>

              <h2 className="text-2xl font-semibold text-babyblue-800 mt-8 mb-4">11. Contact Information</h2>
              <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
              <p className="mb-4">
                <strong>Email:</strong> legal@dappfolio.com
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
