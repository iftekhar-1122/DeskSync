import bcrypt from 'bcryptjs';
import { prisma } from './index';
import { 
  UserWithoutPassword, 
  DailyReportAnalytics, 
  UserPerformanceMetrics,
  WebhookAnalytics,
  DateRangeFilter,
  UserFilter,
  WebhookFilter
} from './types';

// Password utilities
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
};

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};

// User utilities
export const excludePassword = (user: any): UserWithoutPassword => {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const generateWebhookUrl = (): string => {
  const randomString = Math.random().toString(36).substring(2, 15) + 
                      Math.random().toString(36).substring(2, 15);
  return `/webhook/${randomString}`;
};

// Analytics utilities
export const calculateDailyReportAnalytics = async (
  filter: DateRangeFilter & UserFilter
): Promise<DailyReportAnalytics> => {
  const whereClause: any = {
    date: {
      gte: filter.startDate,
      lte: filter.endDate,
    },
  };

  if (filter.userIds && filter.userIds.length > 0) {
    whereClause.userId = { in: filter.userIds };
  }

  if (filter.roles && filter.roles.length > 0) {
    whereClause.user = {
      role: { in: filter.roles },
    };
  }

  const reports = await prisma.dailyReport.findMany({
    where: whereClause,
    include: {
      user: true,
    },
  });

  const totals = reports.reduce(
    (acc, report) => ({
      tickets: acc.tickets + report.ticketsResolved,
      chats: acc.chats + report.chatsHandled,
      githubIssues: acc.githubIssues + report.githubIssues,
      emails: acc.emails + report.emailsProcessed,
      calls: acc.calls + report.callsAttended,
    }),
    { tickets: 0, chats: 0, githubIssues: 0, emails: 0, calls: 0 }
  );

  const reportCount = reports.length;

  return {
    totalTickets: totals.tickets,
    totalChats: totals.chats,
    totalGithubIssues: totals.githubIssues,
    totalEmails: totals.emails,
    totalCalls: totals.calls,
    averageTickets: reportCount > 0 ? totals.tickets / reportCount : 0,
    averageChats: reportCount > 0 ? totals.chats / reportCount : 0,
    averageGithubIssues: reportCount > 0 ? totals.githubIssues / reportCount : 0,
    averageEmails: reportCount > 0 ? totals.emails / reportCount : 0,
    averageCalls: reportCount > 0 ? totals.calls / reportCount : 0,
    reportCount,
  };
};

export const getUserPerformanceMetrics = async (
  filter: DateRangeFilter & UserFilter
): Promise<UserPerformanceMetrics[]> => {
  const whereClause: any = {
    date: {
      gte: filter.startDate,
      lte: filter.endDate,
    },
  };

  if (filter.userIds && filter.userIds.length > 0) {
    whereClause.userId = { in: filter.userIds };
  }

  if (filter.roles && filter.roles.length > 0) {
    whereClause.user = {
      role: { in: filter.roles },
    };
  }

  const reports = await prisma.dailyReport.findMany({
    where: whereClause,
    include: {
      user: true,
    },
  });

  const userMetrics = new Map<string, {
    user: any;
    totals: {
      tickets: number;
      chats: number;
      githubIssues: number;
      emails: number;
      calls: number;
    };
    reportCount: number;
  }>();

  reports.forEach((report) => {
    const existing = userMetrics.get(report.userId) || {
      user: report.user,
      totals: { tickets: 0, chats: 0, githubIssues: 0, emails: 0, calls: 0 },
      reportCount: 0,
    };

    existing.totals.tickets += report.ticketsResolved;
    existing.totals.chats += report.chatsHandled;
    existing.totals.githubIssues += report.githubIssues;
    existing.totals.emails += report.emailsProcessed;
    existing.totals.calls += report.callsAttended;
    existing.reportCount += 1;

    userMetrics.set(report.userId, existing);
  });

  return Array.from(userMetrics.values()).map(({ user, totals, reportCount }) => ({
    userId: user.id,
    userName: user.name,
    totalTickets: totals.tickets,
    totalChats: totals.chats,
    totalGithubIssues: totals.githubIssues,
    totalEmails: totals.emails,
    totalCalls: totals.calls,
    reportCount,
    averageDaily: {
      tickets: reportCount > 0 ? totals.tickets / reportCount : 0,
      chats: reportCount > 0 ? totals.chats / reportCount : 0,
      githubIssues: reportCount > 0 ? totals.githubIssues / reportCount : 0,
      emails: reportCount > 0 ? totals.emails / reportCount : 0,
      calls: reportCount > 0 ? totals.calls / reportCount : 0,
    },
  }));
};

export const getWebhookAnalytics = async (
  filter: DateRangeFilter & WebhookFilter
): Promise<WebhookAnalytics[]> => {
  const whereClause: any = {
    receivedAt: {
      gte: filter.startDate,
      lte: filter.endDate,
    },
  };

  if (filter.webhookIds && filter.webhookIds.length > 0) {
    whereClause.incomingWebhookId = { in: filter.webhookIds };
  }

  if (filter.status && filter.status.length > 0) {
    whereClause.incomingWebhook = {
      status: { in: filter.status },
    };
  }

  const payloadLogs = await prisma.payloadLog.findMany({
    where: whereClause,
    include: {
      incomingWebhook: true,
      deliveryLogs: true,
    },
  });

  const webhookMetrics = new Map<string, {
    webhook: any;
    totalPayloads: number;
    successfulDeliveries: number;
    failedDeliveries: number;
    responseTimes: number[];
    lastActivity: Date | null;
  }>();

  payloadLogs.forEach((payloadLog) => {
    const webhookId = payloadLog.incomingWebhookId;
    const existing = webhookMetrics.get(webhookId) || {
      webhook: payloadLog.incomingWebhook,
      totalPayloads: 0,
      successfulDeliveries: 0,
      failedDeliveries: 0,
      responseTimes: [],
      lastActivity: null,
    };

    existing.totalPayloads += 1;
    existing.lastActivity = payloadLog.receivedAt;

    payloadLog.deliveryLogs.forEach((deliveryLog) => {
      if (deliveryLog.status === 'SUCCESS') {
        existing.successfulDeliveries += 1;
      } else if (deliveryLog.status === 'FAILED') {
        existing.failedDeliveries += 1;
      }

      if (deliveryLog.deliveredAt) {
        const responseTime = deliveryLog.deliveredAt.getTime() - payloadLog.receivedAt.getTime();
        existing.responseTimes.push(responseTime);
      }
    });

    webhookMetrics.set(webhookId, existing);
  });

  return Array.from(webhookMetrics.values()).map(({
    webhook,
    totalPayloads,
    successfulDeliveries,
    failedDeliveries,
    responseTimes,
    lastActivity,
  }) => ({
    webhookId: webhook.id,
    webhookName: webhook.name,
    totalPayloads,
    successfulDeliveries,
    failedDeliveries,
    successRate: totalPayloads > 0 ? (successfulDeliveries / totalPayloads) * 100 : 0,
    averageResponseTime: responseTimes.length > 0 
      ? responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length 
      : 0,
    lastActivity,
  }));
};

// Date utilities
export const getDateRange = (days: number): DateRangeFilter => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  return { startDate, endDate };
};

export const formatDateForDatabase = (date: Date): string => {
  return date.toISOString().split('T')[0];
};
