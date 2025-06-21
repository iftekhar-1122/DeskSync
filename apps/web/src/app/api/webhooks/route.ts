import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// Add CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, { status: 200, headers: corsHeaders })
}

// Mock webhook data
const mockWebhooks = [
  {
    id: '1',
    name: 'Slack Daily Reports',
    description: 'Send daily reports to Slack channel',
    url: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    isActive: true,
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-15T14:30:00Z',
    lastTriggered: '2024-01-15T09:00:00Z',
    successCount: 145,
    failureCount: 2,
    events: ['daily_report_submitted', 'weekly_summary']
  },
  {
    id: '2',
    name: 'Teams Notifications',
    description: 'Microsoft Teams integration for team updates',
    url: 'https://outlook.office.com/webhook/xxxxx/IncomingWebhook/yyyy',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    isActive: true,
    createdAt: '2024-01-02T11:00:00Z',
    updatedAt: '2024-01-14T16:45:00Z',
    lastTriggered: '2024-01-15T08:45:00Z',
    successCount: 98,
    failureCount: 1,
    events: ['daily_report_submitted', 'user_registered']
  },
  {
    id: '3',
    name: 'Email Notifications',
    description: 'Email alerts for important events',
    url: 'https://api.sendgrid.com/v3/mail/send',
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer SG.xxxxx'
    },
    isActive: false,
    createdAt: '2024-01-03T12:00:00Z',
    updatedAt: '2024-01-10T10:20:00Z',
    lastTriggered: '2024-01-10T07:30:00Z',
    successCount: 67,
    failureCount: 5,
    events: ['daily_report_submitted', 'webhook_failed']
  },
  {
    id: '4',
    name: 'Discord Bot',
    description: 'Discord server notifications',
    url: 'https://discord.com/api/webhooks/123456789/abcdefghijklmnop',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    isActive: true,
    createdAt: '2024-01-04T13:00:00Z',
    updatedAt: '2024-01-12T12:15:00Z',
    lastTriggered: '2024-01-15T09:15:00Z',
    successCount: 89,
    failureCount: 0,
    events: ['daily_report_submitted']
  },
  {
    id: '5',
    name: 'Analytics Webhook',
    description: 'Send data to analytics platform',
    url: 'https://analytics.example.com/webhook/dailysync',
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'X-API-Key': 'analytics-key-123'
    },
    isActive: true,
    createdAt: '2024-01-05T14:00:00Z',
    updatedAt: '2024-01-13T15:30:00Z',
    lastTriggered: '2024-01-15T09:30:00Z',
    successCount: 156,
    failureCount: 3,
    events: ['daily_report_submitted', 'weekly_summary', 'user_registered']
  }
]

export async function GET(request: NextRequest) {
  try {
    // Get session to check authentication
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401, headers: corsHeaders }
      )
    }

    const isAdmin = (session as any)?.user?.role === 'ADMIN'

    // Only admins can access webhook management
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Forbidden - Admin access required' },
        { status: 403, headers: corsHeaders }
      )
    }

    // Get pagination parameters
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''

    // Filter webhooks based on search
    let filteredWebhooks = mockWebhooks
    if (search) {
      filteredWebhooks = mockWebhooks.filter(webhook => 
        webhook.name.toLowerCase().includes(search.toLowerCase()) ||
        webhook.description.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Calculate pagination
    const total = filteredWebhooks.length
    const totalPages = Math.ceil(total / limit)
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedWebhooks = filteredWebhooks.slice(startIndex, endIndex)

    return NextResponse.json({
      success: true,
      data: {
        webhooks: paginatedWebhooks,
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1
        }
      }
    }, { headers: corsHeaders })

  } catch (error) {
    console.error('Webhooks API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get session to check authentication
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401, headers: corsHeaders }
      )
    }

    const isAdmin = (session as any)?.user?.role === 'ADMIN'

    // Only admins can create webhooks
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Forbidden - Admin access required' },
        { status: 403, headers: corsHeaders }
      )
    }

    const body = await request.json()

    // Mock webhook creation
    const newWebhook = {
      id: (mockWebhooks.length + 1).toString(),
      name: body.name,
      description: body.description,
      url: body.url,
      method: body.method || 'POST',
      headers: body.headers || { 'Content-Type': 'application/json' },
      isActive: body.isActive !== false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastTriggered: null,
      successCount: 0,
      failureCount: 0,
      events: body.events || []
    }

    return NextResponse.json({
      success: true,
      data: newWebhook,
      message: 'Webhook created successfully'
    }, { headers: corsHeaders })

  } catch (error) {
    console.error('Webhook creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    )
  }
}
