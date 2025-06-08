import { Skeleton } from "@/components/ui/skeleton"

export default function MaintenanceDetailLoading() {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Skeleton className="h-6 w-40 mb-4" />
            <div className="space-y-4">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-5 w-48" />
                  </div>
                ))}
            </div>
          </div>

          <div>
            <Skeleton className="h-6 w-40 mb-4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-3/4 mt-2" />

            <div className="mt-6">
              <Skeleton className="h-6 w-40 mb-4" />
              <div className="grid grid-cols-2 gap-2">
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <Skeleton key={i} className="aspect-square rounded-md" />
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="space-y-4">
            {Array(3)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="border-l-2 border-gray-200 pl-4 py-2">
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-5 w-48 mb-1" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  )
}
