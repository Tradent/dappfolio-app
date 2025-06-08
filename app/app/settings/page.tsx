import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, MessageSquare, Shield, Wallet } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6 space-y-6">
          <ProfileSettings />
        </TabsContent>

        <TabsContent value="account" className="mt-6 space-y-6">
          <AccountSettings />
        </TabsContent>

        <TabsContent value="notifications" className="mt-6 space-y-6">
          <NotificationSettings />
        </TabsContent>

        <TabsContent value="blockchain" className="mt-6 space-y-6">
          <BlockchainSettings />
        </TabsContent>

        <TabsContent value="integrations" className="mt-6 space-y-6">
          <IntegrationsSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProfileSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>Update your personal information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" defaultValue="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company (Optional)</Label>
            <Input id="company" defaultValue="Acme Properties" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              defaultValue="Property investor and manager with 10+ years of experience in residential and commercial real estate."
              rows={4}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Profile</Button>
      </CardFooter>
    </Card>
  )
}

function AccountSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Preferences</CardTitle>
          <CardDescription>Manage your account settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select defaultValue="en">
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="zh">Chinese</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select defaultValue="america-new_york">
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="america-new_york">Eastern Time (ET)</SelectItem>
                <SelectItem value="america-chicago">Central Time (CT)</SelectItem>
                <SelectItem value="america-denver">Mountain Time (MT)</SelectItem>
                <SelectItem value="america-los_angeles">Pacific Time (PT)</SelectItem>
                <SelectItem value="etc-utc">UTC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currency">Currency Display</Label>
            <Select defaultValue="usd">
              <SelectTrigger id="currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD ($)</SelectItem>
                <SelectItem value="eur">EUR (€)</SelectItem>
                <SelectItem value="gbp">GBP (£)</SelectItem>
                <SelectItem value="jpy">JPY (¥)</SelectItem>
                <SelectItem value="sol">SOL</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <p className="text-sm text-muted-foreground">Toggle between light and dark theme</p>
            </div>
            <Switch id="dark-mode" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Update your password</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Update Password</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
          <CardDescription>Irreversible account actions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border border-destructive/20 p-4">
            <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <div>
                <h3 className="font-medium text-destructive">Delete Account</h3>
                <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data</p>
              </div>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Choose how and when you want to be notified</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Email Notifications</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-property-updates">Property Updates</Label>
                <p className="text-sm text-muted-foreground">Receive updates about your properties</p>
              </div>
              <Switch id="email-property-updates" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-token-transactions">Token Transactions</Label>
                <p className="text-sm text-muted-foreground">Receive notifications about token transactions</p>
              </div>
              <Switch id="email-token-transactions" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-security-alerts">Security Alerts</Label>
                <p className="text-sm text-muted-foreground">Receive notifications about security events</p>
              </div>
              <Switch id="email-security-alerts" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-marketing">Marketing & Promotions</Label>
                <p className="text-sm text-muted-foreground">Receive marketing and promotional emails</p>
              </div>
              <Switch id="email-marketing" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Push Notifications</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-property-updates">Property Updates</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications about your properties</p>
              </div>
              <Switch id="push-property-updates" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-token-transactions">Token Transactions</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications about token transactions</p>
              </div>
              <Switch id="push-token-transactions" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-security-alerts">Security Alerts</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications about security events</p>
              </div>
              <Switch id="push-security-alerts" defaultChecked />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Notification Frequency</h3>
          <div className="space-y-2">
            <Label htmlFor="notification-frequency">Summary Email Frequency</Label>
            <Select defaultValue="weekly">
              <SelectTrigger id="notification-frequency">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="never">Never</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Notification Settings</Button>
      </CardFooter>
    </Card>
  )
}

function BlockchainSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Wallet Settings</CardTitle>
          <CardDescription>Manage your blockchain wallet connections</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-md border p-4">
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <div>
                <h3 className="font-medium">Connected Wallet</h3>
                <p className="text-sm font-mono">8Kvw...3Hua</p>
                <p className="text-sm text-muted-foreground">Connected 3 days ago</p>
              </div>
              <Button variant="outline">Disconnect</Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="default-network">Default Network</Label>
            <Select defaultValue="mainnet">
              <SelectTrigger id="default-network">
                <SelectValue placeholder="Select network" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mainnet">Solana Mainnet</SelectItem>
                <SelectItem value="testnet">Solana Testnet</SelectItem>
                <SelectItem value="devnet">Solana Devnet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-connect">Auto-connect Wallet</Label>
              <p className="text-sm text-muted-foreground">Automatically connect your wallet when you log in</p>
            </div>
            <Switch id="auto-connect" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="transaction-signing">Transaction Signing Confirmation</Label>
              <p className="text-sm text-muted-foreground">Always ask for confirmation before signing transactions</p>
            </div>
            <Switch id="transaction-signing" defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Wallet Settings</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>View and export your blockchain transaction history</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">Token Purchase</p>
                <p className="text-sm text-muted-foreground">Jul 25, 2023</p>
              </div>
              <div className="text-right">
                <p className="font-medium">30 tokens</p>
                <p className="text-sm font-mono">tx: 4jHG...k9Pq</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">Property Tokenization</p>
                <p className="text-sm text-muted-foreground">Jul 12, 2023</p>
              </div>
              <div className="text-right">
                <p className="font-medium">1000 tokens created</p>
                <p className="text-sm font-mono">tx: 7mNP...r3Ts</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">NFT Purchase</p>
                <p className="text-sm text-muted-foreground">Jun 30, 2023</p>
              </div>
              <div className="text-right">
                <p className="font-medium">1 NFT</p>
                <p className="text-sm font-mono">tx: 2pQR...s7Jw</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Export Transaction History</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Blockchain Settings</CardTitle>
          <CardDescription>Configure advanced blockchain settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="gas-price">Gas Price Strategy</Label>
            <Select defaultValue="standard">
              <SelectTrigger id="gas-price">
                <SelectValue placeholder="Select strategy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low Priority</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="advanced-mode">Advanced Mode</Label>
              <p className="text-sm text-muted-foreground">Enable advanced blockchain features and settings</p>
            </div>
            <Switch id="advanced-mode" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Advanced Settings</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function IntegrationsSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Third-Party Integrations</CardTitle>
        <CardDescription>Connect your account with other services</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Property Management</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Zillow</p>
                  <p className="text-sm text-muted-foreground">Sync property listings</p>
                </div>
              </div>
              <Switch id="zillow-integration" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Apartments.com</p>
                  <p className="text-sm text-muted-foreground">Sync property listings</p>
                </div>
              </div>
              <Switch id="apartments-integration" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Financial Services</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">QuickBooks</p>
                  <p className="text-sm text-muted-foreground">Sync financial data</p>
                </div>
              </div>
              <Switch id="quickbooks-integration" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Xero</p>
                  <p className="text-sm text-muted-foreground">Sync financial data</p>
                </div>
              </div>
              <Switch id="xero-integration" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Communication</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Slack</p>
                  <p className="text-sm text-muted-foreground">Team communication</p>
                </div>
              </div>
              <Switch id="slack-integration" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Gmail</p>
                  <p className="text-sm text-muted-foreground">Email integration</p>
                </div>
              </div>
              <Switch id="gmail-integration" defaultChecked />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Blockchain</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Solana Explorer</p>
                  <p className="text-sm text-muted-foreground">Transaction verification</p>
                </div>
              </div>
              <Switch id="solana-explorer-integration" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Etherscan</p>
                  <p className="text-sm text-muted-foreground">Transaction verification</p>
                </div>
              </div>
              <Switch id="etherscan-integration" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Integration Settings</Button>
      </CardFooter>
    </Card>
  )
}
