import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsLoading() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <Skeleton className="h-8 w-48 mb-2" />
        <Skeleton className="h-4 w-72" />
      </div>

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">
            <Skeleton className="h-4 w-16" />
          </TabsTrigger>
          <TabsTrigger value="account">
            <Skeleton className="h-4 w-16" />
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Skeleton className="h-4 w-24" />
          </TabsTrigger>
          <TabsTrigger value="blockchain">
            <Skeleton className="h-4 w-20" />
          </TabsTrigger>
          <TabsTrigger value="integrations">
            <Skeleton className="h-4 w-20" />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6 space-y-6">
          <SettingsCardSkeleton fields={5} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function SettingsCardSkeleton({ fields = 3 }: { fields?: number }) {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-48 mb-2" />
        <Skeleton className="h-4 w-72" />
      </CardHeader>
      <CardContent className="space-y-6">
        {Array(fields)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-32" />
      </CardFooter>
    </Card>
  )
}
