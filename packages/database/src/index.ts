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

// Export all types from Prisma
export * from './generated';

// Export custom types and utilities
export * from './types';
export * from './utils';
export * from './validations';
