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

// Mock webhook data (same as in main route)
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
  }
]

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Only admins can access webhook details
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Forbidden - Admin access required' },
        { status: 403, headers: corsHeaders }
      )
    }

    const webhook = mockWebhooks.find(w => w.id === params.id)

    if (!webhook) {
      return NextResponse.json(
        { success: false, error: 'Webhook not found' },
        { status: 404, headers: corsHeaders }
      )
    }

    return NextResponse.json({
      success: true,
      data: webhook
    }, { headers: corsHeaders })

  } catch (error) {
    console.error('Webhook GET error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Only admins can update webhooks
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Forbidden - Admin access required' },
        { status: 403, headers: corsHeaders }
      )
    }

    const webhook = mockWebhooks.find(w => w.id === params.id)

    if (!webhook) {
      return NextResponse.json(
        { success: false, error: 'Webhook not found' },
        { status: 404, headers: corsHeaders }
      )
    }

    const body = await request.json()

    // Mock webhook update
    const updatedWebhook = {
      ...webhook,
      ...body,
      id: webhook.id, // Preserve ID
      updatedAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: updatedWebhook,
      message: 'Webhook updated successfully'
    }, { headers: corsHeaders })

  } catch (error) {
    console.error('Webhook PUT error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Only admins can delete webhooks
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Forbidden - Admin access required' },
        { status: 403, headers: corsHeaders }
      )
    }

    const webhook = mockWebhooks.find(w => w.id === params.id)

    if (!webhook) {
      return NextResponse.json(
        { success: false, error: 'Webhook not found' },
        { status: 404, headers: corsHeaders }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Webhook deleted successfully'
    }, { headers: corsHeaders })

  } catch (error) {
    console.error('Webhook DELETE error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    )
  }
}
