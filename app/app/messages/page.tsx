"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import {
  Archive,
  Clock,
  Download,
  Filter,
  MailPlus,
  MessageSquare,
  MoreHorizontal,
  PaperclipIcon,
  Search,
  Send,
  Star,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

// Types for our messages system
type Contact = {
  id: string
  name: string
  email: string
  type: "tenant" | "owner" | "vendor" | "staff"
  avatar?: string
}

type Attachment = {
  id: string
  filename: string
  size: string
  type: string
}

type Message = {
  id: string
  subject: string
  body: string
  sender: Contact
  recipients: Contact[]
  timestamp: string
  read: boolean
  starred: boolean
  attachments: Attachment[]
  labels: string[]
  folder: "inbox" | "sent" | "drafts" | "archived" | "trash"
}

type Conversation = {
  id: string
  subject: string
  participants: Contact[]
  messages: Message[]
  lastMessageTime: string
  unreadCount: number
  starred: boolean
  labels: string[]
}

// Mock data for our messages system
const mockContacts: Contact[] = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    type: "tenant",
    avatar: "/colorful-abstract-shapes.png",
  },
  {
    id: "2",
    name: "Morgan Smith",
    email: "morgan.smith@example.com",
    type: "tenant",
    avatar: "/colorful-abstract-shapes.png",
  },
  {
    id: "3",
    name: "Jamie Williams",
    email: "jamie.williams@example.com",
    type: "owner",
    avatar: "/abstract-geometric-shapes.png",
  },
  {
    id: "4",
    name: "Taylor Brown",
    email: "taylor.brown@example.com",
    type: "vendor",
    avatar: "/abstract-geometric-shapes.png",
  },
  {
    id: "5",
    name: "Casey Davis",
    email: "casey.davis@example.com",
    type: "staff",
    avatar: "/abstract-geometric-shapes.png",
  },
]

const mockConversations: Conversation[] = [
  {
    id: "1",
    subject: "Maintenance Request - Unit 101",
    participants: [mockContacts[0], mockContacts[4]],
    messages: [
      {
        id: "1-1",
        subject: "Maintenance Request - Unit 101",
        body: "Hello, I'd like to report a leaking faucet in the kitchen. It's been dripping steadily for the past two days. Could someone come take a look at it? Thanks!",
        sender: mockContacts[0],
        recipients: [mockContacts[4]],
        timestamp: "2023-04-10T09:30:00Z",
        read: true,
        starred: false,
        attachments: [
          {
            id: "a1",
            filename: "faucet_leak.jpg",
            size: "1.2 MB",
            type: "image/jpeg",
          },
        ],
        labels: ["maintenance", "urgent"],
        folder: "inbox",
      },
      {
        id: "1-2",
        subject: "Re: Maintenance Request - Unit 101",
        body: "Hi Alex, Thanks for reporting this issue. I've scheduled a maintenance visit for tomorrow between 10 AM and 12 PM. Will you be available during that time?",
        sender: mockContacts[4],
        recipients: [mockContacts[0]],
        timestamp: "2023-04-10T11:45:00Z",
        read: true,
        starred: false,
        attachments: [],
        labels: ["maintenance"],
        folder: "sent",
      },
      {
        id: "1-3",
        subject: "Re: Maintenance Request - Unit 101",
        body: "Yes, I'll be available during that time. Thank you for the quick response!",
        sender: mockContacts[0],
        recipients: [mockContacts[4]],
        timestamp: "2023-04-10T13:20:00Z",
        read: false,
        starred: false,
        attachments: [],
        labels: ["maintenance"],
        folder: "inbox",
      },
    ],
    lastMessageTime: "2023-04-10T13:20:00Z",
    unreadCount: 1,
    starred: false,
    labels: ["maintenance", "urgent"],
  },
  {
    id: "2",
    subject: "Rent Payment Confirmation",
    participants: [mockContacts[1], mockContacts[4]],
    messages: [
      {
        id: "2-1",
        subject: "Rent Payment Confirmation",
        body: "This is to confirm that your rent payment of $1,500 for May 2023 has been received and processed. Thank you for your prompt payment.",
        sender: mockContacts[4],
        recipients: [mockContacts[1]],
        timestamp: "2023-04-28T15:00:00Z",
        read: true,
        starred: true,
        attachments: [
          {
            id: "a2",
            filename: "receipt_may2023.pdf",
            size: "245 KB",
            type: "application/pdf",
          },
        ],
        labels: ["payment", "receipt"],
        folder: "sent",
      },
      {
        id: "2-2",
        subject: "Re: Rent Payment Confirmation",
        body: "Thank you for the confirmation. I have a question about the utility charges included in this month's payment. Could you provide a breakdown?",
        sender: mockContacts[1],
        recipients: [mockContacts[4]],
        timestamp: "2023-04-28T16:30:00Z",
        read: false,
        starred: false,
        attachments: [],
        labels: ["payment", "inquiry"],
        folder: "inbox",
      },
    ],
    lastMessageTime: "2023-04-28T16:30:00Z",
    unreadCount: 1,
    starred: true,
    labels: ["payment", "receipt", "inquiry"],
  },
  {
    id: "3",
    subject: "Property Inspection Notice",
    participants: [mockContacts[4], mockContacts[0], mockContacts[1]],
    messages: [
      {
        id: "3-1",
        subject: "Property Inspection Notice",
        body: "Dear Tenants, This is to inform you that we will be conducting our annual property inspection on May 15, 2023, between 1 PM and 4 PM. Please ensure that your unit is accessible during this time. If you cannot be present, please let us know in advance.",
        sender: mockContacts[4],
        recipients: [mockContacts[0], mockContacts[1]],
        timestamp: "2023-05-01T10:00:00Z",
        read: true,
        starred: false,
        attachments: [],
        labels: ["inspection", "notice"],
        folder: "sent",
      },
    ],
    lastMessageTime: "2023-05-01T10:00:00Z",
    unreadCount: 0,
    starred: false,
    labels: ["inspection", "notice"],
  },
  {
    id: "4",
    subject: "Plumbing Service Quote",
    participants: [mockContacts[3], mockContacts[4]],
    messages: [
      {
        id: "4-1",
        subject: "Plumbing Service Quote",
        body: "Hello Casey, As requested, I'm sending over the quote for the plumbing work at the Oakwood Apartments. The total comes to $2,850, which includes parts and labor for replacing the main water line. Let me know if you need any clarification or would like to proceed with the work.",
        sender: mockContacts[3],
        recipients: [mockContacts[4]],
        timestamp: "2023-05-02T14:15:00Z",
        read: false,
        starred: false,
        attachments: [
          {
            id: "a3",
            filename: "plumbing_quote_oakwood.pdf",
            size: "1.5 MB",
            type: "application/pdf",
          },
          {
            id: "a4",
            filename: "service_details.docx",
            size: "780 KB",
            type: "application/msword",
          },
        ],
        labels: ["vendor", "quote"],
        folder: "inbox",
      },
    ],
    lastMessageTime: "2023-05-02T14:15:00Z",
    unreadCount: 1,
    starred: false,
    labels: ["vendor", "quote"],
  },
  {
    id: "5",
    subject: "Monthly Financial Report",
    participants: [mockContacts[4], mockContacts[2]],
    messages: [
      {
        id: "5-1",
        subject: "Monthly Financial Report",
        body: "Dear Jamie, Attached is the monthly financial report for your properties for April 2023. The occupancy rate remains at 95%, and all maintenance issues have been addressed promptly. Please review the attached documents and let me know if you have any questions.",
        sender: mockContacts[4],
        recipients: [mockContacts[2]],
        timestamp: "2023-05-03T09:00:00Z",
        read: true,
        starred: true,
        attachments: [
          {
            id: "a5",
            filename: "financial_report_apr2023.xlsx",
            size: "2.3 MB",
            type: "application/vnd.ms-excel",
          },
          {
            id: "a6",
            filename: "maintenance_summary.pdf",
            size: "1.1 MB",
            type: "application/pdf",
          },
        ],
        labels: ["report", "financial"],
        folder: "sent",
      },
      {
        id: "5-2",
        subject: "Re: Monthly Financial Report",
        body: "Thank you for the report. I noticed the utility expenses are higher than usual. Is there a specific reason for this increase?",
        sender: mockContacts[2],
        recipients: [mockContacts[4]],
        timestamp: "2023-05-03T11:30:00Z",
        read: false,
        starred: true,
        attachments: [],
        labels: ["report", "financial", "inquiry"],
        folder: "inbox",
      },
    ],
    lastMessageTime: "2023-05-03T11:30:00Z",
    unreadCount: 1,
    starred: true,
    labels: ["report", "financial", "inquiry"],
  },
]

// Message templates for quick responses
const messageTemplates = [
  {
    id: "t1",
    name: "Maintenance Confirmation",
    subject: "Maintenance Request Confirmation",
    body: "Dear [Tenant Name],\n\nThis is to confirm that we have received your maintenance request and have scheduled a service visit for [Date] between [Time Range].\n\nPlease ensure that someone is available to provide access to the property during this time.\n\nThank you,\n[Your Name]\nProperty Manager",
  },
  {
    id: "t2",
    name: "Late Rent Notice",
    subject: "Late Rent Payment Notice",
    body: "Dear [Tenant Name],\n\nThis is a friendly reminder that your rent payment for [Month] is now past due. According to our records, the amount due is [Amount].\n\nPlease make your payment as soon as possible to avoid additional late fees.\n\nIf you have already made the payment, please disregard this notice.\n\nThank you,\n[Your Name]\nProperty Manager",
  },
  {
    id: "t3",
    name: "Inspection Notice",
    subject: "Property Inspection Notice",
    body: "Dear [Tenant Name],\n\nThis is to inform you that we will be conducting a routine property inspection on [Date] between [Time Range].\n\nPlease ensure that your unit is accessible during this time. If you cannot be present, please let us know in advance.\n\nThank you for your cooperation.\n\nBest regards,\n[Your Name]\nProperty Manager",
  },
]

export default function MessagesPage() {
  const searchParams = useSearchParams()
  const conversationId = searchParams.get("conversation")

  const [activeTab, setActiveTab] = useState("inbox")
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations)
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [replyText, setReplyText] = useState("")
  const [showTemplates, setShowTemplates] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<(typeof messageTemplates)[0] | null>(null)

  // Filter conversations based on active tab and search query
  const filteredConversations = conversations.filter((conversation) => {
    // Filter by folder/tab
    const folderMatch = activeTab === "all" || conversation.messages.some((m) => m.folder === activeTab)

    // Filter by search query
    const searchMatch =
      searchQuery === "" ||
      conversation.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.participants.some((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      conversation.messages.some((m) => m.body.toLowerCase().includes(searchQuery.toLowerCase()))

    return folderMatch && searchMatch
  })

  // Load conversation when URL parameter changes
  useEffect(() => {
    if (conversationId) {
      const conversation = conversations.find((c) => c.id === conversationId)
      if (conversation) {
        setSelectedConversation(conversation)

        // Mark messages as read
        setConversations((prevConversations) =>
          prevConversations.map((c) => {
            if (c.id === conversationId) {
              return {
                ...c,
                unreadCount: 0,
                messages: c.messages.map((m) => ({ ...m, read: true })),
              }
            }
            return c
          }),
        )
      }
    }
  }, [conversationId, conversations])

  // Handle sending a reply
  const handleSendReply = () => {
    if (!selectedConversation || !replyText.trim()) return

    const newMessage: Message = {
      id: `${selectedConversation.id}-${selectedConversation.messages.length + 1}`,
      subject: `Re: ${selectedConversation.subject}`,
      body: replyText,
      sender: mockContacts[4], // Current user (staff)
      recipients: selectedConversation.participants.filter((p) => p.id !== mockContacts[4].id),
      timestamp: new Date().toISOString(),
      read: true,
      starred: false,
      attachments: [],
      labels: selectedConversation.labels,
      folder: "sent",
    }

    // Update conversation with new message
    setConversations((prevConversations) =>
      prevConversations.map((c) => {
        if (c.id === selectedConversation.id) {
          return {
            ...c,
            messages: [...c.messages, newMessage],
            lastMessageTime: newMessage.timestamp,
          }
        }
        return c
      }),
    )

    // Update selected conversation
    setSelectedConversation((prev) => {
      if (!prev) return null
      return {
        ...prev,
        messages: [...prev.messages, newMessage],
        lastMessageTime: newMessage.timestamp,
      }
    })

    // Clear reply text
    setReplyText("")
  }

  // Apply template to reply
  const applyTemplate = (template: (typeof messageTemplates)[0]) => {
    setReplyText(template.body)
    setSelectedTemplate(template)
    setShowTemplates(false)
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()

    // If today, show time
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    // If this year, show month and day
    if (date.getFullYear() === now.getFullYear()) {
      return date.toLocaleDateString([], { month: "short", day: "numeric" })
    }

    // Otherwise show full date
    return date.toLocaleDateString([], { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <MessageSquare className="h-5 w-5 mr-2 text-babyblue-600" />
          <h1 className="text-2xl font-bold text-babyblue-900">Messages</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="default" size="sm">
            <MailPlus className="h-4 w-4 mr-2" />
            New Message
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar - Message list */}
        <div className="w-1/3 border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="inbox" className="flex-1 flex flex-col" onValueChange={setActiveTab}>
            <div className="px-4 pt-2">
              <TabsList className="w-full">
                <TabsTrigger value="inbox" className="flex-1">
                  Inbox
                  <Badge variant="secondary" className="ml-2">
                    {conversations.reduce((count, conv) => count + conv.unreadCount, 0)}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="sent" className="flex-1">
                  Sent
                </TabsTrigger>
                <TabsTrigger value="starred" className="flex-1">
                  Starred
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="inbox" className="flex-1 overflow-hidden mt-0 pt-0">
              <ScrollArea className="h-full">
                {filteredConversations
                  .filter((conv) => conv.messages.some((m) => m.folder === "inbox"))
                  .sort((a, b) => new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime())
                  .map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-3 border-b cursor-pointer hover:bg-babyblue-50 ${
                        selectedConversation?.id === conversation.id ? "bg-babyblue-100" : ""
                      } ${conversation.unreadCount > 0 ? "font-medium" : ""}`}
                      onClick={() => setSelectedConversation(conversation)}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={conversation.participants[0].avatar || "/placeholder.svg"} />
                            <AvatarFallback>{conversation.participants[0].name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">
                              {conversation.participants
                                .filter((p) => p.id !== mockContacts[4].id)
                                .map((p) => p.name)
                                .join(", ")}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {conversation.participants.length > 2
                                ? `+${conversation.participants.length - 2} others`
                                : ""}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">{formatDate(conversation.lastMessageTime)}</div>
                      </div>
                      <div className="text-sm font-medium">{conversation.subject}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {conversation.messages[conversation.messages.length - 1].body.substring(0, 100)}...
                      </div>
                      <div className="flex mt-1">
                        {conversation.unreadCount > 0 && (
                          <Badge variant="default" className="mr-1 bg-babyblue-500">
                            {conversation.unreadCount} new
                          </Badge>
                        )}
                        {conversation.labels.map((label) => (
                          <Badge key={label} variant="outline" className="mr-1">
                            {label}
                          </Badge>
                        ))}
                        {conversation.messages[conversation.messages.length - 1].attachments.length > 0 && (
                          <Badge variant="outline" className="mr-1">
                            <PaperclipIcon className="h-3 w-3 mr-1" />
                            {conversation.messages[conversation.messages.length - 1].attachments.length}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
              </ScrollArea>
            </TabsContent>

            <TabsContent value="sent" className="flex-1 overflow-hidden mt-0 pt-0">
              <ScrollArea className="h-full">
                {filteredConversations
                  .filter((conv) => conv.messages.some((m) => m.folder === "sent"))
                  .sort((a, b) => new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime())
                  .map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-3 border-b cursor-pointer hover:bg-babyblue-50 ${
                        selectedConversation?.id === conversation.id ? "bg-babyblue-100" : ""
                      }`}
                      onClick={() => setSelectedConversation(conversation)}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={conversation.participants[0].avatar || "/placeholder.svg"} />
                            <AvatarFallback>{conversation.participants[0].name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">
                              {conversation.participants
                                .filter((p) => p.id !== mockContacts[4].id)
                                .map((p) => p.name)
                                .join(", ")}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">{formatDate(conversation.lastMessageTime)}</div>
                      </div>
                      <div className="text-sm font-medium">{conversation.subject}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {conversation.messages[conversation.messages.length - 1].body.substring(0, 100)}...
                      </div>
                    </div>
                  ))}
              </ScrollArea>
            </TabsContent>

            <TabsContent value="starred" className="flex-1 overflow-hidden mt-0 pt-0">
              <ScrollArea className="h-full">
                {filteredConversations
                  .filter((conv) => conv.starred)
                  .sort((a, b) => new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime())
                  .map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-3 border-b cursor-pointer hover:bg-babyblue-50 ${
                        selectedConversation?.id === conversation.id ? "bg-babyblue-100" : ""
                      }`}
                      onClick={() => setSelectedConversation(conversation)}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={conversation.participants[0].avatar || "/placeholder.svg"} />
                            <AvatarFallback>{conversation.participants[0].name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">
                              {conversation.participants
                                .filter((p) => p.id !== mockContacts[4].id)
                                .map((p) => p.name)
                                .join(", ")}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">{formatDate(conversation.lastMessageTime)}</div>
                      </div>
                      <div className="text-sm font-medium">{conversation.subject}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {conversation.messages[conversation.messages.length - 1].body.substring(0, 100)}...
                      </div>
                    </div>
                  ))}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right side - Message content */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Message header */}
              <div className="p-4 border-b flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{selectedConversation.subject}</h2>
                  <div className="text-sm text-muted-foreground">
                    {selectedConversation.participants.length} participants • {selectedConversation.messages.length}{" "}
                    messages
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Star
                      className={`h-4 w-4 ${selectedConversation.starred ? "fill-yellow-400 text-yellow-400" : ""}`}
                    />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Archive className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                      <DropdownMenuItem>Add label</DropdownMenuItem>
                      <DropdownMenuItem>Print conversation</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete conversation
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Message thread */}
              <ScrollArea className="flex-1">
                <div className="p-4 space-y-6">
                  {selectedConversation.messages.map((message) => (
                    <Card
                      key={message.id}
                      className={`border ${message.sender.id === mockContacts[4].id ? "bg-babyblue-50" : ""}`}
                    >
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src={message.sender.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{message.sender.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {formatDate(message.timestamp)} • {message.sender.type}
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            {message.starred && <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Forward</DropdownMenuItem>
                                <DropdownMenuItem>Print</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete message
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="whitespace-pre-wrap">{message.body}</div>
                        {message.attachments.length > 0 && (
                          <div className="mt-4">
                            <h4 className="text-sm font-medium mb-2">Attachments</h4>
                            <div className="space-y-2">
                              {message.attachments.map((attachment) => (
                                <div
                                  key={attachment.id}
                                  className="flex items-center p-2 border rounded-md bg-muted/30"
                                >
                                  <PaperclipIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                                  <div className="flex-1">
                                    <div className="text-sm font-medium">{attachment.filename}</div>
                                    <div className="text-xs text-muted-foreground">{attachment.size}</div>
                                  </div>
                                  <Button variant="ghost" size="icon">
                                    <Download className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>

              {/* Reply area */}
              <div className="border-t p-4">
                <div className="mb-2 flex justify-between items-center">
                  <div className="text-sm font-medium">Reply to conversation</div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => setShowTemplates(!showTemplates)}>
                      <Clock className="h-4 w-4 mr-2" />
                      Templates
                    </Button>
                  </div>
                </div>

                {showTemplates && (
                  <Card className="mb-4">
                    <CardHeader className="p-3 pb-1">
                      <CardTitle className="text-sm">Message Templates</CardTitle>
                      <CardDescription className="text-xs">Select a template to quickly respond</CardDescription>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <div className="space-y-2">
                        {messageTemplates.map((template) => (
                          <div
                            key={template.id}
                            className="p-2 border rounded-md cursor-pointer hover:bg-muted"
                            onClick={() => applyTemplate(template)}
                          >
                            <div className="font-medium text-sm">{template.name}</div>
                            <div className="text-xs text-muted-foreground truncate">
                              {template.body.substring(0, 60)}...
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Textarea
                  placeholder="Type your reply here..."
                  className="min-h-[120px] mb-2"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <PaperclipIcon className="h-4 w-4 mr-2" />
                      Attach
                    </Button>
                  </div>
                  <Button onClick={handleSendReply} disabled={!replyText.trim()}>
                    <Send className="h-4 w-4 mr-2" />
                    Send Reply
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold mb-2">No conversation selected</h2>
              <p className="text-muted-foreground mb-4">Select a conversation from the list to view its messages</p>
              <Button>
                <MailPlus className="h-4 w-4 mr-2" />
                Create New Message
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
