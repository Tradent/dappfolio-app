import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Our Features Page</h1>
          <p className="text-xl text-gray-600">Explore our amazing features designed to enhance your experience.</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Feature 1</h2>
            <p className="text-gray-600">Description of Feature 1. Explain its benefits and how it can help users.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Feature 2</h2>
            <p className="text-gray-600">Description of Feature 2. Explain its benefits and how it can help users.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Feature 3</h2>
            <p className="text-gray-600">Description of Feature 3. Explain its benefits and how it can help users.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Feature 4</h2>
            <p className="text-gray-600">Description of Feature 4. Explain its benefits and how it can help users.</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Feature 5</h2>
            <p className="text-gray-600">Description of Feature 5. Explain its benefits and how it can help users.</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Feature 6</h2>
            <p className="text-gray-600">Description of Feature 6. Explain its benefits and how it can help users.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
