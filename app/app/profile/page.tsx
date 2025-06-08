import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Copy, ExternalLink, Check, Edit, Key, Shield, Wallet } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and wallet connections</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/confident-professional.png" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>Property Investor & Developer</CardDescription>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="bg-blue-50">
                  Verified
                </Badge>
                <Badge variant="outline" className="bg-green-50">
                  Pro Member
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Wallet Address</h3>
                <div className="flex items-center gap-2">
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    8Kvw...3Hua
                  </code>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy wallet address</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View on explorer</span>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Member Since</h3>
                <p>March 2023</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
                <div className="flex items-center gap-2">
                  <p>john.doe@example.com</p>
                  <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
                </div>
              </div>

              <Separator />

              <div className="pt-2">
                <h3 className="text-sm font-medium mb-3">Quick Links</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/settings">
                      <Shield className="mr-2 h-4 w-4" />
                      Security Settings
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/wallet">
                      <Wallet className="mr-2 h-4 w-4" />
                      Manage Wallets
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/settings/api-keys">
                      <Key className="mr-2 h-4 w-4" />
                      API Keys
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="portfolio" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="nfts">NFTs</TabsTrigger>
            </TabsList>
            <TabsContent value="portfolio" className="space-y-4">
              <PortfolioTab />
            </TabsContent>
            <TabsContent value="activity" className="space-y-4">
              <ActivityTab />
            </TabsContent>
            <TabsContent value="nfts" className="space-y-4">
              <NFTsTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function PortfolioTab() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Summary</CardTitle>
          <CardDescription>Overview of your real estate investments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Total Value</p>
              <p className="text-2xl font-bold">$2,450,000</p>
              <p className="text-sm text-green-600">+5.2% this month</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Properties Owned</p>
              <p className="text-2xl font-bold">7</p>
              <p className="text-sm">4 full, 3 fractional</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Monthly Revenue</p>
              <p className="text-2xl font-bold">$12,350</p>
              <p className="text-sm text-green-600">+2.1% this month</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Top Properties</h3>
            <div className="space-y-3">
              {[
                {
                  name: "Urban Glass Facade",
                  type: "Commercial",
                  value: "$850,000",
                  ownership: "100%",
                  image: "/urban-glass-facade.png",
                },
                {
                  name: "Tropical Beachfront Escape",
                  type: "Residential",
                  value: "$1,200,000",
                  ownership: "100%",
                  image: "/tropical-beachfront-escape.png",
                },
                {
                  name: "Modern City Office",
                  type: "Commercial",
                  value: "$400,000",
                  ownership: "25%",
                  image: "/modern-city-office.png",
                },
              ].map((property, index) => (
                <div key={index} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50">
                  <div className="h-12 w-12 rounded-md overflow-hidden">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{property.name}</p>
                    <p className="text-sm text-muted-foreground">{property.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{property.value}</p>
                    <p className="text-sm text-muted-foreground">{property.ownership} ownership</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/properties">View All Properties</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ActivityTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest transactions and actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            {
              type: "Property Purchase",
              description: "Purchased 25% stake in Modern City Office",
              date: "May 15, 2023",
              amount: "$400,000",
              status: "Completed",
              txHash: "0x7a9d...3f21",
            },
            {
              type: "Rent Collection",
              description: "Monthly rent from Urban Glass Facade",
              date: "May 1, 2023",
              amount: "$4,500",
              status: "Completed",
              txHash: "0x3e2f...9c74",
            },
            {
              type: "Token Staking",
              description: "Staked 500 PROP tokens in yield farm",
              date: "April 28, 2023",
              amount: "500 PROP",
              status: "Completed",
              txHash: "0x8b1c...2d45",
            },
            {
              type: "Property Tokenization",
              description: "Tokenized Tropical Beachfront Escape",
              date: "April 15, 2023",
              amount: "1,000 tokens created",
              status: "Completed",
              txHash: "0x5f3a...7e82",
            },
            {
              type: "Governance Vote",
              description: "Voted on property improvement proposal",
              date: "April 10, 2023",
              amount: "-",
              status: "Completed",
              txHash: "0x2c9b...1f36",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-b last:border-0"
            >
              <div>
                <p className="font-medium">{activity.type}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs text-muted-foreground">{activity.date}</p>
                  <p className="text-xs font-mono text-muted-foreground">tx: {activity.txHash}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{activity.amount}</p>
                <Badge variant="outline" className="bg-green-50">
                  <Check className="mr-1 h-3 w-3" />
                  {activity.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button variant="outline" className="w-full">
            View All Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function NFTsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property NFTs</CardTitle>
        <CardDescription>Your tokenized real estate assets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              name: "Urban Glass Facade",
              tokenId: "#1234",
              image: "/urban-glass-facade.png",
              type: "Commercial Property",
              floor: "850 SOL",
            },
            {
              name: "Tropical Beachfront",
              tokenId: "#2345",
              image: "/tropical-beachfront-escape.png",
              type: "Residential Property",
              floor: "1,200 SOL",
            },
            {
              name: "Modern City Office",
              tokenId: "#3456",
              image: "/modern-city-office.png",
              type: "Commercial Property (25%)",
              floor: "400 SOL",
            },
          ].map((nft, index) => (
            <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{nft.name}</p>
                    <p className="text-xs text-muted-foreground">{nft.tokenId}</p>
                  </div>
                  <Badge variant="outline" className="bg-blue-50">
                    NFT
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{nft.type}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm">
                    Floor: <span className="font-medium">{nft.floor}</span>
                  </p>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View on marketplace</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/nft-gallery">View All NFTs</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
