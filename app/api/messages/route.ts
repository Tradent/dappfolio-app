import { NextResponse } from "next/server"

// Types
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

// Mock data
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
    ],
    lastMessageTime: "2023-04-10T11:45:00Z",
    unreadCount: 0,
    starred: false,
    labels: ["maintenance", "urgent"],
  },
  // Additional conversations would be defined here
]

export async function GET(request: Request) {
  // Get query parameters
  const { searchParams } = new URL(request.url)
  const conversationId = searchParams.get("id")

  if (conversationId) {
    // Return a specific conversation
    const conversation = mockConversations.find((c) => c.id === conversationId)
    if (!conversation) {
      return NextResponse.json({ error: "Conversation not found" }, { status: 404 })
    }
    return NextResponse.json(conversation)
  }

  // Return all conversations
  return NextResponse.json(mockConversations)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.subject || !body.body || !body.recipients || body.recipients.length === 0) {
      return NextResponse.json({ error: "Missing required fields: subject, body, or recipients" }, { status: 400 })
    }

    // In a real app, we would save the message to a database
    // For this mock, we'll just return success
    return NextResponse.json({ success: true, messageId: "new-message-id" })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}
