
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model IncomingWebhook
 * 
 */
export type IncomingWebhook = $Result.DefaultSelection<Prisma.$IncomingWebhookPayload>
/**
 * Model MessageTemplate
 * 
 */
export type MessageTemplate = $Result.DefaultSelection<Prisma.$MessageTemplatePayload>
/**
 * Model SupportPlatform
 * 
 */
export type SupportPlatform = $Result.DefaultSelection<Prisma.$SupportPlatformPayload>
/**
 * Model MeetingReport
 * 
 */
export type MeetingReport = $Result.DefaultSelection<Prisma.$MeetingReportPayload>
/**
 * Model DailyReport
 * 
 */
export type DailyReport = $Result.DefaultSelection<Prisma.$DailyReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const WebhookStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PAUSED: 'PAUSED'
};

export type WebhookStatus = (typeof WebhookStatus)[keyof typeof WebhookStatus]


export const MeetingOutcome: {
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW',
  RESCHEDULED: 'RESCHEDULED'
};

export type MeetingOutcome = (typeof MeetingOutcome)[keyof typeof MeetingOutcome]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type WebhookStatus = $Enums.WebhookStatus

export const WebhookStatus: typeof $Enums.WebhookStatus

export type MeetingOutcome = $Enums.MeetingOutcome

export const MeetingOutcome: typeof $Enums.MeetingOutcome

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.incomingWebhook`: Exposes CRUD operations for the **IncomingWebhook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncomingWebhooks
    * const incomingWebhooks = await prisma.incomingWebhook.findMany()
    * ```
    */
  get incomingWebhook(): Prisma.IncomingWebhookDelegate<ExtArgs>;

  /**
   * `prisma.messageTemplate`: Exposes CRUD operations for the **MessageTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageTemplates
    * const messageTemplates = await prisma.messageTemplate.findMany()
    * ```
    */
  get messageTemplate(): Prisma.MessageTemplateDelegate<ExtArgs>;

  /**
   * `prisma.supportPlatform`: Exposes CRUD operations for the **SupportPlatform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportPlatforms
    * const supportPlatforms = await prisma.supportPlatform.findMany()
    * ```
    */
  get supportPlatform(): Prisma.SupportPlatformDelegate<ExtArgs>;

  /**
   * `prisma.meetingReport`: Exposes CRUD operations for the **MeetingReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeetingReports
    * const meetingReports = await prisma.meetingReport.findMany()
    * ```
    */
  get meetingReport(): Prisma.MeetingReportDelegate<ExtArgs>;

  /**
   * `prisma.dailyReport`: Exposes CRUD operations for the **DailyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyReports
    * const dailyReports = await prisma.dailyReport.findMany()
    * ```
    */
  get dailyReport(): Prisma.DailyReportDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    IncomingWebhook: 'IncomingWebhook',
    MessageTemplate: 'MessageTemplate',
    SupportPlatform: 'SupportPlatform',
    MeetingReport: 'MeetingReport',
    DailyReport: 'DailyReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "incomingWebhook" | "messageTemplate" | "supportPlatform" | "meetingReport" | "dailyReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      IncomingWebhook: {
        payload: Prisma.$IncomingWebhookPayload<ExtArgs>
        fields: Prisma.IncomingWebhookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncomingWebhookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingWebhookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncomingWebhookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingWebhookPayload>
          }
          findFirst: {
            args: Prisma.IncomingWebhookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingWebhookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncomingWebhookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingWebhookPayload>
          }
          findMany: {
            args: Prisma.IncomingWebhookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingWebhookPayload>[]
          }
          create: {
            args: Prisma.IncomingWebhookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingWebhookPayload>
          }
          createMany: {
            args: Prisma.IncomingWebhookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncomingWebhookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingWebhookPayload>[]
          }
          delete: {
            args: Prisma.IncomingWebhookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingWebhookPayload>
          }
          update: {
            args: Prisma.IncomingWebhookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingWebhookPayload>
          }
          deleteMany: {
            args: Prisma.IncomingWebhookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncomingWebhookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IncomingWebhookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomingWebhookPayload>
          }
          aggregate: {
            args: Prisma.IncomingWebhookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncomingWebhook>
          }
          groupBy: {
            args: Prisma.IncomingWebhookGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncomingWebhookGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncomingWebhookCountArgs<ExtArgs>
            result: $Utils.Optional<IncomingWebhookCountAggregateOutputType> | number
          }
        }
      }
      MessageTemplate: {
        payload: Prisma.$MessageTemplatePayload<ExtArgs>
        fields: Prisma.MessageTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          findFirst: {
            args: Prisma.MessageTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          findMany: {
            args: Prisma.MessageTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>[]
          }
          create: {
            args: Prisma.MessageTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          createMany: {
            args: Prisma.MessageTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>[]
          }
          delete: {
            args: Prisma.MessageTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          update: {
            args: Prisma.MessageTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          deleteMany: {
            args: Prisma.MessageTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          aggregate: {
            args: Prisma.MessageTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageTemplate>
          }
          groupBy: {
            args: Prisma.MessageTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<MessageTemplateCountAggregateOutputType> | number
          }
        }
      }
      SupportPlatform: {
        payload: Prisma.$SupportPlatformPayload<ExtArgs>
        fields: Prisma.SupportPlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportPlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportPlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPlatformPayload>
          }
          findFirst: {
            args: Prisma.SupportPlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportPlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPlatformPayload>
          }
          findMany: {
            args: Prisma.SupportPlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPlatformPayload>[]
          }
          create: {
            args: Prisma.SupportPlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPlatformPayload>
          }
          createMany: {
            args: Prisma.SupportPlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportPlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPlatformPayload>[]
          }
          delete: {
            args: Prisma.SupportPlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPlatformPayload>
          }
          update: {
            args: Prisma.SupportPlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPlatformPayload>
          }
          deleteMany: {
            args: Prisma.SupportPlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportPlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupportPlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPlatformPayload>
          }
          aggregate: {
            args: Prisma.SupportPlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportPlatform>
          }
          groupBy: {
            args: Prisma.SupportPlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportPlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportPlatformCountArgs<ExtArgs>
            result: $Utils.Optional<SupportPlatformCountAggregateOutputType> | number
          }
        }
      }
      MeetingReport: {
        payload: Prisma.$MeetingReportPayload<ExtArgs>
        fields: Prisma.MeetingReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingReportPayload>
          }
          findFirst: {
            args: Prisma.MeetingReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingReportPayload>
          }
          findMany: {
            args: Prisma.MeetingReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingReportPayload>[]
          }
          create: {
            args: Prisma.MeetingReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingReportPayload>
          }
          createMany: {
            args: Prisma.MeetingReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingReportPayload>[]
          }
          delete: {
            args: Prisma.MeetingReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingReportPayload>
          }
          update: {
            args: Prisma.MeetingReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingReportPayload>
          }
          deleteMany: {
            args: Prisma.MeetingReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MeetingReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingReportPayload>
          }
          aggregate: {
            args: Prisma.MeetingReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingReport>
          }
          groupBy: {
            args: Prisma.MeetingReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingReportCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingReportCountAggregateOutputType> | number
          }
        }
      }
      DailyReport: {
        payload: Prisma.$DailyReportPayload<ExtArgs>
        fields: Prisma.DailyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findFirst: {
            args: Prisma.DailyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findMany: {
            args: Prisma.DailyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          create: {
            args: Prisma.DailyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          createMany: {
            args: Prisma.DailyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          delete: {
            args: Prisma.DailyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          update: {
            args: Prisma.DailyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          deleteMany: {
            args: Prisma.DailyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          aggregate: {
            args: Prisma.DailyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyReport>
          }
          groupBy: {
            args: Prisma.DailyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyReportCountArgs<ExtArgs>
            result: $Utils.Optional<DailyReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    dailyReports: number
    meetingReports: number
    webhooks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyReports?: boolean | UserCountOutputTypeCountDailyReportsArgs
    meetingReports?: boolean | UserCountOutputTypeCountMeetingReportsArgs
    webhooks?: boolean | UserCountOutputTypeCountWebhooksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeetingReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWebhooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomingWebhookWhereInput
  }


  /**
   * Count Type IncomingWebhookCountOutputType
   */

  export type IncomingWebhookCountOutputType = {
    messageTemplates: number
  }

  export type IncomingWebhookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messageTemplates?: boolean | IncomingWebhookCountOutputTypeCountMessageTemplatesArgs
  }

  // Custom InputTypes
  /**
   * IncomingWebhookCountOutputType without action
   */
  export type IncomingWebhookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhookCountOutputType
     */
    select?: IncomingWebhookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IncomingWebhookCountOutputType without action
   */
  export type IncomingWebhookCountOutputTypeCountMessageTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageTemplateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dailyReports?: boolean | User$dailyReportsArgs<ExtArgs>
    meetingReports?: boolean | User$meetingReportsArgs<ExtArgs>
    webhooks?: boolean | User$webhooksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyReports?: boolean | User$dailyReportsArgs<ExtArgs>
    meetingReports?: boolean | User$meetingReportsArgs<ExtArgs>
    webhooks?: boolean | User$webhooksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      dailyReports: Prisma.$DailyReportPayload<ExtArgs>[]
      meetingReports: Prisma.$MeetingReportPayload<ExtArgs>[]
      webhooks: Prisma.$IncomingWebhookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyReports<T extends User$dailyReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany"> | Null>
    meetingReports<T extends User$meetingReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$meetingReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingReportPayload<ExtArgs>, T, "findMany"> | Null>
    webhooks<T extends User$webhooksArgs<ExtArgs> = {}>(args?: Subset<T, User$webhooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomingWebhookPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.dailyReports
   */
  export type User$dailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    cursor?: DailyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * User.meetingReports
   */
  export type User$meetingReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingReport
     */
    select?: MeetingReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingReportInclude<ExtArgs> | null
    where?: MeetingReportWhereInput
    orderBy?: MeetingReportOrderByWithRelationInput | MeetingReportOrderByWithRelationInput[]
    cursor?: MeetingReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingReportScalarFieldEnum | MeetingReportScalarFieldEnum[]
  }

  /**
   * User.webhooks
   */
  export type User$webhooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhook
     */
    select?: IncomingWebhookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingWebhookInclude<ExtArgs> | null
    where?: IncomingWebhookWhereInput
    orderBy?: IncomingWebhookOrderByWithRelationInput | IncomingWebhookOrderByWithRelationInput[]
    cursor?: IncomingWebhookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomingWebhookScalarFieldEnum | IncomingWebhookScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model IncomingWebhook
   */

  export type AggregateIncomingWebhook = {
    _count: IncomingWebhookCountAggregateOutputType | null
    _min: IncomingWebhookMinAggregateOutputType | null
    _max: IncomingWebhookMaxAggregateOutputType | null
  }

  export type IncomingWebhookMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    status: $Enums.WebhookStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type IncomingWebhookMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    status: $Enums.WebhookStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type IncomingWebhookCountAggregateOutputType = {
    id: number
    name: number
    url: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type IncomingWebhookMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type IncomingWebhookMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type IncomingWebhookCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type IncomingWebhookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncomingWebhook to aggregate.
     */
    where?: IncomingWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomingWebhooks to fetch.
     */
    orderBy?: IncomingWebhookOrderByWithRelationInput | IncomingWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncomingWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomingWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomingWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncomingWebhooks
    **/
    _count?: true | IncomingWebhookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncomingWebhookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncomingWebhookMaxAggregateInputType
  }

  export type GetIncomingWebhookAggregateType<T extends IncomingWebhookAggregateArgs> = {
        [P in keyof T & keyof AggregateIncomingWebhook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncomingWebhook[P]>
      : GetScalarType<T[P], AggregateIncomingWebhook[P]>
  }




  export type IncomingWebhookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomingWebhookWhereInput
    orderBy?: IncomingWebhookOrderByWithAggregationInput | IncomingWebhookOrderByWithAggregationInput[]
    by: IncomingWebhookScalarFieldEnum[] | IncomingWebhookScalarFieldEnum
    having?: IncomingWebhookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncomingWebhookCountAggregateInputType | true
    _min?: IncomingWebhookMinAggregateInputType
    _max?: IncomingWebhookMaxAggregateInputType
  }

  export type IncomingWebhookGroupByOutputType = {
    id: string
    name: string
    url: string
    status: $Enums.WebhookStatus
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: IncomingWebhookCountAggregateOutputType | null
    _min: IncomingWebhookMinAggregateOutputType | null
    _max: IncomingWebhookMaxAggregateOutputType | null
  }

  type GetIncomingWebhookGroupByPayload<T extends IncomingWebhookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncomingWebhookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncomingWebhookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncomingWebhookGroupByOutputType[P]>
            : GetScalarType<T[P], IncomingWebhookGroupByOutputType[P]>
        }
      >
    >


  export type IncomingWebhookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    messageTemplates?: boolean | IncomingWebhook$messageTemplatesArgs<ExtArgs>
    _count?: boolean | IncomingWebhookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incomingWebhook"]>

  export type IncomingWebhookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incomingWebhook"]>

  export type IncomingWebhookSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type IncomingWebhookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    messageTemplates?: boolean | IncomingWebhook$messageTemplatesArgs<ExtArgs>
    _count?: boolean | IncomingWebhookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IncomingWebhookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncomingWebhookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncomingWebhook"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      messageTemplates: Prisma.$MessageTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      status: $Enums.WebhookStatus
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["incomingWebhook"]>
    composites: {}
  }

  type IncomingWebhookGetPayload<S extends boolean | null | undefined | IncomingWebhookDefaultArgs> = $Result.GetResult<Prisma.$IncomingWebhookPayload, S>

  type IncomingWebhookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IncomingWebhookFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IncomingWebhookCountAggregateInputType | true
    }

  export interface IncomingWebhookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncomingWebhook'], meta: { name: 'IncomingWebhook' } }
    /**
     * Find zero or one IncomingWebhook that matches the filter.
     * @param {IncomingWebhookFindUniqueArgs} args - Arguments to find a IncomingWebhook
     * @example
     * // Get one IncomingWebhook
     * const incomingWebhook = await prisma.incomingWebhook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncomingWebhookFindUniqueArgs>(args: SelectSubset<T, IncomingWebhookFindUniqueArgs<ExtArgs>>): Prisma__IncomingWebhookClient<$Result.GetResult<Prisma.$IncomingWebhookPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IncomingWebhook that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IncomingWebhookFindUniqueOrThrowArgs} args - Arguments to find a IncomingWebhook
     * @example
     * // Get one IncomingWebhook
     * const incomingWebhook = await prisma.incomingWebhook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncomingWebhookFindUniqueOrThrowArgs>(args: SelectSubset<T, IncomingWebhookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncomingWebhookClient<$Result.GetResult<Prisma.$IncomingWebhookPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IncomingWebhook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingWebhookFindFirstArgs} args - Arguments to find a IncomingWebhook
     * @example
     * // Get one IncomingWebhook
     * const incomingWebhook = await prisma.incomingWebhook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncomingWebhookFindFirstArgs>(args?: SelectSubset<T, IncomingWebhookFindFirstArgs<ExtArgs>>): Prisma__IncomingWebhookClient<$Result.GetResult<Prisma.$IncomingWebhookPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IncomingWebhook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingWebhookFindFirstOrThrowArgs} args - Arguments to find a IncomingWebhook
     * @example
     * // Get one IncomingWebhook
     * const incomingWebhook = await prisma.incomingWebhook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncomingWebhookFindFirstOrThrowArgs>(args?: SelectSubset<T, IncomingWebhookFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncomingWebhookClient<$Result.GetResult<Prisma.$IncomingWebhookPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IncomingWebhooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingWebhookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncomingWebhooks
     * const incomingWebhooks = await prisma.incomingWebhook.findMany()
     * 
     * // Get first 10 IncomingWebhooks
     * const incomingWebhooks = await prisma.incomingWebhook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incomingWebhookWithIdOnly = await prisma.incomingWebhook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncomingWebhookFindManyArgs>(args?: SelectSubset<T, IncomingWebhookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomingWebhookPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IncomingWebhook.
     * @param {IncomingWebhookCreateArgs} args - Arguments to create a IncomingWebhook.
     * @example
     * // Create one IncomingWebhook
     * const IncomingWebhook = await prisma.incomingWebhook.create({
     *   data: {
     *     // ... data to create a IncomingWebhook
     *   }
     * })
     * 
     */
    create<T extends IncomingWebhookCreateArgs>(args: SelectSubset<T, IncomingWebhookCreateArgs<ExtArgs>>): Prisma__IncomingWebhookClient<$Result.GetResult<Prisma.$IncomingWebhookPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IncomingWebhooks.
     * @param {IncomingWebhookCreateManyArgs} args - Arguments to create many IncomingWebhooks.
     * @example
     * // Create many IncomingWebhooks
     * const incomingWebhook = await prisma.incomingWebhook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncomingWebhookCreateManyArgs>(args?: SelectSubset<T, IncomingWebhookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncomingWebhooks and returns the data saved in the database.
     * @param {IncomingWebhookCreateManyAndReturnArgs} args - Arguments to create many IncomingWebhooks.
     * @example
     * // Create many IncomingWebhooks
     * const incomingWebhook = await prisma.incomingWebhook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncomingWebhooks and only return the `id`
     * const incomingWebhookWithIdOnly = await prisma.incomingWebhook.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncomingWebhookCreateManyAndReturnArgs>(args?: SelectSubset<T, IncomingWebhookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomingWebhookPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IncomingWebhook.
     * @param {IncomingWebhookDeleteArgs} args - Arguments to delete one IncomingWebhook.
     * @example
     * // Delete one IncomingWebhook
     * const IncomingWebhook = await prisma.incomingWebhook.delete({
     *   where: {
     *     // ... filter to delete one IncomingWebhook
     *   }
     * })
     * 
     */
    delete<T extends IncomingWebhookDeleteArgs>(args: SelectSubset<T, IncomingWebhookDeleteArgs<ExtArgs>>): Prisma__IncomingWebhookClient<$Result.GetResult<Prisma.$IncomingWebhookPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IncomingWebhook.
     * @param {IncomingWebhookUpdateArgs} args - Arguments to update one IncomingWebhook.
     * @example
     * // Update one IncomingWebhook
     * const incomingWebhook = await prisma.incomingWebhook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncomingWebhookUpdateArgs>(args: SelectSubset<T, IncomingWebhookUpdateArgs<ExtArgs>>): Prisma__IncomingWebhookClient<$Result.GetResult<Prisma.$IncomingWebhookPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IncomingWebhooks.
     * @param {IncomingWebhookDeleteManyArgs} args - Arguments to filter IncomingWebhooks to delete.
     * @example
     * // Delete a few IncomingWebhooks
     * const { count } = await prisma.incomingWebhook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncomingWebhookDeleteManyArgs>(args?: SelectSubset<T, IncomingWebhookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncomingWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingWebhookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncomingWebhooks
     * const incomingWebhook = await prisma.incomingWebhook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncomingWebhookUpdateManyArgs>(args: SelectSubset<T, IncomingWebhookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IncomingWebhook.
     * @param {IncomingWebhookUpsertArgs} args - Arguments to update or create a IncomingWebhook.
     * @example
     * // Update or create a IncomingWebhook
     * const incomingWebhook = await prisma.incomingWebhook.upsert({
     *   create: {
     *     // ... data to create a IncomingWebhook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncomingWebhook we want to update
     *   }
     * })
     */
    upsert<T extends IncomingWebhookUpsertArgs>(args: SelectSubset<T, IncomingWebhookUpsertArgs<ExtArgs>>): Prisma__IncomingWebhookClient<$Result.GetResult<Prisma.$IncomingWebhookPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IncomingWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingWebhookCountArgs} args - Arguments to filter IncomingWebhooks to count.
     * @example
     * // Count the number of IncomingWebhooks
     * const count = await prisma.incomingWebhook.count({
     *   where: {
     *     // ... the filter for the IncomingWebhooks we want to count
     *   }
     * })
    **/
    count<T extends IncomingWebhookCountArgs>(
      args?: Subset<T, IncomingWebhookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncomingWebhookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncomingWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingWebhookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncomingWebhookAggregateArgs>(args: Subset<T, IncomingWebhookAggregateArgs>): Prisma.PrismaPromise<GetIncomingWebhookAggregateType<T>>

    /**
     * Group by IncomingWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomingWebhookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncomingWebhookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncomingWebhookGroupByArgs['orderBy'] }
        : { orderBy?: IncomingWebhookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncomingWebhookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomingWebhookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncomingWebhook model
   */
  readonly fields: IncomingWebhookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncomingWebhook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncomingWebhookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    messageTemplates<T extends IncomingWebhook$messageTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, IncomingWebhook$messageTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IncomingWebhook model
   */ 
  interface IncomingWebhookFieldRefs {
    readonly id: FieldRef<"IncomingWebhook", 'String'>
    readonly name: FieldRef<"IncomingWebhook", 'String'>
    readonly url: FieldRef<"IncomingWebhook", 'String'>
    readonly status: FieldRef<"IncomingWebhook", 'WebhookStatus'>
    readonly createdAt: FieldRef<"IncomingWebhook", 'DateTime'>
    readonly updatedAt: FieldRef<"IncomingWebhook", 'DateTime'>
    readonly userId: FieldRef<"IncomingWebhook", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IncomingWebhook findUnique
   */
  export type IncomingWebhookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhook
     */
    select?: IncomingWebhookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingWebhookInclude<ExtArgs> | null
    /**
     * Filter, which IncomingWebhook to fetch.
     */
    where: IncomingWebhookWhereUniqueInput
  }

  /**
   * IncomingWebhook findUniqueOrThrow
   */
  export type IncomingWebhookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhook
     */
    select?: IncomingWebhookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingWebhookInclude<ExtArgs> | null
    /**
     * Filter, which IncomingWebhook to fetch.
     */
    where: IncomingWebhookWhereUniqueInput
  }

  /**
   * IncomingWebhook findFirst
   */
  export type IncomingWebhookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhook
     */
    select?: IncomingWebhookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingWebhookInclude<ExtArgs> | null
    /**
     * Filter, which IncomingWebhook to fetch.
     */
    where?: IncomingWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomingWebhooks to fetch.
     */
    orderBy?: IncomingWebhookOrderByWithRelationInput | IncomingWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncomingWebhooks.
     */
    cursor?: IncomingWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomingWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomingWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncomingWebhooks.
     */
    distinct?: IncomingWebhookScalarFieldEnum | IncomingWebhookScalarFieldEnum[]
  }

  /**
   * IncomingWebhook findFirstOrThrow
   */
  export type IncomingWebhookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhook
     */
    select?: IncomingWebhookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingWebhookInclude<ExtArgs> | null
    /**
     * Filter, which IncomingWebhook to fetch.
     */
    where?: IncomingWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomingWebhooks to fetch.
     */
    orderBy?: IncomingWebhookOrderByWithRelationInput | IncomingWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncomingWebhooks.
     */
    cursor?: IncomingWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomingWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomingWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncomingWebhooks.
     */
    distinct?: IncomingWebhookScalarFieldEnum | IncomingWebhookScalarFieldEnum[]
  }

  /**
   * IncomingWebhook findMany
   */
  export type IncomingWebhookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhook
     */
    select?: IncomingWebhookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingWebhookInclude<ExtArgs> | null
    /**
     * Filter, which IncomingWebhooks to fetch.
     */
    where?: IncomingWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomingWebhooks to fetch.
     */
    orderBy?: IncomingWebhookOrderByWithRelationInput | IncomingWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncomingWebhooks.
     */
    cursor?: IncomingWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomingWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomingWebhooks.
     */
    skip?: number
    distinct?: IncomingWebhookScalarFieldEnum | IncomingWebhookScalarFieldEnum[]
  }

  /**
   * IncomingWebhook create
   */
  export type IncomingWebhookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhook
     */
    select?: IncomingWebhookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingWebhookInclude<ExtArgs> | null
    /**
     * The data needed to create a IncomingWebhook.
     */
    data: XOR<IncomingWebhookCreateInput, IncomingWebhookUncheckedCreateInput>
  }

  /**
   * IncomingWebhook createMany
   */
  export type IncomingWebhookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncomingWebhooks.
     */
    data: IncomingWebhookCreateManyInput | IncomingWebhookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncomingWebhook createManyAndReturn
   */
  export type IncomingWebhookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhook
     */
    select?: IncomingWebhookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IncomingWebhooks.
     */
    data: IncomingWebhookCreateManyInput | IncomingWebhookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingWebhookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncomingWebhook update
   */
  export type IncomingWebhookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhook
     */
    select?: IncomingWebhookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingWebhookInclude<ExtArgs> | null
    /**
     * The data needed to update a IncomingWebhook.
     */
    data: XOR<IncomingWebhookUpdateInput, IncomingWebhookUncheckedUpdateInput>
    /**
     * Choose, which IncomingWebhook to update.
     */
    where: IncomingWebhookWhereUniqueInput
  }

  /**
   * IncomingWebhook updateMany
   */
  export type IncomingWebhookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncomingWebhooks.
     */
    data: XOR<IncomingWebhookUpdateManyMutationInput, IncomingWebhookUncheckedUpdateManyInput>
    /**
     * Filter which IncomingWebhooks to update
     */
    where?: IncomingWebhookWhereInput
  }

  /**
   * IncomingWebhook upsert
   */
  export type IncomingWebhookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhook
     */
    select?: IncomingWebhookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingWebhookInclude<ExtArgs> | null
    /**
     * The filter to search for the IncomingWebhook to update in case it exists.
     */
    where: IncomingWebhookWhereUniqueInput
    /**
     * In case the IncomingWebhook found by the `where` argument doesn't exist, create a new IncomingWebhook with this data.
     */
    create: XOR<IncomingWebhookCreateInput, IncomingWebhookUncheckedCreateInput>
    /**
     * In case the IncomingWebhook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncomingWebhookUpdateInput, IncomingWebhookUncheckedUpdateInput>
  }

  /**
   * IncomingWebhook delete
   */
  export type IncomingWebhookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhook
     */
    select?: IncomingWebhookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingWebhookInclude<ExtArgs> | null
    /**
     * Filter which IncomingWebhook to delete.
     */
    where: IncomingWebhookWhereUniqueInput
  }

  /**
   * IncomingWebhook deleteMany
   */
  export type IncomingWebhookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncomingWebhooks to delete
     */
    where?: IncomingWebhookWhereInput
  }

  /**
   * IncomingWebhook.messageTemplates
   */
  export type IncomingWebhook$messageTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    where?: MessageTemplateWhereInput
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    cursor?: MessageTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * IncomingWebhook without action
   */
  export type IncomingWebhookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomingWebhook
     */
    select?: IncomingWebhookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomingWebhookInclude<ExtArgs> | null
  }


  /**
   * Model MessageTemplate
   */

  export type AggregateMessageTemplate = {
    _count: MessageTemplateCountAggregateOutputType | null
    _min: MessageTemplateMinAggregateOutputType | null
    _max: MessageTemplateMaxAggregateOutputType | null
  }

  export type MessageTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    template: string | null
    createdAt: Date | null
    updatedAt: Date | null
    incomingWebhookId: string | null
  }

  export type MessageTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    template: string | null
    createdAt: Date | null
    updatedAt: Date | null
    incomingWebhookId: string | null
  }

  export type MessageTemplateCountAggregateOutputType = {
    id: number
    name: number
    template: number
    variables: number
    createdAt: number
    updatedAt: number
    incomingWebhookId: number
    _all: number
  }


  export type MessageTemplateMinAggregateInputType = {
    id?: true
    name?: true
    template?: true
    createdAt?: true
    updatedAt?: true
    incomingWebhookId?: true
  }

  export type MessageTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    template?: true
    createdAt?: true
    updatedAt?: true
    incomingWebhookId?: true
  }

  export type MessageTemplateCountAggregateInputType = {
    id?: true
    name?: true
    template?: true
    variables?: true
    createdAt?: true
    updatedAt?: true
    incomingWebhookId?: true
    _all?: true
  }

  export type MessageTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageTemplate to aggregate.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageTemplates
    **/
    _count?: true | MessageTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageTemplateMaxAggregateInputType
  }

  export type GetMessageTemplateAggregateType<T extends MessageTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageTemplate[P]>
      : GetScalarType<T[P], AggregateMessageTemplate[P]>
  }




  export type MessageTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageTemplateWhereInput
    orderBy?: MessageTemplateOrderByWithAggregationInput | MessageTemplateOrderByWithAggregationInput[]
    by: MessageTemplateScalarFieldEnum[] | MessageTemplateScalarFieldEnum
    having?: MessageTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageTemplateCountAggregateInputType | true
    _min?: MessageTemplateMinAggregateInputType
    _max?: MessageTemplateMaxAggregateInputType
  }

  export type MessageTemplateGroupByOutputType = {
    id: string
    name: string
    template: string
    variables: string[]
    createdAt: Date
    updatedAt: Date
    incomingWebhookId: string
    _count: MessageTemplateCountAggregateOutputType | null
    _min: MessageTemplateMinAggregateOutputType | null
    _max: MessageTemplateMaxAggregateOutputType | null
  }

  type GetMessageTemplateGroupByPayload<T extends MessageTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], MessageTemplateGroupByOutputType[P]>
        }
      >
    >


  export type MessageTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    template?: boolean
    variables?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incomingWebhookId?: boolean
    incomingWebhook?: boolean | IncomingWebhookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageTemplate"]>

  export type MessageTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    template?: boolean
    variables?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incomingWebhookId?: boolean
    incomingWebhook?: boolean | IncomingWebhookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageTemplate"]>

  export type MessageTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    template?: boolean
    variables?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incomingWebhookId?: boolean
  }

  export type MessageTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomingWebhook?: boolean | IncomingWebhookDefaultArgs<ExtArgs>
  }
  export type MessageTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomingWebhook?: boolean | IncomingWebhookDefaultArgs<ExtArgs>
  }

  export type $MessageTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageTemplate"
    objects: {
      incomingWebhook: Prisma.$IncomingWebhookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      template: string
      variables: string[]
      createdAt: Date
      updatedAt: Date
      incomingWebhookId: string
    }, ExtArgs["result"]["messageTemplate"]>
    composites: {}
  }

  type MessageTemplateGetPayload<S extends boolean | null | undefined | MessageTemplateDefaultArgs> = $Result.GetResult<Prisma.$MessageTemplatePayload, S>

  type MessageTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageTemplateCountAggregateInputType | true
    }

  export interface MessageTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageTemplate'], meta: { name: 'MessageTemplate' } }
    /**
     * Find zero or one MessageTemplate that matches the filter.
     * @param {MessageTemplateFindUniqueArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageTemplateFindUniqueArgs>(args: SelectSubset<T, MessageTemplateFindUniqueArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MessageTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessageTemplateFindUniqueOrThrowArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MessageTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateFindFirstArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageTemplateFindFirstArgs>(args?: SelectSubset<T, MessageTemplateFindFirstArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MessageTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateFindFirstOrThrowArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MessageTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageTemplates
     * const messageTemplates = await prisma.messageTemplate.findMany()
     * 
     * // Get first 10 MessageTemplates
     * const messageTemplates = await prisma.messageTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageTemplateWithIdOnly = await prisma.messageTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageTemplateFindManyArgs>(args?: SelectSubset<T, MessageTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MessageTemplate.
     * @param {MessageTemplateCreateArgs} args - Arguments to create a MessageTemplate.
     * @example
     * // Create one MessageTemplate
     * const MessageTemplate = await prisma.messageTemplate.create({
     *   data: {
     *     // ... data to create a MessageTemplate
     *   }
     * })
     * 
     */
    create<T extends MessageTemplateCreateArgs>(args: SelectSubset<T, MessageTemplateCreateArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MessageTemplates.
     * @param {MessageTemplateCreateManyArgs} args - Arguments to create many MessageTemplates.
     * @example
     * // Create many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageTemplateCreateManyArgs>(args?: SelectSubset<T, MessageTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageTemplates and returns the data saved in the database.
     * @param {MessageTemplateCreateManyAndReturnArgs} args - Arguments to create many MessageTemplates.
     * @example
     * // Create many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageTemplates and only return the `id`
     * const messageTemplateWithIdOnly = await prisma.messageTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MessageTemplate.
     * @param {MessageTemplateDeleteArgs} args - Arguments to delete one MessageTemplate.
     * @example
     * // Delete one MessageTemplate
     * const MessageTemplate = await prisma.messageTemplate.delete({
     *   where: {
     *     // ... filter to delete one MessageTemplate
     *   }
     * })
     * 
     */
    delete<T extends MessageTemplateDeleteArgs>(args: SelectSubset<T, MessageTemplateDeleteArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MessageTemplate.
     * @param {MessageTemplateUpdateArgs} args - Arguments to update one MessageTemplate.
     * @example
     * // Update one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageTemplateUpdateArgs>(args: SelectSubset<T, MessageTemplateUpdateArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MessageTemplates.
     * @param {MessageTemplateDeleteManyArgs} args - Arguments to filter MessageTemplates to delete.
     * @example
     * // Delete a few MessageTemplates
     * const { count } = await prisma.messageTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageTemplateDeleteManyArgs>(args?: SelectSubset<T, MessageTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageTemplateUpdateManyArgs>(args: SelectSubset<T, MessageTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MessageTemplate.
     * @param {MessageTemplateUpsertArgs} args - Arguments to update or create a MessageTemplate.
     * @example
     * // Update or create a MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.upsert({
     *   create: {
     *     // ... data to create a MessageTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageTemplate we want to update
     *   }
     * })
     */
    upsert<T extends MessageTemplateUpsertArgs>(args: SelectSubset<T, MessageTemplateUpsertArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MessageTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateCountArgs} args - Arguments to filter MessageTemplates to count.
     * @example
     * // Count the number of MessageTemplates
     * const count = await prisma.messageTemplate.count({
     *   where: {
     *     // ... the filter for the MessageTemplates we want to count
     *   }
     * })
    **/
    count<T extends MessageTemplateCountArgs>(
      args?: Subset<T, MessageTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageTemplateAggregateArgs>(args: Subset<T, MessageTemplateAggregateArgs>): Prisma.PrismaPromise<GetMessageTemplateAggregateType<T>>

    /**
     * Group by MessageTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageTemplateGroupByArgs['orderBy'] }
        : { orderBy?: MessageTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageTemplate model
   */
  readonly fields: MessageTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incomingWebhook<T extends IncomingWebhookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncomingWebhookDefaultArgs<ExtArgs>>): Prisma__IncomingWebhookClient<$Result.GetResult<Prisma.$IncomingWebhookPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageTemplate model
   */ 
  interface MessageTemplateFieldRefs {
    readonly id: FieldRef<"MessageTemplate", 'String'>
    readonly name: FieldRef<"MessageTemplate", 'String'>
    readonly template: FieldRef<"MessageTemplate", 'String'>
    readonly variables: FieldRef<"MessageTemplate", 'String[]'>
    readonly createdAt: FieldRef<"MessageTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageTemplate", 'DateTime'>
    readonly incomingWebhookId: FieldRef<"MessageTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MessageTemplate findUnique
   */
  export type MessageTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate findUniqueOrThrow
   */
  export type MessageTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate findFirst
   */
  export type MessageTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageTemplates.
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageTemplates.
     */
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * MessageTemplate findFirstOrThrow
   */
  export type MessageTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageTemplates.
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageTemplates.
     */
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * MessageTemplate findMany
   */
  export type MessageTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplates to fetch.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageTemplates.
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * MessageTemplate create
   */
  export type MessageTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageTemplate.
     */
    data: XOR<MessageTemplateCreateInput, MessageTemplateUncheckedCreateInput>
  }

  /**
   * MessageTemplate createMany
   */
  export type MessageTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageTemplates.
     */
    data: MessageTemplateCreateManyInput | MessageTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageTemplate createManyAndReturn
   */
  export type MessageTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MessageTemplates.
     */
    data: MessageTemplateCreateManyInput | MessageTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageTemplate update
   */
  export type MessageTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageTemplate.
     */
    data: XOR<MessageTemplateUpdateInput, MessageTemplateUncheckedUpdateInput>
    /**
     * Choose, which MessageTemplate to update.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate updateMany
   */
  export type MessageTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageTemplates.
     */
    data: XOR<MessageTemplateUpdateManyMutationInput, MessageTemplateUncheckedUpdateManyInput>
    /**
     * Filter which MessageTemplates to update
     */
    where?: MessageTemplateWhereInput
  }

  /**
   * MessageTemplate upsert
   */
  export type MessageTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageTemplate to update in case it exists.
     */
    where: MessageTemplateWhereUniqueInput
    /**
     * In case the MessageTemplate found by the `where` argument doesn't exist, create a new MessageTemplate with this data.
     */
    create: XOR<MessageTemplateCreateInput, MessageTemplateUncheckedCreateInput>
    /**
     * In case the MessageTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageTemplateUpdateInput, MessageTemplateUncheckedUpdateInput>
  }

  /**
   * MessageTemplate delete
   */
  export type MessageTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter which MessageTemplate to delete.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate deleteMany
   */
  export type MessageTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageTemplates to delete
     */
    where?: MessageTemplateWhereInput
  }

  /**
   * MessageTemplate without action
   */
  export type MessageTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
  }


  /**
   * Model SupportPlatform
   */

  export type AggregateSupportPlatform = {
    _count: SupportPlatformCountAggregateOutputType | null
    _min: SupportPlatformMinAggregateOutputType | null
    _max: SupportPlatformMaxAggregateOutputType | null
  }

  export type SupportPlatformMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportPlatformMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportPlatformCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupportPlatformMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportPlatformMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportPlatformCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupportPlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportPlatform to aggregate.
     */
    where?: SupportPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportPlatforms to fetch.
     */
    orderBy?: SupportPlatformOrderByWithRelationInput | SupportPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportPlatforms
    **/
    _count?: true | SupportPlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportPlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportPlatformMaxAggregateInputType
  }

  export type GetSupportPlatformAggregateType<T extends SupportPlatformAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportPlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportPlatform[P]>
      : GetScalarType<T[P], AggregateSupportPlatform[P]>
  }




  export type SupportPlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportPlatformWhereInput
    orderBy?: SupportPlatformOrderByWithAggregationInput | SupportPlatformOrderByWithAggregationInput[]
    by: SupportPlatformScalarFieldEnum[] | SupportPlatformScalarFieldEnum
    having?: SupportPlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportPlatformCountAggregateInputType | true
    _min?: SupportPlatformMinAggregateInputType
    _max?: SupportPlatformMaxAggregateInputType
  }

  export type SupportPlatformGroupByOutputType = {
    id: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SupportPlatformCountAggregateOutputType | null
    _min: SupportPlatformMinAggregateOutputType | null
    _max: SupportPlatformMaxAggregateOutputType | null
  }

  type GetSupportPlatformGroupByPayload<T extends SupportPlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportPlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportPlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportPlatformGroupByOutputType[P]>
            : GetScalarType<T[P], SupportPlatformGroupByOutputType[P]>
        }
      >
    >


  export type SupportPlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supportPlatform"]>

  export type SupportPlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supportPlatform"]>

  export type SupportPlatformSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SupportPlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportPlatform"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supportPlatform"]>
    composites: {}
  }

  type SupportPlatformGetPayload<S extends boolean | null | undefined | SupportPlatformDefaultArgs> = $Result.GetResult<Prisma.$SupportPlatformPayload, S>

  type SupportPlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupportPlatformFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupportPlatformCountAggregateInputType | true
    }

  export interface SupportPlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportPlatform'], meta: { name: 'SupportPlatform' } }
    /**
     * Find zero or one SupportPlatform that matches the filter.
     * @param {SupportPlatformFindUniqueArgs} args - Arguments to find a SupportPlatform
     * @example
     * // Get one SupportPlatform
     * const supportPlatform = await prisma.supportPlatform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportPlatformFindUniqueArgs>(args: SelectSubset<T, SupportPlatformFindUniqueArgs<ExtArgs>>): Prisma__SupportPlatformClient<$Result.GetResult<Prisma.$SupportPlatformPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupportPlatform that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupportPlatformFindUniqueOrThrowArgs} args - Arguments to find a SupportPlatform
     * @example
     * // Get one SupportPlatform
     * const supportPlatform = await prisma.supportPlatform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportPlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportPlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportPlatformClient<$Result.GetResult<Prisma.$SupportPlatformPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupportPlatform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportPlatformFindFirstArgs} args - Arguments to find a SupportPlatform
     * @example
     * // Get one SupportPlatform
     * const supportPlatform = await prisma.supportPlatform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportPlatformFindFirstArgs>(args?: SelectSubset<T, SupportPlatformFindFirstArgs<ExtArgs>>): Prisma__SupportPlatformClient<$Result.GetResult<Prisma.$SupportPlatformPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupportPlatform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportPlatformFindFirstOrThrowArgs} args - Arguments to find a SupportPlatform
     * @example
     * // Get one SupportPlatform
     * const supportPlatform = await prisma.supportPlatform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportPlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportPlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportPlatformClient<$Result.GetResult<Prisma.$SupportPlatformPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupportPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportPlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportPlatforms
     * const supportPlatforms = await prisma.supportPlatform.findMany()
     * 
     * // Get first 10 SupportPlatforms
     * const supportPlatforms = await prisma.supportPlatform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportPlatformWithIdOnly = await prisma.supportPlatform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportPlatformFindManyArgs>(args?: SelectSubset<T, SupportPlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportPlatformPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupportPlatform.
     * @param {SupportPlatformCreateArgs} args - Arguments to create a SupportPlatform.
     * @example
     * // Create one SupportPlatform
     * const SupportPlatform = await prisma.supportPlatform.create({
     *   data: {
     *     // ... data to create a SupportPlatform
     *   }
     * })
     * 
     */
    create<T extends SupportPlatformCreateArgs>(args: SelectSubset<T, SupportPlatformCreateArgs<ExtArgs>>): Prisma__SupportPlatformClient<$Result.GetResult<Prisma.$SupportPlatformPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupportPlatforms.
     * @param {SupportPlatformCreateManyArgs} args - Arguments to create many SupportPlatforms.
     * @example
     * // Create many SupportPlatforms
     * const supportPlatform = await prisma.supportPlatform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportPlatformCreateManyArgs>(args?: SelectSubset<T, SupportPlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportPlatforms and returns the data saved in the database.
     * @param {SupportPlatformCreateManyAndReturnArgs} args - Arguments to create many SupportPlatforms.
     * @example
     * // Create many SupportPlatforms
     * const supportPlatform = await prisma.supportPlatform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportPlatforms and only return the `id`
     * const supportPlatformWithIdOnly = await prisma.supportPlatform.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportPlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportPlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportPlatformPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupportPlatform.
     * @param {SupportPlatformDeleteArgs} args - Arguments to delete one SupportPlatform.
     * @example
     * // Delete one SupportPlatform
     * const SupportPlatform = await prisma.supportPlatform.delete({
     *   where: {
     *     // ... filter to delete one SupportPlatform
     *   }
     * })
     * 
     */
    delete<T extends SupportPlatformDeleteArgs>(args: SelectSubset<T, SupportPlatformDeleteArgs<ExtArgs>>): Prisma__SupportPlatformClient<$Result.GetResult<Prisma.$SupportPlatformPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupportPlatform.
     * @param {SupportPlatformUpdateArgs} args - Arguments to update one SupportPlatform.
     * @example
     * // Update one SupportPlatform
     * const supportPlatform = await prisma.supportPlatform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportPlatformUpdateArgs>(args: SelectSubset<T, SupportPlatformUpdateArgs<ExtArgs>>): Prisma__SupportPlatformClient<$Result.GetResult<Prisma.$SupportPlatformPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupportPlatforms.
     * @param {SupportPlatformDeleteManyArgs} args - Arguments to filter SupportPlatforms to delete.
     * @example
     * // Delete a few SupportPlatforms
     * const { count } = await prisma.supportPlatform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportPlatformDeleteManyArgs>(args?: SelectSubset<T, SupportPlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportPlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportPlatforms
     * const supportPlatform = await prisma.supportPlatform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportPlatformUpdateManyArgs>(args: SelectSubset<T, SupportPlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupportPlatform.
     * @param {SupportPlatformUpsertArgs} args - Arguments to update or create a SupportPlatform.
     * @example
     * // Update or create a SupportPlatform
     * const supportPlatform = await prisma.supportPlatform.upsert({
     *   create: {
     *     // ... data to create a SupportPlatform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportPlatform we want to update
     *   }
     * })
     */
    upsert<T extends SupportPlatformUpsertArgs>(args: SelectSubset<T, SupportPlatformUpsertArgs<ExtArgs>>): Prisma__SupportPlatformClient<$Result.GetResult<Prisma.$SupportPlatformPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupportPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportPlatformCountArgs} args - Arguments to filter SupportPlatforms to count.
     * @example
     * // Count the number of SupportPlatforms
     * const count = await prisma.supportPlatform.count({
     *   where: {
     *     // ... the filter for the SupportPlatforms we want to count
     *   }
     * })
    **/
    count<T extends SupportPlatformCountArgs>(
      args?: Subset<T, SupportPlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportPlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportPlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupportPlatformAggregateArgs>(args: Subset<T, SupportPlatformAggregateArgs>): Prisma.PrismaPromise<GetSupportPlatformAggregateType<T>>

    /**
     * Group by SupportPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportPlatformGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupportPlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportPlatformGroupByArgs['orderBy'] }
        : { orderBy?: SupportPlatformGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupportPlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportPlatform model
   */
  readonly fields: SupportPlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportPlatform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportPlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupportPlatform model
   */ 
  interface SupportPlatformFieldRefs {
    readonly id: FieldRef<"SupportPlatform", 'String'>
    readonly name: FieldRef<"SupportPlatform", 'String'>
    readonly isActive: FieldRef<"SupportPlatform", 'Boolean'>
    readonly createdAt: FieldRef<"SupportPlatform", 'DateTime'>
    readonly updatedAt: FieldRef<"SupportPlatform", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportPlatform findUnique
   */
  export type SupportPlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportPlatform
     */
    select?: SupportPlatformSelect<ExtArgs> | null
    /**
     * Filter, which SupportPlatform to fetch.
     */
    where: SupportPlatformWhereUniqueInput
  }

  /**
   * SupportPlatform findUniqueOrThrow
   */
  export type SupportPlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportPlatform
     */
    select?: SupportPlatformSelect<ExtArgs> | null
    /**
     * Filter, which SupportPlatform to fetch.
     */
    where: SupportPlatformWhereUniqueInput
  }

  /**
   * SupportPlatform findFirst
   */
  export type SupportPlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportPlatform
     */
    select?: SupportPlatformSelect<ExtArgs> | null
    /**
     * Filter, which SupportPlatform to fetch.
     */
    where?: SupportPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportPlatforms to fetch.
     */
    orderBy?: SupportPlatformOrderByWithRelationInput | SupportPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportPlatforms.
     */
    cursor?: SupportPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportPlatforms.
     */
    distinct?: SupportPlatformScalarFieldEnum | SupportPlatformScalarFieldEnum[]
  }

  /**
   * SupportPlatform findFirstOrThrow
   */
  export type SupportPlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportPlatform
     */
    select?: SupportPlatformSelect<ExtArgs> | null
    /**
     * Filter, which SupportPlatform to fetch.
     */
    where?: SupportPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportPlatforms to fetch.
     */
    orderBy?: SupportPlatformOrderByWithRelationInput | SupportPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportPlatforms.
     */
    cursor?: SupportPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportPlatforms.
     */
    distinct?: SupportPlatformScalarFieldEnum | SupportPlatformScalarFieldEnum[]
  }

  /**
   * SupportPlatform findMany
   */
  export type SupportPlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportPlatform
     */
    select?: SupportPlatformSelect<ExtArgs> | null
    /**
     * Filter, which SupportPlatforms to fetch.
     */
    where?: SupportPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportPlatforms to fetch.
     */
    orderBy?: SupportPlatformOrderByWithRelationInput | SupportPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportPlatforms.
     */
    cursor?: SupportPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportPlatforms.
     */
    skip?: number
    distinct?: SupportPlatformScalarFieldEnum | SupportPlatformScalarFieldEnum[]
  }

  /**
   * SupportPlatform create
   */
  export type SupportPlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportPlatform
     */
    select?: SupportPlatformSelect<ExtArgs> | null
    /**
     * The data needed to create a SupportPlatform.
     */
    data: XOR<SupportPlatformCreateInput, SupportPlatformUncheckedCreateInput>
  }

  /**
   * SupportPlatform createMany
   */
  export type SupportPlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportPlatforms.
     */
    data: SupportPlatformCreateManyInput | SupportPlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportPlatform createManyAndReturn
   */
  export type SupportPlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportPlatform
     */
    select?: SupportPlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupportPlatforms.
     */
    data: SupportPlatformCreateManyInput | SupportPlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportPlatform update
   */
  export type SupportPlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportPlatform
     */
    select?: SupportPlatformSelect<ExtArgs> | null
    /**
     * The data needed to update a SupportPlatform.
     */
    data: XOR<SupportPlatformUpdateInput, SupportPlatformUncheckedUpdateInput>
    /**
     * Choose, which SupportPlatform to update.
     */
    where: SupportPlatformWhereUniqueInput
  }

  /**
   * SupportPlatform updateMany
   */
  export type SupportPlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportPlatforms.
     */
    data: XOR<SupportPlatformUpdateManyMutationInput, SupportPlatformUncheckedUpdateManyInput>
    /**
     * Filter which SupportPlatforms to update
     */
    where?: SupportPlatformWhereInput
  }

  /**
   * SupportPlatform upsert
   */
  export type SupportPlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportPlatform
     */
    select?: SupportPlatformSelect<ExtArgs> | null
    /**
     * The filter to search for the SupportPlatform to update in case it exists.
     */
    where: SupportPlatformWhereUniqueInput
    /**
     * In case the SupportPlatform found by the `where` argument doesn't exist, create a new SupportPlatform with this data.
     */
    create: XOR<SupportPlatformCreateInput, SupportPlatformUncheckedCreateInput>
    /**
     * In case the SupportPlatform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportPlatformUpdateInput, SupportPlatformUncheckedUpdateInput>
  }

  /**
   * SupportPlatform delete
   */
  export type SupportPlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportPlatform
     */
    select?: SupportPlatformSelect<ExtArgs> | null
    /**
     * Filter which SupportPlatform to delete.
     */
    where: SupportPlatformWhereUniqueInput
  }

  /**
   * SupportPlatform deleteMany
   */
  export type SupportPlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportPlatforms to delete
     */
    where?: SupportPlatformWhereInput
  }

  /**
   * SupportPlatform without action
   */
  export type SupportPlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportPlatform
     */
    select?: SupportPlatformSelect<ExtArgs> | null
  }


  /**
   * Model MeetingReport
   */

  export type AggregateMeetingReport = {
    _count: MeetingReportCountAggregateOutputType | null
    _min: MeetingReportMinAggregateOutputType | null
    _max: MeetingReportMaxAggregateOutputType | null
  }

  export type MeetingReportMinAggregateOutputType = {
    id: string | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    outcome: $Enums.MeetingOutcome | null
    notes: string | null
    customerName: string | null
    customerEmail: string | null
    hostId: string | null
    isAssigned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MeetingReportMaxAggregateOutputType = {
    id: string | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    outcome: $Enums.MeetingOutcome | null
    notes: string | null
    customerName: string | null
    customerEmail: string | null
    hostId: string | null
    isAssigned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MeetingReportCountAggregateOutputType = {
    id: number
    title: number
    startTime: number
    endTime: number
    outcome: number
    notes: number
    attendees: number
    actionItems: number
    customerName: number
    customerEmail: number
    hostId: number
    isAssigned: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type MeetingReportMinAggregateInputType = {
    id?: true
    title?: true
    startTime?: true
    endTime?: true
    outcome?: true
    notes?: true
    customerName?: true
    customerEmail?: true
    hostId?: true
    isAssigned?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MeetingReportMaxAggregateInputType = {
    id?: true
    title?: true
    startTime?: true
    endTime?: true
    outcome?: true
    notes?: true
    customerName?: true
    customerEmail?: true
    hostId?: true
    isAssigned?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MeetingReportCountAggregateInputType = {
    id?: true
    title?: true
    startTime?: true
    endTime?: true
    outcome?: true
    notes?: true
    attendees?: true
    actionItems?: true
    customerName?: true
    customerEmail?: true
    hostId?: true
    isAssigned?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type MeetingReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingReport to aggregate.
     */
    where?: MeetingReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingReports to fetch.
     */
    orderBy?: MeetingReportOrderByWithRelationInput | MeetingReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeetingReports
    **/
    _count?: true | MeetingReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingReportMaxAggregateInputType
  }

  export type GetMeetingReportAggregateType<T extends MeetingReportAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingReport[P]>
      : GetScalarType<T[P], AggregateMeetingReport[P]>
  }




  export type MeetingReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingReportWhereInput
    orderBy?: MeetingReportOrderByWithAggregationInput | MeetingReportOrderByWithAggregationInput[]
    by: MeetingReportScalarFieldEnum[] | MeetingReportScalarFieldEnum
    having?: MeetingReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingReportCountAggregateInputType | true
    _min?: MeetingReportMinAggregateInputType
    _max?: MeetingReportMaxAggregateInputType
  }

  export type MeetingReportGroupByOutputType = {
    id: string
    title: string
    startTime: Date
    endTime: Date | null
    outcome: $Enums.MeetingOutcome
    notes: string | null
    attendees: string[]
    actionItems: string[]
    customerName: string | null
    customerEmail: string | null
    hostId: string | null
    isAssigned: boolean
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: MeetingReportCountAggregateOutputType | null
    _min: MeetingReportMinAggregateOutputType | null
    _max: MeetingReportMaxAggregateOutputType | null
  }

  type GetMeetingReportGroupByPayload<T extends MeetingReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingReportGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingReportGroupByOutputType[P]>
        }
      >
    >


  export type MeetingReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    outcome?: boolean
    notes?: boolean
    attendees?: boolean
    actionItems?: boolean
    customerName?: boolean
    customerEmail?: boolean
    hostId?: boolean
    isAssigned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | MeetingReport$userArgs<ExtArgs>
  }, ExtArgs["result"]["meetingReport"]>

  export type MeetingReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    outcome?: boolean
    notes?: boolean
    attendees?: boolean
    actionItems?: boolean
    customerName?: boolean
    customerEmail?: boolean
    hostId?: boolean
    isAssigned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | MeetingReport$userArgs<ExtArgs>
  }, ExtArgs["result"]["meetingReport"]>

  export type MeetingReportSelectScalar = {
    id?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    outcome?: boolean
    notes?: boolean
    attendees?: boolean
    actionItems?: boolean
    customerName?: boolean
    customerEmail?: boolean
    hostId?: boolean
    isAssigned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type MeetingReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MeetingReport$userArgs<ExtArgs>
  }
  export type MeetingReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MeetingReport$userArgs<ExtArgs>
  }

  export type $MeetingReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeetingReport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      startTime: Date
      endTime: Date | null
      outcome: $Enums.MeetingOutcome
      notes: string | null
      attendees: string[]
      actionItems: string[]
      customerName: string | null
      customerEmail: string | null
      hostId: string | null
      isAssigned: boolean
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["meetingReport"]>
    composites: {}
  }

  type MeetingReportGetPayload<S extends boolean | null | undefined | MeetingReportDefaultArgs> = $Result.GetResult<Prisma.$MeetingReportPayload, S>

  type MeetingReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MeetingReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MeetingReportCountAggregateInputType | true
    }

  export interface MeetingReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeetingReport'], meta: { name: 'MeetingReport' } }
    /**
     * Find zero or one MeetingReport that matches the filter.
     * @param {MeetingReportFindUniqueArgs} args - Arguments to find a MeetingReport
     * @example
     * // Get one MeetingReport
     * const meetingReport = await prisma.meetingReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingReportFindUniqueArgs>(args: SelectSubset<T, MeetingReportFindUniqueArgs<ExtArgs>>): Prisma__MeetingReportClient<$Result.GetResult<Prisma.$MeetingReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MeetingReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MeetingReportFindUniqueOrThrowArgs} args - Arguments to find a MeetingReport
     * @example
     * // Get one MeetingReport
     * const meetingReport = await prisma.meetingReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingReportFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingReportClient<$Result.GetResult<Prisma.$MeetingReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MeetingReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingReportFindFirstArgs} args - Arguments to find a MeetingReport
     * @example
     * // Get one MeetingReport
     * const meetingReport = await prisma.meetingReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingReportFindFirstArgs>(args?: SelectSubset<T, MeetingReportFindFirstArgs<ExtArgs>>): Prisma__MeetingReportClient<$Result.GetResult<Prisma.$MeetingReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MeetingReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingReportFindFirstOrThrowArgs} args - Arguments to find a MeetingReport
     * @example
     * // Get one MeetingReport
     * const meetingReport = await prisma.meetingReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingReportFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingReportClient<$Result.GetResult<Prisma.$MeetingReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MeetingReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeetingReports
     * const meetingReports = await prisma.meetingReport.findMany()
     * 
     * // Get first 10 MeetingReports
     * const meetingReports = await prisma.meetingReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingReportWithIdOnly = await prisma.meetingReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingReportFindManyArgs>(args?: SelectSubset<T, MeetingReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MeetingReport.
     * @param {MeetingReportCreateArgs} args - Arguments to create a MeetingReport.
     * @example
     * // Create one MeetingReport
     * const MeetingReport = await prisma.meetingReport.create({
     *   data: {
     *     // ... data to create a MeetingReport
     *   }
     * })
     * 
     */
    create<T extends MeetingReportCreateArgs>(args: SelectSubset<T, MeetingReportCreateArgs<ExtArgs>>): Prisma__MeetingReportClient<$Result.GetResult<Prisma.$MeetingReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MeetingReports.
     * @param {MeetingReportCreateManyArgs} args - Arguments to create many MeetingReports.
     * @example
     * // Create many MeetingReports
     * const meetingReport = await prisma.meetingReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingReportCreateManyArgs>(args?: SelectSubset<T, MeetingReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeetingReports and returns the data saved in the database.
     * @param {MeetingReportCreateManyAndReturnArgs} args - Arguments to create many MeetingReports.
     * @example
     * // Create many MeetingReports
     * const meetingReport = await prisma.meetingReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeetingReports and only return the `id`
     * const meetingReportWithIdOnly = await prisma.meetingReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingReportCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MeetingReport.
     * @param {MeetingReportDeleteArgs} args - Arguments to delete one MeetingReport.
     * @example
     * // Delete one MeetingReport
     * const MeetingReport = await prisma.meetingReport.delete({
     *   where: {
     *     // ... filter to delete one MeetingReport
     *   }
     * })
     * 
     */
    delete<T extends MeetingReportDeleteArgs>(args: SelectSubset<T, MeetingReportDeleteArgs<ExtArgs>>): Prisma__MeetingReportClient<$Result.GetResult<Prisma.$MeetingReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MeetingReport.
     * @param {MeetingReportUpdateArgs} args - Arguments to update one MeetingReport.
     * @example
     * // Update one MeetingReport
     * const meetingReport = await prisma.meetingReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingReportUpdateArgs>(args: SelectSubset<T, MeetingReportUpdateArgs<ExtArgs>>): Prisma__MeetingReportClient<$Result.GetResult<Prisma.$MeetingReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MeetingReports.
     * @param {MeetingReportDeleteManyArgs} args - Arguments to filter MeetingReports to delete.
     * @example
     * // Delete a few MeetingReports
     * const { count } = await prisma.meetingReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingReportDeleteManyArgs>(args?: SelectSubset<T, MeetingReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeetingReports
     * const meetingReport = await prisma.meetingReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingReportUpdateManyArgs>(args: SelectSubset<T, MeetingReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MeetingReport.
     * @param {MeetingReportUpsertArgs} args - Arguments to update or create a MeetingReport.
     * @example
     * // Update or create a MeetingReport
     * const meetingReport = await prisma.meetingReport.upsert({
     *   create: {
     *     // ... data to create a MeetingReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeetingReport we want to update
     *   }
     * })
     */
    upsert<T extends MeetingReportUpsertArgs>(args: SelectSubset<T, MeetingReportUpsertArgs<ExtArgs>>): Prisma__MeetingReportClient<$Result.GetResult<Prisma.$MeetingReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MeetingReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingReportCountArgs} args - Arguments to filter MeetingReports to count.
     * @example
     * // Count the number of MeetingReports
     * const count = await prisma.meetingReport.count({
     *   where: {
     *     // ... the filter for the MeetingReports we want to count
     *   }
     * })
    **/
    count<T extends MeetingReportCountArgs>(
      args?: Subset<T, MeetingReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeetingReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingReportAggregateArgs>(args: Subset<T, MeetingReportAggregateArgs>): Prisma.PrismaPromise<GetMeetingReportAggregateType<T>>

    /**
     * Group by MeetingReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingReportGroupByArgs['orderBy'] }
        : { orderBy?: MeetingReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeetingReport model
   */
  readonly fields: MeetingReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeetingReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends MeetingReport$userArgs<ExtArgs> = {}>(args?: Subset<T, MeetingReport$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MeetingReport model
   */ 
  interface MeetingReportFieldRefs {
    readonly id: FieldRef<"MeetingReport", 'String'>
    readonly title: FieldRef<"MeetingReport", 'String'>
    readonly startTime: FieldRef<"MeetingReport", 'DateTime'>
    readonly endTime: FieldRef<"MeetingReport", 'DateTime'>
    readonly outcome: FieldRef<"MeetingReport", 'MeetingOutcome'>
    readonly notes: FieldRef<"MeetingReport", 'String'>
    readonly attendees: FieldRef<"MeetingReport", 'String[]'>
    readonly actionItems: FieldRef<"MeetingReport", 'String[]'>
    readonly customerName: FieldRef<"MeetingReport", 'String'>
    readonly customerEmail: FieldRef<"MeetingReport", 'String'>
    readonly hostId: FieldRef<"MeetingReport", 'String'>
    readonly isAssigned: FieldRef<"MeetingReport", 'Boolean'>
    readonly createdAt: FieldRef<"MeetingReport", 'DateTime'>
    readonly updatedAt: FieldRef<"MeetingReport", 'DateTime'>
    readonly userId: FieldRef<"MeetingReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MeetingReport findUnique
   */
  export type MeetingReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingReport
     */
    select?: MeetingReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingReportInclude<ExtArgs> | null
    /**
     * Filter, which MeetingReport to fetch.
     */
    where: MeetingReportWhereUniqueInput
  }

  /**
   * MeetingReport findUniqueOrThrow
   */
  export type MeetingReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingReport
     */
    select?: MeetingReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingReportInclude<ExtArgs> | null
    /**
     * Filter, which MeetingReport to fetch.
     */
    where: MeetingReportWhereUniqueInput
  }

  /**
   * MeetingReport findFirst
   */
  export type MeetingReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingReport
     */
    select?: MeetingReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingReportInclude<ExtArgs> | null
    /**
     * Filter, which MeetingReport to fetch.
     */
    where?: MeetingReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingReports to fetch.
     */
    orderBy?: MeetingReportOrderByWithRelationInput | MeetingReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingReports.
     */
    cursor?: MeetingReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingReports.
     */
    distinct?: MeetingReportScalarFieldEnum | MeetingReportScalarFieldEnum[]
  }

  /**
   * MeetingReport findFirstOrThrow
   */
  export type MeetingReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingReport
     */
    select?: MeetingReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingReportInclude<ExtArgs> | null
    /**
     * Filter, which MeetingReport to fetch.
     */
    where?: MeetingReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingReports to fetch.
     */
    orderBy?: MeetingReportOrderByWithRelationInput | MeetingReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingReports.
     */
    cursor?: MeetingReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingReports.
     */
    distinct?: MeetingReportScalarFieldEnum | MeetingReportScalarFieldEnum[]
  }

  /**
   * MeetingReport findMany
   */
  export type MeetingReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingReport
     */
    select?: MeetingReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingReportInclude<ExtArgs> | null
    /**
     * Filter, which MeetingReports to fetch.
     */
    where?: MeetingReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingReports to fetch.
     */
    orderBy?: MeetingReportOrderByWithRelationInput | MeetingReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeetingReports.
     */
    cursor?: MeetingReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingReports.
     */
    skip?: number
    distinct?: MeetingReportScalarFieldEnum | MeetingReportScalarFieldEnum[]
  }

  /**
   * MeetingReport create
   */
  export type MeetingReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingReport
     */
    select?: MeetingReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingReportInclude<ExtArgs> | null
    /**
     * The data needed to create a MeetingReport.
     */
    data: XOR<MeetingReportCreateInput, MeetingReportUncheckedCreateInput>
  }

  /**
   * MeetingReport createMany
   */
  export type MeetingReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeetingReports.
     */
    data: MeetingReportCreateManyInput | MeetingReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeetingReport createManyAndReturn
   */
  export type MeetingReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingReport
     */
    select?: MeetingReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MeetingReports.
     */
    data: MeetingReportCreateManyInput | MeetingReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingReport update
   */
  export type MeetingReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingReport
     */
    select?: MeetingReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingReportInclude<ExtArgs> | null
    /**
     * The data needed to update a MeetingReport.
     */
    data: XOR<MeetingReportUpdateInput, MeetingReportUncheckedUpdateInput>
    /**
     * Choose, which MeetingReport to update.
     */
    where: MeetingReportWhereUniqueInput
  }

  /**
   * MeetingReport updateMany
   */
  export type MeetingReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeetingReports.
     */
    data: XOR<MeetingReportUpdateManyMutationInput, MeetingReportUncheckedUpdateManyInput>
    /**
     * Filter which MeetingReports to update
     */
    where?: MeetingReportWhereInput
  }

  /**
   * MeetingReport upsert
   */
  export type MeetingReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingReport
     */
    select?: MeetingReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingReportInclude<ExtArgs> | null
    /**
     * The filter to search for the MeetingReport to update in case it exists.
     */
    where: MeetingReportWhereUniqueInput
    /**
     * In case the MeetingReport found by the `where` argument doesn't exist, create a new MeetingReport with this data.
     */
    create: XOR<MeetingReportCreateInput, MeetingReportUncheckedCreateInput>
    /**
     * In case the MeetingReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingReportUpdateInput, MeetingReportUncheckedUpdateInput>
  }

  /**
   * MeetingReport delete
   */
  export type MeetingReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingReport
     */
    select?: MeetingReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingReportInclude<ExtArgs> | null
    /**
     * Filter which MeetingReport to delete.
     */
    where: MeetingReportWhereUniqueInput
  }

  /**
   * MeetingReport deleteMany
   */
  export type MeetingReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingReports to delete
     */
    where?: MeetingReportWhereInput
  }

  /**
   * MeetingReport.user
   */
  export type MeetingReport$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MeetingReport without action
   */
  export type MeetingReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingReport
     */
    select?: MeetingReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingReportInclude<ExtArgs> | null
  }


  /**
   * Model DailyReport
   */

  export type AggregateDailyReport = {
    _count: DailyReportCountAggregateOutputType | null
    _avg: DailyReportAvgAggregateOutputType | null
    _sum: DailyReportSumAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  export type DailyReportAvgAggregateOutputType = {
    ticketsResolved: number | null
    chatsHandled: number | null
    githubIssues: number | null
    emailsProcessed: number | null
    callsAttended: number | null
  }

  export type DailyReportSumAggregateOutputType = {
    ticketsResolved: number | null
    chatsHandled: number | null
    githubIssues: number | null
    emailsProcessed: number | null
    callsAttended: number | null
  }

  export type DailyReportMinAggregateOutputType = {
    id: string | null
    date: Date | null
    ticketsResolved: number | null
    chatsHandled: number | null
    githubIssues: number | null
    emailsProcessed: number | null
    callsAttended: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type DailyReportMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    ticketsResolved: number | null
    chatsHandled: number | null
    githubIssues: number | null
    emailsProcessed: number | null
    callsAttended: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type DailyReportCountAggregateOutputType = {
    id: number
    date: number
    ticketsResolved: number
    chatsHandled: number
    githubIssues: number
    emailsProcessed: number
    callsAttended: number
    platformReports: number
    notes: number
    links: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type DailyReportAvgAggregateInputType = {
    ticketsResolved?: true
    chatsHandled?: true
    githubIssues?: true
    emailsProcessed?: true
    callsAttended?: true
  }

  export type DailyReportSumAggregateInputType = {
    ticketsResolved?: true
    chatsHandled?: true
    githubIssues?: true
    emailsProcessed?: true
    callsAttended?: true
  }

  export type DailyReportMinAggregateInputType = {
    id?: true
    date?: true
    ticketsResolved?: true
    chatsHandled?: true
    githubIssues?: true
    emailsProcessed?: true
    callsAttended?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type DailyReportMaxAggregateInputType = {
    id?: true
    date?: true
    ticketsResolved?: true
    chatsHandled?: true
    githubIssues?: true
    emailsProcessed?: true
    callsAttended?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type DailyReportCountAggregateInputType = {
    id?: true
    date?: true
    ticketsResolved?: true
    chatsHandled?: true
    githubIssues?: true
    emailsProcessed?: true
    callsAttended?: true
    platformReports?: true
    notes?: true
    links?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type DailyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReport to aggregate.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyReports
    **/
    _count?: true | DailyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyReportMaxAggregateInputType
  }

  export type GetDailyReportAggregateType<T extends DailyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyReport[P]>
      : GetScalarType<T[P], AggregateDailyReport[P]>
  }




  export type DailyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithAggregationInput | DailyReportOrderByWithAggregationInput[]
    by: DailyReportScalarFieldEnum[] | DailyReportScalarFieldEnum
    having?: DailyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyReportCountAggregateInputType | true
    _avg?: DailyReportAvgAggregateInputType
    _sum?: DailyReportSumAggregateInputType
    _min?: DailyReportMinAggregateInputType
    _max?: DailyReportMaxAggregateInputType
  }

  export type DailyReportGroupByOutputType = {
    id: string
    date: Date
    ticketsResolved: number
    chatsHandled: number
    githubIssues: number
    emailsProcessed: number
    callsAttended: number
    platformReports: JsonValue | null
    notes: string | null
    links: string[]
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: DailyReportCountAggregateOutputType | null
    _avg: DailyReportAvgAggregateOutputType | null
    _sum: DailyReportSumAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  type GetDailyReportGroupByPayload<T extends DailyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
            : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
        }
      >
    >


  export type DailyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    ticketsResolved?: boolean
    chatsHandled?: boolean
    githubIssues?: boolean
    emailsProcessed?: boolean
    callsAttended?: boolean
    platformReports?: boolean
    notes?: boolean
    links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    ticketsResolved?: boolean
    chatsHandled?: boolean
    githubIssues?: boolean
    emailsProcessed?: boolean
    callsAttended?: boolean
    platformReports?: boolean
    notes?: boolean
    links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectScalar = {
    id?: boolean
    date?: boolean
    ticketsResolved?: boolean
    chatsHandled?: boolean
    githubIssues?: boolean
    emailsProcessed?: boolean
    callsAttended?: boolean
    platformReports?: boolean
    notes?: boolean
    links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type DailyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyReport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      ticketsResolved: number
      chatsHandled: number
      githubIssues: number
      emailsProcessed: number
      callsAttended: number
      platformReports: Prisma.JsonValue | null
      notes: string | null
      links: string[]
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["dailyReport"]>
    composites: {}
  }

  type DailyReportGetPayload<S extends boolean | null | undefined | DailyReportDefaultArgs> = $Result.GetResult<Prisma.$DailyReportPayload, S>

  type DailyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyReportCountAggregateInputType | true
    }

  export interface DailyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyReport'], meta: { name: 'DailyReport' } }
    /**
     * Find zero or one DailyReport that matches the filter.
     * @param {DailyReportFindUniqueArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyReportFindUniqueArgs>(args: SelectSubset<T, DailyReportFindUniqueArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyReportFindUniqueOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyReportFindFirstArgs>(args?: SelectSubset<T, DailyReportFindFirstArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyReports
     * const dailyReports = await prisma.dailyReport.findMany()
     * 
     * // Get first 10 DailyReports
     * const dailyReports = await prisma.dailyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyReportWithIdOnly = await prisma.dailyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyReportFindManyArgs>(args?: SelectSubset<T, DailyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyReport.
     * @param {DailyReportCreateArgs} args - Arguments to create a DailyReport.
     * @example
     * // Create one DailyReport
     * const DailyReport = await prisma.dailyReport.create({
     *   data: {
     *     // ... data to create a DailyReport
     *   }
     * })
     * 
     */
    create<T extends DailyReportCreateArgs>(args: SelectSubset<T, DailyReportCreateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyReports.
     * @param {DailyReportCreateManyArgs} args - Arguments to create many DailyReports.
     * @example
     * // Create many DailyReports
     * const dailyReport = await prisma.dailyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyReportCreateManyArgs>(args?: SelectSubset<T, DailyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyReports and returns the data saved in the database.
     * @param {DailyReportCreateManyAndReturnArgs} args - Arguments to create many DailyReports.
     * @example
     * // Create many DailyReports
     * const dailyReport = await prisma.dailyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyReports and only return the `id`
     * const dailyReportWithIdOnly = await prisma.dailyReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyReport.
     * @param {DailyReportDeleteArgs} args - Arguments to delete one DailyReport.
     * @example
     * // Delete one DailyReport
     * const DailyReport = await prisma.dailyReport.delete({
     *   where: {
     *     // ... filter to delete one DailyReport
     *   }
     * })
     * 
     */
    delete<T extends DailyReportDeleteArgs>(args: SelectSubset<T, DailyReportDeleteArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyReport.
     * @param {DailyReportUpdateArgs} args - Arguments to update one DailyReport.
     * @example
     * // Update one DailyReport
     * const dailyReport = await prisma.dailyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyReportUpdateArgs>(args: SelectSubset<T, DailyReportUpdateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyReports.
     * @param {DailyReportDeleteManyArgs} args - Arguments to filter DailyReports to delete.
     * @example
     * // Delete a few DailyReports
     * const { count } = await prisma.dailyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyReportDeleteManyArgs>(args?: SelectSubset<T, DailyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyReports
     * const dailyReport = await prisma.dailyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyReportUpdateManyArgs>(args: SelectSubset<T, DailyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyReport.
     * @param {DailyReportUpsertArgs} args - Arguments to update or create a DailyReport.
     * @example
     * // Update or create a DailyReport
     * const dailyReport = await prisma.dailyReport.upsert({
     *   create: {
     *     // ... data to create a DailyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyReport we want to update
     *   }
     * })
     */
    upsert<T extends DailyReportUpsertArgs>(args: SelectSubset<T, DailyReportUpsertArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportCountArgs} args - Arguments to filter DailyReports to count.
     * @example
     * // Count the number of DailyReports
     * const count = await prisma.dailyReport.count({
     *   where: {
     *     // ... the filter for the DailyReports we want to count
     *   }
     * })
    **/
    count<T extends DailyReportCountArgs>(
      args?: Subset<T, DailyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyReportAggregateArgs>(args: Subset<T, DailyReportAggregateArgs>): Prisma.PrismaPromise<GetDailyReportAggregateType<T>>

    /**
     * Group by DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyReportGroupByArgs['orderBy'] }
        : { orderBy?: DailyReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyReport model
   */
  readonly fields: DailyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyReport model
   */ 
  interface DailyReportFieldRefs {
    readonly id: FieldRef<"DailyReport", 'String'>
    readonly date: FieldRef<"DailyReport", 'DateTime'>
    readonly ticketsResolved: FieldRef<"DailyReport", 'Int'>
    readonly chatsHandled: FieldRef<"DailyReport", 'Int'>
    readonly githubIssues: FieldRef<"DailyReport", 'Int'>
    readonly emailsProcessed: FieldRef<"DailyReport", 'Int'>
    readonly callsAttended: FieldRef<"DailyReport", 'Int'>
    readonly platformReports: FieldRef<"DailyReport", 'Json'>
    readonly notes: FieldRef<"DailyReport", 'String'>
    readonly links: FieldRef<"DailyReport", 'String[]'>
    readonly createdAt: FieldRef<"DailyReport", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyReport", 'DateTime'>
    readonly userId: FieldRef<"DailyReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyReport findUnique
   */
  export type DailyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findUniqueOrThrow
   */
  export type DailyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findFirst
   */
  export type DailyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findFirstOrThrow
   */
  export type DailyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findMany
   */
  export type DailyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReports to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport create
   */
  export type DailyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyReport.
     */
    data: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
  }

  /**
   * DailyReport createMany
   */
  export type DailyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyReports.
     */
    data: DailyReportCreateManyInput | DailyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyReport createManyAndReturn
   */
  export type DailyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyReports.
     */
    data: DailyReportCreateManyInput | DailyReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyReport update
   */
  export type DailyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyReport.
     */
    data: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
    /**
     * Choose, which DailyReport to update.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport updateMany
   */
  export type DailyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyReports.
     */
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyInput>
    /**
     * Filter which DailyReports to update
     */
    where?: DailyReportWhereInput
  }

  /**
   * DailyReport upsert
   */
  export type DailyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyReport to update in case it exists.
     */
    where: DailyReportWhereUniqueInput
    /**
     * In case the DailyReport found by the `where` argument doesn't exist, create a new DailyReport with this data.
     */
    create: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
    /**
     * In case the DailyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
  }

  /**
   * DailyReport delete
   */
  export type DailyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter which DailyReport to delete.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport deleteMany
   */
  export type DailyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReports to delete
     */
    where?: DailyReportWhereInput
  }

  /**
   * DailyReport without action
   */
  export type DailyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IncomingWebhookScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type IncomingWebhookScalarFieldEnum = (typeof IncomingWebhookScalarFieldEnum)[keyof typeof IncomingWebhookScalarFieldEnum]


  export const MessageTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    template: 'template',
    variables: 'variables',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    incomingWebhookId: 'incomingWebhookId'
  };

  export type MessageTemplateScalarFieldEnum = (typeof MessageTemplateScalarFieldEnum)[keyof typeof MessageTemplateScalarFieldEnum]


  export const SupportPlatformScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupportPlatformScalarFieldEnum = (typeof SupportPlatformScalarFieldEnum)[keyof typeof SupportPlatformScalarFieldEnum]


  export const MeetingReportScalarFieldEnum: {
    id: 'id',
    title: 'title',
    startTime: 'startTime',
    endTime: 'endTime',
    outcome: 'outcome',
    notes: 'notes',
    attendees: 'attendees',
    actionItems: 'actionItems',
    customerName: 'customerName',
    customerEmail: 'customerEmail',
    hostId: 'hostId',
    isAssigned: 'isAssigned',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type MeetingReportScalarFieldEnum = (typeof MeetingReportScalarFieldEnum)[keyof typeof MeetingReportScalarFieldEnum]


  export const DailyReportScalarFieldEnum: {
    id: 'id',
    date: 'date',
    ticketsResolved: 'ticketsResolved',
    chatsHandled: 'chatsHandled',
    githubIssues: 'githubIssues',
    emailsProcessed: 'emailsProcessed',
    callsAttended: 'callsAttended',
    platformReports: 'platformReports',
    notes: 'notes',
    links: 'links',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type DailyReportScalarFieldEnum = (typeof DailyReportScalarFieldEnum)[keyof typeof DailyReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'WebhookStatus'
   */
  export type EnumWebhookStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebhookStatus'>
    


  /**
   * Reference to a field of type 'WebhookStatus[]'
   */
  export type ListEnumWebhookStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebhookStatus[]'>
    


  /**
   * Reference to a field of type 'MeetingOutcome'
   */
  export type EnumMeetingOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeetingOutcome'>
    


  /**
   * Reference to a field of type 'MeetingOutcome[]'
   */
  export type ListEnumMeetingOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeetingOutcome[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    dailyReports?: DailyReportListRelationFilter
    meetingReports?: MeetingReportListRelationFilter
    webhooks?: IncomingWebhookListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dailyReports?: DailyReportOrderByRelationAggregateInput
    meetingReports?: MeetingReportOrderByRelationAggregateInput
    webhooks?: IncomingWebhookOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    dailyReports?: DailyReportListRelationFilter
    meetingReports?: MeetingReportListRelationFilter
    webhooks?: IncomingWebhookListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type IncomingWebhookWhereInput = {
    AND?: IncomingWebhookWhereInput | IncomingWebhookWhereInput[]
    OR?: IncomingWebhookWhereInput[]
    NOT?: IncomingWebhookWhereInput | IncomingWebhookWhereInput[]
    id?: StringFilter<"IncomingWebhook"> | string
    name?: StringFilter<"IncomingWebhook"> | string
    url?: StringFilter<"IncomingWebhook"> | string
    status?: EnumWebhookStatusFilter<"IncomingWebhook"> | $Enums.WebhookStatus
    createdAt?: DateTimeFilter<"IncomingWebhook"> | Date | string
    updatedAt?: DateTimeFilter<"IncomingWebhook"> | Date | string
    userId?: StringFilter<"IncomingWebhook"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    messageTemplates?: MessageTemplateListRelationFilter
  }

  export type IncomingWebhookOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    messageTemplates?: MessageTemplateOrderByRelationAggregateInput
  }

  export type IncomingWebhookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: IncomingWebhookWhereInput | IncomingWebhookWhereInput[]
    OR?: IncomingWebhookWhereInput[]
    NOT?: IncomingWebhookWhereInput | IncomingWebhookWhereInput[]
    name?: StringFilter<"IncomingWebhook"> | string
    status?: EnumWebhookStatusFilter<"IncomingWebhook"> | $Enums.WebhookStatus
    createdAt?: DateTimeFilter<"IncomingWebhook"> | Date | string
    updatedAt?: DateTimeFilter<"IncomingWebhook"> | Date | string
    userId?: StringFilter<"IncomingWebhook"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    messageTemplates?: MessageTemplateListRelationFilter
  }, "id" | "url">

  export type IncomingWebhookOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: IncomingWebhookCountOrderByAggregateInput
    _max?: IncomingWebhookMaxOrderByAggregateInput
    _min?: IncomingWebhookMinOrderByAggregateInput
  }

  export type IncomingWebhookScalarWhereWithAggregatesInput = {
    AND?: IncomingWebhookScalarWhereWithAggregatesInput | IncomingWebhookScalarWhereWithAggregatesInput[]
    OR?: IncomingWebhookScalarWhereWithAggregatesInput[]
    NOT?: IncomingWebhookScalarWhereWithAggregatesInput | IncomingWebhookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IncomingWebhook"> | string
    name?: StringWithAggregatesFilter<"IncomingWebhook"> | string
    url?: StringWithAggregatesFilter<"IncomingWebhook"> | string
    status?: EnumWebhookStatusWithAggregatesFilter<"IncomingWebhook"> | $Enums.WebhookStatus
    createdAt?: DateTimeWithAggregatesFilter<"IncomingWebhook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IncomingWebhook"> | Date | string
    userId?: StringWithAggregatesFilter<"IncomingWebhook"> | string
  }

  export type MessageTemplateWhereInput = {
    AND?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    OR?: MessageTemplateWhereInput[]
    NOT?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    id?: StringFilter<"MessageTemplate"> | string
    name?: StringFilter<"MessageTemplate"> | string
    template?: StringFilter<"MessageTemplate"> | string
    variables?: StringNullableListFilter<"MessageTemplate">
    createdAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    incomingWebhookId?: StringFilter<"MessageTemplate"> | string
    incomingWebhook?: XOR<IncomingWebhookRelationFilter, IncomingWebhookWhereInput>
  }

  export type MessageTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    template?: SortOrder
    variables?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    incomingWebhookId?: SortOrder
    incomingWebhook?: IncomingWebhookOrderByWithRelationInput
  }

  export type MessageTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    OR?: MessageTemplateWhereInput[]
    NOT?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    name?: StringFilter<"MessageTemplate"> | string
    template?: StringFilter<"MessageTemplate"> | string
    variables?: StringNullableListFilter<"MessageTemplate">
    createdAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    incomingWebhookId?: StringFilter<"MessageTemplate"> | string
    incomingWebhook?: XOR<IncomingWebhookRelationFilter, IncomingWebhookWhereInput>
  }, "id">

  export type MessageTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    template?: SortOrder
    variables?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    incomingWebhookId?: SortOrder
    _count?: MessageTemplateCountOrderByAggregateInput
    _max?: MessageTemplateMaxOrderByAggregateInput
    _min?: MessageTemplateMinOrderByAggregateInput
  }

  export type MessageTemplateScalarWhereWithAggregatesInput = {
    AND?: MessageTemplateScalarWhereWithAggregatesInput | MessageTemplateScalarWhereWithAggregatesInput[]
    OR?: MessageTemplateScalarWhereWithAggregatesInput[]
    NOT?: MessageTemplateScalarWhereWithAggregatesInput | MessageTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageTemplate"> | string
    name?: StringWithAggregatesFilter<"MessageTemplate"> | string
    template?: StringWithAggregatesFilter<"MessageTemplate"> | string
    variables?: StringNullableListFilter<"MessageTemplate">
    createdAt?: DateTimeWithAggregatesFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageTemplate"> | Date | string
    incomingWebhookId?: StringWithAggregatesFilter<"MessageTemplate"> | string
  }

  export type SupportPlatformWhereInput = {
    AND?: SupportPlatformWhereInput | SupportPlatformWhereInput[]
    OR?: SupportPlatformWhereInput[]
    NOT?: SupportPlatformWhereInput | SupportPlatformWhereInput[]
    id?: StringFilter<"SupportPlatform"> | string
    name?: StringFilter<"SupportPlatform"> | string
    isActive?: BoolFilter<"SupportPlatform"> | boolean
    createdAt?: DateTimeFilter<"SupportPlatform"> | Date | string
    updatedAt?: DateTimeFilter<"SupportPlatform"> | Date | string
  }

  export type SupportPlatformOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportPlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SupportPlatformWhereInput | SupportPlatformWhereInput[]
    OR?: SupportPlatformWhereInput[]
    NOT?: SupportPlatformWhereInput | SupportPlatformWhereInput[]
    isActive?: BoolFilter<"SupportPlatform"> | boolean
    createdAt?: DateTimeFilter<"SupportPlatform"> | Date | string
    updatedAt?: DateTimeFilter<"SupportPlatform"> | Date | string
  }, "id" | "name">

  export type SupportPlatformOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupportPlatformCountOrderByAggregateInput
    _max?: SupportPlatformMaxOrderByAggregateInput
    _min?: SupportPlatformMinOrderByAggregateInput
  }

  export type SupportPlatformScalarWhereWithAggregatesInput = {
    AND?: SupportPlatformScalarWhereWithAggregatesInput | SupportPlatformScalarWhereWithAggregatesInput[]
    OR?: SupportPlatformScalarWhereWithAggregatesInput[]
    NOT?: SupportPlatformScalarWhereWithAggregatesInput | SupportPlatformScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportPlatform"> | string
    name?: StringWithAggregatesFilter<"SupportPlatform"> | string
    isActive?: BoolWithAggregatesFilter<"SupportPlatform"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SupportPlatform"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupportPlatform"> | Date | string
  }

  export type MeetingReportWhereInput = {
    AND?: MeetingReportWhereInput | MeetingReportWhereInput[]
    OR?: MeetingReportWhereInput[]
    NOT?: MeetingReportWhereInput | MeetingReportWhereInput[]
    id?: StringFilter<"MeetingReport"> | string
    title?: StringFilter<"MeetingReport"> | string
    startTime?: DateTimeFilter<"MeetingReport"> | Date | string
    endTime?: DateTimeNullableFilter<"MeetingReport"> | Date | string | null
    outcome?: EnumMeetingOutcomeFilter<"MeetingReport"> | $Enums.MeetingOutcome
    notes?: StringNullableFilter<"MeetingReport"> | string | null
    attendees?: StringNullableListFilter<"MeetingReport">
    actionItems?: StringNullableListFilter<"MeetingReport">
    customerName?: StringNullableFilter<"MeetingReport"> | string | null
    customerEmail?: StringNullableFilter<"MeetingReport"> | string | null
    hostId?: StringNullableFilter<"MeetingReport"> | string | null
    isAssigned?: BoolFilter<"MeetingReport"> | boolean
    createdAt?: DateTimeFilter<"MeetingReport"> | Date | string
    updatedAt?: DateTimeFilter<"MeetingReport"> | Date | string
    userId?: StringNullableFilter<"MeetingReport"> | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type MeetingReportOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    outcome?: SortOrder
    notes?: SortOrderInput | SortOrder
    attendees?: SortOrder
    actionItems?: SortOrder
    customerName?: SortOrderInput | SortOrder
    customerEmail?: SortOrderInput | SortOrder
    hostId?: SortOrderInput | SortOrder
    isAssigned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MeetingReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeetingReportWhereInput | MeetingReportWhereInput[]
    OR?: MeetingReportWhereInput[]
    NOT?: MeetingReportWhereInput | MeetingReportWhereInput[]
    title?: StringFilter<"MeetingReport"> | string
    startTime?: DateTimeFilter<"MeetingReport"> | Date | string
    endTime?: DateTimeNullableFilter<"MeetingReport"> | Date | string | null
    outcome?: EnumMeetingOutcomeFilter<"MeetingReport"> | $Enums.MeetingOutcome
    notes?: StringNullableFilter<"MeetingReport"> | string | null
    attendees?: StringNullableListFilter<"MeetingReport">
    actionItems?: StringNullableListFilter<"MeetingReport">
    customerName?: StringNullableFilter<"MeetingReport"> | string | null
    customerEmail?: StringNullableFilter<"MeetingReport"> | string | null
    hostId?: StringNullableFilter<"MeetingReport"> | string | null
    isAssigned?: BoolFilter<"MeetingReport"> | boolean
    createdAt?: DateTimeFilter<"MeetingReport"> | Date | string
    updatedAt?: DateTimeFilter<"MeetingReport"> | Date | string
    userId?: StringNullableFilter<"MeetingReport"> | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type MeetingReportOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    outcome?: SortOrder
    notes?: SortOrderInput | SortOrder
    attendees?: SortOrder
    actionItems?: SortOrder
    customerName?: SortOrderInput | SortOrder
    customerEmail?: SortOrderInput | SortOrder
    hostId?: SortOrderInput | SortOrder
    isAssigned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: MeetingReportCountOrderByAggregateInput
    _max?: MeetingReportMaxOrderByAggregateInput
    _min?: MeetingReportMinOrderByAggregateInput
  }

  export type MeetingReportScalarWhereWithAggregatesInput = {
    AND?: MeetingReportScalarWhereWithAggregatesInput | MeetingReportScalarWhereWithAggregatesInput[]
    OR?: MeetingReportScalarWhereWithAggregatesInput[]
    NOT?: MeetingReportScalarWhereWithAggregatesInput | MeetingReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MeetingReport"> | string
    title?: StringWithAggregatesFilter<"MeetingReport"> | string
    startTime?: DateTimeWithAggregatesFilter<"MeetingReport"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"MeetingReport"> | Date | string | null
    outcome?: EnumMeetingOutcomeWithAggregatesFilter<"MeetingReport"> | $Enums.MeetingOutcome
    notes?: StringNullableWithAggregatesFilter<"MeetingReport"> | string | null
    attendees?: StringNullableListFilter<"MeetingReport">
    actionItems?: StringNullableListFilter<"MeetingReport">
    customerName?: StringNullableWithAggregatesFilter<"MeetingReport"> | string | null
    customerEmail?: StringNullableWithAggregatesFilter<"MeetingReport"> | string | null
    hostId?: StringNullableWithAggregatesFilter<"MeetingReport"> | string | null
    isAssigned?: BoolWithAggregatesFilter<"MeetingReport"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MeetingReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MeetingReport"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"MeetingReport"> | string | null
  }

  export type DailyReportWhereInput = {
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    id?: StringFilter<"DailyReport"> | string
    date?: DateTimeFilter<"DailyReport"> | Date | string
    ticketsResolved?: IntFilter<"DailyReport"> | number
    chatsHandled?: IntFilter<"DailyReport"> | number
    githubIssues?: IntFilter<"DailyReport"> | number
    emailsProcessed?: IntFilter<"DailyReport"> | number
    callsAttended?: IntFilter<"DailyReport"> | number
    platformReports?: JsonNullableFilter<"DailyReport">
    notes?: StringNullableFilter<"DailyReport"> | string | null
    links?: StringNullableListFilter<"DailyReport">
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReport"> | Date | string
    userId?: StringFilter<"DailyReport"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DailyReportOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    ticketsResolved?: SortOrder
    chatsHandled?: SortOrder
    githubIssues?: SortOrder
    emailsProcessed?: SortOrder
    callsAttended?: SortOrder
    platformReports?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    links?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DailyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: DailyReportUserIdDateCompoundUniqueInput
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    date?: DateTimeFilter<"DailyReport"> | Date | string
    ticketsResolved?: IntFilter<"DailyReport"> | number
    chatsHandled?: IntFilter<"DailyReport"> | number
    githubIssues?: IntFilter<"DailyReport"> | number
    emailsProcessed?: IntFilter<"DailyReport"> | number
    callsAttended?: IntFilter<"DailyReport"> | number
    platformReports?: JsonNullableFilter<"DailyReport">
    notes?: StringNullableFilter<"DailyReport"> | string | null
    links?: StringNullableListFilter<"DailyReport">
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReport"> | Date | string
    userId?: StringFilter<"DailyReport"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type DailyReportOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    ticketsResolved?: SortOrder
    chatsHandled?: SortOrder
    githubIssues?: SortOrder
    emailsProcessed?: SortOrder
    callsAttended?: SortOrder
    platformReports?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    links?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: DailyReportCountOrderByAggregateInput
    _avg?: DailyReportAvgOrderByAggregateInput
    _max?: DailyReportMaxOrderByAggregateInput
    _min?: DailyReportMinOrderByAggregateInput
    _sum?: DailyReportSumOrderByAggregateInput
  }

  export type DailyReportScalarWhereWithAggregatesInput = {
    AND?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    OR?: DailyReportScalarWhereWithAggregatesInput[]
    NOT?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyReport"> | string
    date?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    ticketsResolved?: IntWithAggregatesFilter<"DailyReport"> | number
    chatsHandled?: IntWithAggregatesFilter<"DailyReport"> | number
    githubIssues?: IntWithAggregatesFilter<"DailyReport"> | number
    emailsProcessed?: IntWithAggregatesFilter<"DailyReport"> | number
    callsAttended?: IntWithAggregatesFilter<"DailyReport"> | number
    platformReports?: JsonNullableWithAggregatesFilter<"DailyReport">
    notes?: StringNullableWithAggregatesFilter<"DailyReport"> | string | null
    links?: StringNullableListFilter<"DailyReport">
    createdAt?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    userId?: StringWithAggregatesFilter<"DailyReport"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyReports?: DailyReportCreateNestedManyWithoutUserInput
    meetingReports?: MeetingReportCreateNestedManyWithoutUserInput
    webhooks?: IncomingWebhookCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutUserInput
    meetingReports?: MeetingReportUncheckedCreateNestedManyWithoutUserInput
    webhooks?: IncomingWebhookUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyReportUpdateManyWithoutUserNestedInput
    meetingReports?: MeetingReportUpdateManyWithoutUserNestedInput
    webhooks?: IncomingWebhookUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyReportUncheckedUpdateManyWithoutUserNestedInput
    meetingReports?: MeetingReportUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: IncomingWebhookUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomingWebhookCreateInput = {
    id?: string
    name: string
    url: string
    status?: $Enums.WebhookStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWebhooksInput
    messageTemplates?: MessageTemplateCreateNestedManyWithoutIncomingWebhookInput
  }

  export type IncomingWebhookUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    status?: $Enums.WebhookStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    messageTemplates?: MessageTemplateUncheckedCreateNestedManyWithoutIncomingWebhookInput
  }

  export type IncomingWebhookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookStatusFieldUpdateOperationsInput | $Enums.WebhookStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWebhooksNestedInput
    messageTemplates?: MessageTemplateUpdateManyWithoutIncomingWebhookNestedInput
  }

  export type IncomingWebhookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookStatusFieldUpdateOperationsInput | $Enums.WebhookStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    messageTemplates?: MessageTemplateUncheckedUpdateManyWithoutIncomingWebhookNestedInput
  }

  export type IncomingWebhookCreateManyInput = {
    id?: string
    name: string
    url: string
    status?: $Enums.WebhookStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type IncomingWebhookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookStatusFieldUpdateOperationsInput | $Enums.WebhookStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomingWebhookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookStatusFieldUpdateOperationsInput | $Enums.WebhookStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageTemplateCreateInput = {
    id?: string
    name: string
    template: string
    variables?: MessageTemplateCreatevariablesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    incomingWebhook: IncomingWebhookCreateNestedOneWithoutMessageTemplatesInput
  }

  export type MessageTemplateUncheckedCreateInput = {
    id?: string
    name: string
    template: string
    variables?: MessageTemplateCreatevariablesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    incomingWebhookId: string
  }

  export type MessageTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: MessageTemplateUpdatevariablesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incomingWebhook?: IncomingWebhookUpdateOneRequiredWithoutMessageTemplatesNestedInput
  }

  export type MessageTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: MessageTemplateUpdatevariablesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incomingWebhookId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageTemplateCreateManyInput = {
    id?: string
    name: string
    template: string
    variables?: MessageTemplateCreatevariablesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    incomingWebhookId: string
  }

  export type MessageTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: MessageTemplateUpdatevariablesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: MessageTemplateUpdatevariablesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incomingWebhookId?: StringFieldUpdateOperationsInput | string
  }

  export type SupportPlatformCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportPlatformUncheckedCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportPlatformUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportPlatformUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportPlatformCreateManyInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportPlatformUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportPlatformUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingReportCreateInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime?: Date | string | null
    outcome: $Enums.MeetingOutcome
    notes?: string | null
    attendees?: MeetingReportCreateattendeesInput | string[]
    actionItems?: MeetingReportCreateactionItemsInput | string[]
    customerName?: string | null
    customerEmail?: string | null
    hostId?: string | null
    isAssigned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutMeetingReportsInput
  }

  export type MeetingReportUncheckedCreateInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime?: Date | string | null
    outcome: $Enums.MeetingOutcome
    notes?: string | null
    attendees?: MeetingReportCreateattendeesInput | string[]
    actionItems?: MeetingReportCreateactionItemsInput | string[]
    customerName?: string | null
    customerEmail?: string | null
    hostId?: string | null
    isAssigned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type MeetingReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: EnumMeetingOutcomeFieldUpdateOperationsInput | $Enums.MeetingOutcome
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: MeetingReportUpdateattendeesInput | string[]
    actionItems?: MeetingReportUpdateactionItemsInput | string[]
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hostId?: NullableStringFieldUpdateOperationsInput | string | null
    isAssigned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMeetingReportsNestedInput
  }

  export type MeetingReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: EnumMeetingOutcomeFieldUpdateOperationsInput | $Enums.MeetingOutcome
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: MeetingReportUpdateattendeesInput | string[]
    actionItems?: MeetingReportUpdateactionItemsInput | string[]
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hostId?: NullableStringFieldUpdateOperationsInput | string | null
    isAssigned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeetingReportCreateManyInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime?: Date | string | null
    outcome: $Enums.MeetingOutcome
    notes?: string | null
    attendees?: MeetingReportCreateattendeesInput | string[]
    actionItems?: MeetingReportCreateactionItemsInput | string[]
    customerName?: string | null
    customerEmail?: string | null
    hostId?: string | null
    isAssigned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type MeetingReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: EnumMeetingOutcomeFieldUpdateOperationsInput | $Enums.MeetingOutcome
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: MeetingReportUpdateattendeesInput | string[]
    actionItems?: MeetingReportUpdateactionItemsInput | string[]
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hostId?: NullableStringFieldUpdateOperationsInput | string | null
    isAssigned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: EnumMeetingOutcomeFieldUpdateOperationsInput | $Enums.MeetingOutcome
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: MeetingReportUpdateattendeesInput | string[]
    actionItems?: MeetingReportUpdateactionItemsInput | string[]
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hostId?: NullableStringFieldUpdateOperationsInput | string | null
    isAssigned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyReportCreateInput = {
    id?: string
    date: Date | string
    ticketsResolved?: number
    chatsHandled?: number
    githubIssues?: number
    emailsProcessed?: number
    callsAttended?: number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    links?: DailyReportCreatelinksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyReportsInput
  }

  export type DailyReportUncheckedCreateInput = {
    id?: string
    date: Date | string
    ticketsResolved?: number
    chatsHandled?: number
    githubIssues?: number
    emailsProcessed?: number
    callsAttended?: number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    links?: DailyReportCreatelinksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type DailyReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketsResolved?: IntFieldUpdateOperationsInput | number
    chatsHandled?: IntFieldUpdateOperationsInput | number
    githubIssues?: IntFieldUpdateOperationsInput | number
    emailsProcessed?: IntFieldUpdateOperationsInput | number
    callsAttended?: IntFieldUpdateOperationsInput | number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    links?: DailyReportUpdatelinksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyReportsNestedInput
  }

  export type DailyReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketsResolved?: IntFieldUpdateOperationsInput | number
    chatsHandled?: IntFieldUpdateOperationsInput | number
    githubIssues?: IntFieldUpdateOperationsInput | number
    emailsProcessed?: IntFieldUpdateOperationsInput | number
    callsAttended?: IntFieldUpdateOperationsInput | number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    links?: DailyReportUpdatelinksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyReportCreateManyInput = {
    id?: string
    date: Date | string
    ticketsResolved?: number
    chatsHandled?: number
    githubIssues?: number
    emailsProcessed?: number
    callsAttended?: number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    links?: DailyReportCreatelinksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type DailyReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketsResolved?: IntFieldUpdateOperationsInput | number
    chatsHandled?: IntFieldUpdateOperationsInput | number
    githubIssues?: IntFieldUpdateOperationsInput | number
    emailsProcessed?: IntFieldUpdateOperationsInput | number
    callsAttended?: IntFieldUpdateOperationsInput | number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    links?: DailyReportUpdatelinksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketsResolved?: IntFieldUpdateOperationsInput | number
    chatsHandled?: IntFieldUpdateOperationsInput | number
    githubIssues?: IntFieldUpdateOperationsInput | number
    emailsProcessed?: IntFieldUpdateOperationsInput | number
    callsAttended?: IntFieldUpdateOperationsInput | number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    links?: DailyReportUpdatelinksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DailyReportListRelationFilter = {
    every?: DailyReportWhereInput
    some?: DailyReportWhereInput
    none?: DailyReportWhereInput
  }

  export type MeetingReportListRelationFilter = {
    every?: MeetingReportWhereInput
    some?: MeetingReportWhereInput
    none?: MeetingReportWhereInput
  }

  export type IncomingWebhookListRelationFilter = {
    every?: IncomingWebhookWhereInput
    some?: IncomingWebhookWhereInput
    none?: IncomingWebhookWhereInput
  }

  export type DailyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncomingWebhookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumWebhookStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookStatus | EnumWebhookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookStatus[] | ListEnumWebhookStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookStatus[] | ListEnumWebhookStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookStatusFilter<$PrismaModel> | $Enums.WebhookStatus
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MessageTemplateListRelationFilter = {
    every?: MessageTemplateWhereInput
    some?: MessageTemplateWhereInput
    none?: MessageTemplateWhereInput
  }

  export type MessageTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncomingWebhookCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type IncomingWebhookMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type IncomingWebhookMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumWebhookStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookStatus | EnumWebhookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookStatus[] | ListEnumWebhookStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookStatus[] | ListEnumWebhookStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebhookStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebhookStatusFilter<$PrismaModel>
    _max?: NestedEnumWebhookStatusFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IncomingWebhookRelationFilter = {
    is?: IncomingWebhookWhereInput
    isNot?: IncomingWebhookWhereInput
  }

  export type MessageTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    template?: SortOrder
    variables?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    incomingWebhookId?: SortOrder
  }

  export type MessageTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    template?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    incomingWebhookId?: SortOrder
  }

  export type MessageTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    template?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    incomingWebhookId?: SortOrder
  }

  export type SupportPlatformCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportPlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportPlatformMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumMeetingOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingOutcome | EnumMeetingOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingOutcome[] | ListEnumMeetingOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeetingOutcome[] | ListEnumMeetingOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeetingOutcomeFilter<$PrismaModel> | $Enums.MeetingOutcome
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MeetingReportCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    outcome?: SortOrder
    notes?: SortOrder
    attendees?: SortOrder
    actionItems?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    hostId?: SortOrder
    isAssigned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MeetingReportMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    outcome?: SortOrder
    notes?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    hostId?: SortOrder
    isAssigned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MeetingReportMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    outcome?: SortOrder
    notes?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    hostId?: SortOrder
    isAssigned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumMeetingOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingOutcome | EnumMeetingOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingOutcome[] | ListEnumMeetingOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeetingOutcome[] | ListEnumMeetingOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeetingOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.MeetingOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeetingOutcomeFilter<$PrismaModel>
    _max?: NestedEnumMeetingOutcomeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DailyReportUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type DailyReportCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    ticketsResolved?: SortOrder
    chatsHandled?: SortOrder
    githubIssues?: SortOrder
    emailsProcessed?: SortOrder
    callsAttended?: SortOrder
    platformReports?: SortOrder
    notes?: SortOrder
    links?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DailyReportAvgOrderByAggregateInput = {
    ticketsResolved?: SortOrder
    chatsHandled?: SortOrder
    githubIssues?: SortOrder
    emailsProcessed?: SortOrder
    callsAttended?: SortOrder
  }

  export type DailyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    ticketsResolved?: SortOrder
    chatsHandled?: SortOrder
    githubIssues?: SortOrder
    emailsProcessed?: SortOrder
    callsAttended?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DailyReportMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    ticketsResolved?: SortOrder
    chatsHandled?: SortOrder
    githubIssues?: SortOrder
    emailsProcessed?: SortOrder
    callsAttended?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DailyReportSumOrderByAggregateInput = {
    ticketsResolved?: SortOrder
    chatsHandled?: SortOrder
    githubIssues?: SortOrder
    emailsProcessed?: SortOrder
    callsAttended?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DailyReportCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput> | DailyReportCreateWithoutUserInput[] | DailyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutUserInput | DailyReportCreateOrConnectWithoutUserInput[]
    createMany?: DailyReportCreateManyUserInputEnvelope
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
  }

  export type MeetingReportCreateNestedManyWithoutUserInput = {
    create?: XOR<MeetingReportCreateWithoutUserInput, MeetingReportUncheckedCreateWithoutUserInput> | MeetingReportCreateWithoutUserInput[] | MeetingReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingReportCreateOrConnectWithoutUserInput | MeetingReportCreateOrConnectWithoutUserInput[]
    createMany?: MeetingReportCreateManyUserInputEnvelope
    connect?: MeetingReportWhereUniqueInput | MeetingReportWhereUniqueInput[]
  }

  export type IncomingWebhookCreateNestedManyWithoutUserInput = {
    create?: XOR<IncomingWebhookCreateWithoutUserInput, IncomingWebhookUncheckedCreateWithoutUserInput> | IncomingWebhookCreateWithoutUserInput[] | IncomingWebhookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomingWebhookCreateOrConnectWithoutUserInput | IncomingWebhookCreateOrConnectWithoutUserInput[]
    createMany?: IncomingWebhookCreateManyUserInputEnvelope
    connect?: IncomingWebhookWhereUniqueInput | IncomingWebhookWhereUniqueInput[]
  }

  export type DailyReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput> | DailyReportCreateWithoutUserInput[] | DailyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutUserInput | DailyReportCreateOrConnectWithoutUserInput[]
    createMany?: DailyReportCreateManyUserInputEnvelope
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
  }

  export type MeetingReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MeetingReportCreateWithoutUserInput, MeetingReportUncheckedCreateWithoutUserInput> | MeetingReportCreateWithoutUserInput[] | MeetingReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingReportCreateOrConnectWithoutUserInput | MeetingReportCreateOrConnectWithoutUserInput[]
    createMany?: MeetingReportCreateManyUserInputEnvelope
    connect?: MeetingReportWhereUniqueInput | MeetingReportWhereUniqueInput[]
  }

  export type IncomingWebhookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IncomingWebhookCreateWithoutUserInput, IncomingWebhookUncheckedCreateWithoutUserInput> | IncomingWebhookCreateWithoutUserInput[] | IncomingWebhookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomingWebhookCreateOrConnectWithoutUserInput | IncomingWebhookCreateOrConnectWithoutUserInput[]
    createMany?: IncomingWebhookCreateManyUserInputEnvelope
    connect?: IncomingWebhookWhereUniqueInput | IncomingWebhookWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DailyReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput> | DailyReportCreateWithoutUserInput[] | DailyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutUserInput | DailyReportCreateOrConnectWithoutUserInput[]
    upsert?: DailyReportUpsertWithWhereUniqueWithoutUserInput | DailyReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyReportCreateManyUserInputEnvelope
    set?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    disconnect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    delete?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    update?: DailyReportUpdateWithWhereUniqueWithoutUserInput | DailyReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyReportUpdateManyWithWhereWithoutUserInput | DailyReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
  }

  export type MeetingReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeetingReportCreateWithoutUserInput, MeetingReportUncheckedCreateWithoutUserInput> | MeetingReportCreateWithoutUserInput[] | MeetingReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingReportCreateOrConnectWithoutUserInput | MeetingReportCreateOrConnectWithoutUserInput[]
    upsert?: MeetingReportUpsertWithWhereUniqueWithoutUserInput | MeetingReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeetingReportCreateManyUserInputEnvelope
    set?: MeetingReportWhereUniqueInput | MeetingReportWhereUniqueInput[]
    disconnect?: MeetingReportWhereUniqueInput | MeetingReportWhereUniqueInput[]
    delete?: MeetingReportWhereUniqueInput | MeetingReportWhereUniqueInput[]
    connect?: MeetingReportWhereUniqueInput | MeetingReportWhereUniqueInput[]
    update?: MeetingReportUpdateWithWhereUniqueWithoutUserInput | MeetingReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeetingReportUpdateManyWithWhereWithoutUserInput | MeetingReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeetingReportScalarWhereInput | MeetingReportScalarWhereInput[]
  }

  export type IncomingWebhookUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncomingWebhookCreateWithoutUserInput, IncomingWebhookUncheckedCreateWithoutUserInput> | IncomingWebhookCreateWithoutUserInput[] | IncomingWebhookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomingWebhookCreateOrConnectWithoutUserInput | IncomingWebhookCreateOrConnectWithoutUserInput[]
    upsert?: IncomingWebhookUpsertWithWhereUniqueWithoutUserInput | IncomingWebhookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncomingWebhookCreateManyUserInputEnvelope
    set?: IncomingWebhookWhereUniqueInput | IncomingWebhookWhereUniqueInput[]
    disconnect?: IncomingWebhookWhereUniqueInput | IncomingWebhookWhereUniqueInput[]
    delete?: IncomingWebhookWhereUniqueInput | IncomingWebhookWhereUniqueInput[]
    connect?: IncomingWebhookWhereUniqueInput | IncomingWebhookWhereUniqueInput[]
    update?: IncomingWebhookUpdateWithWhereUniqueWithoutUserInput | IncomingWebhookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncomingWebhookUpdateManyWithWhereWithoutUserInput | IncomingWebhookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncomingWebhookScalarWhereInput | IncomingWebhookScalarWhereInput[]
  }

  export type DailyReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput> | DailyReportCreateWithoutUserInput[] | DailyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutUserInput | DailyReportCreateOrConnectWithoutUserInput[]
    upsert?: DailyReportUpsertWithWhereUniqueWithoutUserInput | DailyReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyReportCreateManyUserInputEnvelope
    set?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    disconnect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    delete?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    update?: DailyReportUpdateWithWhereUniqueWithoutUserInput | DailyReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyReportUpdateManyWithWhereWithoutUserInput | DailyReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
  }

  export type MeetingReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeetingReportCreateWithoutUserInput, MeetingReportUncheckedCreateWithoutUserInput> | MeetingReportCreateWithoutUserInput[] | MeetingReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingReportCreateOrConnectWithoutUserInput | MeetingReportCreateOrConnectWithoutUserInput[]
    upsert?: MeetingReportUpsertWithWhereUniqueWithoutUserInput | MeetingReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeetingReportCreateManyUserInputEnvelope
    set?: MeetingReportWhereUniqueInput | MeetingReportWhereUniqueInput[]
    disconnect?: MeetingReportWhereUniqueInput | MeetingReportWhereUniqueInput[]
    delete?: MeetingReportWhereUniqueInput | MeetingReportWhereUniqueInput[]
    connect?: MeetingReportWhereUniqueInput | MeetingReportWhereUniqueInput[]
    update?: MeetingReportUpdateWithWhereUniqueWithoutUserInput | MeetingReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeetingReportUpdateManyWithWhereWithoutUserInput | MeetingReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeetingReportScalarWhereInput | MeetingReportScalarWhereInput[]
  }

  export type IncomingWebhookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncomingWebhookCreateWithoutUserInput, IncomingWebhookUncheckedCreateWithoutUserInput> | IncomingWebhookCreateWithoutUserInput[] | IncomingWebhookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomingWebhookCreateOrConnectWithoutUserInput | IncomingWebhookCreateOrConnectWithoutUserInput[]
    upsert?: IncomingWebhookUpsertWithWhereUniqueWithoutUserInput | IncomingWebhookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncomingWebhookCreateManyUserInputEnvelope
    set?: IncomingWebhookWhereUniqueInput | IncomingWebhookWhereUniqueInput[]
    disconnect?: IncomingWebhookWhereUniqueInput | IncomingWebhookWhereUniqueInput[]
    delete?: IncomingWebhookWhereUniqueInput | IncomingWebhookWhereUniqueInput[]
    connect?: IncomingWebhookWhereUniqueInput | IncomingWebhookWhereUniqueInput[]
    update?: IncomingWebhookUpdateWithWhereUniqueWithoutUserInput | IncomingWebhookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncomingWebhookUpdateManyWithWhereWithoutUserInput | IncomingWebhookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncomingWebhookScalarWhereInput | IncomingWebhookScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWebhooksInput = {
    create?: XOR<UserCreateWithoutWebhooksInput, UserUncheckedCreateWithoutWebhooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebhooksInput
    connect?: UserWhereUniqueInput
  }

  export type MessageTemplateCreateNestedManyWithoutIncomingWebhookInput = {
    create?: XOR<MessageTemplateCreateWithoutIncomingWebhookInput, MessageTemplateUncheckedCreateWithoutIncomingWebhookInput> | MessageTemplateCreateWithoutIncomingWebhookInput[] | MessageTemplateUncheckedCreateWithoutIncomingWebhookInput[]
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutIncomingWebhookInput | MessageTemplateCreateOrConnectWithoutIncomingWebhookInput[]
    createMany?: MessageTemplateCreateManyIncomingWebhookInputEnvelope
    connect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
  }

  export type MessageTemplateUncheckedCreateNestedManyWithoutIncomingWebhookInput = {
    create?: XOR<MessageTemplateCreateWithoutIncomingWebhookInput, MessageTemplateUncheckedCreateWithoutIncomingWebhookInput> | MessageTemplateCreateWithoutIncomingWebhookInput[] | MessageTemplateUncheckedCreateWithoutIncomingWebhookInput[]
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutIncomingWebhookInput | MessageTemplateCreateOrConnectWithoutIncomingWebhookInput[]
    createMany?: MessageTemplateCreateManyIncomingWebhookInputEnvelope
    connect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
  }

  export type EnumWebhookStatusFieldUpdateOperationsInput = {
    set?: $Enums.WebhookStatus
  }

  export type UserUpdateOneRequiredWithoutWebhooksNestedInput = {
    create?: XOR<UserCreateWithoutWebhooksInput, UserUncheckedCreateWithoutWebhooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebhooksInput
    upsert?: UserUpsertWithoutWebhooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWebhooksInput, UserUpdateWithoutWebhooksInput>, UserUncheckedUpdateWithoutWebhooksInput>
  }

  export type MessageTemplateUpdateManyWithoutIncomingWebhookNestedInput = {
    create?: XOR<MessageTemplateCreateWithoutIncomingWebhookInput, MessageTemplateUncheckedCreateWithoutIncomingWebhookInput> | MessageTemplateCreateWithoutIncomingWebhookInput[] | MessageTemplateUncheckedCreateWithoutIncomingWebhookInput[]
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutIncomingWebhookInput | MessageTemplateCreateOrConnectWithoutIncomingWebhookInput[]
    upsert?: MessageTemplateUpsertWithWhereUniqueWithoutIncomingWebhookInput | MessageTemplateUpsertWithWhereUniqueWithoutIncomingWebhookInput[]
    createMany?: MessageTemplateCreateManyIncomingWebhookInputEnvelope
    set?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    disconnect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    delete?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    connect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    update?: MessageTemplateUpdateWithWhereUniqueWithoutIncomingWebhookInput | MessageTemplateUpdateWithWhereUniqueWithoutIncomingWebhookInput[]
    updateMany?: MessageTemplateUpdateManyWithWhereWithoutIncomingWebhookInput | MessageTemplateUpdateManyWithWhereWithoutIncomingWebhookInput[]
    deleteMany?: MessageTemplateScalarWhereInput | MessageTemplateScalarWhereInput[]
  }

  export type MessageTemplateUncheckedUpdateManyWithoutIncomingWebhookNestedInput = {
    create?: XOR<MessageTemplateCreateWithoutIncomingWebhookInput, MessageTemplateUncheckedCreateWithoutIncomingWebhookInput> | MessageTemplateCreateWithoutIncomingWebhookInput[] | MessageTemplateUncheckedCreateWithoutIncomingWebhookInput[]
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutIncomingWebhookInput | MessageTemplateCreateOrConnectWithoutIncomingWebhookInput[]
    upsert?: MessageTemplateUpsertWithWhereUniqueWithoutIncomingWebhookInput | MessageTemplateUpsertWithWhereUniqueWithoutIncomingWebhookInput[]
    createMany?: MessageTemplateCreateManyIncomingWebhookInputEnvelope
    set?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    disconnect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    delete?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    connect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    update?: MessageTemplateUpdateWithWhereUniqueWithoutIncomingWebhookInput | MessageTemplateUpdateWithWhereUniqueWithoutIncomingWebhookInput[]
    updateMany?: MessageTemplateUpdateManyWithWhereWithoutIncomingWebhookInput | MessageTemplateUpdateManyWithWhereWithoutIncomingWebhookInput[]
    deleteMany?: MessageTemplateScalarWhereInput | MessageTemplateScalarWhereInput[]
  }

  export type MessageTemplateCreatevariablesInput = {
    set: string[]
  }

  export type IncomingWebhookCreateNestedOneWithoutMessageTemplatesInput = {
    create?: XOR<IncomingWebhookCreateWithoutMessageTemplatesInput, IncomingWebhookUncheckedCreateWithoutMessageTemplatesInput>
    connectOrCreate?: IncomingWebhookCreateOrConnectWithoutMessageTemplatesInput
    connect?: IncomingWebhookWhereUniqueInput
  }

  export type MessageTemplateUpdatevariablesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IncomingWebhookUpdateOneRequiredWithoutMessageTemplatesNestedInput = {
    create?: XOR<IncomingWebhookCreateWithoutMessageTemplatesInput, IncomingWebhookUncheckedCreateWithoutMessageTemplatesInput>
    connectOrCreate?: IncomingWebhookCreateOrConnectWithoutMessageTemplatesInput
    upsert?: IncomingWebhookUpsertWithoutMessageTemplatesInput
    connect?: IncomingWebhookWhereUniqueInput
    update?: XOR<XOR<IncomingWebhookUpdateToOneWithWhereWithoutMessageTemplatesInput, IncomingWebhookUpdateWithoutMessageTemplatesInput>, IncomingWebhookUncheckedUpdateWithoutMessageTemplatesInput>
  }

  export type MeetingReportCreateattendeesInput = {
    set: string[]
  }

  export type MeetingReportCreateactionItemsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutMeetingReportsInput = {
    create?: XOR<UserCreateWithoutMeetingReportsInput, UserUncheckedCreateWithoutMeetingReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingReportsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumMeetingOutcomeFieldUpdateOperationsInput = {
    set?: $Enums.MeetingOutcome
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MeetingReportUpdateattendeesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MeetingReportUpdateactionItemsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneWithoutMeetingReportsNestedInput = {
    create?: XOR<UserCreateWithoutMeetingReportsInput, UserUncheckedCreateWithoutMeetingReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingReportsInput
    upsert?: UserUpsertWithoutMeetingReportsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeetingReportsInput, UserUpdateWithoutMeetingReportsInput>, UserUncheckedUpdateWithoutMeetingReportsInput>
  }

  export type DailyReportCreatelinksInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutDailyReportsInput = {
    create?: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyReportsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DailyReportUpdatelinksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutDailyReportsNestedInput = {
    create?: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyReportsInput
    upsert?: UserUpsertWithoutDailyReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyReportsInput, UserUpdateWithoutDailyReportsInput>, UserUncheckedUpdateWithoutDailyReportsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumWebhookStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookStatus | EnumWebhookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookStatus[] | ListEnumWebhookStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookStatus[] | ListEnumWebhookStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookStatusFilter<$PrismaModel> | $Enums.WebhookStatus
  }

  export type NestedEnumWebhookStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookStatus | EnumWebhookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebhookStatus[] | ListEnumWebhookStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebhookStatus[] | ListEnumWebhookStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebhookStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebhookStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebhookStatusFilter<$PrismaModel>
    _max?: NestedEnumWebhookStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumMeetingOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingOutcome | EnumMeetingOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingOutcome[] | ListEnumMeetingOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeetingOutcome[] | ListEnumMeetingOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeetingOutcomeFilter<$PrismaModel> | $Enums.MeetingOutcome
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMeetingOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingOutcome | EnumMeetingOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingOutcome[] | ListEnumMeetingOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeetingOutcome[] | ListEnumMeetingOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeetingOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.MeetingOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeetingOutcomeFilter<$PrismaModel>
    _max?: NestedEnumMeetingOutcomeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DailyReportCreateWithoutUserInput = {
    id?: string
    date: Date | string
    ticketsResolved?: number
    chatsHandled?: number
    githubIssues?: number
    emailsProcessed?: number
    callsAttended?: number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    links?: DailyReportCreatelinksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    ticketsResolved?: number
    chatsHandled?: number
    githubIssues?: number
    emailsProcessed?: number
    callsAttended?: number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    links?: DailyReportCreatelinksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportCreateOrConnectWithoutUserInput = {
    where: DailyReportWhereUniqueInput
    create: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput>
  }

  export type DailyReportCreateManyUserInputEnvelope = {
    data: DailyReportCreateManyUserInput | DailyReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MeetingReportCreateWithoutUserInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime?: Date | string | null
    outcome: $Enums.MeetingOutcome
    notes?: string | null
    attendees?: MeetingReportCreateattendeesInput | string[]
    actionItems?: MeetingReportCreateactionItemsInput | string[]
    customerName?: string | null
    customerEmail?: string | null
    hostId?: string | null
    isAssigned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingReportUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime?: Date | string | null
    outcome: $Enums.MeetingOutcome
    notes?: string | null
    attendees?: MeetingReportCreateattendeesInput | string[]
    actionItems?: MeetingReportCreateactionItemsInput | string[]
    customerName?: string | null
    customerEmail?: string | null
    hostId?: string | null
    isAssigned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingReportCreateOrConnectWithoutUserInput = {
    where: MeetingReportWhereUniqueInput
    create: XOR<MeetingReportCreateWithoutUserInput, MeetingReportUncheckedCreateWithoutUserInput>
  }

  export type MeetingReportCreateManyUserInputEnvelope = {
    data: MeetingReportCreateManyUserInput | MeetingReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IncomingWebhookCreateWithoutUserInput = {
    id?: string
    name: string
    url: string
    status?: $Enums.WebhookStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    messageTemplates?: MessageTemplateCreateNestedManyWithoutIncomingWebhookInput
  }

  export type IncomingWebhookUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    url: string
    status?: $Enums.WebhookStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    messageTemplates?: MessageTemplateUncheckedCreateNestedManyWithoutIncomingWebhookInput
  }

  export type IncomingWebhookCreateOrConnectWithoutUserInput = {
    where: IncomingWebhookWhereUniqueInput
    create: XOR<IncomingWebhookCreateWithoutUserInput, IncomingWebhookUncheckedCreateWithoutUserInput>
  }

  export type IncomingWebhookCreateManyUserInputEnvelope = {
    data: IncomingWebhookCreateManyUserInput | IncomingWebhookCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyReportUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyReportWhereUniqueInput
    update: XOR<DailyReportUpdateWithoutUserInput, DailyReportUncheckedUpdateWithoutUserInput>
    create: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput>
  }

  export type DailyReportUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyReportWhereUniqueInput
    data: XOR<DailyReportUpdateWithoutUserInput, DailyReportUncheckedUpdateWithoutUserInput>
  }

  export type DailyReportUpdateManyWithWhereWithoutUserInput = {
    where: DailyReportScalarWhereInput
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyReportScalarWhereInput = {
    AND?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
    OR?: DailyReportScalarWhereInput[]
    NOT?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
    id?: StringFilter<"DailyReport"> | string
    date?: DateTimeFilter<"DailyReport"> | Date | string
    ticketsResolved?: IntFilter<"DailyReport"> | number
    chatsHandled?: IntFilter<"DailyReport"> | number
    githubIssues?: IntFilter<"DailyReport"> | number
    emailsProcessed?: IntFilter<"DailyReport"> | number
    callsAttended?: IntFilter<"DailyReport"> | number
    platformReports?: JsonNullableFilter<"DailyReport">
    notes?: StringNullableFilter<"DailyReport"> | string | null
    links?: StringNullableListFilter<"DailyReport">
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReport"> | Date | string
    userId?: StringFilter<"DailyReport"> | string
  }

  export type MeetingReportUpsertWithWhereUniqueWithoutUserInput = {
    where: MeetingReportWhereUniqueInput
    update: XOR<MeetingReportUpdateWithoutUserInput, MeetingReportUncheckedUpdateWithoutUserInput>
    create: XOR<MeetingReportCreateWithoutUserInput, MeetingReportUncheckedCreateWithoutUserInput>
  }

  export type MeetingReportUpdateWithWhereUniqueWithoutUserInput = {
    where: MeetingReportWhereUniqueInput
    data: XOR<MeetingReportUpdateWithoutUserInput, MeetingReportUncheckedUpdateWithoutUserInput>
  }

  export type MeetingReportUpdateManyWithWhereWithoutUserInput = {
    where: MeetingReportScalarWhereInput
    data: XOR<MeetingReportUpdateManyMutationInput, MeetingReportUncheckedUpdateManyWithoutUserInput>
  }

  export type MeetingReportScalarWhereInput = {
    AND?: MeetingReportScalarWhereInput | MeetingReportScalarWhereInput[]
    OR?: MeetingReportScalarWhereInput[]
    NOT?: MeetingReportScalarWhereInput | MeetingReportScalarWhereInput[]
    id?: StringFilter<"MeetingReport"> | string
    title?: StringFilter<"MeetingReport"> | string
    startTime?: DateTimeFilter<"MeetingReport"> | Date | string
    endTime?: DateTimeNullableFilter<"MeetingReport"> | Date | string | null
    outcome?: EnumMeetingOutcomeFilter<"MeetingReport"> | $Enums.MeetingOutcome
    notes?: StringNullableFilter<"MeetingReport"> | string | null
    attendees?: StringNullableListFilter<"MeetingReport">
    actionItems?: StringNullableListFilter<"MeetingReport">
    customerName?: StringNullableFilter<"MeetingReport"> | string | null
    customerEmail?: StringNullableFilter<"MeetingReport"> | string | null
    hostId?: StringNullableFilter<"MeetingReport"> | string | null
    isAssigned?: BoolFilter<"MeetingReport"> | boolean
    createdAt?: DateTimeFilter<"MeetingReport"> | Date | string
    updatedAt?: DateTimeFilter<"MeetingReport"> | Date | string
    userId?: StringNullableFilter<"MeetingReport"> | string | null
  }

  export type IncomingWebhookUpsertWithWhereUniqueWithoutUserInput = {
    where: IncomingWebhookWhereUniqueInput
    update: XOR<IncomingWebhookUpdateWithoutUserInput, IncomingWebhookUncheckedUpdateWithoutUserInput>
    create: XOR<IncomingWebhookCreateWithoutUserInput, IncomingWebhookUncheckedCreateWithoutUserInput>
  }

  export type IncomingWebhookUpdateWithWhereUniqueWithoutUserInput = {
    where: IncomingWebhookWhereUniqueInput
    data: XOR<IncomingWebhookUpdateWithoutUserInput, IncomingWebhookUncheckedUpdateWithoutUserInput>
  }

  export type IncomingWebhookUpdateManyWithWhereWithoutUserInput = {
    where: IncomingWebhookScalarWhereInput
    data: XOR<IncomingWebhookUpdateManyMutationInput, IncomingWebhookUncheckedUpdateManyWithoutUserInput>
  }

  export type IncomingWebhookScalarWhereInput = {
    AND?: IncomingWebhookScalarWhereInput | IncomingWebhookScalarWhereInput[]
    OR?: IncomingWebhookScalarWhereInput[]
    NOT?: IncomingWebhookScalarWhereInput | IncomingWebhookScalarWhereInput[]
    id?: StringFilter<"IncomingWebhook"> | string
    name?: StringFilter<"IncomingWebhook"> | string
    url?: StringFilter<"IncomingWebhook"> | string
    status?: EnumWebhookStatusFilter<"IncomingWebhook"> | $Enums.WebhookStatus
    createdAt?: DateTimeFilter<"IncomingWebhook"> | Date | string
    updatedAt?: DateTimeFilter<"IncomingWebhook"> | Date | string
    userId?: StringFilter<"IncomingWebhook"> | string
  }

  export type UserCreateWithoutWebhooksInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyReports?: DailyReportCreateNestedManyWithoutUserInput
    meetingReports?: MeetingReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWebhooksInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutUserInput
    meetingReports?: MeetingReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWebhooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWebhooksInput, UserUncheckedCreateWithoutWebhooksInput>
  }

  export type MessageTemplateCreateWithoutIncomingWebhookInput = {
    id?: string
    name: string
    template: string
    variables?: MessageTemplateCreatevariablesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageTemplateUncheckedCreateWithoutIncomingWebhookInput = {
    id?: string
    name: string
    template: string
    variables?: MessageTemplateCreatevariablesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageTemplateCreateOrConnectWithoutIncomingWebhookInput = {
    where: MessageTemplateWhereUniqueInput
    create: XOR<MessageTemplateCreateWithoutIncomingWebhookInput, MessageTemplateUncheckedCreateWithoutIncomingWebhookInput>
  }

  export type MessageTemplateCreateManyIncomingWebhookInputEnvelope = {
    data: MessageTemplateCreateManyIncomingWebhookInput | MessageTemplateCreateManyIncomingWebhookInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWebhooksInput = {
    update: XOR<UserUpdateWithoutWebhooksInput, UserUncheckedUpdateWithoutWebhooksInput>
    create: XOR<UserCreateWithoutWebhooksInput, UserUncheckedCreateWithoutWebhooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWebhooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWebhooksInput, UserUncheckedUpdateWithoutWebhooksInput>
  }

  export type UserUpdateWithoutWebhooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyReportUpdateManyWithoutUserNestedInput
    meetingReports?: MeetingReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWebhooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyReportUncheckedUpdateManyWithoutUserNestedInput
    meetingReports?: MeetingReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageTemplateUpsertWithWhereUniqueWithoutIncomingWebhookInput = {
    where: MessageTemplateWhereUniqueInput
    update: XOR<MessageTemplateUpdateWithoutIncomingWebhookInput, MessageTemplateUncheckedUpdateWithoutIncomingWebhookInput>
    create: XOR<MessageTemplateCreateWithoutIncomingWebhookInput, MessageTemplateUncheckedCreateWithoutIncomingWebhookInput>
  }

  export type MessageTemplateUpdateWithWhereUniqueWithoutIncomingWebhookInput = {
    where: MessageTemplateWhereUniqueInput
    data: XOR<MessageTemplateUpdateWithoutIncomingWebhookInput, MessageTemplateUncheckedUpdateWithoutIncomingWebhookInput>
  }

  export type MessageTemplateUpdateManyWithWhereWithoutIncomingWebhookInput = {
    where: MessageTemplateScalarWhereInput
    data: XOR<MessageTemplateUpdateManyMutationInput, MessageTemplateUncheckedUpdateManyWithoutIncomingWebhookInput>
  }

  export type MessageTemplateScalarWhereInput = {
    AND?: MessageTemplateScalarWhereInput | MessageTemplateScalarWhereInput[]
    OR?: MessageTemplateScalarWhereInput[]
    NOT?: MessageTemplateScalarWhereInput | MessageTemplateScalarWhereInput[]
    id?: StringFilter<"MessageTemplate"> | string
    name?: StringFilter<"MessageTemplate"> | string
    template?: StringFilter<"MessageTemplate"> | string
    variables?: StringNullableListFilter<"MessageTemplate">
    createdAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    incomingWebhookId?: StringFilter<"MessageTemplate"> | string
  }

  export type IncomingWebhookCreateWithoutMessageTemplatesInput = {
    id?: string
    name: string
    url: string
    status?: $Enums.WebhookStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWebhooksInput
  }

  export type IncomingWebhookUncheckedCreateWithoutMessageTemplatesInput = {
    id?: string
    name: string
    url: string
    status?: $Enums.WebhookStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type IncomingWebhookCreateOrConnectWithoutMessageTemplatesInput = {
    where: IncomingWebhookWhereUniqueInput
    create: XOR<IncomingWebhookCreateWithoutMessageTemplatesInput, IncomingWebhookUncheckedCreateWithoutMessageTemplatesInput>
  }

  export type IncomingWebhookUpsertWithoutMessageTemplatesInput = {
    update: XOR<IncomingWebhookUpdateWithoutMessageTemplatesInput, IncomingWebhookUncheckedUpdateWithoutMessageTemplatesInput>
    create: XOR<IncomingWebhookCreateWithoutMessageTemplatesInput, IncomingWebhookUncheckedCreateWithoutMessageTemplatesInput>
    where?: IncomingWebhookWhereInput
  }

  export type IncomingWebhookUpdateToOneWithWhereWithoutMessageTemplatesInput = {
    where?: IncomingWebhookWhereInput
    data: XOR<IncomingWebhookUpdateWithoutMessageTemplatesInput, IncomingWebhookUncheckedUpdateWithoutMessageTemplatesInput>
  }

  export type IncomingWebhookUpdateWithoutMessageTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookStatusFieldUpdateOperationsInput | $Enums.WebhookStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWebhooksNestedInput
  }

  export type IncomingWebhookUncheckedUpdateWithoutMessageTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookStatusFieldUpdateOperationsInput | $Enums.WebhookStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutMeetingReportsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyReports?: DailyReportCreateNestedManyWithoutUserInput
    webhooks?: IncomingWebhookCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMeetingReportsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutUserInput
    webhooks?: IncomingWebhookUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMeetingReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeetingReportsInput, UserUncheckedCreateWithoutMeetingReportsInput>
  }

  export type UserUpsertWithoutMeetingReportsInput = {
    update: XOR<UserUpdateWithoutMeetingReportsInput, UserUncheckedUpdateWithoutMeetingReportsInput>
    create: XOR<UserCreateWithoutMeetingReportsInput, UserUncheckedCreateWithoutMeetingReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeetingReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeetingReportsInput, UserUncheckedUpdateWithoutMeetingReportsInput>
  }

  export type UserUpdateWithoutMeetingReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyReportUpdateManyWithoutUserNestedInput
    webhooks?: IncomingWebhookUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMeetingReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyReportUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: IncomingWebhookUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDailyReportsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    meetingReports?: MeetingReportCreateNestedManyWithoutUserInput
    webhooks?: IncomingWebhookCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyReportsInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    meetingReports?: MeetingReportUncheckedCreateNestedManyWithoutUserInput
    webhooks?: IncomingWebhookUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
  }

  export type UserUpsertWithoutDailyReportsInput = {
    update: XOR<UserUpdateWithoutDailyReportsInput, UserUncheckedUpdateWithoutDailyReportsInput>
    create: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyReportsInput, UserUncheckedUpdateWithoutDailyReportsInput>
  }

  export type UserUpdateWithoutDailyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingReports?: MeetingReportUpdateManyWithoutUserNestedInput
    webhooks?: IncomingWebhookUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingReports?: MeetingReportUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: IncomingWebhookUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DailyReportCreateManyUserInput = {
    id?: string
    date: Date | string
    ticketsResolved?: number
    chatsHandled?: number
    githubIssues?: number
    emailsProcessed?: number
    callsAttended?: number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    links?: DailyReportCreatelinksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingReportCreateManyUserInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime?: Date | string | null
    outcome: $Enums.MeetingOutcome
    notes?: string | null
    attendees?: MeetingReportCreateattendeesInput | string[]
    actionItems?: MeetingReportCreateactionItemsInput | string[]
    customerName?: string | null
    customerEmail?: string | null
    hostId?: string | null
    isAssigned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncomingWebhookCreateManyUserInput = {
    id?: string
    name: string
    url: string
    status?: $Enums.WebhookStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketsResolved?: IntFieldUpdateOperationsInput | number
    chatsHandled?: IntFieldUpdateOperationsInput | number
    githubIssues?: IntFieldUpdateOperationsInput | number
    emailsProcessed?: IntFieldUpdateOperationsInput | number
    callsAttended?: IntFieldUpdateOperationsInput | number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    links?: DailyReportUpdatelinksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketsResolved?: IntFieldUpdateOperationsInput | number
    chatsHandled?: IntFieldUpdateOperationsInput | number
    githubIssues?: IntFieldUpdateOperationsInput | number
    emailsProcessed?: IntFieldUpdateOperationsInput | number
    callsAttended?: IntFieldUpdateOperationsInput | number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    links?: DailyReportUpdatelinksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketsResolved?: IntFieldUpdateOperationsInput | number
    chatsHandled?: IntFieldUpdateOperationsInput | number
    githubIssues?: IntFieldUpdateOperationsInput | number
    emailsProcessed?: IntFieldUpdateOperationsInput | number
    callsAttended?: IntFieldUpdateOperationsInput | number
    platformReports?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    links?: DailyReportUpdatelinksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: EnumMeetingOutcomeFieldUpdateOperationsInput | $Enums.MeetingOutcome
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: MeetingReportUpdateattendeesInput | string[]
    actionItems?: MeetingReportUpdateactionItemsInput | string[]
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hostId?: NullableStringFieldUpdateOperationsInput | string | null
    isAssigned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: EnumMeetingOutcomeFieldUpdateOperationsInput | $Enums.MeetingOutcome
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: MeetingReportUpdateattendeesInput | string[]
    actionItems?: MeetingReportUpdateactionItemsInput | string[]
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hostId?: NullableStringFieldUpdateOperationsInput | string | null
    isAssigned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outcome?: EnumMeetingOutcomeFieldUpdateOperationsInput | $Enums.MeetingOutcome
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: MeetingReportUpdateattendeesInput | string[]
    actionItems?: MeetingReportUpdateactionItemsInput | string[]
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hostId?: NullableStringFieldUpdateOperationsInput | string | null
    isAssigned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomingWebhookUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookStatusFieldUpdateOperationsInput | $Enums.WebhookStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageTemplates?: MessageTemplateUpdateManyWithoutIncomingWebhookNestedInput
  }

  export type IncomingWebhookUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookStatusFieldUpdateOperationsInput | $Enums.WebhookStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageTemplates?: MessageTemplateUncheckedUpdateManyWithoutIncomingWebhookNestedInput
  }

  export type IncomingWebhookUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumWebhookStatusFieldUpdateOperationsInput | $Enums.WebhookStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageTemplateCreateManyIncomingWebhookInput = {
    id?: string
    name: string
    template: string
    variables?: MessageTemplateCreatevariablesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageTemplateUpdateWithoutIncomingWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: MessageTemplateUpdatevariablesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageTemplateUncheckedUpdateWithoutIncomingWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: MessageTemplateUpdatevariablesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageTemplateUncheckedUpdateManyWithoutIncomingWebhookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    variables?: MessageTemplateUpdatevariablesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IncomingWebhookCountOutputTypeDefaultArgs instead
     */
    export type IncomingWebhookCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IncomingWebhookCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IncomingWebhookDefaultArgs instead
     */
    export type IncomingWebhookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IncomingWebhookDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageTemplateDefaultArgs instead
     */
    export type MessageTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupportPlatformDefaultArgs instead
     */
    export type SupportPlatformArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupportPlatformDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeetingReportDefaultArgs instead
     */
    export type MeetingReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeetingReportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyReportDefaultArgs instead
     */
    export type DailyReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyReportDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}