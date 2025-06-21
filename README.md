# DailySync - Webhook Management Platform

<div align="center">

![DailySync Logo](https://img.shields.io/badge/DailySync-Webhook%20Management-blue?style=for-the-badge)

**A comprehensive SaaS platform for webhook management, daily reporting, and team automation**

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-blue?style=flat-square&logo=postgresql)](https://www.postgresql.org/)

</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
- [Technology Stack](#technology-stack)
- [Monorepo Architecture](#monorepo-architecture)
- [Local Development Setup](#local-development-setup)
- [API Documentation](#api-documentation)
- [Webhook System Guide](#webhook-system-guide)
- [Database Schema](#database-schema)
- [Deployment & Production](#deployment--production)
- [Environment Variables Reference](#environment-variables-reference)
- [Monitoring & Troubleshooting](#monitoring--troubleshooting)
- [Testing & Quality Assurance](#testing--quality-assurance)
- [Development Workflow](#development-workflow)
- [Security & Best Practices](#security--best-practices)

## 🎯 Overview

DailySync is a production-ready SaaS webhook management platform designed for support teams, DevOps engineers, and customer success teams. It provides comprehensive webhook orchestration, real-time delivery monitoring, and seamless integrations with popular communication platforms like Slack and Microsoft Teams.

### 🎯 Target Users
- **Support Teams**: Automate daily reporting and meeting notifications
- **DevOps Engineers**: Monitor webhook deliveries and system health
- **Customer Success Teams**: Track meeting outcomes and client interactions
- **Team Leads**: Analyze team performance and productivity metrics

### 💼 Key Value Propositions
- **Centralized Webhook Management**: Create, configure, and monitor webhooks from a single dashboard
- **Real-time Delivery Tracking**: Monitor webhook delivery success rates and response times
- **Template-based Messaging**: Customize message formats for different platforms and use cases
- **Meeting Automation**: Automatically create meetings and send notifications to configured channels
- **Analytics & Reporting**: Comprehensive dashboards for team performance and webhook health
- **Enterprise Security**: Role-based access control, session management, and audit logging

## ✨ Core Features

### 🔗 Webhook Management
- **Dynamic Webhook Creation**: Create webhooks with custom endpoints and configurations
- **Real-time Delivery Monitoring**: Track delivery status, response times, and error rates
- **Multi-endpoint Support**: Route single webhook payloads to multiple destinations
- **Retry Logic**: Configurable retry attempts with exponential backoff
- **Template Processing**: Transform payloads using Handlebars templates

### 🚀 Platform Integrations
- **Slack Integration**: Native Slack webhook support with rich message formatting
- **Microsoft Teams**: Teams webhook integration with adaptive cards
- **Google Sheets**: Direct data export to spreadsheets (OAuth-based)
- **Custom APIs**: Support for any HTTP endpoint with custom headers and authentication

### 📊 Reporting & Analytics
- **Daily Report Workflows**: Structured daily reporting with automatic notifications
- **Meeting Automation**: Create meetings with automatic Slack/Teams notifications
- **Performance Analytics**: Team productivity metrics and trend analysis
- **Webhook Analytics**: Delivery success rates, response times, and error tracking

### 🛡️ Enterprise Features
- **Role-based Access Control**: Admin and Support Agent roles with granular permissions
- **Session Management**: Persistent authentication with NextAuth.js
- **Audit Logging**: Comprehensive logging of all webhook activities
- **Health Monitoring**: Real-time system health checks and alerts

### 🔧 Recent Improvements
- ✅ **Authentication Persistence**: Fixed session management for direct URL access
- ✅ **Webhook URL Display**: Resolved undefined URL display issues in dashboard
- ✅ **Real HTTP Delivery**: Replaced simulation with actual HTTP requests to external endpoints
- ✅ **Logs Monitoring**: Complete webhook delivery logs with real-time updates
- ✅ **Slack Integration**: Verified end-to-end Slack message delivery

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript 5.0+
- **Styling**: TailwindCSS with shadcn/ui components
- **Authentication**: NextAuth.js with session management
- **State Management**: React Query for server state, React Hook Form for forms
- **UI Components**: shadcn/ui, Lucide React icons, Recharts for analytics

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL 15+ with Prisma ORM
- **Queue System**: Redis 7+ with BullMQ for background jobs
- **Authentication**: JWT tokens with NextAuth integration
- **Validation**: Zod schemas for request/response validation

### Infrastructure
- **Package Manager**: pnpm with workspace support
- **Development**: Hot reload, TypeScript compilation, ESLint + Prettier
- **Database Migrations**: Prisma migrate with seeding
- **Environment Management**: dotenv with environment-specific configurations
- **API Documentation**: RESTful endpoints with comprehensive error handling

### Development Tools
- **Monorepo**: Turborepo for build orchestration
- **Code Quality**: ESLint, Prettier, TypeScript strict mode
- **Testing**: Jest, React Testing Library, Supertest for API testing
- **Debugging**: VS Code integration, source maps, detailed logging

## 🏗️ Monorepo Architecture

```
dailysync/
├── apps/
│   ├── web/                          # Next.js Frontend Application
│   │   ├── src/
│   │   │   ├── app/                  # App Router pages
│   │   │   │   ├── dashboard/        # Protected dashboard routes
│   │   │   │   │   ├── webhooks/     # Webhook management pages
│   │   │   │   │   │   ├── [id]/     # Dynamic webhook routes
│   │   │   │   │   │   │   ├── logs/ # Webhook logs page
│   │   │   │   │   │   │   └── endpoints/ # Endpoint management
│   │   │   │   │   │   └── templates/ # Message templates
│   │   │   │   │   ├── analytics/    # Analytics dashboard
│   │   │   │   │   └── reports/      # Reporting interface
│   │   │   │   └── login/            # Authentication pages
│   │   │   ├── components/           # Reusable React components
│   │   │   │   ├── ui/               # shadcn/ui components
│   │   │   │   ├── webhooks/         # Webhook-specific components
│   │   │   │   ├── dashboard/        # Dashboard components
│   │   │   │   └── forms/            # Form components
│   │   │   ├── lib/                  # Utility libraries
│   │   │   │   ├── api.ts            # API client configuration
│   │   │   │   ├── auth.ts           # NextAuth configuration
│   │   │   │   └── utils.ts          # Helper functions
│   │   │   └── middleware.ts         # Next.js middleware for auth
│   │   ├── .env.local                # Environment variables
│   │   └── package.json              # Frontend dependencies
│   │
│   └── api/                          # Express.js Backend Application
│       ├── src/
│       │   ├── index-simple.ts       # Main API server (simplified structure)
│       │   └── (additional files for future modularization)
│       └── package.json              # Backend dependencies
│
│   # Note: The API currently uses a simplified single-file structure
│   # in index-simple.ts for rapid development. The modular structure
│   # shown above represents the planned architecture for production scaling.
│
├── packages/
│   ├── config/                       # Shared configuration
│   │   ├── src/
│   │   │   ├── constants.ts          # Application constants
│   │   │   ├── env.ts                # Environment validation
│   │   │   └── index.ts              # Package exports
│   │   └── package.json
│   │
│   ├── database/                     # Prisma database package
│   │   ├── prisma/
│   │   │   ├── schema.prisma         # Database schema
│   │   │   ├── migrations/           # Database migrations
│   │   │   └── seed.ts               # Database seeding
│   │   ├── src/
│   │   │   ├── client.ts             # Prisma client
│   │   │   └── schemas.ts            # Zod validation schemas
│   │   └── package.json
│   │
│   └── ui/                           # Shared UI components (placeholder for future expansion)
│       └── (empty directory)
│
├── pnpm-workspace.yaml               # pnpm workspace configuration
├── turbo.json                        # Turborepo configuration
├── package.json                      # Root package.json
└── README.md                         # This file
```

### Package Purposes

- **`apps/web`**: Next.js frontend with dashboard, authentication, and webhook management UI
- **`apps/api`**: Express.js backend with RESTful API, webhook processing, and integrations
- **`packages/config`**: Shared configuration constants, environment validation, and types (placeholder)
- **`packages/database`**: Prisma schema, migrations, and database utilities (placeholder)
- **`packages/ui`**: Shared UI components and design system (placeholder for future expansion)

**Note**: The packages directory structure is prepared for future modularization. Currently, most shared code is located within the individual apps.

## 🚀 Local Development Setup

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: Version 18.0.0 or higher
- **pnpm**: Version 8.0.0 or higher (`npm install -g pnpm`)

**Optional for Production:**
- **PostgreSQL**: Version 15.0 or higher (for production database)
- **Redis**: Version 7.0 or higher (for production queue processing)

**Note**: The current development setup uses mock data and doesn't require PostgreSQL or Redis.

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd dailysync
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Configuration**

   Create environment files for both frontend and backend:

   **Frontend Environment** (`apps/web/.env.local`):
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here-change-in-production
   API_BASE_URL=http://localhost:3001
   ```

   **Root Environment** (`.env`):
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/dailysync"

   # NextAuth.js
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"

   # JWT
   JWT_SECRET="your-jwt-secret-here"

   # Redis
   REDIS_URL="redis://localhost:6379"

   # Slack Integration
   SLACK_BOT_TOKEN="xoxb-your-slack-bot-token"
   SLACK_SIGNING_SECRET="your-slack-signing-secret"

   # API Configuration
   API_PORT=3001
   API_BASE_URL="http://localhost:3001"

   # Rate Limiting
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100

   # Logging
   LOG_LEVEL="info"

   # Environment
   NODE_ENV="development"
   ```

4. **Database Setup (Optional for Development)**

   **Note**: The current development setup uses mock data and doesn't require PostgreSQL or Redis. For production deployment, you'll need to set up these services.

   For future production setup:
   ```bash
   # Create database
   createdb dailysync

   # Run migrations
   cd packages/database
   npx prisma migrate dev

   # Seed the database
   npx prisma db seed
   ```

5. **Redis Setup (Optional for Development)**

   **Note**: Redis is not required for the current development setup but will be needed for production queue processing.

   For future production setup:
   ```bash
   # On macOS with Homebrew
   brew services start redis

   # On Ubuntu/Debian
   sudo systemctl start redis-server

   # On Windows (with Redis for Windows)
   redis-server
   ```

6. **Start Development Services**

   Open two terminal windows and run:

   **Terminal 1 - API Server**:
   ```bash
   cd apps/api
   pnpm exec tsx src/index-simple.ts
   # Server starts on http://localhost:3001
   ```

   **Terminal 2 - Frontend**:
   ```bash
   cd apps/web
   pnpm dev
   # Frontend starts on http://localhost:3000
   ```

   **Alternative PowerShell Commands (Windows)**:
   ```powershell
   # API Server
   cd "apps/api"
   & "C:\Users\Pial\AppData\Roaming\npm\pnpm.cmd" exec tsx src/index-simple.ts

   # Frontend
   cd "apps/web"
   & "C:\Users\Pial\AppData\Roaming\npm\pnpm.cmd" dev
   ```

### Development Workflow Commands

```bash
# Install dependencies for all packages
pnpm install

# Build all packages
pnpm build

# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Run tests
pnpm test

# Clean build artifacts
pnpm clean

# Database operations (from root directory)
pnpm db:generate           # Generate Prisma client
pnpm db:migrate            # Run database migrations
pnpm db:studio             # Open Prisma Studio

# Individual package database operations
cd packages/database
npx prisma studio          # Open Prisma Studio
npx prisma migrate dev     # Create and apply new migration
npx prisma db seed         # Seed database with sample data
```

### Verification

After setup, verify everything is working:

1. **Frontend**: Visit `http://localhost:3000` - should show login page
2. **API Health**: Visit `http://localhost:3001/health` - should return JSON health status
3. **API Endpoints**: Run `node test-api-endpoints.js` to test all endpoints
4. **Webhook Delivery**: Run `node test-slack-delivery.js` to test real Slack integration

### Default Login Credentials

For development, use these default credentials:

- **Admin User**:
  - Email: `admin@dailysync.com`
  - Password: `admin123456`

- **Support Agent**:
  - Email: `john.doe@dailysync.com`
  - Password: `agent123456`

## 📡 API Documentation

### Base Configuration

- **Development Base URL**: `http://localhost:3001`
- **Production Base URL**: `https://your-domain.com/api`
- **Authentication**: NextAuth.js with JWT tokens
- **Content Type**: `application/json`
- **Rate Limiting**: 100 requests per minute per IP

### Authentication Flow

```javascript
// Login request
POST /api/auth/login
{
  "email": "admin@dailysync.com",
  "password": "admin123456"
}

// Response
{
  "success": true,
  "data": {
    "user": {
      "id": "1",
      "email": "admin@dailysync.com",
      "name": "Admin User",
      "role": "ADMIN"
    },
    "token": "mock_token_1_1703123456789"
  },
  "message": "Login successful"
}
```

### Core Webhook Endpoints

#### Create Webhook
```http
POST /api/webhooks
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Slack Notifications",
  "description": "Send notifications to Slack",
  "type": "GENERIC",
  "secret": "optional-webhook-secret"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "webhook_123",
    "name": "Slack Notifications",
    "description": "Send notifications to Slack",
    "url": "/api/webhooks/webhook_123/receive",
    "secret": "generated-secret-key",
    "status": "ACTIVE",
    "type": "GENERIC",
    "createdAt": "2025-06-20T18:30:00.000Z",
    "createdBy": "1"
  },
  "message": "Webhook created successfully"
}
```

#### Receive Webhook Payload
```http
POST /api/webhooks/:id/receive
Content-Type: application/json

{
  "type": "daily_report",
  "userName": "John Doe",
  "ticketsResolved": 8,
  "chatsHandled": 15,
  "emailsProcessed": 22,
  "callsAttended": 5,
  "githubIssues": 3,
  "notes": "Completed major client integration"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "received": true,
    "processedAt": "2025-06-20T18:54:45.019Z",
    "webhookType": "GENERIC",
    "deliveryResults": [
      {
        "endpointId": "1",
        "endpointName": "Slack Channel",
        "success": true,
        "statusCode": 200,
        "message": "Delivered successfully",
        "duration": 1851,
        "templateUsed": "Slack Daily Report Template"
      }
    ],
    "totalEndpoints": 1,
    "successfulDeliveries": 1
  },
  "message": "Webhook payload processed successfully"
}
```

#### Get Webhook Logs
```http
GET /api/webhooks/:id/logs?page=1&limit=20
Authorization: Bearer <token>
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "log_123",
      "payload": {
        "type": "daily_report",
        "userName": "John Doe",
        "ticketsResolved": 8
      },
      "headers": {
        "user-agent": "DailySync/1.0",
        "content-type": "application/json"
      },
      "userAgent": "DailySync/1.0",
      "ipAddress": "192.168.1.100",
      "receivedAt": "2025-06-20T18:54:45.019Z",
      "deliveryLogs": [
        {
          "id": "delivery_456",
          "status": "SUCCESS",
          "responseStatus": 200,
          "responseBody": "ok",
          "deliveredAt": "2025-06-20T18:54:47.870Z",
          "attemptNumber": 1,
          "outgoingEndpoint": {
            "id": "1",
            "name": "Slack Channel",
            "url": "https://hooks.slack.com/services/..."
          }
        }
      ]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 156,
    "totalPages": 8,
    "hasNext": true,
    "hasPrev": false
  }
}
```

### Reporting Endpoints

#### Submit Daily Report
```http
POST /api/reports/daily
Authorization: Bearer <token>
Content-Type: application/json

{
  "date": "2025-06-20",
  "ticketsResolved": 8,
  "chatsHandled": 15,
  "emailsProcessed": 22,
  "callsAttended": 5,
  "githubIssues": 3,
  "notes": "Completed major client integration",
  "mood": "GOOD"
}
```

#### Create Meeting Report
```http
POST /api/reports/meeting
Authorization: Bearer <token>
Content-Type: application/json

{
  "hostId": "john_ext_002",
  "meetingTitle": "Client Onboarding Session",
  "startTime": "2025-06-20T14:00:00.000Z",
  "endTime": "2025-06-20T15:00:00.000Z",
  "duration": 60,
  "clientName": "Acme Corporation",
  "outcome": "SUCCESSFUL",
  "notes": "Successfully onboarded new client",
  "attendees": ["client@acme.com", "john.doe@dailysync.com"],
  "actionItems": ["Send follow-up documentation", "Schedule training session"]
}
```

### Analytics Endpoints

#### Get Dashboard Analytics
```http
GET /api/analytics/dashboard
Authorization: Bearer <token>
```

#### Get Webhook Analytics
```http
GET /api/analytics/webhook-analytics?startDate=2025-06-01&endDate=2025-06-20
Authorization: Bearer <token>
```

### Health Check Endpoints

```http
GET /health
# Public health check

GET /api/health
# Basic API health check

GET /api/health/detailed
# Detailed API health with database/Redis status
```

## 🔗 Webhook System Guide

### Creating Webhooks

1. **Access Webhook Dashboard**
   - Navigate to `http://localhost:3000/dashboard/webhooks`
   - Click "Create Webhook" button

2. **Configure Webhook Settings**
   ```typescript
   interface WebhookConfig {
     name: string;           // "Slack Notifications"
     description?: string;   // "Send daily reports to Slack"
     type: "GENERIC" | "MEETING";
     secret?: string;        // Optional webhook secret
   }
   ```

3. **Generated Webhook URL**
   - Format: `http://localhost:3001/api/webhooks/{id}/receive`
   - Example: `http://localhost:3001/api/webhooks/1/receive`

### Configuring Endpoints

After creating a webhook, configure where payloads should be delivered:

1. **Navigate to Endpoints**
   - Go to webhook detail page
   - Click "Manage Endpoints"

2. **Add Slack Endpoint**
   ```json
   {
     "name": "Slack Channel",
     "url": "https://hooks.slack.com/services/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",
     "method": "POST",
     "headers": {
       "Content-Type": "application/json"
     },
     "isActive": true,
     "retryAttempts": 3,
     "retryDelayMs": 1000,
     "timeoutMs": 30000
   }
   ```

3. **Add Teams Endpoint**
   ```json
   {
     "name": "Teams Channel",
     "url": "https://outlook.office.com/webhook/...",
     "method": "POST",
     "headers": {
       "Content-Type": "application/json"
     },
     "isActive": true,
     "retryAttempts": 3,
     "retryDelayMs": 1000,
     "timeoutMs": 30000
   }
   ```

### Message Templates

Templates use Handlebars syntax to transform webhook payloads:

#### Slack Daily Report Template
```handlebars
🎯 Daily Report from {{userName}}
📊 Tickets: {{ticketsResolved}}
💬 Chats: {{chatsHandled}}
📧 Emails: {{emailsProcessed}}
📞 Calls: {{callsAttended}}
🐛 GitHub Issues: {{githubIssues}}
📝 Notes: {{notes}}
```

#### Meeting Notification Template
```handlebars
🚀 *New Meeting Created: {{meetingTitle}}*
🕑 {{startTimeFormatted}}
👤 Client: {{clientName}}
📝 {{notes}}
🔗 Meeting ID: {{meetingId}}
```

#### Teams Card Template
```handlebars
{
  "@type": "MessageCard",
  "@context": "http://schema.org/extensions",
  "themeColor": "0076D7",
  "summary": "{{userName}} Daily Report",
  "sections": [{
    "activityTitle": "Daily Report",
    "activitySubtitle": "{{userName}}",
    "text": "Tickets: {{ticketsResolved}} | Chats: {{chatsHandled}} | Emails: {{emailsProcessed}}"
  }]
}
```

### End-to-End Example

1. **Send Webhook Payload**
   ```bash
   curl -X POST http://localhost:3001/api/webhooks/1/receive \
     -H "Content-Type: application/json" \
     -d '{
       "type": "daily_report",
       "userName": "John Doe",
       "ticketsResolved": 8,
       "chatsHandled": 15,
       "emailsProcessed": 22,
       "callsAttended": 5,
       "githubIssues": 3,
       "notes": "Completed major client integration"
     }'
   ```

2. **Template Processing**
   - Original payload is processed through the template
   - Variables like `{{userName}}` are replaced with actual values
   - Result: "🎯 Daily Report from John Doe\n📊 Tickets: 8\n💬 Chats: 15..."

3. **Slack Message Delivery**
   ```json
   {
     "text": "🎯 Daily Report from John Doe\n📊 Tickets: 8\n💬 Chats: 15\n📧 Emails: 22\n📞 Calls: 5\n🐛 GitHub Issues: 3\n📝 Notes: Completed major client integration",
     "username": "DailySync Bot",
     "icon_emoji": ":robot_face:"
   }
   ```

4. **Delivery Confirmation**
   - HTTP 200 response from Slack
   - Delivery logged in database
   - Visible in webhook logs at `/dashboard/webhooks/1/logs`

### Real Slack Webhook Setup

1. **Create Slack App**
   - Go to https://api.slack.com/apps
   - Create new app for your workspace

2. **Enable Incoming Webhooks**
   - Navigate to "Incoming Webhooks"
   - Activate incoming webhooks
   - Add new webhook to workspace

3. **Get Webhook URL**
   - Format: `https://hooks.slack.com/services/T{TEAM_ID}/B{CHANNEL_ID}/{SECRET}`
   - Example: `https://hooks.slack.com/services/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`

4. **Test Webhook**
   ```bash
   curl -X POST https://hooks.slack.com/services/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 \
     -H "Content-Type: application/json" \
     -d '{"text": "Hello from DailySync!"}'
   ```

## 🗄️ Database Schema

### Core Models

#### User
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  password  String   // Hashed password
  role      UserRole @default(SUPPORT_AGENT)
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relations
  incomingWebhooks IncomingWebhook[]
  dailyReports     DailyReport[]
  meetingReports   MeetingReport[]

  @@map("users")
}
```

#### IncomingWebhook
```prisma
model IncomingWebhook {
  id          String   @id @default(cuid())
  name        String
  description String?
  url         String   @unique
  secret      String?
  status      WebhookStatus @default(ACTIVE)
  type        WebhookType   @default(GENERIC)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  createdBy   String

  // Relations
  creator           User              @relation(fields: [createdBy], references: [id])
  outgoingEndpoints OutgoingEndpoint[]
  payloadLogs       PayloadLog[]

  @@map("incoming_webhooks")
}
```

#### OutgoingEndpoint
```prisma
model OutgoingEndpoint {
  id               String   @id @default(cuid())
  name             String
  url              String
  method           String   @default("POST")
  headers          Json?    // JSON object for custom headers
  isActive         Boolean  @default(true)
  retryAttempts    Int      @default(3)
  retryDelayMs     Int      @default(1000)
  timeoutMs        Int      @default(30000)
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
  incomingWebhookId String

  // Relations
  incomingWebhook IncomingWebhook @relation(fields: [incomingWebhookId], references: [id], onDelete: Cascade)
  deliveryLogs    DeliveryLog[]
  messageTemplate MessageTemplate?

  @@map("outgoing_endpoints")
}
```

#### PayloadLog
```prisma
model PayloadLog {
  id                String   @id @default(cuid())
  payload           Json
  headers           Json?
  userAgent         String?
  ipAddress         String?
  receivedAt        DateTime @default(now())
  incomingWebhookId String

  // Relations
  incomingWebhook   IncomingWebhook @relation(fields: [incomingWebhookId], references: [id], onDelete: Cascade)
  deliveryLogs      DeliveryLog[]

  @@map("payload_logs")
}
```

#### DeliveryLog
```prisma
model DeliveryLog {
  id                  String        @id @default(cuid())
  status              DeliveryStatus @default(PENDING)
  transformedPayload  Json?
  responseStatus      Int?
  responseBody        String?
  deliveredAt         DateTime?
  attemptNumber       Int           @default(1)
  createdAt           DateTime      @default(now())
  updatedAt           DateTime      @updatedAt
  payloadLogId        String
  outgoingEndpointId  String

  // Relations
  payloadLog        PayloadLog       @relation(fields: [payloadLogId], references: [id], onDelete: Cascade)
  outgoingEndpoint  OutgoingEndpoint @relation(fields: [outgoingEndpointId], references: [id], onDelete: Cascade)

  @@map("delivery_logs")
}
```

#### MessageTemplate
```prisma
model MessageTemplate {
  id                String   @id @default(cuid())
  name              String
  template          String   // Template string with placeholders
  description       String?
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  outgoingEndpointId String  @unique

  // Relations
  outgoingEndpoint OutgoingEndpoint @relation(fields: [outgoingEndpointId], references: [id], onDelete: Cascade)

  @@map("message_templates")
}
```

#### DailyReport
```prisma
model DailyReport {
  id               String   @id @default(cuid())
  date             DateTime
  ticketsResolved  Int      @default(0)
  chatsHandled     Int      @default(0)
  emailsProcessed  Int      @default(0)
  callsAttended    Int      @default(0)
  githubIssues     Int      @default(0)
  notes            String?
  mood             String?  // GOOD, NEUTRAL, BAD
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
  userId           String

  // Relations
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, date])
  @@map("daily_reports")
}
```

#### MeetingReport
```prisma
model MeetingReport {
  id           String         @id @default(cuid())
  hostId       String
  meetingTitle String
  startTime    DateTime
  endTime      DateTime?
  duration     Int?           // Duration in minutes
  clientName   String
  outcome      MeetingOutcome @default(SUCCESSFUL)
  notes        String?
  attendees    String[]       // Array of email addresses
  actionItems  String[]       // Array of action items
  createdAt    DateTime       @default(now())
  updatedAt    DateTime       @updatedAt
  userId       String

  // Relations
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("meeting_reports")
}
```

### Enums

```prisma
enum WebhookStatus {
  ACTIVE
  INACTIVE
  DELETED
}

enum UserRole {
  SUPPORT_AGENT
  ADMIN
}

enum WebhookStatus {
  ACTIVE
  INACTIVE
  DELETED
}

enum DeliveryStatus {
  PENDING
  SUCCESS
  FAILED
  RETRYING
}

enum MeetingOutcome {
  SUCCESSFUL
  CLIENT_ABSENT
  TECHNICAL_ISSUES
  RESCHEDULED
  CANCELLED
}
```

### Key Relationships

1. **Webhook → Endpoints**: One webhook can have multiple outgoing endpoints
2. **Webhook → Payload Logs**: All incoming payloads are logged
3. **Payload → Delivery Logs**: Each payload generates delivery attempts per endpoint
4. **Endpoint → Template**: Each endpoint can use a message template
5. **User → Webhooks**: Users create and own webhooks

### Database Migrations

**Note**: The current project uses mock data and doesn't require a physical database for development. The Prisma schema is documented for future implementation.

```bash
# For future database implementation:
# Generate Prisma client
npx prisma generate

# View database in Prisma Studio
npx prisma studio

# Run migrations
npx prisma migrate dev

# Seed database with sample data
npx prisma db seed
```

### Sample Seed Data

The database includes comprehensive seed data for development:

```typescript
// Sample webhook configurations
const sampleWebhooks = [
  {
    name: "Slack Notifications",
    description: "Send notifications to Slack",
    type: "GENERIC",
    endpoints: [
      {
        name: "Slack Channel",
        url: "https://hooks.slack.com/services/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",
        type: "SLACK",
        template: "Slack Daily Report Template"
      }
    ]
  },
  {
    name: "Meeting Webhook - Slack",
    description: "Auto-create meetings and notify Slack",
    type: "MEETING",
    endpoints: [
      {
        name: "Meeting Slack Channel",
        url: "https://hooks.slack.com/services/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",
        type: "SLACK",
        template: "Meeting Slack Notification"
      }
    ]
  }
];
```

## 🚀 Deployment & Production

### Build Commands

```bash
# Build all packages for production
pnpm build

# Build specific applications
cd apps/web && pnpm build    # Frontend build
cd apps/api && pnpm build    # Backend build

# Start production servers
cd apps/web && pnpm start    # Frontend (port 3000)
cd apps/api && pnpm start    # Backend (port 3001)
```

### Production Environment Variables

**Frontend Production** (`apps/web/.env.production`):
```env
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=super-secure-secret-key-min-32-chars
API_BASE_URL=https://api.your-domain.com
NODE_ENV=production
```

**Production Environment** (`.env.production`):
```env
# Database
DATABASE_URL="postgresql://username:password@prod-db-host:5432/dailysync_prod"

# Redis
REDIS_URL="redis://prod-redis-host:6379"

# Authentication
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="super-secure-secret-key-min-32-chars"
JWT_SECRET="super-secure-jwt-secret-key"

# API Configuration
API_PORT=3001
API_BASE_URL="https://api.your-domain.com"
NODE_ENV=production

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=1000

# External Integrations
SLACK_BOT_TOKEN="xoxb-production-slack-token"
SLACK_SIGNING_SECRET="production-slack-signing-secret"

# Monitoring
LOG_LEVEL=info
SENTRY_DSN="https://your-sentry-dsn"
```

### Docker Configuration

**Root Dockerfile**:
```dockerfile
# Multi-stage build for production
FROM node:18-alpine AS base
RUN npm install -g pnpm
WORKDIR /app
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY pnpm-workspace.yaml ./

# Install dependencies
FROM base AS deps
COPY packages/ ./packages/
COPY apps/ ./apps/
RUN pnpm install --frozen-lockfile

# Build applications
FROM deps AS builder
RUN pnpm build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built applications
COPY --from=builder /app/apps/web/.next ./apps/web/.next
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/health || exit 1

CMD ["pnpm", "start"]
```

### Health Check Endpoints

**API Health Check** (`/health`):
```json
{
  "status": "ok",
  "timestamp": "2025-06-20T19:30:00.000Z",
  "uptime": 3600,
  "environment": "production",
  "message": "DailySync API Server is running",
  "version": "1.0.0"
}
```

**Detailed Health Check** (`/api/health`):
```json
{
  "status": "ok",
  "timestamp": "2025-06-20T19:30:00.000Z",
  "uptime": 3600,
  "environment": "production",
  "message": "DailySync API is healthy",
  "database": "connected",
  "redis": "connected",
  "services": {
    "webhookDelivery": "operational",
    "queueProcessor": "operational",
    "slackIntegration": "operational"
  },
  "metrics": {
    "totalWebhooks": 45,
    "activeWebhooks": 42,
    "queueSize": 12,
    "avgResponseTime": 245
  }
}
```

## 🔧 Environment Variables Reference

### Complete Variable List

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NEXTAUTH_URL` | ✅ | - | Frontend base URL for NextAuth |
| `NEXTAUTH_SECRET` | ✅ | - | Secret for NextAuth JWT signing |
| `API_BASE_URL` | ✅ | `http://localhost:3001` | Backend API base URL |
| `DATABASE_URL` | ✅ | - | PostgreSQL connection string |
| `REDIS_URL` | ✅ | - | Redis connection string |
| `JWT_SECRET` | ✅ | - | JWT token signing secret |
| `API_PORT` | ❌ | `3001` | API server port |
| `NODE_ENV` | ❌ | `development` | Environment mode |
| `SLACK_BOT_TOKEN` | ❌ | - | Slack bot token for API calls |
| `SLACK_SIGNING_SECRET` | ❌ | - | Slack webhook verification secret |
| `RATE_LIMIT_WINDOW_MS` | ❌ | `900000` | Rate limit window in milliseconds |
| `RATE_LIMIT_MAX_REQUESTS` | ❌ | `100` | Maximum requests per window |
| `LOG_LEVEL` | ❌ | `info` | Logging level (error, warn, info, debug) |

### Development vs Production

**Development Configuration**:
```env
# Development environment
NODE_ENV=development
LOG_LEVEL=info

# Local services
DATABASE_URL="postgresql://username:password@localhost:5432/dailysync"
REDIS_URL="redis://localhost:6379"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
JWT_SECRET="your-jwt-secret-here"

# API Configuration
API_PORT=3001
API_BASE_URL="http://localhost:3001"

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Slack Integration (optional)
SLACK_BOT_TOKEN="xoxb-your-slack-bot-token"
SLACK_SIGNING_SECRET="your-slack-signing-secret"
```

**Production Configuration**:
```env
# Production environment
NODE_ENV=production
LOG_LEVEL=info

# Production services
DATABASE_URL="postgresql://user:pass@prod-db:5432/dailysync"
REDIS_URL="redis://prod-redis:6379"

# Authentication
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="super-secure-production-secret-key-min-32-chars"
JWT_SECRET="super-secure-jwt-production-secret-key-min-32-chars"

# API Configuration
API_PORT=3001
API_BASE_URL="https://api.your-domain.com"

# Rate Limiting (higher limits for production)
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=1000

# Slack Integration
SLACK_BOT_TOKEN="xoxb-production-slack-token"
SLACK_SIGNING_SECRET="production-slack-signing-secret"
```

## 📊 Monitoring & Troubleshooting

### Webhook Logs Access

**Dashboard Access**:
- Navigate to `http://localhost:3000/dashboard/webhooks/{id}/logs`
- Real-time updates every 30 seconds
- Filterable by status, date range, endpoint

**API Access**:
```bash
# Get webhook logs
curl -H "Authorization: Bearer <token>" \
  "http://localhost:3001/api/webhooks/1/logs?page=1&limit=20"

# Get specific delivery log
curl -H "Authorization: Bearer <token>" \
  "http://localhost:3001/api/webhooks/1/logs?status=FAILED"
```

### Common Issues & Solutions

#### 1. Port Conflicts
**Issue**: `Error: listen EADDRINUSE :::3000`
```bash
# Find process using port
lsof -i :3000
netstat -tulpn | grep :3000

# Kill process
kill -9 <PID>

# Use different port
PORT=3002 pnpm dev
```

#### 2. Database Connection Issues
**Issue**: `Error: Can't reach database server`
```bash
# Check PostgreSQL status
pg_isready -h localhost -p 5432

# Restart PostgreSQL
sudo systemctl restart postgresql

# Check connection string
psql $DATABASE_URL
```

#### 3. Webhook Delivery Failures
**Issue**: Webhooks not reaching endpoints
```bash
# Test endpoint directly
curl -X POST https://hooks.slack.com/services/... \
  -H "Content-Type: application/json" \
  -d '{"text": "Test message"}'

# Check webhook logs
curl -H "Authorization: Bearer <token>" \
  "http://localhost:3001/api/webhooks/1/logs"
```

## 🧪 Testing & Quality Assurance

### Testing Commands

```bash
# Run API endpoint tests
node test-api-endpoints.js

# Run Slack delivery tests
node test-slack-delivery.js

# Test individual API endpoints
curl http://localhost:3001/health
curl http://localhost:3001/api/health

# Test webhook delivery
curl -X POST http://localhost:3001/api/webhooks/1/receive \
  -H "Content-Type: application/json" \
  -d '{"test": true, "message": "Test payload"}'
```

### Webhook Testing Scripts

**Real Slack Delivery Test** (`test-slack-delivery.js`):
```javascript
// Test real Slack webhook delivery
async function testSlackDelivery() {
  console.log('🔍 Testing Real Slack Webhook Delivery\n');

  const API_BASE = 'http://localhost:3001';
  const slackUrl = 'https://hooks.slack.com/services/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';

  try {
    // Test 1: Direct Slack webhook
    const directResponse = await fetch(slackUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: '🧪 Direct test from DailySync webhook system',
        username: 'DailySync Bot',
        icon_emoji: ':robot_face:'
      })
    });

    console.log(`Direct Slack test: ${directResponse.status} ${directResponse.statusText}`);

    // Test 2: Through DailySync system
    const webhookResponse = await fetch(`${API_BASE}/api/webhooks/1/receive`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'test',
        userName: 'Test User',
        message: 'Testing webhook delivery system'
      })
    });

    const webhookData = await webhookResponse.json();
    console.log('Webhook system response:', webhookData);
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

// Run the test
testSlackDelivery();
```

## 🔄 Development Workflow

### Git Workflow

**Branch Strategy**:
```bash
# Main branches
main          # Production-ready code
develop       # Integration branch
feature/*     # Feature development
hotfix/*      # Production fixes

# Example workflow
git checkout develop
git pull origin develop
git checkout -b feature/webhook-templates
# ... make changes ...
git add .
git commit -m "feat: add webhook template management"
git push origin feature/webhook-templates
# ... create pull request ...
```

**Commit Conventions**:
```bash
# Format: type(scope): description
feat(webhooks): add template management system
fix(auth): resolve session persistence issue
docs(readme): update deployment instructions
style(ui): improve webhook table styling
refactor(api): optimize webhook delivery performance
test(webhooks): add integration tests for delivery
```

### Code Quality Tools

**ESLint Configuration** (`.eslintrc.js`):
```javascript
module.exports = {
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'prefer-const': 'error',
    'no-console': 'warn',
  }
};
```

## 🛡️ Security & Best Practices

### Authentication Security

**NextAuth.js Configuration**:
```typescript
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Verify credentials against API
        const response = await fetch(`${process.env.API_BASE_URL}/api/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password
          })
        });

        if (!response.ok) return null;
        const { data } = await response.json();
        return data.user;
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 7 * 24 * 60 * 60, // 7 days
  }
};
```

### API Security

**Rate Limiting**:
```typescript
export const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 1000 requests per windowMs
  message: {
    error: 'Too many requests',
    message: 'Rate limit exceeded. Please try again later.'
  }
});

export const webhookRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: parseInt(process.env.WEBHOOK_RATE_LIMIT || '100'),
  message: {
    error: 'Webhook rate limit exceeded',
    message: 'Too many webhook requests. Please slow down.'
  }
});
```

### Webhook Security

**Webhook Secret Validation**:
```typescript
export const webhookAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const webhookId = req.params.id;
    const signature = req.headers['x-webhook-signature'] as string;
    const timestamp = req.headers['x-webhook-timestamp'] as string;

    // Get webhook from database
    const webhook = await prisma.incomingWebhook.findUnique({
      where: { id: webhookId }
    });

    if (!webhook || webhook.status !== 'ACTIVE') {
      return res.status(404).json({
        success: false,
        error: 'Webhook not found or inactive'
      });
    }

    // Verify signature if secret is configured
    if (webhook.secret && signature) {
      const payload = JSON.stringify(req.body);
      const expectedSignature = crypto
        .createHmac('sha256', webhook.secret)
        .update(timestamp + payload)
        .digest('hex');

      if (!crypto.timingSafeEqual(
        Buffer.from(signature, 'hex'),
        Buffer.from(expectedSignature, 'hex')
      )) {
        return res.status(401).json({
          success: false,
          error: 'Invalid webhook signature'
        });
      }
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Authentication failed'
    });
  }
};
```

### Production Security Checklist

**Deployment Security**:
- [ ] All secrets use strong, randomly generated values (32+ characters)
- [ ] Environment variables are properly secured and not logged
- [ ] Database connections use SSL/TLS encryption
- [ ] CORS is configured with specific allowed origins
- [ ] Rate limiting is enabled for all public endpoints
- [ ] Input validation is implemented for all user inputs
- [ ] Webhook signatures are validated
- [ ] API endpoints require proper authentication
- [ ] Admin routes are properly protected
- [ ] Session timeouts are configured
- [ ] Dependencies are regularly updated and scanned

---

## 📚 Additional Resources

### Documentation Links
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

### External Integrations
- [Slack API Documentation](https://api.slack.com)
- [Microsoft Teams Webhooks](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/)
- [Google Sheets API](https://developers.google.com/sheets/api)

### Support & Community
- **Issues**: Report bugs and feature requests via GitHub Issues
- **Discussions**: Join community discussions for questions and ideas
- **Contributing**: See CONTRIBUTING.md for development guidelines
- **Security**: Report security issues via security@dailysync.com

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org) and [TypeScript](https://www.typescriptlang.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Database management with [Prisma](https://www.prisma.io)
- Authentication powered by [NextAuth.js](https://next-auth.js.org)
- Queue processing with [BullMQ](https://docs.bullmq.io)

---

**DailySync Webhook Management Platform** - Streamlining team communication and automation through intelligent webhook orchestration.

For questions, support, or contributions, please refer to our [Contributing Guidelines](CONTRIBUTING.md) or open an issue on GitHub.
