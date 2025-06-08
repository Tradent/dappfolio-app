"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Bell,
  HelpCircle,
  MessageSquare,
  Search,
  Settings,
  User,
  ChevronDown,
  Check,
  Clock,
  X,
  ExternalLink,
  BookOpen,
  MessageCircle,
  FileText,
  Video,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Separator } from "@/components/ui/separator"

export function AppHeader() {
  const [walletConnected, setWalletConnected] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  // Help resources data
  const helpResources = [
    {
      id: 1,
      title: "Getting Started Guide",
      description: "Learn the basics of Dappfolio",
      icon: BookOpen,
      link: "/help/getting-started",
    },
    {
      id: 2,
      title: "Property Tokenization",
      description: "How to tokenize your real estate assets",
      icon: FileText,
      link: "/help/tokenization",
    },
    {
      id: 3,
      title: "Wallet Integration",
      description: "Connect and manage your crypto wallets",
      icon: User,
      link: "/help/wallet",
    },
    {
      id: 4,
      title: "Video Tutorials",
      description: "Step-by-step visual guides",
      icon: Video,
      link: "/help/tutorials",
    },
  ]

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "How do I add a new property?",
      answer: "Go to Properties > Add Property and fill out the form.",
    },
    {
      id: 2,
      question: "How do I tokenize my property?",
      answer: "Select a property and click 'Tokenize' in the property details page.",
    },
    {
      id: 3,
      question: "How do I connect my wallet?",
      answer: "Click 'Connect Wallet' in the top right corner and follow the prompts.",
    },
  ]

  // Initial notifications data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Rent Payment Received",
      description: "John Doe paid $1,200 for Unit 101",
      time: "Just now",
      unread: true,
    },
    {
      id: 2,
      title: "Maintenance Request",
      description: "New request for Unit 205: Leaking faucet",
      time: "10 minutes ago",
      unread: true,
    },
    {
      id: 3,
      title: "Lease Expiring Soon",
      description: "Unit 304 lease expires in 30 days",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 4,
      title: "Property Tokenized",
      description: "123 Main St has been successfully tokenized",
      time: "3 hours ago",
      unread: true,
    },
    {
      id: 5,
      title: "New Message",
      description: "Sarah Johnson sent you a message",
      time: "Yesterday",
      unread: true,
    },
    {
      id: 6,
      title: "System Update",
      description: "Dappfolio was updated to version 2.1.0",
      time: "2 days ago",
      unread: false,
    },
    {
      id: 7,
      title: "New Tenant Application",
      description: "New application for 456 Oak Ave",
      time: "3 days ago",
      unread: false,
    },
  ])

  // Add messages data
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: {
        name: "Alex Johnson",
        avatar: "/colorful-abstract-shapes.png",
        fallback: "AJ",
      },
      subject: "Maintenance Request - Unit 101",
      preview: "Yes, I'll be available during that time. Thank you for the quick response!",
      time: "10 min ago",
      unread: true,
      conversationId: "1",
    },
    {
      id: 2,
      sender: {
        name: "Morgan Smith",
        avatar: "/colorful-abstract-shapes.png",
        fallback: "MS",
      },
      subject: "Rent Payment Confirmation",
      preview:
        "Thank you for the confirmation. I have a question about the utility charges included in this month's payment.",
      time: "1 hour ago",
      unread: true,
      conversationId: "2",
    },
    {
      id: 3,
      sender: {
        name: "Taylor Brown",
        avatar: "/abstract-geometric-shapes.png",
        fallback: "TB",
      },
      subject: "Plumbing Service Quote",
      preview: "Hello Casey, As requested, I'm sending over the quote for the plumbing work at the Oakwood Apartments.",
      time: "3 hours ago",
      unread: true,
      conversationId: "4",
    },
  ])

  // Calculate unread notifications count
  const unreadCount = notifications.filter((notification) => notification.unread).length

  // Calculate unread messages count
  const unreadMessagesCount = messages.filter((message) => message.unread).length

  // Function to mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        unread: false,
      })),
    )
    toast({
      title: "All notifications marked as read",
      description: `${unreadCount} notifications have been marked as read.`,
    })
  }

  // Function to mark all messages as read
  const markAllMessagesAsRead = () => {
    setMessages(
      messages.map((message) => ({
        ...message,
        unread: false,
      })),
    )
    toast({
      title: "All messages marked as read",
      description: `${unreadMessagesCount} messages have been marked as read.`,
    })
  }

  // Function to dismiss a single notification
  const dismissNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
    toast({
      title: "Notification dismissed",
      description: "The notification has been removed.",
    })
  }

  // Function to toggle read status of a single notification
  const toggleReadStatus = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, unread: !notification.unread } : notification,
      ),
    )
  }

  // Function to mark a message as read
  const markMessageAsRead = (id: number) => {
    setMessages(messages.map((message) => (message.id === id ? { ...message, unread: false } : message)))
  }

  // Function to handle contact support
  const handleContactSupport = () => {
    toast({
      title: "Support request sent",
      description: "A support representative will contact you shortly.",
    })
  }

  return (
    <header className="app-header flex h-16 items-center justify-between px-6 bg-white">
      <div className="flex items-center">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-babyblue-400" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 border-babyblue-200 focus-visible:ring-babyblue-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="text-babyblue-600">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="p-4 bg-babyblue-50">
              <h4 className="font-medium text-lg mb-1">Help Center</h4>
              <p className="text-sm text-gray-600">Find answers and resources to help you use Dappfolio</p>
            </div>

            <div className="p-4">
              <h5 className="font-medium text-sm mb-3">Resources</h5>
              <div className="space-y-3">
                {helpResources.map((resource) => (
                  <Link
                    key={resource.id}
                    href={resource.link}
                    className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <div className="mt-0.5 bg-babyblue-100 p-1.5 rounded-md text-babyblue-600">
                      <resource.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{resource.title}</p>
                      <p className="text-xs text-gray-500">{resource.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Separator />

            <div className="p-4">
              <h5 className="font-medium text-sm mb-3">Frequently Asked Questions</h5>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.id} className="text-sm">
                    <p className="font-medium">{faq.question}</p>
                    <p className="text-gray-600 text-xs mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t p-4">
              <Button variant="outline" size="sm" className="w-full justify-center mb-2" onClick={handleContactSupport}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-center" asChild>
                <Link href="/help">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Full Documentation
                </Link>
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="text-babyblue-600 relative">
              <MessageSquare className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-babyblue-500 text-white">
                {unreadMessagesCount}
              </Badge>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="flex items-center justify-between border-b p-3">
              <h4 className="font-medium">Messages</h4>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs"
                  onClick={markAllMessagesAsRead}
                  disabled={unreadMessagesCount === 0}
                >
                  <Check className="mr-1 h-3 w-3" />
                  Mark all as read
                </Button>
              </div>
            </div>
            <ScrollArea className="h-[300px]">
              <div className="flex flex-col gap-0.5">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 p-3 hover:bg-gray-50 ${message.unread ? "bg-blue-50" : ""} cursor-pointer`}
                    onClick={() => {
                      markMessageAsRead(message.id)
                      router.push(`/messages?conversation=${message.conversationId}`)
                    }}
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={message.sender.avatar || "/placeholder.svg"} alt={message.sender.name} />
                      <AvatarFallback>{message.sender.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-medium">{message.sender.name}</p>
                          <p className="text-sm font-medium text-gray-700">{message.subject}</p>
                          <p className="text-xs text-gray-500 line-clamp-1">{message.preview}</p>
                        </div>
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{message.time}</span>
                      </div>
                    </div>
                    {message.unread && <div className="mt-1 h-2 w-2 rounded-full bg-babyblue-500" />}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="border-t p-3">
              <Button variant="outline" size="sm" className="w-full justify-center" asChild>
                <Link href="/messages">View all messages</Link>
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="text-babyblue-600 relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-babyblue-500 text-white">
                {unreadCount}
              </Badge>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="flex items-center justify-between border-b p-3">
              <h4 className="font-medium">Notifications</h4>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs"
                  onClick={markAllAsRead}
                  disabled={unreadCount === 0}
                >
                  <Check className="mr-1 h-3 w-3" />
                  Mark all as read
                </Button>
              </div>
            </div>
            <ScrollArea className="h-[300px]">
              <div className="flex flex-col gap-0.5">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-4 p-3 hover:bg-gray-50 ${notification.unread ? "bg-blue-50" : ""}`}
                    onClick={() => toggleReadStatus(notification.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className={`mt-1 h-2 w-2 rounded-full ${
                        notification.unread ? "bg-babyblue-500" : "bg-transparent"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-medium">{notification.title}</p>
                          <p className="text-sm text-gray-500">{notification.description}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-gray-500"
                          onClick={(e) => {
                            e.stopPropagation()
                            dismissNotification(notification.id)
                          }}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Dismiss</span>
                        </Button>
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{notification.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="border-t p-3">
              <Button variant="outline" size="sm" className="w-full justify-center" asChild>
                <a href="/notifications">View all notifications</a>
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {!walletConnected ? (
          <Button onClick={() => setWalletConnected(true)} className="bg-babyblue-500 hover:bg-babyblue-600 text-white">
            Connect Wallet
          </Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-babyblue-500 flex items-center justify-center text-white">
                  <User className="h-4 w-4" />
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium">John Doe</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/app/profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/app/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Wallet: 8Kvw...3Hua</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  )
}
