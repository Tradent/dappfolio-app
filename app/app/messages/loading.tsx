import { Skeleton } from "@/components/ui/skeleton"

export default function MessagesLoading() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <Skeleton className="h-8 w-40" />
        <div className="flex items-center space-x-2">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-32" />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar skeleton */}
        <div className="w-1/3 border-r flex flex-col">
          <div className="p-4 border-b">
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="px-4 pt-2">
            <Skeleton className="h-10 w-full mb-4" />
          </div>

          <div className="flex-1 p-2 space-y-3">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="p-3 border-b">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <Skeleton className="h-8 w-8 rounded-full mr-2" />
                      <div>
                        <Skeleton className="h-4 w-24 mb-1" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                    </div>
                    <Skeleton className="h-3 w-10" />
                  </div>
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-3 w-full mb-2" />
                  <div className="flex">
                    <Skeleton className="h-5 w-12 mr-1 rounded-full" />
                    <Skeleton className="h-5 w-16 mr-1 rounded-full" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Right side skeleton */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <div>
              <Skeleton className="h-6 w-64 mb-2" />
              <Skeleton className="h-4 w-40" />
            </div>
            <div className="flex space-x-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>

          <div className="flex-1 p-4 space-y-6">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Skeleton className="h-10 w-10 rounded-full mr-3" />
                      <div>
                        <Skeleton className="h-5 w-32 mb-1" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />

                  {i === 1 && (
                    <div className="mt-4 pt-2 border-t">
                      <Skeleton className="h-4 w-32 mb-2" />
                      <div className="flex items-center p-2 border rounded-md">
                        <Skeleton className="h-8 w-8 mr-2" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-40 mb-1" />
                          <Skeleton className="h-3 w-20" />
                        </div>
                        <Skeleton className="h-8 w-8" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className="border-t p-4">
            <Skeleton className="h-5 w-40 mb-4" />
            <Skeleton className="h-[120px] w-full mb-4" />
            <div className="flex justify-between">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
