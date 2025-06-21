import { 
  User, 
  IncomingWebhook, 
  OutgoingEndpoint, 
  PayloadLog, 
  DeliveryLog, 
  DailyReport, 
  MeetingReport,
  MessageTemplate,
  UserRole,
  WebhookStatus,
  DeliveryStatus,
  MeetingOutcome
} from './generated';

// User types
export type UserWithoutPassword = Omit<User, 'password'>;
export type CreateUserInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserInput = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>;

// Webhook types
export type WebhookWithEndpoints = IncomingWebhook & {
  outgoingEndpoints: OutgoingEndpoint[];
};

export type CreateWebhookInput = Omit<IncomingWebhook, 'id' | 'createdAt' | 'updatedAt' | 'url'>;
export type UpdateWebhookInput = Partial<Omit<IncomingWebhook, 'id' | 'createdAt' | 'updatedAt' | 'url' | 'createdBy'>>;

// Endpoint types
export type CreateEndpointInput = Omit<OutgoingEndpoint, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateEndpointInput = Partial<Omit<OutgoingEndpoint, 'id' | 'createdAt' | 'updatedAt' | 'incomingWebhookId'>>;

// Report types
export type CreateDailyReportInput = Omit<DailyReport, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateDailyReportInput = Partial<Omit<DailyReport, 'id' | 'createdAt' | 'updatedAt' | 'userId'>>;

export type CreateMeetingReportInput = Omit<MeetingReport, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateMeetingReportInput = Partial<Omit<MeetingReport, 'id' | 'createdAt' | 'updatedAt' | 'userId'>>;

// Analytics types
export interface DailyReportAnalytics {
  totalTickets: number;
  totalChats: number;
  totalGithubIssues: number;
  totalEmails: number;
  totalCalls: number;
  averageTickets: number;
  averageChats: number;
  averageGithubIssues: number;
  averageEmails: number;
  averageCalls: number;
  reportCount: number;
}

export interface UserPerformanceMetrics {
  userId: string;
  userName: string;
  totalTickets: number;
  totalChats: number;
  totalGithubIssues: number;
  totalEmails: number;
  totalCalls: number;
  reportCount: number;
  averageDaily: {
    tickets: number;
    chats: number;
    githubIssues: number;
    emails: number;
    calls: number;
  };
}

export interface WebhookAnalytics {
  webhookId: string;
  webhookName: string;
  totalPayloads: number;
  successfulDeliveries: number;
  failedDeliveries: number;
  successRate: number;
  averageResponseTime: number;
  lastActivity: Date | null;
}

// Payload processing types
export interface ProcessedPayload {
  original: any;
  transformed: any;
  template?: string;
}

export interface DeliveryResult {
  success: boolean;
  status?: number;
  response?: string;
  error?: string;
  duration: number;
}

// Filter types for analytics
export interface DateRangeFilter {
  startDate: Date;
  endDate: Date;
}

export interface UserFilter {
  userIds?: string[];
  roles?: UserRole[];
}

export interface WebhookFilter {
  webhookIds?: string[];
  status?: WebhookStatus[];
}

// Export enums for convenience
export { UserRole, WebhookStatus, DeliveryStatus, MeetingOutcome };
