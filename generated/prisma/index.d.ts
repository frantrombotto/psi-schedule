
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
 * Model Therapist
 * 
 */
export type Therapist = $Result.DefaultSelection<Prisma.$TherapistPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Therapists
 * const therapists = await prisma.therapist.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Therapists
   * const therapists = await prisma.therapist.findMany()
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
   * `prisma.therapist`: Exposes CRUD operations for the **Therapist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Therapists
    * const therapists = await prisma.therapist.findMany()
    * ```
    */
  get therapist(): Prisma.TherapistDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    Therapist: 'Therapist'
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
      modelProps: "therapist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Therapist: {
        payload: Prisma.$TherapistPayload<ExtArgs>
        fields: Prisma.TherapistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TherapistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TherapistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          findFirst: {
            args: Prisma.TherapistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TherapistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          findMany: {
            args: Prisma.TherapistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>[]
          }
          create: {
            args: Prisma.TherapistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          createMany: {
            args: Prisma.TherapistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TherapistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>[]
          }
          delete: {
            args: Prisma.TherapistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          update: {
            args: Prisma.TherapistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          deleteMany: {
            args: Prisma.TherapistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TherapistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TherapistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>[]
          }
          upsert: {
            args: Prisma.TherapistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapistPayload>
          }
          aggregate: {
            args: Prisma.TherapistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTherapist>
          }
          groupBy: {
            args: Prisma.TherapistGroupByArgs<ExtArgs>
            result: $Utils.Optional<TherapistGroupByOutputType>[]
          }
          count: {
            args: Prisma.TherapistCountArgs<ExtArgs>
            result: $Utils.Optional<TherapistCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    therapist?: TherapistOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model Therapist
   */

  export type AggregateTherapist = {
    _count: TherapistCountAggregateOutputType | null
    _avg: TherapistAvgAggregateOutputType | null
    _sum: TherapistSumAggregateOutputType | null
    _min: TherapistMinAggregateOutputType | null
    _max: TherapistMaxAggregateOutputType | null
  }

  export type TherapistAvgAggregateOutputType = {
    rating: number | null
    reviewCount: number | null
    pricePerSession: number | null
    yearsExperience: number | null
  }

  export type TherapistSumAggregateOutputType = {
    rating: number | null
    reviewCount: number | null
    pricePerSession: number | null
    yearsExperience: number | null
  }

  export type TherapistMinAggregateOutputType = {
    id: string | null
    name: string | null
    credentials: string | null
    rating: number | null
    reviewCount: number | null
    pricePerSession: number | null
    location: string | null
    nextAvailable: string | null
    avatar: string | null
    acceptsInsurance: boolean | null
    yearsExperience: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TherapistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    credentials: string | null
    rating: number | null
    reviewCount: number | null
    pricePerSession: number | null
    location: string | null
    nextAvailable: string | null
    avatar: string | null
    acceptsInsurance: boolean | null
    yearsExperience: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TherapistCountAggregateOutputType = {
    id: number
    name: number
    credentials: number
    specialties: number
    rating: number
    reviewCount: number
    pricePerSession: number
    location: number
    nextAvailable: number
    avatar: number
    acceptsInsurance: number
    sessionTypes: number
    languages: number
    yearsExperience: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TherapistAvgAggregateInputType = {
    rating?: true
    reviewCount?: true
    pricePerSession?: true
    yearsExperience?: true
  }

  export type TherapistSumAggregateInputType = {
    rating?: true
    reviewCount?: true
    pricePerSession?: true
    yearsExperience?: true
  }

  export type TherapistMinAggregateInputType = {
    id?: true
    name?: true
    credentials?: true
    rating?: true
    reviewCount?: true
    pricePerSession?: true
    location?: true
    nextAvailable?: true
    avatar?: true
    acceptsInsurance?: true
    yearsExperience?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TherapistMaxAggregateInputType = {
    id?: true
    name?: true
    credentials?: true
    rating?: true
    reviewCount?: true
    pricePerSession?: true
    location?: true
    nextAvailable?: true
    avatar?: true
    acceptsInsurance?: true
    yearsExperience?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TherapistCountAggregateInputType = {
    id?: true
    name?: true
    credentials?: true
    specialties?: true
    rating?: true
    reviewCount?: true
    pricePerSession?: true
    location?: true
    nextAvailable?: true
    avatar?: true
    acceptsInsurance?: true
    sessionTypes?: true
    languages?: true
    yearsExperience?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TherapistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Therapist to aggregate.
     */
    where?: TherapistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapists to fetch.
     */
    orderBy?: TherapistOrderByWithRelationInput | TherapistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TherapistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Therapists
    **/
    _count?: true | TherapistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TherapistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TherapistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TherapistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TherapistMaxAggregateInputType
  }

  export type GetTherapistAggregateType<T extends TherapistAggregateArgs> = {
        [P in keyof T & keyof AggregateTherapist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTherapist[P]>
      : GetScalarType<T[P], AggregateTherapist[P]>
  }




  export type TherapistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapistWhereInput
    orderBy?: TherapistOrderByWithAggregationInput | TherapistOrderByWithAggregationInput[]
    by: TherapistScalarFieldEnum[] | TherapistScalarFieldEnum
    having?: TherapistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TherapistCountAggregateInputType | true
    _avg?: TherapistAvgAggregateInputType
    _sum?: TherapistSumAggregateInputType
    _min?: TherapistMinAggregateInputType
    _max?: TherapistMaxAggregateInputType
  }

  export type TherapistGroupByOutputType = {
    id: string
    name: string
    credentials: string
    specialties: string[]
    rating: number
    reviewCount: number
    pricePerSession: number
    location: string
    nextAvailable: string | null
    avatar: string
    acceptsInsurance: boolean
    sessionTypes: string[]
    languages: string[]
    yearsExperience: number
    createdAt: Date
    updatedAt: Date
    _count: TherapistCountAggregateOutputType | null
    _avg: TherapistAvgAggregateOutputType | null
    _sum: TherapistSumAggregateOutputType | null
    _min: TherapistMinAggregateOutputType | null
    _max: TherapistMaxAggregateOutputType | null
  }

  type GetTherapistGroupByPayload<T extends TherapistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TherapistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TherapistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TherapistGroupByOutputType[P]>
            : GetScalarType<T[P], TherapistGroupByOutputType[P]>
        }
      >
    >


  export type TherapistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    credentials?: boolean
    specialties?: boolean
    rating?: boolean
    reviewCount?: boolean
    pricePerSession?: boolean
    location?: boolean
    nextAvailable?: boolean
    avatar?: boolean
    acceptsInsurance?: boolean
    sessionTypes?: boolean
    languages?: boolean
    yearsExperience?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["therapist"]>

  export type TherapistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    credentials?: boolean
    specialties?: boolean
    rating?: boolean
    reviewCount?: boolean
    pricePerSession?: boolean
    location?: boolean
    nextAvailable?: boolean
    avatar?: boolean
    acceptsInsurance?: boolean
    sessionTypes?: boolean
    languages?: boolean
    yearsExperience?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["therapist"]>

  export type TherapistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    credentials?: boolean
    specialties?: boolean
    rating?: boolean
    reviewCount?: boolean
    pricePerSession?: boolean
    location?: boolean
    nextAvailable?: boolean
    avatar?: boolean
    acceptsInsurance?: boolean
    sessionTypes?: boolean
    languages?: boolean
    yearsExperience?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["therapist"]>

  export type TherapistSelectScalar = {
    id?: boolean
    name?: boolean
    credentials?: boolean
    specialties?: boolean
    rating?: boolean
    reviewCount?: boolean
    pricePerSession?: boolean
    location?: boolean
    nextAvailable?: boolean
    avatar?: boolean
    acceptsInsurance?: boolean
    sessionTypes?: boolean
    languages?: boolean
    yearsExperience?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TherapistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "credentials" | "specialties" | "rating" | "reviewCount" | "pricePerSession" | "location" | "nextAvailable" | "avatar" | "acceptsInsurance" | "sessionTypes" | "languages" | "yearsExperience" | "createdAt" | "updatedAt", ExtArgs["result"]["therapist"]>

  export type $TherapistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Therapist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      credentials: string
      specialties: string[]
      rating: number
      reviewCount: number
      pricePerSession: number
      location: string
      nextAvailable: string | null
      avatar: string
      acceptsInsurance: boolean
      sessionTypes: string[]
      languages: string[]
      yearsExperience: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["therapist"]>
    composites: {}
  }

  type TherapistGetPayload<S extends boolean | null | undefined | TherapistDefaultArgs> = $Result.GetResult<Prisma.$TherapistPayload, S>

  type TherapistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TherapistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TherapistCountAggregateInputType | true
    }

  export interface TherapistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Therapist'], meta: { name: 'Therapist' } }
    /**
     * Find zero or one Therapist that matches the filter.
     * @param {TherapistFindUniqueArgs} args - Arguments to find a Therapist
     * @example
     * // Get one Therapist
     * const therapist = await prisma.therapist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TherapistFindUniqueArgs>(args: SelectSubset<T, TherapistFindUniqueArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Therapist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TherapistFindUniqueOrThrowArgs} args - Arguments to find a Therapist
     * @example
     * // Get one Therapist
     * const therapist = await prisma.therapist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TherapistFindUniqueOrThrowArgs>(args: SelectSubset<T, TherapistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Therapist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistFindFirstArgs} args - Arguments to find a Therapist
     * @example
     * // Get one Therapist
     * const therapist = await prisma.therapist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TherapistFindFirstArgs>(args?: SelectSubset<T, TherapistFindFirstArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Therapist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistFindFirstOrThrowArgs} args - Arguments to find a Therapist
     * @example
     * // Get one Therapist
     * const therapist = await prisma.therapist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TherapistFindFirstOrThrowArgs>(args?: SelectSubset<T, TherapistFindFirstOrThrowArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Therapists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Therapists
     * const therapists = await prisma.therapist.findMany()
     * 
     * // Get first 10 Therapists
     * const therapists = await prisma.therapist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const therapistWithIdOnly = await prisma.therapist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TherapistFindManyArgs>(args?: SelectSubset<T, TherapistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Therapist.
     * @param {TherapistCreateArgs} args - Arguments to create a Therapist.
     * @example
     * // Create one Therapist
     * const Therapist = await prisma.therapist.create({
     *   data: {
     *     // ... data to create a Therapist
     *   }
     * })
     * 
     */
    create<T extends TherapistCreateArgs>(args: SelectSubset<T, TherapistCreateArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Therapists.
     * @param {TherapistCreateManyArgs} args - Arguments to create many Therapists.
     * @example
     * // Create many Therapists
     * const therapist = await prisma.therapist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TherapistCreateManyArgs>(args?: SelectSubset<T, TherapistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Therapists and returns the data saved in the database.
     * @param {TherapistCreateManyAndReturnArgs} args - Arguments to create many Therapists.
     * @example
     * // Create many Therapists
     * const therapist = await prisma.therapist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Therapists and only return the `id`
     * const therapistWithIdOnly = await prisma.therapist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TherapistCreateManyAndReturnArgs>(args?: SelectSubset<T, TherapistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Therapist.
     * @param {TherapistDeleteArgs} args - Arguments to delete one Therapist.
     * @example
     * // Delete one Therapist
     * const Therapist = await prisma.therapist.delete({
     *   where: {
     *     // ... filter to delete one Therapist
     *   }
     * })
     * 
     */
    delete<T extends TherapistDeleteArgs>(args: SelectSubset<T, TherapistDeleteArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Therapist.
     * @param {TherapistUpdateArgs} args - Arguments to update one Therapist.
     * @example
     * // Update one Therapist
     * const therapist = await prisma.therapist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TherapistUpdateArgs>(args: SelectSubset<T, TherapistUpdateArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Therapists.
     * @param {TherapistDeleteManyArgs} args - Arguments to filter Therapists to delete.
     * @example
     * // Delete a few Therapists
     * const { count } = await prisma.therapist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TherapistDeleteManyArgs>(args?: SelectSubset<T, TherapistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Therapists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Therapists
     * const therapist = await prisma.therapist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TherapistUpdateManyArgs>(args: SelectSubset<T, TherapistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Therapists and returns the data updated in the database.
     * @param {TherapistUpdateManyAndReturnArgs} args - Arguments to update many Therapists.
     * @example
     * // Update many Therapists
     * const therapist = await prisma.therapist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Therapists and only return the `id`
     * const therapistWithIdOnly = await prisma.therapist.updateManyAndReturn({
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
    updateManyAndReturn<T extends TherapistUpdateManyAndReturnArgs>(args: SelectSubset<T, TherapistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Therapist.
     * @param {TherapistUpsertArgs} args - Arguments to update or create a Therapist.
     * @example
     * // Update or create a Therapist
     * const therapist = await prisma.therapist.upsert({
     *   create: {
     *     // ... data to create a Therapist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Therapist we want to update
     *   }
     * })
     */
    upsert<T extends TherapistUpsertArgs>(args: SelectSubset<T, TherapistUpsertArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Therapists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistCountArgs} args - Arguments to filter Therapists to count.
     * @example
     * // Count the number of Therapists
     * const count = await prisma.therapist.count({
     *   where: {
     *     // ... the filter for the Therapists we want to count
     *   }
     * })
    **/
    count<T extends TherapistCountArgs>(
      args?: Subset<T, TherapistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TherapistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Therapist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TherapistAggregateArgs>(args: Subset<T, TherapistAggregateArgs>): Prisma.PrismaPromise<GetTherapistAggregateType<T>>

    /**
     * Group by Therapist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapistGroupByArgs} args - Group by arguments.
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
      T extends TherapistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TherapistGroupByArgs['orderBy'] }
        : { orderBy?: TherapistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TherapistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTherapistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Therapist model
   */
  readonly fields: TherapistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Therapist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TherapistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Therapist model
   */
  interface TherapistFieldRefs {
    readonly id: FieldRef<"Therapist", 'String'>
    readonly name: FieldRef<"Therapist", 'String'>
    readonly credentials: FieldRef<"Therapist", 'String'>
    readonly specialties: FieldRef<"Therapist", 'String[]'>
    readonly rating: FieldRef<"Therapist", 'Float'>
    readonly reviewCount: FieldRef<"Therapist", 'Int'>
    readonly pricePerSession: FieldRef<"Therapist", 'Int'>
    readonly location: FieldRef<"Therapist", 'String'>
    readonly nextAvailable: FieldRef<"Therapist", 'String'>
    readonly avatar: FieldRef<"Therapist", 'String'>
    readonly acceptsInsurance: FieldRef<"Therapist", 'Boolean'>
    readonly sessionTypes: FieldRef<"Therapist", 'String[]'>
    readonly languages: FieldRef<"Therapist", 'String[]'>
    readonly yearsExperience: FieldRef<"Therapist", 'Int'>
    readonly createdAt: FieldRef<"Therapist", 'DateTime'>
    readonly updatedAt: FieldRef<"Therapist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Therapist findUnique
   */
  export type TherapistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Filter, which Therapist to fetch.
     */
    where: TherapistWhereUniqueInput
  }

  /**
   * Therapist findUniqueOrThrow
   */
  export type TherapistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Filter, which Therapist to fetch.
     */
    where: TherapistWhereUniqueInput
  }

  /**
   * Therapist findFirst
   */
  export type TherapistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Filter, which Therapist to fetch.
     */
    where?: TherapistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapists to fetch.
     */
    orderBy?: TherapistOrderByWithRelationInput | TherapistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Therapists.
     */
    cursor?: TherapistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Therapists.
     */
    distinct?: TherapistScalarFieldEnum | TherapistScalarFieldEnum[]
  }

  /**
   * Therapist findFirstOrThrow
   */
  export type TherapistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Filter, which Therapist to fetch.
     */
    where?: TherapistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapists to fetch.
     */
    orderBy?: TherapistOrderByWithRelationInput | TherapistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Therapists.
     */
    cursor?: TherapistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Therapists.
     */
    distinct?: TherapistScalarFieldEnum | TherapistScalarFieldEnum[]
  }

  /**
   * Therapist findMany
   */
  export type TherapistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Filter, which Therapists to fetch.
     */
    where?: TherapistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Therapists to fetch.
     */
    orderBy?: TherapistOrderByWithRelationInput | TherapistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Therapists.
     */
    cursor?: TherapistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Therapists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Therapists.
     */
    skip?: number
    distinct?: TherapistScalarFieldEnum | TherapistScalarFieldEnum[]
  }

  /**
   * Therapist create
   */
  export type TherapistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * The data needed to create a Therapist.
     */
    data: XOR<TherapistCreateInput, TherapistUncheckedCreateInput>
  }

  /**
   * Therapist createMany
   */
  export type TherapistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Therapists.
     */
    data: TherapistCreateManyInput | TherapistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Therapist createManyAndReturn
   */
  export type TherapistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * The data used to create many Therapists.
     */
    data: TherapistCreateManyInput | TherapistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Therapist update
   */
  export type TherapistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * The data needed to update a Therapist.
     */
    data: XOR<TherapistUpdateInput, TherapistUncheckedUpdateInput>
    /**
     * Choose, which Therapist to update.
     */
    where: TherapistWhereUniqueInput
  }

  /**
   * Therapist updateMany
   */
  export type TherapistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Therapists.
     */
    data: XOR<TherapistUpdateManyMutationInput, TherapistUncheckedUpdateManyInput>
    /**
     * Filter which Therapists to update
     */
    where?: TherapistWhereInput
    /**
     * Limit how many Therapists to update.
     */
    limit?: number
  }

  /**
   * Therapist updateManyAndReturn
   */
  export type TherapistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * The data used to update Therapists.
     */
    data: XOR<TherapistUpdateManyMutationInput, TherapistUncheckedUpdateManyInput>
    /**
     * Filter which Therapists to update
     */
    where?: TherapistWhereInput
    /**
     * Limit how many Therapists to update.
     */
    limit?: number
  }

  /**
   * Therapist upsert
   */
  export type TherapistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * The filter to search for the Therapist to update in case it exists.
     */
    where: TherapistWhereUniqueInput
    /**
     * In case the Therapist found by the `where` argument doesn't exist, create a new Therapist with this data.
     */
    create: XOR<TherapistCreateInput, TherapistUncheckedCreateInput>
    /**
     * In case the Therapist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TherapistUpdateInput, TherapistUncheckedUpdateInput>
  }

  /**
   * Therapist delete
   */
  export type TherapistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
    /**
     * Filter which Therapist to delete.
     */
    where: TherapistWhereUniqueInput
  }

  /**
   * Therapist deleteMany
   */
  export type TherapistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Therapists to delete
     */
    where?: TherapistWhereInput
    /**
     * Limit how many Therapists to delete.
     */
    limit?: number
  }

  /**
   * Therapist without action
   */
  export type TherapistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Therapist
     */
    select?: TherapistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Therapist
     */
    omit?: TherapistOmit<ExtArgs> | null
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


  export const TherapistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    credentials: 'credentials',
    specialties: 'specialties',
    rating: 'rating',
    reviewCount: 'reviewCount',
    pricePerSession: 'pricePerSession',
    location: 'location',
    nextAvailable: 'nextAvailable',
    avatar: 'avatar',
    acceptsInsurance: 'acceptsInsurance',
    sessionTypes: 'sessionTypes',
    languages: 'languages',
    yearsExperience: 'yearsExperience',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TherapistScalarFieldEnum = (typeof TherapistScalarFieldEnum)[keyof typeof TherapistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Deep Input Types
   */


  export type TherapistWhereInput = {
    AND?: TherapistWhereInput | TherapistWhereInput[]
    OR?: TherapistWhereInput[]
    NOT?: TherapistWhereInput | TherapistWhereInput[]
    id?: StringFilter<"Therapist"> | string
    name?: StringFilter<"Therapist"> | string
    credentials?: StringFilter<"Therapist"> | string
    specialties?: StringNullableListFilter<"Therapist">
    rating?: FloatFilter<"Therapist"> | number
    reviewCount?: IntFilter<"Therapist"> | number
    pricePerSession?: IntFilter<"Therapist"> | number
    location?: StringFilter<"Therapist"> | string
    nextAvailable?: StringNullableFilter<"Therapist"> | string | null
    avatar?: StringFilter<"Therapist"> | string
    acceptsInsurance?: BoolFilter<"Therapist"> | boolean
    sessionTypes?: StringNullableListFilter<"Therapist">
    languages?: StringNullableListFilter<"Therapist">
    yearsExperience?: IntFilter<"Therapist"> | number
    createdAt?: DateTimeFilter<"Therapist"> | Date | string
    updatedAt?: DateTimeFilter<"Therapist"> | Date | string
  }

  export type TherapistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    credentials?: SortOrder
    specialties?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    pricePerSession?: SortOrder
    location?: SortOrder
    nextAvailable?: SortOrderInput | SortOrder
    avatar?: SortOrder
    acceptsInsurance?: SortOrder
    sessionTypes?: SortOrder
    languages?: SortOrder
    yearsExperience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TherapistWhereInput | TherapistWhereInput[]
    OR?: TherapistWhereInput[]
    NOT?: TherapistWhereInput | TherapistWhereInput[]
    name?: StringFilter<"Therapist"> | string
    credentials?: StringFilter<"Therapist"> | string
    specialties?: StringNullableListFilter<"Therapist">
    rating?: FloatFilter<"Therapist"> | number
    reviewCount?: IntFilter<"Therapist"> | number
    pricePerSession?: IntFilter<"Therapist"> | number
    location?: StringFilter<"Therapist"> | string
    nextAvailable?: StringNullableFilter<"Therapist"> | string | null
    avatar?: StringFilter<"Therapist"> | string
    acceptsInsurance?: BoolFilter<"Therapist"> | boolean
    sessionTypes?: StringNullableListFilter<"Therapist">
    languages?: StringNullableListFilter<"Therapist">
    yearsExperience?: IntFilter<"Therapist"> | number
    createdAt?: DateTimeFilter<"Therapist"> | Date | string
    updatedAt?: DateTimeFilter<"Therapist"> | Date | string
  }, "id">

  export type TherapistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    credentials?: SortOrder
    specialties?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    pricePerSession?: SortOrder
    location?: SortOrder
    nextAvailable?: SortOrderInput | SortOrder
    avatar?: SortOrder
    acceptsInsurance?: SortOrder
    sessionTypes?: SortOrder
    languages?: SortOrder
    yearsExperience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TherapistCountOrderByAggregateInput
    _avg?: TherapistAvgOrderByAggregateInput
    _max?: TherapistMaxOrderByAggregateInput
    _min?: TherapistMinOrderByAggregateInput
    _sum?: TherapistSumOrderByAggregateInput
  }

  export type TherapistScalarWhereWithAggregatesInput = {
    AND?: TherapistScalarWhereWithAggregatesInput | TherapistScalarWhereWithAggregatesInput[]
    OR?: TherapistScalarWhereWithAggregatesInput[]
    NOT?: TherapistScalarWhereWithAggregatesInput | TherapistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Therapist"> | string
    name?: StringWithAggregatesFilter<"Therapist"> | string
    credentials?: StringWithAggregatesFilter<"Therapist"> | string
    specialties?: StringNullableListFilter<"Therapist">
    rating?: FloatWithAggregatesFilter<"Therapist"> | number
    reviewCount?: IntWithAggregatesFilter<"Therapist"> | number
    pricePerSession?: IntWithAggregatesFilter<"Therapist"> | number
    location?: StringWithAggregatesFilter<"Therapist"> | string
    nextAvailable?: StringNullableWithAggregatesFilter<"Therapist"> | string | null
    avatar?: StringWithAggregatesFilter<"Therapist"> | string
    acceptsInsurance?: BoolWithAggregatesFilter<"Therapist"> | boolean
    sessionTypes?: StringNullableListFilter<"Therapist">
    languages?: StringNullableListFilter<"Therapist">
    yearsExperience?: IntWithAggregatesFilter<"Therapist"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Therapist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Therapist"> | Date | string
  }

  export type TherapistCreateInput = {
    id?: string
    name: string
    credentials: string
    specialties?: TherapistCreatespecialtiesInput | string[]
    rating: number
    reviewCount: number
    pricePerSession: number
    location: string
    nextAvailable?: string | null
    avatar: string
    acceptsInsurance: boolean
    sessionTypes?: TherapistCreatesessionTypesInput | string[]
    languages?: TherapistCreatelanguagesInput | string[]
    yearsExperience: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TherapistUncheckedCreateInput = {
    id?: string
    name: string
    credentials: string
    specialties?: TherapistCreatespecialtiesInput | string[]
    rating: number
    reviewCount: number
    pricePerSession: number
    location: string
    nextAvailable?: string | null
    avatar: string
    acceptsInsurance: boolean
    sessionTypes?: TherapistCreatesessionTypesInput | string[]
    languages?: TherapistCreatelanguagesInput | string[]
    yearsExperience: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TherapistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credentials?: StringFieldUpdateOperationsInput | string
    specialties?: TherapistUpdatespecialtiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    pricePerSession?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    nextAvailable?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    acceptsInsurance?: BoolFieldUpdateOperationsInput | boolean
    sessionTypes?: TherapistUpdatesessionTypesInput | string[]
    languages?: TherapistUpdatelanguagesInput | string[]
    yearsExperience?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credentials?: StringFieldUpdateOperationsInput | string
    specialties?: TherapistUpdatespecialtiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    pricePerSession?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    nextAvailable?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    acceptsInsurance?: BoolFieldUpdateOperationsInput | boolean
    sessionTypes?: TherapistUpdatesessionTypesInput | string[]
    languages?: TherapistUpdatelanguagesInput | string[]
    yearsExperience?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistCreateManyInput = {
    id?: string
    name: string
    credentials: string
    specialties?: TherapistCreatespecialtiesInput | string[]
    rating: number
    reviewCount: number
    pricePerSession: number
    location: string
    nextAvailable?: string | null
    avatar: string
    acceptsInsurance: boolean
    sessionTypes?: TherapistCreatesessionTypesInput | string[]
    languages?: TherapistCreatelanguagesInput | string[]
    yearsExperience: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TherapistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credentials?: StringFieldUpdateOperationsInput | string
    specialties?: TherapistUpdatespecialtiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    pricePerSession?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    nextAvailable?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    acceptsInsurance?: BoolFieldUpdateOperationsInput | boolean
    sessionTypes?: TherapistUpdatesessionTypesInput | string[]
    languages?: TherapistUpdatelanguagesInput | string[]
    yearsExperience?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credentials?: StringFieldUpdateOperationsInput | string
    specialties?: TherapistUpdatespecialtiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    pricePerSession?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    nextAvailable?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: StringFieldUpdateOperationsInput | string
    acceptsInsurance?: BoolFieldUpdateOperationsInput | boolean
    sessionTypes?: TherapistUpdatesessionTypesInput | string[]
    languages?: TherapistUpdatelanguagesInput | string[]
    yearsExperience?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TherapistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    credentials?: SortOrder
    specialties?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    pricePerSession?: SortOrder
    location?: SortOrder
    nextAvailable?: SortOrder
    avatar?: SortOrder
    acceptsInsurance?: SortOrder
    sessionTypes?: SortOrder
    languages?: SortOrder
    yearsExperience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistAvgOrderByAggregateInput = {
    rating?: SortOrder
    reviewCount?: SortOrder
    pricePerSession?: SortOrder
    yearsExperience?: SortOrder
  }

  export type TherapistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    credentials?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    pricePerSession?: SortOrder
    location?: SortOrder
    nextAvailable?: SortOrder
    avatar?: SortOrder
    acceptsInsurance?: SortOrder
    yearsExperience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    credentials?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    pricePerSession?: SortOrder
    location?: SortOrder
    nextAvailable?: SortOrder
    avatar?: SortOrder
    acceptsInsurance?: SortOrder
    yearsExperience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistSumOrderByAggregateInput = {
    rating?: SortOrder
    reviewCount?: SortOrder
    pricePerSession?: SortOrder
    yearsExperience?: SortOrder
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

  export type TherapistCreatespecialtiesInput = {
    set: string[]
  }

  export type TherapistCreatesessionTypesInput = {
    set: string[]
  }

  export type TherapistCreatelanguagesInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TherapistUpdatespecialtiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TherapistUpdatesessionTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TherapistUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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