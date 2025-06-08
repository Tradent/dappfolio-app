import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-[180px]" />
        <Skeleton className="h-10 w-10 rounded-md" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-10 w-[300px]" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="p-4 pb-2">
                  <Skeleton className="h-5 w-[120px]" />
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Skeleton className="h-4 w-[80px]" />
                  <Skeleton className="h-8 w-[100px]" />
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>

      <Skeleton className="h-px w-full" />

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Skeleton className="h-10 flex-1" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-[180px]" />
            <Skeleton className="h-10 w-[120px]" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between">
                    <Skeleton className="h-5 w-[150px]" />
                    <Skeleton className="h-5 w-[60px]" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[120px]" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Skeleton className="h-4 w-[80px]" />
                  <Skeleton className="h-8 w-[100px]" />
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>

      <Skeleton className="h-px w-full" />

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Skeleton className="h-10 flex-1" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-[180px]" />
            <Skeleton className="h-10 w-[120px]" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between">
                    <Skeleton className="h-5 w-[150px]" />
                    <Skeleton className="h-5 w-[60px]" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[120px]" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Skeleton className="h-4 w-[80px]" />
                  <Skeleton className="h-8 w-[100px]" />
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
