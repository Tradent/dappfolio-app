import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function MaintenanceRequestLoading() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <Skeleton className="h-9 w-[150px] mr-4" />
        <Skeleton className="h-8 w-[250px]" />
        <div className="ml-auto flex items-center gap-2">
          <Skeleton className="h-10 w-[100px]" />
          <Skeleton className="h-10 w-[100px]" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <Skeleton className="h-6 w-[300px] mb-2" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Skeleton className="h-6 w-[100px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Skeleton className="h-5 w-[100px] mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4 mt-2" />
              </div>

              <div>
                <Skeleton className="h-5 w-[100px] mb-2" />
                <div className="grid grid-cols-2 gap-2"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-[200px] mb-2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
