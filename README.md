# DailySync 📊

> **A comprehensive SaaS platform for team productivity, daily reporting, and webhook management**

[![Production Status](https://img.shields.io/badge/Production-Live-brightgreen)](https://desk-sync-web.vercel.app)
[![Build Status](https://img.shields.io/badge/Build-Passing-success)](https://github.com/iftekhar-1122/DeskSync)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

## 🚀 Live Demo

**Production URL**: [https://desk-sync-web.vercel.app](https://desk-sync-web.vercel.app)

## 📋 Table of Contents

- [Features Overview](#-features-overview)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [API Documentation](#-api-documentation)
- [Environment Setup](#-environment-setup)
- [Database Configuration](#-database-configuration)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features Overview

### 🎯 Core Functionality
- **✅ Dashboard Analytics**: Real-time team performance metrics and insights
- **✅ Daily Reporting**: Streamlined daily report submission and tracking
- **✅ Webhook Management**: Comprehensive webhook creation, testing, and monitoring
- **✅ User Authentication**: Secure NextAuth.js integration with role-based access
- **✅ Settings Management**: User profiles, preferences, and system configuration

### 🔧 Administrative Features
- **✅ Admin Dashboard**: Complete system overview and user management
- **✅ Analytics Engine**: Performance tracking, leaderboards, and system health
- **✅ Webhook Analytics**: Delivery tracking, success rates, and performance metrics
- **✅ System Health Monitoring**: Real-time status checks and error tracking

### 🚧 Development Status
- **✅ Core Platform**: Fully functional and production-ready
- **✅ Authentication**: Complete with role-based access control
- **✅ API Endpoints**: All major endpoints implemented and tested
- **🚧 Advanced Analytics**: Enhanced reporting features in development
- **🚧 Mobile Optimization**: Responsive design improvements ongoing

## 🛠 Technology Stack

### Frontend
- **Next.js 14+** - React framework with App Router
- **TypeScript 5.0+** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **React Query** - Data fetching and state management
- **React Hook Form** - Form handling and validation
- **Recharts** - Data visualization and analytics charts

### Backend & Database
- **Prisma ORM** - Database toolkit and query builder
- **PostgreSQL 15+** - Primary database
- **Redis 7+** - Caching and session storage
- **BullMQ** - Queue management for background jobs

### Authentication & Security
- **NextAuth.js** - Authentication framework
- **JWT** - Secure token-based authentication
- **CORS** - Cross-origin resource sharing configuration

### Development & Deployment
- **Vercel** - Production hosting and deployment
- **GitHub Actions** - CI/CD pipeline
- **ESLint & Prettier** - Code quality and formatting
- **Husky** - Git hooks for quality assurance

## 🏗 Architecture

### Monorepo Structure
```
DeskSync/
├── apps/
│   └── web/                    # Main Next.js application
│       ├── src/
│       │   ├── app/           # App Router pages and API routes
│       │   │   ├── api/       # Backend API endpoints
│       │   │   │   ├── auth/  # Authentication routes
│       │   │   │   ├── dashboard/ # Dashboard data endpoints
│       │   │   │   ├── settings/  # User and system settings
│       │   │   │   ├── webhooks/  # Webhook management
│       │   │   │   ├── analytics/ # Analytics and reporting
│       │   │   │   └── health/    # System health checks
│       │   │   ├── dashboard/     # Dashboard pages
│       │   │   ├── settings/      # Settings pages
│       │   │   └── webhooks/      # Webhook management pages
│       │   ├── components/        # Reusable UI components
│       │   │   ├── ui/           # Base UI components (shadcn/ui)
│       │   │   ├── dashboard/    # Dashboard-specific components
│       │   │   ├── analytics/    # Analytics and charts
│       │   │   ├── webhooks/     # Webhook management components
│       │   │   └── auth/         # Authentication components
│       │   ├── lib/              # Utility functions and configurations
│       │   └── styles/           # Global styles and Tailwind config
│       ├── prisma/               # Database schema and migrations
│       └── public/               # Static assets
├── packages/                     # Shared packages (future expansion)
├── docs/                        # Documentation
└── scripts/                    # Build and deployment scripts
```

### API Architecture
```
/api/
├── auth/                       # Authentication endpoints
├── dashboard/                  # Dashboard data and metrics
├── settings/
│   ├── profile/               # User profile management
│   └── /                      # Application settings
├── webhooks/
│   ├── [id]/                  # Individual webhook operations
│   │   ├── endpoints/         # Webhook endpoint management
│   │   ├── logs/              # Webhook delivery logs
│   │   └── test/              # Webhook testing
│   └── /                      # Webhook CRUD operations
├── analytics/
│   ├── dashboard/             # Dashboard analytics
│   ├── webhooks/              # Webhook analytics
│   └── leaderboard/           # Performance leaderboards
└── health/                    # System health monitoring
```

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+**
- **pnpm 8+** (recommended package manager)
- **PostgreSQL 15+**
- **Redis 7+**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iftekhar-1122/DeskSync.git
   cd DeskSync
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp apps/web/.env.example apps/web/.env.local
   # Edit .env.local with your configuration
   ```

4. **Set up the database**
   ```bash
   cd apps/web
   pnpm prisma generate
   pnpm prisma db push
   pnpm prisma db seed  # Optional: seed with sample data
   ```

5. **Start Redis server**
   ```bash
   redis-server
   ```

6. **Run the development server**
   ```bash
   pnpm dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Development
pnpm dev                    # Start development server
pnpm build                  # Build for production
pnpm start                  # Start production server
pnpm lint                   # Run ESLint
pnpm type-check            # Run TypeScript checks

# Database
pnpm prisma studio         # Open Prisma Studio
pnpm prisma generate       # Generate Prisma client
pnpm prisma db push        # Push schema changes
pnpm prisma migrate dev    # Create and apply migrations

# Testing
pnpm test                  # Run tests
pnpm test:watch           # Run tests in watch mode
```

## 📡 API Documentation

### Authentication Endpoints

#### POST `/api/auth/signin`
User authentication endpoint.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "role": "USER"
  }
}
```

### Dashboard Endpoints

#### GET `/api/dashboard`
**✅ Status**: Fully functional
Retrieve dashboard analytics and metrics.

**Response:**
```json
{
  "success": true,
  "data": {
    "userPerformance": [...],
    "systemStats": {...},
    "recentActivity": [...]
  }
}
```

### Settings Endpoints

#### GET `/api/settings/profile`
**✅ Status**: Fully functional
Get user profile and preferences.

#### PUT `/api/settings/profile`
Update user profile information.

#### GET `/api/settings`
**✅ Status**: Fully functional
Get application settings (admin only).

### Webhook Endpoints

#### GET `/api/webhooks`
**✅ Status**: Fully functional
List all webhooks with pagination.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 10)
- `search` (string): Search term

**Response:**
```json
{
  "success": true,
  "data": {
    "webhooks": [...],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 25,
      "totalPages": 3
    }
  }
}
```

#### POST `/api/webhooks`
Create a new webhook.

#### GET `/api/webhooks/[id]`
Get webhook details by ID.

#### PUT `/api/webhooks/[id]`
Update webhook configuration.

#### DELETE `/api/webhooks/[id]`
Delete a webhook.

#### POST `/api/webhooks/[id]/test`
**✅ Status**: Fully functional
Test webhook delivery.

### Analytics Endpoints

#### GET `/api/analytics/dashboard`
**✅ Status**: Fully functional
Get dashboard analytics data.

#### GET `/api/analytics/webhooks`
**✅ Status**: Fully functional
Get webhook analytics and performance metrics.

#### GET `/api/analytics/leaderboard`
**✅ Status**: Fully functional
Get performance leaderboard data.

### Health Check

#### GET `/api/health`
**✅ Status**: Fully functional
System health monitoring endpoint.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00Z",
  "services": {
    "database": "connected",
    "redis": "connected",
    "api": "operational"
  }
}
```

## 🔧 Environment Setup

### Required Environment Variables

Create `apps/web/.env.local` with the following configuration:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/dailysync"

# Redis
REDIS_URL="redis://localhost:6379"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Authentication Providers (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Application
NODE_ENV="development"
APP_URL="http://localhost:3000"

# Webhook Configuration
WEBHOOK_SECRET="your-webhook-secret"

# Email (optional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Analytics (optional)
ANALYTICS_API_KEY="your-analytics-key"
```

### Production Environment Variables

For production deployment on Vercel:

```bash
# Database (use connection pooling)
DATABASE_URL="postgresql://username:password@host:5432/dailysync?pgbouncer=true"

# Redis (use Redis Cloud or similar)
REDIS_URL="rediss://username:password@host:port"

# NextAuth.js
NEXTAUTH_URL="https://desk-sync-web.vercel.app"
NEXTAUTH_SECRET="production-secret-key"

# Application
NODE_ENV="production"
APP_URL="https://desk-sync-web.vercel.app"
```

## 🗄 Database Configuration

### Prisma Schema

The application uses Prisma ORM with PostgreSQL. Key models include:

- **User**: User accounts and authentication
- **DailyReport**: Daily report submissions
- **Webhook**: Webhook configurations
- **PayloadLog**: Webhook delivery logs
- **Analytics**: Performance metrics

### Database Setup

1. **Install PostgreSQL 15+**
   ```bash
   # macOS
   brew install postgresql@15

   # Ubuntu
   sudo apt install postgresql-15

   # Windows
   # Download from https://www.postgresql.org/download/windows/
   ```

2. **Create database**
   ```sql
   CREATE DATABASE dailysync;
   CREATE USER dailysync_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE dailysync TO dailysync_user;
   ```

3. **Run migrations**
   ```bash
   cd apps/web
   pnpm prisma generate
   pnpm prisma db push
   ```

4. **Seed database (optional)**
   ```bash
   pnpm prisma db seed
   ```

### Redis Setup

1. **Install Redis 7+**
   ```bash
   # macOS
   brew install redis

   # Ubuntu
   sudo apt install redis-server

   # Windows
   # Use Redis for Windows or Docker
   ```

2. **Start Redis**
   ```bash
   redis-server
   ```

3. **Verify connection**
   ```bash
   redis-cli ping
   # Should return: PONG
   ```

## 🚀 Deployment

### Vercel Deployment (Recommended)

The application is optimized for Vercel deployment:

1. **Connect GitHub repository**
   - Import project from GitHub
   - Select the `DeskSync` repository

2. **Configure build settings**
   ```bash
   # Build Command
   cd apps/web && pnpm build

   # Output Directory
   apps/web/.next

   # Install Command
   pnpm install
   ```

3. **Set environment variables**
   - Add all production environment variables in Vercel dashboard
   - Ensure `DATABASE_URL` uses connection pooling
   - Set `NEXTAUTH_URL` to your Vercel domain

4. **Deploy**
   - Push to main branch for automatic deployment
   - Monitor build logs for any issues

### Manual Deployment

For other hosting providers:

1. **Build the application**
   ```bash
   pnpm build
   ```

2. **Start production server**
   ```bash
   pnpm start
   ```

3. **Configure reverse proxy** (nginx example)
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔍 Troubleshooting

### Common Issues and Solutions

#### 1. TypeScript Build Errors
**Issue**: `Property 'X' does not exist on type 'Y'`

**Solution**:
```typescript
// Use type assertions for API responses
const data = response.data as any;

// Add fallback values for array operations
const items = Array.isArray(data?.items) ? data.items : [];
```

#### 2. Database Connection Issues
**Issue**: `Can't reach database server`

**Solutions**:
- Verify PostgreSQL is running: `pg_isready`
- Check connection string format
- Ensure database exists and user has permissions
- For production: Use connection pooling

#### 3. Redis Connection Errors
**Issue**: `Redis connection failed`

**Solutions**:
- Start Redis server: `redis-server`
- Check Redis status: `redis-cli ping`
- Verify REDIS_URL format
- For production: Use managed Redis service

#### 4. Authentication Issues
**Issue**: NextAuth.js session problems

**Solutions**:
- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Clear browser cookies and localStorage
- Restart development server

#### 5. Webhook Delivery Failures
**Issue**: Webhooks not delivering

**Solutions**:
- Check webhook URL accessibility
- Verify endpoint accepts POST requests
- Review webhook logs in dashboard
- Test with webhook testing tools

#### 6. Build Failures on Vercel
**Issue**: Deployment fails during build

**Solutions**:
- Check build logs for specific errors
- Verify all environment variables are set
- Ensure database is accessible from Vercel
- Run `pnpm build` locally to test

### Performance Optimization

#### Database Optimization
```sql
-- Add indexes for frequently queried fields
CREATE INDEX idx_webhooks_user_id ON webhooks(user_id);
CREATE INDEX idx_payload_logs_webhook_id ON payload_logs(webhook_id);
CREATE INDEX idx_daily_reports_created_at ON daily_reports(created_at);
```

#### Redis Caching
```typescript
// Cache frequently accessed data
const cacheKey = `dashboard:${userId}`;
const cachedData = await redis.get(cacheKey);

if (!cachedData) {
  const data = await fetchDashboardData(userId);
  await redis.setex(cacheKey, 300, JSON.stringify(data)); // 5 min cache
  return data;
}

return JSON.parse(cachedData);
```

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow TypeScript best practices
   - Add tests for new functionality
   - Update documentation as needed

4. **Run quality checks**
   ```bash
   pnpm lint
   pnpm type-check
   pnpm test
   ```

5. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```

6. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Standards

- **TypeScript**: Strict mode enabled, proper typing required
- **ESLint**: Follow configured rules
- **Prettier**: Auto-formatting on save
- **Commit Messages**: Use conventional commits format
- **Testing**: Write tests for new features
- **Documentation**: Update README and inline docs

### Project Structure Guidelines

- **Components**: Reusable UI components in `/components`
- **Pages**: App Router pages in `/app`
- **API Routes**: Backend endpoints in `/app/api`
- **Utilities**: Helper functions in `/lib`
- **Types**: TypeScript definitions in appropriate files
- **Styles**: Tailwind classes, avoid custom CSS

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

- **Production Issues**: Create an issue on GitHub
- **Feature Requests**: Use GitHub Discussions
- **Security Issues**: Email security@dailysync.com
- **Documentation**: Check `/docs` directory

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For seamless deployment platform
- **shadcn/ui** - For beautiful UI components
- **Prisma Team** - For the excellent ORM
- **Open Source Community** - For all the amazing tools and libraries

---

**Built with ❤️ by the DailySync Team**

*Last updated: January 2024*
