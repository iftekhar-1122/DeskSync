import { PrismaClient } from './generated';

// Global Prisma client instance
declare global {
  var __prisma: PrismaClient | undefined;
}

// Create a singleton Prisma client
export const prisma =
  globalThis.__prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma;
}

// Export Prisma client and core types
export { PrismaClient } from './generated';
export type {
  User,
  IncomingWebhook,
  OutgoingEndpoint,
  MessageTemplate,
  PayloadLog,
  DeliveryLog,
  DailyReport,
  MeetingReport,
  UserRole,
  WebhookStatus,
  DeliveryStatus,
  MeetingOutcome,
  Prisma
} from './generated';

// Export custom types (explicit named exports to avoid conflicts)
export type {
  UserWithoutPassword,
  CreateUserInput,
  UpdateUserInput,
  WebhookWithEndpoints,
  CreateWebhookInput,
  UpdateWebhookInput,
  CreateEndpointInput,
  UpdateEndpointInput,
  CreateDailyReportInput,
  UpdateDailyReportInput,
  CreateMeetingReportInput,
  UpdateMeetingReportInput,
  DailyReportAnalytics,
  UserPerformanceMetrics,
  WebhookAnalytics,
  ProcessedPayload,
  DeliveryResult,
  DateRangeFilter,
  UserFilter,
  WebhookFilter
} from './types';

// Export utilities and validations
export * from './utils';
export * from './validations';
