import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WalletLoading() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-64" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-32 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-16 mt-2" />
              </CardContent>
              <CardFooter className="p-2">
                <div className="grid w-full grid-cols-2 gap-2">
                  <Skeleton className="h-9 w-full" />
                  <Skeleton className="h-9 w-full" />
                </div>
              </CardFooter>
            </Card>
          ))}
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview" disabled>
              Overview
            </TabsTrigger>
            <TabsTrigger value="assets" disabled>
              Assets
            </TabsTrigger>
            <TabsTrigger value="transactions" disabled>
              Transactions
            </TabsTrigger>
            <TabsTrigger value="payments" disabled>
              Payment Methods
            </TabsTrigger>
            <TabsTrigger value="security" disabled>
              Security
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-6 pt-4">
          <div className="grid gap-6 md:grid-cols-2">
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-48" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Array(4)
                        .fill(0)
                        .map((_, j) => (
                          <div key={j} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Skeleton className="h-9 w-9 rounded-full" />
                              <div>
                                <Skeleton className="h-5 w-24" />
                                <Skeleton className="h-4 w-16 mt-1" />
                              </div>
                            </div>
                            <div className="text-right">
                              <Skeleton className="h-5 w-16" />
                              <Skeleton className="h-4 w-12 mt-1" />
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-9 w-full" />
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
