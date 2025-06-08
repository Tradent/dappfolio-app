import { Skeleton } from "@/components/ui/skeleton"

export default function MaintenanceLoading() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-10 w-32" />
      </div>

      <div className="grid gap-6">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-6 w-24" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="flex justify-between items-center mt-4">
                <Skeleton className="h-6 w-32" />
                <div className="flex space-x-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
