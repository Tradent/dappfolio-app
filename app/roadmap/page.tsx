import { SiteFooter } from "@/components/site-footer"

export default function RoadmapPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Roadmap</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Explore our journey and future plans.</p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Phase 1: Foundation</dt>
              <dd className="mt-2 text-sm text-gray-500">Establish core infrastructure and initial features.</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Phase 2: Expansion</dt>
              <dd className="mt-2 text-sm text-gray-500">Introduce new functionalities and integrations.</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Phase 3: Optimization</dt>
              <dd className="mt-2 text-sm text-gray-500">Enhance performance and user experience.</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Phase 4: Community</dt>
              <dd className="mt-2 text-sm text-gray-500">Foster community growth and engagement.</dd>
            </div>
          </dl>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
