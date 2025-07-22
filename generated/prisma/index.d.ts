
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
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model WarehouseInventory
 * 
 */
export type WarehouseInventory = $Result.DefaultSelection<Prisma.$WarehouseInventoryPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMINISTRATOR: 'ADMINISTRATOR',
  FARMER: 'FARMER',
  BUYER: 'BUYER',
  WAREHOUSE_GUY: 'WAREHOUSE_GUY'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER',
  MOBILE_MONEY: 'MOBILE_MONEY',
  CHEQUE: 'CHEQUE',
  CREDIT_CARD: 'CREDIT_CARD',
  DEBIT_CARD: 'DEBIT_CARD'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const InvitationStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED'
};

export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus]


export const MovementType: {
  IN: 'IN',
  OUT: 'OUT',
  ADJUSTMENT: 'ADJUSTMENT',
  TRANSFER: 'TRANSFER',
  DAMAGED: 'DAMAGED',
  EXPIRED: 'EXPIRED'
};

export type MovementType = (typeof MovementType)[keyof typeof MovementType]


export const ActionType: {
  CREATED: 'CREATED',
  UPDATED: 'UPDATED',
  DELETED: 'DELETED',
  ACTIVATED: 'ACTIVATED',
  DEACTIVATED: 'DEACTIVATED',
  SUSPENDED: 'SUSPENDED',
  INVITED: 'INVITED',
  ACCEPTED_INVITATION: 'ACCEPTED_INVITATION',
  REJECTED_INVITATION: 'REJECTED_INVITATION',
  PAYMENT_PROCESSED: 'PAYMENT_PROCESSED',
  INVENTORY_UPDATED: 'INVENTORY_UPDATED',
  PASSWORD_RESET: 'PASSWORD_RESET',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

export type ActionType = (typeof ActionType)[keyof typeof ActionType]


export const EntityType: {
  USER: 'USER',
  PRODUCT: 'PRODUCT',
  WAREHOUSE: 'WAREHOUSE',
  PAYMENT: 'PAYMENT',
  INVITATION: 'INVITATION',
  INVENTORY: 'INVENTORY',
  SYSTEM: 'SYSTEM'
};

export type EntityType = (typeof EntityType)[keyof typeof EntityType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type InvitationStatus = $Enums.InvitationStatus

export const InvitationStatus: typeof $Enums.InvitationStatus

export type MovementType = $Enums.MovementType

export const MovementType: typeof $Enums.MovementType

export type ActionType = $Enums.ActionType

export const ActionType: typeof $Enums.ActionType

export type EntityType = $Enums.EntityType

export const EntityType: typeof $Enums.EntityType

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouseInventory`: Exposes CRUD operations for the **WarehouseInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WarehouseInventories
    * const warehouseInventories = await prisma.warehouseInventory.findMany()
    * ```
    */
  get warehouseInventory(): Prisma.WarehouseInventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Warehouse: 'Warehouse',
    Products: 'Products',
    WarehouseInventory: 'WarehouseInventory',
    Payment: 'Payment',
    Invitation: 'Invitation',
    ActivityLog: 'ActivityLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "warehouse" | "products" | "warehouseInventory" | "payment" | "invitation" | "activityLog"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarehouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      WarehouseInventory: {
        payload: Prisma.$WarehouseInventoryPayload<ExtArgs>
        fields: Prisma.WarehouseInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseInventoryPayload>
          }
          findFirst: {
            args: Prisma.WarehouseInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseInventoryPayload>
          }
          findMany: {
            args: Prisma.WarehouseInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseInventoryPayload>[]
          }
          create: {
            args: Prisma.WarehouseInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseInventoryPayload>
          }
          createMany: {
            args: Prisma.WarehouseInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehouseInventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseInventoryPayload>[]
          }
          delete: {
            args: Prisma.WarehouseInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseInventoryPayload>
          }
          update: {
            args: Prisma.WarehouseInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseInventoryPayload>
          }
          deleteMany: {
            args: Prisma.WarehouseInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarehouseInventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseInventoryPayload>[]
          }
          upsert: {
            args: Prisma.WarehouseInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseInventoryPayload>
          }
          aggregate: {
            args: Prisma.WarehouseInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouseInventory>
          }
          groupBy: {
            args: Prisma.WarehouseInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseInventoryCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    warehouse?: WarehouseOmit
    products?: ProductsOmit
    warehouseInventory?: WarehouseInventoryOmit
    payment?: PaymentOmit
    invitation?: InvitationOmit
    activityLog?: ActivityLogOmit
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
    | 'updateManyAndReturn'
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
    createdUsers: number
    modifiedUsers: number
    products: number
    farmerPayments: number
    processedPayments: number
    sentInvitations: number
    receivedInvitations: number
    activityLogs: number
    performedActions: number
    inventoryRecords: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdUsers?: boolean | UserCountOutputTypeCountCreatedUsersArgs
    modifiedUsers?: boolean | UserCountOutputTypeCountModifiedUsersArgs
    products?: boolean | UserCountOutputTypeCountProductsArgs
    farmerPayments?: boolean | UserCountOutputTypeCountFarmerPaymentsArgs
    processedPayments?: boolean | UserCountOutputTypeCountProcessedPaymentsArgs
    sentInvitations?: boolean | UserCountOutputTypeCountSentInvitationsArgs
    receivedInvitations?: boolean | UserCountOutputTypeCountReceivedInvitationsArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
    performedActions?: boolean | UserCountOutputTypeCountPerformedActionsArgs
    inventoryRecords?: boolean | UserCountOutputTypeCountInventoryRecordsArgs
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
  export type UserCountOutputTypeCountCreatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModifiedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFarmerPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProcessedPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPerformedActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInventoryRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseInventoryWhereInput
  }


  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    farmers: number
    inventory: number
    products: number
    invitations: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmers?: boolean | WarehouseCountOutputTypeCountFarmersArgs
    inventory?: boolean | WarehouseCountOutputTypeCountInventoryArgs
    products?: boolean | WarehouseCountOutputTypeCountProductsArgs
    invitations?: boolean | WarehouseCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountFarmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseInventoryWhereInput
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    inventoryMovements: number
    payments: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryMovements?: boolean | ProductsCountOutputTypeCountInventoryMovementsArgs
    payments?: boolean | ProductsCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountInventoryMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseInventoryWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    warehouseId: number | null
    createdById: number | null
    lastModifiedById: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    warehouseId: number | null
    createdById: number | null
    lastModifiedById: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    Fname: string | null
    Mname: string | null
    Lname: string | null
    photo: string | null
    phone: string | null
    address: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    isGoogleUser: boolean | null
    googleId: string | null
    emailVerified: boolean | null
    emailConfirmationToken: string | null
    emailConfirmationTokenExpiry: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    warehouseId: number | null
    createdById: number | null
    lastModifiedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    Fname: string | null
    Mname: string | null
    Lname: string | null
    photo: string | null
    phone: string | null
    address: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    isGoogleUser: boolean | null
    googleId: string | null
    emailVerified: boolean | null
    emailConfirmationToken: string | null
    emailConfirmationTokenExpiry: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    warehouseId: number | null
    createdById: number | null
    lastModifiedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    Fname: number
    Mname: number
    Lname: number
    photo: number
    phone: number
    address: number
    role: number
    status: number
    isGoogleUser: number
    googleId: number
    emailVerified: number
    emailConfirmationToken: number
    emailConfirmationTokenExpiry: number
    resetToken: number
    resetTokenExpiry: number
    warehouseId: number
    createdById: number
    lastModifiedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    warehouseId?: true
    createdById?: true
    lastModifiedById?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    warehouseId?: true
    createdById?: true
    lastModifiedById?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    Fname?: true
    Mname?: true
    Lname?: true
    photo?: true
    phone?: true
    address?: true
    role?: true
    status?: true
    isGoogleUser?: true
    googleId?: true
    emailVerified?: true
    emailConfirmationToken?: true
    emailConfirmationTokenExpiry?: true
    resetToken?: true
    resetTokenExpiry?: true
    warehouseId?: true
    createdById?: true
    lastModifiedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    Fname?: true
    Mname?: true
    Lname?: true
    photo?: true
    phone?: true
    address?: true
    role?: true
    status?: true
    isGoogleUser?: true
    googleId?: true
    emailVerified?: true
    emailConfirmationToken?: true
    emailConfirmationTokenExpiry?: true
    resetToken?: true
    resetTokenExpiry?: true
    warehouseId?: true
    createdById?: true
    lastModifiedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    Fname?: true
    Mname?: true
    Lname?: true
    photo?: true
    phone?: true
    address?: true
    role?: true
    status?: true
    isGoogleUser?: true
    googleId?: true
    emailVerified?: true
    emailConfirmationToken?: true
    emailConfirmationTokenExpiry?: true
    resetToken?: true
    resetTokenExpiry?: true
    warehouseId?: true
    createdById?: true
    lastModifiedById?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string | null
    Fname: string
    Mname: string | null
    Lname: string
    photo: string | null
    phone: string | null
    address: string | null
    role: $Enums.Role
    status: $Enums.UserStatus
    isGoogleUser: boolean | null
    googleId: string | null
    emailVerified: boolean | null
    emailConfirmationToken: string | null
    emailConfirmationTokenExpiry: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    warehouseId: number | null
    createdById: number | null
    lastModifiedById: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    password?: boolean
    Fname?: boolean
    Mname?: boolean
    Lname?: boolean
    photo?: boolean
    phone?: boolean
    address?: boolean
    role?: boolean
    status?: boolean
    isGoogleUser?: boolean
    googleId?: boolean
    emailVerified?: boolean
    emailConfirmationToken?: boolean
    emailConfirmationTokenExpiry?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    warehouseId?: boolean
    createdById?: boolean
    lastModifiedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    warehouse?: boolean | User$warehouseArgs<ExtArgs>
    managedWarehouse?: boolean | User$managedWarehouseArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    lastModifiedBy?: boolean | User$lastModifiedByArgs<ExtArgs>
    modifiedUsers?: boolean | User$modifiedUsersArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    farmerPayments?: boolean | User$farmerPaymentsArgs<ExtArgs>
    processedPayments?: boolean | User$processedPaymentsArgs<ExtArgs>
    sentInvitations?: boolean | User$sentInvitationsArgs<ExtArgs>
    receivedInvitations?: boolean | User$receivedInvitationsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    performedActions?: boolean | User$performedActionsArgs<ExtArgs>
    inventoryRecords?: boolean | User$inventoryRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    Fname?: boolean
    Mname?: boolean
    Lname?: boolean
    photo?: boolean
    phone?: boolean
    address?: boolean
    role?: boolean
    status?: boolean
    isGoogleUser?: boolean
    googleId?: boolean
    emailVerified?: boolean
    emailConfirmationToken?: boolean
    emailConfirmationTokenExpiry?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    warehouseId?: boolean
    createdById?: boolean
    lastModifiedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    warehouse?: boolean | User$warehouseArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    lastModifiedBy?: boolean | User$lastModifiedByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    Fname?: boolean
    Mname?: boolean
    Lname?: boolean
    photo?: boolean
    phone?: boolean
    address?: boolean
    role?: boolean
    status?: boolean
    isGoogleUser?: boolean
    googleId?: boolean
    emailVerified?: boolean
    emailConfirmationToken?: boolean
    emailConfirmationTokenExpiry?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    warehouseId?: boolean
    createdById?: boolean
    lastModifiedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    warehouse?: boolean | User$warehouseArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    lastModifiedBy?: boolean | User$lastModifiedByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    Fname?: boolean
    Mname?: boolean
    Lname?: boolean
    photo?: boolean
    phone?: boolean
    address?: boolean
    role?: boolean
    status?: boolean
    isGoogleUser?: boolean
    googleId?: boolean
    emailVerified?: boolean
    emailConfirmationToken?: boolean
    emailConfirmationTokenExpiry?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    warehouseId?: boolean
    createdById?: boolean
    lastModifiedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "Fname" | "Mname" | "Lname" | "photo" | "phone" | "address" | "role" | "status" | "isGoogleUser" | "googleId" | "emailVerified" | "emailConfirmationToken" | "emailConfirmationTokenExpiry" | "resetToken" | "resetTokenExpiry" | "warehouseId" | "createdById" | "lastModifiedById" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | User$warehouseArgs<ExtArgs>
    managedWarehouse?: boolean | User$managedWarehouseArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    lastModifiedBy?: boolean | User$lastModifiedByArgs<ExtArgs>
    modifiedUsers?: boolean | User$modifiedUsersArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    farmerPayments?: boolean | User$farmerPaymentsArgs<ExtArgs>
    processedPayments?: boolean | User$processedPaymentsArgs<ExtArgs>
    sentInvitations?: boolean | User$sentInvitationsArgs<ExtArgs>
    receivedInvitations?: boolean | User$receivedInvitationsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    performedActions?: boolean | User$performedActionsArgs<ExtArgs>
    inventoryRecords?: boolean | User$inventoryRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | User$warehouseArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    lastModifiedBy?: boolean | User$lastModifiedByArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | User$warehouseArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    lastModifiedBy?: boolean | User$lastModifiedByArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      warehouse: Prisma.$WarehousePayload<ExtArgs> | null
      managedWarehouse: Prisma.$WarehousePayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      createdUsers: Prisma.$UserPayload<ExtArgs>[]
      lastModifiedBy: Prisma.$UserPayload<ExtArgs> | null
      modifiedUsers: Prisma.$UserPayload<ExtArgs>[]
      products: Prisma.$ProductsPayload<ExtArgs>[]
      farmerPayments: Prisma.$PaymentPayload<ExtArgs>[]
      processedPayments: Prisma.$PaymentPayload<ExtArgs>[]
      sentInvitations: Prisma.$InvitationPayload<ExtArgs>[]
      receivedInvitations: Prisma.$InvitationPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      performedActions: Prisma.$ActivityLogPayload<ExtArgs>[]
      inventoryRecords: Prisma.$WarehouseInventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string | null
      Fname: string
      Mname: string | null
      Lname: string
      photo: string | null
      phone: string | null
      address: string | null
      role: $Enums.Role
      status: $Enums.UserStatus
      isGoogleUser: boolean | null
      googleId: string | null
      emailVerified: boolean | null
      emailConfirmationToken: string | null
      emailConfirmationTokenExpiry: Date | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      warehouseId: number | null
      createdById: number | null
      lastModifiedById: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warehouse<T extends User$warehouseArgs<ExtArgs> = {}>(args?: Subset<T, User$warehouseArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    managedWarehouse<T extends User$managedWarehouseArgs<ExtArgs> = {}>(args?: Subset<T, User$managedWarehouseArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends User$createdByArgs<ExtArgs> = {}>(args?: Subset<T, User$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdUsers<T extends User$createdUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lastModifiedBy<T extends User$lastModifiedByArgs<ExtArgs> = {}>(args?: Subset<T, User$lastModifiedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    modifiedUsers<T extends User$modifiedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$modifiedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends User$productsArgs<ExtArgs> = {}>(args?: Subset<T, User$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    farmerPayments<T extends User$farmerPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$farmerPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    processedPayments<T extends User$processedPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$processedPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentInvitations<T extends User$sentInvitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedInvitations<T extends User$receivedInvitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    performedActions<T extends User$performedActionsArgs<ExtArgs> = {}>(args?: Subset<T, User$performedActionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryRecords<T extends User$inventoryRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$inventoryRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly Fname: FieldRef<"User", 'String'>
    readonly Mname: FieldRef<"User", 'String'>
    readonly Lname: FieldRef<"User", 'String'>
    readonly photo: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly isGoogleUser: FieldRef<"User", 'Boolean'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly emailConfirmationToken: FieldRef<"User", 'String'>
    readonly emailConfirmationTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly warehouseId: FieldRef<"User", 'Int'>
    readonly createdById: FieldRef<"User", 'Int'>
    readonly lastModifiedById: FieldRef<"User", 'Int'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.warehouse
   */
  export type User$warehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    where?: WarehouseWhereInput
  }

  /**
   * User.managedWarehouse
   */
  export type User$managedWarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    where?: WarehouseWhereInput
  }

  /**
   * User.createdBy
   */
  export type User$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.createdUsers
   */
  export type User$createdUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.lastModifiedBy
   */
  export type User$lastModifiedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.modifiedUsers
   */
  export type User$modifiedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.products
   */
  export type User$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * User.farmerPayments
   */
  export type User$farmerPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.processedPayments
   */
  export type User$processedPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.sentInvitations
   */
  export type User$sentInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * User.receivedInvitations
   */
  export type User$receivedInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.performedActions
   */
  export type User$performedActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.inventoryRecords
   */
  export type User$inventoryRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
    where?: WarehouseInventoryWhereInput
    orderBy?: WarehouseInventoryOrderByWithRelationInput | WarehouseInventoryOrderByWithRelationInput[]
    cursor?: WarehouseInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseInventoryScalarFieldEnum | WarehouseInventoryScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
    managerId: number | null
  }

  export type WarehouseSumAggregateOutputType = {
    id: number | null
    capacity: number | null
    managerId: number | null
  }

  export type WarehouseMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    address: string | null
    capacity: number | null
    phone: string | null
    email: string | null
    managerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WarehouseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    address: string | null
    capacity: number | null
    phone: string | null
    email: string | null
    managerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WarehouseCountAggregateOutputType = {
    id: number
    name: number
    location: number
    address: number
    capacity: number
    phone: number
    email: number
    managerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WarehouseAvgAggregateInputType = {
    id?: true
    capacity?: true
    managerId?: true
  }

  export type WarehouseSumAggregateInputType = {
    id?: true
    capacity?: true
    managerId?: true
  }

  export type WarehouseMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    address?: true
    capacity?: true
    phone?: true
    email?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WarehouseMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    address?: true
    capacity?: true
    phone?: true
    email?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WarehouseCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    address?: true
    capacity?: true
    phone?: true
    email?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _avg?: WarehouseAvgAggregateInputType
    _sum?: WarehouseSumAggregateInputType
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    id: number
    name: string
    location: string
    address: string | null
    capacity: number | null
    phone: string | null
    email: string | null
    managerId: number
    createdAt: Date
    updatedAt: Date
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    address?: boolean
    capacity?: boolean
    phone?: boolean
    email?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    manager?: boolean | UserDefaultArgs<ExtArgs>
    farmers?: boolean | Warehouse$farmersArgs<ExtArgs>
    inventory?: boolean | Warehouse$inventoryArgs<ExtArgs>
    products?: boolean | Warehouse$productsArgs<ExtArgs>
    invitations?: boolean | Warehouse$invitationsArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    address?: boolean
    capacity?: boolean
    phone?: boolean
    email?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    address?: boolean
    capacity?: boolean
    phone?: boolean
    email?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    address?: boolean
    capacity?: boolean
    phone?: boolean
    email?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WarehouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "address" | "capacity" | "phone" | "email" | "managerId" | "createdAt" | "updatedAt", ExtArgs["result"]["warehouse"]>
  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | UserDefaultArgs<ExtArgs>
    farmers?: boolean | Warehouse$farmersArgs<ExtArgs>
    inventory?: boolean | Warehouse$inventoryArgs<ExtArgs>
    products?: boolean | Warehouse$productsArgs<ExtArgs>
    invitations?: boolean | Warehouse$invitationsArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WarehouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WarehouseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      manager: Prisma.$UserPayload<ExtArgs>
      farmers: Prisma.$UserPayload<ExtArgs>[]
      inventory: Prisma.$WarehouseInventoryPayload<ExtArgs>[]
      products: Prisma.$ProductsPayload<ExtArgs>[]
      invitations: Prisma.$InvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string
      address: string | null
      capacity: number | null
      phone: string | null
      email: string | null
      managerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }

  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseFindUniqueArgs>(args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseFindFirstArgs>(args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehouseFindManyArgs>(args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
     */
    create<T extends WarehouseCreateArgs>(args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseCreateManyArgs>(args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {WarehouseCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehouseCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
     */
    delete<T extends WarehouseDeleteArgs>(args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseUpdateArgs>(args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseUpdateManyArgs>(args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses and returns the data updated in the database.
     * @param {WarehouseUpdateManyAndReturnArgs} args - Arguments to update many Warehouses.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarehouseUpdateManyAndReturnArgs>(args: SelectSubset<T, WarehouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseUpsertArgs>(args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
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
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    farmers<T extends Warehouse$farmersArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$farmersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory<T extends Warehouse$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Warehouse$productsArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends Warehouse$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Warehouse model
   */
  interface WarehouseFieldRefs {
    readonly id: FieldRef<"Warehouse", 'Int'>
    readonly name: FieldRef<"Warehouse", 'String'>
    readonly location: FieldRef<"Warehouse", 'String'>
    readonly address: FieldRef<"Warehouse", 'String'>
    readonly capacity: FieldRef<"Warehouse", 'Int'>
    readonly phone: FieldRef<"Warehouse", 'String'>
    readonly email: FieldRef<"Warehouse", 'String'>
    readonly managerId: FieldRef<"Warehouse", 'Int'>
    readonly createdAt: FieldRef<"Warehouse", 'DateTime'>
    readonly updatedAt: FieldRef<"Warehouse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }

  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouse createManyAndReturn
   */
  export type WarehouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouse updateManyAndReturn
   */
  export type WarehouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }

  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to delete.
     */
    limit?: number
  }

  /**
   * Warehouse.farmers
   */
  export type Warehouse$farmersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Warehouse.inventory
   */
  export type Warehouse$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
    where?: WarehouseInventoryWhereInput
    orderBy?: WarehouseInventoryOrderByWithRelationInput | WarehouseInventoryOrderByWithRelationInput[]
    cursor?: WarehouseInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseInventoryScalarFieldEnum | WarehouseInventoryScalarFieldEnum[]
  }

  /**
   * Warehouse.products
   */
  export type Warehouse$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Warehouse.invitations
   */
  export type Warehouse$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    farmerId: number | null
    warehouseId: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    farmerId: number | null
    warehouseId: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    grade: string | null
    quantity: number | null
    price: number | null
    variety: string | null
    location: string | null
    image: string | null
    description: string | null
    farmerId: number | null
    warehouseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    grade: string | null
    quantity: number | null
    price: number | null
    variety: string | null
    location: string | null
    image: string | null
    description: string | null
    farmerId: number | null
    warehouseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    grade: number
    quantity: number
    price: number
    variety: number
    location: number
    image: number
    description: number
    farmerId: number
    warehouseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    farmerId?: true
    warehouseId?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    farmerId?: true
    warehouseId?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    grade?: true
    quantity?: true
    price?: true
    variety?: true
    location?: true
    image?: true
    description?: true
    farmerId?: true
    warehouseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    grade?: true
    quantity?: true
    price?: true
    variety?: true
    location?: true
    image?: true
    description?: true
    farmerId?: true
    warehouseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    grade?: true
    quantity?: true
    price?: true
    variety?: true
    location?: true
    image?: true
    description?: true
    farmerId?: true
    warehouseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image: string | null
    description: string | null
    farmerId: number
    warehouseId: number
    createdAt: Date
    updatedAt: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    grade?: boolean
    quantity?: boolean
    price?: boolean
    variety?: boolean
    location?: boolean
    image?: boolean
    description?: boolean
    farmerId?: boolean
    warehouseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    inventoryMovements?: boolean | Products$inventoryMovementsArgs<ExtArgs>
    payments?: boolean | Products$paymentsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    grade?: boolean
    quantity?: boolean
    price?: boolean
    variety?: boolean
    location?: boolean
    image?: boolean
    description?: boolean
    farmerId?: boolean
    warehouseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    grade?: boolean
    quantity?: boolean
    price?: boolean
    variety?: boolean
    location?: boolean
    image?: boolean
    description?: boolean
    farmerId?: boolean
    warehouseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    name?: boolean
    grade?: boolean
    quantity?: boolean
    price?: boolean
    variety?: boolean
    location?: boolean
    image?: boolean
    description?: boolean
    farmerId?: boolean
    warehouseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "grade" | "quantity" | "price" | "variety" | "location" | "image" | "description" | "farmerId" | "warehouseId" | "createdAt" | "updatedAt", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    inventoryMovements?: boolean | Products$inventoryMovementsArgs<ExtArgs>
    payments?: boolean | Products$paymentsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      farmer: Prisma.$UserPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
      inventoryMovements: Prisma.$WarehouseInventoryPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      grade: string
      quantity: number
      price: number
      variety: string
      location: string
      image: string | null
      description: string | null
      farmerId: number
      warehouseId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventoryMovements<T extends Products$inventoryMovementsArgs<ExtArgs> = {}>(args?: Subset<T, Products$inventoryMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Products$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Products$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'Int'>
    readonly name: FieldRef<"Products", 'String'>
    readonly grade: FieldRef<"Products", 'String'>
    readonly quantity: FieldRef<"Products", 'Int'>
    readonly price: FieldRef<"Products", 'Float'>
    readonly variety: FieldRef<"Products", 'String'>
    readonly location: FieldRef<"Products", 'String'>
    readonly image: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly farmerId: FieldRef<"Products", 'Int'>
    readonly warehouseId: FieldRef<"Products", 'Int'>
    readonly createdAt: FieldRef<"Products", 'DateTime'>
    readonly updatedAt: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.inventoryMovements
   */
  export type Products$inventoryMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
    where?: WarehouseInventoryWhereInput
    orderBy?: WarehouseInventoryOrderByWithRelationInput | WarehouseInventoryOrderByWithRelationInput[]
    cursor?: WarehouseInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseInventoryScalarFieldEnum | WarehouseInventoryScalarFieldEnum[]
  }

  /**
   * Products.payments
   */
  export type Products$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model WarehouseInventory
   */

  export type AggregateWarehouseInventory = {
    _count: WarehouseInventoryCountAggregateOutputType | null
    _avg: WarehouseInventoryAvgAggregateOutputType | null
    _sum: WarehouseInventorySumAggregateOutputType | null
    _min: WarehouseInventoryMinAggregateOutputType | null
    _max: WarehouseInventoryMaxAggregateOutputType | null
  }

  export type WarehouseInventoryAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    warehouseId: number | null
    quantityIn: number | null
    quantityOut: number | null
    currentStock: number | null
    recordedById: number | null
  }

  export type WarehouseInventorySumAggregateOutputType = {
    id: number | null
    productId: number | null
    warehouseId: number | null
    quantityIn: number | null
    quantityOut: number | null
    currentStock: number | null
    recordedById: number | null
  }

  export type WarehouseInventoryMinAggregateOutputType = {
    id: number | null
    productId: number | null
    warehouseId: number | null
    quantityIn: number | null
    quantityOut: number | null
    currentStock: number | null
    movementType: $Enums.MovementType | null
    reason: string | null
    recordedById: number | null
    createdAt: Date | null
  }

  export type WarehouseInventoryMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    warehouseId: number | null
    quantityIn: number | null
    quantityOut: number | null
    currentStock: number | null
    movementType: $Enums.MovementType | null
    reason: string | null
    recordedById: number | null
    createdAt: Date | null
  }

  export type WarehouseInventoryCountAggregateOutputType = {
    id: number
    productId: number
    warehouseId: number
    quantityIn: number
    quantityOut: number
    currentStock: number
    movementType: number
    reason: number
    recordedById: number
    createdAt: number
    _all: number
  }


  export type WarehouseInventoryAvgAggregateInputType = {
    id?: true
    productId?: true
    warehouseId?: true
    quantityIn?: true
    quantityOut?: true
    currentStock?: true
    recordedById?: true
  }

  export type WarehouseInventorySumAggregateInputType = {
    id?: true
    productId?: true
    warehouseId?: true
    quantityIn?: true
    quantityOut?: true
    currentStock?: true
    recordedById?: true
  }

  export type WarehouseInventoryMinAggregateInputType = {
    id?: true
    productId?: true
    warehouseId?: true
    quantityIn?: true
    quantityOut?: true
    currentStock?: true
    movementType?: true
    reason?: true
    recordedById?: true
    createdAt?: true
  }

  export type WarehouseInventoryMaxAggregateInputType = {
    id?: true
    productId?: true
    warehouseId?: true
    quantityIn?: true
    quantityOut?: true
    currentStock?: true
    movementType?: true
    reason?: true
    recordedById?: true
    createdAt?: true
  }

  export type WarehouseInventoryCountAggregateInputType = {
    id?: true
    productId?: true
    warehouseId?: true
    quantityIn?: true
    quantityOut?: true
    currentStock?: true
    movementType?: true
    reason?: true
    recordedById?: true
    createdAt?: true
    _all?: true
  }

  export type WarehouseInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarehouseInventory to aggregate.
     */
    where?: WarehouseInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseInventories to fetch.
     */
    orderBy?: WarehouseInventoryOrderByWithRelationInput | WarehouseInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WarehouseInventories
    **/
    _count?: true | WarehouseInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehouseInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehouseInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseInventoryMaxAggregateInputType
  }

  export type GetWarehouseInventoryAggregateType<T extends WarehouseInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouseInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouseInventory[P]>
      : GetScalarType<T[P], AggregateWarehouseInventory[P]>
  }




  export type WarehouseInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseInventoryWhereInput
    orderBy?: WarehouseInventoryOrderByWithAggregationInput | WarehouseInventoryOrderByWithAggregationInput[]
    by: WarehouseInventoryScalarFieldEnum[] | WarehouseInventoryScalarFieldEnum
    having?: WarehouseInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseInventoryCountAggregateInputType | true
    _avg?: WarehouseInventoryAvgAggregateInputType
    _sum?: WarehouseInventorySumAggregateInputType
    _min?: WarehouseInventoryMinAggregateInputType
    _max?: WarehouseInventoryMaxAggregateInputType
  }

  export type WarehouseInventoryGroupByOutputType = {
    id: number
    productId: number
    warehouseId: number
    quantityIn: number | null
    quantityOut: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason: string | null
    recordedById: number
    createdAt: Date
    _count: WarehouseInventoryCountAggregateOutputType | null
    _avg: WarehouseInventoryAvgAggregateOutputType | null
    _sum: WarehouseInventorySumAggregateOutputType | null
    _min: WarehouseInventoryMinAggregateOutputType | null
    _max: WarehouseInventoryMaxAggregateOutputType | null
  }

  type GetWarehouseInventoryGroupByPayload<T extends WarehouseInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseInventoryGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    warehouseId?: boolean
    quantityIn?: boolean
    quantityOut?: boolean
    currentStock?: boolean
    movementType?: boolean
    reason?: boolean
    recordedById?: boolean
    createdAt?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouseInventory"]>

  export type WarehouseInventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    warehouseId?: boolean
    quantityIn?: boolean
    quantityOut?: boolean
    currentStock?: boolean
    movementType?: boolean
    reason?: boolean
    recordedById?: boolean
    createdAt?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouseInventory"]>

  export type WarehouseInventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    warehouseId?: boolean
    quantityIn?: boolean
    quantityOut?: boolean
    currentStock?: boolean
    movementType?: boolean
    reason?: boolean
    recordedById?: boolean
    createdAt?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouseInventory"]>

  export type WarehouseInventorySelectScalar = {
    id?: boolean
    productId?: boolean
    warehouseId?: boolean
    quantityIn?: boolean
    quantityOut?: boolean
    currentStock?: boolean
    movementType?: boolean
    reason?: boolean
    recordedById?: boolean
    createdAt?: boolean
  }

  export type WarehouseInventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "warehouseId" | "quantityIn" | "quantityOut" | "currentStock" | "movementType" | "reason" | "recordedById" | "createdAt", ExtArgs["result"]["warehouseInventory"]>
  export type WarehouseInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WarehouseInventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WarehouseInventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WarehouseInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WarehouseInventory"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
      recordedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      warehouseId: number
      quantityIn: number | null
      quantityOut: number | null
      currentStock: number
      movementType: $Enums.MovementType
      reason: string | null
      recordedById: number
      createdAt: Date
    }, ExtArgs["result"]["warehouseInventory"]>
    composites: {}
  }

  type WarehouseInventoryGetPayload<S extends boolean | null | undefined | WarehouseInventoryDefaultArgs> = $Result.GetResult<Prisma.$WarehouseInventoryPayload, S>

  type WarehouseInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehouseInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehouseInventoryCountAggregateInputType | true
    }

  export interface WarehouseInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WarehouseInventory'], meta: { name: 'WarehouseInventory' } }
    /**
     * Find zero or one WarehouseInventory that matches the filter.
     * @param {WarehouseInventoryFindUniqueArgs} args - Arguments to find a WarehouseInventory
     * @example
     * // Get one WarehouseInventory
     * const warehouseInventory = await prisma.warehouseInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseInventoryFindUniqueArgs>(args: SelectSubset<T, WarehouseInventoryFindUniqueArgs<ExtArgs>>): Prisma__WarehouseInventoryClient<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WarehouseInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehouseInventoryFindUniqueOrThrowArgs} args - Arguments to find a WarehouseInventory
     * @example
     * // Get one WarehouseInventory
     * const warehouseInventory = await prisma.warehouseInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseInventoryClient<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WarehouseInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseInventoryFindFirstArgs} args - Arguments to find a WarehouseInventory
     * @example
     * // Get one WarehouseInventory
     * const warehouseInventory = await prisma.warehouseInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseInventoryFindFirstArgs>(args?: SelectSubset<T, WarehouseInventoryFindFirstArgs<ExtArgs>>): Prisma__WarehouseInventoryClient<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WarehouseInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseInventoryFindFirstOrThrowArgs} args - Arguments to find a WarehouseInventory
     * @example
     * // Get one WarehouseInventory
     * const warehouseInventory = await prisma.warehouseInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseInventoryClient<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WarehouseInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WarehouseInventories
     * const warehouseInventories = await prisma.warehouseInventory.findMany()
     * 
     * // Get first 10 WarehouseInventories
     * const warehouseInventories = await prisma.warehouseInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseInventoryWithIdOnly = await prisma.warehouseInventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehouseInventoryFindManyArgs>(args?: SelectSubset<T, WarehouseInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WarehouseInventory.
     * @param {WarehouseInventoryCreateArgs} args - Arguments to create a WarehouseInventory.
     * @example
     * // Create one WarehouseInventory
     * const WarehouseInventory = await prisma.warehouseInventory.create({
     *   data: {
     *     // ... data to create a WarehouseInventory
     *   }
     * })
     * 
     */
    create<T extends WarehouseInventoryCreateArgs>(args: SelectSubset<T, WarehouseInventoryCreateArgs<ExtArgs>>): Prisma__WarehouseInventoryClient<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WarehouseInventories.
     * @param {WarehouseInventoryCreateManyArgs} args - Arguments to create many WarehouseInventories.
     * @example
     * // Create many WarehouseInventories
     * const warehouseInventory = await prisma.warehouseInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseInventoryCreateManyArgs>(args?: SelectSubset<T, WarehouseInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WarehouseInventories and returns the data saved in the database.
     * @param {WarehouseInventoryCreateManyAndReturnArgs} args - Arguments to create many WarehouseInventories.
     * @example
     * // Create many WarehouseInventories
     * const warehouseInventory = await prisma.warehouseInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WarehouseInventories and only return the `id`
     * const warehouseInventoryWithIdOnly = await prisma.warehouseInventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehouseInventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehouseInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WarehouseInventory.
     * @param {WarehouseInventoryDeleteArgs} args - Arguments to delete one WarehouseInventory.
     * @example
     * // Delete one WarehouseInventory
     * const WarehouseInventory = await prisma.warehouseInventory.delete({
     *   where: {
     *     // ... filter to delete one WarehouseInventory
     *   }
     * })
     * 
     */
    delete<T extends WarehouseInventoryDeleteArgs>(args: SelectSubset<T, WarehouseInventoryDeleteArgs<ExtArgs>>): Prisma__WarehouseInventoryClient<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WarehouseInventory.
     * @param {WarehouseInventoryUpdateArgs} args - Arguments to update one WarehouseInventory.
     * @example
     * // Update one WarehouseInventory
     * const warehouseInventory = await prisma.warehouseInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseInventoryUpdateArgs>(args: SelectSubset<T, WarehouseInventoryUpdateArgs<ExtArgs>>): Prisma__WarehouseInventoryClient<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WarehouseInventories.
     * @param {WarehouseInventoryDeleteManyArgs} args - Arguments to filter WarehouseInventories to delete.
     * @example
     * // Delete a few WarehouseInventories
     * const { count } = await prisma.warehouseInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseInventoryDeleteManyArgs>(args?: SelectSubset<T, WarehouseInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarehouseInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WarehouseInventories
     * const warehouseInventory = await prisma.warehouseInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseInventoryUpdateManyArgs>(args: SelectSubset<T, WarehouseInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarehouseInventories and returns the data updated in the database.
     * @param {WarehouseInventoryUpdateManyAndReturnArgs} args - Arguments to update many WarehouseInventories.
     * @example
     * // Update many WarehouseInventories
     * const warehouseInventory = await prisma.warehouseInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WarehouseInventories and only return the `id`
     * const warehouseInventoryWithIdOnly = await prisma.warehouseInventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarehouseInventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, WarehouseInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WarehouseInventory.
     * @param {WarehouseInventoryUpsertArgs} args - Arguments to update or create a WarehouseInventory.
     * @example
     * // Update or create a WarehouseInventory
     * const warehouseInventory = await prisma.warehouseInventory.upsert({
     *   create: {
     *     // ... data to create a WarehouseInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WarehouseInventory we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseInventoryUpsertArgs>(args: SelectSubset<T, WarehouseInventoryUpsertArgs<ExtArgs>>): Prisma__WarehouseInventoryClient<$Result.GetResult<Prisma.$WarehouseInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WarehouseInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseInventoryCountArgs} args - Arguments to filter WarehouseInventories to count.
     * @example
     * // Count the number of WarehouseInventories
     * const count = await prisma.warehouseInventory.count({
     *   where: {
     *     // ... the filter for the WarehouseInventories we want to count
     *   }
     * })
    **/
    count<T extends WarehouseInventoryCountArgs>(
      args?: Subset<T, WarehouseInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WarehouseInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarehouseInventoryAggregateArgs>(args: Subset<T, WarehouseInventoryAggregateArgs>): Prisma.PrismaPromise<GetWarehouseInventoryAggregateType<T>>

    /**
     * Group by WarehouseInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseInventoryGroupByArgs} args - Group by arguments.
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
      T extends WarehouseInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseInventoryGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseInventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarehouseInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WarehouseInventory model
   */
  readonly fields: WarehouseInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WarehouseInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recordedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WarehouseInventory model
   */
  interface WarehouseInventoryFieldRefs {
    readonly id: FieldRef<"WarehouseInventory", 'Int'>
    readonly productId: FieldRef<"WarehouseInventory", 'Int'>
    readonly warehouseId: FieldRef<"WarehouseInventory", 'Int'>
    readonly quantityIn: FieldRef<"WarehouseInventory", 'Int'>
    readonly quantityOut: FieldRef<"WarehouseInventory", 'Int'>
    readonly currentStock: FieldRef<"WarehouseInventory", 'Int'>
    readonly movementType: FieldRef<"WarehouseInventory", 'MovementType'>
    readonly reason: FieldRef<"WarehouseInventory", 'String'>
    readonly recordedById: FieldRef<"WarehouseInventory", 'Int'>
    readonly createdAt: FieldRef<"WarehouseInventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WarehouseInventory findUnique
   */
  export type WarehouseInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseInventory to fetch.
     */
    where: WarehouseInventoryWhereUniqueInput
  }

  /**
   * WarehouseInventory findUniqueOrThrow
   */
  export type WarehouseInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseInventory to fetch.
     */
    where: WarehouseInventoryWhereUniqueInput
  }

  /**
   * WarehouseInventory findFirst
   */
  export type WarehouseInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseInventory to fetch.
     */
    where?: WarehouseInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseInventories to fetch.
     */
    orderBy?: WarehouseInventoryOrderByWithRelationInput | WarehouseInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarehouseInventories.
     */
    cursor?: WarehouseInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarehouseInventories.
     */
    distinct?: WarehouseInventoryScalarFieldEnum | WarehouseInventoryScalarFieldEnum[]
  }

  /**
   * WarehouseInventory findFirstOrThrow
   */
  export type WarehouseInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseInventory to fetch.
     */
    where?: WarehouseInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseInventories to fetch.
     */
    orderBy?: WarehouseInventoryOrderByWithRelationInput | WarehouseInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarehouseInventories.
     */
    cursor?: WarehouseInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarehouseInventories.
     */
    distinct?: WarehouseInventoryScalarFieldEnum | WarehouseInventoryScalarFieldEnum[]
  }

  /**
   * WarehouseInventory findMany
   */
  export type WarehouseInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseInventories to fetch.
     */
    where?: WarehouseInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseInventories to fetch.
     */
    orderBy?: WarehouseInventoryOrderByWithRelationInput | WarehouseInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WarehouseInventories.
     */
    cursor?: WarehouseInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseInventories.
     */
    skip?: number
    distinct?: WarehouseInventoryScalarFieldEnum | WarehouseInventoryScalarFieldEnum[]
  }

  /**
   * WarehouseInventory create
   */
  export type WarehouseInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a WarehouseInventory.
     */
    data: XOR<WarehouseInventoryCreateInput, WarehouseInventoryUncheckedCreateInput>
  }

  /**
   * WarehouseInventory createMany
   */
  export type WarehouseInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WarehouseInventories.
     */
    data: WarehouseInventoryCreateManyInput | WarehouseInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WarehouseInventory createManyAndReturn
   */
  export type WarehouseInventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * The data used to create many WarehouseInventories.
     */
    data: WarehouseInventoryCreateManyInput | WarehouseInventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WarehouseInventory update
   */
  export type WarehouseInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a WarehouseInventory.
     */
    data: XOR<WarehouseInventoryUpdateInput, WarehouseInventoryUncheckedUpdateInput>
    /**
     * Choose, which WarehouseInventory to update.
     */
    where: WarehouseInventoryWhereUniqueInput
  }

  /**
   * WarehouseInventory updateMany
   */
  export type WarehouseInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WarehouseInventories.
     */
    data: XOR<WarehouseInventoryUpdateManyMutationInput, WarehouseInventoryUncheckedUpdateManyInput>
    /**
     * Filter which WarehouseInventories to update
     */
    where?: WarehouseInventoryWhereInput
    /**
     * Limit how many WarehouseInventories to update.
     */
    limit?: number
  }

  /**
   * WarehouseInventory updateManyAndReturn
   */
  export type WarehouseInventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * The data used to update WarehouseInventories.
     */
    data: XOR<WarehouseInventoryUpdateManyMutationInput, WarehouseInventoryUncheckedUpdateManyInput>
    /**
     * Filter which WarehouseInventories to update
     */
    where?: WarehouseInventoryWhereInput
    /**
     * Limit how many WarehouseInventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WarehouseInventory upsert
   */
  export type WarehouseInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the WarehouseInventory to update in case it exists.
     */
    where: WarehouseInventoryWhereUniqueInput
    /**
     * In case the WarehouseInventory found by the `where` argument doesn't exist, create a new WarehouseInventory with this data.
     */
    create: XOR<WarehouseInventoryCreateInput, WarehouseInventoryUncheckedCreateInput>
    /**
     * In case the WarehouseInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseInventoryUpdateInput, WarehouseInventoryUncheckedUpdateInput>
  }

  /**
   * WarehouseInventory delete
   */
  export type WarehouseInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
    /**
     * Filter which WarehouseInventory to delete.
     */
    where: WarehouseInventoryWhereUniqueInput
  }

  /**
   * WarehouseInventory deleteMany
   */
  export type WarehouseInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarehouseInventories to delete
     */
    where?: WarehouseInventoryWhereInput
    /**
     * Limit how many WarehouseInventories to delete.
     */
    limit?: number
  }

  /**
   * WarehouseInventory without action
   */
  export type WarehouseInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseInventory
     */
    select?: WarehouseInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseInventory
     */
    omit?: WarehouseInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInventoryInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    farmerId: number | null
    productId: number | null
    amount: number | null
    quantity: number | null
    pricePerUnit: number | null
    processedById: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    farmerId: number | null
    productId: number | null
    amount: number | null
    quantity: number | null
    pricePerUnit: number | null
    processedById: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    farmerId: number | null
    productId: number | null
    amount: number | null
    quantity: number | null
    pricePerUnit: number | null
    status: $Enums.PaymentStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    referenceNumber: string | null
    dueDate: Date | null
    paidDate: Date | null
    notes: string | null
    processedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    farmerId: number | null
    productId: number | null
    amount: number | null
    quantity: number | null
    pricePerUnit: number | null
    status: $Enums.PaymentStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    referenceNumber: string | null
    dueDate: Date | null
    paidDate: Date | null
    notes: string | null
    processedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    farmerId: number
    productId: number
    amount: number
    quantity: number
    pricePerUnit: number
    status: number
    paymentMethod: number
    referenceNumber: number
    dueDate: number
    paidDate: number
    notes: number
    processedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    farmerId?: true
    productId?: true
    amount?: true
    quantity?: true
    pricePerUnit?: true
    processedById?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    farmerId?: true
    productId?: true
    amount?: true
    quantity?: true
    pricePerUnit?: true
    processedById?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    farmerId?: true
    productId?: true
    amount?: true
    quantity?: true
    pricePerUnit?: true
    status?: true
    paymentMethod?: true
    referenceNumber?: true
    dueDate?: true
    paidDate?: true
    notes?: true
    processedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    farmerId?: true
    productId?: true
    amount?: true
    quantity?: true
    pricePerUnit?: true
    status?: true
    paymentMethod?: true
    referenceNumber?: true
    dueDate?: true
    paidDate?: true
    notes?: true
    processedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    farmerId?: true
    productId?: true
    amount?: true
    quantity?: true
    pricePerUnit?: true
    status?: true
    paymentMethod?: true
    referenceNumber?: true
    dueDate?: true
    paidDate?: true
    notes?: true
    processedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    farmerId: number
    productId: number
    amount: number
    quantity: number
    pricePerUnit: number
    status: $Enums.PaymentStatus
    paymentMethod: $Enums.PaymentMethod | null
    referenceNumber: string | null
    dueDate: Date | null
    paidDate: Date | null
    notes: string | null
    processedById: number | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    productId?: boolean
    amount?: boolean
    quantity?: boolean
    pricePerUnit?: boolean
    status?: boolean
    paymentMethod?: boolean
    referenceNumber?: boolean
    dueDate?: boolean
    paidDate?: boolean
    notes?: boolean
    processedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    processedBy?: boolean | Payment$processedByArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    productId?: boolean
    amount?: boolean
    quantity?: boolean
    pricePerUnit?: boolean
    status?: boolean
    paymentMethod?: boolean
    referenceNumber?: boolean
    dueDate?: boolean
    paidDate?: boolean
    notes?: boolean
    processedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    processedBy?: boolean | Payment$processedByArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmerId?: boolean
    productId?: boolean
    amount?: boolean
    quantity?: boolean
    pricePerUnit?: boolean
    status?: boolean
    paymentMethod?: boolean
    referenceNumber?: boolean
    dueDate?: boolean
    paidDate?: boolean
    notes?: boolean
    processedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    processedBy?: boolean | Payment$processedByArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    farmerId?: boolean
    productId?: boolean
    amount?: boolean
    quantity?: boolean
    pricePerUnit?: boolean
    status?: boolean
    paymentMethod?: boolean
    referenceNumber?: boolean
    dueDate?: boolean
    paidDate?: boolean
    notes?: boolean
    processedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "farmerId" | "productId" | "amount" | "quantity" | "pricePerUnit" | "status" | "paymentMethod" | "referenceNumber" | "dueDate" | "paidDate" | "notes" | "processedById" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    processedBy?: boolean | Payment$processedByArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    processedBy?: boolean | Payment$processedByArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    processedBy?: boolean | Payment$processedByArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      farmer: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
      processedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      farmerId: number
      productId: number
      amount: number
      quantity: number
      pricePerUnit: number
      status: $Enums.PaymentStatus
      paymentMethod: $Enums.PaymentMethod | null
      referenceNumber: string | null
      dueDate: Date | null
      paidDate: Date | null
      notes: string | null
      processedById: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    processedBy<T extends Payment$processedByArgs<ExtArgs> = {}>(args?: Subset<T, Payment$processedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly farmerId: FieldRef<"Payment", 'Int'>
    readonly productId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly quantity: FieldRef<"Payment", 'Int'>
    readonly pricePerUnit: FieldRef<"Payment", 'Float'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paymentMethod: FieldRef<"Payment", 'PaymentMethod'>
    readonly referenceNumber: FieldRef<"Payment", 'String'>
    readonly dueDate: FieldRef<"Payment", 'DateTime'>
    readonly paidDate: FieldRef<"Payment", 'DateTime'>
    readonly notes: FieldRef<"Payment", 'String'>
    readonly processedById: FieldRef<"Payment", 'Int'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.processedBy
   */
  export type Payment$processedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _avg: InvitationAvgAggregateOutputType | null
    _sum: InvitationSumAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    warehouseId: number | null
  }

  export type InvitationSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    warehouseId: number | null
  }

  export type InvitationMinAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    warehouseId: number | null
    status: $Enums.InvitationStatus | null
    message: string | null
    sentAt: Date | null
    respondedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    warehouseId: number | null
    status: $Enums.InvitationStatus | null
    message: string | null
    sentAt: Date | null
    respondedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    warehouseId: number
    status: number
    message: number
    sentAt: number
    respondedAt: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvitationAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    warehouseId?: true
  }

  export type InvitationSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    warehouseId?: true
  }

  export type InvitationMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    warehouseId?: true
    status?: true
    message?: true
    sentAt?: true
    respondedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    warehouseId?: true
    status?: true
    message?: true
    sentAt?: true
    respondedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    warehouseId?: true
    status?: true
    message?: true
    sentAt?: true
    respondedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _avg?: InvitationAvgAggregateInputType
    _sum?: InvitationSumAggregateInputType
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: number
    senderId: number
    receiverId: number
    warehouseId: number
    status: $Enums.InvitationStatus
    message: string | null
    sentAt: Date
    respondedAt: Date | null
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: InvitationCountAggregateOutputType | null
    _avg: InvitationAvgAggregateOutputType | null
    _sum: InvitationSumAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    warehouseId?: boolean
    status?: boolean
    message?: boolean
    sentAt?: boolean
    respondedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    warehouseId?: boolean
    status?: boolean
    message?: boolean
    sentAt?: boolean
    respondedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    warehouseId?: boolean
    status?: boolean
    message?: boolean
    sentAt?: boolean
    respondedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    warehouseId?: boolean
    status?: boolean
    message?: boolean
    sentAt?: boolean
    respondedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "warehouseId" | "status" | "message" | "sentAt" | "respondedAt" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["invitation"]>
  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }
  export type InvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }
  export type InvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senderId: number
      receiverId: number
      warehouseId: number
      status: $Enums.InvitationStatus
      message: string | null
      sentAt: Date
      respondedAt: Date | null
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationFindManyArgs>(args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends InvitationCreateArgs>(args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCreateManyArgs>(args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends InvitationDeleteArgs>(args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationUpdateArgs>(args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationDeleteManyArgs>(args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationUpdateManyArgs>(args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
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
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'Int'>
    readonly senderId: FieldRef<"Invitation", 'Int'>
    readonly receiverId: FieldRef<"Invitation", 'Int'>
    readonly warehouseId: FieldRef<"Invitation", 'Int'>
    readonly status: FieldRef<"Invitation", 'InvitationStatus'>
    readonly message: FieldRef<"Invitation", 'String'>
    readonly sentAt: FieldRef<"Invitation", 'DateTime'>
    readonly respondedAt: FieldRef<"Invitation", 'DateTime'>
    readonly expiresAt: FieldRef<"Invitation", 'DateTime'>
    readonly createdAt: FieldRef<"Invitation", 'DateTime'>
    readonly updatedAt: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    id: number | null
    performedById: number | null
    targetUserId: number | null
    entityId: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    id: number | null
    performedById: number | null
    targetUserId: number | null
    entityId: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: number | null
    performedById: number | null
    targetUserId: number | null
    action: $Enums.ActionType | null
    entityType: $Enums.EntityType | null
    entityId: number | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: number | null
    performedById: number | null
    targetUserId: number | null
    action: $Enums.ActionType | null
    entityType: $Enums.EntityType | null
    entityId: number | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    performedById: number
    targetUserId: number
    action: number
    entityType: number
    entityId: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    id?: true
    performedById?: true
    targetUserId?: true
    entityId?: true
  }

  export type ActivityLogSumAggregateInputType = {
    id?: true
    performedById?: true
    targetUserId?: true
    entityId?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    performedById?: true
    targetUserId?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    performedById?: true
    targetUserId?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    performedById?: true
    targetUserId?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: number
    performedById: number
    targetUserId: number | null
    action: $Enums.ActionType
    entityType: $Enums.EntityType
    entityId: number | null
    description: string
    metadata: JsonValue | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    performedById?: boolean
    targetUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | ActivityLog$targetUserArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    performedById?: boolean
    targetUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | ActivityLog$targetUserArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    performedById?: boolean
    targetUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | ActivityLog$targetUserArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    performedById?: boolean
    targetUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "performedById" | "targetUserId" | "action" | "entityType" | "entityId" | "description" | "metadata" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | ActivityLog$targetUserArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | ActivityLog$targetUserArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | ActivityLog$targetUserArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      performedBy: Prisma.$UserPayload<ExtArgs>
      targetUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      performedById: number
      targetUserId: number | null
      action: $Enums.ActionType
      entityType: $Enums.EntityType
      entityId: number | null
      description: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    performedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetUser<T extends ActivityLog$targetUserArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$targetUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'Int'>
    readonly performedById: FieldRef<"ActivityLog", 'Int'>
    readonly targetUserId: FieldRef<"ActivityLog", 'Int'>
    readonly action: FieldRef<"ActivityLog", 'ActionType'>
    readonly entityType: FieldRef<"ActivityLog", 'EntityType'>
    readonly entityId: FieldRef<"ActivityLog", 'Int'>
    readonly description: FieldRef<"ActivityLog", 'String'>
    readonly metadata: FieldRef<"ActivityLog", 'Json'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.targetUser
   */
  export type ActivityLog$targetUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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
    password: 'password',
    Fname: 'Fname',
    Mname: 'Mname',
    Lname: 'Lname',
    photo: 'photo',
    phone: 'phone',
    address: 'address',
    role: 'role',
    status: 'status',
    isGoogleUser: 'isGoogleUser',
    googleId: 'googleId',
    emailVerified: 'emailVerified',
    emailConfirmationToken: 'emailConfirmationToken',
    emailConfirmationTokenExpiry: 'emailConfirmationTokenExpiry',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    warehouseId: 'warehouseId',
    createdById: 'createdById',
    lastModifiedById: 'lastModifiedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WarehouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    address: 'address',
    capacity: 'capacity',
    phone: 'phone',
    email: 'email',
    managerId: 'managerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    grade: 'grade',
    quantity: 'quantity',
    price: 'price',
    variety: 'variety',
    location: 'location',
    image: 'image',
    description: 'description',
    farmerId: 'farmerId',
    warehouseId: 'warehouseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const WarehouseInventoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    warehouseId: 'warehouseId',
    quantityIn: 'quantityIn',
    quantityOut: 'quantityOut',
    currentStock: 'currentStock',
    movementType: 'movementType',
    reason: 'reason',
    recordedById: 'recordedById',
    createdAt: 'createdAt'
  };

  export type WarehouseInventoryScalarFieldEnum = (typeof WarehouseInventoryScalarFieldEnum)[keyof typeof WarehouseInventoryScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    farmerId: 'farmerId',
    productId: 'productId',
    amount: 'amount',
    quantity: 'quantity',
    pricePerUnit: 'pricePerUnit',
    status: 'status',
    paymentMethod: 'paymentMethod',
    referenceNumber: 'referenceNumber',
    dueDate: 'dueDate',
    paidDate: 'paidDate',
    notes: 'notes',
    processedById: 'processedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    warehouseId: 'warehouseId',
    status: 'status',
    message: 'message',
    sentAt: 'sentAt',
    respondedAt: 'respondedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    performedById: 'performedById',
    targetUserId: 'targetUserId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'MovementType'
   */
  export type EnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType'>
    


  /**
   * Reference to a field of type 'MovementType[]'
   */
  export type ListEnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'InvitationStatus'
   */
  export type EnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus'>
    


  /**
   * Reference to a field of type 'InvitationStatus[]'
   */
  export type ListEnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus[]'>
    


  /**
   * Reference to a field of type 'ActionType'
   */
  export type EnumActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionType'>
    


  /**
   * Reference to a field of type 'ActionType[]'
   */
  export type ListEnumActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionType[]'>
    


  /**
   * Reference to a field of type 'EntityType'
   */
  export type EnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType'>
    


  /**
   * Reference to a field of type 'EntityType[]'
   */
  export type ListEnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    Fname?: StringFilter<"User"> | string
    Mname?: StringNullableFilter<"User"> | string | null
    Lname?: StringFilter<"User"> | string
    photo?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    isGoogleUser?: BoolNullableFilter<"User"> | boolean | null
    googleId?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    emailConfirmationToken?: StringNullableFilter<"User"> | string | null
    emailConfirmationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    warehouseId?: IntNullableFilter<"User"> | number | null
    createdById?: IntNullableFilter<"User"> | number | null
    lastModifiedById?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    warehouse?: XOR<WarehouseNullableScalarRelationFilter, WarehouseWhereInput> | null
    managedWarehouse?: XOR<WarehouseNullableScalarRelationFilter, WarehouseWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdUsers?: UserListRelationFilter
    lastModifiedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    modifiedUsers?: UserListRelationFilter
    products?: ProductsListRelationFilter
    farmerPayments?: PaymentListRelationFilter
    processedPayments?: PaymentListRelationFilter
    sentInvitations?: InvitationListRelationFilter
    receivedInvitations?: InvitationListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    performedActions?: ActivityLogListRelationFilter
    inventoryRecords?: WarehouseInventoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    Fname?: SortOrder
    Mname?: SortOrderInput | SortOrder
    Lname?: SortOrder
    photo?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    isGoogleUser?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    emailConfirmationToken?: SortOrderInput | SortOrder
    emailConfirmationTokenExpiry?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    warehouseId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    lastModifiedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    warehouse?: WarehouseOrderByWithRelationInput
    managedWarehouse?: WarehouseOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    createdUsers?: UserOrderByRelationAggregateInput
    lastModifiedBy?: UserOrderByWithRelationInput
    modifiedUsers?: UserOrderByRelationAggregateInput
    products?: ProductsOrderByRelationAggregateInput
    farmerPayments?: PaymentOrderByRelationAggregateInput
    processedPayments?: PaymentOrderByRelationAggregateInput
    sentInvitations?: InvitationOrderByRelationAggregateInput
    receivedInvitations?: InvitationOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    performedActions?: ActivityLogOrderByRelationAggregateInput
    inventoryRecords?: WarehouseInventoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    googleId?: string
    emailConfirmationToken?: string
    resetToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    Fname?: StringFilter<"User"> | string
    Mname?: StringNullableFilter<"User"> | string | null
    Lname?: StringFilter<"User"> | string
    photo?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    isGoogleUser?: BoolNullableFilter<"User"> | boolean | null
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    emailConfirmationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    warehouseId?: IntNullableFilter<"User"> | number | null
    createdById?: IntNullableFilter<"User"> | number | null
    lastModifiedById?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    warehouse?: XOR<WarehouseNullableScalarRelationFilter, WarehouseWhereInput> | null
    managedWarehouse?: XOR<WarehouseNullableScalarRelationFilter, WarehouseWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdUsers?: UserListRelationFilter
    lastModifiedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    modifiedUsers?: UserListRelationFilter
    products?: ProductsListRelationFilter
    farmerPayments?: PaymentListRelationFilter
    processedPayments?: PaymentListRelationFilter
    sentInvitations?: InvitationListRelationFilter
    receivedInvitations?: InvitationListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    performedActions?: ActivityLogListRelationFilter
    inventoryRecords?: WarehouseInventoryListRelationFilter
  }, "id" | "email" | "googleId" | "emailConfirmationToken" | "resetToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    Fname?: SortOrder
    Mname?: SortOrderInput | SortOrder
    Lname?: SortOrder
    photo?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    isGoogleUser?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    emailConfirmationToken?: SortOrderInput | SortOrder
    emailConfirmationTokenExpiry?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    warehouseId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    lastModifiedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    Fname?: StringWithAggregatesFilter<"User"> | string
    Mname?: StringNullableWithAggregatesFilter<"User"> | string | null
    Lname?: StringWithAggregatesFilter<"User"> | string
    photo?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    isGoogleUser?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    emailConfirmationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailConfirmationTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    warehouseId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdById?: IntNullableWithAggregatesFilter<"User"> | number | null
    lastModifiedById?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    id?: IntFilter<"Warehouse"> | number
    name?: StringFilter<"Warehouse"> | string
    location?: StringFilter<"Warehouse"> | string
    address?: StringNullableFilter<"Warehouse"> | string | null
    capacity?: IntNullableFilter<"Warehouse"> | number | null
    phone?: StringNullableFilter<"Warehouse"> | string | null
    email?: StringNullableFilter<"Warehouse"> | string | null
    managerId?: IntFilter<"Warehouse"> | number
    createdAt?: DateTimeFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeFilter<"Warehouse"> | Date | string
    manager?: XOR<UserScalarRelationFilter, UserWhereInput>
    farmers?: UserListRelationFilter
    inventory?: WarehouseInventoryListRelationFilter
    products?: ProductsListRelationFilter
    invitations?: InvitationListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    address?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    manager?: UserOrderByWithRelationInput
    farmers?: UserOrderByRelationAggregateInput
    inventory?: WarehouseInventoryOrderByRelationAggregateInput
    products?: ProductsOrderByRelationAggregateInput
    invitations?: InvitationOrderByRelationAggregateInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    managerId?: number
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    name?: StringFilter<"Warehouse"> | string
    location?: StringFilter<"Warehouse"> | string
    address?: StringNullableFilter<"Warehouse"> | string | null
    capacity?: IntNullableFilter<"Warehouse"> | number | null
    phone?: StringNullableFilter<"Warehouse"> | string | null
    email?: StringNullableFilter<"Warehouse"> | string | null
    createdAt?: DateTimeFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeFilter<"Warehouse"> | Date | string
    manager?: XOR<UserScalarRelationFilter, UserWhereInput>
    farmers?: UserListRelationFilter
    inventory?: WarehouseInventoryListRelationFilter
    products?: ProductsListRelationFilter
    invitations?: InvitationListRelationFilter
  }, "id" | "managerId">

  export type WarehouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    address?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _avg?: WarehouseAvgOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
    _sum?: WarehouseSumOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Warehouse"> | number
    name?: StringWithAggregatesFilter<"Warehouse"> | string
    location?: StringWithAggregatesFilter<"Warehouse"> | string
    address?: StringNullableWithAggregatesFilter<"Warehouse"> | string | null
    capacity?: IntNullableWithAggregatesFilter<"Warehouse"> | number | null
    phone?: StringNullableWithAggregatesFilter<"Warehouse"> | string | null
    email?: StringNullableWithAggregatesFilter<"Warehouse"> | string | null
    managerId?: IntWithAggregatesFilter<"Warehouse"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Warehouse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Warehouse"> | Date | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    grade?: StringFilter<"Products"> | string
    quantity?: IntFilter<"Products"> | number
    price?: FloatFilter<"Products"> | number
    variety?: StringFilter<"Products"> | string
    location?: StringFilter<"Products"> | string
    image?: StringNullableFilter<"Products"> | string | null
    description?: StringNullableFilter<"Products"> | string | null
    farmerId?: IntFilter<"Products"> | number
    warehouseId?: IntFilter<"Products"> | number
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    farmer?: XOR<UserScalarRelationFilter, UserWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    inventoryMovements?: WarehouseInventoryListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    variety?: SortOrder
    location?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    farmerId?: SortOrder
    warehouseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmer?: UserOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
    inventoryMovements?: WarehouseInventoryOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    grade?: StringFilter<"Products"> | string
    quantity?: IntFilter<"Products"> | number
    price?: FloatFilter<"Products"> | number
    variety?: StringFilter<"Products"> | string
    location?: StringFilter<"Products"> | string
    image?: StringNullableFilter<"Products"> | string | null
    description?: StringNullableFilter<"Products"> | string | null
    farmerId?: IntFilter<"Products"> | number
    warehouseId?: IntFilter<"Products"> | number
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    farmer?: XOR<UserScalarRelationFilter, UserWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    inventoryMovements?: WarehouseInventoryListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    variety?: SortOrder
    location?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    farmerId?: SortOrder
    warehouseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Products"> | number
    name?: StringWithAggregatesFilter<"Products"> | string
    grade?: StringWithAggregatesFilter<"Products"> | string
    quantity?: IntWithAggregatesFilter<"Products"> | number
    price?: FloatWithAggregatesFilter<"Products"> | number
    variety?: StringWithAggregatesFilter<"Products"> | string
    location?: StringWithAggregatesFilter<"Products"> | string
    image?: StringNullableWithAggregatesFilter<"Products"> | string | null
    description?: StringNullableWithAggregatesFilter<"Products"> | string | null
    farmerId?: IntWithAggregatesFilter<"Products"> | number
    warehouseId?: IntWithAggregatesFilter<"Products"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
  }

  export type WarehouseInventoryWhereInput = {
    AND?: WarehouseInventoryWhereInput | WarehouseInventoryWhereInput[]
    OR?: WarehouseInventoryWhereInput[]
    NOT?: WarehouseInventoryWhereInput | WarehouseInventoryWhereInput[]
    id?: IntFilter<"WarehouseInventory"> | number
    productId?: IntFilter<"WarehouseInventory"> | number
    warehouseId?: IntFilter<"WarehouseInventory"> | number
    quantityIn?: IntNullableFilter<"WarehouseInventory"> | number | null
    quantityOut?: IntNullableFilter<"WarehouseInventory"> | number | null
    currentStock?: IntFilter<"WarehouseInventory"> | number
    movementType?: EnumMovementTypeFilter<"WarehouseInventory"> | $Enums.MovementType
    reason?: StringNullableFilter<"WarehouseInventory"> | string | null
    recordedById?: IntFilter<"WarehouseInventory"> | number
    createdAt?: DateTimeFilter<"WarehouseInventory"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    recordedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WarehouseInventoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    quantityIn?: SortOrderInput | SortOrder
    quantityOut?: SortOrderInput | SortOrder
    currentStock?: SortOrder
    movementType?: SortOrder
    reason?: SortOrderInput | SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
    product?: ProductsOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
    recordedBy?: UserOrderByWithRelationInput
  }

  export type WarehouseInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId_warehouseId?: WarehouseInventoryProductIdWarehouseIdCompoundUniqueInput
    AND?: WarehouseInventoryWhereInput | WarehouseInventoryWhereInput[]
    OR?: WarehouseInventoryWhereInput[]
    NOT?: WarehouseInventoryWhereInput | WarehouseInventoryWhereInput[]
    productId?: IntFilter<"WarehouseInventory"> | number
    warehouseId?: IntFilter<"WarehouseInventory"> | number
    quantityIn?: IntNullableFilter<"WarehouseInventory"> | number | null
    quantityOut?: IntNullableFilter<"WarehouseInventory"> | number | null
    currentStock?: IntFilter<"WarehouseInventory"> | number
    movementType?: EnumMovementTypeFilter<"WarehouseInventory"> | $Enums.MovementType
    reason?: StringNullableFilter<"WarehouseInventory"> | string | null
    recordedById?: IntFilter<"WarehouseInventory"> | number
    createdAt?: DateTimeFilter<"WarehouseInventory"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    recordedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "productId_warehouseId">

  export type WarehouseInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    quantityIn?: SortOrderInput | SortOrder
    quantityOut?: SortOrderInput | SortOrder
    currentStock?: SortOrder
    movementType?: SortOrder
    reason?: SortOrderInput | SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
    _count?: WarehouseInventoryCountOrderByAggregateInput
    _avg?: WarehouseInventoryAvgOrderByAggregateInput
    _max?: WarehouseInventoryMaxOrderByAggregateInput
    _min?: WarehouseInventoryMinOrderByAggregateInput
    _sum?: WarehouseInventorySumOrderByAggregateInput
  }

  export type WarehouseInventoryScalarWhereWithAggregatesInput = {
    AND?: WarehouseInventoryScalarWhereWithAggregatesInput | WarehouseInventoryScalarWhereWithAggregatesInput[]
    OR?: WarehouseInventoryScalarWhereWithAggregatesInput[]
    NOT?: WarehouseInventoryScalarWhereWithAggregatesInput | WarehouseInventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WarehouseInventory"> | number
    productId?: IntWithAggregatesFilter<"WarehouseInventory"> | number
    warehouseId?: IntWithAggregatesFilter<"WarehouseInventory"> | number
    quantityIn?: IntNullableWithAggregatesFilter<"WarehouseInventory"> | number | null
    quantityOut?: IntNullableWithAggregatesFilter<"WarehouseInventory"> | number | null
    currentStock?: IntWithAggregatesFilter<"WarehouseInventory"> | number
    movementType?: EnumMovementTypeWithAggregatesFilter<"WarehouseInventory"> | $Enums.MovementType
    reason?: StringNullableWithAggregatesFilter<"WarehouseInventory"> | string | null
    recordedById?: IntWithAggregatesFilter<"WarehouseInventory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WarehouseInventory"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    farmerId?: IntFilter<"Payment"> | number
    productId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    quantity?: IntFilter<"Payment"> | number
    pricePerUnit?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodNullableFilter<"Payment"> | $Enums.PaymentMethod | null
    referenceNumber?: StringNullableFilter<"Payment"> | string | null
    dueDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paidDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    processedById?: IntNullableFilter<"Payment"> | number | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    farmer?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    processedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    referenceNumber?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    paidDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    processedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmer?: UserOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
    processedBy?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    referenceNumber?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    farmerId?: IntFilter<"Payment"> | number
    productId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    quantity?: IntFilter<"Payment"> | number
    pricePerUnit?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodNullableFilter<"Payment"> | $Enums.PaymentMethod | null
    dueDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paidDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    processedById?: IntNullableFilter<"Payment"> | number | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    farmer?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    processedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "referenceNumber">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    farmerId?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    referenceNumber?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    paidDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    processedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    farmerId?: IntWithAggregatesFilter<"Payment"> | number
    productId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    quantity?: IntWithAggregatesFilter<"Payment"> | number
    pricePerUnit?: FloatWithAggregatesFilter<"Payment"> | number
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodNullableWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod | null
    referenceNumber?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    paidDate?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    processedById?: IntNullableWithAggregatesFilter<"Payment"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: IntFilter<"Invitation"> | number
    senderId?: IntFilter<"Invitation"> | number
    receiverId?: IntFilter<"Invitation"> | number
    warehouseId?: IntFilter<"Invitation"> | number
    status?: EnumInvitationStatusFilter<"Invitation"> | $Enums.InvitationStatus
    message?: StringNullableFilter<"Invitation"> | string | null
    sentAt?: DateTimeFilter<"Invitation"> | Date | string
    respondedAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    warehouseId?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    senderId?: IntFilter<"Invitation"> | number
    receiverId?: IntFilter<"Invitation"> | number
    warehouseId?: IntFilter<"Invitation"> | number
    status?: EnumInvitationStatusFilter<"Invitation"> | $Enums.InvitationStatus
    message?: StringNullableFilter<"Invitation"> | string | null
    sentAt?: DateTimeFilter<"Invitation"> | Date | string
    respondedAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
  }, "id">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    warehouseId?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _avg?: InvitationAvgOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
    _sum?: InvitationSumOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invitation"> | number
    senderId?: IntWithAggregatesFilter<"Invitation"> | number
    receiverId?: IntWithAggregatesFilter<"Invitation"> | number
    warehouseId?: IntWithAggregatesFilter<"Invitation"> | number
    status?: EnumInvitationStatusWithAggregatesFilter<"Invitation"> | $Enums.InvitationStatus
    message?: StringNullableWithAggregatesFilter<"Invitation"> | string | null
    sentAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    respondedAt?: DateTimeNullableWithAggregatesFilter<"Invitation"> | Date | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    performedById?: IntFilter<"ActivityLog"> | number
    targetUserId?: IntNullableFilter<"ActivityLog"> | number | null
    action?: EnumActionTypeFilter<"ActivityLog"> | $Enums.ActionType
    entityType?: EnumEntityTypeFilter<"ActivityLog"> | $Enums.EntityType
    entityId?: IntNullableFilter<"ActivityLog"> | number | null
    description?: StringFilter<"ActivityLog"> | string
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    performedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    performedById?: SortOrder
    targetUserId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    performedBy?: UserOrderByWithRelationInput
    targetUser?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    performedById?: IntFilter<"ActivityLog"> | number
    targetUserId?: IntNullableFilter<"ActivityLog"> | number | null
    action?: EnumActionTypeFilter<"ActivityLog"> | $Enums.ActionType
    entityType?: EnumEntityTypeFilter<"ActivityLog"> | $Enums.EntityType
    entityId?: IntNullableFilter<"ActivityLog"> | number | null
    description?: StringFilter<"ActivityLog"> | string
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    performedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    performedById?: SortOrder
    targetUserId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _avg?: ActivityLogAvgOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
    _sum?: ActivityLogSumOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityLog"> | number
    performedById?: IntWithAggregatesFilter<"ActivityLog"> | number
    targetUserId?: IntNullableWithAggregatesFilter<"ActivityLog"> | number | null
    action?: EnumActionTypeWithAggregatesFilter<"ActivityLog"> | $Enums.ActionType
    entityType?: EnumEntityTypeWithAggregatesFilter<"ActivityLog"> | $Enums.EntityType
    entityId?: IntNullableWithAggregatesFilter<"ActivityLog"> | number | null
    description?: StringWithAggregatesFilter<"ActivityLog"> | string
    metadata?: JsonNullableWithAggregatesFilter<"ActivityLog">
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseCreateInput = {
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manager: UserCreateNestedOneWithoutManagedWarehouseInput
    farmers?: UserCreateNestedManyWithoutWarehouseInput
    inventory?: WarehouseInventoryCreateNestedManyWithoutWarehouseInput
    products?: ProductsCreateNestedManyWithoutWarehouseInput
    invitations?: InvitationCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateInput = {
    id?: number
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    managerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    farmers?: UserUncheckedCreateNestedManyWithoutWarehouseInput
    inventory?: WarehouseInventoryUncheckedCreateNestedManyWithoutWarehouseInput
    products?: ProductsUncheckedCreateNestedManyWithoutWarehouseInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutManagedWarehouseNestedInput
    farmers?: UserUpdateManyWithoutWarehouseNestedInput
    inventory?: WarehouseInventoryUpdateManyWithoutWarehouseNestedInput
    products?: ProductsUpdateManyWithoutWarehouseNestedInput
    invitations?: InvitationUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmers?: UserUncheckedUpdateManyWithoutWarehouseNestedInput
    inventory?: WarehouseInventoryUncheckedUpdateManyWithoutWarehouseNestedInput
    products?: ProductsUncheckedUpdateManyWithoutWarehouseNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseCreateManyInput = {
    id?: number
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    managerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarehouseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateInput = {
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer: UserCreateNestedOneWithoutProductsInput
    warehouse: WarehouseCreateNestedOneWithoutProductsInput
    inventoryMovements?: WarehouseInventoryCreateNestedManyWithoutProductInput
    payments?: PaymentCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: number
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    farmerId: number
    warehouseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryMovements?: WarehouseInventoryUncheckedCreateNestedManyWithoutProductInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneRequiredWithoutProductsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutProductsNestedInput
    inventoryMovements?: WarehouseInventoryUpdateManyWithoutProductNestedInput
    payments?: PaymentUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    farmerId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryMovements?: WarehouseInventoryUncheckedUpdateManyWithoutProductNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: number
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    farmerId: number
    warehouseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    farmerId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseInventoryCreateInput = {
    quantityIn?: number | null
    quantityOut?: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason?: string | null
    createdAt?: Date | string
    product: ProductsCreateNestedOneWithoutInventoryMovementsInput
    warehouse: WarehouseCreateNestedOneWithoutInventoryInput
    recordedBy: UserCreateNestedOneWithoutInventoryRecordsInput
  }

  export type WarehouseInventoryUncheckedCreateInput = {
    id?: number
    productId: number
    warehouseId: number
    quantityIn?: number | null
    quantityOut?: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason?: string | null
    recordedById: number
    createdAt?: Date | string
  }

  export type WarehouseInventoryUpdateInput = {
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutInventoryMovementsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutInventoryNestedInput
    recordedBy?: UserUpdateOneRequiredWithoutInventoryRecordsNestedInput
  }

  export type WarehouseInventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recordedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseInventoryCreateManyInput = {
    id?: number
    productId: number
    warehouseId: number
    quantityIn?: number | null
    quantityOut?: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason?: string | null
    recordedById: number
    createdAt?: Date | string
  }

  export type WarehouseInventoryUpdateManyMutationInput = {
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseInventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recordedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    amount: number
    quantity: number
    pricePerUnit: number
    status?: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    referenceNumber?: string | null
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer: UserCreateNestedOneWithoutFarmerPaymentsInput
    product: ProductsCreateNestedOneWithoutPaymentsInput
    processedBy?: UserCreateNestedOneWithoutProcessedPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    farmerId: number
    productId: number
    amount: number
    quantity: number
    pricePerUnit: number
    status?: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    referenceNumber?: string | null
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    notes?: string | null
    processedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneRequiredWithoutFarmerPaymentsNestedInput
    product?: ProductsUpdateOneRequiredWithoutPaymentsNestedInput
    processedBy?: UserUpdateOneWithoutProcessedPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmerId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    processedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    farmerId: number
    productId: number
    amount: number
    quantity: number
    pricePerUnit: number
    status?: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    referenceNumber?: string | null
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    notes?: string | null
    processedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmerId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    processedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    status?: $Enums.InvitationStatus
    message?: string | null
    sentAt?: Date | string
    respondedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentInvitationsInput
    receiver: UserCreateNestedOneWithoutReceivedInvitationsInput
    warehouse: WarehouseCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: number
    senderId: number
    receiverId: number
    warehouseId: number
    status?: $Enums.InvitationStatus
    message?: string | null
    sentAt?: Date | string
    respondedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateInput = {
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentInvitationsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedInvitationsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateManyInput = {
    id?: number
    senderId: number
    receiverId: number
    warehouseId: number
    status?: $Enums.InvitationStatus
    message?: string | null
    sentAt?: Date | string
    respondedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateManyMutationInput = {
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    action: $Enums.ActionType
    entityType: $Enums.EntityType
    entityId?: number | null
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    performedBy: UserCreateNestedOneWithoutPerformedActionsInput
    targetUser?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: number
    performedById: number
    targetUserId?: number | null
    action: $Enums.ActionType
    entityType: $Enums.EntityType
    entityId?: number | null
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performedBy?: UserUpdateOneRequiredWithoutPerformedActionsNestedInput
    targetUser?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    performedById?: IntFieldUpdateOperationsInput | number
    targetUserId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: number
    performedById: number
    targetUserId?: number | null
    action: $Enums.ActionType
    entityType: $Enums.EntityType
    entityId?: number | null
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    performedById?: IntFieldUpdateOperationsInput | number
    targetUserId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type WarehouseNullableScalarRelationFilter = {
    is?: WarehouseWhereInput | null
    isNot?: WarehouseWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput
    some?: InvitationWhereInput
    none?: InvitationWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type WarehouseInventoryListRelationFilter = {
    every?: WarehouseInventoryWhereInput
    some?: WarehouseInventoryWhereInput
    none?: WarehouseInventoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    Fname?: SortOrder
    Mname?: SortOrder
    Lname?: SortOrder
    photo?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    role?: SortOrder
    status?: SortOrder
    isGoogleUser?: SortOrder
    googleId?: SortOrder
    emailVerified?: SortOrder
    emailConfirmationToken?: SortOrder
    emailConfirmationTokenExpiry?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    warehouseId?: SortOrder
    createdById?: SortOrder
    lastModifiedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    createdById?: SortOrder
    lastModifiedById?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    Fname?: SortOrder
    Mname?: SortOrder
    Lname?: SortOrder
    photo?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    role?: SortOrder
    status?: SortOrder
    isGoogleUser?: SortOrder
    googleId?: SortOrder
    emailVerified?: SortOrder
    emailConfirmationToken?: SortOrder
    emailConfirmationTokenExpiry?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    warehouseId?: SortOrder
    createdById?: SortOrder
    lastModifiedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    Fname?: SortOrder
    Mname?: SortOrder
    Lname?: SortOrder
    photo?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    role?: SortOrder
    status?: SortOrder
    isGoogleUser?: SortOrder
    googleId?: SortOrder
    emailVerified?: SortOrder
    emailConfirmationToken?: SortOrder
    emailConfirmationTokenExpiry?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    warehouseId?: SortOrder
    createdById?: SortOrder
    lastModifiedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    createdById?: SortOrder
    lastModifiedById?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WarehouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarehouseAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    managerId?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarehouseSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    managerId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WarehouseScalarRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    variety?: SortOrder
    location?: SortOrder
    image?: SortOrder
    description?: SortOrder
    farmerId?: SortOrder
    warehouseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    farmerId?: SortOrder
    warehouseId?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    variety?: SortOrder
    location?: SortOrder
    image?: SortOrder
    description?: SortOrder
    farmerId?: SortOrder
    warehouseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    grade?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    variety?: SortOrder
    location?: SortOrder
    image?: SortOrder
    description?: SortOrder
    farmerId?: SortOrder
    warehouseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    farmerId?: SortOrder
    warehouseId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type WarehouseInventoryProductIdWarehouseIdCompoundUniqueInput = {
    productId: number
    warehouseId: number
  }

  export type WarehouseInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    quantityIn?: SortOrder
    quantityOut?: SortOrder
    currentStock?: SortOrder
    movementType?: SortOrder
    reason?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
  }

  export type WarehouseInventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    quantityIn?: SortOrder
    quantityOut?: SortOrder
    currentStock?: SortOrder
    recordedById?: SortOrder
  }

  export type WarehouseInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    quantityIn?: SortOrder
    quantityOut?: SortOrder
    currentStock?: SortOrder
    movementType?: SortOrder
    reason?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
  }

  export type WarehouseInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    quantityIn?: SortOrder
    quantityOut?: SortOrder
    currentStock?: SortOrder
    movementType?: SortOrder
    reason?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
  }

  export type WarehouseInventorySumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    warehouseId?: SortOrder
    quantityIn?: SortOrder
    quantityOut?: SortOrder
    currentStock?: SortOrder
    recordedById?: SortOrder
  }

  export type EnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrder
    notes?: SortOrder
    processedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    processedById?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrder
    notes?: SortOrder
    processedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrder
    dueDate?: SortOrder
    paidDate?: SortOrder
    notes?: SortOrder
    processedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    farmerId?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    pricePerUnit?: SortOrder
    processedById?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type EnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    warehouseId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    respondedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    warehouseId?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    warehouseId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    respondedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    warehouseId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    respondedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    warehouseId?: SortOrder
  }

  export type EnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type EnumActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeFilter<$PrismaModel> | $Enums.ActionType
  }

  export type EnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    performedById?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    id?: SortOrder
    performedById?: SortOrder
    targetUserId?: SortOrder
    entityId?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    performedById?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    performedById?: SortOrder
    targetUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    id?: SortOrder
    performedById?: SortOrder
    targetUserId?: SortOrder
    entityId?: SortOrder
  }

  export type EnumActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionTypeFilter<$PrismaModel>
    _max?: NestedEnumActionTypeFilter<$PrismaModel>
  }

  export type EnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type WarehouseCreateNestedOneWithoutFarmersInput = {
    create?: XOR<WarehouseCreateWithoutFarmersInput, WarehouseUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutFarmersInput
    connect?: WarehouseWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutManagerInput = {
    create?: XOR<WarehouseCreateWithoutManagerInput, WarehouseUncheckedCreateWithoutManagerInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutManagerInput
    connect?: WarehouseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedUsersInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutModifiedUsersInput = {
    create?: XOR<UserCreateWithoutModifiedUsersInput, UserUncheckedCreateWithoutModifiedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutModifiedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutLastModifiedByInput = {
    create?: XOR<UserCreateWithoutLastModifiedByInput, UserUncheckedCreateWithoutLastModifiedByInput> | UserCreateWithoutLastModifiedByInput[] | UserUncheckedCreateWithoutLastModifiedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLastModifiedByInput | UserCreateOrConnectWithoutLastModifiedByInput[]
    createMany?: UserCreateManyLastModifiedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProductsCreateNestedManyWithoutFarmerInput = {
    create?: XOR<ProductsCreateWithoutFarmerInput, ProductsUncheckedCreateWithoutFarmerInput> | ProductsCreateWithoutFarmerInput[] | ProductsUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutFarmerInput | ProductsCreateOrConnectWithoutFarmerInput[]
    createMany?: ProductsCreateManyFarmerInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutFarmerInput = {
    create?: XOR<PaymentCreateWithoutFarmerInput, PaymentUncheckedCreateWithoutFarmerInput> | PaymentCreateWithoutFarmerInput[] | PaymentUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFarmerInput | PaymentCreateOrConnectWithoutFarmerInput[]
    createMany?: PaymentCreateManyFarmerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutProcessedByInput = {
    create?: XOR<PaymentCreateWithoutProcessedByInput, PaymentUncheckedCreateWithoutProcessedByInput> | PaymentCreateWithoutProcessedByInput[] | PaymentUncheckedCreateWithoutProcessedByInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProcessedByInput | PaymentCreateOrConnectWithoutProcessedByInput[]
    createMany?: PaymentCreateManyProcessedByInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutSenderInput = {
    create?: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput> | InvitationCreateWithoutSenderInput[] | InvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutSenderInput | InvitationCreateOrConnectWithoutSenderInput[]
    createMany?: InvitationCreateManySenderInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutReceiverInput = {
    create?: XOR<InvitationCreateWithoutReceiverInput, InvitationUncheckedCreateWithoutReceiverInput> | InvitationCreateWithoutReceiverInput[] | InvitationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutReceiverInput | InvitationCreateOrConnectWithoutReceiverInput[]
    createMany?: InvitationCreateManyReceiverInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<ActivityLogCreateWithoutTargetUserInput, ActivityLogUncheckedCreateWithoutTargetUserInput> | ActivityLogCreateWithoutTargetUserInput[] | ActivityLogUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutTargetUserInput | ActivityLogCreateOrConnectWithoutTargetUserInput[]
    createMany?: ActivityLogCreateManyTargetUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutPerformedByInput = {
    create?: XOR<ActivityLogCreateWithoutPerformedByInput, ActivityLogUncheckedCreateWithoutPerformedByInput> | ActivityLogCreateWithoutPerformedByInput[] | ActivityLogUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutPerformedByInput | ActivityLogCreateOrConnectWithoutPerformedByInput[]
    createMany?: ActivityLogCreateManyPerformedByInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type WarehouseInventoryCreateNestedManyWithoutRecordedByInput = {
    create?: XOR<WarehouseInventoryCreateWithoutRecordedByInput, WarehouseInventoryUncheckedCreateWithoutRecordedByInput> | WarehouseInventoryCreateWithoutRecordedByInput[] | WarehouseInventoryUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: WarehouseInventoryCreateOrConnectWithoutRecordedByInput | WarehouseInventoryCreateOrConnectWithoutRecordedByInput[]
    createMany?: WarehouseInventoryCreateManyRecordedByInputEnvelope
    connect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
  }

  export type WarehouseUncheckedCreateNestedOneWithoutManagerInput = {
    create?: XOR<WarehouseCreateWithoutManagerInput, WarehouseUncheckedCreateWithoutManagerInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutManagerInput
    connect?: WarehouseWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLastModifiedByInput = {
    create?: XOR<UserCreateWithoutLastModifiedByInput, UserUncheckedCreateWithoutLastModifiedByInput> | UserCreateWithoutLastModifiedByInput[] | UserUncheckedCreateWithoutLastModifiedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLastModifiedByInput | UserCreateOrConnectWithoutLastModifiedByInput[]
    createMany?: UserCreateManyLastModifiedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<ProductsCreateWithoutFarmerInput, ProductsUncheckedCreateWithoutFarmerInput> | ProductsCreateWithoutFarmerInput[] | ProductsUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutFarmerInput | ProductsCreateOrConnectWithoutFarmerInput[]
    createMany?: ProductsCreateManyFarmerInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<PaymentCreateWithoutFarmerInput, PaymentUncheckedCreateWithoutFarmerInput> | PaymentCreateWithoutFarmerInput[] | PaymentUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFarmerInput | PaymentCreateOrConnectWithoutFarmerInput[]
    createMany?: PaymentCreateManyFarmerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutProcessedByInput = {
    create?: XOR<PaymentCreateWithoutProcessedByInput, PaymentUncheckedCreateWithoutProcessedByInput> | PaymentCreateWithoutProcessedByInput[] | PaymentUncheckedCreateWithoutProcessedByInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProcessedByInput | PaymentCreateOrConnectWithoutProcessedByInput[]
    createMany?: PaymentCreateManyProcessedByInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput> | InvitationCreateWithoutSenderInput[] | InvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutSenderInput | InvitationCreateOrConnectWithoutSenderInput[]
    createMany?: InvitationCreateManySenderInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<InvitationCreateWithoutReceiverInput, InvitationUncheckedCreateWithoutReceiverInput> | InvitationCreateWithoutReceiverInput[] | InvitationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutReceiverInput | InvitationCreateOrConnectWithoutReceiverInput[]
    createMany?: InvitationCreateManyReceiverInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<ActivityLogCreateWithoutTargetUserInput, ActivityLogUncheckedCreateWithoutTargetUserInput> | ActivityLogCreateWithoutTargetUserInput[] | ActivityLogUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutTargetUserInput | ActivityLogCreateOrConnectWithoutTargetUserInput[]
    createMany?: ActivityLogCreateManyTargetUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput = {
    create?: XOR<ActivityLogCreateWithoutPerformedByInput, ActivityLogUncheckedCreateWithoutPerformedByInput> | ActivityLogCreateWithoutPerformedByInput[] | ActivityLogUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutPerformedByInput | ActivityLogCreateOrConnectWithoutPerformedByInput[]
    createMany?: ActivityLogCreateManyPerformedByInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput = {
    create?: XOR<WarehouseInventoryCreateWithoutRecordedByInput, WarehouseInventoryUncheckedCreateWithoutRecordedByInput> | WarehouseInventoryCreateWithoutRecordedByInput[] | WarehouseInventoryUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: WarehouseInventoryCreateOrConnectWithoutRecordedByInput | WarehouseInventoryCreateOrConnectWithoutRecordedByInput[]
    createMany?: WarehouseInventoryCreateManyRecordedByInputEnvelope
    connect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WarehouseUpdateOneWithoutFarmersNestedInput = {
    create?: XOR<WarehouseCreateWithoutFarmersInput, WarehouseUncheckedCreateWithoutFarmersInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutFarmersInput
    upsert?: WarehouseUpsertWithoutFarmersInput
    disconnect?: WarehouseWhereInput | boolean
    delete?: WarehouseWhereInput | boolean
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutFarmersInput, WarehouseUpdateWithoutFarmersInput>, WarehouseUncheckedUpdateWithoutFarmersInput>
  }

  export type WarehouseUpdateOneWithoutManagerNestedInput = {
    create?: XOR<WarehouseCreateWithoutManagerInput, WarehouseUncheckedCreateWithoutManagerInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutManagerInput
    upsert?: WarehouseUpsertWithoutManagerInput
    disconnect?: WarehouseWhereInput | boolean
    delete?: WarehouseWhereInput | boolean
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutManagerInput, WarehouseUpdateWithoutManagerInput>, WarehouseUncheckedUpdateWithoutManagerInput>
  }

  export type UserUpdateOneWithoutCreatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    upsert?: UserUpsertWithoutCreatedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedUsersInput, UserUpdateWithoutCreatedUsersInput>, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedByInput | UserUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedByInput | UserUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedByInput | UserUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneWithoutModifiedUsersNestedInput = {
    create?: XOR<UserCreateWithoutModifiedUsersInput, UserUncheckedCreateWithoutModifiedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutModifiedUsersInput
    upsert?: UserUpsertWithoutModifiedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModifiedUsersInput, UserUpdateWithoutModifiedUsersInput>, UserUncheckedUpdateWithoutModifiedUsersInput>
  }

  export type UserUpdateManyWithoutLastModifiedByNestedInput = {
    create?: XOR<UserCreateWithoutLastModifiedByInput, UserUncheckedCreateWithoutLastModifiedByInput> | UserCreateWithoutLastModifiedByInput[] | UserUncheckedCreateWithoutLastModifiedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLastModifiedByInput | UserCreateOrConnectWithoutLastModifiedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLastModifiedByInput | UserUpsertWithWhereUniqueWithoutLastModifiedByInput[]
    createMany?: UserCreateManyLastModifiedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLastModifiedByInput | UserUpdateWithWhereUniqueWithoutLastModifiedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLastModifiedByInput | UserUpdateManyWithWhereWithoutLastModifiedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductsUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<ProductsCreateWithoutFarmerInput, ProductsUncheckedCreateWithoutFarmerInput> | ProductsCreateWithoutFarmerInput[] | ProductsUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutFarmerInput | ProductsCreateOrConnectWithoutFarmerInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutFarmerInput | ProductsUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: ProductsCreateManyFarmerInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutFarmerInput | ProductsUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutFarmerInput | ProductsUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<PaymentCreateWithoutFarmerInput, PaymentUncheckedCreateWithoutFarmerInput> | PaymentCreateWithoutFarmerInput[] | PaymentUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFarmerInput | PaymentCreateOrConnectWithoutFarmerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutFarmerInput | PaymentUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: PaymentCreateManyFarmerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutFarmerInput | PaymentUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutFarmerInput | PaymentUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutProcessedByNestedInput = {
    create?: XOR<PaymentCreateWithoutProcessedByInput, PaymentUncheckedCreateWithoutProcessedByInput> | PaymentCreateWithoutProcessedByInput[] | PaymentUncheckedCreateWithoutProcessedByInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProcessedByInput | PaymentCreateOrConnectWithoutProcessedByInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutProcessedByInput | PaymentUpsertWithWhereUniqueWithoutProcessedByInput[]
    createMany?: PaymentCreateManyProcessedByInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutProcessedByInput | PaymentUpdateWithWhereUniqueWithoutProcessedByInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutProcessedByInput | PaymentUpdateManyWithWhereWithoutProcessedByInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutSenderNestedInput = {
    create?: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput> | InvitationCreateWithoutSenderInput[] | InvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutSenderInput | InvitationCreateOrConnectWithoutSenderInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutSenderInput | InvitationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: InvitationCreateManySenderInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutSenderInput | InvitationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutSenderInput | InvitationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<InvitationCreateWithoutReceiverInput, InvitationUncheckedCreateWithoutReceiverInput> | InvitationCreateWithoutReceiverInput[] | InvitationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutReceiverInput | InvitationCreateOrConnectWithoutReceiverInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutReceiverInput | InvitationUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: InvitationCreateManyReceiverInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutReceiverInput | InvitationUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutReceiverInput | InvitationUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutTargetUserInput, ActivityLogUncheckedCreateWithoutTargetUserInput> | ActivityLogCreateWithoutTargetUserInput[] | ActivityLogUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutTargetUserInput | ActivityLogCreateOrConnectWithoutTargetUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutTargetUserInput | ActivityLogUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: ActivityLogCreateManyTargetUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutTargetUserInput | ActivityLogUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutTargetUserInput | ActivityLogUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutPerformedByNestedInput = {
    create?: XOR<ActivityLogCreateWithoutPerformedByInput, ActivityLogUncheckedCreateWithoutPerformedByInput> | ActivityLogCreateWithoutPerformedByInput[] | ActivityLogUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutPerformedByInput | ActivityLogCreateOrConnectWithoutPerformedByInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutPerformedByInput | ActivityLogUpsertWithWhereUniqueWithoutPerformedByInput[]
    createMany?: ActivityLogCreateManyPerformedByInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutPerformedByInput | ActivityLogUpdateWithWhereUniqueWithoutPerformedByInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutPerformedByInput | ActivityLogUpdateManyWithWhereWithoutPerformedByInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type WarehouseInventoryUpdateManyWithoutRecordedByNestedInput = {
    create?: XOR<WarehouseInventoryCreateWithoutRecordedByInput, WarehouseInventoryUncheckedCreateWithoutRecordedByInput> | WarehouseInventoryCreateWithoutRecordedByInput[] | WarehouseInventoryUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: WarehouseInventoryCreateOrConnectWithoutRecordedByInput | WarehouseInventoryCreateOrConnectWithoutRecordedByInput[]
    upsert?: WarehouseInventoryUpsertWithWhereUniqueWithoutRecordedByInput | WarehouseInventoryUpsertWithWhereUniqueWithoutRecordedByInput[]
    createMany?: WarehouseInventoryCreateManyRecordedByInputEnvelope
    set?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    disconnect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    delete?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    connect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    update?: WarehouseInventoryUpdateWithWhereUniqueWithoutRecordedByInput | WarehouseInventoryUpdateWithWhereUniqueWithoutRecordedByInput[]
    updateMany?: WarehouseInventoryUpdateManyWithWhereWithoutRecordedByInput | WarehouseInventoryUpdateManyWithWhereWithoutRecordedByInput[]
    deleteMany?: WarehouseInventoryScalarWhereInput | WarehouseInventoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WarehouseUncheckedUpdateOneWithoutManagerNestedInput = {
    create?: XOR<WarehouseCreateWithoutManagerInput, WarehouseUncheckedCreateWithoutManagerInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutManagerInput
    upsert?: WarehouseUpsertWithoutManagerInput
    disconnect?: WarehouseWhereInput | boolean
    delete?: WarehouseWhereInput | boolean
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutManagerInput, WarehouseUpdateWithoutManagerInput>, WarehouseUncheckedUpdateWithoutManagerInput>
  }

  export type UserUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedByInput | UserUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedByInput | UserUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedByInput | UserUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLastModifiedByNestedInput = {
    create?: XOR<UserCreateWithoutLastModifiedByInput, UserUncheckedCreateWithoutLastModifiedByInput> | UserCreateWithoutLastModifiedByInput[] | UserUncheckedCreateWithoutLastModifiedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLastModifiedByInput | UserCreateOrConnectWithoutLastModifiedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLastModifiedByInput | UserUpsertWithWhereUniqueWithoutLastModifiedByInput[]
    createMany?: UserCreateManyLastModifiedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLastModifiedByInput | UserUpdateWithWhereUniqueWithoutLastModifiedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLastModifiedByInput | UserUpdateManyWithWhereWithoutLastModifiedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<ProductsCreateWithoutFarmerInput, ProductsUncheckedCreateWithoutFarmerInput> | ProductsCreateWithoutFarmerInput[] | ProductsUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutFarmerInput | ProductsCreateOrConnectWithoutFarmerInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutFarmerInput | ProductsUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: ProductsCreateManyFarmerInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutFarmerInput | ProductsUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutFarmerInput | ProductsUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<PaymentCreateWithoutFarmerInput, PaymentUncheckedCreateWithoutFarmerInput> | PaymentCreateWithoutFarmerInput[] | PaymentUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFarmerInput | PaymentCreateOrConnectWithoutFarmerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutFarmerInput | PaymentUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: PaymentCreateManyFarmerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutFarmerInput | PaymentUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutFarmerInput | PaymentUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutProcessedByNestedInput = {
    create?: XOR<PaymentCreateWithoutProcessedByInput, PaymentUncheckedCreateWithoutProcessedByInput> | PaymentCreateWithoutProcessedByInput[] | PaymentUncheckedCreateWithoutProcessedByInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProcessedByInput | PaymentCreateOrConnectWithoutProcessedByInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutProcessedByInput | PaymentUpsertWithWhereUniqueWithoutProcessedByInput[]
    createMany?: PaymentCreateManyProcessedByInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutProcessedByInput | PaymentUpdateWithWhereUniqueWithoutProcessedByInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutProcessedByInput | PaymentUpdateManyWithWhereWithoutProcessedByInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput> | InvitationCreateWithoutSenderInput[] | InvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutSenderInput | InvitationCreateOrConnectWithoutSenderInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutSenderInput | InvitationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: InvitationCreateManySenderInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutSenderInput | InvitationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutSenderInput | InvitationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<InvitationCreateWithoutReceiverInput, InvitationUncheckedCreateWithoutReceiverInput> | InvitationCreateWithoutReceiverInput[] | InvitationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutReceiverInput | InvitationCreateOrConnectWithoutReceiverInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutReceiverInput | InvitationUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: InvitationCreateManyReceiverInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutReceiverInput | InvitationUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutReceiverInput | InvitationUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutTargetUserInput, ActivityLogUncheckedCreateWithoutTargetUserInput> | ActivityLogCreateWithoutTargetUserInput[] | ActivityLogUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutTargetUserInput | ActivityLogCreateOrConnectWithoutTargetUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutTargetUserInput | ActivityLogUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: ActivityLogCreateManyTargetUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutTargetUserInput | ActivityLogUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutTargetUserInput | ActivityLogUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput = {
    create?: XOR<ActivityLogCreateWithoutPerformedByInput, ActivityLogUncheckedCreateWithoutPerformedByInput> | ActivityLogCreateWithoutPerformedByInput[] | ActivityLogUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutPerformedByInput | ActivityLogCreateOrConnectWithoutPerformedByInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutPerformedByInput | ActivityLogUpsertWithWhereUniqueWithoutPerformedByInput[]
    createMany?: ActivityLogCreateManyPerformedByInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutPerformedByInput | ActivityLogUpdateWithWhereUniqueWithoutPerformedByInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutPerformedByInput | ActivityLogUpdateManyWithWhereWithoutPerformedByInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput = {
    create?: XOR<WarehouseInventoryCreateWithoutRecordedByInput, WarehouseInventoryUncheckedCreateWithoutRecordedByInput> | WarehouseInventoryCreateWithoutRecordedByInput[] | WarehouseInventoryUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: WarehouseInventoryCreateOrConnectWithoutRecordedByInput | WarehouseInventoryCreateOrConnectWithoutRecordedByInput[]
    upsert?: WarehouseInventoryUpsertWithWhereUniqueWithoutRecordedByInput | WarehouseInventoryUpsertWithWhereUniqueWithoutRecordedByInput[]
    createMany?: WarehouseInventoryCreateManyRecordedByInputEnvelope
    set?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    disconnect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    delete?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    connect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    update?: WarehouseInventoryUpdateWithWhereUniqueWithoutRecordedByInput | WarehouseInventoryUpdateWithWhereUniqueWithoutRecordedByInput[]
    updateMany?: WarehouseInventoryUpdateManyWithWhereWithoutRecordedByInput | WarehouseInventoryUpdateManyWithWhereWithoutRecordedByInput[]
    deleteMany?: WarehouseInventoryScalarWhereInput | WarehouseInventoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutManagedWarehouseInput = {
    create?: XOR<UserCreateWithoutManagedWarehouseInput, UserUncheckedCreateWithoutManagedWarehouseInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedWarehouseInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<UserCreateWithoutWarehouseInput, UserUncheckedCreateWithoutWarehouseInput> | UserCreateWithoutWarehouseInput[] | UserUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWarehouseInput | UserCreateOrConnectWithoutWarehouseInput[]
    createMany?: UserCreateManyWarehouseInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type WarehouseInventoryCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<WarehouseInventoryCreateWithoutWarehouseInput, WarehouseInventoryUncheckedCreateWithoutWarehouseInput> | WarehouseInventoryCreateWithoutWarehouseInput[] | WarehouseInventoryUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: WarehouseInventoryCreateOrConnectWithoutWarehouseInput | WarehouseInventoryCreateOrConnectWithoutWarehouseInput[]
    createMany?: WarehouseInventoryCreateManyWarehouseInputEnvelope
    connect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
  }

  export type ProductsCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ProductsCreateWithoutWarehouseInput, ProductsUncheckedCreateWithoutWarehouseInput> | ProductsCreateWithoutWarehouseInput[] | ProductsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutWarehouseInput | ProductsCreateOrConnectWithoutWarehouseInput[]
    createMany?: ProductsCreateManyWarehouseInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<InvitationCreateWithoutWarehouseInput, InvitationUncheckedCreateWithoutWarehouseInput> | InvitationCreateWithoutWarehouseInput[] | InvitationUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutWarehouseInput | InvitationCreateOrConnectWithoutWarehouseInput[]
    createMany?: InvitationCreateManyWarehouseInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<UserCreateWithoutWarehouseInput, UserUncheckedCreateWithoutWarehouseInput> | UserCreateWithoutWarehouseInput[] | UserUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWarehouseInput | UserCreateOrConnectWithoutWarehouseInput[]
    createMany?: UserCreateManyWarehouseInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type WarehouseInventoryUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<WarehouseInventoryCreateWithoutWarehouseInput, WarehouseInventoryUncheckedCreateWithoutWarehouseInput> | WarehouseInventoryCreateWithoutWarehouseInput[] | WarehouseInventoryUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: WarehouseInventoryCreateOrConnectWithoutWarehouseInput | WarehouseInventoryCreateOrConnectWithoutWarehouseInput[]
    createMany?: WarehouseInventoryCreateManyWarehouseInputEnvelope
    connect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ProductsCreateWithoutWarehouseInput, ProductsUncheckedCreateWithoutWarehouseInput> | ProductsCreateWithoutWarehouseInput[] | ProductsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutWarehouseInput | ProductsCreateOrConnectWithoutWarehouseInput[]
    createMany?: ProductsCreateManyWarehouseInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<InvitationCreateWithoutWarehouseInput, InvitationUncheckedCreateWithoutWarehouseInput> | InvitationCreateWithoutWarehouseInput[] | InvitationUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutWarehouseInput | InvitationCreateOrConnectWithoutWarehouseInput[]
    createMany?: InvitationCreateManyWarehouseInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutManagedWarehouseNestedInput = {
    create?: XOR<UserCreateWithoutManagedWarehouseInput, UserUncheckedCreateWithoutManagedWarehouseInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedWarehouseInput
    upsert?: UserUpsertWithoutManagedWarehouseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagedWarehouseInput, UserUpdateWithoutManagedWarehouseInput>, UserUncheckedUpdateWithoutManagedWarehouseInput>
  }

  export type UserUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<UserCreateWithoutWarehouseInput, UserUncheckedCreateWithoutWarehouseInput> | UserCreateWithoutWarehouseInput[] | UserUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWarehouseInput | UserCreateOrConnectWithoutWarehouseInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWarehouseInput | UserUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: UserCreateManyWarehouseInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWarehouseInput | UserUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWarehouseInput | UserUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WarehouseInventoryUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<WarehouseInventoryCreateWithoutWarehouseInput, WarehouseInventoryUncheckedCreateWithoutWarehouseInput> | WarehouseInventoryCreateWithoutWarehouseInput[] | WarehouseInventoryUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: WarehouseInventoryCreateOrConnectWithoutWarehouseInput | WarehouseInventoryCreateOrConnectWithoutWarehouseInput[]
    upsert?: WarehouseInventoryUpsertWithWhereUniqueWithoutWarehouseInput | WarehouseInventoryUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: WarehouseInventoryCreateManyWarehouseInputEnvelope
    set?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    disconnect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    delete?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    connect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    update?: WarehouseInventoryUpdateWithWhereUniqueWithoutWarehouseInput | WarehouseInventoryUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: WarehouseInventoryUpdateManyWithWhereWithoutWarehouseInput | WarehouseInventoryUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: WarehouseInventoryScalarWhereInput | WarehouseInventoryScalarWhereInput[]
  }

  export type ProductsUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ProductsCreateWithoutWarehouseInput, ProductsUncheckedCreateWithoutWarehouseInput> | ProductsCreateWithoutWarehouseInput[] | ProductsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutWarehouseInput | ProductsCreateOrConnectWithoutWarehouseInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutWarehouseInput | ProductsUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ProductsCreateManyWarehouseInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutWarehouseInput | ProductsUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutWarehouseInput | ProductsUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<InvitationCreateWithoutWarehouseInput, InvitationUncheckedCreateWithoutWarehouseInput> | InvitationCreateWithoutWarehouseInput[] | InvitationUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutWarehouseInput | InvitationCreateOrConnectWithoutWarehouseInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutWarehouseInput | InvitationUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: InvitationCreateManyWarehouseInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutWarehouseInput | InvitationUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutWarehouseInput | InvitationUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<UserCreateWithoutWarehouseInput, UserUncheckedCreateWithoutWarehouseInput> | UserCreateWithoutWarehouseInput[] | UserUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWarehouseInput | UserCreateOrConnectWithoutWarehouseInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWarehouseInput | UserUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: UserCreateManyWarehouseInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWarehouseInput | UserUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWarehouseInput | UserUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WarehouseInventoryUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<WarehouseInventoryCreateWithoutWarehouseInput, WarehouseInventoryUncheckedCreateWithoutWarehouseInput> | WarehouseInventoryCreateWithoutWarehouseInput[] | WarehouseInventoryUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: WarehouseInventoryCreateOrConnectWithoutWarehouseInput | WarehouseInventoryCreateOrConnectWithoutWarehouseInput[]
    upsert?: WarehouseInventoryUpsertWithWhereUniqueWithoutWarehouseInput | WarehouseInventoryUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: WarehouseInventoryCreateManyWarehouseInputEnvelope
    set?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    disconnect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    delete?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    connect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    update?: WarehouseInventoryUpdateWithWhereUniqueWithoutWarehouseInput | WarehouseInventoryUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: WarehouseInventoryUpdateManyWithWhereWithoutWarehouseInput | WarehouseInventoryUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: WarehouseInventoryScalarWhereInput | WarehouseInventoryScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ProductsCreateWithoutWarehouseInput, ProductsUncheckedCreateWithoutWarehouseInput> | ProductsCreateWithoutWarehouseInput[] | ProductsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutWarehouseInput | ProductsCreateOrConnectWithoutWarehouseInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutWarehouseInput | ProductsUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ProductsCreateManyWarehouseInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutWarehouseInput | ProductsUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutWarehouseInput | ProductsUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<InvitationCreateWithoutWarehouseInput, InvitationUncheckedCreateWithoutWarehouseInput> | InvitationCreateWithoutWarehouseInput[] | InvitationUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutWarehouseInput | InvitationCreateOrConnectWithoutWarehouseInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutWarehouseInput | InvitationUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: InvitationCreateManyWarehouseInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutWarehouseInput | InvitationUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutWarehouseInput | InvitationUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProductsInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    connect?: UserWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutProductsInput = {
    create?: XOR<WarehouseCreateWithoutProductsInput, WarehouseUncheckedCreateWithoutProductsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutProductsInput
    connect?: WarehouseWhereUniqueInput
  }

  export type WarehouseInventoryCreateNestedManyWithoutProductInput = {
    create?: XOR<WarehouseInventoryCreateWithoutProductInput, WarehouseInventoryUncheckedCreateWithoutProductInput> | WarehouseInventoryCreateWithoutProductInput[] | WarehouseInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WarehouseInventoryCreateOrConnectWithoutProductInput | WarehouseInventoryCreateOrConnectWithoutProductInput[]
    createMany?: WarehouseInventoryCreateManyProductInputEnvelope
    connect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutProductInput = {
    create?: XOR<PaymentCreateWithoutProductInput, PaymentUncheckedCreateWithoutProductInput> | PaymentCreateWithoutProductInput[] | PaymentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProductInput | PaymentCreateOrConnectWithoutProductInput[]
    createMany?: PaymentCreateManyProductInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type WarehouseInventoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<WarehouseInventoryCreateWithoutProductInput, WarehouseInventoryUncheckedCreateWithoutProductInput> | WarehouseInventoryCreateWithoutProductInput[] | WarehouseInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WarehouseInventoryCreateOrConnectWithoutProductInput | WarehouseInventoryCreateOrConnectWithoutProductInput[]
    createMany?: WarehouseInventoryCreateManyProductInputEnvelope
    connect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PaymentCreateWithoutProductInput, PaymentUncheckedCreateWithoutProductInput> | PaymentCreateWithoutProductInput[] | PaymentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProductInput | PaymentCreateOrConnectWithoutProductInput[]
    createMany?: PaymentCreateManyProductInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    upsert?: UserUpsertWithoutProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductsInput, UserUpdateWithoutProductsInput>, UserUncheckedUpdateWithoutProductsInput>
  }

  export type WarehouseUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<WarehouseCreateWithoutProductsInput, WarehouseUncheckedCreateWithoutProductsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutProductsInput
    upsert?: WarehouseUpsertWithoutProductsInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutProductsInput, WarehouseUpdateWithoutProductsInput>, WarehouseUncheckedUpdateWithoutProductsInput>
  }

  export type WarehouseInventoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<WarehouseInventoryCreateWithoutProductInput, WarehouseInventoryUncheckedCreateWithoutProductInput> | WarehouseInventoryCreateWithoutProductInput[] | WarehouseInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WarehouseInventoryCreateOrConnectWithoutProductInput | WarehouseInventoryCreateOrConnectWithoutProductInput[]
    upsert?: WarehouseInventoryUpsertWithWhereUniqueWithoutProductInput | WarehouseInventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: WarehouseInventoryCreateManyProductInputEnvelope
    set?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    disconnect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    delete?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    connect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    update?: WarehouseInventoryUpdateWithWhereUniqueWithoutProductInput | WarehouseInventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: WarehouseInventoryUpdateManyWithWhereWithoutProductInput | WarehouseInventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: WarehouseInventoryScalarWhereInput | WarehouseInventoryScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutProductNestedInput = {
    create?: XOR<PaymentCreateWithoutProductInput, PaymentUncheckedCreateWithoutProductInput> | PaymentCreateWithoutProductInput[] | PaymentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProductInput | PaymentCreateOrConnectWithoutProductInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutProductInput | PaymentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PaymentCreateManyProductInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutProductInput | PaymentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutProductInput | PaymentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type WarehouseInventoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<WarehouseInventoryCreateWithoutProductInput, WarehouseInventoryUncheckedCreateWithoutProductInput> | WarehouseInventoryCreateWithoutProductInput[] | WarehouseInventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WarehouseInventoryCreateOrConnectWithoutProductInput | WarehouseInventoryCreateOrConnectWithoutProductInput[]
    upsert?: WarehouseInventoryUpsertWithWhereUniqueWithoutProductInput | WarehouseInventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: WarehouseInventoryCreateManyProductInputEnvelope
    set?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    disconnect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    delete?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    connect?: WarehouseInventoryWhereUniqueInput | WarehouseInventoryWhereUniqueInput[]
    update?: WarehouseInventoryUpdateWithWhereUniqueWithoutProductInput | WarehouseInventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: WarehouseInventoryUpdateManyWithWhereWithoutProductInput | WarehouseInventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: WarehouseInventoryScalarWhereInput | WarehouseInventoryScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PaymentCreateWithoutProductInput, PaymentUncheckedCreateWithoutProductInput> | PaymentCreateWithoutProductInput[] | PaymentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProductInput | PaymentCreateOrConnectWithoutProductInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutProductInput | PaymentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PaymentCreateManyProductInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutProductInput | PaymentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutProductInput | PaymentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutInventoryMovementsInput = {
    create?: XOR<ProductsCreateWithoutInventoryMovementsInput, ProductsUncheckedCreateWithoutInventoryMovementsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutInventoryMovementsInput
    connect?: ProductsWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutInventoryInput = {
    create?: XOR<WarehouseCreateWithoutInventoryInput, WarehouseUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutInventoryInput
    connect?: WarehouseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInventoryRecordsInput = {
    create?: XOR<UserCreateWithoutInventoryRecordsInput, UserUncheckedCreateWithoutInventoryRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.MovementType
  }

  export type ProductsUpdateOneRequiredWithoutInventoryMovementsNestedInput = {
    create?: XOR<ProductsCreateWithoutInventoryMovementsInput, ProductsUncheckedCreateWithoutInventoryMovementsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutInventoryMovementsInput
    upsert?: ProductsUpsertWithoutInventoryMovementsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutInventoryMovementsInput, ProductsUpdateWithoutInventoryMovementsInput>, ProductsUncheckedUpdateWithoutInventoryMovementsInput>
  }

  export type WarehouseUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<WarehouseCreateWithoutInventoryInput, WarehouseUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutInventoryInput
    upsert?: WarehouseUpsertWithoutInventoryInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutInventoryInput, WarehouseUpdateWithoutInventoryInput>, WarehouseUncheckedUpdateWithoutInventoryInput>
  }

  export type UserUpdateOneRequiredWithoutInventoryRecordsNestedInput = {
    create?: XOR<UserCreateWithoutInventoryRecordsInput, UserUncheckedCreateWithoutInventoryRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryRecordsInput
    upsert?: UserUpsertWithoutInventoryRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInventoryRecordsInput, UserUpdateWithoutInventoryRecordsInput>, UserUncheckedUpdateWithoutInventoryRecordsInput>
  }

  export type UserCreateNestedOneWithoutFarmerPaymentsInput = {
    create?: XOR<UserCreateWithoutFarmerPaymentsInput, UserUncheckedCreateWithoutFarmerPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmerPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ProductsCreateWithoutPaymentsInput, ProductsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutPaymentsInput
    connect?: ProductsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProcessedPaymentsInput = {
    create?: XOR<UserCreateWithoutProcessedPaymentsInput, UserUncheckedCreateWithoutProcessedPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcessedPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableEnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod | null
  }

  export type UserUpdateOneRequiredWithoutFarmerPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutFarmerPaymentsInput, UserUncheckedCreateWithoutFarmerPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmerPaymentsInput
    upsert?: UserUpsertWithoutFarmerPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFarmerPaymentsInput, UserUpdateWithoutFarmerPaymentsInput>, UserUncheckedUpdateWithoutFarmerPaymentsInput>
  }

  export type ProductsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ProductsCreateWithoutPaymentsInput, ProductsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutPaymentsInput
    upsert?: ProductsUpsertWithoutPaymentsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutPaymentsInput, ProductsUpdateWithoutPaymentsInput>, ProductsUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneWithoutProcessedPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutProcessedPaymentsInput, UserUncheckedCreateWithoutProcessedPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcessedPaymentsInput
    upsert?: UserUpsertWithoutProcessedPaymentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProcessedPaymentsInput, UserUpdateWithoutProcessedPaymentsInput>, UserUncheckedUpdateWithoutProcessedPaymentsInput>
  }

  export type UserCreateNestedOneWithoutSentInvitationsInput = {
    create?: XOR<UserCreateWithoutSentInvitationsInput, UserUncheckedCreateWithoutSentInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedInvitationsInput = {
    create?: XOR<UserCreateWithoutReceivedInvitationsInput, UserUncheckedCreateWithoutReceivedInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<WarehouseCreateWithoutInvitationsInput, WarehouseUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutInvitationsInput
    connect?: WarehouseWhereUniqueInput
  }

  export type EnumInvitationStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvitationStatus
  }

  export type UserUpdateOneRequiredWithoutSentInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutSentInvitationsInput, UserUncheckedCreateWithoutSentInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitationsInput
    upsert?: UserUpsertWithoutSentInvitationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentInvitationsInput, UserUpdateWithoutSentInvitationsInput>, UserUncheckedUpdateWithoutSentInvitationsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedInvitationsInput, UserUncheckedCreateWithoutReceivedInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedInvitationsInput
    upsert?: UserUpsertWithoutReceivedInvitationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedInvitationsInput, UserUpdateWithoutReceivedInvitationsInput>, UserUncheckedUpdateWithoutReceivedInvitationsInput>
  }

  export type WarehouseUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<WarehouseCreateWithoutInvitationsInput, WarehouseUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutInvitationsInput
    upsert?: WarehouseUpsertWithoutInvitationsInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutInvitationsInput, WarehouseUpdateWithoutInvitationsInput>, WarehouseUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserCreateNestedOneWithoutPerformedActionsInput = {
    create?: XOR<UserCreateWithoutPerformedActionsInput, UserUncheckedCreateWithoutPerformedActionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPerformedActionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActionType
  }

  export type EnumEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.EntityType
  }

  export type UserUpdateOneRequiredWithoutPerformedActionsNestedInput = {
    create?: XOR<UserCreateWithoutPerformedActionsInput, UserUncheckedCreateWithoutPerformedActionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPerformedActionsInput
    upsert?: UserUpsertWithoutPerformedActionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPerformedActionsInput, UserUpdateWithoutPerformedActionsInput>, UserUncheckedUpdateWithoutPerformedActionsInput>
  }

  export type UserUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type NestedEnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type NestedEnumActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeFilter<$PrismaModel> | $Enums.ActionType
  }

  export type NestedEnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }

  export type NestedEnumActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionTypeFilter<$PrismaModel>
    _max?: NestedEnumActionTypeFilter<$PrismaModel>
  }

  export type NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WarehouseCreateWithoutFarmersInput = {
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manager: UserCreateNestedOneWithoutManagedWarehouseInput
    inventory?: WarehouseInventoryCreateNestedManyWithoutWarehouseInput
    products?: ProductsCreateNestedManyWithoutWarehouseInput
    invitations?: InvitationCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutFarmersInput = {
    id?: number
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    managerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: WarehouseInventoryUncheckedCreateNestedManyWithoutWarehouseInput
    products?: ProductsUncheckedCreateNestedManyWithoutWarehouseInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutFarmersInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutFarmersInput, WarehouseUncheckedCreateWithoutFarmersInput>
  }

  export type WarehouseCreateWithoutManagerInput = {
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmers?: UserCreateNestedManyWithoutWarehouseInput
    inventory?: WarehouseInventoryCreateNestedManyWithoutWarehouseInput
    products?: ProductsCreateNestedManyWithoutWarehouseInput
    invitations?: InvitationCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutManagerInput = {
    id?: number
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmers?: UserUncheckedCreateNestedManyWithoutWarehouseInput
    inventory?: WarehouseInventoryUncheckedCreateNestedManyWithoutWarehouseInput
    products?: ProductsUncheckedCreateNestedManyWithoutWarehouseInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutManagerInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutManagerInput, WarehouseUncheckedCreateWithoutManagerInput>
  }

  export type UserCreateWithoutCreatedUsersInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutCreatedUsersInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutCreatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
  }

  export type UserCreateWithoutCreatedByInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutCreatedByInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput>
  }

  export type UserCreateManyCreatedByInputEnvelope = {
    data: UserCreateManyCreatedByInput | UserCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutModifiedUsersInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutModifiedUsersInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutModifiedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModifiedUsersInput, UserUncheckedCreateWithoutModifiedUsersInput>
  }

  export type UserCreateWithoutLastModifiedByInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutLastModifiedByInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutLastModifiedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLastModifiedByInput, UserUncheckedCreateWithoutLastModifiedByInput>
  }

  export type UserCreateManyLastModifiedByInputEnvelope = {
    data: UserCreateManyLastModifiedByInput | UserCreateManyLastModifiedByInput[]
    skipDuplicates?: boolean
  }

  export type ProductsCreateWithoutFarmerInput = {
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutProductsInput
    inventoryMovements?: WarehouseInventoryCreateNestedManyWithoutProductInput
    payments?: PaymentCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutFarmerInput = {
    id?: number
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    warehouseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryMovements?: WarehouseInventoryUncheckedCreateNestedManyWithoutProductInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutFarmerInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutFarmerInput, ProductsUncheckedCreateWithoutFarmerInput>
  }

  export type ProductsCreateManyFarmerInputEnvelope = {
    data: ProductsCreateManyFarmerInput | ProductsCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutFarmerInput = {
    amount: number
    quantity: number
    pricePerUnit: number
    status?: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    referenceNumber?: string | null
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductsCreateNestedOneWithoutPaymentsInput
    processedBy?: UserCreateNestedOneWithoutProcessedPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutFarmerInput = {
    id?: number
    productId: number
    amount: number
    quantity: number
    pricePerUnit: number
    status?: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    referenceNumber?: string | null
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    notes?: string | null
    processedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutFarmerInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutFarmerInput, PaymentUncheckedCreateWithoutFarmerInput>
  }

  export type PaymentCreateManyFarmerInputEnvelope = {
    data: PaymentCreateManyFarmerInput | PaymentCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutProcessedByInput = {
    amount: number
    quantity: number
    pricePerUnit: number
    status?: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    referenceNumber?: string | null
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer: UserCreateNestedOneWithoutFarmerPaymentsInput
    product: ProductsCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutProcessedByInput = {
    id?: number
    farmerId: number
    productId: number
    amount: number
    quantity: number
    pricePerUnit: number
    status?: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    referenceNumber?: string | null
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutProcessedByInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutProcessedByInput, PaymentUncheckedCreateWithoutProcessedByInput>
  }

  export type PaymentCreateManyProcessedByInputEnvelope = {
    data: PaymentCreateManyProcessedByInput | PaymentCreateManyProcessedByInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutSenderInput = {
    status?: $Enums.InvitationStatus
    message?: string | null
    sentAt?: Date | string
    respondedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedInvitationsInput
    warehouse: WarehouseCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateWithoutSenderInput = {
    id?: number
    receiverId: number
    warehouseId: number
    status?: $Enums.InvitationStatus
    message?: string | null
    sentAt?: Date | string
    respondedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutSenderInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput>
  }

  export type InvitationCreateManySenderInputEnvelope = {
    data: InvitationCreateManySenderInput | InvitationCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutReceiverInput = {
    status?: $Enums.InvitationStatus
    message?: string | null
    sentAt?: Date | string
    respondedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentInvitationsInput
    warehouse: WarehouseCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateWithoutReceiverInput = {
    id?: number
    senderId: number
    warehouseId: number
    status?: $Enums.InvitationStatus
    message?: string | null
    sentAt?: Date | string
    respondedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutReceiverInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutReceiverInput, InvitationUncheckedCreateWithoutReceiverInput>
  }

  export type InvitationCreateManyReceiverInputEnvelope = {
    data: InvitationCreateManyReceiverInput | InvitationCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutTargetUserInput = {
    action: $Enums.ActionType
    entityType: $Enums.EntityType
    entityId?: number | null
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    performedBy: UserCreateNestedOneWithoutPerformedActionsInput
  }

  export type ActivityLogUncheckedCreateWithoutTargetUserInput = {
    id?: number
    performedById: number
    action: $Enums.ActionType
    entityType: $Enums.EntityType
    entityId?: number | null
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutTargetUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutTargetUserInput, ActivityLogUncheckedCreateWithoutTargetUserInput>
  }

  export type ActivityLogCreateManyTargetUserInputEnvelope = {
    data: ActivityLogCreateManyTargetUserInput | ActivityLogCreateManyTargetUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutPerformedByInput = {
    action: $Enums.ActionType
    entityType: $Enums.EntityType
    entityId?: number | null
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    targetUser?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateWithoutPerformedByInput = {
    id?: number
    targetUserId?: number | null
    action: $Enums.ActionType
    entityType: $Enums.EntityType
    entityId?: number | null
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutPerformedByInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutPerformedByInput, ActivityLogUncheckedCreateWithoutPerformedByInput>
  }

  export type ActivityLogCreateManyPerformedByInputEnvelope = {
    data: ActivityLogCreateManyPerformedByInput | ActivityLogCreateManyPerformedByInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseInventoryCreateWithoutRecordedByInput = {
    quantityIn?: number | null
    quantityOut?: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason?: string | null
    createdAt?: Date | string
    product: ProductsCreateNestedOneWithoutInventoryMovementsInput
    warehouse: WarehouseCreateNestedOneWithoutInventoryInput
  }

  export type WarehouseInventoryUncheckedCreateWithoutRecordedByInput = {
    id?: number
    productId: number
    warehouseId: number
    quantityIn?: number | null
    quantityOut?: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason?: string | null
    createdAt?: Date | string
  }

  export type WarehouseInventoryCreateOrConnectWithoutRecordedByInput = {
    where: WarehouseInventoryWhereUniqueInput
    create: XOR<WarehouseInventoryCreateWithoutRecordedByInput, WarehouseInventoryUncheckedCreateWithoutRecordedByInput>
  }

  export type WarehouseInventoryCreateManyRecordedByInputEnvelope = {
    data: WarehouseInventoryCreateManyRecordedByInput | WarehouseInventoryCreateManyRecordedByInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseUpsertWithoutFarmersInput = {
    update: XOR<WarehouseUpdateWithoutFarmersInput, WarehouseUncheckedUpdateWithoutFarmersInput>
    create: XOR<WarehouseCreateWithoutFarmersInput, WarehouseUncheckedCreateWithoutFarmersInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutFarmersInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutFarmersInput, WarehouseUncheckedUpdateWithoutFarmersInput>
  }

  export type WarehouseUpdateWithoutFarmersInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutManagedWarehouseNestedInput
    inventory?: WarehouseInventoryUpdateManyWithoutWarehouseNestedInput
    products?: ProductsUpdateManyWithoutWarehouseNestedInput
    invitations?: InvitationUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutFarmersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: WarehouseInventoryUncheckedUpdateManyWithoutWarehouseNestedInput
    products?: ProductsUncheckedUpdateManyWithoutWarehouseNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUpsertWithoutManagerInput = {
    update: XOR<WarehouseUpdateWithoutManagerInput, WarehouseUncheckedUpdateWithoutManagerInput>
    create: XOR<WarehouseCreateWithoutManagerInput, WarehouseUncheckedCreateWithoutManagerInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutManagerInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutManagerInput, WarehouseUncheckedUpdateWithoutManagerInput>
  }

  export type WarehouseUpdateWithoutManagerInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmers?: UserUpdateManyWithoutWarehouseNestedInput
    inventory?: WarehouseInventoryUpdateManyWithoutWarehouseNestedInput
    products?: ProductsUpdateManyWithoutWarehouseNestedInput
    invitations?: InvitationUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmers?: UserUncheckedUpdateManyWithoutWarehouseNestedInput
    inventory?: WarehouseInventoryUncheckedUpdateManyWithoutWarehouseNestedInput
    products?: ProductsUncheckedUpdateManyWithoutWarehouseNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type UserUpsertWithoutCreatedUsersInput = {
    update: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateWithoutCreatedUsersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatedByInput, UserUncheckedUpdateWithoutCreatedByInput>
    create: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatedByInput, UserUncheckedUpdateWithoutCreatedByInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    Fname?: StringFilter<"User"> | string
    Mname?: StringNullableFilter<"User"> | string | null
    Lname?: StringFilter<"User"> | string
    photo?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    isGoogleUser?: BoolNullableFilter<"User"> | boolean | null
    googleId?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    emailConfirmationToken?: StringNullableFilter<"User"> | string | null
    emailConfirmationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    warehouseId?: IntNullableFilter<"User"> | number | null
    createdById?: IntNullableFilter<"User"> | number | null
    lastModifiedById?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserUpsertWithoutModifiedUsersInput = {
    update: XOR<UserUpdateWithoutModifiedUsersInput, UserUncheckedUpdateWithoutModifiedUsersInput>
    create: XOR<UserCreateWithoutModifiedUsersInput, UserUncheckedCreateWithoutModifiedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModifiedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModifiedUsersInput, UserUncheckedUpdateWithoutModifiedUsersInput>
  }

  export type UserUpdateWithoutModifiedUsersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutModifiedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutLastModifiedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLastModifiedByInput, UserUncheckedUpdateWithoutLastModifiedByInput>
    create: XOR<UserCreateWithoutLastModifiedByInput, UserUncheckedCreateWithoutLastModifiedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLastModifiedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLastModifiedByInput, UserUncheckedUpdateWithoutLastModifiedByInput>
  }

  export type UserUpdateManyWithWhereWithoutLastModifiedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLastModifiedByInput>
  }

  export type ProductsUpsertWithWhereUniqueWithoutFarmerInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutFarmerInput, ProductsUncheckedUpdateWithoutFarmerInput>
    create: XOR<ProductsCreateWithoutFarmerInput, ProductsUncheckedCreateWithoutFarmerInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutFarmerInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutFarmerInput, ProductsUncheckedUpdateWithoutFarmerInput>
  }

  export type ProductsUpdateManyWithWhereWithoutFarmerInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutFarmerInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    grade?: StringFilter<"Products"> | string
    quantity?: IntFilter<"Products"> | number
    price?: FloatFilter<"Products"> | number
    variety?: StringFilter<"Products"> | string
    location?: StringFilter<"Products"> | string
    image?: StringNullableFilter<"Products"> | string | null
    description?: StringNullableFilter<"Products"> | string | null
    farmerId?: IntFilter<"Products"> | number
    warehouseId?: IntFilter<"Products"> | number
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutFarmerInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutFarmerInput, PaymentUncheckedUpdateWithoutFarmerInput>
    create: XOR<PaymentCreateWithoutFarmerInput, PaymentUncheckedCreateWithoutFarmerInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutFarmerInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutFarmerInput, PaymentUncheckedUpdateWithoutFarmerInput>
  }

  export type PaymentUpdateManyWithWhereWithoutFarmerInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutFarmerInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    farmerId?: IntFilter<"Payment"> | number
    productId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    quantity?: IntFilter<"Payment"> | number
    pricePerUnit?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodNullableFilter<"Payment"> | $Enums.PaymentMethod | null
    referenceNumber?: StringNullableFilter<"Payment"> | string | null
    dueDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    paidDate?: DateTimeNullableFilter<"Payment"> | Date | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    processedById?: IntNullableFilter<"Payment"> | number | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutProcessedByInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutProcessedByInput, PaymentUncheckedUpdateWithoutProcessedByInput>
    create: XOR<PaymentCreateWithoutProcessedByInput, PaymentUncheckedCreateWithoutProcessedByInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutProcessedByInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutProcessedByInput, PaymentUncheckedUpdateWithoutProcessedByInput>
  }

  export type PaymentUpdateManyWithWhereWithoutProcessedByInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutProcessedByInput>
  }

  export type InvitationUpsertWithWhereUniqueWithoutSenderInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutSenderInput, InvitationUncheckedUpdateWithoutSenderInput>
    create: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutSenderInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutSenderInput, InvitationUncheckedUpdateWithoutSenderInput>
  }

  export type InvitationUpdateManyWithWhereWithoutSenderInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutSenderInput>
  }

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    OR?: InvitationScalarWhereInput[]
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    id?: IntFilter<"Invitation"> | number
    senderId?: IntFilter<"Invitation"> | number
    receiverId?: IntFilter<"Invitation"> | number
    warehouseId?: IntFilter<"Invitation"> | number
    status?: EnumInvitationStatusFilter<"Invitation"> | $Enums.InvitationStatus
    message?: StringNullableFilter<"Invitation"> | string | null
    sentAt?: DateTimeFilter<"Invitation"> | Date | string
    respondedAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
  }

  export type InvitationUpsertWithWhereUniqueWithoutReceiverInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutReceiverInput, InvitationUncheckedUpdateWithoutReceiverInput>
    create: XOR<InvitationCreateWithoutReceiverInput, InvitationUncheckedCreateWithoutReceiverInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutReceiverInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutReceiverInput, InvitationUncheckedUpdateWithoutReceiverInput>
  }

  export type InvitationUpdateManyWithWhereWithoutReceiverInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutReceiverInput>
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutTargetUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutTargetUserInput, ActivityLogUncheckedUpdateWithoutTargetUserInput>
    create: XOR<ActivityLogCreateWithoutTargetUserInput, ActivityLogUncheckedCreateWithoutTargetUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutTargetUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutTargetUserInput, ActivityLogUncheckedUpdateWithoutTargetUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutTargetUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutTargetUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    performedById?: IntFilter<"ActivityLog"> | number
    targetUserId?: IntNullableFilter<"ActivityLog"> | number | null
    action?: EnumActionTypeFilter<"ActivityLog"> | $Enums.ActionType
    entityType?: EnumEntityTypeFilter<"ActivityLog"> | $Enums.EntityType
    entityId?: IntNullableFilter<"ActivityLog"> | number | null
    description?: StringFilter<"ActivityLog"> | string
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutPerformedByInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutPerformedByInput, ActivityLogUncheckedUpdateWithoutPerformedByInput>
    create: XOR<ActivityLogCreateWithoutPerformedByInput, ActivityLogUncheckedCreateWithoutPerformedByInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutPerformedByInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutPerformedByInput, ActivityLogUncheckedUpdateWithoutPerformedByInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutPerformedByInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutPerformedByInput>
  }

  export type WarehouseInventoryUpsertWithWhereUniqueWithoutRecordedByInput = {
    where: WarehouseInventoryWhereUniqueInput
    update: XOR<WarehouseInventoryUpdateWithoutRecordedByInput, WarehouseInventoryUncheckedUpdateWithoutRecordedByInput>
    create: XOR<WarehouseInventoryCreateWithoutRecordedByInput, WarehouseInventoryUncheckedCreateWithoutRecordedByInput>
  }

  export type WarehouseInventoryUpdateWithWhereUniqueWithoutRecordedByInput = {
    where: WarehouseInventoryWhereUniqueInput
    data: XOR<WarehouseInventoryUpdateWithoutRecordedByInput, WarehouseInventoryUncheckedUpdateWithoutRecordedByInput>
  }

  export type WarehouseInventoryUpdateManyWithWhereWithoutRecordedByInput = {
    where: WarehouseInventoryScalarWhereInput
    data: XOR<WarehouseInventoryUpdateManyMutationInput, WarehouseInventoryUncheckedUpdateManyWithoutRecordedByInput>
  }

  export type WarehouseInventoryScalarWhereInput = {
    AND?: WarehouseInventoryScalarWhereInput | WarehouseInventoryScalarWhereInput[]
    OR?: WarehouseInventoryScalarWhereInput[]
    NOT?: WarehouseInventoryScalarWhereInput | WarehouseInventoryScalarWhereInput[]
    id?: IntFilter<"WarehouseInventory"> | number
    productId?: IntFilter<"WarehouseInventory"> | number
    warehouseId?: IntFilter<"WarehouseInventory"> | number
    quantityIn?: IntNullableFilter<"WarehouseInventory"> | number | null
    quantityOut?: IntNullableFilter<"WarehouseInventory"> | number | null
    currentStock?: IntFilter<"WarehouseInventory"> | number
    movementType?: EnumMovementTypeFilter<"WarehouseInventory"> | $Enums.MovementType
    reason?: StringNullableFilter<"WarehouseInventory"> | string | null
    recordedById?: IntFilter<"WarehouseInventory"> | number
    createdAt?: DateTimeFilter<"WarehouseInventory"> | Date | string
  }

  export type UserCreateWithoutManagedWarehouseInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutManagedWarehouseInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutManagedWarehouseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagedWarehouseInput, UserUncheckedCreateWithoutManagedWarehouseInput>
  }

  export type UserCreateWithoutWarehouseInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutWarehouseInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutWarehouseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWarehouseInput, UserUncheckedCreateWithoutWarehouseInput>
  }

  export type UserCreateManyWarehouseInputEnvelope = {
    data: UserCreateManyWarehouseInput | UserCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseInventoryCreateWithoutWarehouseInput = {
    quantityIn?: number | null
    quantityOut?: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason?: string | null
    createdAt?: Date | string
    product: ProductsCreateNestedOneWithoutInventoryMovementsInput
    recordedBy: UserCreateNestedOneWithoutInventoryRecordsInput
  }

  export type WarehouseInventoryUncheckedCreateWithoutWarehouseInput = {
    id?: number
    productId: number
    quantityIn?: number | null
    quantityOut?: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason?: string | null
    recordedById: number
    createdAt?: Date | string
  }

  export type WarehouseInventoryCreateOrConnectWithoutWarehouseInput = {
    where: WarehouseInventoryWhereUniqueInput
    create: XOR<WarehouseInventoryCreateWithoutWarehouseInput, WarehouseInventoryUncheckedCreateWithoutWarehouseInput>
  }

  export type WarehouseInventoryCreateManyWarehouseInputEnvelope = {
    data: WarehouseInventoryCreateManyWarehouseInput | WarehouseInventoryCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type ProductsCreateWithoutWarehouseInput = {
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer: UserCreateNestedOneWithoutProductsInput
    inventoryMovements?: WarehouseInventoryCreateNestedManyWithoutProductInput
    payments?: PaymentCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutWarehouseInput = {
    id?: number
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    farmerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryMovements?: WarehouseInventoryUncheckedCreateNestedManyWithoutProductInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutWarehouseInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutWarehouseInput, ProductsUncheckedCreateWithoutWarehouseInput>
  }

  export type ProductsCreateManyWarehouseInputEnvelope = {
    data: ProductsCreateManyWarehouseInput | ProductsCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutWarehouseInput = {
    status?: $Enums.InvitationStatus
    message?: string | null
    sentAt?: Date | string
    respondedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentInvitationsInput
    receiver: UserCreateNestedOneWithoutReceivedInvitationsInput
  }

  export type InvitationUncheckedCreateWithoutWarehouseInput = {
    id?: number
    senderId: number
    receiverId: number
    status?: $Enums.InvitationStatus
    message?: string | null
    sentAt?: Date | string
    respondedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutWarehouseInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutWarehouseInput, InvitationUncheckedCreateWithoutWarehouseInput>
  }

  export type InvitationCreateManyWarehouseInputEnvelope = {
    data: InvitationCreateManyWarehouseInput | InvitationCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutManagedWarehouseInput = {
    update: XOR<UserUpdateWithoutManagedWarehouseInput, UserUncheckedUpdateWithoutManagedWarehouseInput>
    create: XOR<UserCreateWithoutManagedWarehouseInput, UserUncheckedCreateWithoutManagedWarehouseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagedWarehouseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagedWarehouseInput, UserUncheckedUpdateWithoutManagedWarehouseInput>
  }

  export type UserUpdateWithoutManagedWarehouseInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutManagedWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutWarehouseInput, UserUncheckedUpdateWithoutWarehouseInput>
    create: XOR<UserCreateWithoutWarehouseInput, UserUncheckedCreateWithoutWarehouseInput>
  }

  export type UserUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutWarehouseInput, UserUncheckedUpdateWithoutWarehouseInput>
  }

  export type UserUpdateManyWithWhereWithoutWarehouseInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type WarehouseInventoryUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: WarehouseInventoryWhereUniqueInput
    update: XOR<WarehouseInventoryUpdateWithoutWarehouseInput, WarehouseInventoryUncheckedUpdateWithoutWarehouseInput>
    create: XOR<WarehouseInventoryCreateWithoutWarehouseInput, WarehouseInventoryUncheckedCreateWithoutWarehouseInput>
  }

  export type WarehouseInventoryUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: WarehouseInventoryWhereUniqueInput
    data: XOR<WarehouseInventoryUpdateWithoutWarehouseInput, WarehouseInventoryUncheckedUpdateWithoutWarehouseInput>
  }

  export type WarehouseInventoryUpdateManyWithWhereWithoutWarehouseInput = {
    where: WarehouseInventoryScalarWhereInput
    data: XOR<WarehouseInventoryUpdateManyMutationInput, WarehouseInventoryUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type ProductsUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutWarehouseInput, ProductsUncheckedUpdateWithoutWarehouseInput>
    create: XOR<ProductsCreateWithoutWarehouseInput, ProductsUncheckedCreateWithoutWarehouseInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutWarehouseInput, ProductsUncheckedUpdateWithoutWarehouseInput>
  }

  export type ProductsUpdateManyWithWhereWithoutWarehouseInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type InvitationUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutWarehouseInput, InvitationUncheckedUpdateWithoutWarehouseInput>
    create: XOR<InvitationCreateWithoutWarehouseInput, InvitationUncheckedCreateWithoutWarehouseInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutWarehouseInput, InvitationUncheckedUpdateWithoutWarehouseInput>
  }

  export type InvitationUpdateManyWithWhereWithoutWarehouseInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type UserCreateWithoutProductsInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutProductsInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
  }

  export type WarehouseCreateWithoutProductsInput = {
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manager: UserCreateNestedOneWithoutManagedWarehouseInput
    farmers?: UserCreateNestedManyWithoutWarehouseInput
    inventory?: WarehouseInventoryCreateNestedManyWithoutWarehouseInput
    invitations?: InvitationCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    managerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    farmers?: UserUncheckedCreateNestedManyWithoutWarehouseInput
    inventory?: WarehouseInventoryUncheckedCreateNestedManyWithoutWarehouseInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutProductsInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutProductsInput, WarehouseUncheckedCreateWithoutProductsInput>
  }

  export type WarehouseInventoryCreateWithoutProductInput = {
    quantityIn?: number | null
    quantityOut?: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason?: string | null
    createdAt?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutInventoryInput
    recordedBy: UserCreateNestedOneWithoutInventoryRecordsInput
  }

  export type WarehouseInventoryUncheckedCreateWithoutProductInput = {
    id?: number
    warehouseId: number
    quantityIn?: number | null
    quantityOut?: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason?: string | null
    recordedById: number
    createdAt?: Date | string
  }

  export type WarehouseInventoryCreateOrConnectWithoutProductInput = {
    where: WarehouseInventoryWhereUniqueInput
    create: XOR<WarehouseInventoryCreateWithoutProductInput, WarehouseInventoryUncheckedCreateWithoutProductInput>
  }

  export type WarehouseInventoryCreateManyProductInputEnvelope = {
    data: WarehouseInventoryCreateManyProductInput | WarehouseInventoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutProductInput = {
    amount: number
    quantity: number
    pricePerUnit: number
    status?: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    referenceNumber?: string | null
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer: UserCreateNestedOneWithoutFarmerPaymentsInput
    processedBy?: UserCreateNestedOneWithoutProcessedPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutProductInput = {
    id?: number
    farmerId: number
    amount: number
    quantity: number
    pricePerUnit: number
    status?: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    referenceNumber?: string | null
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    notes?: string | null
    processedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutProductInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutProductInput, PaymentUncheckedCreateWithoutProductInput>
  }

  export type PaymentCreateManyProductInputEnvelope = {
    data: PaymentCreateManyProductInput | PaymentCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProductsInput = {
    update: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateWithoutProductsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type WarehouseUpsertWithoutProductsInput = {
    update: XOR<WarehouseUpdateWithoutProductsInput, WarehouseUncheckedUpdateWithoutProductsInput>
    create: XOR<WarehouseCreateWithoutProductsInput, WarehouseUncheckedCreateWithoutProductsInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutProductsInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutProductsInput, WarehouseUncheckedUpdateWithoutProductsInput>
  }

  export type WarehouseUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutManagedWarehouseNestedInput
    farmers?: UserUpdateManyWithoutWarehouseNestedInput
    inventory?: WarehouseInventoryUpdateManyWithoutWarehouseNestedInput
    invitations?: InvitationUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmers?: UserUncheckedUpdateManyWithoutWarehouseNestedInput
    inventory?: WarehouseInventoryUncheckedUpdateManyWithoutWarehouseNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseInventoryUpsertWithWhereUniqueWithoutProductInput = {
    where: WarehouseInventoryWhereUniqueInput
    update: XOR<WarehouseInventoryUpdateWithoutProductInput, WarehouseInventoryUncheckedUpdateWithoutProductInput>
    create: XOR<WarehouseInventoryCreateWithoutProductInput, WarehouseInventoryUncheckedCreateWithoutProductInput>
  }

  export type WarehouseInventoryUpdateWithWhereUniqueWithoutProductInput = {
    where: WarehouseInventoryWhereUniqueInput
    data: XOR<WarehouseInventoryUpdateWithoutProductInput, WarehouseInventoryUncheckedUpdateWithoutProductInput>
  }

  export type WarehouseInventoryUpdateManyWithWhereWithoutProductInput = {
    where: WarehouseInventoryScalarWhereInput
    data: XOR<WarehouseInventoryUpdateManyMutationInput, WarehouseInventoryUncheckedUpdateManyWithoutProductInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutProductInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutProductInput, PaymentUncheckedUpdateWithoutProductInput>
    create: XOR<PaymentCreateWithoutProductInput, PaymentUncheckedCreateWithoutProductInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutProductInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutProductInput, PaymentUncheckedUpdateWithoutProductInput>
  }

  export type PaymentUpdateManyWithWhereWithoutProductInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductsCreateWithoutInventoryMovementsInput = {
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer: UserCreateNestedOneWithoutProductsInput
    warehouse: WarehouseCreateNestedOneWithoutProductsInput
    payments?: PaymentCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutInventoryMovementsInput = {
    id?: number
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    farmerId: number
    warehouseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutInventoryMovementsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutInventoryMovementsInput, ProductsUncheckedCreateWithoutInventoryMovementsInput>
  }

  export type WarehouseCreateWithoutInventoryInput = {
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manager: UserCreateNestedOneWithoutManagedWarehouseInput
    farmers?: UserCreateNestedManyWithoutWarehouseInput
    products?: ProductsCreateNestedManyWithoutWarehouseInput
    invitations?: InvitationCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutInventoryInput = {
    id?: number
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    managerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    farmers?: UserUncheckedCreateNestedManyWithoutWarehouseInput
    products?: ProductsUncheckedCreateNestedManyWithoutWarehouseInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutInventoryInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutInventoryInput, WarehouseUncheckedCreateWithoutInventoryInput>
  }

  export type UserCreateWithoutInventoryRecordsInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutInventoryRecordsInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutInventoryRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryRecordsInput, UserUncheckedCreateWithoutInventoryRecordsInput>
  }

  export type ProductsUpsertWithoutInventoryMovementsInput = {
    update: XOR<ProductsUpdateWithoutInventoryMovementsInput, ProductsUncheckedUpdateWithoutInventoryMovementsInput>
    create: XOR<ProductsCreateWithoutInventoryMovementsInput, ProductsUncheckedCreateWithoutInventoryMovementsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutInventoryMovementsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutInventoryMovementsInput, ProductsUncheckedUpdateWithoutInventoryMovementsInput>
  }

  export type ProductsUpdateWithoutInventoryMovementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneRequiredWithoutProductsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutProductsNestedInput
    payments?: PaymentUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutInventoryMovementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    farmerId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type WarehouseUpsertWithoutInventoryInput = {
    update: XOR<WarehouseUpdateWithoutInventoryInput, WarehouseUncheckedUpdateWithoutInventoryInput>
    create: XOR<WarehouseCreateWithoutInventoryInput, WarehouseUncheckedCreateWithoutInventoryInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutInventoryInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutInventoryInput, WarehouseUncheckedUpdateWithoutInventoryInput>
  }

  export type WarehouseUpdateWithoutInventoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutManagedWarehouseNestedInput
    farmers?: UserUpdateManyWithoutWarehouseNestedInput
    products?: ProductsUpdateManyWithoutWarehouseNestedInput
    invitations?: InvitationUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmers?: UserUncheckedUpdateManyWithoutWarehouseNestedInput
    products?: ProductsUncheckedUpdateManyWithoutWarehouseNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type UserUpsertWithoutInventoryRecordsInput = {
    update: XOR<UserUpdateWithoutInventoryRecordsInput, UserUncheckedUpdateWithoutInventoryRecordsInput>
    create: XOR<UserCreateWithoutInventoryRecordsInput, UserUncheckedCreateWithoutInventoryRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInventoryRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInventoryRecordsInput, UserUncheckedUpdateWithoutInventoryRecordsInput>
  }

  export type UserUpdateWithoutInventoryRecordsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserCreateWithoutFarmerPaymentsInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutFarmerPaymentsInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutFarmerPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFarmerPaymentsInput, UserUncheckedCreateWithoutFarmerPaymentsInput>
  }

  export type ProductsCreateWithoutPaymentsInput = {
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farmer: UserCreateNestedOneWithoutProductsInput
    warehouse: WarehouseCreateNestedOneWithoutProductsInput
    inventoryMovements?: WarehouseInventoryCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutPaymentsInput = {
    id?: number
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    farmerId: number
    warehouseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryMovements?: WarehouseInventoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutPaymentsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutPaymentsInput, ProductsUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutProcessedPaymentsInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutProcessedPaymentsInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutProcessedPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProcessedPaymentsInput, UserUncheckedCreateWithoutProcessedPaymentsInput>
  }

  export type UserUpsertWithoutFarmerPaymentsInput = {
    update: XOR<UserUpdateWithoutFarmerPaymentsInput, UserUncheckedUpdateWithoutFarmerPaymentsInput>
    create: XOR<UserCreateWithoutFarmerPaymentsInput, UserUncheckedCreateWithoutFarmerPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFarmerPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFarmerPaymentsInput, UserUncheckedUpdateWithoutFarmerPaymentsInput>
  }

  export type UserUpdateWithoutFarmerPaymentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFarmerPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type ProductsUpsertWithoutPaymentsInput = {
    update: XOR<ProductsUpdateWithoutPaymentsInput, ProductsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ProductsCreateWithoutPaymentsInput, ProductsUncheckedCreateWithoutPaymentsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutPaymentsInput, ProductsUncheckedUpdateWithoutPaymentsInput>
  }

  export type ProductsUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneRequiredWithoutProductsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutProductsNestedInput
    inventoryMovements?: WarehouseInventoryUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    farmerId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryMovements?: WarehouseInventoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutProcessedPaymentsInput = {
    update: XOR<UserUpdateWithoutProcessedPaymentsInput, UserUncheckedUpdateWithoutProcessedPaymentsInput>
    create: XOR<UserCreateWithoutProcessedPaymentsInput, UserUncheckedCreateWithoutProcessedPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProcessedPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProcessedPaymentsInput, UserUncheckedUpdateWithoutProcessedPaymentsInput>
  }

  export type UserUpdateWithoutProcessedPaymentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutProcessedPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserCreateWithoutSentInvitationsInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutSentInvitationsInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutSentInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentInvitationsInput, UserUncheckedCreateWithoutSentInvitationsInput>
  }

  export type UserCreateWithoutReceivedInvitationsInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutReceivedInvitationsInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutReceivedInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedInvitationsInput, UserUncheckedCreateWithoutReceivedInvitationsInput>
  }

  export type WarehouseCreateWithoutInvitationsInput = {
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manager: UserCreateNestedOneWithoutManagedWarehouseInput
    farmers?: UserCreateNestedManyWithoutWarehouseInput
    inventory?: WarehouseInventoryCreateNestedManyWithoutWarehouseInput
    products?: ProductsCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutInvitationsInput = {
    id?: number
    name: string
    location: string
    address?: string | null
    capacity?: number | null
    phone?: string | null
    email?: string | null
    managerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    farmers?: UserUncheckedCreateNestedManyWithoutWarehouseInput
    inventory?: WarehouseInventoryUncheckedCreateNestedManyWithoutWarehouseInput
    products?: ProductsUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutInvitationsInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutInvitationsInput, WarehouseUncheckedCreateWithoutInvitationsInput>
  }

  export type UserUpsertWithoutSentInvitationsInput = {
    update: XOR<UserUpdateWithoutSentInvitationsInput, UserUncheckedUpdateWithoutSentInvitationsInput>
    create: XOR<UserCreateWithoutSentInvitationsInput, UserUncheckedCreateWithoutSentInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentInvitationsInput, UserUncheckedUpdateWithoutSentInvitationsInput>
  }

  export type UserUpdateWithoutSentInvitationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSentInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUpsertWithoutReceivedInvitationsInput = {
    update: XOR<UserUpdateWithoutReceivedInvitationsInput, UserUncheckedUpdateWithoutReceivedInvitationsInput>
    create: XOR<UserCreateWithoutReceivedInvitationsInput, UserUncheckedCreateWithoutReceivedInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedInvitationsInput, UserUncheckedUpdateWithoutReceivedInvitationsInput>
  }

  export type UserUpdateWithoutReceivedInvitationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type WarehouseUpsertWithoutInvitationsInput = {
    update: XOR<WarehouseUpdateWithoutInvitationsInput, WarehouseUncheckedUpdateWithoutInvitationsInput>
    create: XOR<WarehouseCreateWithoutInvitationsInput, WarehouseUncheckedCreateWithoutInvitationsInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutInvitationsInput, WarehouseUncheckedUpdateWithoutInvitationsInput>
  }

  export type WarehouseUpdateWithoutInvitationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutManagedWarehouseNestedInput
    farmers?: UserUpdateManyWithoutWarehouseNestedInput
    inventory?: WarehouseInventoryUpdateManyWithoutWarehouseNestedInput
    products?: ProductsUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutInvitationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmers?: UserUncheckedUpdateManyWithoutWarehouseNestedInput
    inventory?: WarehouseInventoryUncheckedUpdateManyWithoutWarehouseNestedInput
    products?: ProductsUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type UserCreateWithoutPerformedActionsInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogCreateNestedManyWithoutTargetUserInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutPerformedActionsInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutTargetUserInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutPerformedActionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPerformedActionsInput, UserUncheckedCreateWithoutPerformedActionsInput>
  }

  export type UserCreateWithoutActivityLogsInput = {
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehouseCreateNestedOneWithoutFarmersInput
    managedWarehouse?: WarehouseCreateNestedOneWithoutManagerInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    lastModifiedBy?: UserCreateNestedOneWithoutModifiedUsersInput
    modifiedUsers?: UserCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationCreateNestedManyWithoutReceiverInput
    performedActions?: ActivityLogCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managedWarehouse?: WarehouseUncheckedCreateNestedOneWithoutManagerInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    modifiedUsers?: UserUncheckedCreateNestedManyWithoutLastModifiedByInput
    products?: ProductsUncheckedCreateNestedManyWithoutFarmerInput
    farmerPayments?: PaymentUncheckedCreateNestedManyWithoutFarmerInput
    processedPayments?: PaymentUncheckedCreateNestedManyWithoutProcessedByInput
    sentInvitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvitations?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
    performedActions?: ActivityLogUncheckedCreateNestedManyWithoutPerformedByInput
    inventoryRecords?: WarehouseInventoryUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutPerformedActionsInput = {
    update: XOR<UserUpdateWithoutPerformedActionsInput, UserUncheckedUpdateWithoutPerformedActionsInput>
    create: XOR<UserCreateWithoutPerformedActionsInput, UserUncheckedCreateWithoutPerformedActionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPerformedActionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPerformedActionsInput, UserUncheckedUpdateWithoutPerformedActionsInput>
  }

  export type UserUpdateWithoutPerformedActionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPerformedActionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserCreateManyCreatedByInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyLastModifiedByInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    warehouseId?: number | null
    createdById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsCreateManyFarmerInput = {
    id?: number
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    warehouseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyFarmerInput = {
    id?: number
    productId: number
    amount: number
    quantity: number
    pricePerUnit: number
    status?: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    referenceNumber?: string | null
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    notes?: string | null
    processedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyProcessedByInput = {
    id?: number
    farmerId: number
    productId: number
    amount: number
    quantity: number
    pricePerUnit: number
    status?: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    referenceNumber?: string | null
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateManySenderInput = {
    id?: number
    receiverId: number
    warehouseId: number
    status?: $Enums.InvitationStatus
    message?: string | null
    sentAt?: Date | string
    respondedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateManyReceiverInput = {
    id?: number
    senderId: number
    warehouseId: number
    status?: $Enums.InvitationStatus
    message?: string | null
    sentAt?: Date | string
    respondedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateManyTargetUserInput = {
    id?: number
    performedById: number
    action: $Enums.ActionType
    entityType: $Enums.EntityType
    entityId?: number | null
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogCreateManyPerformedByInput = {
    id?: number
    targetUserId?: number | null
    action: $Enums.ActionType
    entityType: $Enums.EntityType
    entityId?: number | null
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WarehouseInventoryCreateManyRecordedByInput = {
    id?: number
    productId: number
    warehouseId: number
    quantityIn?: number | null
    quantityOut?: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutCreatedByInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutLastModifiedByInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneWithoutFarmersNestedInput
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLastModifiedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLastModifiedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpdateWithoutFarmerInput = {
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutProductsNestedInput
    inventoryMovements?: WarehouseInventoryUpdateManyWithoutProductNestedInput
    payments?: PaymentUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutFarmerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    warehouseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryMovements?: WarehouseInventoryUncheckedUpdateManyWithoutProductNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutFarmerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    warehouseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutFarmerInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutPaymentsNestedInput
    processedBy?: UserUpdateOneWithoutProcessedPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutFarmerInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    processedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutFarmerInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    processedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutProcessedByInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneRequiredWithoutFarmerPaymentsNestedInput
    product?: ProductsUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutProcessedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmerId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutProcessedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmerId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutSenderInput = {
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedInvitationsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutReceiverInput = {
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentInvitationsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutTargetUserInput = {
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performedBy?: UserUpdateOneRequiredWithoutPerformedActionsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutTargetUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    performedById?: IntFieldUpdateOperationsInput | number
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutTargetUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    performedById?: IntFieldUpdateOperationsInput | number
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutPerformedByInput = {
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetUser?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutPerformedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetUserId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutPerformedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetUserId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseInventoryUpdateWithoutRecordedByInput = {
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutInventoryMovementsNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type WarehouseInventoryUncheckedUpdateWithoutRecordedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseInventoryUncheckedUpdateManyWithoutRecordedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyWarehouseInput = {
    id?: number
    email: string
    password?: string | null
    Fname: string
    Mname?: string | null
    Lname: string
    photo?: string | null
    phone?: string | null
    address?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    isGoogleUser?: boolean | null
    googleId?: string | null
    emailVerified?: boolean | null
    emailConfirmationToken?: string | null
    emailConfirmationTokenExpiry?: Date | string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdById?: number | null
    lastModifiedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarehouseInventoryCreateManyWarehouseInput = {
    id?: number
    productId: number
    quantityIn?: number | null
    quantityOut?: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason?: string | null
    recordedById: number
    createdAt?: Date | string
  }

  export type ProductsCreateManyWarehouseInput = {
    id?: number
    name: string
    grade: string
    quantity: number
    price: number
    variety: string
    location: string
    image?: string | null
    description?: string | null
    farmerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateManyWarehouseInput = {
    id?: number
    senderId: number
    receiverId: number
    status?: $Enums.InvitationStatus
    message?: string | null
    sentAt?: Date | string
    respondedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutWarehouseInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUpdateOneWithoutManagerNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    lastModifiedBy?: UserUpdateOneWithoutModifiedUsersNestedInput
    modifiedUsers?: UserUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedWarehouse?: WarehouseUncheckedUpdateOneWithoutManagerNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    modifiedUsers?: UserUncheckedUpdateManyWithoutLastModifiedByNestedInput
    products?: ProductsUncheckedUpdateManyWithoutFarmerNestedInput
    farmerPayments?: PaymentUncheckedUpdateManyWithoutFarmerNestedInput
    processedPayments?: PaymentUncheckedUpdateManyWithoutProcessedByNestedInput
    sentInvitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvitations?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutTargetUserNestedInput
    performedActions?: ActivityLogUncheckedUpdateManyWithoutPerformedByNestedInput
    inventoryRecords?: WarehouseInventoryUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Fname?: StringFieldUpdateOperationsInput | string
    Mname?: NullableStringFieldUpdateOperationsInput | string | null
    Lname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    isGoogleUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailConfirmationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    lastModifiedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseInventoryUpdateWithoutWarehouseInput = {
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutInventoryMovementsNestedInput
    recordedBy?: UserUpdateOneRequiredWithoutInventoryRecordsNestedInput
  }

  export type WarehouseInventoryUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recordedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseInventoryUncheckedUpdateManyWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recordedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpdateWithoutWarehouseInput = {
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneRequiredWithoutProductsNestedInput
    inventoryMovements?: WarehouseInventoryUpdateManyWithoutProductNestedInput
    payments?: PaymentUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    farmerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryMovements?: WarehouseInventoryUncheckedUpdateManyWithoutProductNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    farmerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutWarehouseInput = {
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentInvitationsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseInventoryCreateManyProductInput = {
    id?: number
    warehouseId: number
    quantityIn?: number | null
    quantityOut?: number | null
    currentStock: number
    movementType: $Enums.MovementType
    reason?: string | null
    recordedById: number
    createdAt?: Date | string
  }

  export type PaymentCreateManyProductInput = {
    id?: number
    farmerId: number
    amount: number
    quantity: number
    pricePerUnit: number
    status?: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    referenceNumber?: string | null
    dueDate?: Date | string | null
    paidDate?: Date | string | null
    notes?: string | null
    processedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarehouseInventoryUpdateWithoutProductInput = {
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutInventoryNestedInput
    recordedBy?: UserUpdateOneRequiredWithoutInventoryRecordsNestedInput
  }

  export type WarehouseInventoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recordedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseInventoryUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    quantityIn?: NullableIntFieldUpdateOperationsInput | number | null
    quantityOut?: NullableIntFieldUpdateOperationsInput | number | null
    currentStock?: IntFieldUpdateOperationsInput | number
    movementType?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recordedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutProductInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmer?: UserUpdateOneRequiredWithoutFarmerPaymentsNestedInput
    processedBy?: UserUpdateOneWithoutProcessedPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmerId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    processedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmerId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    processedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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