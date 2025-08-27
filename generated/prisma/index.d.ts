
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
 * Model AvailabilityRule
 * 
 */
export type AvailabilityRule = $Result.DefaultSelection<Prisma.$AvailabilityRulePayload>
/**
 * Model AvailabilityException
 * 
 */
export type AvailabilityException = $Result.DefaultSelection<Prisma.$AvailabilityExceptionPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AppointmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]

}

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

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

  /**
   * `prisma.availabilityRule`: Exposes CRUD operations for the **AvailabilityRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilityRules
    * const availabilityRules = await prisma.availabilityRule.findMany()
    * ```
    */
  get availabilityRule(): Prisma.AvailabilityRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availabilityException`: Exposes CRUD operations for the **AvailabilityException** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilityExceptions
    * const availabilityExceptions = await prisma.availabilityException.findMany()
    * ```
    */
  get availabilityException(): Prisma.AvailabilityExceptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
    Therapist: 'Therapist',
    AvailabilityRule: 'AvailabilityRule',
    AvailabilityException: 'AvailabilityException',
    Appointment: 'Appointment',
    User: 'User'
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
      modelProps: "therapist" | "availabilityRule" | "availabilityException" | "appointment" | "user"
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
      AvailabilityRule: {
        payload: Prisma.$AvailabilityRulePayload<ExtArgs>
        fields: Prisma.AvailabilityRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRulePayload>
          }
          findFirst: {
            args: Prisma.AvailabilityRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRulePayload>
          }
          findMany: {
            args: Prisma.AvailabilityRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRulePayload>[]
          }
          create: {
            args: Prisma.AvailabilityRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRulePayload>
          }
          createMany: {
            args: Prisma.AvailabilityRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRulePayload>[]
          }
          delete: {
            args: Prisma.AvailabilityRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRulePayload>
          }
          update: {
            args: Prisma.AvailabilityRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRulePayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRulePayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityRulePayload>
          }
          aggregate: {
            args: Prisma.AvailabilityRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilityRule>
          }
          groupBy: {
            args: Prisma.AvailabilityRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityRuleCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityRuleCountAggregateOutputType> | number
          }
        }
      }
      AvailabilityException: {
        payload: Prisma.$AvailabilityExceptionPayload<ExtArgs>
        fields: Prisma.AvailabilityExceptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityExceptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityExceptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityExceptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityExceptionPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityExceptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityExceptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityExceptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityExceptionPayload>
          }
          findMany: {
            args: Prisma.AvailabilityExceptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityExceptionPayload>[]
          }
          create: {
            args: Prisma.AvailabilityExceptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityExceptionPayload>
          }
          createMany: {
            args: Prisma.AvailabilityExceptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityExceptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityExceptionPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityExceptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityExceptionPayload>
          }
          update: {
            args: Prisma.AvailabilityExceptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityExceptionPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityExceptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityExceptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityExceptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityExceptionPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityExceptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityExceptionPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityExceptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilityException>
          }
          groupBy: {
            args: Prisma.AvailabilityExceptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityExceptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityExceptionCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityExceptionCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
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
    availabilityRule?: AvailabilityRuleOmit
    availabilityException?: AvailabilityExceptionOmit
    appointment?: AppointmentOmit
    user?: UserOmit
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
   * Count Type TherapistCountOutputType
   */

  export type TherapistCountOutputType = {
    availabilityRules: number
    availabilityExceptions: number
    appointments: number
  }

  export type TherapistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilityRules?: boolean | TherapistCountOutputTypeCountAvailabilityRulesArgs
    availabilityExceptions?: boolean | TherapistCountOutputTypeCountAvailabilityExceptionsArgs
    appointments?: boolean | TherapistCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapistCountOutputType
     */
    select?: TherapistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeCountAvailabilityRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityRuleWhereInput
  }

  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeCountAvailabilityExceptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityExceptionWhereInput
  }

  /**
   * TherapistCountOutputType without action
   */
  export type TherapistCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
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
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


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
    defaultDurationMinutes: number | null
  }

  export type TherapistSumAggregateOutputType = {
    rating: number | null
    reviewCount: number | null
    pricePerSession: number | null
    yearsExperience: number | null
    defaultDurationMinutes: number | null
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
    timezone: string | null
    defaultDurationMinutes: number | null
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
    timezone: string | null
    defaultDurationMinutes: number | null
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
    timezone: number
    defaultDurationMinutes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TherapistAvgAggregateInputType = {
    rating?: true
    reviewCount?: true
    pricePerSession?: true
    yearsExperience?: true
    defaultDurationMinutes?: true
  }

  export type TherapistSumAggregateInputType = {
    rating?: true
    reviewCount?: true
    pricePerSession?: true
    yearsExperience?: true
    defaultDurationMinutes?: true
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
    timezone?: true
    defaultDurationMinutes?: true
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
    timezone?: true
    defaultDurationMinutes?: true
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
    timezone?: true
    defaultDurationMinutes?: true
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
    timezone: string
    defaultDurationMinutes: number
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
    timezone?: boolean
    defaultDurationMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    availabilityRules?: boolean | Therapist$availabilityRulesArgs<ExtArgs>
    availabilityExceptions?: boolean | Therapist$availabilityExceptionsArgs<ExtArgs>
    appointments?: boolean | Therapist$appointmentsArgs<ExtArgs>
    _count?: boolean | TherapistCountOutputTypeDefaultArgs<ExtArgs>
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
    timezone?: boolean
    defaultDurationMinutes?: boolean
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
    timezone?: boolean
    defaultDurationMinutes?: boolean
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
    timezone?: boolean
    defaultDurationMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TherapistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "credentials" | "specialties" | "rating" | "reviewCount" | "pricePerSession" | "location" | "nextAvailable" | "avatar" | "acceptsInsurance" | "sessionTypes" | "languages" | "yearsExperience" | "timezone" | "defaultDurationMinutes" | "createdAt" | "updatedAt", ExtArgs["result"]["therapist"]>
  export type TherapistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilityRules?: boolean | Therapist$availabilityRulesArgs<ExtArgs>
    availabilityExceptions?: boolean | Therapist$availabilityExceptionsArgs<ExtArgs>
    appointments?: boolean | Therapist$appointmentsArgs<ExtArgs>
    _count?: boolean | TherapistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TherapistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TherapistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TherapistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Therapist"
    objects: {
      availabilityRules: Prisma.$AvailabilityRulePayload<ExtArgs>[]
      availabilityExceptions: Prisma.$AvailabilityExceptionPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
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
      timezone: string
      defaultDurationMinutes: number
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
    availabilityRules<T extends Therapist$availabilityRulesArgs<ExtArgs> = {}>(args?: Subset<T, Therapist$availabilityRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availabilityExceptions<T extends Therapist$availabilityExceptionsArgs<ExtArgs> = {}>(args?: Subset<T, Therapist$availabilityExceptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Therapist$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Therapist$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly timezone: FieldRef<"Therapist", 'String'>
    readonly defaultDurationMinutes: FieldRef<"Therapist", 'Int'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
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
   * Therapist.availabilityRules
   */
  export type Therapist$availabilityRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleInclude<ExtArgs> | null
    where?: AvailabilityRuleWhereInput
    orderBy?: AvailabilityRuleOrderByWithRelationInput | AvailabilityRuleOrderByWithRelationInput[]
    cursor?: AvailabilityRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityRuleScalarFieldEnum | AvailabilityRuleScalarFieldEnum[]
  }

  /**
   * Therapist.availabilityExceptions
   */
  export type Therapist$availabilityExceptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionInclude<ExtArgs> | null
    where?: AvailabilityExceptionWhereInput
    orderBy?: AvailabilityExceptionOrderByWithRelationInput | AvailabilityExceptionOrderByWithRelationInput[]
    cursor?: AvailabilityExceptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityExceptionScalarFieldEnum | AvailabilityExceptionScalarFieldEnum[]
  }

  /**
   * Therapist.appointments
   */
  export type Therapist$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapistInclude<ExtArgs> | null
  }


  /**
   * Model AvailabilityRule
   */

  export type AggregateAvailabilityRule = {
    _count: AvailabilityRuleCountAggregateOutputType | null
    _avg: AvailabilityRuleAvgAggregateOutputType | null
    _sum: AvailabilityRuleSumAggregateOutputType | null
    _min: AvailabilityRuleMinAggregateOutputType | null
    _max: AvailabilityRuleMaxAggregateOutputType | null
  }

  export type AvailabilityRuleAvgAggregateOutputType = {
    weekday: number | null
  }

  export type AvailabilityRuleSumAggregateOutputType = {
    weekday: number | null
  }

  export type AvailabilityRuleMinAggregateOutputType = {
    id: string | null
    therapistId: string | null
    sessionType: string | null
    weekday: number | null
    startTime: Date | null
    endTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityRuleMaxAggregateOutputType = {
    id: string | null
    therapistId: string | null
    sessionType: string | null
    weekday: number | null
    startTime: Date | null
    endTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityRuleCountAggregateOutputType = {
    id: number
    therapistId: number
    sessionType: number
    weekday: number
    startTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilityRuleAvgAggregateInputType = {
    weekday?: true
  }

  export type AvailabilityRuleSumAggregateInputType = {
    weekday?: true
  }

  export type AvailabilityRuleMinAggregateInputType = {
    id?: true
    therapistId?: true
    sessionType?: true
    weekday?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityRuleMaxAggregateInputType = {
    id?: true
    therapistId?: true
    sessionType?: true
    weekday?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityRuleCountAggregateInputType = {
    id?: true
    therapistId?: true
    sessionType?: true
    weekday?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilityRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityRule to aggregate.
     */
    where?: AvailabilityRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityRules to fetch.
     */
    orderBy?: AvailabilityRuleOrderByWithRelationInput | AvailabilityRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilityRules
    **/
    _count?: true | AvailabilityRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilityRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityRuleMaxAggregateInputType
  }

  export type GetAvailabilityRuleAggregateType<T extends AvailabilityRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilityRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilityRule[P]>
      : GetScalarType<T[P], AggregateAvailabilityRule[P]>
  }




  export type AvailabilityRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityRuleWhereInput
    orderBy?: AvailabilityRuleOrderByWithAggregationInput | AvailabilityRuleOrderByWithAggregationInput[]
    by: AvailabilityRuleScalarFieldEnum[] | AvailabilityRuleScalarFieldEnum
    having?: AvailabilityRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityRuleCountAggregateInputType | true
    _avg?: AvailabilityRuleAvgAggregateInputType
    _sum?: AvailabilityRuleSumAggregateInputType
    _min?: AvailabilityRuleMinAggregateInputType
    _max?: AvailabilityRuleMaxAggregateInputType
  }

  export type AvailabilityRuleGroupByOutputType = {
    id: string
    therapistId: string
    sessionType: string
    weekday: number
    startTime: Date
    endTime: Date
    createdAt: Date
    updatedAt: Date
    _count: AvailabilityRuleCountAggregateOutputType | null
    _avg: AvailabilityRuleAvgAggregateOutputType | null
    _sum: AvailabilityRuleSumAggregateOutputType | null
    _min: AvailabilityRuleMinAggregateOutputType | null
    _max: AvailabilityRuleMaxAggregateOutputType | null
  }

  type GetAvailabilityRuleGroupByPayload<T extends AvailabilityRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityRuleGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityRuleGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilityRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    sessionType?: boolean
    weekday?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityRule"]>

  export type AvailabilityRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    sessionType?: boolean
    weekday?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityRule"]>

  export type AvailabilityRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    sessionType?: boolean
    weekday?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityRule"]>

  export type AvailabilityRuleSelectScalar = {
    id?: boolean
    therapistId?: boolean
    sessionType?: boolean
    weekday?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvailabilityRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "therapistId" | "sessionType" | "weekday" | "startTime" | "endTime" | "createdAt" | "updatedAt", ExtArgs["result"]["availabilityRule"]>
  export type AvailabilityRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type AvailabilityRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type AvailabilityRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }

  export type $AvailabilityRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilityRule"
    objects: {
      therapist: Prisma.$TherapistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      therapistId: string
      sessionType: string
      weekday: number
      startTime: Date
      endTime: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["availabilityRule"]>
    composites: {}
  }

  type AvailabilityRuleGetPayload<S extends boolean | null | undefined | AvailabilityRuleDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityRulePayload, S>

  type AvailabilityRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityRuleCountAggregateInputType | true
    }

  export interface AvailabilityRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilityRule'], meta: { name: 'AvailabilityRule' } }
    /**
     * Find zero or one AvailabilityRule that matches the filter.
     * @param {AvailabilityRuleFindUniqueArgs} args - Arguments to find a AvailabilityRule
     * @example
     * // Get one AvailabilityRule
     * const availabilityRule = await prisma.availabilityRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityRuleFindUniqueArgs>(args: SelectSubset<T, AvailabilityRuleFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityRuleClient<$Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailabilityRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityRuleFindUniqueOrThrowArgs} args - Arguments to find a AvailabilityRule
     * @example
     * // Get one AvailabilityRule
     * const availabilityRule = await prisma.availabilityRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityRuleClient<$Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilityRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRuleFindFirstArgs} args - Arguments to find a AvailabilityRule
     * @example
     * // Get one AvailabilityRule
     * const availabilityRule = await prisma.availabilityRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityRuleFindFirstArgs>(args?: SelectSubset<T, AvailabilityRuleFindFirstArgs<ExtArgs>>): Prisma__AvailabilityRuleClient<$Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilityRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRuleFindFirstOrThrowArgs} args - Arguments to find a AvailabilityRule
     * @example
     * // Get one AvailabilityRule
     * const availabilityRule = await prisma.availabilityRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityRuleClient<$Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailabilityRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilityRules
     * const availabilityRules = await prisma.availabilityRule.findMany()
     * 
     * // Get first 10 AvailabilityRules
     * const availabilityRules = await prisma.availabilityRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityRuleWithIdOnly = await prisma.availabilityRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityRuleFindManyArgs>(args?: SelectSubset<T, AvailabilityRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailabilityRule.
     * @param {AvailabilityRuleCreateArgs} args - Arguments to create a AvailabilityRule.
     * @example
     * // Create one AvailabilityRule
     * const AvailabilityRule = await prisma.availabilityRule.create({
     *   data: {
     *     // ... data to create a AvailabilityRule
     *   }
     * })
     * 
     */
    create<T extends AvailabilityRuleCreateArgs>(args: SelectSubset<T, AvailabilityRuleCreateArgs<ExtArgs>>): Prisma__AvailabilityRuleClient<$Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailabilityRules.
     * @param {AvailabilityRuleCreateManyArgs} args - Arguments to create many AvailabilityRules.
     * @example
     * // Create many AvailabilityRules
     * const availabilityRule = await prisma.availabilityRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityRuleCreateManyArgs>(args?: SelectSubset<T, AvailabilityRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilityRules and returns the data saved in the database.
     * @param {AvailabilityRuleCreateManyAndReturnArgs} args - Arguments to create many AvailabilityRules.
     * @example
     * // Create many AvailabilityRules
     * const availabilityRule = await prisma.availabilityRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilityRules and only return the `id`
     * const availabilityRuleWithIdOnly = await prisma.availabilityRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailabilityRule.
     * @param {AvailabilityRuleDeleteArgs} args - Arguments to delete one AvailabilityRule.
     * @example
     * // Delete one AvailabilityRule
     * const AvailabilityRule = await prisma.availabilityRule.delete({
     *   where: {
     *     // ... filter to delete one AvailabilityRule
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityRuleDeleteArgs>(args: SelectSubset<T, AvailabilityRuleDeleteArgs<ExtArgs>>): Prisma__AvailabilityRuleClient<$Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailabilityRule.
     * @param {AvailabilityRuleUpdateArgs} args - Arguments to update one AvailabilityRule.
     * @example
     * // Update one AvailabilityRule
     * const availabilityRule = await prisma.availabilityRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityRuleUpdateArgs>(args: SelectSubset<T, AvailabilityRuleUpdateArgs<ExtArgs>>): Prisma__AvailabilityRuleClient<$Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailabilityRules.
     * @param {AvailabilityRuleDeleteManyArgs} args - Arguments to filter AvailabilityRules to delete.
     * @example
     * // Delete a few AvailabilityRules
     * const { count } = await prisma.availabilityRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityRuleDeleteManyArgs>(args?: SelectSubset<T, AvailabilityRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilityRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilityRules
     * const availabilityRule = await prisma.availabilityRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityRuleUpdateManyArgs>(args: SelectSubset<T, AvailabilityRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilityRules and returns the data updated in the database.
     * @param {AvailabilityRuleUpdateManyAndReturnArgs} args - Arguments to update many AvailabilityRules.
     * @example
     * // Update many AvailabilityRules
     * const availabilityRule = await prisma.availabilityRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailabilityRules and only return the `id`
     * const availabilityRuleWithIdOnly = await prisma.availabilityRule.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailabilityRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailabilityRule.
     * @param {AvailabilityRuleUpsertArgs} args - Arguments to update or create a AvailabilityRule.
     * @example
     * // Update or create a AvailabilityRule
     * const availabilityRule = await prisma.availabilityRule.upsert({
     *   create: {
     *     // ... data to create a AvailabilityRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilityRule we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityRuleUpsertArgs>(args: SelectSubset<T, AvailabilityRuleUpsertArgs<ExtArgs>>): Prisma__AvailabilityRuleClient<$Result.GetResult<Prisma.$AvailabilityRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailabilityRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRuleCountArgs} args - Arguments to filter AvailabilityRules to count.
     * @example
     * // Count the number of AvailabilityRules
     * const count = await prisma.availabilityRule.count({
     *   where: {
     *     // ... the filter for the AvailabilityRules we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityRuleCountArgs>(
      args?: Subset<T, AvailabilityRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilityRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityRuleAggregateArgs>(args: Subset<T, AvailabilityRuleAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityRuleAggregateType<T>>

    /**
     * Group by AvailabilityRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityRuleGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityRuleGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilityRule model
   */
  readonly fields: AvailabilityRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilityRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapist<T extends TherapistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapistDefaultArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AvailabilityRule model
   */
  interface AvailabilityRuleFieldRefs {
    readonly id: FieldRef<"AvailabilityRule", 'String'>
    readonly therapistId: FieldRef<"AvailabilityRule", 'String'>
    readonly sessionType: FieldRef<"AvailabilityRule", 'String'>
    readonly weekday: FieldRef<"AvailabilityRule", 'Int'>
    readonly startTime: FieldRef<"AvailabilityRule", 'DateTime'>
    readonly endTime: FieldRef<"AvailabilityRule", 'DateTime'>
    readonly createdAt: FieldRef<"AvailabilityRule", 'DateTime'>
    readonly updatedAt: FieldRef<"AvailabilityRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilityRule findUnique
   */
  export type AvailabilityRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityRule to fetch.
     */
    where: AvailabilityRuleWhereUniqueInput
  }

  /**
   * AvailabilityRule findUniqueOrThrow
   */
  export type AvailabilityRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityRule to fetch.
     */
    where: AvailabilityRuleWhereUniqueInput
  }

  /**
   * AvailabilityRule findFirst
   */
  export type AvailabilityRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityRule to fetch.
     */
    where?: AvailabilityRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityRules to fetch.
     */
    orderBy?: AvailabilityRuleOrderByWithRelationInput | AvailabilityRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityRules.
     */
    cursor?: AvailabilityRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityRules.
     */
    distinct?: AvailabilityRuleScalarFieldEnum | AvailabilityRuleScalarFieldEnum[]
  }

  /**
   * AvailabilityRule findFirstOrThrow
   */
  export type AvailabilityRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityRule to fetch.
     */
    where?: AvailabilityRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityRules to fetch.
     */
    orderBy?: AvailabilityRuleOrderByWithRelationInput | AvailabilityRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityRules.
     */
    cursor?: AvailabilityRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityRules.
     */
    distinct?: AvailabilityRuleScalarFieldEnum | AvailabilityRuleScalarFieldEnum[]
  }

  /**
   * AvailabilityRule findMany
   */
  export type AvailabilityRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityRules to fetch.
     */
    where?: AvailabilityRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityRules to fetch.
     */
    orderBy?: AvailabilityRuleOrderByWithRelationInput | AvailabilityRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilityRules.
     */
    cursor?: AvailabilityRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityRules.
     */
    skip?: number
    distinct?: AvailabilityRuleScalarFieldEnum | AvailabilityRuleScalarFieldEnum[]
  }

  /**
   * AvailabilityRule create
   */
  export type AvailabilityRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilityRule.
     */
    data: XOR<AvailabilityRuleCreateInput, AvailabilityRuleUncheckedCreateInput>
  }

  /**
   * AvailabilityRule createMany
   */
  export type AvailabilityRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilityRules.
     */
    data: AvailabilityRuleCreateManyInput | AvailabilityRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilityRule createManyAndReturn
   */
  export type AvailabilityRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * The data used to create many AvailabilityRules.
     */
    data: AvailabilityRuleCreateManyInput | AvailabilityRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilityRule update
   */
  export type AvailabilityRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilityRule.
     */
    data: XOR<AvailabilityRuleUpdateInput, AvailabilityRuleUncheckedUpdateInput>
    /**
     * Choose, which AvailabilityRule to update.
     */
    where: AvailabilityRuleWhereUniqueInput
  }

  /**
   * AvailabilityRule updateMany
   */
  export type AvailabilityRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilityRules.
     */
    data: XOR<AvailabilityRuleUpdateManyMutationInput, AvailabilityRuleUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilityRules to update
     */
    where?: AvailabilityRuleWhereInput
    /**
     * Limit how many AvailabilityRules to update.
     */
    limit?: number
  }

  /**
   * AvailabilityRule updateManyAndReturn
   */
  export type AvailabilityRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * The data used to update AvailabilityRules.
     */
    data: XOR<AvailabilityRuleUpdateManyMutationInput, AvailabilityRuleUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilityRules to update
     */
    where?: AvailabilityRuleWhereInput
    /**
     * Limit how many AvailabilityRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilityRule upsert
   */
  export type AvailabilityRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilityRule to update in case it exists.
     */
    where: AvailabilityRuleWhereUniqueInput
    /**
     * In case the AvailabilityRule found by the `where` argument doesn't exist, create a new AvailabilityRule with this data.
     */
    create: XOR<AvailabilityRuleCreateInput, AvailabilityRuleUncheckedCreateInput>
    /**
     * In case the AvailabilityRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityRuleUpdateInput, AvailabilityRuleUncheckedUpdateInput>
  }

  /**
   * AvailabilityRule delete
   */
  export type AvailabilityRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleInclude<ExtArgs> | null
    /**
     * Filter which AvailabilityRule to delete.
     */
    where: AvailabilityRuleWhereUniqueInput
  }

  /**
   * AvailabilityRule deleteMany
   */
  export type AvailabilityRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityRules to delete
     */
    where?: AvailabilityRuleWhereInput
    /**
     * Limit how many AvailabilityRules to delete.
     */
    limit?: number
  }

  /**
   * AvailabilityRule without action
   */
  export type AvailabilityRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityRule
     */
    select?: AvailabilityRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityRule
     */
    omit?: AvailabilityRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityRuleInclude<ExtArgs> | null
  }


  /**
   * Model AvailabilityException
   */

  export type AggregateAvailabilityException = {
    _count: AvailabilityExceptionCountAggregateOutputType | null
    _min: AvailabilityExceptionMinAggregateOutputType | null
    _max: AvailabilityExceptionMaxAggregateOutputType | null
  }

  export type AvailabilityExceptionMinAggregateOutputType = {
    id: string | null
    therapistId: string | null
    sessionType: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    isBlocked: boolean | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityExceptionMaxAggregateOutputType = {
    id: string | null
    therapistId: string | null
    sessionType: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    isBlocked: boolean | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityExceptionCountAggregateOutputType = {
    id: number
    therapistId: number
    sessionType: number
    date: number
    startTime: number
    endTime: number
    isBlocked: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilityExceptionMinAggregateInputType = {
    id?: true
    therapistId?: true
    sessionType?: true
    date?: true
    startTime?: true
    endTime?: true
    isBlocked?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityExceptionMaxAggregateInputType = {
    id?: true
    therapistId?: true
    sessionType?: true
    date?: true
    startTime?: true
    endTime?: true
    isBlocked?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityExceptionCountAggregateInputType = {
    id?: true
    therapistId?: true
    sessionType?: true
    date?: true
    startTime?: true
    endTime?: true
    isBlocked?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilityExceptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityException to aggregate.
     */
    where?: AvailabilityExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityExceptions to fetch.
     */
    orderBy?: AvailabilityExceptionOrderByWithRelationInput | AvailabilityExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityExceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityExceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilityExceptions
    **/
    _count?: true | AvailabilityExceptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityExceptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityExceptionMaxAggregateInputType
  }

  export type GetAvailabilityExceptionAggregateType<T extends AvailabilityExceptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilityException]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilityException[P]>
      : GetScalarType<T[P], AggregateAvailabilityException[P]>
  }




  export type AvailabilityExceptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityExceptionWhereInput
    orderBy?: AvailabilityExceptionOrderByWithAggregationInput | AvailabilityExceptionOrderByWithAggregationInput[]
    by: AvailabilityExceptionScalarFieldEnum[] | AvailabilityExceptionScalarFieldEnum
    having?: AvailabilityExceptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityExceptionCountAggregateInputType | true
    _min?: AvailabilityExceptionMinAggregateInputType
    _max?: AvailabilityExceptionMaxAggregateInputType
  }

  export type AvailabilityExceptionGroupByOutputType = {
    id: string
    therapistId: string
    sessionType: string
    date: Date
    startTime: Date | null
    endTime: Date | null
    isBlocked: boolean
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: AvailabilityExceptionCountAggregateOutputType | null
    _min: AvailabilityExceptionMinAggregateOutputType | null
    _max: AvailabilityExceptionMaxAggregateOutputType | null
  }

  type GetAvailabilityExceptionGroupByPayload<T extends AvailabilityExceptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityExceptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityExceptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityExceptionGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityExceptionGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilityExceptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    sessionType?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    isBlocked?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityException"]>

  export type AvailabilityExceptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    sessionType?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    isBlocked?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityException"]>

  export type AvailabilityExceptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    sessionType?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    isBlocked?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilityException"]>

  export type AvailabilityExceptionSelectScalar = {
    id?: boolean
    therapistId?: boolean
    sessionType?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    isBlocked?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvailabilityExceptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "therapistId" | "sessionType" | "date" | "startTime" | "endTime" | "isBlocked" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["availabilityException"]>
  export type AvailabilityExceptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type AvailabilityExceptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }
  export type AvailabilityExceptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
  }

  export type $AvailabilityExceptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilityException"
    objects: {
      therapist: Prisma.$TherapistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      therapistId: string
      sessionType: string
      date: Date
      startTime: Date | null
      endTime: Date | null
      isBlocked: boolean
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["availabilityException"]>
    composites: {}
  }

  type AvailabilityExceptionGetPayload<S extends boolean | null | undefined | AvailabilityExceptionDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityExceptionPayload, S>

  type AvailabilityExceptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityExceptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityExceptionCountAggregateInputType | true
    }

  export interface AvailabilityExceptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilityException'], meta: { name: 'AvailabilityException' } }
    /**
     * Find zero or one AvailabilityException that matches the filter.
     * @param {AvailabilityExceptionFindUniqueArgs} args - Arguments to find a AvailabilityException
     * @example
     * // Get one AvailabilityException
     * const availabilityException = await prisma.availabilityException.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityExceptionFindUniqueArgs>(args: SelectSubset<T, AvailabilityExceptionFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityExceptionClient<$Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailabilityException that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityExceptionFindUniqueOrThrowArgs} args - Arguments to find a AvailabilityException
     * @example
     * // Get one AvailabilityException
     * const availabilityException = await prisma.availabilityException.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityExceptionFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityExceptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityExceptionClient<$Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilityException that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityExceptionFindFirstArgs} args - Arguments to find a AvailabilityException
     * @example
     * // Get one AvailabilityException
     * const availabilityException = await prisma.availabilityException.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityExceptionFindFirstArgs>(args?: SelectSubset<T, AvailabilityExceptionFindFirstArgs<ExtArgs>>): Prisma__AvailabilityExceptionClient<$Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilityException that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityExceptionFindFirstOrThrowArgs} args - Arguments to find a AvailabilityException
     * @example
     * // Get one AvailabilityException
     * const availabilityException = await prisma.availabilityException.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityExceptionFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityExceptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityExceptionClient<$Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailabilityExceptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityExceptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilityExceptions
     * const availabilityExceptions = await prisma.availabilityException.findMany()
     * 
     * // Get first 10 AvailabilityExceptions
     * const availabilityExceptions = await prisma.availabilityException.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityExceptionWithIdOnly = await prisma.availabilityException.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityExceptionFindManyArgs>(args?: SelectSubset<T, AvailabilityExceptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailabilityException.
     * @param {AvailabilityExceptionCreateArgs} args - Arguments to create a AvailabilityException.
     * @example
     * // Create one AvailabilityException
     * const AvailabilityException = await prisma.availabilityException.create({
     *   data: {
     *     // ... data to create a AvailabilityException
     *   }
     * })
     * 
     */
    create<T extends AvailabilityExceptionCreateArgs>(args: SelectSubset<T, AvailabilityExceptionCreateArgs<ExtArgs>>): Prisma__AvailabilityExceptionClient<$Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailabilityExceptions.
     * @param {AvailabilityExceptionCreateManyArgs} args - Arguments to create many AvailabilityExceptions.
     * @example
     * // Create many AvailabilityExceptions
     * const availabilityException = await prisma.availabilityException.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityExceptionCreateManyArgs>(args?: SelectSubset<T, AvailabilityExceptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilityExceptions and returns the data saved in the database.
     * @param {AvailabilityExceptionCreateManyAndReturnArgs} args - Arguments to create many AvailabilityExceptions.
     * @example
     * // Create many AvailabilityExceptions
     * const availabilityException = await prisma.availabilityException.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilityExceptions and only return the `id`
     * const availabilityExceptionWithIdOnly = await prisma.availabilityException.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityExceptionCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityExceptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailabilityException.
     * @param {AvailabilityExceptionDeleteArgs} args - Arguments to delete one AvailabilityException.
     * @example
     * // Delete one AvailabilityException
     * const AvailabilityException = await prisma.availabilityException.delete({
     *   where: {
     *     // ... filter to delete one AvailabilityException
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityExceptionDeleteArgs>(args: SelectSubset<T, AvailabilityExceptionDeleteArgs<ExtArgs>>): Prisma__AvailabilityExceptionClient<$Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailabilityException.
     * @param {AvailabilityExceptionUpdateArgs} args - Arguments to update one AvailabilityException.
     * @example
     * // Update one AvailabilityException
     * const availabilityException = await prisma.availabilityException.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityExceptionUpdateArgs>(args: SelectSubset<T, AvailabilityExceptionUpdateArgs<ExtArgs>>): Prisma__AvailabilityExceptionClient<$Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailabilityExceptions.
     * @param {AvailabilityExceptionDeleteManyArgs} args - Arguments to filter AvailabilityExceptions to delete.
     * @example
     * // Delete a few AvailabilityExceptions
     * const { count } = await prisma.availabilityException.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityExceptionDeleteManyArgs>(args?: SelectSubset<T, AvailabilityExceptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilityExceptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityExceptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilityExceptions
     * const availabilityException = await prisma.availabilityException.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityExceptionUpdateManyArgs>(args: SelectSubset<T, AvailabilityExceptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilityExceptions and returns the data updated in the database.
     * @param {AvailabilityExceptionUpdateManyAndReturnArgs} args - Arguments to update many AvailabilityExceptions.
     * @example
     * // Update many AvailabilityExceptions
     * const availabilityException = await prisma.availabilityException.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailabilityExceptions and only return the `id`
     * const availabilityExceptionWithIdOnly = await prisma.availabilityException.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailabilityExceptionUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityExceptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailabilityException.
     * @param {AvailabilityExceptionUpsertArgs} args - Arguments to update or create a AvailabilityException.
     * @example
     * // Update or create a AvailabilityException
     * const availabilityException = await prisma.availabilityException.upsert({
     *   create: {
     *     // ... data to create a AvailabilityException
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilityException we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityExceptionUpsertArgs>(args: SelectSubset<T, AvailabilityExceptionUpsertArgs<ExtArgs>>): Prisma__AvailabilityExceptionClient<$Result.GetResult<Prisma.$AvailabilityExceptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailabilityExceptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityExceptionCountArgs} args - Arguments to filter AvailabilityExceptions to count.
     * @example
     * // Count the number of AvailabilityExceptions
     * const count = await prisma.availabilityException.count({
     *   where: {
     *     // ... the filter for the AvailabilityExceptions we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityExceptionCountArgs>(
      args?: Subset<T, AvailabilityExceptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityExceptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilityException.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityExceptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityExceptionAggregateArgs>(args: Subset<T, AvailabilityExceptionAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityExceptionAggregateType<T>>

    /**
     * Group by AvailabilityException.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityExceptionGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityExceptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityExceptionGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityExceptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityExceptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityExceptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilityException model
   */
  readonly fields: AvailabilityExceptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilityException.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityExceptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapist<T extends TherapistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapistDefaultArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AvailabilityException model
   */
  interface AvailabilityExceptionFieldRefs {
    readonly id: FieldRef<"AvailabilityException", 'String'>
    readonly therapistId: FieldRef<"AvailabilityException", 'String'>
    readonly sessionType: FieldRef<"AvailabilityException", 'String'>
    readonly date: FieldRef<"AvailabilityException", 'DateTime'>
    readonly startTime: FieldRef<"AvailabilityException", 'DateTime'>
    readonly endTime: FieldRef<"AvailabilityException", 'DateTime'>
    readonly isBlocked: FieldRef<"AvailabilityException", 'Boolean'>
    readonly notes: FieldRef<"AvailabilityException", 'String'>
    readonly createdAt: FieldRef<"AvailabilityException", 'DateTime'>
    readonly updatedAt: FieldRef<"AvailabilityException", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilityException findUnique
   */
  export type AvailabilityExceptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityException to fetch.
     */
    where: AvailabilityExceptionWhereUniqueInput
  }

  /**
   * AvailabilityException findUniqueOrThrow
   */
  export type AvailabilityExceptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityException to fetch.
     */
    where: AvailabilityExceptionWhereUniqueInput
  }

  /**
   * AvailabilityException findFirst
   */
  export type AvailabilityExceptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityException to fetch.
     */
    where?: AvailabilityExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityExceptions to fetch.
     */
    orderBy?: AvailabilityExceptionOrderByWithRelationInput | AvailabilityExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityExceptions.
     */
    cursor?: AvailabilityExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityExceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityExceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityExceptions.
     */
    distinct?: AvailabilityExceptionScalarFieldEnum | AvailabilityExceptionScalarFieldEnum[]
  }

  /**
   * AvailabilityException findFirstOrThrow
   */
  export type AvailabilityExceptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityException to fetch.
     */
    where?: AvailabilityExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityExceptions to fetch.
     */
    orderBy?: AvailabilityExceptionOrderByWithRelationInput | AvailabilityExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilityExceptions.
     */
    cursor?: AvailabilityExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityExceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityExceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilityExceptions.
     */
    distinct?: AvailabilityExceptionScalarFieldEnum | AvailabilityExceptionScalarFieldEnum[]
  }

  /**
   * AvailabilityException findMany
   */
  export type AvailabilityExceptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilityExceptions to fetch.
     */
    where?: AvailabilityExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilityExceptions to fetch.
     */
    orderBy?: AvailabilityExceptionOrderByWithRelationInput | AvailabilityExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilityExceptions.
     */
    cursor?: AvailabilityExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilityExceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilityExceptions.
     */
    skip?: number
    distinct?: AvailabilityExceptionScalarFieldEnum | AvailabilityExceptionScalarFieldEnum[]
  }

  /**
   * AvailabilityException create
   */
  export type AvailabilityExceptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilityException.
     */
    data: XOR<AvailabilityExceptionCreateInput, AvailabilityExceptionUncheckedCreateInput>
  }

  /**
   * AvailabilityException createMany
   */
  export type AvailabilityExceptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilityExceptions.
     */
    data: AvailabilityExceptionCreateManyInput | AvailabilityExceptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilityException createManyAndReturn
   */
  export type AvailabilityExceptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * The data used to create many AvailabilityExceptions.
     */
    data: AvailabilityExceptionCreateManyInput | AvailabilityExceptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilityException update
   */
  export type AvailabilityExceptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilityException.
     */
    data: XOR<AvailabilityExceptionUpdateInput, AvailabilityExceptionUncheckedUpdateInput>
    /**
     * Choose, which AvailabilityException to update.
     */
    where: AvailabilityExceptionWhereUniqueInput
  }

  /**
   * AvailabilityException updateMany
   */
  export type AvailabilityExceptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilityExceptions.
     */
    data: XOR<AvailabilityExceptionUpdateManyMutationInput, AvailabilityExceptionUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilityExceptions to update
     */
    where?: AvailabilityExceptionWhereInput
    /**
     * Limit how many AvailabilityExceptions to update.
     */
    limit?: number
  }

  /**
   * AvailabilityException updateManyAndReturn
   */
  export type AvailabilityExceptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * The data used to update AvailabilityExceptions.
     */
    data: XOR<AvailabilityExceptionUpdateManyMutationInput, AvailabilityExceptionUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilityExceptions to update
     */
    where?: AvailabilityExceptionWhereInput
    /**
     * Limit how many AvailabilityExceptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilityException upsert
   */
  export type AvailabilityExceptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilityException to update in case it exists.
     */
    where: AvailabilityExceptionWhereUniqueInput
    /**
     * In case the AvailabilityException found by the `where` argument doesn't exist, create a new AvailabilityException with this data.
     */
    create: XOR<AvailabilityExceptionCreateInput, AvailabilityExceptionUncheckedCreateInput>
    /**
     * In case the AvailabilityException was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityExceptionUpdateInput, AvailabilityExceptionUncheckedUpdateInput>
  }

  /**
   * AvailabilityException delete
   */
  export type AvailabilityExceptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionInclude<ExtArgs> | null
    /**
     * Filter which AvailabilityException to delete.
     */
    where: AvailabilityExceptionWhereUniqueInput
  }

  /**
   * AvailabilityException deleteMany
   */
  export type AvailabilityExceptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilityExceptions to delete
     */
    where?: AvailabilityExceptionWhereInput
    /**
     * Limit how many AvailabilityExceptions to delete.
     */
    limit?: number
  }

  /**
   * AvailabilityException without action
   */
  export type AvailabilityExceptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityException
     */
    select?: AvailabilityExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityException
     */
    omit?: AvailabilityExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityExceptionInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    price: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    price: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    therapistId: string | null
    sessionType: string | null
    userId: string | null
    startTs: Date | null
    endTs: Date | null
    status: $Enums.AppointmentStatus | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    therapistId: string | null
    sessionType: string | null
    userId: string | null
    startTs: Date | null
    endTs: Date | null
    status: $Enums.AppointmentStatus | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    therapistId: number
    sessionType: number
    userId: number
    startTs: number
    endTs: number
    status: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    price?: true
  }

  export type AppointmentSumAggregateInputType = {
    price?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    therapistId?: true
    sessionType?: true
    userId?: true
    startTs?: true
    endTs?: true
    status?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    therapistId?: true
    sessionType?: true
    userId?: true
    startTs?: true
    endTs?: true
    status?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    therapistId?: true
    sessionType?: true
    userId?: true
    startTs?: true
    endTs?: true
    status?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    therapistId: string
    sessionType: string
    userId: string
    startTs: Date
    endTs: Date
    status: $Enums.AppointmentStatus
    price: number
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    sessionType?: boolean
    userId?: boolean
    startTs?: boolean
    endTs?: boolean
    status?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    sessionType?: boolean
    userId?: boolean
    startTs?: boolean
    endTs?: boolean
    status?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    therapistId?: boolean
    sessionType?: boolean
    userId?: boolean
    startTs?: boolean
    endTs?: boolean
    status?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    therapistId?: boolean
    sessionType?: boolean
    userId?: boolean
    startTs?: boolean
    endTs?: boolean
    status?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "therapistId" | "sessionType" | "userId" | "startTs" | "endTs" | "status" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapist?: boolean | TherapistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      therapist: Prisma.$TherapistPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      therapistId: string
      sessionType: string
      userId: string
      startTs: Date
      endTs: Date
      status: $Enums.AppointmentStatus
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapist<T extends TherapistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapistDefaultArgs<ExtArgs>>): Prisma__TherapistClient<$Result.GetResult<Prisma.$TherapistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly therapistId: FieldRef<"Appointment", 'String'>
    readonly sessionType: FieldRef<"Appointment", 'String'>
    readonly userId: FieldRef<"Appointment", 'String'>
    readonly startTs: FieldRef<"Appointment", 'DateTime'>
    readonly endTs: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly price: FieldRef<"Appointment", 'Float'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


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
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    location: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    location: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    location: number
    timezone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    location?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    location?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    location?: true
    timezone?: true
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
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    timezone: string
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
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "location" | "timezone" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phone: string
      location: string
      timezone: string
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
    appointments<T extends User$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly timezone: FieldRef<"User", 'String'>
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
   * User.appointments
   */
  export type User$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
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
    timezone: 'timezone',
    defaultDurationMinutes: 'defaultDurationMinutes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TherapistScalarFieldEnum = (typeof TherapistScalarFieldEnum)[keyof typeof TherapistScalarFieldEnum]


  export const AvailabilityRuleScalarFieldEnum: {
    id: 'id',
    therapistId: 'therapistId',
    sessionType: 'sessionType',
    weekday: 'weekday',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvailabilityRuleScalarFieldEnum = (typeof AvailabilityRuleScalarFieldEnum)[keyof typeof AvailabilityRuleScalarFieldEnum]


  export const AvailabilityExceptionScalarFieldEnum: {
    id: 'id',
    therapistId: 'therapistId',
    sessionType: 'sessionType',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    isBlocked: 'isBlocked',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvailabilityExceptionScalarFieldEnum = (typeof AvailabilityExceptionScalarFieldEnum)[keyof typeof AvailabilityExceptionScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    therapistId: 'therapistId',
    sessionType: 'sessionType',
    userId: 'userId',
    startTs: 'startTs',
    endTs: 'endTs',
    status: 'status',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    location: 'location',
    timezone: 'timezone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    
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
    timezone?: StringFilter<"Therapist"> | string
    defaultDurationMinutes?: IntFilter<"Therapist"> | number
    createdAt?: DateTimeFilter<"Therapist"> | Date | string
    updatedAt?: DateTimeFilter<"Therapist"> | Date | string
    availabilityRules?: AvailabilityRuleListRelationFilter
    availabilityExceptions?: AvailabilityExceptionListRelationFilter
    appointments?: AppointmentListRelationFilter
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
    timezone?: SortOrder
    defaultDurationMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availabilityRules?: AvailabilityRuleOrderByRelationAggregateInput
    availabilityExceptions?: AvailabilityExceptionOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
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
    timezone?: StringFilter<"Therapist"> | string
    defaultDurationMinutes?: IntFilter<"Therapist"> | number
    createdAt?: DateTimeFilter<"Therapist"> | Date | string
    updatedAt?: DateTimeFilter<"Therapist"> | Date | string
    availabilityRules?: AvailabilityRuleListRelationFilter
    availabilityExceptions?: AvailabilityExceptionListRelationFilter
    appointments?: AppointmentListRelationFilter
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
    timezone?: SortOrder
    defaultDurationMinutes?: SortOrder
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
    timezone?: StringWithAggregatesFilter<"Therapist"> | string
    defaultDurationMinutes?: IntWithAggregatesFilter<"Therapist"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Therapist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Therapist"> | Date | string
  }

  export type AvailabilityRuleWhereInput = {
    AND?: AvailabilityRuleWhereInput | AvailabilityRuleWhereInput[]
    OR?: AvailabilityRuleWhereInput[]
    NOT?: AvailabilityRuleWhereInput | AvailabilityRuleWhereInput[]
    id?: StringFilter<"AvailabilityRule"> | string
    therapistId?: StringFilter<"AvailabilityRule"> | string
    sessionType?: StringFilter<"AvailabilityRule"> | string
    weekday?: IntFilter<"AvailabilityRule"> | number
    startTime?: DateTimeFilter<"AvailabilityRule"> | Date | string
    endTime?: DateTimeFilter<"AvailabilityRule"> | Date | string
    createdAt?: DateTimeFilter<"AvailabilityRule"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityRule"> | Date | string
    therapist?: XOR<TherapistScalarRelationFilter, TherapistWhereInput>
  }

  export type AvailabilityRuleOrderByWithRelationInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapist?: TherapistOrderByWithRelationInput
  }

  export type AvailabilityRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilityRuleWhereInput | AvailabilityRuleWhereInput[]
    OR?: AvailabilityRuleWhereInput[]
    NOT?: AvailabilityRuleWhereInput | AvailabilityRuleWhereInput[]
    therapistId?: StringFilter<"AvailabilityRule"> | string
    sessionType?: StringFilter<"AvailabilityRule"> | string
    weekday?: IntFilter<"AvailabilityRule"> | number
    startTime?: DateTimeFilter<"AvailabilityRule"> | Date | string
    endTime?: DateTimeFilter<"AvailabilityRule"> | Date | string
    createdAt?: DateTimeFilter<"AvailabilityRule"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityRule"> | Date | string
    therapist?: XOR<TherapistScalarRelationFilter, TherapistWhereInput>
  }, "id">

  export type AvailabilityRuleOrderByWithAggregationInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvailabilityRuleCountOrderByAggregateInput
    _avg?: AvailabilityRuleAvgOrderByAggregateInput
    _max?: AvailabilityRuleMaxOrderByAggregateInput
    _min?: AvailabilityRuleMinOrderByAggregateInput
    _sum?: AvailabilityRuleSumOrderByAggregateInput
  }

  export type AvailabilityRuleScalarWhereWithAggregatesInput = {
    AND?: AvailabilityRuleScalarWhereWithAggregatesInput | AvailabilityRuleScalarWhereWithAggregatesInput[]
    OR?: AvailabilityRuleScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityRuleScalarWhereWithAggregatesInput | AvailabilityRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailabilityRule"> | string
    therapistId?: StringWithAggregatesFilter<"AvailabilityRule"> | string
    sessionType?: StringWithAggregatesFilter<"AvailabilityRule"> | string
    weekday?: IntWithAggregatesFilter<"AvailabilityRule"> | number
    startTime?: DateTimeWithAggregatesFilter<"AvailabilityRule"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"AvailabilityRule"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"AvailabilityRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AvailabilityRule"> | Date | string
  }

  export type AvailabilityExceptionWhereInput = {
    AND?: AvailabilityExceptionWhereInput | AvailabilityExceptionWhereInput[]
    OR?: AvailabilityExceptionWhereInput[]
    NOT?: AvailabilityExceptionWhereInput | AvailabilityExceptionWhereInput[]
    id?: StringFilter<"AvailabilityException"> | string
    therapistId?: StringFilter<"AvailabilityException"> | string
    sessionType?: StringFilter<"AvailabilityException"> | string
    date?: DateTimeFilter<"AvailabilityException"> | Date | string
    startTime?: DateTimeNullableFilter<"AvailabilityException"> | Date | string | null
    endTime?: DateTimeNullableFilter<"AvailabilityException"> | Date | string | null
    isBlocked?: BoolFilter<"AvailabilityException"> | boolean
    notes?: StringNullableFilter<"AvailabilityException"> | string | null
    createdAt?: DateTimeFilter<"AvailabilityException"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityException"> | Date | string
    therapist?: XOR<TherapistScalarRelationFilter, TherapistWhereInput>
  }

  export type AvailabilityExceptionOrderByWithRelationInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    date?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    isBlocked?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapist?: TherapistOrderByWithRelationInput
  }

  export type AvailabilityExceptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilityExceptionWhereInput | AvailabilityExceptionWhereInput[]
    OR?: AvailabilityExceptionWhereInput[]
    NOT?: AvailabilityExceptionWhereInput | AvailabilityExceptionWhereInput[]
    therapistId?: StringFilter<"AvailabilityException"> | string
    sessionType?: StringFilter<"AvailabilityException"> | string
    date?: DateTimeFilter<"AvailabilityException"> | Date | string
    startTime?: DateTimeNullableFilter<"AvailabilityException"> | Date | string | null
    endTime?: DateTimeNullableFilter<"AvailabilityException"> | Date | string | null
    isBlocked?: BoolFilter<"AvailabilityException"> | boolean
    notes?: StringNullableFilter<"AvailabilityException"> | string | null
    createdAt?: DateTimeFilter<"AvailabilityException"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityException"> | Date | string
    therapist?: XOR<TherapistScalarRelationFilter, TherapistWhereInput>
  }, "id">

  export type AvailabilityExceptionOrderByWithAggregationInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    date?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    isBlocked?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvailabilityExceptionCountOrderByAggregateInput
    _max?: AvailabilityExceptionMaxOrderByAggregateInput
    _min?: AvailabilityExceptionMinOrderByAggregateInput
  }

  export type AvailabilityExceptionScalarWhereWithAggregatesInput = {
    AND?: AvailabilityExceptionScalarWhereWithAggregatesInput | AvailabilityExceptionScalarWhereWithAggregatesInput[]
    OR?: AvailabilityExceptionScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityExceptionScalarWhereWithAggregatesInput | AvailabilityExceptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailabilityException"> | string
    therapistId?: StringWithAggregatesFilter<"AvailabilityException"> | string
    sessionType?: StringWithAggregatesFilter<"AvailabilityException"> | string
    date?: DateTimeWithAggregatesFilter<"AvailabilityException"> | Date | string
    startTime?: DateTimeNullableWithAggregatesFilter<"AvailabilityException"> | Date | string | null
    endTime?: DateTimeNullableWithAggregatesFilter<"AvailabilityException"> | Date | string | null
    isBlocked?: BoolWithAggregatesFilter<"AvailabilityException"> | boolean
    notes?: StringNullableWithAggregatesFilter<"AvailabilityException"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AvailabilityException"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AvailabilityException"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    therapistId?: StringFilter<"Appointment"> | string
    sessionType?: StringFilter<"Appointment"> | string
    userId?: StringFilter<"Appointment"> | string
    startTs?: DateTimeFilter<"Appointment"> | Date | string
    endTs?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    price?: FloatFilter<"Appointment"> | number
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    therapist?: XOR<TherapistScalarRelationFilter, TherapistWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    userId?: SortOrder
    startTs?: SortOrder
    endTs?: SortOrder
    status?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapist?: TherapistOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    therapistId_startTs_endTs?: AppointmentTherapistIdStartTsEndTsCompoundUniqueInput
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    therapistId?: StringFilter<"Appointment"> | string
    sessionType?: StringFilter<"Appointment"> | string
    userId?: StringFilter<"Appointment"> | string
    startTs?: DateTimeFilter<"Appointment"> | Date | string
    endTs?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    price?: FloatFilter<"Appointment"> | number
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    therapist?: XOR<TherapistScalarRelationFilter, TherapistWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "therapistId_startTs_endTs">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    userId?: SortOrder
    startTs?: SortOrder
    endTs?: SortOrder
    status?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    therapistId?: StringWithAggregatesFilter<"Appointment"> | string
    sessionType?: StringWithAggregatesFilter<"Appointment"> | string
    userId?: StringWithAggregatesFilter<"Appointment"> | string
    startTs?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    endTs?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    price?: FloatWithAggregatesFilter<"Appointment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    location?: StringFilter<"User"> | string
    timezone?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    appointments?: AppointmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    location?: StringFilter<"User"> | string
    timezone?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    appointments?: AppointmentListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    timezone?: SortOrder
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
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    location?: StringWithAggregatesFilter<"User"> | string
    timezone?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
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
    timezone: string
    defaultDurationMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilityRules?: AvailabilityRuleCreateNestedManyWithoutTherapistInput
    availabilityExceptions?: AvailabilityExceptionCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentCreateNestedManyWithoutTherapistInput
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
    timezone: string
    defaultDurationMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilityRules?: AvailabilityRuleUncheckedCreateNestedManyWithoutTherapistInput
    availabilityExceptions?: AvailabilityExceptionUncheckedCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutTherapistInput
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
    timezone?: StringFieldUpdateOperationsInput | string
    defaultDurationMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilityRules?: AvailabilityRuleUpdateManyWithoutTherapistNestedInput
    availabilityExceptions?: AvailabilityExceptionUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUpdateManyWithoutTherapistNestedInput
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
    timezone?: StringFieldUpdateOperationsInput | string
    defaultDurationMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilityRules?: AvailabilityRuleUncheckedUpdateManyWithoutTherapistNestedInput
    availabilityExceptions?: AvailabilityExceptionUncheckedUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutTherapistNestedInput
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
    timezone: string
    defaultDurationMinutes?: number
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
    timezone?: StringFieldUpdateOperationsInput | string
    defaultDurationMinutes?: IntFieldUpdateOperationsInput | number
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
    timezone?: StringFieldUpdateOperationsInput | string
    defaultDurationMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityRuleCreateInput = {
    id?: string
    sessionType: string
    weekday: number
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutAvailabilityRulesInput
  }

  export type AvailabilityRuleUncheckedCreateInput = {
    id?: string
    therapistId: string
    sessionType: string
    weekday: number
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutAvailabilityRulesNestedInput
  }

  export type AvailabilityRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityRuleCreateManyInput = {
    id?: string
    therapistId: string
    sessionType: string
    weekday: number
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityExceptionCreateInput = {
    id?: string
    sessionType: string
    date: Date | string
    startTime?: Date | string | null
    endTime?: Date | string | null
    isBlocked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutAvailabilityExceptionsInput
  }

  export type AvailabilityExceptionUncheckedCreateInput = {
    id?: string
    therapistId: string
    sessionType: string
    date: Date | string
    startTime?: Date | string | null
    endTime?: Date | string | null
    isBlocked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityExceptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutAvailabilityExceptionsNestedInput
  }

  export type AvailabilityExceptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityExceptionCreateManyInput = {
    id?: string
    therapistId: string
    sessionType: string
    date: Date | string
    startTime?: Date | string | null
    endTime?: Date | string | null
    isBlocked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityExceptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityExceptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    sessionType: string
    startTs: Date | string
    endTs: Date | string
    status?: $Enums.AppointmentStatus
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutAppointmentsInput
    user: UserCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    therapistId: string
    sessionType: string
    userId: string
    startTs: Date | string
    endTs: Date | string
    status?: $Enums.AppointmentStatus
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    startTs?: DateTimeFieldUpdateOperationsInput | Date | string
    endTs?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutAppointmentsNestedInput
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTs?: DateTimeFieldUpdateOperationsInput | Date | string
    endTs?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: string
    therapistId: string
    sessionType: string
    userId: string
    startTs: Date | string
    endTs: Date | string
    status?: $Enums.AppointmentStatus
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    startTs?: DateTimeFieldUpdateOperationsInput | Date | string
    endTs?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTs?: DateTimeFieldUpdateOperationsInput | Date | string
    endTs?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
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

  export type AvailabilityRuleListRelationFilter = {
    every?: AvailabilityRuleWhereInput
    some?: AvailabilityRuleWhereInput
    none?: AvailabilityRuleWhereInput
  }

  export type AvailabilityExceptionListRelationFilter = {
    every?: AvailabilityExceptionWhereInput
    some?: AvailabilityExceptionWhereInput
    none?: AvailabilityExceptionWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AvailabilityRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityExceptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
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
    timezone?: SortOrder
    defaultDurationMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistAvgOrderByAggregateInput = {
    rating?: SortOrder
    reviewCount?: SortOrder
    pricePerSession?: SortOrder
    yearsExperience?: SortOrder
    defaultDurationMinutes?: SortOrder
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
    timezone?: SortOrder
    defaultDurationMinutes?: SortOrder
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
    timezone?: SortOrder
    defaultDurationMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapistSumOrderByAggregateInput = {
    rating?: SortOrder
    reviewCount?: SortOrder
    pricePerSession?: SortOrder
    yearsExperience?: SortOrder
    defaultDurationMinutes?: SortOrder
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

  export type TherapistScalarRelationFilter = {
    is?: TherapistWhereInput
    isNot?: TherapistWhereInput
  }

  export type AvailabilityRuleCountOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityRuleAvgOrderByAggregateInput = {
    weekday?: SortOrder
  }

  export type AvailabilityRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityRuleMinOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    weekday?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityRuleSumOrderByAggregateInput = {
    weekday?: SortOrder
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

  export type AvailabilityExceptionCountOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isBlocked?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityExceptionMaxOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isBlocked?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityExceptionMinOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isBlocked?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppointmentTherapistIdStartTsEndTsCompoundUniqueInput = {
    therapistId: string
    startTs: Date | string
    endTs: Date | string
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    userId?: SortOrder
    startTs?: SortOrder
    endTs?: SortOrder
    status?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    userId?: SortOrder
    startTs?: SortOrder
    endTs?: SortOrder
    status?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    therapistId?: SortOrder
    sessionType?: SortOrder
    userId?: SortOrder
    startTs?: SortOrder
    endTs?: SortOrder
    status?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type AvailabilityRuleCreateNestedManyWithoutTherapistInput = {
    create?: XOR<AvailabilityRuleCreateWithoutTherapistInput, AvailabilityRuleUncheckedCreateWithoutTherapistInput> | AvailabilityRuleCreateWithoutTherapistInput[] | AvailabilityRuleUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AvailabilityRuleCreateOrConnectWithoutTherapistInput | AvailabilityRuleCreateOrConnectWithoutTherapistInput[]
    createMany?: AvailabilityRuleCreateManyTherapistInputEnvelope
    connect?: AvailabilityRuleWhereUniqueInput | AvailabilityRuleWhereUniqueInput[]
  }

  export type AvailabilityExceptionCreateNestedManyWithoutTherapistInput = {
    create?: XOR<AvailabilityExceptionCreateWithoutTherapistInput, AvailabilityExceptionUncheckedCreateWithoutTherapistInput> | AvailabilityExceptionCreateWithoutTherapistInput[] | AvailabilityExceptionUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AvailabilityExceptionCreateOrConnectWithoutTherapistInput | AvailabilityExceptionCreateOrConnectWithoutTherapistInput[]
    createMany?: AvailabilityExceptionCreateManyTherapistInputEnvelope
    connect?: AvailabilityExceptionWhereUniqueInput | AvailabilityExceptionWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutTherapistInput = {
    create?: XOR<AppointmentCreateWithoutTherapistInput, AppointmentUncheckedCreateWithoutTherapistInput> | AppointmentCreateWithoutTherapistInput[] | AppointmentUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutTherapistInput | AppointmentCreateOrConnectWithoutTherapistInput[]
    createMany?: AppointmentCreateManyTherapistInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AvailabilityRuleUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<AvailabilityRuleCreateWithoutTherapistInput, AvailabilityRuleUncheckedCreateWithoutTherapistInput> | AvailabilityRuleCreateWithoutTherapistInput[] | AvailabilityRuleUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AvailabilityRuleCreateOrConnectWithoutTherapistInput | AvailabilityRuleCreateOrConnectWithoutTherapistInput[]
    createMany?: AvailabilityRuleCreateManyTherapistInputEnvelope
    connect?: AvailabilityRuleWhereUniqueInput | AvailabilityRuleWhereUniqueInput[]
  }

  export type AvailabilityExceptionUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<AvailabilityExceptionCreateWithoutTherapistInput, AvailabilityExceptionUncheckedCreateWithoutTherapistInput> | AvailabilityExceptionCreateWithoutTherapistInput[] | AvailabilityExceptionUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AvailabilityExceptionCreateOrConnectWithoutTherapistInput | AvailabilityExceptionCreateOrConnectWithoutTherapistInput[]
    createMany?: AvailabilityExceptionCreateManyTherapistInputEnvelope
    connect?: AvailabilityExceptionWhereUniqueInput | AvailabilityExceptionWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutTherapistInput = {
    create?: XOR<AppointmentCreateWithoutTherapistInput, AppointmentUncheckedCreateWithoutTherapistInput> | AppointmentCreateWithoutTherapistInput[] | AppointmentUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutTherapistInput | AppointmentCreateOrConnectWithoutTherapistInput[]
    createMany?: AppointmentCreateManyTherapistInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
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

  export type AvailabilityRuleUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<AvailabilityRuleCreateWithoutTherapistInput, AvailabilityRuleUncheckedCreateWithoutTherapistInput> | AvailabilityRuleCreateWithoutTherapistInput[] | AvailabilityRuleUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AvailabilityRuleCreateOrConnectWithoutTherapistInput | AvailabilityRuleCreateOrConnectWithoutTherapistInput[]
    upsert?: AvailabilityRuleUpsertWithWhereUniqueWithoutTherapistInput | AvailabilityRuleUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: AvailabilityRuleCreateManyTherapistInputEnvelope
    set?: AvailabilityRuleWhereUniqueInput | AvailabilityRuleWhereUniqueInput[]
    disconnect?: AvailabilityRuleWhereUniqueInput | AvailabilityRuleWhereUniqueInput[]
    delete?: AvailabilityRuleWhereUniqueInput | AvailabilityRuleWhereUniqueInput[]
    connect?: AvailabilityRuleWhereUniqueInput | AvailabilityRuleWhereUniqueInput[]
    update?: AvailabilityRuleUpdateWithWhereUniqueWithoutTherapistInput | AvailabilityRuleUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: AvailabilityRuleUpdateManyWithWhereWithoutTherapistInput | AvailabilityRuleUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: AvailabilityRuleScalarWhereInput | AvailabilityRuleScalarWhereInput[]
  }

  export type AvailabilityExceptionUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<AvailabilityExceptionCreateWithoutTherapistInput, AvailabilityExceptionUncheckedCreateWithoutTherapistInput> | AvailabilityExceptionCreateWithoutTherapistInput[] | AvailabilityExceptionUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AvailabilityExceptionCreateOrConnectWithoutTherapistInput | AvailabilityExceptionCreateOrConnectWithoutTherapistInput[]
    upsert?: AvailabilityExceptionUpsertWithWhereUniqueWithoutTherapistInput | AvailabilityExceptionUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: AvailabilityExceptionCreateManyTherapistInputEnvelope
    set?: AvailabilityExceptionWhereUniqueInput | AvailabilityExceptionWhereUniqueInput[]
    disconnect?: AvailabilityExceptionWhereUniqueInput | AvailabilityExceptionWhereUniqueInput[]
    delete?: AvailabilityExceptionWhereUniqueInput | AvailabilityExceptionWhereUniqueInput[]
    connect?: AvailabilityExceptionWhereUniqueInput | AvailabilityExceptionWhereUniqueInput[]
    update?: AvailabilityExceptionUpdateWithWhereUniqueWithoutTherapistInput | AvailabilityExceptionUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: AvailabilityExceptionUpdateManyWithWhereWithoutTherapistInput | AvailabilityExceptionUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: AvailabilityExceptionScalarWhereInput | AvailabilityExceptionScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<AppointmentCreateWithoutTherapistInput, AppointmentUncheckedCreateWithoutTherapistInput> | AppointmentCreateWithoutTherapistInput[] | AppointmentUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutTherapistInput | AppointmentCreateOrConnectWithoutTherapistInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutTherapistInput | AppointmentUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: AppointmentCreateManyTherapistInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutTherapistInput | AppointmentUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutTherapistInput | AppointmentUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AvailabilityRuleUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<AvailabilityRuleCreateWithoutTherapistInput, AvailabilityRuleUncheckedCreateWithoutTherapistInput> | AvailabilityRuleCreateWithoutTherapistInput[] | AvailabilityRuleUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AvailabilityRuleCreateOrConnectWithoutTherapistInput | AvailabilityRuleCreateOrConnectWithoutTherapistInput[]
    upsert?: AvailabilityRuleUpsertWithWhereUniqueWithoutTherapistInput | AvailabilityRuleUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: AvailabilityRuleCreateManyTherapistInputEnvelope
    set?: AvailabilityRuleWhereUniqueInput | AvailabilityRuleWhereUniqueInput[]
    disconnect?: AvailabilityRuleWhereUniqueInput | AvailabilityRuleWhereUniqueInput[]
    delete?: AvailabilityRuleWhereUniqueInput | AvailabilityRuleWhereUniqueInput[]
    connect?: AvailabilityRuleWhereUniqueInput | AvailabilityRuleWhereUniqueInput[]
    update?: AvailabilityRuleUpdateWithWhereUniqueWithoutTherapistInput | AvailabilityRuleUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: AvailabilityRuleUpdateManyWithWhereWithoutTherapistInput | AvailabilityRuleUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: AvailabilityRuleScalarWhereInput | AvailabilityRuleScalarWhereInput[]
  }

  export type AvailabilityExceptionUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<AvailabilityExceptionCreateWithoutTherapistInput, AvailabilityExceptionUncheckedCreateWithoutTherapistInput> | AvailabilityExceptionCreateWithoutTherapistInput[] | AvailabilityExceptionUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AvailabilityExceptionCreateOrConnectWithoutTherapistInput | AvailabilityExceptionCreateOrConnectWithoutTherapistInput[]
    upsert?: AvailabilityExceptionUpsertWithWhereUniqueWithoutTherapistInput | AvailabilityExceptionUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: AvailabilityExceptionCreateManyTherapistInputEnvelope
    set?: AvailabilityExceptionWhereUniqueInput | AvailabilityExceptionWhereUniqueInput[]
    disconnect?: AvailabilityExceptionWhereUniqueInput | AvailabilityExceptionWhereUniqueInput[]
    delete?: AvailabilityExceptionWhereUniqueInput | AvailabilityExceptionWhereUniqueInput[]
    connect?: AvailabilityExceptionWhereUniqueInput | AvailabilityExceptionWhereUniqueInput[]
    update?: AvailabilityExceptionUpdateWithWhereUniqueWithoutTherapistInput | AvailabilityExceptionUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: AvailabilityExceptionUpdateManyWithWhereWithoutTherapistInput | AvailabilityExceptionUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: AvailabilityExceptionScalarWhereInput | AvailabilityExceptionScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutTherapistNestedInput = {
    create?: XOR<AppointmentCreateWithoutTherapistInput, AppointmentUncheckedCreateWithoutTherapistInput> | AppointmentCreateWithoutTherapistInput[] | AppointmentUncheckedCreateWithoutTherapistInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutTherapistInput | AppointmentCreateOrConnectWithoutTherapistInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutTherapistInput | AppointmentUpsertWithWhereUniqueWithoutTherapistInput[]
    createMany?: AppointmentCreateManyTherapistInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutTherapistInput | AppointmentUpdateWithWhereUniqueWithoutTherapistInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutTherapistInput | AppointmentUpdateManyWithWhereWithoutTherapistInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type TherapistCreateNestedOneWithoutAvailabilityRulesInput = {
    create?: XOR<TherapistCreateWithoutAvailabilityRulesInput, TherapistUncheckedCreateWithoutAvailabilityRulesInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutAvailabilityRulesInput
    connect?: TherapistWhereUniqueInput
  }

  export type TherapistUpdateOneRequiredWithoutAvailabilityRulesNestedInput = {
    create?: XOR<TherapistCreateWithoutAvailabilityRulesInput, TherapistUncheckedCreateWithoutAvailabilityRulesInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutAvailabilityRulesInput
    upsert?: TherapistUpsertWithoutAvailabilityRulesInput
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutAvailabilityRulesInput, TherapistUpdateWithoutAvailabilityRulesInput>, TherapistUncheckedUpdateWithoutAvailabilityRulesInput>
  }

  export type TherapistCreateNestedOneWithoutAvailabilityExceptionsInput = {
    create?: XOR<TherapistCreateWithoutAvailabilityExceptionsInput, TherapistUncheckedCreateWithoutAvailabilityExceptionsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutAvailabilityExceptionsInput
    connect?: TherapistWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TherapistUpdateOneRequiredWithoutAvailabilityExceptionsNestedInput = {
    create?: XOR<TherapistCreateWithoutAvailabilityExceptionsInput, TherapistUncheckedCreateWithoutAvailabilityExceptionsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutAvailabilityExceptionsInput
    upsert?: TherapistUpsertWithoutAvailabilityExceptionsInput
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutAvailabilityExceptionsInput, TherapistUpdateWithoutAvailabilityExceptionsInput>, TherapistUncheckedUpdateWithoutAvailabilityExceptionsInput>
  }

  export type TherapistCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<TherapistCreateWithoutAppointmentsInput, TherapistUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutAppointmentsInput
    connect?: TherapistWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type TherapistUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<TherapistCreateWithoutAppointmentsInput, TherapistUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: TherapistCreateOrConnectWithoutAppointmentsInput
    upsert?: TherapistUpsertWithoutAppointmentsInput
    connect?: TherapistWhereUniqueInput
    update?: XOR<XOR<TherapistUpdateToOneWithWhereWithoutAppointmentsInput, TherapistUpdateWithoutAppointmentsInput>, TherapistUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type AppointmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
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

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type AvailabilityRuleCreateWithoutTherapistInput = {
    id?: string
    sessionType: string
    weekday: number
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityRuleUncheckedCreateWithoutTherapistInput = {
    id?: string
    sessionType: string
    weekday: number
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityRuleCreateOrConnectWithoutTherapistInput = {
    where: AvailabilityRuleWhereUniqueInput
    create: XOR<AvailabilityRuleCreateWithoutTherapistInput, AvailabilityRuleUncheckedCreateWithoutTherapistInput>
  }

  export type AvailabilityRuleCreateManyTherapistInputEnvelope = {
    data: AvailabilityRuleCreateManyTherapistInput | AvailabilityRuleCreateManyTherapistInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityExceptionCreateWithoutTherapistInput = {
    id?: string
    sessionType: string
    date: Date | string
    startTime?: Date | string | null
    endTime?: Date | string | null
    isBlocked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityExceptionUncheckedCreateWithoutTherapistInput = {
    id?: string
    sessionType: string
    date: Date | string
    startTime?: Date | string | null
    endTime?: Date | string | null
    isBlocked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityExceptionCreateOrConnectWithoutTherapistInput = {
    where: AvailabilityExceptionWhereUniqueInput
    create: XOR<AvailabilityExceptionCreateWithoutTherapistInput, AvailabilityExceptionUncheckedCreateWithoutTherapistInput>
  }

  export type AvailabilityExceptionCreateManyTherapistInputEnvelope = {
    data: AvailabilityExceptionCreateManyTherapistInput | AvailabilityExceptionCreateManyTherapistInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutTherapistInput = {
    id?: string
    sessionType: string
    startTs: Date | string
    endTs: Date | string
    status?: $Enums.AppointmentStatus
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutTherapistInput = {
    id?: string
    sessionType: string
    userId: string
    startTs: Date | string
    endTs: Date | string
    status?: $Enums.AppointmentStatus
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutTherapistInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutTherapistInput, AppointmentUncheckedCreateWithoutTherapistInput>
  }

  export type AppointmentCreateManyTherapistInputEnvelope = {
    data: AppointmentCreateManyTherapistInput | AppointmentCreateManyTherapistInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityRuleUpsertWithWhereUniqueWithoutTherapistInput = {
    where: AvailabilityRuleWhereUniqueInput
    update: XOR<AvailabilityRuleUpdateWithoutTherapistInput, AvailabilityRuleUncheckedUpdateWithoutTherapistInput>
    create: XOR<AvailabilityRuleCreateWithoutTherapistInput, AvailabilityRuleUncheckedCreateWithoutTherapistInput>
  }

  export type AvailabilityRuleUpdateWithWhereUniqueWithoutTherapistInput = {
    where: AvailabilityRuleWhereUniqueInput
    data: XOR<AvailabilityRuleUpdateWithoutTherapistInput, AvailabilityRuleUncheckedUpdateWithoutTherapistInput>
  }

  export type AvailabilityRuleUpdateManyWithWhereWithoutTherapistInput = {
    where: AvailabilityRuleScalarWhereInput
    data: XOR<AvailabilityRuleUpdateManyMutationInput, AvailabilityRuleUncheckedUpdateManyWithoutTherapistInput>
  }

  export type AvailabilityRuleScalarWhereInput = {
    AND?: AvailabilityRuleScalarWhereInput | AvailabilityRuleScalarWhereInput[]
    OR?: AvailabilityRuleScalarWhereInput[]
    NOT?: AvailabilityRuleScalarWhereInput | AvailabilityRuleScalarWhereInput[]
    id?: StringFilter<"AvailabilityRule"> | string
    therapistId?: StringFilter<"AvailabilityRule"> | string
    sessionType?: StringFilter<"AvailabilityRule"> | string
    weekday?: IntFilter<"AvailabilityRule"> | number
    startTime?: DateTimeFilter<"AvailabilityRule"> | Date | string
    endTime?: DateTimeFilter<"AvailabilityRule"> | Date | string
    createdAt?: DateTimeFilter<"AvailabilityRule"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityRule"> | Date | string
  }

  export type AvailabilityExceptionUpsertWithWhereUniqueWithoutTherapistInput = {
    where: AvailabilityExceptionWhereUniqueInput
    update: XOR<AvailabilityExceptionUpdateWithoutTherapistInput, AvailabilityExceptionUncheckedUpdateWithoutTherapistInput>
    create: XOR<AvailabilityExceptionCreateWithoutTherapistInput, AvailabilityExceptionUncheckedCreateWithoutTherapistInput>
  }

  export type AvailabilityExceptionUpdateWithWhereUniqueWithoutTherapistInput = {
    where: AvailabilityExceptionWhereUniqueInput
    data: XOR<AvailabilityExceptionUpdateWithoutTherapistInput, AvailabilityExceptionUncheckedUpdateWithoutTherapistInput>
  }

  export type AvailabilityExceptionUpdateManyWithWhereWithoutTherapistInput = {
    where: AvailabilityExceptionScalarWhereInput
    data: XOR<AvailabilityExceptionUpdateManyMutationInput, AvailabilityExceptionUncheckedUpdateManyWithoutTherapistInput>
  }

  export type AvailabilityExceptionScalarWhereInput = {
    AND?: AvailabilityExceptionScalarWhereInput | AvailabilityExceptionScalarWhereInput[]
    OR?: AvailabilityExceptionScalarWhereInput[]
    NOT?: AvailabilityExceptionScalarWhereInput | AvailabilityExceptionScalarWhereInput[]
    id?: StringFilter<"AvailabilityException"> | string
    therapistId?: StringFilter<"AvailabilityException"> | string
    sessionType?: StringFilter<"AvailabilityException"> | string
    date?: DateTimeFilter<"AvailabilityException"> | Date | string
    startTime?: DateTimeNullableFilter<"AvailabilityException"> | Date | string | null
    endTime?: DateTimeNullableFilter<"AvailabilityException"> | Date | string | null
    isBlocked?: BoolFilter<"AvailabilityException"> | boolean
    notes?: StringNullableFilter<"AvailabilityException"> | string | null
    createdAt?: DateTimeFilter<"AvailabilityException"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilityException"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutTherapistInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutTherapistInput, AppointmentUncheckedUpdateWithoutTherapistInput>
    create: XOR<AppointmentCreateWithoutTherapistInput, AppointmentUncheckedCreateWithoutTherapistInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutTherapistInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutTherapistInput, AppointmentUncheckedUpdateWithoutTherapistInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutTherapistInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutTherapistInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    therapistId?: StringFilter<"Appointment"> | string
    sessionType?: StringFilter<"Appointment"> | string
    userId?: StringFilter<"Appointment"> | string
    startTs?: DateTimeFilter<"Appointment"> | Date | string
    endTs?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    price?: FloatFilter<"Appointment"> | number
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type TherapistCreateWithoutAvailabilityRulesInput = {
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
    timezone: string
    defaultDurationMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilityExceptions?: AvailabilityExceptionCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutAvailabilityRulesInput = {
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
    timezone: string
    defaultDurationMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilityExceptions?: AvailabilityExceptionUncheckedCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutAvailabilityRulesInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutAvailabilityRulesInput, TherapistUncheckedCreateWithoutAvailabilityRulesInput>
  }

  export type TherapistUpsertWithoutAvailabilityRulesInput = {
    update: XOR<TherapistUpdateWithoutAvailabilityRulesInput, TherapistUncheckedUpdateWithoutAvailabilityRulesInput>
    create: XOR<TherapistCreateWithoutAvailabilityRulesInput, TherapistUncheckedCreateWithoutAvailabilityRulesInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutAvailabilityRulesInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutAvailabilityRulesInput, TherapistUncheckedUpdateWithoutAvailabilityRulesInput>
  }

  export type TherapistUpdateWithoutAvailabilityRulesInput = {
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
    timezone?: StringFieldUpdateOperationsInput | string
    defaultDurationMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilityExceptions?: AvailabilityExceptionUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutAvailabilityRulesInput = {
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
    timezone?: StringFieldUpdateOperationsInput | string
    defaultDurationMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilityExceptions?: AvailabilityExceptionUncheckedUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistCreateWithoutAvailabilityExceptionsInput = {
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
    timezone: string
    defaultDurationMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilityRules?: AvailabilityRuleCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutAvailabilityExceptionsInput = {
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
    timezone: string
    defaultDurationMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilityRules?: AvailabilityRuleUncheckedCreateNestedManyWithoutTherapistInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutAvailabilityExceptionsInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutAvailabilityExceptionsInput, TherapistUncheckedCreateWithoutAvailabilityExceptionsInput>
  }

  export type TherapistUpsertWithoutAvailabilityExceptionsInput = {
    update: XOR<TherapistUpdateWithoutAvailabilityExceptionsInput, TherapistUncheckedUpdateWithoutAvailabilityExceptionsInput>
    create: XOR<TherapistCreateWithoutAvailabilityExceptionsInput, TherapistUncheckedCreateWithoutAvailabilityExceptionsInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutAvailabilityExceptionsInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutAvailabilityExceptionsInput, TherapistUncheckedUpdateWithoutAvailabilityExceptionsInput>
  }

  export type TherapistUpdateWithoutAvailabilityExceptionsInput = {
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
    timezone?: StringFieldUpdateOperationsInput | string
    defaultDurationMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilityRules?: AvailabilityRuleUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutAvailabilityExceptionsInput = {
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
    timezone?: StringFieldUpdateOperationsInput | string
    defaultDurationMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilityRules?: AvailabilityRuleUncheckedUpdateManyWithoutTherapistNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistCreateWithoutAppointmentsInput = {
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
    timezone: string
    defaultDurationMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilityRules?: AvailabilityRuleCreateNestedManyWithoutTherapistInput
    availabilityExceptions?: AvailabilityExceptionCreateNestedManyWithoutTherapistInput
  }

  export type TherapistUncheckedCreateWithoutAppointmentsInput = {
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
    timezone: string
    defaultDurationMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilityRules?: AvailabilityRuleUncheckedCreateNestedManyWithoutTherapistInput
    availabilityExceptions?: AvailabilityExceptionUncheckedCreateNestedManyWithoutTherapistInput
  }

  export type TherapistCreateOrConnectWithoutAppointmentsInput = {
    where: TherapistWhereUniqueInput
    create: XOR<TherapistCreateWithoutAppointmentsInput, TherapistUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserCreateWithoutAppointmentsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type TherapistUpsertWithoutAppointmentsInput = {
    update: XOR<TherapistUpdateWithoutAppointmentsInput, TherapistUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<TherapistCreateWithoutAppointmentsInput, TherapistUncheckedCreateWithoutAppointmentsInput>
    where?: TherapistWhereInput
  }

  export type TherapistUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: TherapistWhereInput
    data: XOR<TherapistUpdateWithoutAppointmentsInput, TherapistUncheckedUpdateWithoutAppointmentsInput>
  }

  export type TherapistUpdateWithoutAppointmentsInput = {
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
    timezone?: StringFieldUpdateOperationsInput | string
    defaultDurationMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilityRules?: AvailabilityRuleUpdateManyWithoutTherapistNestedInput
    availabilityExceptions?: AvailabilityExceptionUpdateManyWithoutTherapistNestedInput
  }

  export type TherapistUncheckedUpdateWithoutAppointmentsInput = {
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
    timezone?: StringFieldUpdateOperationsInput | string
    defaultDurationMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilityRules?: AvailabilityRuleUncheckedUpdateManyWithoutTherapistNestedInput
    availabilityExceptions?: AvailabilityExceptionUncheckedUpdateManyWithoutTherapistNestedInput
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateWithoutUserInput = {
    id?: string
    sessionType: string
    startTs: Date | string
    endTs: Date | string
    status?: $Enums.AppointmentStatus
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    therapist: TherapistCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutUserInput = {
    id?: string
    therapistId: string
    sessionType: string
    startTs: Date | string
    endTs: Date | string
    status?: $Enums.AppointmentStatus
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateManyUserInputEnvelope = {
    data: AppointmentCreateManyUserInput | AppointmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutUserInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AvailabilityRuleCreateManyTherapistInput = {
    id?: string
    sessionType: string
    weekday: number
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityExceptionCreateManyTherapistInput = {
    id?: string
    sessionType: string
    date: Date | string
    startTime?: Date | string | null
    endTime?: Date | string | null
    isBlocked?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateManyTherapistInput = {
    id?: string
    sessionType: string
    userId: string
    startTs: Date | string
    endTs: Date | string
    status?: $Enums.AppointmentStatus
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityRuleUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityRuleUncheckedUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityRuleUncheckedUpdateManyWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    weekday?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityExceptionUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityExceptionUncheckedUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityExceptionUncheckedUpdateManyWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    startTs?: DateTimeFieldUpdateOperationsInput | Date | string
    endTs?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTs?: DateTimeFieldUpdateOperationsInput | Date | string
    endTs?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutTherapistInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTs?: DateTimeFieldUpdateOperationsInput | Date | string
    endTs?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyUserInput = {
    id?: string
    therapistId: string
    sessionType: string
    startTs: Date | string
    endTs: Date | string
    status?: $Enums.AppointmentStatus
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    startTs?: DateTimeFieldUpdateOperationsInput | Date | string
    endTs?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapist?: TherapistUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    startTs?: DateTimeFieldUpdateOperationsInput | Date | string
    endTs?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    therapistId?: StringFieldUpdateOperationsInput | string
    sessionType?: StringFieldUpdateOperationsInput | string
    startTs?: DateTimeFieldUpdateOperationsInput | Date | string
    endTs?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    price?: FloatFieldUpdateOperationsInput | number
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