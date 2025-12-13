
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Classroom
 * 
 */
export type Classroom = $Result.DefaultSelection<Prisma.$ClassroomPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Result
 * 
 */
export type Result = $Result.DefaultSelection<Prisma.$ResultPayload>
/**
 * Model SubjectScore
 * 
 */
export type SubjectScore = $Result.DefaultSelection<Prisma.$SubjectScorePayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model StudentSubject
 * 
 */
export type StudentSubject = $Result.DefaultSelection<Prisma.$StudentSubjectPayload>
/**
 * Model GradeScale
 * 
 */
export type GradeScale = $Result.DefaultSelection<Prisma.$GradeScalePayload>
/**
 * Model SchoolSettings
 * 
 */
export type SchoolSettings = $Result.DefaultSelection<Prisma.$SchoolSettingsPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model AuthUser
 * 
 */
export type AuthUser = $Result.DefaultSelection<Prisma.$AuthUserPayload>
/**
 * Model AuthSession
 * 
 */
export type AuthSession = $Result.DefaultSelection<Prisma.$AuthSessionPayload>
/**
 * Model AuthAccount
 * 
 */
export type AuthAccount = $Result.DefaultSelection<Prisma.$AuthAccountPayload>
/**
 * Model AuthVerification
 * 
 */
export type AuthVerification = $Result.DefaultSelection<Prisma.$AuthVerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Term: {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD'
};

export type Term = (typeof Term)[keyof typeof Term]


export const Grade: {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F'
};

export type Grade = (typeof Grade)[keyof typeof Grade]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Term = $Enums.Term

export const Term: typeof $Enums.Term

export type Grade = $Enums.Grade

export const Grade: typeof $Enums.Grade

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
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.classroom`: Exposes CRUD operations for the **Classroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classrooms
    * const classrooms = await prisma.classroom.findMany()
    * ```
    */
  get classroom(): Prisma.ClassroomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.result`: Exposes CRUD operations for the **Result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.result.findMany()
    * ```
    */
  get result(): Prisma.ResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subjectScore`: Exposes CRUD operations for the **SubjectScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubjectScores
    * const subjectScores = await prisma.subjectScore.findMany()
    * ```
    */
  get subjectScore(): Prisma.SubjectScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentSubject`: Exposes CRUD operations for the **StudentSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentSubjects
    * const studentSubjects = await prisma.studentSubject.findMany()
    * ```
    */
  get studentSubject(): Prisma.StudentSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gradeScale`: Exposes CRUD operations for the **GradeScale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GradeScales
    * const gradeScales = await prisma.gradeScale.findMany()
    * ```
    */
  get gradeScale(): Prisma.GradeScaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schoolSettings`: Exposes CRUD operations for the **SchoolSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolSettings
    * const schoolSettings = await prisma.schoolSettings.findMany()
    * ```
    */
  get schoolSettings(): Prisma.SchoolSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authUser`: Exposes CRUD operations for the **AuthUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthUsers
    * const authUsers = await prisma.authUser.findMany()
    * ```
    */
  get authUser(): Prisma.AuthUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authSession`: Exposes CRUD operations for the **AuthSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthSessions
    * const authSessions = await prisma.authSession.findMany()
    * ```
    */
  get authSession(): Prisma.AuthSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authAccount`: Exposes CRUD operations for the **AuthAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthAccounts
    * const authAccounts = await prisma.authAccount.findMany()
    * ```
    */
  get authAccount(): Prisma.AuthAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authVerification`: Exposes CRUD operations for the **AuthVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthVerifications
    * const authVerifications = await prisma.authVerification.findMany()
    * ```
    */
  get authVerification(): Prisma.AuthVerificationDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Classroom: 'Classroom',
    Student: 'Student',
    Result: 'Result',
    SubjectScore: 'SubjectScore',
    Subject: 'Subject',
    StudentSubject: 'StudentSubject',
    GradeScale: 'GradeScale',
    SchoolSettings: 'SchoolSettings',
    AuditLog: 'AuditLog',
    AuthUser: 'AuthUser',
    AuthSession: 'AuthSession',
    AuthAccount: 'AuthAccount',
    AuthVerification: 'AuthVerification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "classroom" | "student" | "result" | "subjectScore" | "subject" | "studentSubject" | "gradeScale" | "schoolSettings" | "auditLog" | "authUser" | "authSession" | "authAccount" | "authVerification"
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
      Classroom: {
        payload: Prisma.$ClassroomPayload<ExtArgs>
        fields: Prisma.ClassroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findFirst: {
            args: Prisma.ClassroomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findMany: {
            args: Prisma.ClassroomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          create: {
            args: Prisma.ClassroomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          createMany: {
            args: Prisma.ClassroomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          delete: {
            args: Prisma.ClassroomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          update: {
            args: Prisma.ClassroomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          aggregate: {
            args: Prisma.ClassroomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroom>
          }
          groupBy: {
            args: Prisma.ClassroomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Result: {
        payload: Prisma.$ResultPayload<ExtArgs>
        fields: Prisma.ResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findFirst: {
            args: Prisma.ResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findMany: {
            args: Prisma.ResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          create: {
            args: Prisma.ResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          createMany: {
            args: Prisma.ResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          delete: {
            args: Prisma.ResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          update: {
            args: Prisma.ResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          deleteMany: {
            args: Prisma.ResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          upsert: {
            args: Prisma.ResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          aggregate: {
            args: Prisma.ResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResult>
          }
          groupBy: {
            args: Prisma.ResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultCountArgs<ExtArgs>
            result: $Utils.Optional<ResultCountAggregateOutputType> | number
          }
        }
      }
      SubjectScore: {
        payload: Prisma.$SubjectScorePayload<ExtArgs>
        fields: Prisma.SubjectScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectScorePayload>
          }
          findFirst: {
            args: Prisma.SubjectScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectScorePayload>
          }
          findMany: {
            args: Prisma.SubjectScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectScorePayload>[]
          }
          create: {
            args: Prisma.SubjectScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectScorePayload>
          }
          createMany: {
            args: Prisma.SubjectScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectScorePayload>[]
          }
          delete: {
            args: Prisma.SubjectScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectScorePayload>
          }
          update: {
            args: Prisma.SubjectScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectScorePayload>
          }
          deleteMany: {
            args: Prisma.SubjectScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectScorePayload>[]
          }
          upsert: {
            args: Prisma.SubjectScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectScorePayload>
          }
          aggregate: {
            args: Prisma.SubjectScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjectScore>
          }
          groupBy: {
            args: Prisma.SubjectScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectScoreCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectScoreCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      StudentSubject: {
        payload: Prisma.$StudentSubjectPayload<ExtArgs>
        fields: Prisma.StudentSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          findFirst: {
            args: Prisma.StudentSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          findMany: {
            args: Prisma.StudentSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          create: {
            args: Prisma.StudentSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          createMany: {
            args: Prisma.StudentSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          delete: {
            args: Prisma.StudentSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          update: {
            args: Prisma.StudentSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          deleteMany: {
            args: Prisma.StudentSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          upsert: {
            args: Prisma.StudentSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          aggregate: {
            args: Prisma.StudentSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentSubject>
          }
          groupBy: {
            args: Prisma.StudentSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<StudentSubjectCountAggregateOutputType> | number
          }
        }
      }
      GradeScale: {
        payload: Prisma.$GradeScalePayload<ExtArgs>
        fields: Prisma.GradeScaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradeScaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeScalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradeScaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeScalePayload>
          }
          findFirst: {
            args: Prisma.GradeScaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeScalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradeScaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeScalePayload>
          }
          findMany: {
            args: Prisma.GradeScaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeScalePayload>[]
          }
          create: {
            args: Prisma.GradeScaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeScalePayload>
          }
          createMany: {
            args: Prisma.GradeScaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GradeScaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeScalePayload>[]
          }
          delete: {
            args: Prisma.GradeScaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeScalePayload>
          }
          update: {
            args: Prisma.GradeScaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeScalePayload>
          }
          deleteMany: {
            args: Prisma.GradeScaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradeScaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GradeScaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeScalePayload>[]
          }
          upsert: {
            args: Prisma.GradeScaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeScalePayload>
          }
          aggregate: {
            args: Prisma.GradeScaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGradeScale>
          }
          groupBy: {
            args: Prisma.GradeScaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradeScaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.GradeScaleCountArgs<ExtArgs>
            result: $Utils.Optional<GradeScaleCountAggregateOutputType> | number
          }
        }
      }
      SchoolSettings: {
        payload: Prisma.$SchoolSettingsPayload<ExtArgs>
        fields: Prisma.SchoolSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSettingsPayload>
          }
          findFirst: {
            args: Prisma.SchoolSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSettingsPayload>
          }
          findMany: {
            args: Prisma.SchoolSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSettingsPayload>[]
          }
          create: {
            args: Prisma.SchoolSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSettingsPayload>
          }
          createMany: {
            args: Prisma.SchoolSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSettingsPayload>[]
          }
          delete: {
            args: Prisma.SchoolSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSettingsPayload>
          }
          update: {
            args: Prisma.SchoolSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SchoolSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SchoolSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSettingsPayload>
          }
          aggregate: {
            args: Prisma.SchoolSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolSettings>
          }
          groupBy: {
            args: Prisma.SchoolSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolSettingsCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      AuthUser: {
        payload: Prisma.$AuthUserPayload<ExtArgs>
        fields: Prisma.AuthUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          findFirst: {
            args: Prisma.AuthUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          findMany: {
            args: Prisma.AuthUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>[]
          }
          create: {
            args: Prisma.AuthUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          createMany: {
            args: Prisma.AuthUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>[]
          }
          delete: {
            args: Prisma.AuthUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          update: {
            args: Prisma.AuthUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          deleteMany: {
            args: Prisma.AuthUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>[]
          }
          upsert: {
            args: Prisma.AuthUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          aggregate: {
            args: Prisma.AuthUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthUser>
          }
          groupBy: {
            args: Prisma.AuthUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthUserCountArgs<ExtArgs>
            result: $Utils.Optional<AuthUserCountAggregateOutputType> | number
          }
        }
      }
      AuthSession: {
        payload: Prisma.$AuthSessionPayload<ExtArgs>
        fields: Prisma.AuthSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findFirst: {
            args: Prisma.AuthSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findMany: {
            args: Prisma.AuthSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          create: {
            args: Prisma.AuthSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          createMany: {
            args: Prisma.AuthSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          delete: {
            args: Prisma.AuthSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          update: {
            args: Prisma.AuthSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          deleteMany: {
            args: Prisma.AuthSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          upsert: {
            args: Prisma.AuthSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          aggregate: {
            args: Prisma.AuthSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthSession>
          }
          groupBy: {
            args: Prisma.AuthSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionCountAggregateOutputType> | number
          }
        }
      }
      AuthAccount: {
        payload: Prisma.$AuthAccountPayload<ExtArgs>
        fields: Prisma.AuthAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          findFirst: {
            args: Prisma.AuthAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          findMany: {
            args: Prisma.AuthAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>[]
          }
          create: {
            args: Prisma.AuthAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          createMany: {
            args: Prisma.AuthAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>[]
          }
          delete: {
            args: Prisma.AuthAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          update: {
            args: Prisma.AuthAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          deleteMany: {
            args: Prisma.AuthAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>[]
          }
          upsert: {
            args: Prisma.AuthAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          aggregate: {
            args: Prisma.AuthAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthAccount>
          }
          groupBy: {
            args: Prisma.AuthAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthAccountCountArgs<ExtArgs>
            result: $Utils.Optional<AuthAccountCountAggregateOutputType> | number
          }
        }
      }
      AuthVerification: {
        payload: Prisma.$AuthVerificationPayload<ExtArgs>
        fields: Prisma.AuthVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>
          }
          findFirst: {
            args: Prisma.AuthVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>
          }
          findMany: {
            args: Prisma.AuthVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>[]
          }
          create: {
            args: Prisma.AuthVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>
          }
          createMany: {
            args: Prisma.AuthVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>[]
          }
          delete: {
            args: Prisma.AuthVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>
          }
          update: {
            args: Prisma.AuthVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>
          }
          deleteMany: {
            args: Prisma.AuthVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>[]
          }
          upsert: {
            args: Prisma.AuthVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>
          }
          aggregate: {
            args: Prisma.AuthVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthVerification>
          }
          groupBy: {
            args: Prisma.AuthVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<AuthVerificationCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    classroom?: ClassroomOmit
    student?: StudentOmit
    result?: ResultOmit
    subjectScore?: SubjectScoreOmit
    subject?: SubjectOmit
    studentSubject?: StudentSubjectOmit
    gradeScale?: GradeScaleOmit
    schoolSettings?: SchoolSettingsOmit
    auditLog?: AuditLogOmit
    authUser?: AuthUserOmit
    authSession?: AuthSessionOmit
    authAccount?: AuthAccountOmit
    authVerification?: AuthVerificationOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    classrooms: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | UserCountOutputTypeCountClassroomsArgs
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
  export type UserCountOutputTypeCountClassroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
  }


  /**
   * Count Type ClassroomCountOutputType
   */

  export type ClassroomCountOutputType = {
    students: number
  }

  export type ClassroomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ClassroomCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomCountOutputType
     */
    select?: ClassroomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    results: number
    subjects: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | StudentCountOutputTypeCountResultsArgs
    subjects?: boolean | StudentCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
  }


  /**
   * Count Type ResultCountOutputType
   */

  export type ResultCountOutputType = {
    subjects: number
  }

  export type ResultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | ResultCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultCountOutputType
     */
    select?: ResultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectScoreWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    students: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | SubjectCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
  }


  /**
   * Count Type AuthUserCountOutputType
   */

  export type AuthUserCountOutputType = {
    sessions: number
    accounts: number
  }

  export type AuthUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | AuthUserCountOutputTypeCountSessionsArgs
    accounts?: boolean | AuthUserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * AuthUserCountOutputType without action
   */
  export type AuthUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUserCountOutputType
     */
    select?: AuthUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthUserCountOutputType without action
   */
  export type AuthUserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
  }

  /**
   * AuthUserCountOutputType without action
   */
  export type AuthUserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthAccountWhereInput
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    image: string | null
    phoneNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    image: string | null
    phoneNumber: string | null
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
    image: number
    phoneNumber: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    image?: true
    phoneNumber?: true
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
    image?: true
    phoneNumber?: true
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
    image?: true
    phoneNumber?: true
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
    name: string
    password: string
    role: $Enums.Role
    image: string | null
    phoneNumber: string | null
    isActive: boolean
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
    name?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classrooms?: boolean | User$classroomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
    phoneNumber?: boolean
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
    image?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "image" | "phoneNumber" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | User$classroomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      classrooms: Prisma.$ClassroomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      password: string
      role: $Enums.Role
      image: string | null
      phoneNumber: string | null
      isActive: boolean
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
    classrooms<T extends User$classroomsArgs<ExtArgs> = {}>(args?: Subset<T, User$classroomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly image: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
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
   * User.classrooms
   */
  export type User$classroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    where?: ClassroomWhereInput
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    cursor?: ClassroomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
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
   * Model Classroom
   */

  export type AggregateClassroom = {
    _count: ClassroomCountAggregateOutputType | null
    _avg: ClassroomAvgAggregateOutputType | null
    _sum: ClassroomSumAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  export type ClassroomAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type ClassroomSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type ClassroomMinAggregateOutputType = {
    id: number | null
    name: string | null
    section: string | null
    session: string | null
    currentTerm: $Enums.Term | null
    teacherId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassroomMaxAggregateOutputType = {
    id: number | null
    name: string | null
    section: string | null
    session: string | null
    currentTerm: $Enums.Term | null
    teacherId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassroomCountAggregateOutputType = {
    id: number
    name: number
    section: number
    session: number
    currentTerm: number
    teacherId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassroomAvgAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type ClassroomSumAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type ClassroomMinAggregateInputType = {
    id?: true
    name?: true
    section?: true
    session?: true
    currentTerm?: true
    teacherId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassroomMaxAggregateInputType = {
    id?: true
    name?: true
    section?: true
    session?: true
    currentTerm?: true
    teacherId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassroomCountAggregateInputType = {
    id?: true
    name?: true
    section?: true
    session?: true
    currentTerm?: true
    teacherId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classroom to aggregate.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classrooms
    **/
    _count?: true | ClassroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassroomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassroomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomMaxAggregateInputType
  }

  export type GetClassroomAggregateType<T extends ClassroomAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroom[P]>
      : GetScalarType<T[P], AggregateClassroom[P]>
  }




  export type ClassroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
    orderBy?: ClassroomOrderByWithAggregationInput | ClassroomOrderByWithAggregationInput[]
    by: ClassroomScalarFieldEnum[] | ClassroomScalarFieldEnum
    having?: ClassroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomCountAggregateInputType | true
    _avg?: ClassroomAvgAggregateInputType
    _sum?: ClassroomSumAggregateInputType
    _min?: ClassroomMinAggregateInputType
    _max?: ClassroomMaxAggregateInputType
  }

  export type ClassroomGroupByOutputType = {
    id: number
    name: string
    section: string | null
    session: string
    currentTerm: $Enums.Term
    teacherId: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ClassroomCountAggregateOutputType | null
    _avg: ClassroomAvgAggregateOutputType | null
    _sum: ClassroomSumAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  type GetClassroomGroupByPayload<T extends ClassroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    section?: boolean
    session?: boolean
    currentTerm?: boolean
    teacherId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    students?: boolean | Classroom$studentsArgs<ExtArgs>
    _count?: boolean | ClassroomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    section?: boolean
    session?: boolean
    currentTerm?: boolean
    teacherId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    section?: boolean
    session?: boolean
    currentTerm?: boolean
    teacherId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectScalar = {
    id?: boolean
    name?: boolean
    section?: boolean
    session?: boolean
    currentTerm?: boolean
    teacherId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "section" | "session" | "currentTerm" | "teacherId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["classroom"]>
  export type ClassroomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    students?: boolean | Classroom$studentsArgs<ExtArgs>
    _count?: boolean | ClassroomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassroomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClassroomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClassroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classroom"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      section: string | null
      session: string
      currentTerm: $Enums.Term
      teacherId: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classroom"]>
    composites: {}
  }

  type ClassroomGetPayload<S extends boolean | null | undefined | ClassroomDefaultArgs> = $Result.GetResult<Prisma.$ClassroomPayload, S>

  type ClassroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomCountAggregateInputType | true
    }

  export interface ClassroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classroom'], meta: { name: 'Classroom' } }
    /**
     * Find zero or one Classroom that matches the filter.
     * @param {ClassroomFindUniqueArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomFindUniqueArgs>(args: SelectSubset<T, ClassroomFindUniqueArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classroom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomFindUniqueOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classroom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomFindFirstArgs>(args?: SelectSubset<T, ClassroomFindFirstArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classroom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classrooms
     * const classrooms = await prisma.classroom.findMany()
     * 
     * // Get first 10 Classrooms
     * const classrooms = await prisma.classroom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomWithIdOnly = await prisma.classroom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomFindManyArgs>(args?: SelectSubset<T, ClassroomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classroom.
     * @param {ClassroomCreateArgs} args - Arguments to create a Classroom.
     * @example
     * // Create one Classroom
     * const Classroom = await prisma.classroom.create({
     *   data: {
     *     // ... data to create a Classroom
     *   }
     * })
     * 
     */
    create<T extends ClassroomCreateArgs>(args: SelectSubset<T, ClassroomCreateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classrooms.
     * @param {ClassroomCreateManyArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomCreateManyArgs>(args?: SelectSubset<T, ClassroomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classrooms and returns the data saved in the database.
     * @param {ClassroomCreateManyAndReturnArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classrooms and only return the `id`
     * const classroomWithIdOnly = await prisma.classroom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classroom.
     * @param {ClassroomDeleteArgs} args - Arguments to delete one Classroom.
     * @example
     * // Delete one Classroom
     * const Classroom = await prisma.classroom.delete({
     *   where: {
     *     // ... filter to delete one Classroom
     *   }
     * })
     * 
     */
    delete<T extends ClassroomDeleteArgs>(args: SelectSubset<T, ClassroomDeleteArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classroom.
     * @param {ClassroomUpdateArgs} args - Arguments to update one Classroom.
     * @example
     * // Update one Classroom
     * const classroom = await prisma.classroom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomUpdateArgs>(args: SelectSubset<T, ClassroomUpdateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classrooms.
     * @param {ClassroomDeleteManyArgs} args - Arguments to filter Classrooms to delete.
     * @example
     * // Delete a few Classrooms
     * const { count } = await prisma.classroom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomDeleteManyArgs>(args?: SelectSubset<T, ClassroomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomUpdateManyArgs>(args: SelectSubset<T, ClassroomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms and returns the data updated in the database.
     * @param {ClassroomUpdateManyAndReturnArgs} args - Arguments to update many Classrooms.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classrooms and only return the `id`
     * const classroomWithIdOnly = await prisma.classroom.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassroomUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classroom.
     * @param {ClassroomUpsertArgs} args - Arguments to update or create a Classroom.
     * @example
     * // Update or create a Classroom
     * const classroom = await prisma.classroom.upsert({
     *   create: {
     *     // ... data to create a Classroom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classroom we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomUpsertArgs>(args: SelectSubset<T, ClassroomUpsertArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomCountArgs} args - Arguments to filter Classrooms to count.
     * @example
     * // Count the number of Classrooms
     * const count = await prisma.classroom.count({
     *   where: {
     *     // ... the filter for the Classrooms we want to count
     *   }
     * })
    **/
    count<T extends ClassroomCountArgs>(
      args?: Subset<T, ClassroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassroomAggregateArgs>(args: Subset<T, ClassroomAggregateArgs>): Prisma.PrismaPromise<GetClassroomAggregateType<T>>

    /**
     * Group by Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomGroupByArgs} args - Group by arguments.
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
      T extends ClassroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classroom model
   */
  readonly fields: ClassroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classroom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Classroom$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Classroom model
   */
  interface ClassroomFieldRefs {
    readonly id: FieldRef<"Classroom", 'Int'>
    readonly name: FieldRef<"Classroom", 'String'>
    readonly section: FieldRef<"Classroom", 'String'>
    readonly session: FieldRef<"Classroom", 'String'>
    readonly currentTerm: FieldRef<"Classroom", 'Term'>
    readonly teacherId: FieldRef<"Classroom", 'Int'>
    readonly isActive: FieldRef<"Classroom", 'Boolean'>
    readonly createdAt: FieldRef<"Classroom", 'DateTime'>
    readonly updatedAt: FieldRef<"Classroom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Classroom findUnique
   */
  export type ClassroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findUniqueOrThrow
   */
  export type ClassroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findFirst
   */
  export type ClassroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findFirstOrThrow
   */
  export type ClassroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findMany
   */
  export type ClassroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classrooms to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom create
   */
  export type ClassroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The data needed to create a Classroom.
     */
    data: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
  }

  /**
   * Classroom createMany
   */
  export type ClassroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classroom createManyAndReturn
   */
  export type ClassroomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classroom update
   */
  export type ClassroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The data needed to update a Classroom.
     */
    data: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
    /**
     * Choose, which Classroom to update.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom updateMany
   */
  export type ClassroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
  }

  /**
   * Classroom updateManyAndReturn
   */
  export type ClassroomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classroom upsert
   */
  export type ClassroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The filter to search for the Classroom to update in case it exists.
     */
    where: ClassroomWhereUniqueInput
    /**
     * In case the Classroom found by the `where` argument doesn't exist, create a new Classroom with this data.
     */
    create: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
    /**
     * In case the Classroom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
  }

  /**
   * Classroom delete
   */
  export type ClassroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter which Classroom to delete.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom deleteMany
   */
  export type ClassroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classrooms to delete
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to delete.
     */
    limit?: number
  }

  /**
   * Classroom.students
   */
  export type Classroom$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Classroom without action
   */
  export type ClassroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    classroomId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    classroomId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    admissionNo: string | null
    firstName: string | null
    lastName: string | null
    otherNames: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    image: string | null
    classroomId: number | null
    guardianName: string | null
    guardianPhone: string | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    admissionNo: string | null
    firstName: string | null
    lastName: string | null
    otherNames: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    image: string | null
    classroomId: number | null
    guardianName: string | null
    guardianPhone: string | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    admissionNo: number
    firstName: number
    lastName: number
    otherNames: number
    gender: number
    dateOfBirth: number
    image: number
    classroomId: number
    guardianName: number
    guardianPhone: number
    address: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    classroomId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    classroomId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    admissionNo?: true
    firstName?: true
    lastName?: true
    otherNames?: true
    gender?: true
    dateOfBirth?: true
    image?: true
    classroomId?: true
    guardianName?: true
    guardianPhone?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    admissionNo?: true
    firstName?: true
    lastName?: true
    otherNames?: true
    gender?: true
    dateOfBirth?: true
    image?: true
    classroomId?: true
    guardianName?: true
    guardianPhone?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    admissionNo?: true
    firstName?: true
    lastName?: true
    otherNames?: true
    gender?: true
    dateOfBirth?: true
    image?: true
    classroomId?: true
    guardianName?: true
    guardianPhone?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    admissionNo: string
    firstName: string
    lastName: string
    otherNames: string | null
    gender: $Enums.Gender
    dateOfBirth: Date | null
    image: string | null
    classroomId: number
    guardianName: string | null
    guardianPhone: string | null
    address: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admissionNo?: boolean
    firstName?: boolean
    lastName?: boolean
    otherNames?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    image?: boolean
    classroomId?: boolean
    guardianName?: boolean
    guardianPhone?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    results?: boolean | Student$resultsArgs<ExtArgs>
    subjects?: boolean | Student$subjectsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admissionNo?: boolean
    firstName?: boolean
    lastName?: boolean
    otherNames?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    image?: boolean
    classroomId?: boolean
    guardianName?: boolean
    guardianPhone?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admissionNo?: boolean
    firstName?: boolean
    lastName?: boolean
    otherNames?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    image?: boolean
    classroomId?: boolean
    guardianName?: boolean
    guardianPhone?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    admissionNo?: boolean
    firstName?: boolean
    lastName?: boolean
    otherNames?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    image?: boolean
    classroomId?: boolean
    guardianName?: boolean
    guardianPhone?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admissionNo" | "firstName" | "lastName" | "otherNames" | "gender" | "dateOfBirth" | "image" | "classroomId" | "guardianName" | "guardianPhone" | "address" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
    results?: boolean | Student$resultsArgs<ExtArgs>
    subjects?: boolean | Student$subjectsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      classroom: Prisma.$ClassroomPayload<ExtArgs>
      results: Prisma.$ResultPayload<ExtArgs>[]
      subjects: Prisma.$StudentSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      admissionNo: string
      firstName: string
      lastName: string
      otherNames: string | null
      gender: $Enums.Gender
      dateOfBirth: Date | null
      image: string | null
      classroomId: number
      guardianName: string | null
      guardianPhone: string | null
      address: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classroom<T extends ClassroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomDefaultArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    results<T extends Student$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Student$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subjects<T extends Student$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Student$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly admissionNo: FieldRef<"Student", 'String'>
    readonly firstName: FieldRef<"Student", 'String'>
    readonly lastName: FieldRef<"Student", 'String'>
    readonly otherNames: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'Gender'>
    readonly dateOfBirth: FieldRef<"Student", 'DateTime'>
    readonly image: FieldRef<"Student", 'String'>
    readonly classroomId: FieldRef<"Student", 'Int'>
    readonly guardianName: FieldRef<"Student", 'String'>
    readonly guardianPhone: FieldRef<"Student", 'String'>
    readonly address: FieldRef<"Student", 'String'>
    readonly isActive: FieldRef<"Student", 'Boolean'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.results
   */
  export type Student$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Student.subjects
   */
  export type Student$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    cursor?: StudentSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Result
   */

  export type AggregateResult = {
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    timesSchoolOpened: number | null
    timesPresent: number | null
    timesAbsent: number | null
    totalScore: number | null
    averageScore: number | null
    classPosition: number | null
    totalStudents: number | null
    createdBy: number | null
  }

  export type ResultSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    timesSchoolOpened: number | null
    timesPresent: number | null
    timesAbsent: number | null
    totalScore: number | null
    averageScore: number | null
    classPosition: number | null
    totalStudents: number | null
    createdBy: number | null
  }

  export type ResultMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    term: $Enums.Term | null
    session: string | null
    timesSchoolOpened: number | null
    timesPresent: number | null
    timesAbsent: number | null
    teacherComment: string | null
    principalComment: string | null
    totalScore: number | null
    averageScore: number | null
    classPosition: number | null
    totalStudents: number | null
    isPublished: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: number | null
  }

  export type ResultMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    term: $Enums.Term | null
    session: string | null
    timesSchoolOpened: number | null
    timesPresent: number | null
    timesAbsent: number | null
    teacherComment: string | null
    principalComment: string | null
    totalScore: number | null
    averageScore: number | null
    classPosition: number | null
    totalStudents: number | null
    isPublished: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: number | null
  }

  export type ResultCountAggregateOutputType = {
    id: number
    studentId: number
    term: number
    session: number
    timesSchoolOpened: number
    timesPresent: number
    timesAbsent: number
    teacherComment: number
    principalComment: number
    psychomotorRatings: number
    affectiveDomain: number
    totalScore: number
    averageScore: number
    classPosition: number
    totalStudents: number
    isPublished: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    createdBy: number
    _all: number
  }


  export type ResultAvgAggregateInputType = {
    id?: true
    studentId?: true
    timesSchoolOpened?: true
    timesPresent?: true
    timesAbsent?: true
    totalScore?: true
    averageScore?: true
    classPosition?: true
    totalStudents?: true
    createdBy?: true
  }

  export type ResultSumAggregateInputType = {
    id?: true
    studentId?: true
    timesSchoolOpened?: true
    timesPresent?: true
    timesAbsent?: true
    totalScore?: true
    averageScore?: true
    classPosition?: true
    totalStudents?: true
    createdBy?: true
  }

  export type ResultMinAggregateInputType = {
    id?: true
    studentId?: true
    term?: true
    session?: true
    timesSchoolOpened?: true
    timesPresent?: true
    timesAbsent?: true
    teacherComment?: true
    principalComment?: true
    totalScore?: true
    averageScore?: true
    classPosition?: true
    totalStudents?: true
    isPublished?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type ResultMaxAggregateInputType = {
    id?: true
    studentId?: true
    term?: true
    session?: true
    timesSchoolOpened?: true
    timesPresent?: true
    timesAbsent?: true
    teacherComment?: true
    principalComment?: true
    totalScore?: true
    averageScore?: true
    classPosition?: true
    totalStudents?: true
    isPublished?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type ResultCountAggregateInputType = {
    id?: true
    studentId?: true
    term?: true
    session?: true
    timesSchoolOpened?: true
    timesPresent?: true
    timesAbsent?: true
    teacherComment?: true
    principalComment?: true
    psychomotorRatings?: true
    affectiveDomain?: true
    totalScore?: true
    averageScore?: true
    classPosition?: true
    totalStudents?: true
    isPublished?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    _all?: true
  }

  export type ResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Result to aggregate.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Results
    **/
    _count?: true | ResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultMaxAggregateInputType
  }

  export type GetResultAggregateType<T extends ResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResult[P]>
      : GetScalarType<T[P], AggregateResult[P]>
  }




  export type ResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithAggregationInput | ResultOrderByWithAggregationInput[]
    by: ResultScalarFieldEnum[] | ResultScalarFieldEnum
    having?: ResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultCountAggregateInputType | true
    _avg?: ResultAvgAggregateInputType
    _sum?: ResultSumAggregateInputType
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }

  export type ResultGroupByOutputType = {
    id: number
    studentId: number
    term: $Enums.Term
    session: string
    timesSchoolOpened: number
    timesPresent: number
    timesAbsent: number
    teacherComment: string | null
    principalComment: string | null
    psychomotorRatings: JsonValue | null
    affectiveDomain: JsonValue | null
    totalScore: number
    averageScore: number
    classPosition: number | null
    totalStudents: number | null
    isPublished: boolean
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    createdBy: number | null
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  type GetResultGroupByPayload<T extends ResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResultGroupByOutputType[P]>
        }
      >
    >


  export type ResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    term?: boolean
    session?: boolean
    timesSchoolOpened?: boolean
    timesPresent?: boolean
    timesAbsent?: boolean
    teacherComment?: boolean
    principalComment?: boolean
    psychomotorRatings?: boolean
    affectiveDomain?: boolean
    totalScore?: boolean
    averageScore?: boolean
    classPosition?: boolean
    totalStudents?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subjects?: boolean | Result$subjectsArgs<ExtArgs>
    _count?: boolean | ResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    term?: boolean
    session?: boolean
    timesSchoolOpened?: boolean
    timesPresent?: boolean
    timesAbsent?: boolean
    teacherComment?: boolean
    principalComment?: boolean
    psychomotorRatings?: boolean
    affectiveDomain?: boolean
    totalScore?: boolean
    averageScore?: boolean
    classPosition?: boolean
    totalStudents?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    term?: boolean
    session?: boolean
    timesSchoolOpened?: boolean
    timesPresent?: boolean
    timesAbsent?: boolean
    teacherComment?: boolean
    principalComment?: boolean
    psychomotorRatings?: boolean
    affectiveDomain?: boolean
    totalScore?: boolean
    averageScore?: boolean
    classPosition?: boolean
    totalStudents?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectScalar = {
    id?: boolean
    studentId?: boolean
    term?: boolean
    session?: boolean
    timesSchoolOpened?: boolean
    timesPresent?: boolean
    timesAbsent?: boolean
    teacherComment?: boolean
    principalComment?: boolean
    psychomotorRatings?: boolean
    affectiveDomain?: boolean
    totalScore?: boolean
    averageScore?: boolean
    classPosition?: boolean
    totalStudents?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }

  export type ResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "term" | "session" | "timesSchoolOpened" | "timesPresent" | "timesAbsent" | "teacherComment" | "principalComment" | "psychomotorRatings" | "affectiveDomain" | "totalScore" | "averageScore" | "classPosition" | "totalStudents" | "isPublished" | "publishedAt" | "createdAt" | "updatedAt" | "createdBy", ExtArgs["result"]["result"]>
  export type ResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subjects?: boolean | Result$subjectsArgs<ExtArgs>
    _count?: boolean | ResultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type ResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $ResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Result"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      subjects: Prisma.$SubjectScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      term: $Enums.Term
      session: string
      timesSchoolOpened: number
      timesPresent: number
      timesAbsent: number
      teacherComment: string | null
      principalComment: string | null
      psychomotorRatings: Prisma.JsonValue | null
      affectiveDomain: Prisma.JsonValue | null
      totalScore: number
      averageScore: number
      classPosition: number | null
      totalStudents: number | null
      isPublished: boolean
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
      createdBy: number | null
    }, ExtArgs["result"]["result"]>
    composites: {}
  }

  type ResultGetPayload<S extends boolean | null | undefined | ResultDefaultArgs> = $Result.GetResult<Prisma.$ResultPayload, S>

  type ResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultCountAggregateInputType | true
    }

  export interface ResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Result'], meta: { name: 'Result' } }
    /**
     * Find zero or one Result that matches the filter.
     * @param {ResultFindUniqueArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultFindUniqueArgs>(args: SelectSubset<T, ResultFindUniqueArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Result that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultFindUniqueOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultFindFirstArgs>(args?: SelectSubset<T, ResultFindFirstArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.result.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.result.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultWithIdOnly = await prisma.result.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultFindManyArgs>(args?: SelectSubset<T, ResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Result.
     * @param {ResultCreateArgs} args - Arguments to create a Result.
     * @example
     * // Create one Result
     * const Result = await prisma.result.create({
     *   data: {
     *     // ... data to create a Result
     *   }
     * })
     * 
     */
    create<T extends ResultCreateArgs>(args: SelectSubset<T, ResultCreateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Results.
     * @param {ResultCreateManyArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultCreateManyArgs>(args?: SelectSubset<T, ResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Results and returns the data saved in the database.
     * @param {ResultCreateManyAndReturnArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Results and only return the `id`
     * const resultWithIdOnly = await prisma.result.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Result.
     * @param {ResultDeleteArgs} args - Arguments to delete one Result.
     * @example
     * // Delete one Result
     * const Result = await prisma.result.delete({
     *   where: {
     *     // ... filter to delete one Result
     *   }
     * })
     * 
     */
    delete<T extends ResultDeleteArgs>(args: SelectSubset<T, ResultDeleteArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Result.
     * @param {ResultUpdateArgs} args - Arguments to update one Result.
     * @example
     * // Update one Result
     * const result = await prisma.result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultUpdateArgs>(args: SelectSubset<T, ResultUpdateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Results.
     * @param {ResultDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultDeleteManyArgs>(args?: SelectSubset<T, ResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultUpdateManyArgs>(args: SelectSubset<T, ResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results and returns the data updated in the database.
     * @param {ResultUpdateManyAndReturnArgs} args - Arguments to update many Results.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Results and only return the `id`
     * const resultWithIdOnly = await prisma.result.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Result.
     * @param {ResultUpsertArgs} args - Arguments to update or create a Result.
     * @example
     * // Update or create a Result
     * const result = await prisma.result.upsert({
     *   create: {
     *     // ... data to create a Result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Result we want to update
     *   }
     * })
     */
    upsert<T extends ResultUpsertArgs>(args: SelectSubset<T, ResultUpsertArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.result.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultCountArgs>(
      args?: Subset<T, ResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResultAggregateArgs>(args: Subset<T, ResultAggregateArgs>): Prisma.PrismaPromise<GetResultAggregateType<T>>

    /**
     * Group by Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultGroupByArgs} args - Group by arguments.
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
      T extends ResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultGroupByArgs['orderBy'] }
        : { orderBy?: ResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Result model
   */
  readonly fields: ResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subjects<T extends Result$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Result$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Result model
   */
  interface ResultFieldRefs {
    readonly id: FieldRef<"Result", 'Int'>
    readonly studentId: FieldRef<"Result", 'Int'>
    readonly term: FieldRef<"Result", 'Term'>
    readonly session: FieldRef<"Result", 'String'>
    readonly timesSchoolOpened: FieldRef<"Result", 'Int'>
    readonly timesPresent: FieldRef<"Result", 'Int'>
    readonly timesAbsent: FieldRef<"Result", 'Int'>
    readonly teacherComment: FieldRef<"Result", 'String'>
    readonly principalComment: FieldRef<"Result", 'String'>
    readonly psychomotorRatings: FieldRef<"Result", 'Json'>
    readonly affectiveDomain: FieldRef<"Result", 'Json'>
    readonly totalScore: FieldRef<"Result", 'Float'>
    readonly averageScore: FieldRef<"Result", 'Float'>
    readonly classPosition: FieldRef<"Result", 'Int'>
    readonly totalStudents: FieldRef<"Result", 'Int'>
    readonly isPublished: FieldRef<"Result", 'Boolean'>
    readonly publishedAt: FieldRef<"Result", 'DateTime'>
    readonly createdAt: FieldRef<"Result", 'DateTime'>
    readonly updatedAt: FieldRef<"Result", 'DateTime'>
    readonly createdBy: FieldRef<"Result", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Result findUnique
   */
  export type ResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findUniqueOrThrow
   */
  export type ResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findFirst
   */
  export type ResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findFirstOrThrow
   */
  export type ResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findMany
   */
  export type ResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result create
   */
  export type ResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to create a Result.
     */
    data: XOR<ResultCreateInput, ResultUncheckedCreateInput>
  }

  /**
   * Result createMany
   */
  export type ResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Result createManyAndReturn
   */
  export type ResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result update
   */
  export type ResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to update a Result.
     */
    data: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
    /**
     * Choose, which Result to update.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result updateMany
   */
  export type ResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
  }

  /**
   * Result updateManyAndReturn
   */
  export type ResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result upsert
   */
  export type ResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The filter to search for the Result to update in case it exists.
     */
    where: ResultWhereUniqueInput
    /**
     * In case the Result found by the `where` argument doesn't exist, create a new Result with this data.
     */
    create: XOR<ResultCreateInput, ResultUncheckedCreateInput>
    /**
     * In case the Result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
  }

  /**
   * Result delete
   */
  export type ResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter which Result to delete.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result deleteMany
   */
  export type ResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Results to delete
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to delete.
     */
    limit?: number
  }

  /**
   * Result.subjects
   */
  export type Result$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreInclude<ExtArgs> | null
    where?: SubjectScoreWhereInput
    orderBy?: SubjectScoreOrderByWithRelationInput | SubjectScoreOrderByWithRelationInput[]
    cursor?: SubjectScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScoreScalarFieldEnum | SubjectScoreScalarFieldEnum[]
  }

  /**
   * Result without action
   */
  export type ResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
  }


  /**
   * Model SubjectScore
   */

  export type AggregateSubjectScore = {
    _count: SubjectScoreCountAggregateOutputType | null
    _avg: SubjectScoreAvgAggregateOutputType | null
    _sum: SubjectScoreSumAggregateOutputType | null
    _min: SubjectScoreMinAggregateOutputType | null
    _max: SubjectScoreMaxAggregateOutputType | null
  }

  export type SubjectScoreAvgAggregateOutputType = {
    id: number | null
    resultId: number | null
    caScore: number | null
    examScore: number | null
    totalScore: number | null
    classAverage: number | null
    highestInClass: number | null
    lowestInClass: number | null
  }

  export type SubjectScoreSumAggregateOutputType = {
    id: number | null
    resultId: number | null
    caScore: number | null
    examScore: number | null
    totalScore: number | null
    classAverage: number | null
    highestInClass: number | null
    lowestInClass: number | null
  }

  export type SubjectScoreMinAggregateOutputType = {
    id: number | null
    resultId: number | null
    subject: string | null
    caScore: number | null
    examScore: number | null
    totalScore: number | null
    grade: $Enums.Grade | null
    remark: string | null
    classAverage: number | null
    highestInClass: number | null
    lowestInClass: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectScoreMaxAggregateOutputType = {
    id: number | null
    resultId: number | null
    subject: string | null
    caScore: number | null
    examScore: number | null
    totalScore: number | null
    grade: $Enums.Grade | null
    remark: string | null
    classAverage: number | null
    highestInClass: number | null
    lowestInClass: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectScoreCountAggregateOutputType = {
    id: number
    resultId: number
    subject: number
    caScore: number
    examScore: number
    totalScore: number
    grade: number
    remark: number
    classAverage: number
    highestInClass: number
    lowestInClass: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubjectScoreAvgAggregateInputType = {
    id?: true
    resultId?: true
    caScore?: true
    examScore?: true
    totalScore?: true
    classAverage?: true
    highestInClass?: true
    lowestInClass?: true
  }

  export type SubjectScoreSumAggregateInputType = {
    id?: true
    resultId?: true
    caScore?: true
    examScore?: true
    totalScore?: true
    classAverage?: true
    highestInClass?: true
    lowestInClass?: true
  }

  export type SubjectScoreMinAggregateInputType = {
    id?: true
    resultId?: true
    subject?: true
    caScore?: true
    examScore?: true
    totalScore?: true
    grade?: true
    remark?: true
    classAverage?: true
    highestInClass?: true
    lowestInClass?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectScoreMaxAggregateInputType = {
    id?: true
    resultId?: true
    subject?: true
    caScore?: true
    examScore?: true
    totalScore?: true
    grade?: true
    remark?: true
    classAverage?: true
    highestInClass?: true
    lowestInClass?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectScoreCountAggregateInputType = {
    id?: true
    resultId?: true
    subject?: true
    caScore?: true
    examScore?: true
    totalScore?: true
    grade?: true
    remark?: true
    classAverage?: true
    highestInClass?: true
    lowestInClass?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubjectScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectScore to aggregate.
     */
    where?: SubjectScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectScores to fetch.
     */
    orderBy?: SubjectScoreOrderByWithRelationInput | SubjectScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubjectScores
    **/
    _count?: true | SubjectScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectScoreMaxAggregateInputType
  }

  export type GetSubjectScoreAggregateType<T extends SubjectScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjectScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjectScore[P]>
      : GetScalarType<T[P], AggregateSubjectScore[P]>
  }




  export type SubjectScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectScoreWhereInput
    orderBy?: SubjectScoreOrderByWithAggregationInput | SubjectScoreOrderByWithAggregationInput[]
    by: SubjectScoreScalarFieldEnum[] | SubjectScoreScalarFieldEnum
    having?: SubjectScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectScoreCountAggregateInputType | true
    _avg?: SubjectScoreAvgAggregateInputType
    _sum?: SubjectScoreSumAggregateInputType
    _min?: SubjectScoreMinAggregateInputType
    _max?: SubjectScoreMaxAggregateInputType
  }

  export type SubjectScoreGroupByOutputType = {
    id: number
    resultId: number
    subject: string
    caScore: number
    examScore: number
    totalScore: number
    grade: $Enums.Grade | null
    remark: string | null
    classAverage: number | null
    highestInClass: number | null
    lowestInClass: number | null
    createdAt: Date
    updatedAt: Date
    _count: SubjectScoreCountAggregateOutputType | null
    _avg: SubjectScoreAvgAggregateOutputType | null
    _sum: SubjectScoreSumAggregateOutputType | null
    _min: SubjectScoreMinAggregateOutputType | null
    _max: SubjectScoreMaxAggregateOutputType | null
  }

  type GetSubjectScoreGroupByPayload<T extends SubjectScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectScoreGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectScoreGroupByOutputType[P]>
        }
      >
    >


  export type SubjectScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    subject?: boolean
    caScore?: boolean
    examScore?: boolean
    totalScore?: boolean
    grade?: boolean
    remark?: boolean
    classAverage?: boolean
    highestInClass?: boolean
    lowestInClass?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjectScore"]>

  export type SubjectScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    subject?: boolean
    caScore?: boolean
    examScore?: boolean
    totalScore?: boolean
    grade?: boolean
    remark?: boolean
    classAverage?: boolean
    highestInClass?: boolean
    lowestInClass?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjectScore"]>

  export type SubjectScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resultId?: boolean
    subject?: boolean
    caScore?: boolean
    examScore?: boolean
    totalScore?: boolean
    grade?: boolean
    remark?: boolean
    classAverage?: boolean
    highestInClass?: boolean
    lowestInClass?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjectScore"]>

  export type SubjectScoreSelectScalar = {
    id?: boolean
    resultId?: boolean
    subject?: boolean
    caScore?: boolean
    examScore?: boolean
    totalScore?: boolean
    grade?: boolean
    remark?: boolean
    classAverage?: boolean
    highestInClass?: boolean
    lowestInClass?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubjectScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resultId" | "subject" | "caScore" | "examScore" | "totalScore" | "grade" | "remark" | "classAverage" | "highestInClass" | "lowestInClass" | "createdAt" | "updatedAt", ExtArgs["result"]["subjectScore"]>
  export type SubjectScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }
  export type SubjectScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }
  export type SubjectScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | ResultDefaultArgs<ExtArgs>
  }

  export type $SubjectScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubjectScore"
    objects: {
      result: Prisma.$ResultPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      resultId: number
      subject: string
      caScore: number
      examScore: number
      totalScore: number
      grade: $Enums.Grade | null
      remark: string | null
      classAverage: number | null
      highestInClass: number | null
      lowestInClass: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subjectScore"]>
    composites: {}
  }

  type SubjectScoreGetPayload<S extends boolean | null | undefined | SubjectScoreDefaultArgs> = $Result.GetResult<Prisma.$SubjectScorePayload, S>

  type SubjectScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectScoreCountAggregateInputType | true
    }

  export interface SubjectScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubjectScore'], meta: { name: 'SubjectScore' } }
    /**
     * Find zero or one SubjectScore that matches the filter.
     * @param {SubjectScoreFindUniqueArgs} args - Arguments to find a SubjectScore
     * @example
     * // Get one SubjectScore
     * const subjectScore = await prisma.subjectScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectScoreFindUniqueArgs>(args: SelectSubset<T, SubjectScoreFindUniqueArgs<ExtArgs>>): Prisma__SubjectScoreClient<$Result.GetResult<Prisma.$SubjectScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubjectScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectScoreFindUniqueOrThrowArgs} args - Arguments to find a SubjectScore
     * @example
     * // Get one SubjectScore
     * const subjectScore = await prisma.subjectScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectScoreClient<$Result.GetResult<Prisma.$SubjectScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubjectScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectScoreFindFirstArgs} args - Arguments to find a SubjectScore
     * @example
     * // Get one SubjectScore
     * const subjectScore = await prisma.subjectScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectScoreFindFirstArgs>(args?: SelectSubset<T, SubjectScoreFindFirstArgs<ExtArgs>>): Prisma__SubjectScoreClient<$Result.GetResult<Prisma.$SubjectScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubjectScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectScoreFindFirstOrThrowArgs} args - Arguments to find a SubjectScore
     * @example
     * // Get one SubjectScore
     * const subjectScore = await prisma.subjectScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectScoreClient<$Result.GetResult<Prisma.$SubjectScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubjectScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubjectScores
     * const subjectScores = await prisma.subjectScore.findMany()
     * 
     * // Get first 10 SubjectScores
     * const subjectScores = await prisma.subjectScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectScoreWithIdOnly = await prisma.subjectScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectScoreFindManyArgs>(args?: SelectSubset<T, SubjectScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubjectScore.
     * @param {SubjectScoreCreateArgs} args - Arguments to create a SubjectScore.
     * @example
     * // Create one SubjectScore
     * const SubjectScore = await prisma.subjectScore.create({
     *   data: {
     *     // ... data to create a SubjectScore
     *   }
     * })
     * 
     */
    create<T extends SubjectScoreCreateArgs>(args: SelectSubset<T, SubjectScoreCreateArgs<ExtArgs>>): Prisma__SubjectScoreClient<$Result.GetResult<Prisma.$SubjectScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubjectScores.
     * @param {SubjectScoreCreateManyArgs} args - Arguments to create many SubjectScores.
     * @example
     * // Create many SubjectScores
     * const subjectScore = await prisma.subjectScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectScoreCreateManyArgs>(args?: SelectSubset<T, SubjectScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubjectScores and returns the data saved in the database.
     * @param {SubjectScoreCreateManyAndReturnArgs} args - Arguments to create many SubjectScores.
     * @example
     * // Create many SubjectScores
     * const subjectScore = await prisma.subjectScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubjectScores and only return the `id`
     * const subjectScoreWithIdOnly = await prisma.subjectScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubjectScore.
     * @param {SubjectScoreDeleteArgs} args - Arguments to delete one SubjectScore.
     * @example
     * // Delete one SubjectScore
     * const SubjectScore = await prisma.subjectScore.delete({
     *   where: {
     *     // ... filter to delete one SubjectScore
     *   }
     * })
     * 
     */
    delete<T extends SubjectScoreDeleteArgs>(args: SelectSubset<T, SubjectScoreDeleteArgs<ExtArgs>>): Prisma__SubjectScoreClient<$Result.GetResult<Prisma.$SubjectScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubjectScore.
     * @param {SubjectScoreUpdateArgs} args - Arguments to update one SubjectScore.
     * @example
     * // Update one SubjectScore
     * const subjectScore = await prisma.subjectScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectScoreUpdateArgs>(args: SelectSubset<T, SubjectScoreUpdateArgs<ExtArgs>>): Prisma__SubjectScoreClient<$Result.GetResult<Prisma.$SubjectScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubjectScores.
     * @param {SubjectScoreDeleteManyArgs} args - Arguments to filter SubjectScores to delete.
     * @example
     * // Delete a few SubjectScores
     * const { count } = await prisma.subjectScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectScoreDeleteManyArgs>(args?: SelectSubset<T, SubjectScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubjectScores
     * const subjectScore = await prisma.subjectScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectScoreUpdateManyArgs>(args: SelectSubset<T, SubjectScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectScores and returns the data updated in the database.
     * @param {SubjectScoreUpdateManyAndReturnArgs} args - Arguments to update many SubjectScores.
     * @example
     * // Update many SubjectScores
     * const subjectScore = await prisma.subjectScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubjectScores and only return the `id`
     * const subjectScoreWithIdOnly = await prisma.subjectScore.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubjectScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubjectScore.
     * @param {SubjectScoreUpsertArgs} args - Arguments to update or create a SubjectScore.
     * @example
     * // Update or create a SubjectScore
     * const subjectScore = await prisma.subjectScore.upsert({
     *   create: {
     *     // ... data to create a SubjectScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubjectScore we want to update
     *   }
     * })
     */
    upsert<T extends SubjectScoreUpsertArgs>(args: SelectSubset<T, SubjectScoreUpsertArgs<ExtArgs>>): Prisma__SubjectScoreClient<$Result.GetResult<Prisma.$SubjectScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubjectScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectScoreCountArgs} args - Arguments to filter SubjectScores to count.
     * @example
     * // Count the number of SubjectScores
     * const count = await prisma.subjectScore.count({
     *   where: {
     *     // ... the filter for the SubjectScores we want to count
     *   }
     * })
    **/
    count<T extends SubjectScoreCountArgs>(
      args?: Subset<T, SubjectScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubjectScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectScoreAggregateArgs>(args: Subset<T, SubjectScoreAggregateArgs>): Prisma.PrismaPromise<GetSubjectScoreAggregateType<T>>

    /**
     * Group by SubjectScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectScoreGroupByArgs} args - Group by arguments.
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
      T extends SubjectScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectScoreGroupByArgs['orderBy'] }
        : { orderBy?: SubjectScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubjectScore model
   */
  readonly fields: SubjectScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubjectScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    result<T extends ResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResultDefaultArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubjectScore model
   */
  interface SubjectScoreFieldRefs {
    readonly id: FieldRef<"SubjectScore", 'Int'>
    readonly resultId: FieldRef<"SubjectScore", 'Int'>
    readonly subject: FieldRef<"SubjectScore", 'String'>
    readonly caScore: FieldRef<"SubjectScore", 'Float'>
    readonly examScore: FieldRef<"SubjectScore", 'Float'>
    readonly totalScore: FieldRef<"SubjectScore", 'Float'>
    readonly grade: FieldRef<"SubjectScore", 'Grade'>
    readonly remark: FieldRef<"SubjectScore", 'String'>
    readonly classAverage: FieldRef<"SubjectScore", 'Float'>
    readonly highestInClass: FieldRef<"SubjectScore", 'Float'>
    readonly lowestInClass: FieldRef<"SubjectScore", 'Float'>
    readonly createdAt: FieldRef<"SubjectScore", 'DateTime'>
    readonly updatedAt: FieldRef<"SubjectScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubjectScore findUnique
   */
  export type SubjectScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreInclude<ExtArgs> | null
    /**
     * Filter, which SubjectScore to fetch.
     */
    where: SubjectScoreWhereUniqueInput
  }

  /**
   * SubjectScore findUniqueOrThrow
   */
  export type SubjectScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreInclude<ExtArgs> | null
    /**
     * Filter, which SubjectScore to fetch.
     */
    where: SubjectScoreWhereUniqueInput
  }

  /**
   * SubjectScore findFirst
   */
  export type SubjectScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreInclude<ExtArgs> | null
    /**
     * Filter, which SubjectScore to fetch.
     */
    where?: SubjectScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectScores to fetch.
     */
    orderBy?: SubjectScoreOrderByWithRelationInput | SubjectScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectScores.
     */
    cursor?: SubjectScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectScores.
     */
    distinct?: SubjectScoreScalarFieldEnum | SubjectScoreScalarFieldEnum[]
  }

  /**
   * SubjectScore findFirstOrThrow
   */
  export type SubjectScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreInclude<ExtArgs> | null
    /**
     * Filter, which SubjectScore to fetch.
     */
    where?: SubjectScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectScores to fetch.
     */
    orderBy?: SubjectScoreOrderByWithRelationInput | SubjectScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectScores.
     */
    cursor?: SubjectScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectScores.
     */
    distinct?: SubjectScoreScalarFieldEnum | SubjectScoreScalarFieldEnum[]
  }

  /**
   * SubjectScore findMany
   */
  export type SubjectScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreInclude<ExtArgs> | null
    /**
     * Filter, which SubjectScores to fetch.
     */
    where?: SubjectScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectScores to fetch.
     */
    orderBy?: SubjectScoreOrderByWithRelationInput | SubjectScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubjectScores.
     */
    cursor?: SubjectScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectScores.
     */
    skip?: number
    distinct?: SubjectScoreScalarFieldEnum | SubjectScoreScalarFieldEnum[]
  }

  /**
   * SubjectScore create
   */
  export type SubjectScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a SubjectScore.
     */
    data: XOR<SubjectScoreCreateInput, SubjectScoreUncheckedCreateInput>
  }

  /**
   * SubjectScore createMany
   */
  export type SubjectScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubjectScores.
     */
    data: SubjectScoreCreateManyInput | SubjectScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectScore createManyAndReturn
   */
  export type SubjectScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * The data used to create many SubjectScores.
     */
    data: SubjectScoreCreateManyInput | SubjectScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubjectScore update
   */
  export type SubjectScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a SubjectScore.
     */
    data: XOR<SubjectScoreUpdateInput, SubjectScoreUncheckedUpdateInput>
    /**
     * Choose, which SubjectScore to update.
     */
    where: SubjectScoreWhereUniqueInput
  }

  /**
   * SubjectScore updateMany
   */
  export type SubjectScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubjectScores.
     */
    data: XOR<SubjectScoreUpdateManyMutationInput, SubjectScoreUncheckedUpdateManyInput>
    /**
     * Filter which SubjectScores to update
     */
    where?: SubjectScoreWhereInput
    /**
     * Limit how many SubjectScores to update.
     */
    limit?: number
  }

  /**
   * SubjectScore updateManyAndReturn
   */
  export type SubjectScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * The data used to update SubjectScores.
     */
    data: XOR<SubjectScoreUpdateManyMutationInput, SubjectScoreUncheckedUpdateManyInput>
    /**
     * Filter which SubjectScores to update
     */
    where?: SubjectScoreWhereInput
    /**
     * Limit how many SubjectScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubjectScore upsert
   */
  export type SubjectScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the SubjectScore to update in case it exists.
     */
    where: SubjectScoreWhereUniqueInput
    /**
     * In case the SubjectScore found by the `where` argument doesn't exist, create a new SubjectScore with this data.
     */
    create: XOR<SubjectScoreCreateInput, SubjectScoreUncheckedCreateInput>
    /**
     * In case the SubjectScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectScoreUpdateInput, SubjectScoreUncheckedUpdateInput>
  }

  /**
   * SubjectScore delete
   */
  export type SubjectScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreInclude<ExtArgs> | null
    /**
     * Filter which SubjectScore to delete.
     */
    where: SubjectScoreWhereUniqueInput
  }

  /**
   * SubjectScore deleteMany
   */
  export type SubjectScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectScores to delete
     */
    where?: SubjectScoreWhereInput
    /**
     * Limit how many SubjectScores to delete.
     */
    limit?: number
  }

  /**
   * SubjectScore without action
   */
  export type SubjectScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectScore
     */
    select?: SubjectScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectScore
     */
    omit?: SubjectScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectScoreInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
    caMaxScore: number | null
    examMaxScore: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
    caMaxScore: number | null
    examMaxScore: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    caMaxScore: number | null
    examMaxScore: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    caMaxScore: number | null
    examMaxScore: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    code: number
    caMaxScore: number
    examMaxScore: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
    caMaxScore?: true
    examMaxScore?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
    caMaxScore?: true
    examMaxScore?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    caMaxScore?: true
    examMaxScore?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    caMaxScore?: true
    examMaxScore?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    caMaxScore?: true
    examMaxScore?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    name: string
    code: string | null
    caMaxScore: number
    examMaxScore: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    caMaxScore?: boolean
    examMaxScore?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    students?: boolean | Subject$studentsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    caMaxScore?: boolean
    examMaxScore?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    caMaxScore?: boolean
    examMaxScore?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    caMaxScore?: boolean
    examMaxScore?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "caMaxScore" | "examMaxScore" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Subject$studentsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      students: Prisma.$StudentSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string | null
      caMaxScore: number
      examMaxScore: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Subject$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'Int'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly code: FieldRef<"Subject", 'String'>
    readonly caMaxScore: FieldRef<"Subject", 'Float'>
    readonly examMaxScore: FieldRef<"Subject", 'Float'>
    readonly isActive: FieldRef<"Subject", 'Boolean'>
    readonly createdAt: FieldRef<"Subject", 'DateTime'>
    readonly updatedAt: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.students
   */
  export type Subject$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    cursor?: StudentSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model StudentSubject
   */

  export type AggregateStudentSubject = {
    _count: StudentSubjectCountAggregateOutputType | null
    _avg: StudentSubjectAvgAggregateOutputType | null
    _sum: StudentSubjectSumAggregateOutputType | null
    _min: StudentSubjectMinAggregateOutputType | null
    _max: StudentSubjectMaxAggregateOutputType | null
  }

  export type StudentSubjectAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
  }

  export type StudentSubjectSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
  }

  export type StudentSubjectMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    createdAt: Date | null
  }

  export type StudentSubjectMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    createdAt: Date | null
  }

  export type StudentSubjectCountAggregateOutputType = {
    id: number
    studentId: number
    subjectId: number
    createdAt: number
    _all: number
  }


  export type StudentSubjectAvgAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
  }

  export type StudentSubjectSumAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
  }

  export type StudentSubjectMinAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    createdAt?: true
  }

  export type StudentSubjectMaxAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    createdAt?: true
  }

  export type StudentSubjectCountAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    createdAt?: true
    _all?: true
  }

  export type StudentSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSubject to aggregate.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentSubjects
    **/
    _count?: true | StudentSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentSubjectMaxAggregateInputType
  }

  export type GetStudentSubjectAggregateType<T extends StudentSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentSubject[P]>
      : GetScalarType<T[P], AggregateStudentSubject[P]>
  }




  export type StudentSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithAggregationInput | StudentSubjectOrderByWithAggregationInput[]
    by: StudentSubjectScalarFieldEnum[] | StudentSubjectScalarFieldEnum
    having?: StudentSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentSubjectCountAggregateInputType | true
    _avg?: StudentSubjectAvgAggregateInputType
    _sum?: StudentSubjectSumAggregateInputType
    _min?: StudentSubjectMinAggregateInputType
    _max?: StudentSubjectMaxAggregateInputType
  }

  export type StudentSubjectGroupByOutputType = {
    id: number
    studentId: number
    subjectId: number
    createdAt: Date
    _count: StudentSubjectCountAggregateOutputType | null
    _avg: StudentSubjectAvgAggregateOutputType | null
    _sum: StudentSubjectSumAggregateOutputType | null
    _min: StudentSubjectMinAggregateOutputType | null
    _max: StudentSubjectMaxAggregateOutputType | null
  }

  type GetStudentSubjectGroupByPayload<T extends StudentSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], StudentSubjectGroupByOutputType[P]>
        }
      >
    >


  export type StudentSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectScalar = {
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    createdAt?: boolean
  }

  export type StudentSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "subjectId" | "createdAt", ExtArgs["result"]["studentSubject"]>
  export type StudentSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type StudentSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type StudentSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $StudentSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentSubject"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      subjectId: number
      createdAt: Date
    }, ExtArgs["result"]["studentSubject"]>
    composites: {}
  }

  type StudentSubjectGetPayload<S extends boolean | null | undefined | StudentSubjectDefaultArgs> = $Result.GetResult<Prisma.$StudentSubjectPayload, S>

  type StudentSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentSubjectCountAggregateInputType | true
    }

  export interface StudentSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentSubject'], meta: { name: 'StudentSubject' } }
    /**
     * Find zero or one StudentSubject that matches the filter.
     * @param {StudentSubjectFindUniqueArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentSubjectFindUniqueArgs>(args: SelectSubset<T, StudentSubjectFindUniqueArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentSubjectFindUniqueOrThrowArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindFirstArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentSubjectFindFirstArgs>(args?: SelectSubset<T, StudentSubjectFindFirstArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindFirstOrThrowArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentSubjects
     * const studentSubjects = await prisma.studentSubject.findMany()
     * 
     * // Get first 10 StudentSubjects
     * const studentSubjects = await prisma.studentSubject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentSubjectWithIdOnly = await prisma.studentSubject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentSubjectFindManyArgs>(args?: SelectSubset<T, StudentSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentSubject.
     * @param {StudentSubjectCreateArgs} args - Arguments to create a StudentSubject.
     * @example
     * // Create one StudentSubject
     * const StudentSubject = await prisma.studentSubject.create({
     *   data: {
     *     // ... data to create a StudentSubject
     *   }
     * })
     * 
     */
    create<T extends StudentSubjectCreateArgs>(args: SelectSubset<T, StudentSubjectCreateArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentSubjects.
     * @param {StudentSubjectCreateManyArgs} args - Arguments to create many StudentSubjects.
     * @example
     * // Create many StudentSubjects
     * const studentSubject = await prisma.studentSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentSubjectCreateManyArgs>(args?: SelectSubset<T, StudentSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentSubjects and returns the data saved in the database.
     * @param {StudentSubjectCreateManyAndReturnArgs} args - Arguments to create many StudentSubjects.
     * @example
     * // Create many StudentSubjects
     * const studentSubject = await prisma.studentSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentSubjects and only return the `id`
     * const studentSubjectWithIdOnly = await prisma.studentSubject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentSubject.
     * @param {StudentSubjectDeleteArgs} args - Arguments to delete one StudentSubject.
     * @example
     * // Delete one StudentSubject
     * const StudentSubject = await prisma.studentSubject.delete({
     *   where: {
     *     // ... filter to delete one StudentSubject
     *   }
     * })
     * 
     */
    delete<T extends StudentSubjectDeleteArgs>(args: SelectSubset<T, StudentSubjectDeleteArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentSubject.
     * @param {StudentSubjectUpdateArgs} args - Arguments to update one StudentSubject.
     * @example
     * // Update one StudentSubject
     * const studentSubject = await prisma.studentSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentSubjectUpdateArgs>(args: SelectSubset<T, StudentSubjectUpdateArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentSubjects.
     * @param {StudentSubjectDeleteManyArgs} args - Arguments to filter StudentSubjects to delete.
     * @example
     * // Delete a few StudentSubjects
     * const { count } = await prisma.studentSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentSubjectDeleteManyArgs>(args?: SelectSubset<T, StudentSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentSubjects
     * const studentSubject = await prisma.studentSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentSubjectUpdateManyArgs>(args: SelectSubset<T, StudentSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSubjects and returns the data updated in the database.
     * @param {StudentSubjectUpdateManyAndReturnArgs} args - Arguments to update many StudentSubjects.
     * @example
     * // Update many StudentSubjects
     * const studentSubject = await prisma.studentSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentSubjects and only return the `id`
     * const studentSubjectWithIdOnly = await prisma.studentSubject.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentSubject.
     * @param {StudentSubjectUpsertArgs} args - Arguments to update or create a StudentSubject.
     * @example
     * // Update or create a StudentSubject
     * const studentSubject = await prisma.studentSubject.upsert({
     *   create: {
     *     // ... data to create a StudentSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentSubject we want to update
     *   }
     * })
     */
    upsert<T extends StudentSubjectUpsertArgs>(args: SelectSubset<T, StudentSubjectUpsertArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectCountArgs} args - Arguments to filter StudentSubjects to count.
     * @example
     * // Count the number of StudentSubjects
     * const count = await prisma.studentSubject.count({
     *   where: {
     *     // ... the filter for the StudentSubjects we want to count
     *   }
     * })
    **/
    count<T extends StudentSubjectCountArgs>(
      args?: Subset<T, StudentSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentSubjectAggregateArgs>(args: Subset<T, StudentSubjectAggregateArgs>): Prisma.PrismaPromise<GetStudentSubjectAggregateType<T>>

    /**
     * Group by StudentSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectGroupByArgs} args - Group by arguments.
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
      T extends StudentSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentSubjectGroupByArgs['orderBy'] }
        : { orderBy?: StudentSubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentSubject model
   */
  readonly fields: StudentSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentSubject model
   */
  interface StudentSubjectFieldRefs {
    readonly id: FieldRef<"StudentSubject", 'Int'>
    readonly studentId: FieldRef<"StudentSubject", 'Int'>
    readonly subjectId: FieldRef<"StudentSubject", 'Int'>
    readonly createdAt: FieldRef<"StudentSubject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentSubject findUnique
   */
  export type StudentSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject findUniqueOrThrow
   */
  export type StudentSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject findFirst
   */
  export type StudentSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSubjects.
     */
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject findFirstOrThrow
   */
  export type StudentSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSubjects.
     */
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject findMany
   */
  export type StudentSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubjects to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject create
   */
  export type StudentSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentSubject.
     */
    data: XOR<StudentSubjectCreateInput, StudentSubjectUncheckedCreateInput>
  }

  /**
   * StudentSubject createMany
   */
  export type StudentSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentSubjects.
     */
    data: StudentSubjectCreateManyInput | StudentSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentSubject createManyAndReturn
   */
  export type StudentSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many StudentSubjects.
     */
    data: StudentSubjectCreateManyInput | StudentSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSubject update
   */
  export type StudentSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentSubject.
     */
    data: XOR<StudentSubjectUpdateInput, StudentSubjectUncheckedUpdateInput>
    /**
     * Choose, which StudentSubject to update.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject updateMany
   */
  export type StudentSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentSubjects.
     */
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyInput>
    /**
     * Filter which StudentSubjects to update
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to update.
     */
    limit?: number
  }

  /**
   * StudentSubject updateManyAndReturn
   */
  export type StudentSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * The data used to update StudentSubjects.
     */
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyInput>
    /**
     * Filter which StudentSubjects to update
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSubject upsert
   */
  export type StudentSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentSubject to update in case it exists.
     */
    where: StudentSubjectWhereUniqueInput
    /**
     * In case the StudentSubject found by the `where` argument doesn't exist, create a new StudentSubject with this data.
     */
    create: XOR<StudentSubjectCreateInput, StudentSubjectUncheckedCreateInput>
    /**
     * In case the StudentSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentSubjectUpdateInput, StudentSubjectUncheckedUpdateInput>
  }

  /**
   * StudentSubject delete
   */
  export type StudentSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter which StudentSubject to delete.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject deleteMany
   */
  export type StudentSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSubjects to delete
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to delete.
     */
    limit?: number
  }

  /**
   * StudentSubject without action
   */
  export type StudentSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
  }


  /**
   * Model GradeScale
   */

  export type AggregateGradeScale = {
    _count: GradeScaleCountAggregateOutputType | null
    _avg: GradeScaleAvgAggregateOutputType | null
    _sum: GradeScaleSumAggregateOutputType | null
    _min: GradeScaleMinAggregateOutputType | null
    _max: GradeScaleMaxAggregateOutputType | null
  }

  export type GradeScaleAvgAggregateOutputType = {
    id: number | null
    minScore: number | null
    maxScore: number | null
  }

  export type GradeScaleSumAggregateOutputType = {
    id: number | null
    minScore: number | null
    maxScore: number | null
  }

  export type GradeScaleMinAggregateOutputType = {
    id: number | null
    grade: $Enums.Grade | null
    minScore: number | null
    maxScore: number | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GradeScaleMaxAggregateOutputType = {
    id: number | null
    grade: $Enums.Grade | null
    minScore: number | null
    maxScore: number | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GradeScaleCountAggregateOutputType = {
    id: number
    grade: number
    minScore: number
    maxScore: number
    remark: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GradeScaleAvgAggregateInputType = {
    id?: true
    minScore?: true
    maxScore?: true
  }

  export type GradeScaleSumAggregateInputType = {
    id?: true
    minScore?: true
    maxScore?: true
  }

  export type GradeScaleMinAggregateInputType = {
    id?: true
    grade?: true
    minScore?: true
    maxScore?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GradeScaleMaxAggregateInputType = {
    id?: true
    grade?: true
    minScore?: true
    maxScore?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GradeScaleCountAggregateInputType = {
    id?: true
    grade?: true
    minScore?: true
    maxScore?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GradeScaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GradeScale to aggregate.
     */
    where?: GradeScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradeScales to fetch.
     */
    orderBy?: GradeScaleOrderByWithRelationInput | GradeScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradeScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradeScales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradeScales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GradeScales
    **/
    _count?: true | GradeScaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradeScaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradeScaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradeScaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradeScaleMaxAggregateInputType
  }

  export type GetGradeScaleAggregateType<T extends GradeScaleAggregateArgs> = {
        [P in keyof T & keyof AggregateGradeScale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGradeScale[P]>
      : GetScalarType<T[P], AggregateGradeScale[P]>
  }




  export type GradeScaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeScaleWhereInput
    orderBy?: GradeScaleOrderByWithAggregationInput | GradeScaleOrderByWithAggregationInput[]
    by: GradeScaleScalarFieldEnum[] | GradeScaleScalarFieldEnum
    having?: GradeScaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradeScaleCountAggregateInputType | true
    _avg?: GradeScaleAvgAggregateInputType
    _sum?: GradeScaleSumAggregateInputType
    _min?: GradeScaleMinAggregateInputType
    _max?: GradeScaleMaxAggregateInputType
  }

  export type GradeScaleGroupByOutputType = {
    id: number
    grade: $Enums.Grade
    minScore: number
    maxScore: number
    remark: string
    createdAt: Date
    updatedAt: Date
    _count: GradeScaleCountAggregateOutputType | null
    _avg: GradeScaleAvgAggregateOutputType | null
    _sum: GradeScaleSumAggregateOutputType | null
    _min: GradeScaleMinAggregateOutputType | null
    _max: GradeScaleMaxAggregateOutputType | null
  }

  type GetGradeScaleGroupByPayload<T extends GradeScaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradeScaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradeScaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradeScaleGroupByOutputType[P]>
            : GetScalarType<T[P], GradeScaleGroupByOutputType[P]>
        }
      >
    >


  export type GradeScaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grade?: boolean
    minScore?: boolean
    maxScore?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gradeScale"]>

  export type GradeScaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grade?: boolean
    minScore?: boolean
    maxScore?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gradeScale"]>

  export type GradeScaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grade?: boolean
    minScore?: boolean
    maxScore?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gradeScale"]>

  export type GradeScaleSelectScalar = {
    id?: boolean
    grade?: boolean
    minScore?: boolean
    maxScore?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GradeScaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "grade" | "minScore" | "maxScore" | "remark" | "createdAt" | "updatedAt", ExtArgs["result"]["gradeScale"]>

  export type $GradeScalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GradeScale"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      grade: $Enums.Grade
      minScore: number
      maxScore: number
      remark: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gradeScale"]>
    composites: {}
  }

  type GradeScaleGetPayload<S extends boolean | null | undefined | GradeScaleDefaultArgs> = $Result.GetResult<Prisma.$GradeScalePayload, S>

  type GradeScaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GradeScaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GradeScaleCountAggregateInputType | true
    }

  export interface GradeScaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GradeScale'], meta: { name: 'GradeScale' } }
    /**
     * Find zero or one GradeScale that matches the filter.
     * @param {GradeScaleFindUniqueArgs} args - Arguments to find a GradeScale
     * @example
     * // Get one GradeScale
     * const gradeScale = await prisma.gradeScale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradeScaleFindUniqueArgs>(args: SelectSubset<T, GradeScaleFindUniqueArgs<ExtArgs>>): Prisma__GradeScaleClient<$Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GradeScale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GradeScaleFindUniqueOrThrowArgs} args - Arguments to find a GradeScale
     * @example
     * // Get one GradeScale
     * const gradeScale = await prisma.gradeScale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradeScaleFindUniqueOrThrowArgs>(args: SelectSubset<T, GradeScaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradeScaleClient<$Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GradeScale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeScaleFindFirstArgs} args - Arguments to find a GradeScale
     * @example
     * // Get one GradeScale
     * const gradeScale = await prisma.gradeScale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradeScaleFindFirstArgs>(args?: SelectSubset<T, GradeScaleFindFirstArgs<ExtArgs>>): Prisma__GradeScaleClient<$Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GradeScale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeScaleFindFirstOrThrowArgs} args - Arguments to find a GradeScale
     * @example
     * // Get one GradeScale
     * const gradeScale = await prisma.gradeScale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradeScaleFindFirstOrThrowArgs>(args?: SelectSubset<T, GradeScaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradeScaleClient<$Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GradeScales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeScaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GradeScales
     * const gradeScales = await prisma.gradeScale.findMany()
     * 
     * // Get first 10 GradeScales
     * const gradeScales = await prisma.gradeScale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradeScaleWithIdOnly = await prisma.gradeScale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradeScaleFindManyArgs>(args?: SelectSubset<T, GradeScaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GradeScale.
     * @param {GradeScaleCreateArgs} args - Arguments to create a GradeScale.
     * @example
     * // Create one GradeScale
     * const GradeScale = await prisma.gradeScale.create({
     *   data: {
     *     // ... data to create a GradeScale
     *   }
     * })
     * 
     */
    create<T extends GradeScaleCreateArgs>(args: SelectSubset<T, GradeScaleCreateArgs<ExtArgs>>): Prisma__GradeScaleClient<$Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GradeScales.
     * @param {GradeScaleCreateManyArgs} args - Arguments to create many GradeScales.
     * @example
     * // Create many GradeScales
     * const gradeScale = await prisma.gradeScale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradeScaleCreateManyArgs>(args?: SelectSubset<T, GradeScaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GradeScales and returns the data saved in the database.
     * @param {GradeScaleCreateManyAndReturnArgs} args - Arguments to create many GradeScales.
     * @example
     * // Create many GradeScales
     * const gradeScale = await prisma.gradeScale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GradeScales and only return the `id`
     * const gradeScaleWithIdOnly = await prisma.gradeScale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GradeScaleCreateManyAndReturnArgs>(args?: SelectSubset<T, GradeScaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GradeScale.
     * @param {GradeScaleDeleteArgs} args - Arguments to delete one GradeScale.
     * @example
     * // Delete one GradeScale
     * const GradeScale = await prisma.gradeScale.delete({
     *   where: {
     *     // ... filter to delete one GradeScale
     *   }
     * })
     * 
     */
    delete<T extends GradeScaleDeleteArgs>(args: SelectSubset<T, GradeScaleDeleteArgs<ExtArgs>>): Prisma__GradeScaleClient<$Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GradeScale.
     * @param {GradeScaleUpdateArgs} args - Arguments to update one GradeScale.
     * @example
     * // Update one GradeScale
     * const gradeScale = await prisma.gradeScale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradeScaleUpdateArgs>(args: SelectSubset<T, GradeScaleUpdateArgs<ExtArgs>>): Prisma__GradeScaleClient<$Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GradeScales.
     * @param {GradeScaleDeleteManyArgs} args - Arguments to filter GradeScales to delete.
     * @example
     * // Delete a few GradeScales
     * const { count } = await prisma.gradeScale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradeScaleDeleteManyArgs>(args?: SelectSubset<T, GradeScaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GradeScales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeScaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GradeScales
     * const gradeScale = await prisma.gradeScale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradeScaleUpdateManyArgs>(args: SelectSubset<T, GradeScaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GradeScales and returns the data updated in the database.
     * @param {GradeScaleUpdateManyAndReturnArgs} args - Arguments to update many GradeScales.
     * @example
     * // Update many GradeScales
     * const gradeScale = await prisma.gradeScale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GradeScales and only return the `id`
     * const gradeScaleWithIdOnly = await prisma.gradeScale.updateManyAndReturn({
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
    updateManyAndReturn<T extends GradeScaleUpdateManyAndReturnArgs>(args: SelectSubset<T, GradeScaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GradeScale.
     * @param {GradeScaleUpsertArgs} args - Arguments to update or create a GradeScale.
     * @example
     * // Update or create a GradeScale
     * const gradeScale = await prisma.gradeScale.upsert({
     *   create: {
     *     // ... data to create a GradeScale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GradeScale we want to update
     *   }
     * })
     */
    upsert<T extends GradeScaleUpsertArgs>(args: SelectSubset<T, GradeScaleUpsertArgs<ExtArgs>>): Prisma__GradeScaleClient<$Result.GetResult<Prisma.$GradeScalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GradeScales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeScaleCountArgs} args - Arguments to filter GradeScales to count.
     * @example
     * // Count the number of GradeScales
     * const count = await prisma.gradeScale.count({
     *   where: {
     *     // ... the filter for the GradeScales we want to count
     *   }
     * })
    **/
    count<T extends GradeScaleCountArgs>(
      args?: Subset<T, GradeScaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeScaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GradeScale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeScaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GradeScaleAggregateArgs>(args: Subset<T, GradeScaleAggregateArgs>): Prisma.PrismaPromise<GetGradeScaleAggregateType<T>>

    /**
     * Group by GradeScale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeScaleGroupByArgs} args - Group by arguments.
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
      T extends GradeScaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradeScaleGroupByArgs['orderBy'] }
        : { orderBy?: GradeScaleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GradeScaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeScaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GradeScale model
   */
  readonly fields: GradeScaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GradeScale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradeScaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GradeScale model
   */
  interface GradeScaleFieldRefs {
    readonly id: FieldRef<"GradeScale", 'Int'>
    readonly grade: FieldRef<"GradeScale", 'Grade'>
    readonly minScore: FieldRef<"GradeScale", 'Float'>
    readonly maxScore: FieldRef<"GradeScale", 'Float'>
    readonly remark: FieldRef<"GradeScale", 'String'>
    readonly createdAt: FieldRef<"GradeScale", 'DateTime'>
    readonly updatedAt: FieldRef<"GradeScale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GradeScale findUnique
   */
  export type GradeScaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeScale
     */
    select?: GradeScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeScale
     */
    omit?: GradeScaleOmit<ExtArgs> | null
    /**
     * Filter, which GradeScale to fetch.
     */
    where: GradeScaleWhereUniqueInput
  }

  /**
   * GradeScale findUniqueOrThrow
   */
  export type GradeScaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeScale
     */
    select?: GradeScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeScale
     */
    omit?: GradeScaleOmit<ExtArgs> | null
    /**
     * Filter, which GradeScale to fetch.
     */
    where: GradeScaleWhereUniqueInput
  }

  /**
   * GradeScale findFirst
   */
  export type GradeScaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeScale
     */
    select?: GradeScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeScale
     */
    omit?: GradeScaleOmit<ExtArgs> | null
    /**
     * Filter, which GradeScale to fetch.
     */
    where?: GradeScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradeScales to fetch.
     */
    orderBy?: GradeScaleOrderByWithRelationInput | GradeScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GradeScales.
     */
    cursor?: GradeScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradeScales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradeScales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradeScales.
     */
    distinct?: GradeScaleScalarFieldEnum | GradeScaleScalarFieldEnum[]
  }

  /**
   * GradeScale findFirstOrThrow
   */
  export type GradeScaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeScale
     */
    select?: GradeScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeScale
     */
    omit?: GradeScaleOmit<ExtArgs> | null
    /**
     * Filter, which GradeScale to fetch.
     */
    where?: GradeScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradeScales to fetch.
     */
    orderBy?: GradeScaleOrderByWithRelationInput | GradeScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GradeScales.
     */
    cursor?: GradeScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradeScales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradeScales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradeScales.
     */
    distinct?: GradeScaleScalarFieldEnum | GradeScaleScalarFieldEnum[]
  }

  /**
   * GradeScale findMany
   */
  export type GradeScaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeScale
     */
    select?: GradeScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeScale
     */
    omit?: GradeScaleOmit<ExtArgs> | null
    /**
     * Filter, which GradeScales to fetch.
     */
    where?: GradeScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradeScales to fetch.
     */
    orderBy?: GradeScaleOrderByWithRelationInput | GradeScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GradeScales.
     */
    cursor?: GradeScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradeScales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradeScales.
     */
    skip?: number
    distinct?: GradeScaleScalarFieldEnum | GradeScaleScalarFieldEnum[]
  }

  /**
   * GradeScale create
   */
  export type GradeScaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeScale
     */
    select?: GradeScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeScale
     */
    omit?: GradeScaleOmit<ExtArgs> | null
    /**
     * The data needed to create a GradeScale.
     */
    data: XOR<GradeScaleCreateInput, GradeScaleUncheckedCreateInput>
  }

  /**
   * GradeScale createMany
   */
  export type GradeScaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GradeScales.
     */
    data: GradeScaleCreateManyInput | GradeScaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GradeScale createManyAndReturn
   */
  export type GradeScaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeScale
     */
    select?: GradeScaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GradeScale
     */
    omit?: GradeScaleOmit<ExtArgs> | null
    /**
     * The data used to create many GradeScales.
     */
    data: GradeScaleCreateManyInput | GradeScaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GradeScale update
   */
  export type GradeScaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeScale
     */
    select?: GradeScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeScale
     */
    omit?: GradeScaleOmit<ExtArgs> | null
    /**
     * The data needed to update a GradeScale.
     */
    data: XOR<GradeScaleUpdateInput, GradeScaleUncheckedUpdateInput>
    /**
     * Choose, which GradeScale to update.
     */
    where: GradeScaleWhereUniqueInput
  }

  /**
   * GradeScale updateMany
   */
  export type GradeScaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GradeScales.
     */
    data: XOR<GradeScaleUpdateManyMutationInput, GradeScaleUncheckedUpdateManyInput>
    /**
     * Filter which GradeScales to update
     */
    where?: GradeScaleWhereInput
    /**
     * Limit how many GradeScales to update.
     */
    limit?: number
  }

  /**
   * GradeScale updateManyAndReturn
   */
  export type GradeScaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeScale
     */
    select?: GradeScaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GradeScale
     */
    omit?: GradeScaleOmit<ExtArgs> | null
    /**
     * The data used to update GradeScales.
     */
    data: XOR<GradeScaleUpdateManyMutationInput, GradeScaleUncheckedUpdateManyInput>
    /**
     * Filter which GradeScales to update
     */
    where?: GradeScaleWhereInput
    /**
     * Limit how many GradeScales to update.
     */
    limit?: number
  }

  /**
   * GradeScale upsert
   */
  export type GradeScaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeScale
     */
    select?: GradeScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeScale
     */
    omit?: GradeScaleOmit<ExtArgs> | null
    /**
     * The filter to search for the GradeScale to update in case it exists.
     */
    where: GradeScaleWhereUniqueInput
    /**
     * In case the GradeScale found by the `where` argument doesn't exist, create a new GradeScale with this data.
     */
    create: XOR<GradeScaleCreateInput, GradeScaleUncheckedCreateInput>
    /**
     * In case the GradeScale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradeScaleUpdateInput, GradeScaleUncheckedUpdateInput>
  }

  /**
   * GradeScale delete
   */
  export type GradeScaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeScale
     */
    select?: GradeScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeScale
     */
    omit?: GradeScaleOmit<ExtArgs> | null
    /**
     * Filter which GradeScale to delete.
     */
    where: GradeScaleWhereUniqueInput
  }

  /**
   * GradeScale deleteMany
   */
  export type GradeScaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GradeScales to delete
     */
    where?: GradeScaleWhereInput
    /**
     * Limit how many GradeScales to delete.
     */
    limit?: number
  }

  /**
   * GradeScale without action
   */
  export type GradeScaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeScale
     */
    select?: GradeScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeScale
     */
    omit?: GradeScaleOmit<ExtArgs> | null
  }


  /**
   * Model SchoolSettings
   */

  export type AggregateSchoolSettings = {
    _count: SchoolSettingsCountAggregateOutputType | null
    _avg: SchoolSettingsAvgAggregateOutputType | null
    _sum: SchoolSettingsSumAggregateOutputType | null
    _min: SchoolSettingsMinAggregateOutputType | null
    _max: SchoolSettingsMaxAggregateOutputType | null
  }

  export type SchoolSettingsAvgAggregateOutputType = {
    id: number | null
    passmark: number | null
  }

  export type SchoolSettingsSumAggregateOutputType = {
    id: number | null
    passmark: number | null
  }

  export type SchoolSettingsMinAggregateOutputType = {
    id: number | null
    schoolName: string | null
    schoolAddress: string | null
    schoolPhone: string | null
    schoolEmail: string | null
    schoolLogo: string | null
    currentSession: string | null
    currentTerm: $Enums.Term | null
    nextTermBegins: Date | null
    passmark: number | null
    updatedAt: Date | null
  }

  export type SchoolSettingsMaxAggregateOutputType = {
    id: number | null
    schoolName: string | null
    schoolAddress: string | null
    schoolPhone: string | null
    schoolEmail: string | null
    schoolLogo: string | null
    currentSession: string | null
    currentTerm: $Enums.Term | null
    nextTermBegins: Date | null
    passmark: number | null
    updatedAt: Date | null
  }

  export type SchoolSettingsCountAggregateOutputType = {
    id: number
    schoolName: number
    schoolAddress: number
    schoolPhone: number
    schoolEmail: number
    schoolLogo: number
    currentSession: number
    currentTerm: number
    nextTermBegins: number
    passmark: number
    updatedAt: number
    _all: number
  }


  export type SchoolSettingsAvgAggregateInputType = {
    id?: true
    passmark?: true
  }

  export type SchoolSettingsSumAggregateInputType = {
    id?: true
    passmark?: true
  }

  export type SchoolSettingsMinAggregateInputType = {
    id?: true
    schoolName?: true
    schoolAddress?: true
    schoolPhone?: true
    schoolEmail?: true
    schoolLogo?: true
    currentSession?: true
    currentTerm?: true
    nextTermBegins?: true
    passmark?: true
    updatedAt?: true
  }

  export type SchoolSettingsMaxAggregateInputType = {
    id?: true
    schoolName?: true
    schoolAddress?: true
    schoolPhone?: true
    schoolEmail?: true
    schoolLogo?: true
    currentSession?: true
    currentTerm?: true
    nextTermBegins?: true
    passmark?: true
    updatedAt?: true
  }

  export type SchoolSettingsCountAggregateInputType = {
    id?: true
    schoolName?: true
    schoolAddress?: true
    schoolPhone?: true
    schoolEmail?: true
    schoolLogo?: true
    currentSession?: true
    currentTerm?: true
    nextTermBegins?: true
    passmark?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolSettings to aggregate.
     */
    where?: SchoolSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolSettings to fetch.
     */
    orderBy?: SchoolSettingsOrderByWithRelationInput | SchoolSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolSettings
    **/
    _count?: true | SchoolSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolSettingsMaxAggregateInputType
  }

  export type GetSchoolSettingsAggregateType<T extends SchoolSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolSettings[P]>
      : GetScalarType<T[P], AggregateSchoolSettings[P]>
  }




  export type SchoolSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolSettingsWhereInput
    orderBy?: SchoolSettingsOrderByWithAggregationInput | SchoolSettingsOrderByWithAggregationInput[]
    by: SchoolSettingsScalarFieldEnum[] | SchoolSettingsScalarFieldEnum
    having?: SchoolSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolSettingsCountAggregateInputType | true
    _avg?: SchoolSettingsAvgAggregateInputType
    _sum?: SchoolSettingsSumAggregateInputType
    _min?: SchoolSettingsMinAggregateInputType
    _max?: SchoolSettingsMaxAggregateInputType
  }

  export type SchoolSettingsGroupByOutputType = {
    id: number
    schoolName: string
    schoolAddress: string | null
    schoolPhone: string | null
    schoolEmail: string | null
    schoolLogo: string | null
    currentSession: string
    currentTerm: $Enums.Term
    nextTermBegins: Date | null
    passmark: number
    updatedAt: Date
    _count: SchoolSettingsCountAggregateOutputType | null
    _avg: SchoolSettingsAvgAggregateOutputType | null
    _sum: SchoolSettingsSumAggregateOutputType | null
    _min: SchoolSettingsMinAggregateOutputType | null
    _max: SchoolSettingsMaxAggregateOutputType | null
  }

  type GetSchoolSettingsGroupByPayload<T extends SchoolSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolName?: boolean
    schoolAddress?: boolean
    schoolPhone?: boolean
    schoolEmail?: boolean
    schoolLogo?: boolean
    currentSession?: boolean
    currentTerm?: boolean
    nextTermBegins?: boolean
    passmark?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schoolSettings"]>

  export type SchoolSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolName?: boolean
    schoolAddress?: boolean
    schoolPhone?: boolean
    schoolEmail?: boolean
    schoolLogo?: boolean
    currentSession?: boolean
    currentTerm?: boolean
    nextTermBegins?: boolean
    passmark?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schoolSettings"]>

  export type SchoolSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolName?: boolean
    schoolAddress?: boolean
    schoolPhone?: boolean
    schoolEmail?: boolean
    schoolLogo?: boolean
    currentSession?: boolean
    currentTerm?: boolean
    nextTermBegins?: boolean
    passmark?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schoolSettings"]>

  export type SchoolSettingsSelectScalar = {
    id?: boolean
    schoolName?: boolean
    schoolAddress?: boolean
    schoolPhone?: boolean
    schoolEmail?: boolean
    schoolLogo?: boolean
    currentSession?: boolean
    currentTerm?: boolean
    nextTermBegins?: boolean
    passmark?: boolean
    updatedAt?: boolean
  }

  export type SchoolSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolName" | "schoolAddress" | "schoolPhone" | "schoolEmail" | "schoolLogo" | "currentSession" | "currentTerm" | "nextTermBegins" | "passmark" | "updatedAt", ExtArgs["result"]["schoolSettings"]>

  export type $SchoolSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schoolName: string
      schoolAddress: string | null
      schoolPhone: string | null
      schoolEmail: string | null
      schoolLogo: string | null
      currentSession: string
      currentTerm: $Enums.Term
      nextTermBegins: Date | null
      passmark: number
      updatedAt: Date
    }, ExtArgs["result"]["schoolSettings"]>
    composites: {}
  }

  type SchoolSettingsGetPayload<S extends boolean | null | undefined | SchoolSettingsDefaultArgs> = $Result.GetResult<Prisma.$SchoolSettingsPayload, S>

  type SchoolSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolSettingsCountAggregateInputType | true
    }

  export interface SchoolSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolSettings'], meta: { name: 'SchoolSettings' } }
    /**
     * Find zero or one SchoolSettings that matches the filter.
     * @param {SchoolSettingsFindUniqueArgs} args - Arguments to find a SchoolSettings
     * @example
     * // Get one SchoolSettings
     * const schoolSettings = await prisma.schoolSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolSettingsFindUniqueArgs>(args: SelectSubset<T, SchoolSettingsFindUniqueArgs<ExtArgs>>): Prisma__SchoolSettingsClient<$Result.GetResult<Prisma.$SchoolSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SchoolSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolSettingsFindUniqueOrThrowArgs} args - Arguments to find a SchoolSettings
     * @example
     * // Get one SchoolSettings
     * const schoolSettings = await prisma.schoolSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolSettingsClient<$Result.GetResult<Prisma.$SchoolSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSettingsFindFirstArgs} args - Arguments to find a SchoolSettings
     * @example
     * // Get one SchoolSettings
     * const schoolSettings = await prisma.schoolSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolSettingsFindFirstArgs>(args?: SelectSubset<T, SchoolSettingsFindFirstArgs<ExtArgs>>): Prisma__SchoolSettingsClient<$Result.GetResult<Prisma.$SchoolSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSettingsFindFirstOrThrowArgs} args - Arguments to find a SchoolSettings
     * @example
     * // Get one SchoolSettings
     * const schoolSettings = await prisma.schoolSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolSettingsClient<$Result.GetResult<Prisma.$SchoolSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SchoolSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolSettings
     * const schoolSettings = await prisma.schoolSettings.findMany()
     * 
     * // Get first 10 SchoolSettings
     * const schoolSettings = await prisma.schoolSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolSettingsWithIdOnly = await prisma.schoolSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolSettingsFindManyArgs>(args?: SelectSubset<T, SchoolSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SchoolSettings.
     * @param {SchoolSettingsCreateArgs} args - Arguments to create a SchoolSettings.
     * @example
     * // Create one SchoolSettings
     * const SchoolSettings = await prisma.schoolSettings.create({
     *   data: {
     *     // ... data to create a SchoolSettings
     *   }
     * })
     * 
     */
    create<T extends SchoolSettingsCreateArgs>(args: SelectSubset<T, SchoolSettingsCreateArgs<ExtArgs>>): Prisma__SchoolSettingsClient<$Result.GetResult<Prisma.$SchoolSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SchoolSettings.
     * @param {SchoolSettingsCreateManyArgs} args - Arguments to create many SchoolSettings.
     * @example
     * // Create many SchoolSettings
     * const schoolSettings = await prisma.schoolSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolSettingsCreateManyArgs>(args?: SelectSubset<T, SchoolSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchoolSettings and returns the data saved in the database.
     * @param {SchoolSettingsCreateManyAndReturnArgs} args - Arguments to create many SchoolSettings.
     * @example
     * // Create many SchoolSettings
     * const schoolSettings = await prisma.schoolSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchoolSettings and only return the `id`
     * const schoolSettingsWithIdOnly = await prisma.schoolSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SchoolSettings.
     * @param {SchoolSettingsDeleteArgs} args - Arguments to delete one SchoolSettings.
     * @example
     * // Delete one SchoolSettings
     * const SchoolSettings = await prisma.schoolSettings.delete({
     *   where: {
     *     // ... filter to delete one SchoolSettings
     *   }
     * })
     * 
     */
    delete<T extends SchoolSettingsDeleteArgs>(args: SelectSubset<T, SchoolSettingsDeleteArgs<ExtArgs>>): Prisma__SchoolSettingsClient<$Result.GetResult<Prisma.$SchoolSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SchoolSettings.
     * @param {SchoolSettingsUpdateArgs} args - Arguments to update one SchoolSettings.
     * @example
     * // Update one SchoolSettings
     * const schoolSettings = await prisma.schoolSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolSettingsUpdateArgs>(args: SelectSubset<T, SchoolSettingsUpdateArgs<ExtArgs>>): Prisma__SchoolSettingsClient<$Result.GetResult<Prisma.$SchoolSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SchoolSettings.
     * @param {SchoolSettingsDeleteManyArgs} args - Arguments to filter SchoolSettings to delete.
     * @example
     * // Delete a few SchoolSettings
     * const { count } = await prisma.schoolSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolSettingsDeleteManyArgs>(args?: SelectSubset<T, SchoolSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolSettings
     * const schoolSettings = await prisma.schoolSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolSettingsUpdateManyArgs>(args: SelectSubset<T, SchoolSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolSettings and returns the data updated in the database.
     * @param {SchoolSettingsUpdateManyAndReturnArgs} args - Arguments to update many SchoolSettings.
     * @example
     * // Update many SchoolSettings
     * const schoolSettings = await prisma.schoolSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SchoolSettings and only return the `id`
     * const schoolSettingsWithIdOnly = await prisma.schoolSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchoolSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SchoolSettings.
     * @param {SchoolSettingsUpsertArgs} args - Arguments to update or create a SchoolSettings.
     * @example
     * // Update or create a SchoolSettings
     * const schoolSettings = await prisma.schoolSettings.upsert({
     *   create: {
     *     // ... data to create a SchoolSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolSettings we want to update
     *   }
     * })
     */
    upsert<T extends SchoolSettingsUpsertArgs>(args: SelectSubset<T, SchoolSettingsUpsertArgs<ExtArgs>>): Prisma__SchoolSettingsClient<$Result.GetResult<Prisma.$SchoolSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SchoolSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSettingsCountArgs} args - Arguments to filter SchoolSettings to count.
     * @example
     * // Count the number of SchoolSettings
     * const count = await prisma.schoolSettings.count({
     *   where: {
     *     // ... the filter for the SchoolSettings we want to count
     *   }
     * })
    **/
    count<T extends SchoolSettingsCountArgs>(
      args?: Subset<T, SchoolSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolSettingsAggregateArgs>(args: Subset<T, SchoolSettingsAggregateArgs>): Prisma.PrismaPromise<GetSchoolSettingsAggregateType<T>>

    /**
     * Group by SchoolSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSettingsGroupByArgs} args - Group by arguments.
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
      T extends SchoolSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SchoolSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolSettings model
   */
  readonly fields: SchoolSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SchoolSettings model
   */
  interface SchoolSettingsFieldRefs {
    readonly id: FieldRef<"SchoolSettings", 'Int'>
    readonly schoolName: FieldRef<"SchoolSettings", 'String'>
    readonly schoolAddress: FieldRef<"SchoolSettings", 'String'>
    readonly schoolPhone: FieldRef<"SchoolSettings", 'String'>
    readonly schoolEmail: FieldRef<"SchoolSettings", 'String'>
    readonly schoolLogo: FieldRef<"SchoolSettings", 'String'>
    readonly currentSession: FieldRef<"SchoolSettings", 'String'>
    readonly currentTerm: FieldRef<"SchoolSettings", 'Term'>
    readonly nextTermBegins: FieldRef<"SchoolSettings", 'DateTime'>
    readonly passmark: FieldRef<"SchoolSettings", 'Float'>
    readonly updatedAt: FieldRef<"SchoolSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SchoolSettings findUnique
   */
  export type SchoolSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSettings
     */
    select?: SchoolSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSettings
     */
    omit?: SchoolSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SchoolSettings to fetch.
     */
    where: SchoolSettingsWhereUniqueInput
  }

  /**
   * SchoolSettings findUniqueOrThrow
   */
  export type SchoolSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSettings
     */
    select?: SchoolSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSettings
     */
    omit?: SchoolSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SchoolSettings to fetch.
     */
    where: SchoolSettingsWhereUniqueInput
  }

  /**
   * SchoolSettings findFirst
   */
  export type SchoolSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSettings
     */
    select?: SchoolSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSettings
     */
    omit?: SchoolSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SchoolSettings to fetch.
     */
    where?: SchoolSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolSettings to fetch.
     */
    orderBy?: SchoolSettingsOrderByWithRelationInput | SchoolSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolSettings.
     */
    cursor?: SchoolSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolSettings.
     */
    distinct?: SchoolSettingsScalarFieldEnum | SchoolSettingsScalarFieldEnum[]
  }

  /**
   * SchoolSettings findFirstOrThrow
   */
  export type SchoolSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSettings
     */
    select?: SchoolSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSettings
     */
    omit?: SchoolSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SchoolSettings to fetch.
     */
    where?: SchoolSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolSettings to fetch.
     */
    orderBy?: SchoolSettingsOrderByWithRelationInput | SchoolSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolSettings.
     */
    cursor?: SchoolSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolSettings.
     */
    distinct?: SchoolSettingsScalarFieldEnum | SchoolSettingsScalarFieldEnum[]
  }

  /**
   * SchoolSettings findMany
   */
  export type SchoolSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSettings
     */
    select?: SchoolSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSettings
     */
    omit?: SchoolSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SchoolSettings to fetch.
     */
    where?: SchoolSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolSettings to fetch.
     */
    orderBy?: SchoolSettingsOrderByWithRelationInput | SchoolSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolSettings.
     */
    cursor?: SchoolSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolSettings.
     */
    skip?: number
    distinct?: SchoolSettingsScalarFieldEnum | SchoolSettingsScalarFieldEnum[]
  }

  /**
   * SchoolSettings create
   */
  export type SchoolSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSettings
     */
    select?: SchoolSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSettings
     */
    omit?: SchoolSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a SchoolSettings.
     */
    data: XOR<SchoolSettingsCreateInput, SchoolSettingsUncheckedCreateInput>
  }

  /**
   * SchoolSettings createMany
   */
  export type SchoolSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolSettings.
     */
    data: SchoolSettingsCreateManyInput | SchoolSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolSettings createManyAndReturn
   */
  export type SchoolSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSettings
     */
    select?: SchoolSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSettings
     */
    omit?: SchoolSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SchoolSettings.
     */
    data: SchoolSettingsCreateManyInput | SchoolSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolSettings update
   */
  export type SchoolSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSettings
     */
    select?: SchoolSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSettings
     */
    omit?: SchoolSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a SchoolSettings.
     */
    data: XOR<SchoolSettingsUpdateInput, SchoolSettingsUncheckedUpdateInput>
    /**
     * Choose, which SchoolSettings to update.
     */
    where: SchoolSettingsWhereUniqueInput
  }

  /**
   * SchoolSettings updateMany
   */
  export type SchoolSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolSettings.
     */
    data: XOR<SchoolSettingsUpdateManyMutationInput, SchoolSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SchoolSettings to update
     */
    where?: SchoolSettingsWhereInput
    /**
     * Limit how many SchoolSettings to update.
     */
    limit?: number
  }

  /**
   * SchoolSettings updateManyAndReturn
   */
  export type SchoolSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSettings
     */
    select?: SchoolSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSettings
     */
    omit?: SchoolSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SchoolSettings.
     */
    data: XOR<SchoolSettingsUpdateManyMutationInput, SchoolSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SchoolSettings to update
     */
    where?: SchoolSettingsWhereInput
    /**
     * Limit how many SchoolSettings to update.
     */
    limit?: number
  }

  /**
   * SchoolSettings upsert
   */
  export type SchoolSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSettings
     */
    select?: SchoolSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSettings
     */
    omit?: SchoolSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the SchoolSettings to update in case it exists.
     */
    where: SchoolSettingsWhereUniqueInput
    /**
     * In case the SchoolSettings found by the `where` argument doesn't exist, create a new SchoolSettings with this data.
     */
    create: XOR<SchoolSettingsCreateInput, SchoolSettingsUncheckedCreateInput>
    /**
     * In case the SchoolSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolSettingsUpdateInput, SchoolSettingsUncheckedUpdateInput>
  }

  /**
   * SchoolSettings delete
   */
  export type SchoolSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSettings
     */
    select?: SchoolSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSettings
     */
    omit?: SchoolSettingsOmit<ExtArgs> | null
    /**
     * Filter which SchoolSettings to delete.
     */
    where: SchoolSettingsWhereUniqueInput
  }

  /**
   * SchoolSettings deleteMany
   */
  export type SchoolSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolSettings to delete
     */
    where?: SchoolSettingsWhereInput
    /**
     * Limit how many SchoolSettings to delete.
     */
    limit?: number
  }

  /**
   * SchoolSettings without action
   */
  export type SchoolSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSettings
     */
    select?: SchoolSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSettings
     */
    omit?: SchoolSettingsOmit<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    entity: string | null
    entityId: number | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    entity: string | null
    entityId: number | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entity: number
    entityId: number
    changes: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    changes?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    userId: number | null
    action: string
    entity: string
    entityId: number | null
    changes: JsonValue | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    changes?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    changes?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    changes?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    changes?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "entity" | "entityId" | "changes" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      action: string
      entity: string
      entityId: number | null
      changes: Prisma.JsonValue | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly userId: FieldRef<"AuditLog", 'Int'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'Int'>
    readonly changes: FieldRef<"AuditLog", 'Json'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model AuthUser
   */

  export type AggregateAuthUser = {
    _count: AuthUserCountAggregateOutputType | null
    _min: AuthUserMinAggregateOutputType | null
    _max: AuthUserMaxAggregateOutputType | null
  }

  export type AuthUserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthUserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthUserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthUserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthUserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthUserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthUser to aggregate.
     */
    where?: AuthUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: AuthUserOrderByWithRelationInput | AuthUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthUsers
    **/
    _count?: true | AuthUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthUserMaxAggregateInputType
  }

  export type GetAuthUserAggregateType<T extends AuthUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthUser[P]>
      : GetScalarType<T[P], AggregateAuthUser[P]>
  }




  export type AuthUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthUserWhereInput
    orderBy?: AuthUserOrderByWithAggregationInput | AuthUserOrderByWithAggregationInput[]
    by: AuthUserScalarFieldEnum[] | AuthUserScalarFieldEnum
    having?: AuthUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthUserCountAggregateInputType | true
    _min?: AuthUserMinAggregateInputType
    _max?: AuthUserMaxAggregateInputType
  }

  export type AuthUserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: AuthUserCountAggregateOutputType | null
    _min: AuthUserMinAggregateOutputType | null
    _max: AuthUserMaxAggregateOutputType | null
  }

  type GetAuthUserGroupByPayload<T extends AuthUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthUserGroupByOutputType[P]>
            : GetScalarType<T[P], AuthUserGroupByOutputType[P]>
        }
      >
    >


  export type AuthUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | AuthUser$sessionsArgs<ExtArgs>
    accounts?: boolean | AuthUser$accountsArgs<ExtArgs>
    _count?: boolean | AuthUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authUser"]>

  export type AuthUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authUser"]>

  export type AuthUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authUser"]>

  export type AuthUserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["authUser"]>
  export type AuthUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | AuthUser$sessionsArgs<ExtArgs>
    accounts?: boolean | AuthUser$accountsArgs<ExtArgs>
    _count?: boolean | AuthUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthUser"
    objects: {
      sessions: Prisma.$AuthSessionPayload<ExtArgs>[]
      accounts: Prisma.$AuthAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authUser"]>
    composites: {}
  }

  type AuthUserGetPayload<S extends boolean | null | undefined | AuthUserDefaultArgs> = $Result.GetResult<Prisma.$AuthUserPayload, S>

  type AuthUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthUserCountAggregateInputType | true
    }

  export interface AuthUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthUser'], meta: { name: 'AuthUser' } }
    /**
     * Find zero or one AuthUser that matches the filter.
     * @param {AuthUserFindUniqueArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthUserFindUniqueArgs>(args: SelectSubset<T, AuthUserFindUniqueArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthUserFindUniqueOrThrowArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserFindFirstArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthUserFindFirstArgs>(args?: SelectSubset<T, AuthUserFindFirstArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserFindFirstOrThrowArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthUsers
     * const authUsers = await prisma.authUser.findMany()
     * 
     * // Get first 10 AuthUsers
     * const authUsers = await prisma.authUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authUserWithIdOnly = await prisma.authUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthUserFindManyArgs>(args?: SelectSubset<T, AuthUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthUser.
     * @param {AuthUserCreateArgs} args - Arguments to create a AuthUser.
     * @example
     * // Create one AuthUser
     * const AuthUser = await prisma.authUser.create({
     *   data: {
     *     // ... data to create a AuthUser
     *   }
     * })
     * 
     */
    create<T extends AuthUserCreateArgs>(args: SelectSubset<T, AuthUserCreateArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthUsers.
     * @param {AuthUserCreateManyArgs} args - Arguments to create many AuthUsers.
     * @example
     * // Create many AuthUsers
     * const authUser = await prisma.authUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthUserCreateManyArgs>(args?: SelectSubset<T, AuthUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthUsers and returns the data saved in the database.
     * @param {AuthUserCreateManyAndReturnArgs} args - Arguments to create many AuthUsers.
     * @example
     * // Create many AuthUsers
     * const authUser = await prisma.authUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthUsers and only return the `id`
     * const authUserWithIdOnly = await prisma.authUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthUser.
     * @param {AuthUserDeleteArgs} args - Arguments to delete one AuthUser.
     * @example
     * // Delete one AuthUser
     * const AuthUser = await prisma.authUser.delete({
     *   where: {
     *     // ... filter to delete one AuthUser
     *   }
     * })
     * 
     */
    delete<T extends AuthUserDeleteArgs>(args: SelectSubset<T, AuthUserDeleteArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthUser.
     * @param {AuthUserUpdateArgs} args - Arguments to update one AuthUser.
     * @example
     * // Update one AuthUser
     * const authUser = await prisma.authUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthUserUpdateArgs>(args: SelectSubset<T, AuthUserUpdateArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthUsers.
     * @param {AuthUserDeleteManyArgs} args - Arguments to filter AuthUsers to delete.
     * @example
     * // Delete a few AuthUsers
     * const { count } = await prisma.authUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthUserDeleteManyArgs>(args?: SelectSubset<T, AuthUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthUsers
     * const authUser = await prisma.authUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthUserUpdateManyArgs>(args: SelectSubset<T, AuthUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthUsers and returns the data updated in the database.
     * @param {AuthUserUpdateManyAndReturnArgs} args - Arguments to update many AuthUsers.
     * @example
     * // Update many AuthUsers
     * const authUser = await prisma.authUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthUsers and only return the `id`
     * const authUserWithIdOnly = await prisma.authUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthUser.
     * @param {AuthUserUpsertArgs} args - Arguments to update or create a AuthUser.
     * @example
     * // Update or create a AuthUser
     * const authUser = await prisma.authUser.upsert({
     *   create: {
     *     // ... data to create a AuthUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthUser we want to update
     *   }
     * })
     */
    upsert<T extends AuthUserUpsertArgs>(args: SelectSubset<T, AuthUserUpsertArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserCountArgs} args - Arguments to filter AuthUsers to count.
     * @example
     * // Count the number of AuthUsers
     * const count = await prisma.authUser.count({
     *   where: {
     *     // ... the filter for the AuthUsers we want to count
     *   }
     * })
    **/
    count<T extends AuthUserCountArgs>(
      args?: Subset<T, AuthUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthUserAggregateArgs>(args: Subset<T, AuthUserAggregateArgs>): Prisma.PrismaPromise<GetAuthUserAggregateType<T>>

    /**
     * Group by AuthUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserGroupByArgs} args - Group by arguments.
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
      T extends AuthUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthUserGroupByArgs['orderBy'] }
        : { orderBy?: AuthUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthUser model
   */
  readonly fields: AuthUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends AuthUser$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, AuthUser$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends AuthUser$accountsArgs<ExtArgs> = {}>(args?: Subset<T, AuthUser$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AuthUser model
   */
  interface AuthUserFieldRefs {
    readonly id: FieldRef<"AuthUser", 'String'>
    readonly name: FieldRef<"AuthUser", 'String'>
    readonly email: FieldRef<"AuthUser", 'String'>
    readonly emailVerified: FieldRef<"AuthUser", 'Boolean'>
    readonly image: FieldRef<"AuthUser", 'String'>
    readonly createdAt: FieldRef<"AuthUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthUser findUnique
   */
  export type AuthUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * Filter, which AuthUser to fetch.
     */
    where: AuthUserWhereUniqueInput
  }

  /**
   * AuthUser findUniqueOrThrow
   */
  export type AuthUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * Filter, which AuthUser to fetch.
     */
    where: AuthUserWhereUniqueInput
  }

  /**
   * AuthUser findFirst
   */
  export type AuthUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * Filter, which AuthUser to fetch.
     */
    where?: AuthUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: AuthUserOrderByWithRelationInput | AuthUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthUsers.
     */
    cursor?: AuthUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthUsers.
     */
    distinct?: AuthUserScalarFieldEnum | AuthUserScalarFieldEnum[]
  }

  /**
   * AuthUser findFirstOrThrow
   */
  export type AuthUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * Filter, which AuthUser to fetch.
     */
    where?: AuthUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: AuthUserOrderByWithRelationInput | AuthUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthUsers.
     */
    cursor?: AuthUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthUsers.
     */
    distinct?: AuthUserScalarFieldEnum | AuthUserScalarFieldEnum[]
  }

  /**
   * AuthUser findMany
   */
  export type AuthUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * Filter, which AuthUsers to fetch.
     */
    where?: AuthUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: AuthUserOrderByWithRelationInput | AuthUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthUsers.
     */
    cursor?: AuthUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthUsers.
     */
    skip?: number
    distinct?: AuthUserScalarFieldEnum | AuthUserScalarFieldEnum[]
  }

  /**
   * AuthUser create
   */
  export type AuthUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthUser.
     */
    data: XOR<AuthUserCreateInput, AuthUserUncheckedCreateInput>
  }

  /**
   * AuthUser createMany
   */
  export type AuthUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthUsers.
     */
    data: AuthUserCreateManyInput | AuthUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthUser createManyAndReturn
   */
  export type AuthUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * The data used to create many AuthUsers.
     */
    data: AuthUserCreateManyInput | AuthUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthUser update
   */
  export type AuthUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthUser.
     */
    data: XOR<AuthUserUpdateInput, AuthUserUncheckedUpdateInput>
    /**
     * Choose, which AuthUser to update.
     */
    where: AuthUserWhereUniqueInput
  }

  /**
   * AuthUser updateMany
   */
  export type AuthUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthUsers.
     */
    data: XOR<AuthUserUpdateManyMutationInput, AuthUserUncheckedUpdateManyInput>
    /**
     * Filter which AuthUsers to update
     */
    where?: AuthUserWhereInput
    /**
     * Limit how many AuthUsers to update.
     */
    limit?: number
  }

  /**
   * AuthUser updateManyAndReturn
   */
  export type AuthUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * The data used to update AuthUsers.
     */
    data: XOR<AuthUserUpdateManyMutationInput, AuthUserUncheckedUpdateManyInput>
    /**
     * Filter which AuthUsers to update
     */
    where?: AuthUserWhereInput
    /**
     * Limit how many AuthUsers to update.
     */
    limit?: number
  }

  /**
   * AuthUser upsert
   */
  export type AuthUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthUser to update in case it exists.
     */
    where: AuthUserWhereUniqueInput
    /**
     * In case the AuthUser found by the `where` argument doesn't exist, create a new AuthUser with this data.
     */
    create: XOR<AuthUserCreateInput, AuthUserUncheckedCreateInput>
    /**
     * In case the AuthUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthUserUpdateInput, AuthUserUncheckedUpdateInput>
  }

  /**
   * AuthUser delete
   */
  export type AuthUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * Filter which AuthUser to delete.
     */
    where: AuthUserWhereUniqueInput
  }

  /**
   * AuthUser deleteMany
   */
  export type AuthUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthUsers to delete
     */
    where?: AuthUserWhereInput
    /**
     * Limit how many AuthUsers to delete.
     */
    limit?: number
  }

  /**
   * AuthUser.sessions
   */
  export type AuthUser$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    cursor?: AuthSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthUser.accounts
   */
  export type AuthUser$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    where?: AuthAccountWhereInput
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    cursor?: AuthAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthUser without action
   */
  export type AuthUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
  }


  /**
   * Model AuthSession
   */

  export type AggregateAuthSession = {
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  export type AuthSessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type AuthSessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type AuthSessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type AuthSessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type AuthSessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type AuthSessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type AuthSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSession to aggregate.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthSessions
    **/
    _count?: true | AuthSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthSessionMaxAggregateInputType
  }

  export type GetAuthSessionAggregateType<T extends AuthSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthSession[P]>
      : GetScalarType<T[P], AggregateAuthSession[P]>
  }




  export type AuthSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithAggregationInput | AuthSessionOrderByWithAggregationInput[]
    by: AuthSessionScalarFieldEnum[] | AuthSessionScalarFieldEnum
    having?: AuthSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthSessionCountAggregateInputType | true
    _min?: AuthSessionMinAggregateInputType
    _max?: AuthSessionMaxAggregateInputType
  }

  export type AuthSessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  type GetAuthSessionGroupByPayload<T extends AuthSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
        }
      >
    >


  export type AuthSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type AuthSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["authSession"]>
  export type AuthSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }
  export type AuthSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }
  export type AuthSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }

  export type $AuthSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthSession"
    objects: {
      user: Prisma.$AuthUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["authSession"]>
    composites: {}
  }

  type AuthSessionGetPayload<S extends boolean | null | undefined | AuthSessionDefaultArgs> = $Result.GetResult<Prisma.$AuthSessionPayload, S>

  type AuthSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthSessionCountAggregateInputType | true
    }

  export interface AuthSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthSession'], meta: { name: 'AuthSession' } }
    /**
     * Find zero or one AuthSession that matches the filter.
     * @param {AuthSessionFindUniqueArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthSessionFindUniqueArgs>(args: SelectSubset<T, AuthSessionFindUniqueArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthSessionFindUniqueOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthSessionFindFirstArgs>(args?: SelectSubset<T, AuthSessionFindFirstArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthSessions
     * const authSessions = await prisma.authSession.findMany()
     * 
     * // Get first 10 AuthSessions
     * const authSessions = await prisma.authSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authSessionWithIdOnly = await prisma.authSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthSessionFindManyArgs>(args?: SelectSubset<T, AuthSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthSession.
     * @param {AuthSessionCreateArgs} args - Arguments to create a AuthSession.
     * @example
     * // Create one AuthSession
     * const AuthSession = await prisma.authSession.create({
     *   data: {
     *     // ... data to create a AuthSession
     *   }
     * })
     * 
     */
    create<T extends AuthSessionCreateArgs>(args: SelectSubset<T, AuthSessionCreateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthSessions.
     * @param {AuthSessionCreateManyArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthSessionCreateManyArgs>(args?: SelectSubset<T, AuthSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthSessions and returns the data saved in the database.
     * @param {AuthSessionCreateManyAndReturnArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthSession.
     * @param {AuthSessionDeleteArgs} args - Arguments to delete one AuthSession.
     * @example
     * // Delete one AuthSession
     * const AuthSession = await prisma.authSession.delete({
     *   where: {
     *     // ... filter to delete one AuthSession
     *   }
     * })
     * 
     */
    delete<T extends AuthSessionDeleteArgs>(args: SelectSubset<T, AuthSessionDeleteArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthSession.
     * @param {AuthSessionUpdateArgs} args - Arguments to update one AuthSession.
     * @example
     * // Update one AuthSession
     * const authSession = await prisma.authSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthSessionUpdateArgs>(args: SelectSubset<T, AuthSessionUpdateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthSessions.
     * @param {AuthSessionDeleteManyArgs} args - Arguments to filter AuthSessions to delete.
     * @example
     * // Delete a few AuthSessions
     * const { count } = await prisma.authSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthSessionDeleteManyArgs>(args?: SelectSubset<T, AuthSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthSessionUpdateManyArgs>(args: SelectSubset<T, AuthSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions and returns the data updated in the database.
     * @param {AuthSessionUpdateManyAndReturnArgs} args - Arguments to update many AuthSessions.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthSession.
     * @param {AuthSessionUpsertArgs} args - Arguments to update or create a AuthSession.
     * @example
     * // Update or create a AuthSession
     * const authSession = await prisma.authSession.upsert({
     *   create: {
     *     // ... data to create a AuthSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthSession we want to update
     *   }
     * })
     */
    upsert<T extends AuthSessionUpsertArgs>(args: SelectSubset<T, AuthSessionUpsertArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionCountArgs} args - Arguments to filter AuthSessions to count.
     * @example
     * // Count the number of AuthSessions
     * const count = await prisma.authSession.count({
     *   where: {
     *     // ... the filter for the AuthSessions we want to count
     *   }
     * })
    **/
    count<T extends AuthSessionCountArgs>(
      args?: Subset<T, AuthSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthSessionAggregateArgs>(args: Subset<T, AuthSessionAggregateArgs>): Prisma.PrismaPromise<GetAuthSessionAggregateType<T>>

    /**
     * Group by AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionGroupByArgs} args - Group by arguments.
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
      T extends AuthSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthSessionGroupByArgs['orderBy'] }
        : { orderBy?: AuthSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthSession model
   */
  readonly fields: AuthSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuthUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthUserDefaultArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuthSession model
   */
  interface AuthSessionFieldRefs {
    readonly id: FieldRef<"AuthSession", 'String'>
    readonly expiresAt: FieldRef<"AuthSession", 'DateTime'>
    readonly token: FieldRef<"AuthSession", 'String'>
    readonly createdAt: FieldRef<"AuthSession", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthSession", 'DateTime'>
    readonly ipAddress: FieldRef<"AuthSession", 'String'>
    readonly userAgent: FieldRef<"AuthSession", 'String'>
    readonly userId: FieldRef<"AuthSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuthSession findUnique
   */
  export type AuthSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findUniqueOrThrow
   */
  export type AuthSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findFirst
   */
  export type AuthSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findFirstOrThrow
   */
  export type AuthSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findMany
   */
  export type AuthSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSessions to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession create
   */
  export type AuthSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthSession.
     */
    data: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
  }

  /**
   * AuthSession createMany
   */
  export type AuthSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthSession createManyAndReturn
   */
  export type AuthSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthSession update
   */
  export type AuthSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthSession.
     */
    data: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
    /**
     * Choose, which AuthSession to update.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession updateMany
   */
  export type AuthSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
  }

  /**
   * AuthSession updateManyAndReturn
   */
  export type AuthSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthSession upsert
   */
  export type AuthSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthSession to update in case it exists.
     */
    where: AuthSessionWhereUniqueInput
    /**
     * In case the AuthSession found by the `where` argument doesn't exist, create a new AuthSession with this data.
     */
    create: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
    /**
     * In case the AuthSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
  }

  /**
   * AuthSession delete
   */
  export type AuthSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter which AuthSession to delete.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession deleteMany
   */
  export type AuthSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSessions to delete
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to delete.
     */
    limit?: number
  }

  /**
   * AuthSession without action
   */
  export type AuthSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
  }


  /**
   * Model AuthAccount
   */

  export type AggregateAuthAccount = {
    _count: AuthAccountCountAggregateOutputType | null
    _min: AuthAccountMinAggregateOutputType | null
    _max: AuthAccountMaxAggregateOutputType | null
  }

  export type AuthAccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthAccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthAccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthAccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthAccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthAccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthAccount to aggregate.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthAccounts
    **/
    _count?: true | AuthAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthAccountMaxAggregateInputType
  }

  export type GetAuthAccountAggregateType<T extends AuthAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthAccount[P]>
      : GetScalarType<T[P], AggregateAuthAccount[P]>
  }




  export type AuthAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthAccountWhereInput
    orderBy?: AuthAccountOrderByWithAggregationInput | AuthAccountOrderByWithAggregationInput[]
    by: AuthAccountScalarFieldEnum[] | AuthAccountScalarFieldEnum
    having?: AuthAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthAccountCountAggregateInputType | true
    _min?: AuthAccountMinAggregateInputType
    _max?: AuthAccountMaxAggregateInputType
  }

  export type AuthAccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AuthAccountCountAggregateOutputType | null
    _min: AuthAccountMinAggregateOutputType | null
    _max: AuthAccountMaxAggregateOutputType | null
  }

  type GetAuthAccountGroupByPayload<T extends AuthAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthAccountGroupByOutputType[P]>
            : GetScalarType<T[P], AuthAccountGroupByOutputType[P]>
        }
      >
    >


  export type AuthAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type AuthAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type AuthAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type AuthAccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["authAccount"]>
  export type AuthAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }
  export type AuthAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }
  export type AuthAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }

  export type $AuthAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthAccount"
    objects: {
      user: Prisma.$AuthUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authAccount"]>
    composites: {}
  }

  type AuthAccountGetPayload<S extends boolean | null | undefined | AuthAccountDefaultArgs> = $Result.GetResult<Prisma.$AuthAccountPayload, S>

  type AuthAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthAccountCountAggregateInputType | true
    }

  export interface AuthAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthAccount'], meta: { name: 'AuthAccount' } }
    /**
     * Find zero or one AuthAccount that matches the filter.
     * @param {AuthAccountFindUniqueArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthAccountFindUniqueArgs>(args: SelectSubset<T, AuthAccountFindUniqueArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthAccountFindUniqueOrThrowArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindFirstArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthAccountFindFirstArgs>(args?: SelectSubset<T, AuthAccountFindFirstArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindFirstOrThrowArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthAccounts
     * const authAccounts = await prisma.authAccount.findMany()
     * 
     * // Get first 10 AuthAccounts
     * const authAccounts = await prisma.authAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthAccountFindManyArgs>(args?: SelectSubset<T, AuthAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthAccount.
     * @param {AuthAccountCreateArgs} args - Arguments to create a AuthAccount.
     * @example
     * // Create one AuthAccount
     * const AuthAccount = await prisma.authAccount.create({
     *   data: {
     *     // ... data to create a AuthAccount
     *   }
     * })
     * 
     */
    create<T extends AuthAccountCreateArgs>(args: SelectSubset<T, AuthAccountCreateArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthAccounts.
     * @param {AuthAccountCreateManyArgs} args - Arguments to create many AuthAccounts.
     * @example
     * // Create many AuthAccounts
     * const authAccount = await prisma.authAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthAccountCreateManyArgs>(args?: SelectSubset<T, AuthAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthAccounts and returns the data saved in the database.
     * @param {AuthAccountCreateManyAndReturnArgs} args - Arguments to create many AuthAccounts.
     * @example
     * // Create many AuthAccounts
     * const authAccount = await prisma.authAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthAccounts and only return the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthAccount.
     * @param {AuthAccountDeleteArgs} args - Arguments to delete one AuthAccount.
     * @example
     * // Delete one AuthAccount
     * const AuthAccount = await prisma.authAccount.delete({
     *   where: {
     *     // ... filter to delete one AuthAccount
     *   }
     * })
     * 
     */
    delete<T extends AuthAccountDeleteArgs>(args: SelectSubset<T, AuthAccountDeleteArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthAccount.
     * @param {AuthAccountUpdateArgs} args - Arguments to update one AuthAccount.
     * @example
     * // Update one AuthAccount
     * const authAccount = await prisma.authAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthAccountUpdateArgs>(args: SelectSubset<T, AuthAccountUpdateArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthAccounts.
     * @param {AuthAccountDeleteManyArgs} args - Arguments to filter AuthAccounts to delete.
     * @example
     * // Delete a few AuthAccounts
     * const { count } = await prisma.authAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthAccountDeleteManyArgs>(args?: SelectSubset<T, AuthAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthAccounts
     * const authAccount = await prisma.authAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthAccountUpdateManyArgs>(args: SelectSubset<T, AuthAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthAccounts and returns the data updated in the database.
     * @param {AuthAccountUpdateManyAndReturnArgs} args - Arguments to update many AuthAccounts.
     * @example
     * // Update many AuthAccounts
     * const authAccount = await prisma.authAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthAccounts and only return the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthAccount.
     * @param {AuthAccountUpsertArgs} args - Arguments to update or create a AuthAccount.
     * @example
     * // Update or create a AuthAccount
     * const authAccount = await prisma.authAccount.upsert({
     *   create: {
     *     // ... data to create a AuthAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthAccount we want to update
     *   }
     * })
     */
    upsert<T extends AuthAccountUpsertArgs>(args: SelectSubset<T, AuthAccountUpsertArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountCountArgs} args - Arguments to filter AuthAccounts to count.
     * @example
     * // Count the number of AuthAccounts
     * const count = await prisma.authAccount.count({
     *   where: {
     *     // ... the filter for the AuthAccounts we want to count
     *   }
     * })
    **/
    count<T extends AuthAccountCountArgs>(
      args?: Subset<T, AuthAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthAccountAggregateArgs>(args: Subset<T, AuthAccountAggregateArgs>): Prisma.PrismaPromise<GetAuthAccountAggregateType<T>>

    /**
     * Group by AuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountGroupByArgs} args - Group by arguments.
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
      T extends AuthAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthAccountGroupByArgs['orderBy'] }
        : { orderBy?: AuthAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthAccount model
   */
  readonly fields: AuthAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuthUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthUserDefaultArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuthAccount model
   */
  interface AuthAccountFieldRefs {
    readonly id: FieldRef<"AuthAccount", 'String'>
    readonly accountId: FieldRef<"AuthAccount", 'String'>
    readonly providerId: FieldRef<"AuthAccount", 'String'>
    readonly userId: FieldRef<"AuthAccount", 'String'>
    readonly accessToken: FieldRef<"AuthAccount", 'String'>
    readonly refreshToken: FieldRef<"AuthAccount", 'String'>
    readonly idToken: FieldRef<"AuthAccount", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"AuthAccount", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"AuthAccount", 'DateTime'>
    readonly scope: FieldRef<"AuthAccount", 'String'>
    readonly password: FieldRef<"AuthAccount", 'String'>
    readonly createdAt: FieldRef<"AuthAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthAccount findUnique
   */
  export type AuthAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount findUniqueOrThrow
   */
  export type AuthAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount findFirst
   */
  export type AuthAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthAccounts.
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthAccounts.
     */
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthAccount findFirstOrThrow
   */
  export type AuthAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthAccounts.
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthAccounts.
     */
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthAccount findMany
   */
  export type AuthAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccounts to fetch.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthAccounts.
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthAccount create
   */
  export type AuthAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthAccount.
     */
    data: XOR<AuthAccountCreateInput, AuthAccountUncheckedCreateInput>
  }

  /**
   * AuthAccount createMany
   */
  export type AuthAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthAccounts.
     */
    data: AuthAccountCreateManyInput | AuthAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthAccount createManyAndReturn
   */
  export type AuthAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * The data used to create many AuthAccounts.
     */
    data: AuthAccountCreateManyInput | AuthAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthAccount update
   */
  export type AuthAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthAccount.
     */
    data: XOR<AuthAccountUpdateInput, AuthAccountUncheckedUpdateInput>
    /**
     * Choose, which AuthAccount to update.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount updateMany
   */
  export type AuthAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthAccounts.
     */
    data: XOR<AuthAccountUpdateManyMutationInput, AuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which AuthAccounts to update
     */
    where?: AuthAccountWhereInput
    /**
     * Limit how many AuthAccounts to update.
     */
    limit?: number
  }

  /**
   * AuthAccount updateManyAndReturn
   */
  export type AuthAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * The data used to update AuthAccounts.
     */
    data: XOR<AuthAccountUpdateManyMutationInput, AuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which AuthAccounts to update
     */
    where?: AuthAccountWhereInput
    /**
     * Limit how many AuthAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthAccount upsert
   */
  export type AuthAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthAccount to update in case it exists.
     */
    where: AuthAccountWhereUniqueInput
    /**
     * In case the AuthAccount found by the `where` argument doesn't exist, create a new AuthAccount with this data.
     */
    create: XOR<AuthAccountCreateInput, AuthAccountUncheckedCreateInput>
    /**
     * In case the AuthAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthAccountUpdateInput, AuthAccountUncheckedUpdateInput>
  }

  /**
   * AuthAccount delete
   */
  export type AuthAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter which AuthAccount to delete.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount deleteMany
   */
  export type AuthAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthAccounts to delete
     */
    where?: AuthAccountWhereInput
    /**
     * Limit how many AuthAccounts to delete.
     */
    limit?: number
  }

  /**
   * AuthAccount without action
   */
  export type AuthAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
  }


  /**
   * Model AuthVerification
   */

  export type AggregateAuthVerification = {
    _count: AuthVerificationCountAggregateOutputType | null
    _min: AuthVerificationMinAggregateOutputType | null
    _max: AuthVerificationMaxAggregateOutputType | null
  }

  export type AuthVerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthVerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthVerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthVerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthVerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthVerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthVerification to aggregate.
     */
    where?: AuthVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthVerifications to fetch.
     */
    orderBy?: AuthVerificationOrderByWithRelationInput | AuthVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthVerifications
    **/
    _count?: true | AuthVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthVerificationMaxAggregateInputType
  }

  export type GetAuthVerificationAggregateType<T extends AuthVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthVerification[P]>
      : GetScalarType<T[P], AggregateAuthVerification[P]>
  }




  export type AuthVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthVerificationWhereInput
    orderBy?: AuthVerificationOrderByWithAggregationInput | AuthVerificationOrderByWithAggregationInput[]
    by: AuthVerificationScalarFieldEnum[] | AuthVerificationScalarFieldEnum
    having?: AuthVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthVerificationCountAggregateInputType | true
    _min?: AuthVerificationMinAggregateInputType
    _max?: AuthVerificationMaxAggregateInputType
  }

  export type AuthVerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: AuthVerificationCountAggregateOutputType | null
    _min: AuthVerificationMinAggregateOutputType | null
    _max: AuthVerificationMaxAggregateOutputType | null
  }

  type GetAuthVerificationGroupByPayload<T extends AuthVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], AuthVerificationGroupByOutputType[P]>
        }
      >
    >


  export type AuthVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authVerification"]>

  export type AuthVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authVerification"]>

  export type AuthVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authVerification"]>

  export type AuthVerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["authVerification"]>

  export type $AuthVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthVerification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["authVerification"]>
    composites: {}
  }

  type AuthVerificationGetPayload<S extends boolean | null | undefined | AuthVerificationDefaultArgs> = $Result.GetResult<Prisma.$AuthVerificationPayload, S>

  type AuthVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthVerificationCountAggregateInputType | true
    }

  export interface AuthVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthVerification'], meta: { name: 'AuthVerification' } }
    /**
     * Find zero or one AuthVerification that matches the filter.
     * @param {AuthVerificationFindUniqueArgs} args - Arguments to find a AuthVerification
     * @example
     * // Get one AuthVerification
     * const authVerification = await prisma.authVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthVerificationFindUniqueArgs>(args: SelectSubset<T, AuthVerificationFindUniqueArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthVerificationFindUniqueOrThrowArgs} args - Arguments to find a AuthVerification
     * @example
     * // Get one AuthVerification
     * const authVerification = await prisma.authVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationFindFirstArgs} args - Arguments to find a AuthVerification
     * @example
     * // Get one AuthVerification
     * const authVerification = await prisma.authVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthVerificationFindFirstArgs>(args?: SelectSubset<T, AuthVerificationFindFirstArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationFindFirstOrThrowArgs} args - Arguments to find a AuthVerification
     * @example
     * // Get one AuthVerification
     * const authVerification = await prisma.authVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthVerifications
     * const authVerifications = await prisma.authVerification.findMany()
     * 
     * // Get first 10 AuthVerifications
     * const authVerifications = await prisma.authVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authVerificationWithIdOnly = await prisma.authVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthVerificationFindManyArgs>(args?: SelectSubset<T, AuthVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthVerification.
     * @param {AuthVerificationCreateArgs} args - Arguments to create a AuthVerification.
     * @example
     * // Create one AuthVerification
     * const AuthVerification = await prisma.authVerification.create({
     *   data: {
     *     // ... data to create a AuthVerification
     *   }
     * })
     * 
     */
    create<T extends AuthVerificationCreateArgs>(args: SelectSubset<T, AuthVerificationCreateArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthVerifications.
     * @param {AuthVerificationCreateManyArgs} args - Arguments to create many AuthVerifications.
     * @example
     * // Create many AuthVerifications
     * const authVerification = await prisma.authVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthVerificationCreateManyArgs>(args?: SelectSubset<T, AuthVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthVerifications and returns the data saved in the database.
     * @param {AuthVerificationCreateManyAndReturnArgs} args - Arguments to create many AuthVerifications.
     * @example
     * // Create many AuthVerifications
     * const authVerification = await prisma.authVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthVerifications and only return the `id`
     * const authVerificationWithIdOnly = await prisma.authVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthVerification.
     * @param {AuthVerificationDeleteArgs} args - Arguments to delete one AuthVerification.
     * @example
     * // Delete one AuthVerification
     * const AuthVerification = await prisma.authVerification.delete({
     *   where: {
     *     // ... filter to delete one AuthVerification
     *   }
     * })
     * 
     */
    delete<T extends AuthVerificationDeleteArgs>(args: SelectSubset<T, AuthVerificationDeleteArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthVerification.
     * @param {AuthVerificationUpdateArgs} args - Arguments to update one AuthVerification.
     * @example
     * // Update one AuthVerification
     * const authVerification = await prisma.authVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthVerificationUpdateArgs>(args: SelectSubset<T, AuthVerificationUpdateArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthVerifications.
     * @param {AuthVerificationDeleteManyArgs} args - Arguments to filter AuthVerifications to delete.
     * @example
     * // Delete a few AuthVerifications
     * const { count } = await prisma.authVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthVerificationDeleteManyArgs>(args?: SelectSubset<T, AuthVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthVerifications
     * const authVerification = await prisma.authVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthVerificationUpdateManyArgs>(args: SelectSubset<T, AuthVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthVerifications and returns the data updated in the database.
     * @param {AuthVerificationUpdateManyAndReturnArgs} args - Arguments to update many AuthVerifications.
     * @example
     * // Update many AuthVerifications
     * const authVerification = await prisma.authVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthVerifications and only return the `id`
     * const authVerificationWithIdOnly = await prisma.authVerification.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthVerification.
     * @param {AuthVerificationUpsertArgs} args - Arguments to update or create a AuthVerification.
     * @example
     * // Update or create a AuthVerification
     * const authVerification = await prisma.authVerification.upsert({
     *   create: {
     *     // ... data to create a AuthVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthVerification we want to update
     *   }
     * })
     */
    upsert<T extends AuthVerificationUpsertArgs>(args: SelectSubset<T, AuthVerificationUpsertArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationCountArgs} args - Arguments to filter AuthVerifications to count.
     * @example
     * // Count the number of AuthVerifications
     * const count = await prisma.authVerification.count({
     *   where: {
     *     // ... the filter for the AuthVerifications we want to count
     *   }
     * })
    **/
    count<T extends AuthVerificationCountArgs>(
      args?: Subset<T, AuthVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthVerificationAggregateArgs>(args: Subset<T, AuthVerificationAggregateArgs>): Prisma.PrismaPromise<GetAuthVerificationAggregateType<T>>

    /**
     * Group by AuthVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationGroupByArgs} args - Group by arguments.
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
      T extends AuthVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthVerificationGroupByArgs['orderBy'] }
        : { orderBy?: AuthVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthVerification model
   */
  readonly fields: AuthVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuthVerification model
   */
  interface AuthVerificationFieldRefs {
    readonly id: FieldRef<"AuthVerification", 'String'>
    readonly identifier: FieldRef<"AuthVerification", 'String'>
    readonly value: FieldRef<"AuthVerification", 'String'>
    readonly expiresAt: FieldRef<"AuthVerification", 'DateTime'>
    readonly createdAt: FieldRef<"AuthVerification", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthVerification findUnique
   */
  export type AuthVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * Filter, which AuthVerification to fetch.
     */
    where: AuthVerificationWhereUniqueInput
  }

  /**
   * AuthVerification findUniqueOrThrow
   */
  export type AuthVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * Filter, which AuthVerification to fetch.
     */
    where: AuthVerificationWhereUniqueInput
  }

  /**
   * AuthVerification findFirst
   */
  export type AuthVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * Filter, which AuthVerification to fetch.
     */
    where?: AuthVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthVerifications to fetch.
     */
    orderBy?: AuthVerificationOrderByWithRelationInput | AuthVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthVerifications.
     */
    cursor?: AuthVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthVerifications.
     */
    distinct?: AuthVerificationScalarFieldEnum | AuthVerificationScalarFieldEnum[]
  }

  /**
   * AuthVerification findFirstOrThrow
   */
  export type AuthVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * Filter, which AuthVerification to fetch.
     */
    where?: AuthVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthVerifications to fetch.
     */
    orderBy?: AuthVerificationOrderByWithRelationInput | AuthVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthVerifications.
     */
    cursor?: AuthVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthVerifications.
     */
    distinct?: AuthVerificationScalarFieldEnum | AuthVerificationScalarFieldEnum[]
  }

  /**
   * AuthVerification findMany
   */
  export type AuthVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * Filter, which AuthVerifications to fetch.
     */
    where?: AuthVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthVerifications to fetch.
     */
    orderBy?: AuthVerificationOrderByWithRelationInput | AuthVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthVerifications.
     */
    cursor?: AuthVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthVerifications.
     */
    skip?: number
    distinct?: AuthVerificationScalarFieldEnum | AuthVerificationScalarFieldEnum[]
  }

  /**
   * AuthVerification create
   */
  export type AuthVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a AuthVerification.
     */
    data: XOR<AuthVerificationCreateInput, AuthVerificationUncheckedCreateInput>
  }

  /**
   * AuthVerification createMany
   */
  export type AuthVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthVerifications.
     */
    data: AuthVerificationCreateManyInput | AuthVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthVerification createManyAndReturn
   */
  export type AuthVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many AuthVerifications.
     */
    data: AuthVerificationCreateManyInput | AuthVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthVerification update
   */
  export type AuthVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a AuthVerification.
     */
    data: XOR<AuthVerificationUpdateInput, AuthVerificationUncheckedUpdateInput>
    /**
     * Choose, which AuthVerification to update.
     */
    where: AuthVerificationWhereUniqueInput
  }

  /**
   * AuthVerification updateMany
   */
  export type AuthVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthVerifications.
     */
    data: XOR<AuthVerificationUpdateManyMutationInput, AuthVerificationUncheckedUpdateManyInput>
    /**
     * Filter which AuthVerifications to update
     */
    where?: AuthVerificationWhereInput
    /**
     * Limit how many AuthVerifications to update.
     */
    limit?: number
  }

  /**
   * AuthVerification updateManyAndReturn
   */
  export type AuthVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * The data used to update AuthVerifications.
     */
    data: XOR<AuthVerificationUpdateManyMutationInput, AuthVerificationUncheckedUpdateManyInput>
    /**
     * Filter which AuthVerifications to update
     */
    where?: AuthVerificationWhereInput
    /**
     * Limit how many AuthVerifications to update.
     */
    limit?: number
  }

  /**
   * AuthVerification upsert
   */
  export type AuthVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the AuthVerification to update in case it exists.
     */
    where: AuthVerificationWhereUniqueInput
    /**
     * In case the AuthVerification found by the `where` argument doesn't exist, create a new AuthVerification with this data.
     */
    create: XOR<AuthVerificationCreateInput, AuthVerificationUncheckedCreateInput>
    /**
     * In case the AuthVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthVerificationUpdateInput, AuthVerificationUncheckedUpdateInput>
  }

  /**
   * AuthVerification delete
   */
  export type AuthVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * Filter which AuthVerification to delete.
     */
    where: AuthVerificationWhereUniqueInput
  }

  /**
   * AuthVerification deleteMany
   */
  export type AuthVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthVerifications to delete
     */
    where?: AuthVerificationWhereInput
    /**
     * Limit how many AuthVerifications to delete.
     */
    limit?: number
  }

  /**
   * AuthVerification without action
   */
  export type AuthVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
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
    image: 'image',
    phoneNumber: 'phoneNumber',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClassroomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    section: 'section',
    session: 'session',
    currentTerm: 'currentTerm',
    teacherId: 'teacherId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassroomScalarFieldEnum = (typeof ClassroomScalarFieldEnum)[keyof typeof ClassroomScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    admissionNo: 'admissionNo',
    firstName: 'firstName',
    lastName: 'lastName',
    otherNames: 'otherNames',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    image: 'image',
    classroomId: 'classroomId',
    guardianName: 'guardianName',
    guardianPhone: 'guardianPhone',
    address: 'address',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ResultScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    term: 'term',
    session: 'session',
    timesSchoolOpened: 'timesSchoolOpened',
    timesPresent: 'timesPresent',
    timesAbsent: 'timesAbsent',
    teacherComment: 'teacherComment',
    principalComment: 'principalComment',
    psychomotorRatings: 'psychomotorRatings',
    affectiveDomain: 'affectiveDomain',
    totalScore: 'totalScore',
    averageScore: 'averageScore',
    classPosition: 'classPosition',
    totalStudents: 'totalStudents',
    isPublished: 'isPublished',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


  export const SubjectScoreScalarFieldEnum: {
    id: 'id',
    resultId: 'resultId',
    subject: 'subject',
    caScore: 'caScore',
    examScore: 'examScore',
    totalScore: 'totalScore',
    grade: 'grade',
    remark: 'remark',
    classAverage: 'classAverage',
    highestInClass: 'highestInClass',
    lowestInClass: 'lowestInClass',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubjectScoreScalarFieldEnum = (typeof SubjectScoreScalarFieldEnum)[keyof typeof SubjectScoreScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    caMaxScore: 'caMaxScore',
    examMaxScore: 'examMaxScore',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const StudentSubjectScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    subjectId: 'subjectId',
    createdAt: 'createdAt'
  };

  export type StudentSubjectScalarFieldEnum = (typeof StudentSubjectScalarFieldEnum)[keyof typeof StudentSubjectScalarFieldEnum]


  export const GradeScaleScalarFieldEnum: {
    id: 'id',
    grade: 'grade',
    minScore: 'minScore',
    maxScore: 'maxScore',
    remark: 'remark',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GradeScaleScalarFieldEnum = (typeof GradeScaleScalarFieldEnum)[keyof typeof GradeScaleScalarFieldEnum]


  export const SchoolSettingsScalarFieldEnum: {
    id: 'id',
    schoolName: 'schoolName',
    schoolAddress: 'schoolAddress',
    schoolPhone: 'schoolPhone',
    schoolEmail: 'schoolEmail',
    schoolLogo: 'schoolLogo',
    currentSession: 'currentSession',
    currentTerm: 'currentTerm',
    nextTermBegins: 'nextTermBegins',
    passmark: 'passmark',
    updatedAt: 'updatedAt'
  };

  export type SchoolSettingsScalarFieldEnum = (typeof SchoolSettingsScalarFieldEnum)[keyof typeof SchoolSettingsScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    changes: 'changes',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const AuthUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthUserScalarFieldEnum = (typeof AuthUserScalarFieldEnum)[keyof typeof AuthUserScalarFieldEnum]


  export const AuthSessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type AuthSessionScalarFieldEnum = (typeof AuthSessionScalarFieldEnum)[keyof typeof AuthSessionScalarFieldEnum]


  export const AuthAccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthAccountScalarFieldEnum = (typeof AuthAccountScalarFieldEnum)[keyof typeof AuthAccountScalarFieldEnum]


  export const AuthVerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthVerificationScalarFieldEnum = (typeof AuthVerificationScalarFieldEnum)[keyof typeof AuthVerificationScalarFieldEnum]


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
   * Reference to a field of type 'Term'
   */
  export type EnumTermFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Term'>
    


  /**
   * Reference to a field of type 'Term[]'
   */
  export type ListEnumTermFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Term[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Grade'
   */
  export type EnumGradeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Grade'>
    


  /**
   * Reference to a field of type 'Grade[]'
   */
  export type ListEnumGradeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Grade[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    image?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    classrooms?: ClassroomListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classrooms?: ClassroomOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    image?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    classrooms?: ClassroomListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    isActive?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClassroomWhereInput = {
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    id?: IntFilter<"Classroom"> | number
    name?: StringFilter<"Classroom"> | string
    section?: StringNullableFilter<"Classroom"> | string | null
    session?: StringFilter<"Classroom"> | string
    currentTerm?: EnumTermFilter<"Classroom"> | $Enums.Term
    teacherId?: IntFilter<"Classroom"> | number
    isActive?: BoolFilter<"Classroom"> | boolean
    createdAt?: DateTimeFilter<"Classroom"> | Date | string
    updatedAt?: DateTimeFilter<"Classroom"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    students?: StudentListRelationFilter
  }

  export type ClassroomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    section?: SortOrderInput | SortOrder
    session?: SortOrder
    currentTerm?: SortOrder
    teacherId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacher?: UserOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type ClassroomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_section_session?: ClassroomNameSectionSessionCompoundUniqueInput
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    name?: StringFilter<"Classroom"> | string
    section?: StringNullableFilter<"Classroom"> | string | null
    session?: StringFilter<"Classroom"> | string
    currentTerm?: EnumTermFilter<"Classroom"> | $Enums.Term
    teacherId?: IntFilter<"Classroom"> | number
    isActive?: BoolFilter<"Classroom"> | boolean
    createdAt?: DateTimeFilter<"Classroom"> | Date | string
    updatedAt?: DateTimeFilter<"Classroom"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    students?: StudentListRelationFilter
  }, "id" | "name_section_session">

  export type ClassroomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    section?: SortOrderInput | SortOrder
    session?: SortOrder
    currentTerm?: SortOrder
    teacherId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassroomCountOrderByAggregateInput
    _avg?: ClassroomAvgOrderByAggregateInput
    _max?: ClassroomMaxOrderByAggregateInput
    _min?: ClassroomMinOrderByAggregateInput
    _sum?: ClassroomSumOrderByAggregateInput
  }

  export type ClassroomScalarWhereWithAggregatesInput = {
    AND?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    OR?: ClassroomScalarWhereWithAggregatesInput[]
    NOT?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Classroom"> | number
    name?: StringWithAggregatesFilter<"Classroom"> | string
    section?: StringNullableWithAggregatesFilter<"Classroom"> | string | null
    session?: StringWithAggregatesFilter<"Classroom"> | string
    currentTerm?: EnumTermWithAggregatesFilter<"Classroom"> | $Enums.Term
    teacherId?: IntWithAggregatesFilter<"Classroom"> | number
    isActive?: BoolWithAggregatesFilter<"Classroom"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Classroom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Classroom"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    admissionNo?: StringFilter<"Student"> | string
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    otherNames?: StringNullableFilter<"Student"> | string | null
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    dateOfBirth?: DateTimeNullableFilter<"Student"> | Date | string | null
    image?: StringNullableFilter<"Student"> | string | null
    classroomId?: IntFilter<"Student"> | number
    guardianName?: StringNullableFilter<"Student"> | string | null
    guardianPhone?: StringNullableFilter<"Student"> | string | null
    address?: StringNullableFilter<"Student"> | string | null
    isActive?: BoolFilter<"Student"> | boolean
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
    results?: ResultListRelationFilter
    subjects?: StudentSubjectListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    admissionNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    otherNames?: SortOrderInput | SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    classroomId?: SortOrder
    guardianName?: SortOrderInput | SortOrder
    guardianPhone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classroom?: ClassroomOrderByWithRelationInput
    results?: ResultOrderByRelationAggregateInput
    subjects?: StudentSubjectOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    admissionNo?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    otherNames?: StringNullableFilter<"Student"> | string | null
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    dateOfBirth?: DateTimeNullableFilter<"Student"> | Date | string | null
    image?: StringNullableFilter<"Student"> | string | null
    classroomId?: IntFilter<"Student"> | number
    guardianName?: StringNullableFilter<"Student"> | string | null
    guardianPhone?: StringNullableFilter<"Student"> | string | null
    address?: StringNullableFilter<"Student"> | string | null
    isActive?: BoolFilter<"Student"> | boolean
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
    results?: ResultListRelationFilter
    subjects?: StudentSubjectListRelationFilter
  }, "id" | "admissionNo">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    admissionNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    otherNames?: SortOrderInput | SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    classroomId?: SortOrder
    guardianName?: SortOrderInput | SortOrder
    guardianPhone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    admissionNo?: StringWithAggregatesFilter<"Student"> | string
    firstName?: StringWithAggregatesFilter<"Student"> | string
    lastName?: StringWithAggregatesFilter<"Student"> | string
    otherNames?: StringNullableWithAggregatesFilter<"Student"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"Student"> | $Enums.Gender
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"Student"> | string | null
    classroomId?: IntWithAggregatesFilter<"Student"> | number
    guardianName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    guardianPhone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    address?: StringNullableWithAggregatesFilter<"Student"> | string | null
    isActive?: BoolWithAggregatesFilter<"Student"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type ResultWhereInput = {
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    id?: IntFilter<"Result"> | number
    studentId?: IntFilter<"Result"> | number
    term?: EnumTermFilter<"Result"> | $Enums.Term
    session?: StringFilter<"Result"> | string
    timesSchoolOpened?: IntFilter<"Result"> | number
    timesPresent?: IntFilter<"Result"> | number
    timesAbsent?: IntFilter<"Result"> | number
    teacherComment?: StringNullableFilter<"Result"> | string | null
    principalComment?: StringNullableFilter<"Result"> | string | null
    psychomotorRatings?: JsonNullableFilter<"Result">
    affectiveDomain?: JsonNullableFilter<"Result">
    totalScore?: FloatFilter<"Result"> | number
    averageScore?: FloatFilter<"Result"> | number
    classPosition?: IntNullableFilter<"Result"> | number | null
    totalStudents?: IntNullableFilter<"Result"> | number | null
    isPublished?: BoolFilter<"Result"> | boolean
    publishedAt?: DateTimeNullableFilter<"Result"> | Date | string | null
    createdAt?: DateTimeFilter<"Result"> | Date | string
    updatedAt?: DateTimeFilter<"Result"> | Date | string
    createdBy?: IntNullableFilter<"Result"> | number | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    subjects?: SubjectScoreListRelationFilter
  }

  export type ResultOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    term?: SortOrder
    session?: SortOrder
    timesSchoolOpened?: SortOrder
    timesPresent?: SortOrder
    timesAbsent?: SortOrder
    teacherComment?: SortOrderInput | SortOrder
    principalComment?: SortOrderInput | SortOrder
    psychomotorRatings?: SortOrderInput | SortOrder
    affectiveDomain?: SortOrderInput | SortOrder
    totalScore?: SortOrder
    averageScore?: SortOrder
    classPosition?: SortOrderInput | SortOrder
    totalStudents?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    subjects?: SubjectScoreOrderByRelationAggregateInput
  }

  export type ResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_term_session?: ResultStudentIdTermSessionCompoundUniqueInput
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    studentId?: IntFilter<"Result"> | number
    term?: EnumTermFilter<"Result"> | $Enums.Term
    session?: StringFilter<"Result"> | string
    timesSchoolOpened?: IntFilter<"Result"> | number
    timesPresent?: IntFilter<"Result"> | number
    timesAbsent?: IntFilter<"Result"> | number
    teacherComment?: StringNullableFilter<"Result"> | string | null
    principalComment?: StringNullableFilter<"Result"> | string | null
    psychomotorRatings?: JsonNullableFilter<"Result">
    affectiveDomain?: JsonNullableFilter<"Result">
    totalScore?: FloatFilter<"Result"> | number
    averageScore?: FloatFilter<"Result"> | number
    classPosition?: IntNullableFilter<"Result"> | number | null
    totalStudents?: IntNullableFilter<"Result"> | number | null
    isPublished?: BoolFilter<"Result"> | boolean
    publishedAt?: DateTimeNullableFilter<"Result"> | Date | string | null
    createdAt?: DateTimeFilter<"Result"> | Date | string
    updatedAt?: DateTimeFilter<"Result"> | Date | string
    createdBy?: IntNullableFilter<"Result"> | number | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    subjects?: SubjectScoreListRelationFilter
  }, "id" | "studentId_term_session">

  export type ResultOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    term?: SortOrder
    session?: SortOrder
    timesSchoolOpened?: SortOrder
    timesPresent?: SortOrder
    timesAbsent?: SortOrder
    teacherComment?: SortOrderInput | SortOrder
    principalComment?: SortOrderInput | SortOrder
    psychomotorRatings?: SortOrderInput | SortOrder
    affectiveDomain?: SortOrderInput | SortOrder
    totalScore?: SortOrder
    averageScore?: SortOrder
    classPosition?: SortOrderInput | SortOrder
    totalStudents?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: ResultCountOrderByAggregateInput
    _avg?: ResultAvgOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
    _sum?: ResultSumOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    OR?: ResultScalarWhereWithAggregatesInput[]
    NOT?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Result"> | number
    studentId?: IntWithAggregatesFilter<"Result"> | number
    term?: EnumTermWithAggregatesFilter<"Result"> | $Enums.Term
    session?: StringWithAggregatesFilter<"Result"> | string
    timesSchoolOpened?: IntWithAggregatesFilter<"Result"> | number
    timesPresent?: IntWithAggregatesFilter<"Result"> | number
    timesAbsent?: IntWithAggregatesFilter<"Result"> | number
    teacherComment?: StringNullableWithAggregatesFilter<"Result"> | string | null
    principalComment?: StringNullableWithAggregatesFilter<"Result"> | string | null
    psychomotorRatings?: JsonNullableWithAggregatesFilter<"Result">
    affectiveDomain?: JsonNullableWithAggregatesFilter<"Result">
    totalScore?: FloatWithAggregatesFilter<"Result"> | number
    averageScore?: FloatWithAggregatesFilter<"Result"> | number
    classPosition?: IntNullableWithAggregatesFilter<"Result"> | number | null
    totalStudents?: IntNullableWithAggregatesFilter<"Result"> | number | null
    isPublished?: BoolWithAggregatesFilter<"Result"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Result"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Result"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Result"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"Result"> | number | null
  }

  export type SubjectScoreWhereInput = {
    AND?: SubjectScoreWhereInput | SubjectScoreWhereInput[]
    OR?: SubjectScoreWhereInput[]
    NOT?: SubjectScoreWhereInput | SubjectScoreWhereInput[]
    id?: IntFilter<"SubjectScore"> | number
    resultId?: IntFilter<"SubjectScore"> | number
    subject?: StringFilter<"SubjectScore"> | string
    caScore?: FloatFilter<"SubjectScore"> | number
    examScore?: FloatFilter<"SubjectScore"> | number
    totalScore?: FloatFilter<"SubjectScore"> | number
    grade?: EnumGradeNullableFilter<"SubjectScore"> | $Enums.Grade | null
    remark?: StringNullableFilter<"SubjectScore"> | string | null
    classAverage?: FloatNullableFilter<"SubjectScore"> | number | null
    highestInClass?: FloatNullableFilter<"SubjectScore"> | number | null
    lowestInClass?: FloatNullableFilter<"SubjectScore"> | number | null
    createdAt?: DateTimeFilter<"SubjectScore"> | Date | string
    updatedAt?: DateTimeFilter<"SubjectScore"> | Date | string
    result?: XOR<ResultScalarRelationFilter, ResultWhereInput>
  }

  export type SubjectScoreOrderByWithRelationInput = {
    id?: SortOrder
    resultId?: SortOrder
    subject?: SortOrder
    caScore?: SortOrder
    examScore?: SortOrder
    totalScore?: SortOrder
    grade?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    classAverage?: SortOrderInput | SortOrder
    highestInClass?: SortOrderInput | SortOrder
    lowestInClass?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    result?: ResultOrderByWithRelationInput
  }

  export type SubjectScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    resultId_subject?: SubjectScoreResultIdSubjectCompoundUniqueInput
    AND?: SubjectScoreWhereInput | SubjectScoreWhereInput[]
    OR?: SubjectScoreWhereInput[]
    NOT?: SubjectScoreWhereInput | SubjectScoreWhereInput[]
    resultId?: IntFilter<"SubjectScore"> | number
    subject?: StringFilter<"SubjectScore"> | string
    caScore?: FloatFilter<"SubjectScore"> | number
    examScore?: FloatFilter<"SubjectScore"> | number
    totalScore?: FloatFilter<"SubjectScore"> | number
    grade?: EnumGradeNullableFilter<"SubjectScore"> | $Enums.Grade | null
    remark?: StringNullableFilter<"SubjectScore"> | string | null
    classAverage?: FloatNullableFilter<"SubjectScore"> | number | null
    highestInClass?: FloatNullableFilter<"SubjectScore"> | number | null
    lowestInClass?: FloatNullableFilter<"SubjectScore"> | number | null
    createdAt?: DateTimeFilter<"SubjectScore"> | Date | string
    updatedAt?: DateTimeFilter<"SubjectScore"> | Date | string
    result?: XOR<ResultScalarRelationFilter, ResultWhereInput>
  }, "id" | "resultId_subject">

  export type SubjectScoreOrderByWithAggregationInput = {
    id?: SortOrder
    resultId?: SortOrder
    subject?: SortOrder
    caScore?: SortOrder
    examScore?: SortOrder
    totalScore?: SortOrder
    grade?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    classAverage?: SortOrderInput | SortOrder
    highestInClass?: SortOrderInput | SortOrder
    lowestInClass?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubjectScoreCountOrderByAggregateInput
    _avg?: SubjectScoreAvgOrderByAggregateInput
    _max?: SubjectScoreMaxOrderByAggregateInput
    _min?: SubjectScoreMinOrderByAggregateInput
    _sum?: SubjectScoreSumOrderByAggregateInput
  }

  export type SubjectScoreScalarWhereWithAggregatesInput = {
    AND?: SubjectScoreScalarWhereWithAggregatesInput | SubjectScoreScalarWhereWithAggregatesInput[]
    OR?: SubjectScoreScalarWhereWithAggregatesInput[]
    NOT?: SubjectScoreScalarWhereWithAggregatesInput | SubjectScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubjectScore"> | number
    resultId?: IntWithAggregatesFilter<"SubjectScore"> | number
    subject?: StringWithAggregatesFilter<"SubjectScore"> | string
    caScore?: FloatWithAggregatesFilter<"SubjectScore"> | number
    examScore?: FloatWithAggregatesFilter<"SubjectScore"> | number
    totalScore?: FloatWithAggregatesFilter<"SubjectScore"> | number
    grade?: EnumGradeNullableWithAggregatesFilter<"SubjectScore"> | $Enums.Grade | null
    remark?: StringNullableWithAggregatesFilter<"SubjectScore"> | string | null
    classAverage?: FloatNullableWithAggregatesFilter<"SubjectScore"> | number | null
    highestInClass?: FloatNullableWithAggregatesFilter<"SubjectScore"> | number | null
    lowestInClass?: FloatNullableWithAggregatesFilter<"SubjectScore"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"SubjectScore"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubjectScore"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    code?: StringNullableFilter<"Subject"> | string | null
    caMaxScore?: FloatFilter<"Subject"> | number
    examMaxScore?: FloatFilter<"Subject"> | number
    isActive?: BoolFilter<"Subject"> | boolean
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    students?: StudentSubjectListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    caMaxScore?: SortOrder
    examMaxScore?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    students?: StudentSubjectOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    code?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    caMaxScore?: FloatFilter<"Subject"> | number
    examMaxScore?: FloatFilter<"Subject"> | number
    isActive?: BoolFilter<"Subject"> | boolean
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    students?: StudentSubjectListRelationFilter
  }, "id" | "name" | "code">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    caMaxScore?: SortOrder
    examMaxScore?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subject"> | number
    name?: StringWithAggregatesFilter<"Subject"> | string
    code?: StringNullableWithAggregatesFilter<"Subject"> | string | null
    caMaxScore?: FloatWithAggregatesFilter<"Subject"> | number
    examMaxScore?: FloatWithAggregatesFilter<"Subject"> | number
    isActive?: BoolWithAggregatesFilter<"Subject"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type StudentSubjectWhereInput = {
    AND?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    OR?: StudentSubjectWhereInput[]
    NOT?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    id?: IntFilter<"StudentSubject"> | number
    studentId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    createdAt?: DateTimeFilter<"StudentSubject"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type StudentSubjectOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type StudentSubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_subjectId?: StudentSubjectStudentIdSubjectIdCompoundUniqueInput
    AND?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    OR?: StudentSubjectWhereInput[]
    NOT?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    studentId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    createdAt?: DateTimeFilter<"StudentSubject"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "id" | "studentId_subjectId">

  export type StudentSubjectOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
    _count?: StudentSubjectCountOrderByAggregateInput
    _avg?: StudentSubjectAvgOrderByAggregateInput
    _max?: StudentSubjectMaxOrderByAggregateInput
    _min?: StudentSubjectMinOrderByAggregateInput
    _sum?: StudentSubjectSumOrderByAggregateInput
  }

  export type StudentSubjectScalarWhereWithAggregatesInput = {
    AND?: StudentSubjectScalarWhereWithAggregatesInput | StudentSubjectScalarWhereWithAggregatesInput[]
    OR?: StudentSubjectScalarWhereWithAggregatesInput[]
    NOT?: StudentSubjectScalarWhereWithAggregatesInput | StudentSubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentSubject"> | number
    studentId?: IntWithAggregatesFilter<"StudentSubject"> | number
    subjectId?: IntWithAggregatesFilter<"StudentSubject"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StudentSubject"> | Date | string
  }

  export type GradeScaleWhereInput = {
    AND?: GradeScaleWhereInput | GradeScaleWhereInput[]
    OR?: GradeScaleWhereInput[]
    NOT?: GradeScaleWhereInput | GradeScaleWhereInput[]
    id?: IntFilter<"GradeScale"> | number
    grade?: EnumGradeFilter<"GradeScale"> | $Enums.Grade
    minScore?: FloatFilter<"GradeScale"> | number
    maxScore?: FloatFilter<"GradeScale"> | number
    remark?: StringFilter<"GradeScale"> | string
    createdAt?: DateTimeFilter<"GradeScale"> | Date | string
    updatedAt?: DateTimeFilter<"GradeScale"> | Date | string
  }

  export type GradeScaleOrderByWithRelationInput = {
    id?: SortOrder
    grade?: SortOrder
    minScore?: SortOrder
    maxScore?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradeScaleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    minScore_maxScore?: GradeScaleMinScoreMaxScoreCompoundUniqueInput
    AND?: GradeScaleWhereInput | GradeScaleWhereInput[]
    OR?: GradeScaleWhereInput[]
    NOT?: GradeScaleWhereInput | GradeScaleWhereInput[]
    grade?: EnumGradeFilter<"GradeScale"> | $Enums.Grade
    minScore?: FloatFilter<"GradeScale"> | number
    maxScore?: FloatFilter<"GradeScale"> | number
    remark?: StringFilter<"GradeScale"> | string
    createdAt?: DateTimeFilter<"GradeScale"> | Date | string
    updatedAt?: DateTimeFilter<"GradeScale"> | Date | string
  }, "id" | "minScore_maxScore">

  export type GradeScaleOrderByWithAggregationInput = {
    id?: SortOrder
    grade?: SortOrder
    minScore?: SortOrder
    maxScore?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GradeScaleCountOrderByAggregateInput
    _avg?: GradeScaleAvgOrderByAggregateInput
    _max?: GradeScaleMaxOrderByAggregateInput
    _min?: GradeScaleMinOrderByAggregateInput
    _sum?: GradeScaleSumOrderByAggregateInput
  }

  export type GradeScaleScalarWhereWithAggregatesInput = {
    AND?: GradeScaleScalarWhereWithAggregatesInput | GradeScaleScalarWhereWithAggregatesInput[]
    OR?: GradeScaleScalarWhereWithAggregatesInput[]
    NOT?: GradeScaleScalarWhereWithAggregatesInput | GradeScaleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GradeScale"> | number
    grade?: EnumGradeWithAggregatesFilter<"GradeScale"> | $Enums.Grade
    minScore?: FloatWithAggregatesFilter<"GradeScale"> | number
    maxScore?: FloatWithAggregatesFilter<"GradeScale"> | number
    remark?: StringWithAggregatesFilter<"GradeScale"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GradeScale"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GradeScale"> | Date | string
  }

  export type SchoolSettingsWhereInput = {
    AND?: SchoolSettingsWhereInput | SchoolSettingsWhereInput[]
    OR?: SchoolSettingsWhereInput[]
    NOT?: SchoolSettingsWhereInput | SchoolSettingsWhereInput[]
    id?: IntFilter<"SchoolSettings"> | number
    schoolName?: StringFilter<"SchoolSettings"> | string
    schoolAddress?: StringNullableFilter<"SchoolSettings"> | string | null
    schoolPhone?: StringNullableFilter<"SchoolSettings"> | string | null
    schoolEmail?: StringNullableFilter<"SchoolSettings"> | string | null
    schoolLogo?: StringNullableFilter<"SchoolSettings"> | string | null
    currentSession?: StringFilter<"SchoolSettings"> | string
    currentTerm?: EnumTermFilter<"SchoolSettings"> | $Enums.Term
    nextTermBegins?: DateTimeNullableFilter<"SchoolSettings"> | Date | string | null
    passmark?: FloatFilter<"SchoolSettings"> | number
    updatedAt?: DateTimeFilter<"SchoolSettings"> | Date | string
  }

  export type SchoolSettingsOrderByWithRelationInput = {
    id?: SortOrder
    schoolName?: SortOrder
    schoolAddress?: SortOrderInput | SortOrder
    schoolPhone?: SortOrderInput | SortOrder
    schoolEmail?: SortOrderInput | SortOrder
    schoolLogo?: SortOrderInput | SortOrder
    currentSession?: SortOrder
    currentTerm?: SortOrder
    nextTermBegins?: SortOrderInput | SortOrder
    passmark?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SchoolSettingsWhereInput | SchoolSettingsWhereInput[]
    OR?: SchoolSettingsWhereInput[]
    NOT?: SchoolSettingsWhereInput | SchoolSettingsWhereInput[]
    schoolName?: StringFilter<"SchoolSettings"> | string
    schoolAddress?: StringNullableFilter<"SchoolSettings"> | string | null
    schoolPhone?: StringNullableFilter<"SchoolSettings"> | string | null
    schoolEmail?: StringNullableFilter<"SchoolSettings"> | string | null
    schoolLogo?: StringNullableFilter<"SchoolSettings"> | string | null
    currentSession?: StringFilter<"SchoolSettings"> | string
    currentTerm?: EnumTermFilter<"SchoolSettings"> | $Enums.Term
    nextTermBegins?: DateTimeNullableFilter<"SchoolSettings"> | Date | string | null
    passmark?: FloatFilter<"SchoolSettings"> | number
    updatedAt?: DateTimeFilter<"SchoolSettings"> | Date | string
  }, "id">

  export type SchoolSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    schoolName?: SortOrder
    schoolAddress?: SortOrderInput | SortOrder
    schoolPhone?: SortOrderInput | SortOrder
    schoolEmail?: SortOrderInput | SortOrder
    schoolLogo?: SortOrderInput | SortOrder
    currentSession?: SortOrder
    currentTerm?: SortOrder
    nextTermBegins?: SortOrderInput | SortOrder
    passmark?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolSettingsCountOrderByAggregateInput
    _avg?: SchoolSettingsAvgOrderByAggregateInput
    _max?: SchoolSettingsMaxOrderByAggregateInput
    _min?: SchoolSettingsMinOrderByAggregateInput
    _sum?: SchoolSettingsSumOrderByAggregateInput
  }

  export type SchoolSettingsScalarWhereWithAggregatesInput = {
    AND?: SchoolSettingsScalarWhereWithAggregatesInput | SchoolSettingsScalarWhereWithAggregatesInput[]
    OR?: SchoolSettingsScalarWhereWithAggregatesInput[]
    NOT?: SchoolSettingsScalarWhereWithAggregatesInput | SchoolSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SchoolSettings"> | number
    schoolName?: StringWithAggregatesFilter<"SchoolSettings"> | string
    schoolAddress?: StringNullableWithAggregatesFilter<"SchoolSettings"> | string | null
    schoolPhone?: StringNullableWithAggregatesFilter<"SchoolSettings"> | string | null
    schoolEmail?: StringNullableWithAggregatesFilter<"SchoolSettings"> | string | null
    schoolLogo?: StringNullableWithAggregatesFilter<"SchoolSettings"> | string | null
    currentSession?: StringWithAggregatesFilter<"SchoolSettings"> | string
    currentTerm?: EnumTermWithAggregatesFilter<"SchoolSettings"> | $Enums.Term
    nextTermBegins?: DateTimeNullableWithAggregatesFilter<"SchoolSettings"> | Date | string | null
    passmark?: FloatWithAggregatesFilter<"SchoolSettings"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"SchoolSettings"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    userId?: IntNullableFilter<"AuditLog"> | number | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: IntNullableFilter<"AuditLog"> | number | null
    changes?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    changes?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: IntNullableFilter<"AuditLog"> | number | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: IntNullableFilter<"AuditLog"> | number | null
    changes?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    changes?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    userId?: IntNullableWithAggregatesFilter<"AuditLog"> | number | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: IntNullableWithAggregatesFilter<"AuditLog"> | number | null
    changes?: JsonNullableWithAggregatesFilter<"AuditLog">
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type AuthUserWhereInput = {
    AND?: AuthUserWhereInput | AuthUserWhereInput[]
    OR?: AuthUserWhereInput[]
    NOT?: AuthUserWhereInput | AuthUserWhereInput[]
    id?: StringFilter<"AuthUser"> | string
    name?: StringFilter<"AuthUser"> | string
    email?: StringFilter<"AuthUser"> | string
    emailVerified?: BoolFilter<"AuthUser"> | boolean
    image?: StringNullableFilter<"AuthUser"> | string | null
    createdAt?: DateTimeFilter<"AuthUser"> | Date | string
    updatedAt?: DateTimeFilter<"AuthUser"> | Date | string
    sessions?: AuthSessionListRelationFilter
    accounts?: AuthAccountListRelationFilter
  }

  export type AuthUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: AuthSessionOrderByRelationAggregateInput
    accounts?: AuthAccountOrderByRelationAggregateInput
  }

  export type AuthUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AuthUserWhereInput | AuthUserWhereInput[]
    OR?: AuthUserWhereInput[]
    NOT?: AuthUserWhereInput | AuthUserWhereInput[]
    name?: StringFilter<"AuthUser"> | string
    emailVerified?: BoolFilter<"AuthUser"> | boolean
    image?: StringNullableFilter<"AuthUser"> | string | null
    createdAt?: DateTimeFilter<"AuthUser"> | Date | string
    updatedAt?: DateTimeFilter<"AuthUser"> | Date | string
    sessions?: AuthSessionListRelationFilter
    accounts?: AuthAccountListRelationFilter
  }, "id" | "email">

  export type AuthUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthUserCountOrderByAggregateInput
    _max?: AuthUserMaxOrderByAggregateInput
    _min?: AuthUserMinOrderByAggregateInput
  }

  export type AuthUserScalarWhereWithAggregatesInput = {
    AND?: AuthUserScalarWhereWithAggregatesInput | AuthUserScalarWhereWithAggregatesInput[]
    OR?: AuthUserScalarWhereWithAggregatesInput[]
    NOT?: AuthUserScalarWhereWithAggregatesInput | AuthUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthUser"> | string
    name?: StringWithAggregatesFilter<"AuthUser"> | string
    email?: StringWithAggregatesFilter<"AuthUser"> | string
    emailVerified?: BoolWithAggregatesFilter<"AuthUser"> | boolean
    image?: StringNullableWithAggregatesFilter<"AuthUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuthUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuthUser"> | Date | string
  }

  export type AuthSessionWhereInput = {
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    token?: StringFilter<"AuthSession"> | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    updatedAt?: DateTimeFilter<"AuthSession"> | Date | string
    ipAddress?: StringNullableFilter<"AuthSession"> | string | null
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    userId?: StringFilter<"AuthSession"> | string
    user?: XOR<AuthUserScalarRelationFilter, AuthUserWhereInput>
  }

  export type AuthSessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: AuthUserOrderByWithRelationInput
  }

  export type AuthSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    updatedAt?: DateTimeFilter<"AuthSession"> | Date | string
    ipAddress?: StringNullableFilter<"AuthSession"> | string | null
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    userId?: StringFilter<"AuthSession"> | string
    user?: XOR<AuthUserScalarRelationFilter, AuthUserWhereInput>
  }, "id" | "token">

  export type AuthSessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: AuthSessionCountOrderByAggregateInput
    _max?: AuthSessionMaxOrderByAggregateInput
    _min?: AuthSessionMinOrderByAggregateInput
  }

  export type AuthSessionScalarWhereWithAggregatesInput = {
    AND?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    OR?: AuthSessionScalarWhereWithAggregatesInput[]
    NOT?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthSession"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    token?: StringWithAggregatesFilter<"AuthSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    userId?: StringWithAggregatesFilter<"AuthSession"> | string
  }

  export type AuthAccountWhereInput = {
    AND?: AuthAccountWhereInput | AuthAccountWhereInput[]
    OR?: AuthAccountWhereInput[]
    NOT?: AuthAccountWhereInput | AuthAccountWhereInput[]
    id?: StringFilter<"AuthAccount"> | string
    accountId?: StringFilter<"AuthAccount"> | string
    providerId?: StringFilter<"AuthAccount"> | string
    userId?: StringFilter<"AuthAccount"> | string
    accessToken?: StringNullableFilter<"AuthAccount"> | string | null
    refreshToken?: StringNullableFilter<"AuthAccount"> | string | null
    idToken?: StringNullableFilter<"AuthAccount"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"AuthAccount"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"AuthAccount"> | Date | string | null
    scope?: StringNullableFilter<"AuthAccount"> | string | null
    password?: StringNullableFilter<"AuthAccount"> | string | null
    createdAt?: DateTimeFilter<"AuthAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AuthAccount"> | Date | string
    user?: XOR<AuthUserScalarRelationFilter, AuthUserWhereInput>
  }

  export type AuthAccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: AuthUserOrderByWithRelationInput
  }

  export type AuthAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthAccountWhereInput | AuthAccountWhereInput[]
    OR?: AuthAccountWhereInput[]
    NOT?: AuthAccountWhereInput | AuthAccountWhereInput[]
    accountId?: StringFilter<"AuthAccount"> | string
    providerId?: StringFilter<"AuthAccount"> | string
    userId?: StringFilter<"AuthAccount"> | string
    accessToken?: StringNullableFilter<"AuthAccount"> | string | null
    refreshToken?: StringNullableFilter<"AuthAccount"> | string | null
    idToken?: StringNullableFilter<"AuthAccount"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"AuthAccount"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"AuthAccount"> | Date | string | null
    scope?: StringNullableFilter<"AuthAccount"> | string | null
    password?: StringNullableFilter<"AuthAccount"> | string | null
    createdAt?: DateTimeFilter<"AuthAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AuthAccount"> | Date | string
    user?: XOR<AuthUserScalarRelationFilter, AuthUserWhereInput>
  }, "id">

  export type AuthAccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthAccountCountOrderByAggregateInput
    _max?: AuthAccountMaxOrderByAggregateInput
    _min?: AuthAccountMinOrderByAggregateInput
  }

  export type AuthAccountScalarWhereWithAggregatesInput = {
    AND?: AuthAccountScalarWhereWithAggregatesInput | AuthAccountScalarWhereWithAggregatesInput[]
    OR?: AuthAccountScalarWhereWithAggregatesInput[]
    NOT?: AuthAccountScalarWhereWithAggregatesInput | AuthAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthAccount"> | string
    accountId?: StringWithAggregatesFilter<"AuthAccount"> | string
    providerId?: StringWithAggregatesFilter<"AuthAccount"> | string
    userId?: StringWithAggregatesFilter<"AuthAccount"> | string
    accessToken?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"AuthAccount"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"AuthAccount"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
    password?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuthAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuthAccount"> | Date | string
  }

  export type AuthVerificationWhereInput = {
    AND?: AuthVerificationWhereInput | AuthVerificationWhereInput[]
    OR?: AuthVerificationWhereInput[]
    NOT?: AuthVerificationWhereInput | AuthVerificationWhereInput[]
    id?: StringFilter<"AuthVerification"> | string
    identifier?: StringFilter<"AuthVerification"> | string
    value?: StringFilter<"AuthVerification"> | string
    expiresAt?: DateTimeFilter<"AuthVerification"> | Date | string
    createdAt?: DateTimeNullableFilter<"AuthVerification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"AuthVerification"> | Date | string | null
  }

  export type AuthVerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type AuthVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthVerificationWhereInput | AuthVerificationWhereInput[]
    OR?: AuthVerificationWhereInput[]
    NOT?: AuthVerificationWhereInput | AuthVerificationWhereInput[]
    identifier?: StringFilter<"AuthVerification"> | string
    value?: StringFilter<"AuthVerification"> | string
    expiresAt?: DateTimeFilter<"AuthVerification"> | Date | string
    createdAt?: DateTimeNullableFilter<"AuthVerification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"AuthVerification"> | Date | string | null
  }, "id">

  export type AuthVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AuthVerificationCountOrderByAggregateInput
    _max?: AuthVerificationMaxOrderByAggregateInput
    _min?: AuthVerificationMinOrderByAggregateInput
  }

  export type AuthVerificationScalarWhereWithAggregatesInput = {
    AND?: AuthVerificationScalarWhereWithAggregatesInput | AuthVerificationScalarWhereWithAggregatesInput[]
    OR?: AuthVerificationScalarWhereWithAggregatesInput[]
    NOT?: AuthVerificationScalarWhereWithAggregatesInput | AuthVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthVerification"> | string
    identifier?: StringWithAggregatesFilter<"AuthVerification"> | string
    value?: StringWithAggregatesFilter<"AuthVerification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AuthVerification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"AuthVerification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"AuthVerification"> | Date | string | null
  }

  export type UserCreateInput = {
    email: string
    name: string
    password: string
    role?: $Enums.Role
    image?: string | null
    phoneNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    classrooms?: ClassroomCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    image?: string | null
    phoneNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    classrooms?: ClassroomUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classrooms?: ClassroomUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classrooms?: ClassroomUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    image?: string | null
    phoneNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomCreateInput = {
    name: string
    section?: string | null
    session: string
    currentTerm?: $Enums.Term
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutClassroomsInput
    students?: StudentCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateInput = {
    id?: number
    name: string
    section?: string | null
    session: string
    currentTerm?: $Enums.Term
    teacherId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutClassroomsNestedInput
    students?: StudentUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    teacherId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomCreateManyInput = {
    id?: number
    name: string
    section?: string | null
    session: string
    currentTerm?: $Enums.Term
    teacherId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassroomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    teacherId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    admissionNo: string
    firstName: string
    lastName: string
    otherNames?: string | null
    gender: $Enums.Gender
    dateOfBirth?: Date | string | null
    image?: string | null
    guardianName?: string | null
    guardianPhone?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    classroom: ClassroomCreateNestedOneWithoutStudentsInput
    results?: ResultCreateNestedManyWithoutStudentInput
    subjects?: StudentSubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    admissionNo: string
    firstName: string
    lastName: string
    otherNames?: string | null
    gender: $Enums.Gender
    dateOfBirth?: Date | string | null
    image?: string | null
    classroomId: number
    guardianName?: string | null
    guardianPhone?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: ResultUncheckedCreateNestedManyWithoutStudentInput
    subjects?: StudentSubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    admissionNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutStudentsNestedInput
    results?: ResultUpdateManyWithoutStudentNestedInput
    subjects?: StudentSubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    classroomId?: IntFieldUpdateOperationsInput | number
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUncheckedUpdateManyWithoutStudentNestedInput
    subjects?: StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    admissionNo: string
    firstName: string
    lastName: string
    otherNames?: string | null
    gender: $Enums.Gender
    dateOfBirth?: Date | string | null
    image?: string | null
    classroomId: number
    guardianName?: string | null
    guardianPhone?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    admissionNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    classroomId?: IntFieldUpdateOperationsInput | number
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultCreateInput = {
    term: $Enums.Term
    session: string
    timesSchoolOpened?: number
    timesPresent?: number
    timesAbsent?: number
    teacherComment?: string | null
    principalComment?: string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: number
    averageScore?: number
    classPosition?: number | null
    totalStudents?: number | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
    student: StudentCreateNestedOneWithoutResultsInput
    subjects?: SubjectScoreCreateNestedManyWithoutResultInput
  }

  export type ResultUncheckedCreateInput = {
    id?: number
    studentId: number
    term: $Enums.Term
    session: string
    timesSchoolOpened?: number
    timesPresent?: number
    timesAbsent?: number
    teacherComment?: string | null
    principalComment?: string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: number
    averageScore?: number
    classPosition?: number | null
    totalStudents?: number | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
    subjects?: SubjectScoreUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultUpdateInput = {
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    timesSchoolOpened?: IntFieldUpdateOperationsInput | number
    timesPresent?: IntFieldUpdateOperationsInput | number
    timesAbsent?: IntFieldUpdateOperationsInput | number
    teacherComment?: NullableStringFieldUpdateOperationsInput | string | null
    principalComment?: NullableStringFieldUpdateOperationsInput | string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: FloatFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    classPosition?: NullableIntFieldUpdateOperationsInput | number | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    student?: StudentUpdateOneRequiredWithoutResultsNestedInput
    subjects?: SubjectScoreUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    timesSchoolOpened?: IntFieldUpdateOperationsInput | number
    timesPresent?: IntFieldUpdateOperationsInput | number
    timesAbsent?: IntFieldUpdateOperationsInput | number
    teacherComment?: NullableStringFieldUpdateOperationsInput | string | null
    principalComment?: NullableStringFieldUpdateOperationsInput | string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: FloatFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    classPosition?: NullableIntFieldUpdateOperationsInput | number | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    subjects?: SubjectScoreUncheckedUpdateManyWithoutResultNestedInput
  }

  export type ResultCreateManyInput = {
    id?: number
    studentId: number
    term: $Enums.Term
    session: string
    timesSchoolOpened?: number
    timesPresent?: number
    timesAbsent?: number
    teacherComment?: string | null
    principalComment?: string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: number
    averageScore?: number
    classPosition?: number | null
    totalStudents?: number | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
  }

  export type ResultUpdateManyMutationInput = {
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    timesSchoolOpened?: IntFieldUpdateOperationsInput | number
    timesPresent?: IntFieldUpdateOperationsInput | number
    timesAbsent?: IntFieldUpdateOperationsInput | number
    teacherComment?: NullableStringFieldUpdateOperationsInput | string | null
    principalComment?: NullableStringFieldUpdateOperationsInput | string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: FloatFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    classPosition?: NullableIntFieldUpdateOperationsInput | number | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    timesSchoolOpened?: IntFieldUpdateOperationsInput | number
    timesPresent?: IntFieldUpdateOperationsInput | number
    timesAbsent?: IntFieldUpdateOperationsInput | number
    teacherComment?: NullableStringFieldUpdateOperationsInput | string | null
    principalComment?: NullableStringFieldUpdateOperationsInput | string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: FloatFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    classPosition?: NullableIntFieldUpdateOperationsInput | number | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubjectScoreCreateInput = {
    subject: string
    caScore?: number
    examScore?: number
    totalScore?: number
    grade?: $Enums.Grade | null
    remark?: string | null
    classAverage?: number | null
    highestInClass?: number | null
    lowestInClass?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    result: ResultCreateNestedOneWithoutSubjectsInput
  }

  export type SubjectScoreUncheckedCreateInput = {
    id?: number
    resultId: number
    subject: string
    caScore?: number
    examScore?: number
    totalScore?: number
    grade?: $Enums.Grade | null
    remark?: string | null
    classAverage?: number | null
    highestInClass?: number | null
    lowestInClass?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectScoreUpdateInput = {
    subject?: StringFieldUpdateOperationsInput | string
    caScore?: FloatFieldUpdateOperationsInput | number
    examScore?: FloatFieldUpdateOperationsInput | number
    totalScore?: FloatFieldUpdateOperationsInput | number
    grade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    classAverage?: NullableFloatFieldUpdateOperationsInput | number | null
    highestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    lowestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: ResultUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type SubjectScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    resultId?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    caScore?: FloatFieldUpdateOperationsInput | number
    examScore?: FloatFieldUpdateOperationsInput | number
    totalScore?: FloatFieldUpdateOperationsInput | number
    grade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    classAverage?: NullableFloatFieldUpdateOperationsInput | number | null
    highestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    lowestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectScoreCreateManyInput = {
    id?: number
    resultId: number
    subject: string
    caScore?: number
    examScore?: number
    totalScore?: number
    grade?: $Enums.Grade | null
    remark?: string | null
    classAverage?: number | null
    highestInClass?: number | null
    lowestInClass?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectScoreUpdateManyMutationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    caScore?: FloatFieldUpdateOperationsInput | number
    examScore?: FloatFieldUpdateOperationsInput | number
    totalScore?: FloatFieldUpdateOperationsInput | number
    grade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    classAverage?: NullableFloatFieldUpdateOperationsInput | number | null
    highestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    lowestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    resultId?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    caScore?: FloatFieldUpdateOperationsInput | number
    examScore?: FloatFieldUpdateOperationsInput | number
    totalScore?: FloatFieldUpdateOperationsInput | number
    grade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    classAverage?: NullableFloatFieldUpdateOperationsInput | number | null
    highestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    lowestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    name: string
    code?: string | null
    caMaxScore?: number
    examMaxScore?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: number
    name: string
    code?: string | null
    caMaxScore?: number
    examMaxScore?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    caMaxScore?: FloatFieldUpdateOperationsInput | number
    examMaxScore?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    caMaxScore?: FloatFieldUpdateOperationsInput | number
    examMaxScore?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: number
    name: string
    code?: string | null
    caMaxScore?: number
    examMaxScore?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    caMaxScore?: FloatFieldUpdateOperationsInput | number
    examMaxScore?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    caMaxScore?: FloatFieldUpdateOperationsInput | number
    examMaxScore?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectCreateInput = {
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutSubjectsInput
    subject: SubjectCreateNestedOneWithoutStudentsInput
  }

  export type StudentSubjectUncheckedCreateInput = {
    id?: number
    studentId: number
    subjectId: number
    createdAt?: Date | string
  }

  export type StudentSubjectUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentSubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectCreateManyInput = {
    id?: number
    studentId: number
    subjectId: number
    createdAt?: Date | string
  }

  export type StudentSubjectUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeScaleCreateInput = {
    grade: $Enums.Grade
    minScore: number
    maxScore: number
    remark: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeScaleUncheckedCreateInput = {
    id?: number
    grade: $Enums.Grade
    minScore: number
    maxScore: number
    remark: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeScaleUpdateInput = {
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    minScore?: FloatFieldUpdateOperationsInput | number
    maxScore?: FloatFieldUpdateOperationsInput | number
    remark?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeScaleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    minScore?: FloatFieldUpdateOperationsInput | number
    maxScore?: FloatFieldUpdateOperationsInput | number
    remark?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeScaleCreateManyInput = {
    id?: number
    grade: $Enums.Grade
    minScore: number
    maxScore: number
    remark: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeScaleUpdateManyMutationInput = {
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    minScore?: FloatFieldUpdateOperationsInput | number
    maxScore?: FloatFieldUpdateOperationsInput | number
    remark?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeScaleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    grade?: EnumGradeFieldUpdateOperationsInput | $Enums.Grade
    minScore?: FloatFieldUpdateOperationsInput | number
    maxScore?: FloatFieldUpdateOperationsInput | number
    remark?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolSettingsCreateInput = {
    schoolName?: string
    schoolAddress?: string | null
    schoolPhone?: string | null
    schoolEmail?: string | null
    schoolLogo?: string | null
    currentSession: string
    currentTerm?: $Enums.Term
    nextTermBegins?: Date | string | null
    passmark?: number
    updatedAt?: Date | string
  }

  export type SchoolSettingsUncheckedCreateInput = {
    id?: number
    schoolName?: string
    schoolAddress?: string | null
    schoolPhone?: string | null
    schoolEmail?: string | null
    schoolLogo?: string | null
    currentSession: string
    currentTerm?: $Enums.Term
    nextTermBegins?: Date | string | null
    passmark?: number
    updatedAt?: Date | string
  }

  export type SchoolSettingsUpdateInput = {
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    schoolPhone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolEmail?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentSession?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    nextTermBegins?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passmark?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    schoolPhone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolEmail?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentSession?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    nextTermBegins?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passmark?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolSettingsCreateManyInput = {
    id?: number
    schoolName?: string
    schoolAddress?: string | null
    schoolPhone?: string | null
    schoolEmail?: string | null
    schoolLogo?: string | null
    currentSession: string
    currentTerm?: $Enums.Term
    nextTermBegins?: Date | string | null
    passmark?: number
    updatedAt?: Date | string
  }

  export type SchoolSettingsUpdateManyMutationInput = {
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    schoolPhone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolEmail?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentSession?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    nextTermBegins?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passmark?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolName?: StringFieldUpdateOperationsInput | string
    schoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    schoolPhone?: NullableStringFieldUpdateOperationsInput | string | null
    schoolEmail?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentSession?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    nextTermBegins?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passmark?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    userId?: number | null
    action: string
    entity: string
    entityId?: number | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    userId?: number | null
    action: string
    entity: string
    entityId?: number | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: number
    userId?: number | null
    action: string
    entity: string
    entityId?: number | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthUserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: AuthSessionCreateNestedManyWithoutUserInput
    accounts?: AuthAccountCreateNestedManyWithoutUserInput
  }

  export type AuthUserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type AuthUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: AuthSessionUpdateManyWithoutUserNestedInput
    accounts?: AuthAccountUpdateManyWithoutUserNestedInput
  }

  export type AuthUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthUserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AuthUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: AuthUserCreateNestedOneWithoutSessionsInput
  }

  export type AuthSessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type AuthSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: AuthUserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type AuthSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthSessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type AuthSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthAccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: AuthUserCreateNestedOneWithoutAccountsInput
  }

  export type AuthAccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AuthAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AuthUserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AuthAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AuthAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthVerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AuthVerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AuthVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthVerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AuthVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ClassroomListRelationFilter = {
    every?: ClassroomWhereInput
    some?: ClassroomWhereInput
    none?: ClassroomWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClassroomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
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
    image?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumTermFilter<$PrismaModel = never> = {
    equals?: $Enums.Term | EnumTermFieldRefInput<$PrismaModel>
    in?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    notIn?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    not?: NestedEnumTermFilter<$PrismaModel> | $Enums.Term
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassroomNameSectionSessionCompoundUniqueInput = {
    name: string
    section: string
    session: string
  }

  export type ClassroomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    section?: SortOrder
    session?: SortOrder
    currentTerm?: SortOrder
    teacherId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassroomAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type ClassroomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    section?: SortOrder
    session?: SortOrder
    currentTerm?: SortOrder
    teacherId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassroomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    section?: SortOrder
    session?: SortOrder
    currentTerm?: SortOrder
    teacherId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassroomSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type EnumTermWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Term | EnumTermFieldRefInput<$PrismaModel>
    in?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    notIn?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    not?: NestedEnumTermWithAggregatesFilter<$PrismaModel> | $Enums.Term
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTermFilter<$PrismaModel>
    _max?: NestedEnumTermFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type ClassroomScalarRelationFilter = {
    is?: ClassroomWhereInput
    isNot?: ClassroomWhereInput
  }

  export type ResultListRelationFilter = {
    every?: ResultWhereInput
    some?: ResultWhereInput
    none?: ResultWhereInput
  }

  export type StudentSubjectListRelationFilter = {
    every?: StudentSubjectWhereInput
    some?: StudentSubjectWhereInput
    none?: StudentSubjectWhereInput
  }

  export type ResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    admissionNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    otherNames?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    image?: SortOrder
    classroomId?: SortOrder
    guardianName?: SortOrder
    guardianPhone?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    classroomId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    admissionNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    otherNames?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    image?: SortOrder
    classroomId?: SortOrder
    guardianName?: SortOrder
    guardianPhone?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    admissionNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    otherNames?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    image?: SortOrder
    classroomId?: SortOrder
    guardianName?: SortOrder
    guardianPhone?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    classroomId?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type SubjectScoreListRelationFilter = {
    every?: SubjectScoreWhereInput
    some?: SubjectScoreWhereInput
    none?: SubjectScoreWhereInput
  }

  export type SubjectScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResultStudentIdTermSessionCompoundUniqueInput = {
    studentId: number
    term: $Enums.Term
    session: string
  }

  export type ResultCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    term?: SortOrder
    session?: SortOrder
    timesSchoolOpened?: SortOrder
    timesPresent?: SortOrder
    timesAbsent?: SortOrder
    teacherComment?: SortOrder
    principalComment?: SortOrder
    psychomotorRatings?: SortOrder
    affectiveDomain?: SortOrder
    totalScore?: SortOrder
    averageScore?: SortOrder
    classPosition?: SortOrder
    totalStudents?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ResultAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    timesSchoolOpened?: SortOrder
    timesPresent?: SortOrder
    timesAbsent?: SortOrder
    totalScore?: SortOrder
    averageScore?: SortOrder
    classPosition?: SortOrder
    totalStudents?: SortOrder
    createdBy?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    term?: SortOrder
    session?: SortOrder
    timesSchoolOpened?: SortOrder
    timesPresent?: SortOrder
    timesAbsent?: SortOrder
    teacherComment?: SortOrder
    principalComment?: SortOrder
    totalScore?: SortOrder
    averageScore?: SortOrder
    classPosition?: SortOrder
    totalStudents?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    term?: SortOrder
    session?: SortOrder
    timesSchoolOpened?: SortOrder
    timesPresent?: SortOrder
    timesAbsent?: SortOrder
    teacherComment?: SortOrder
    principalComment?: SortOrder
    totalScore?: SortOrder
    averageScore?: SortOrder
    classPosition?: SortOrder
    totalStudents?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ResultSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    timesSchoolOpened?: SortOrder
    timesPresent?: SortOrder
    timesAbsent?: SortOrder
    totalScore?: SortOrder
    averageScore?: SortOrder
    classPosition?: SortOrder
    totalStudents?: SortOrder
    createdBy?: SortOrder
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

  export type EnumGradeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGradeNullableFilter<$PrismaModel> | $Enums.Grade | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ResultScalarRelationFilter = {
    is?: ResultWhereInput
    isNot?: ResultWhereInput
  }

  export type SubjectScoreResultIdSubjectCompoundUniqueInput = {
    resultId: number
    subject: string
  }

  export type SubjectScoreCountOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    subject?: SortOrder
    caScore?: SortOrder
    examScore?: SortOrder
    totalScore?: SortOrder
    grade?: SortOrder
    remark?: SortOrder
    classAverage?: SortOrder
    highestInClass?: SortOrder
    lowestInClass?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    caScore?: SortOrder
    examScore?: SortOrder
    totalScore?: SortOrder
    classAverage?: SortOrder
    highestInClass?: SortOrder
    lowestInClass?: SortOrder
  }

  export type SubjectScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    subject?: SortOrder
    caScore?: SortOrder
    examScore?: SortOrder
    totalScore?: SortOrder
    grade?: SortOrder
    remark?: SortOrder
    classAverage?: SortOrder
    highestInClass?: SortOrder
    lowestInClass?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectScoreMinOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    subject?: SortOrder
    caScore?: SortOrder
    examScore?: SortOrder
    totalScore?: SortOrder
    grade?: SortOrder
    remark?: SortOrder
    classAverage?: SortOrder
    highestInClass?: SortOrder
    lowestInClass?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectScoreSumOrderByAggregateInput = {
    id?: SortOrder
    resultId?: SortOrder
    caScore?: SortOrder
    examScore?: SortOrder
    totalScore?: SortOrder
    classAverage?: SortOrder
    highestInClass?: SortOrder
    lowestInClass?: SortOrder
  }

  export type EnumGradeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGradeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Grade | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGradeNullableFilter<$PrismaModel>
    _max?: NestedEnumGradeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    caMaxScore?: SortOrder
    examMaxScore?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    caMaxScore?: SortOrder
    examMaxScore?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    caMaxScore?: SortOrder
    examMaxScore?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    caMaxScore?: SortOrder
    examMaxScore?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder
    caMaxScore?: SortOrder
    examMaxScore?: SortOrder
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type StudentSubjectStudentIdSubjectIdCompoundUniqueInput = {
    studentId: number
    subjectId: number
  }

  export type StudentSubjectCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentSubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
  }

  export type StudentSubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentSubjectMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentSubjectSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
  }

  export type EnumGradeFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel>
    in?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel>
    not?: NestedEnumGradeFilter<$PrismaModel> | $Enums.Grade
  }

  export type GradeScaleMinScoreMaxScoreCompoundUniqueInput = {
    minScore: number
    maxScore: number
  }

  export type GradeScaleCountOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    minScore?: SortOrder
    maxScore?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradeScaleAvgOrderByAggregateInput = {
    id?: SortOrder
    minScore?: SortOrder
    maxScore?: SortOrder
  }

  export type GradeScaleMaxOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    minScore?: SortOrder
    maxScore?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradeScaleMinOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    minScore?: SortOrder
    maxScore?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradeScaleSumOrderByAggregateInput = {
    id?: SortOrder
    minScore?: SortOrder
    maxScore?: SortOrder
  }

  export type EnumGradeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel>
    in?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel>
    not?: NestedEnumGradeWithAggregatesFilter<$PrismaModel> | $Enums.Grade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradeFilter<$PrismaModel>
    _max?: NestedEnumGradeFilter<$PrismaModel>
  }

  export type SchoolSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    schoolName?: SortOrder
    schoolAddress?: SortOrder
    schoolPhone?: SortOrder
    schoolEmail?: SortOrder
    schoolLogo?: SortOrder
    currentSession?: SortOrder
    currentTerm?: SortOrder
    nextTermBegins?: SortOrder
    passmark?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    passmark?: SortOrder
  }

  export type SchoolSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolName?: SortOrder
    schoolAddress?: SortOrder
    schoolPhone?: SortOrder
    schoolEmail?: SortOrder
    schoolLogo?: SortOrder
    currentSession?: SortOrder
    currentTerm?: SortOrder
    nextTermBegins?: SortOrder
    passmark?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    schoolName?: SortOrder
    schoolAddress?: SortOrder
    schoolPhone?: SortOrder
    schoolEmail?: SortOrder
    schoolLogo?: SortOrder
    currentSession?: SortOrder
    currentTerm?: SortOrder
    nextTermBegins?: SortOrder
    passmark?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolSettingsSumOrderByAggregateInput = {
    id?: SortOrder
    passmark?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    changes?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
  }

  export type AuthSessionListRelationFilter = {
    every?: AuthSessionWhereInput
    some?: AuthSessionWhereInput
    none?: AuthSessionWhereInput
  }

  export type AuthAccountListRelationFilter = {
    every?: AuthAccountWhereInput
    some?: AuthAccountWhereInput
    none?: AuthAccountWhereInput
  }

  export type AuthSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthUserScalarRelationFilter = {
    is?: AuthUserWhereInput
    isNot?: AuthUserWhereInput
  }

  export type AuthSessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AuthSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AuthSessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AuthAccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthAccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassroomCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassroomCreateWithoutTeacherInput, ClassroomUncheckedCreateWithoutTeacherInput> | ClassroomCreateWithoutTeacherInput[] | ClassroomUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutTeacherInput | ClassroomCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassroomCreateManyTeacherInputEnvelope
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
  }

  export type ClassroomUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassroomCreateWithoutTeacherInput, ClassroomUncheckedCreateWithoutTeacherInput> | ClassroomCreateWithoutTeacherInput[] | ClassroomUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutTeacherInput | ClassroomCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassroomCreateManyTeacherInputEnvelope
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClassroomUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassroomCreateWithoutTeacherInput, ClassroomUncheckedCreateWithoutTeacherInput> | ClassroomCreateWithoutTeacherInput[] | ClassroomUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutTeacherInput | ClassroomCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassroomUpsertWithWhereUniqueWithoutTeacherInput | ClassroomUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassroomCreateManyTeacherInputEnvelope
    set?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    disconnect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    delete?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    update?: ClassroomUpdateWithWhereUniqueWithoutTeacherInput | ClassroomUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassroomUpdateManyWithWhereWithoutTeacherInput | ClassroomUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClassroomUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassroomCreateWithoutTeacherInput, ClassroomUncheckedCreateWithoutTeacherInput> | ClassroomCreateWithoutTeacherInput[] | ClassroomUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassroomCreateOrConnectWithoutTeacherInput | ClassroomCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassroomUpsertWithWhereUniqueWithoutTeacherInput | ClassroomUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassroomCreateManyTeacherInputEnvelope
    set?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    disconnect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    delete?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    connect?: ClassroomWhereUniqueInput | ClassroomWhereUniqueInput[]
    update?: ClassroomUpdateWithWhereUniqueWithoutTeacherInput | ClassroomUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassroomUpdateManyWithWhereWithoutTeacherInput | ClassroomUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClassroomsInput = {
    create?: XOR<UserCreateWithoutClassroomsInput, UserUncheckedCreateWithoutClassroomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassroomsInput
    connect?: UserWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutClassroomInput = {
    create?: XOR<StudentCreateWithoutClassroomInput, StudentUncheckedCreateWithoutClassroomInput> | StudentCreateWithoutClassroomInput[] | StudentUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassroomInput | StudentCreateOrConnectWithoutClassroomInput[]
    createMany?: StudentCreateManyClassroomInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutClassroomInput = {
    create?: XOR<StudentCreateWithoutClassroomInput, StudentUncheckedCreateWithoutClassroomInput> | StudentCreateWithoutClassroomInput[] | StudentUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassroomInput | StudentCreateOrConnectWithoutClassroomInput[]
    createMany?: StudentCreateManyClassroomInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type EnumTermFieldUpdateOperationsInput = {
    set?: $Enums.Term
  }

  export type UserUpdateOneRequiredWithoutClassroomsNestedInput = {
    create?: XOR<UserCreateWithoutClassroomsInput, UserUncheckedCreateWithoutClassroomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassroomsInput
    upsert?: UserUpsertWithoutClassroomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClassroomsInput, UserUpdateWithoutClassroomsInput>, UserUncheckedUpdateWithoutClassroomsInput>
  }

  export type StudentUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<StudentCreateWithoutClassroomInput, StudentUncheckedCreateWithoutClassroomInput> | StudentCreateWithoutClassroomInput[] | StudentUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassroomInput | StudentCreateOrConnectWithoutClassroomInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClassroomInput | StudentUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: StudentCreateManyClassroomInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClassroomInput | StudentUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClassroomInput | StudentUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<StudentCreateWithoutClassroomInput, StudentUncheckedCreateWithoutClassroomInput> | StudentCreateWithoutClassroomInput[] | StudentUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassroomInput | StudentCreateOrConnectWithoutClassroomInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClassroomInput | StudentUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: StudentCreateManyClassroomInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClassroomInput | StudentUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClassroomInput | StudentUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ClassroomCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ClassroomCreateWithoutStudentsInput, ClassroomUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutStudentsInput
    connect?: ClassroomWhereUniqueInput
  }

  export type ResultCreateNestedManyWithoutStudentInput = {
    create?: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput> | ResultCreateWithoutStudentInput[] | ResultUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutStudentInput | ResultCreateOrConnectWithoutStudentInput[]
    createMany?: ResultCreateManyStudentInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type StudentSubjectCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput> | ResultCreateWithoutStudentInput[] | ResultUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutStudentInput | ResultCreateOrConnectWithoutStudentInput[]
    createMany?: ResultCreateManyStudentInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type StudentSubjectUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClassroomUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<ClassroomCreateWithoutStudentsInput, ClassroomUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutStudentsInput
    upsert?: ClassroomUpsertWithoutStudentsInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutStudentsInput, ClassroomUpdateWithoutStudentsInput>, ClassroomUncheckedUpdateWithoutStudentsInput>
  }

  export type ResultUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput> | ResultCreateWithoutStudentInput[] | ResultUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutStudentInput | ResultCreateOrConnectWithoutStudentInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutStudentInput | ResultUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ResultCreateManyStudentInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutStudentInput | ResultUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutStudentInput | ResultUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type StudentSubjectUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutStudentInput | StudentSubjectUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutStudentInput | StudentSubjectUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutStudentInput | StudentSubjectUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput> | ResultCreateWithoutStudentInput[] | ResultUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutStudentInput | ResultCreateOrConnectWithoutStudentInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutStudentInput | ResultUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ResultCreateManyStudentInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutStudentInput | ResultUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutStudentInput | ResultUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutStudentInput | StudentSubjectUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutStudentInput | StudentSubjectUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutStudentInput | StudentSubjectUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutResultsInput = {
    create?: XOR<StudentCreateWithoutResultsInput, StudentUncheckedCreateWithoutResultsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutResultsInput
    connect?: StudentWhereUniqueInput
  }

  export type SubjectScoreCreateNestedManyWithoutResultInput = {
    create?: XOR<SubjectScoreCreateWithoutResultInput, SubjectScoreUncheckedCreateWithoutResultInput> | SubjectScoreCreateWithoutResultInput[] | SubjectScoreUncheckedCreateWithoutResultInput[]
    connectOrCreate?: SubjectScoreCreateOrConnectWithoutResultInput | SubjectScoreCreateOrConnectWithoutResultInput[]
    createMany?: SubjectScoreCreateManyResultInputEnvelope
    connect?: SubjectScoreWhereUniqueInput | SubjectScoreWhereUniqueInput[]
  }

  export type SubjectScoreUncheckedCreateNestedManyWithoutResultInput = {
    create?: XOR<SubjectScoreCreateWithoutResultInput, SubjectScoreUncheckedCreateWithoutResultInput> | SubjectScoreCreateWithoutResultInput[] | SubjectScoreUncheckedCreateWithoutResultInput[]
    connectOrCreate?: SubjectScoreCreateOrConnectWithoutResultInput | SubjectScoreCreateOrConnectWithoutResultInput[]
    createMany?: SubjectScoreCreateManyResultInputEnvelope
    connect?: SubjectScoreWhereUniqueInput | SubjectScoreWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
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

  export type StudentUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<StudentCreateWithoutResultsInput, StudentUncheckedCreateWithoutResultsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutResultsInput
    upsert?: StudentUpsertWithoutResultsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutResultsInput, StudentUpdateWithoutResultsInput>, StudentUncheckedUpdateWithoutResultsInput>
  }

  export type SubjectScoreUpdateManyWithoutResultNestedInput = {
    create?: XOR<SubjectScoreCreateWithoutResultInput, SubjectScoreUncheckedCreateWithoutResultInput> | SubjectScoreCreateWithoutResultInput[] | SubjectScoreUncheckedCreateWithoutResultInput[]
    connectOrCreate?: SubjectScoreCreateOrConnectWithoutResultInput | SubjectScoreCreateOrConnectWithoutResultInput[]
    upsert?: SubjectScoreUpsertWithWhereUniqueWithoutResultInput | SubjectScoreUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: SubjectScoreCreateManyResultInputEnvelope
    set?: SubjectScoreWhereUniqueInput | SubjectScoreWhereUniqueInput[]
    disconnect?: SubjectScoreWhereUniqueInput | SubjectScoreWhereUniqueInput[]
    delete?: SubjectScoreWhereUniqueInput | SubjectScoreWhereUniqueInput[]
    connect?: SubjectScoreWhereUniqueInput | SubjectScoreWhereUniqueInput[]
    update?: SubjectScoreUpdateWithWhereUniqueWithoutResultInput | SubjectScoreUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: SubjectScoreUpdateManyWithWhereWithoutResultInput | SubjectScoreUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: SubjectScoreScalarWhereInput | SubjectScoreScalarWhereInput[]
  }

  export type SubjectScoreUncheckedUpdateManyWithoutResultNestedInput = {
    create?: XOR<SubjectScoreCreateWithoutResultInput, SubjectScoreUncheckedCreateWithoutResultInput> | SubjectScoreCreateWithoutResultInput[] | SubjectScoreUncheckedCreateWithoutResultInput[]
    connectOrCreate?: SubjectScoreCreateOrConnectWithoutResultInput | SubjectScoreCreateOrConnectWithoutResultInput[]
    upsert?: SubjectScoreUpsertWithWhereUniqueWithoutResultInput | SubjectScoreUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: SubjectScoreCreateManyResultInputEnvelope
    set?: SubjectScoreWhereUniqueInput | SubjectScoreWhereUniqueInput[]
    disconnect?: SubjectScoreWhereUniqueInput | SubjectScoreWhereUniqueInput[]
    delete?: SubjectScoreWhereUniqueInput | SubjectScoreWhereUniqueInput[]
    connect?: SubjectScoreWhereUniqueInput | SubjectScoreWhereUniqueInput[]
    update?: SubjectScoreUpdateWithWhereUniqueWithoutResultInput | SubjectScoreUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: SubjectScoreUpdateManyWithWhereWithoutResultInput | SubjectScoreUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: SubjectScoreScalarWhereInput | SubjectScoreScalarWhereInput[]
  }

  export type ResultCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<ResultCreateWithoutSubjectsInput, ResultUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: ResultCreateOrConnectWithoutSubjectsInput
    connect?: ResultWhereUniqueInput
  }

  export type NullableEnumGradeFieldUpdateOperationsInput = {
    set?: $Enums.Grade | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResultUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<ResultCreateWithoutSubjectsInput, ResultUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: ResultCreateOrConnectWithoutSubjectsInput
    upsert?: ResultUpsertWithoutSubjectsInput
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutSubjectsInput, ResultUpdateWithoutSubjectsInput>, ResultUncheckedUpdateWithoutSubjectsInput>
  }

  export type StudentSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type StudentSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput | StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput | StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutSubjectInput | StudentSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput | StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput | StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutSubjectInput | StudentSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubjectsInput
    connect?: StudentWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutStudentsInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput
    connect?: SubjectWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubjectsInput
    upsert?: StudentUpsertWithoutSubjectsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSubjectsInput, StudentUpdateWithoutSubjectsInput>, StudentUncheckedUpdateWithoutSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput
    upsert?: SubjectUpsertWithoutStudentsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutStudentsInput, SubjectUpdateWithoutStudentsInput>, SubjectUncheckedUpdateWithoutStudentsInput>
  }

  export type EnumGradeFieldUpdateOperationsInput = {
    set?: $Enums.Grade
  }

  export type AuthSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type AuthAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
  }

  export type AuthSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type AuthAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
  }

  export type AuthSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type AuthAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: AuthAccountUpsertWithWhereUniqueWithoutUserInput | AuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    set?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    disconnect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    delete?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    update?: AuthAccountUpdateWithWhereUniqueWithoutUserInput | AuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthAccountUpdateManyWithWhereWithoutUserInput | AuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type AuthAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: AuthAccountUpsertWithWhereUniqueWithoutUserInput | AuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    set?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    disconnect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    delete?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    update?: AuthAccountUpdateWithWhereUniqueWithoutUserInput | AuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthAccountUpdateManyWithWhereWithoutUserInput | AuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
  }

  export type AuthUserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<AuthUserCreateWithoutSessionsInput, AuthUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AuthUserCreateOrConnectWithoutSessionsInput
    connect?: AuthUserWhereUniqueInput
  }

  export type AuthUserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<AuthUserCreateWithoutSessionsInput, AuthUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AuthUserCreateOrConnectWithoutSessionsInput
    upsert?: AuthUserUpsertWithoutSessionsInput
    connect?: AuthUserWhereUniqueInput
    update?: XOR<XOR<AuthUserUpdateToOneWithWhereWithoutSessionsInput, AuthUserUpdateWithoutSessionsInput>, AuthUserUncheckedUpdateWithoutSessionsInput>
  }

  export type AuthUserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<AuthUserCreateWithoutAccountsInput, AuthUserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: AuthUserCreateOrConnectWithoutAccountsInput
    connect?: AuthUserWhereUniqueInput
  }

  export type AuthUserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<AuthUserCreateWithoutAccountsInput, AuthUserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: AuthUserCreateOrConnectWithoutAccountsInput
    upsert?: AuthUserUpsertWithoutAccountsInput
    connect?: AuthUserWhereUniqueInput
    update?: XOR<XOR<AuthUserUpdateToOneWithWhereWithoutAccountsInput, AuthUserUpdateWithoutAccountsInput>, AuthUserUncheckedUpdateWithoutAccountsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumTermFilter<$PrismaModel = never> = {
    equals?: $Enums.Term | EnumTermFieldRefInput<$PrismaModel>
    in?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    notIn?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    not?: NestedEnumTermFilter<$PrismaModel> | $Enums.Term
  }

  export type NestedEnumTermWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Term | EnumTermFieldRefInput<$PrismaModel>
    in?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    notIn?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    not?: NestedEnumTermWithAggregatesFilter<$PrismaModel> | $Enums.Term
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTermFilter<$PrismaModel>
    _max?: NestedEnumTermFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type NestedEnumGradeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGradeNullableFilter<$PrismaModel> | $Enums.Grade | null
  }

  export type NestedEnumGradeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGradeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Grade | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGradeNullableFilter<$PrismaModel>
    _max?: NestedEnumGradeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumGradeFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel>
    in?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel>
    not?: NestedEnumGradeFilter<$PrismaModel> | $Enums.Grade
  }

  export type NestedEnumGradeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Grade | EnumGradeFieldRefInput<$PrismaModel>
    in?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Grade[] | ListEnumGradeFieldRefInput<$PrismaModel>
    not?: NestedEnumGradeWithAggregatesFilter<$PrismaModel> | $Enums.Grade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradeFilter<$PrismaModel>
    _max?: NestedEnumGradeFilter<$PrismaModel>
  }

  export type ClassroomCreateWithoutTeacherInput = {
    name: string
    section?: string | null
    session: string
    currentTerm?: $Enums.Term
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutTeacherInput = {
    id?: number
    name: string
    section?: string | null
    session: string
    currentTerm?: $Enums.Term
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutTeacherInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutTeacherInput, ClassroomUncheckedCreateWithoutTeacherInput>
  }

  export type ClassroomCreateManyTeacherInputEnvelope = {
    data: ClassroomCreateManyTeacherInput | ClassroomCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ClassroomWhereUniqueInput
    update: XOR<ClassroomUpdateWithoutTeacherInput, ClassroomUncheckedUpdateWithoutTeacherInput>
    create: XOR<ClassroomCreateWithoutTeacherInput, ClassroomUncheckedCreateWithoutTeacherInput>
  }

  export type ClassroomUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ClassroomWhereUniqueInput
    data: XOR<ClassroomUpdateWithoutTeacherInput, ClassroomUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassroomUpdateManyWithWhereWithoutTeacherInput = {
    where: ClassroomScalarWhereInput
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ClassroomScalarWhereInput = {
    AND?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
    OR?: ClassroomScalarWhereInput[]
    NOT?: ClassroomScalarWhereInput | ClassroomScalarWhereInput[]
    id?: IntFilter<"Classroom"> | number
    name?: StringFilter<"Classroom"> | string
    section?: StringNullableFilter<"Classroom"> | string | null
    session?: StringFilter<"Classroom"> | string
    currentTerm?: EnumTermFilter<"Classroom"> | $Enums.Term
    teacherId?: IntFilter<"Classroom"> | number
    isActive?: BoolFilter<"Classroom"> | boolean
    createdAt?: DateTimeFilter<"Classroom"> | Date | string
    updatedAt?: DateTimeFilter<"Classroom"> | Date | string
  }

  export type UserCreateWithoutClassroomsInput = {
    email: string
    name: string
    password: string
    role?: $Enums.Role
    image?: string | null
    phoneNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutClassroomsInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    image?: string | null
    phoneNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutClassroomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClassroomsInput, UserUncheckedCreateWithoutClassroomsInput>
  }

  export type StudentCreateWithoutClassroomInput = {
    admissionNo: string
    firstName: string
    lastName: string
    otherNames?: string | null
    gender: $Enums.Gender
    dateOfBirth?: Date | string | null
    image?: string | null
    guardianName?: string | null
    guardianPhone?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: ResultCreateNestedManyWithoutStudentInput
    subjects?: StudentSubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutClassroomInput = {
    id?: number
    admissionNo: string
    firstName: string
    lastName: string
    otherNames?: string | null
    gender: $Enums.Gender
    dateOfBirth?: Date | string | null
    image?: string | null
    guardianName?: string | null
    guardianPhone?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: ResultUncheckedCreateNestedManyWithoutStudentInput
    subjects?: StudentSubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutClassroomInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClassroomInput, StudentUncheckedCreateWithoutClassroomInput>
  }

  export type StudentCreateManyClassroomInputEnvelope = {
    data: StudentCreateManyClassroomInput | StudentCreateManyClassroomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClassroomsInput = {
    update: XOR<UserUpdateWithoutClassroomsInput, UserUncheckedUpdateWithoutClassroomsInput>
    create: XOR<UserCreateWithoutClassroomsInput, UserUncheckedCreateWithoutClassroomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClassroomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClassroomsInput, UserUncheckedUpdateWithoutClassroomsInput>
  }

  export type UserUpdateWithoutClassroomsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutClassroomInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutClassroomInput, StudentUncheckedUpdateWithoutClassroomInput>
    create: XOR<StudentCreateWithoutClassroomInput, StudentUncheckedCreateWithoutClassroomInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutClassroomInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutClassroomInput, StudentUncheckedUpdateWithoutClassroomInput>
  }

  export type StudentUpdateManyWithWhereWithoutClassroomInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutClassroomInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    admissionNo?: StringFilter<"Student"> | string
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    otherNames?: StringNullableFilter<"Student"> | string | null
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    dateOfBirth?: DateTimeNullableFilter<"Student"> | Date | string | null
    image?: StringNullableFilter<"Student"> | string | null
    classroomId?: IntFilter<"Student"> | number
    guardianName?: StringNullableFilter<"Student"> | string | null
    guardianPhone?: StringNullableFilter<"Student"> | string | null
    address?: StringNullableFilter<"Student"> | string | null
    isActive?: BoolFilter<"Student"> | boolean
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type ClassroomCreateWithoutStudentsInput = {
    name: string
    section?: string | null
    session: string
    currentTerm?: $Enums.Term
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutClassroomsInput
  }

  export type ClassroomUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    section?: string | null
    session: string
    currentTerm?: $Enums.Term
    teacherId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassroomCreateOrConnectWithoutStudentsInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutStudentsInput, ClassroomUncheckedCreateWithoutStudentsInput>
  }

  export type ResultCreateWithoutStudentInput = {
    term: $Enums.Term
    session: string
    timesSchoolOpened?: number
    timesPresent?: number
    timesAbsent?: number
    teacherComment?: string | null
    principalComment?: string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: number
    averageScore?: number
    classPosition?: number | null
    totalStudents?: number | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
    subjects?: SubjectScoreCreateNestedManyWithoutResultInput
  }

  export type ResultUncheckedCreateWithoutStudentInput = {
    id?: number
    term: $Enums.Term
    session: string
    timesSchoolOpened?: number
    timesPresent?: number
    timesAbsent?: number
    teacherComment?: string | null
    principalComment?: string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: number
    averageScore?: number
    classPosition?: number | null
    totalStudents?: number | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
    subjects?: SubjectScoreUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultCreateOrConnectWithoutStudentInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput>
  }

  export type ResultCreateManyStudentInputEnvelope = {
    data: ResultCreateManyStudentInput | ResultCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentSubjectCreateWithoutStudentInput = {
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutStudentsInput
  }

  export type StudentSubjectUncheckedCreateWithoutStudentInput = {
    id?: number
    subjectId: number
    createdAt?: Date | string
  }

  export type StudentSubjectCreateOrConnectWithoutStudentInput = {
    where: StudentSubjectWhereUniqueInput
    create: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput>
  }

  export type StudentSubjectCreateManyStudentInputEnvelope = {
    data: StudentSubjectCreateManyStudentInput | StudentSubjectCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomUpsertWithoutStudentsInput = {
    update: XOR<ClassroomUpdateWithoutStudentsInput, ClassroomUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClassroomCreateWithoutStudentsInput, ClassroomUncheckedCreateWithoutStudentsInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutStudentsInput, ClassroomUncheckedUpdateWithoutStudentsInput>
  }

  export type ClassroomUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutClassroomsNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    teacherId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUpsertWithWhereUniqueWithoutStudentInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutStudentInput, ResultUncheckedUpdateWithoutStudentInput>
    create: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutStudentInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutStudentInput, ResultUncheckedUpdateWithoutStudentInput>
  }

  export type ResultUpdateManyWithWhereWithoutStudentInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutStudentInput>
  }

  export type ResultScalarWhereInput = {
    AND?: ResultScalarWhereInput | ResultScalarWhereInput[]
    OR?: ResultScalarWhereInput[]
    NOT?: ResultScalarWhereInput | ResultScalarWhereInput[]
    id?: IntFilter<"Result"> | number
    studentId?: IntFilter<"Result"> | number
    term?: EnumTermFilter<"Result"> | $Enums.Term
    session?: StringFilter<"Result"> | string
    timesSchoolOpened?: IntFilter<"Result"> | number
    timesPresent?: IntFilter<"Result"> | number
    timesAbsent?: IntFilter<"Result"> | number
    teacherComment?: StringNullableFilter<"Result"> | string | null
    principalComment?: StringNullableFilter<"Result"> | string | null
    psychomotorRatings?: JsonNullableFilter<"Result">
    affectiveDomain?: JsonNullableFilter<"Result">
    totalScore?: FloatFilter<"Result"> | number
    averageScore?: FloatFilter<"Result"> | number
    classPosition?: IntNullableFilter<"Result"> | number | null
    totalStudents?: IntNullableFilter<"Result"> | number | null
    isPublished?: BoolFilter<"Result"> | boolean
    publishedAt?: DateTimeNullableFilter<"Result"> | Date | string | null
    createdAt?: DateTimeFilter<"Result"> | Date | string
    updatedAt?: DateTimeFilter<"Result"> | Date | string
    createdBy?: IntNullableFilter<"Result"> | number | null
  }

  export type StudentSubjectUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentSubjectWhereUniqueInput
    update: XOR<StudentSubjectUpdateWithoutStudentInput, StudentSubjectUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput>
  }

  export type StudentSubjectUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentSubjectWhereUniqueInput
    data: XOR<StudentSubjectUpdateWithoutStudentInput, StudentSubjectUncheckedUpdateWithoutStudentInput>
  }

  export type StudentSubjectUpdateManyWithWhereWithoutStudentInput = {
    where: StudentSubjectScalarWhereInput
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentSubjectScalarWhereInput = {
    AND?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
    OR?: StudentSubjectScalarWhereInput[]
    NOT?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
    id?: IntFilter<"StudentSubject"> | number
    studentId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    createdAt?: DateTimeFilter<"StudentSubject"> | Date | string
  }

  export type StudentCreateWithoutResultsInput = {
    admissionNo: string
    firstName: string
    lastName: string
    otherNames?: string | null
    gender: $Enums.Gender
    dateOfBirth?: Date | string | null
    image?: string | null
    guardianName?: string | null
    guardianPhone?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    classroom: ClassroomCreateNestedOneWithoutStudentsInput
    subjects?: StudentSubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutResultsInput = {
    id?: number
    admissionNo: string
    firstName: string
    lastName: string
    otherNames?: string | null
    gender: $Enums.Gender
    dateOfBirth?: Date | string | null
    image?: string | null
    classroomId: number
    guardianName?: string | null
    guardianPhone?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: StudentSubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutResultsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutResultsInput, StudentUncheckedCreateWithoutResultsInput>
  }

  export type SubjectScoreCreateWithoutResultInput = {
    subject: string
    caScore?: number
    examScore?: number
    totalScore?: number
    grade?: $Enums.Grade | null
    remark?: string | null
    classAverage?: number | null
    highestInClass?: number | null
    lowestInClass?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectScoreUncheckedCreateWithoutResultInput = {
    id?: number
    subject: string
    caScore?: number
    examScore?: number
    totalScore?: number
    grade?: $Enums.Grade | null
    remark?: string | null
    classAverage?: number | null
    highestInClass?: number | null
    lowestInClass?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectScoreCreateOrConnectWithoutResultInput = {
    where: SubjectScoreWhereUniqueInput
    create: XOR<SubjectScoreCreateWithoutResultInput, SubjectScoreUncheckedCreateWithoutResultInput>
  }

  export type SubjectScoreCreateManyResultInputEnvelope = {
    data: SubjectScoreCreateManyResultInput | SubjectScoreCreateManyResultInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutResultsInput = {
    update: XOR<StudentUpdateWithoutResultsInput, StudentUncheckedUpdateWithoutResultsInput>
    create: XOR<StudentCreateWithoutResultsInput, StudentUncheckedCreateWithoutResultsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutResultsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutResultsInput, StudentUncheckedUpdateWithoutResultsInput>
  }

  export type StudentUpdateWithoutResultsInput = {
    admissionNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutStudentsNestedInput
    subjects?: StudentSubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    classroomId?: IntFieldUpdateOperationsInput | number
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubjectScoreUpsertWithWhereUniqueWithoutResultInput = {
    where: SubjectScoreWhereUniqueInput
    update: XOR<SubjectScoreUpdateWithoutResultInput, SubjectScoreUncheckedUpdateWithoutResultInput>
    create: XOR<SubjectScoreCreateWithoutResultInput, SubjectScoreUncheckedCreateWithoutResultInput>
  }

  export type SubjectScoreUpdateWithWhereUniqueWithoutResultInput = {
    where: SubjectScoreWhereUniqueInput
    data: XOR<SubjectScoreUpdateWithoutResultInput, SubjectScoreUncheckedUpdateWithoutResultInput>
  }

  export type SubjectScoreUpdateManyWithWhereWithoutResultInput = {
    where: SubjectScoreScalarWhereInput
    data: XOR<SubjectScoreUpdateManyMutationInput, SubjectScoreUncheckedUpdateManyWithoutResultInput>
  }

  export type SubjectScoreScalarWhereInput = {
    AND?: SubjectScoreScalarWhereInput | SubjectScoreScalarWhereInput[]
    OR?: SubjectScoreScalarWhereInput[]
    NOT?: SubjectScoreScalarWhereInput | SubjectScoreScalarWhereInput[]
    id?: IntFilter<"SubjectScore"> | number
    resultId?: IntFilter<"SubjectScore"> | number
    subject?: StringFilter<"SubjectScore"> | string
    caScore?: FloatFilter<"SubjectScore"> | number
    examScore?: FloatFilter<"SubjectScore"> | number
    totalScore?: FloatFilter<"SubjectScore"> | number
    grade?: EnumGradeNullableFilter<"SubjectScore"> | $Enums.Grade | null
    remark?: StringNullableFilter<"SubjectScore"> | string | null
    classAverage?: FloatNullableFilter<"SubjectScore"> | number | null
    highestInClass?: FloatNullableFilter<"SubjectScore"> | number | null
    lowestInClass?: FloatNullableFilter<"SubjectScore"> | number | null
    createdAt?: DateTimeFilter<"SubjectScore"> | Date | string
    updatedAt?: DateTimeFilter<"SubjectScore"> | Date | string
  }

  export type ResultCreateWithoutSubjectsInput = {
    term: $Enums.Term
    session: string
    timesSchoolOpened?: number
    timesPresent?: number
    timesAbsent?: number
    teacherComment?: string | null
    principalComment?: string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: number
    averageScore?: number
    classPosition?: number | null
    totalStudents?: number | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
    student: StudentCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutSubjectsInput = {
    id?: number
    studentId: number
    term: $Enums.Term
    session: string
    timesSchoolOpened?: number
    timesPresent?: number
    timesAbsent?: number
    teacherComment?: string | null
    principalComment?: string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: number
    averageScore?: number
    classPosition?: number | null
    totalStudents?: number | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
  }

  export type ResultCreateOrConnectWithoutSubjectsInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutSubjectsInput, ResultUncheckedCreateWithoutSubjectsInput>
  }

  export type ResultUpsertWithoutSubjectsInput = {
    update: XOR<ResultUpdateWithoutSubjectsInput, ResultUncheckedUpdateWithoutSubjectsInput>
    create: XOR<ResultCreateWithoutSubjectsInput, ResultUncheckedCreateWithoutSubjectsInput>
    where?: ResultWhereInput
  }

  export type ResultUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: ResultWhereInput
    data: XOR<ResultUpdateWithoutSubjectsInput, ResultUncheckedUpdateWithoutSubjectsInput>
  }

  export type ResultUpdateWithoutSubjectsInput = {
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    timesSchoolOpened?: IntFieldUpdateOperationsInput | number
    timesPresent?: IntFieldUpdateOperationsInput | number
    timesAbsent?: IntFieldUpdateOperationsInput | number
    teacherComment?: NullableStringFieldUpdateOperationsInput | string | null
    principalComment?: NullableStringFieldUpdateOperationsInput | string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: FloatFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    classPosition?: NullableIntFieldUpdateOperationsInput | number | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    student?: StudentUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    timesSchoolOpened?: IntFieldUpdateOperationsInput | number
    timesPresent?: IntFieldUpdateOperationsInput | number
    timesAbsent?: IntFieldUpdateOperationsInput | number
    teacherComment?: NullableStringFieldUpdateOperationsInput | string | null
    principalComment?: NullableStringFieldUpdateOperationsInput | string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: FloatFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    classPosition?: NullableIntFieldUpdateOperationsInput | number | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentSubjectCreateWithoutSubjectInput = {
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutSubjectsInput
  }

  export type StudentSubjectUncheckedCreateWithoutSubjectInput = {
    id?: number
    studentId: number
    createdAt?: Date | string
  }

  export type StudentSubjectCreateOrConnectWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    create: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type StudentSubjectCreateManySubjectInputEnvelope = {
    data: StudentSubjectCreateManySubjectInput | StudentSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    update: XOR<StudentSubjectUpdateWithoutSubjectInput, StudentSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    data: XOR<StudentSubjectUpdateWithoutSubjectInput, StudentSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type StudentSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: StudentSubjectScalarWhereInput
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type StudentCreateWithoutSubjectsInput = {
    admissionNo: string
    firstName: string
    lastName: string
    otherNames?: string | null
    gender: $Enums.Gender
    dateOfBirth?: Date | string | null
    image?: string | null
    guardianName?: string | null
    guardianPhone?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    classroom: ClassroomCreateNestedOneWithoutStudentsInput
    results?: ResultCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSubjectsInput = {
    id?: number
    admissionNo: string
    firstName: string
    lastName: string
    otherNames?: string | null
    gender: $Enums.Gender
    dateOfBirth?: Date | string | null
    image?: string | null
    classroomId: number
    guardianName?: string | null
    guardianPhone?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    results?: ResultUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSubjectsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
  }

  export type SubjectCreateWithoutStudentsInput = {
    name: string
    code?: string | null
    caMaxScore?: number
    examMaxScore?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    code?: string | null
    caMaxScore?: number
    examMaxScore?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectCreateOrConnectWithoutStudentsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
  }

  export type StudentUpsertWithoutSubjectsInput = {
    update: XOR<StudentUpdateWithoutSubjectsInput, StudentUncheckedUpdateWithoutSubjectsInput>
    create: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSubjectsInput, StudentUncheckedUpdateWithoutSubjectsInput>
  }

  export type StudentUpdateWithoutSubjectsInput = {
    admissionNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutStudentsNestedInput
    results?: ResultUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    classroomId?: IntFieldUpdateOperationsInput | number
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubjectUpsertWithoutStudentsInput = {
    update: XOR<SubjectUpdateWithoutStudentsInput, SubjectUncheckedUpdateWithoutStudentsInput>
    create: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutStudentsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutStudentsInput, SubjectUncheckedUpdateWithoutStudentsInput>
  }

  export type SubjectUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    caMaxScore?: FloatFieldUpdateOperationsInput | number
    examMaxScore?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    caMaxScore?: FloatFieldUpdateOperationsInput | number
    examMaxScore?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AuthSessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AuthSessionCreateOrConnectWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionCreateManyUserInputEnvelope = {
    data: AuthSessionCreateManyUserInput | AuthSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthAccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AuthAccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AuthAccountCreateOrConnectWithoutUserInput = {
    where: AuthAccountWhereUniqueInput
    create: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput>
  }

  export type AuthAccountCreateManyUserInputEnvelope = {
    data: AuthAccountCreateManyUserInput | AuthAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    update: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    data: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
  }

  export type AuthSessionUpdateManyWithWhereWithoutUserInput = {
    where: AuthSessionScalarWhereInput
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthSessionScalarWhereInput = {
    AND?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    OR?: AuthSessionScalarWhereInput[]
    NOT?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    token?: StringFilter<"AuthSession"> | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    updatedAt?: DateTimeFilter<"AuthSession"> | Date | string
    ipAddress?: StringNullableFilter<"AuthSession"> | string | null
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    userId?: StringFilter<"AuthSession"> | string
  }

  export type AuthAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthAccountWhereUniqueInput
    update: XOR<AuthAccountUpdateWithoutUserInput, AuthAccountUncheckedUpdateWithoutUserInput>
    create: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput>
  }

  export type AuthAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthAccountWhereUniqueInput
    data: XOR<AuthAccountUpdateWithoutUserInput, AuthAccountUncheckedUpdateWithoutUserInput>
  }

  export type AuthAccountUpdateManyWithWhereWithoutUserInput = {
    where: AuthAccountScalarWhereInput
    data: XOR<AuthAccountUpdateManyMutationInput, AuthAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthAccountScalarWhereInput = {
    AND?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
    OR?: AuthAccountScalarWhereInput[]
    NOT?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
    id?: StringFilter<"AuthAccount"> | string
    accountId?: StringFilter<"AuthAccount"> | string
    providerId?: StringFilter<"AuthAccount"> | string
    userId?: StringFilter<"AuthAccount"> | string
    accessToken?: StringNullableFilter<"AuthAccount"> | string | null
    refreshToken?: StringNullableFilter<"AuthAccount"> | string | null
    idToken?: StringNullableFilter<"AuthAccount"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"AuthAccount"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"AuthAccount"> | Date | string | null
    scope?: StringNullableFilter<"AuthAccount"> | string | null
    password?: StringNullableFilter<"AuthAccount"> | string | null
    createdAt?: DateTimeFilter<"AuthAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AuthAccount"> | Date | string
  }

  export type AuthUserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AuthAccountCreateNestedManyWithoutUserInput
  }

  export type AuthUserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type AuthUserCreateOrConnectWithoutSessionsInput = {
    where: AuthUserWhereUniqueInput
    create: XOR<AuthUserCreateWithoutSessionsInput, AuthUserUncheckedCreateWithoutSessionsInput>
  }

  export type AuthUserUpsertWithoutSessionsInput = {
    update: XOR<AuthUserUpdateWithoutSessionsInput, AuthUserUncheckedUpdateWithoutSessionsInput>
    create: XOR<AuthUserCreateWithoutSessionsInput, AuthUserUncheckedCreateWithoutSessionsInput>
    where?: AuthUserWhereInput
  }

  export type AuthUserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: AuthUserWhereInput
    data: XOR<AuthUserUpdateWithoutSessionsInput, AuthUserUncheckedUpdateWithoutSessionsInput>
  }

  export type AuthUserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AuthAccountUpdateManyWithoutUserNestedInput
  }

  export type AuthUserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthUserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: AuthSessionCreateNestedManyWithoutUserInput
  }

  export type AuthUserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type AuthUserCreateOrConnectWithoutAccountsInput = {
    where: AuthUserWhereUniqueInput
    create: XOR<AuthUserCreateWithoutAccountsInput, AuthUserUncheckedCreateWithoutAccountsInput>
  }

  export type AuthUserUpsertWithoutAccountsInput = {
    update: XOR<AuthUserUpdateWithoutAccountsInput, AuthUserUncheckedUpdateWithoutAccountsInput>
    create: XOR<AuthUserCreateWithoutAccountsInput, AuthUserUncheckedCreateWithoutAccountsInput>
    where?: AuthUserWhereInput
  }

  export type AuthUserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: AuthUserWhereInput
    data: XOR<AuthUserUpdateWithoutAccountsInput, AuthUserUncheckedUpdateWithoutAccountsInput>
  }

  export type AuthUserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: AuthSessionUpdateManyWithoutUserNestedInput
  }

  export type AuthUserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassroomCreateManyTeacherInput = {
    id?: number
    name: string
    section?: string | null
    session: string
    currentTerm?: $Enums.Term
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassroomUpdateWithoutTeacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    section?: NullableStringFieldUpdateOperationsInput | string | null
    session?: StringFieldUpdateOperationsInput | string
    currentTerm?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyClassroomInput = {
    id?: number
    admissionNo: string
    firstName: string
    lastName: string
    otherNames?: string | null
    gender: $Enums.Gender
    dateOfBirth?: Date | string | null
    image?: string | null
    guardianName?: string | null
    guardianPhone?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateWithoutClassroomInput = {
    admissionNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUpdateManyWithoutStudentNestedInput
    subjects?: StudentSubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUncheckedUpdateManyWithoutStudentNestedInput
    subjects?: StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutClassroomInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    otherNames?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultCreateManyStudentInput = {
    id?: number
    term: $Enums.Term
    session: string
    timesSchoolOpened?: number
    timesPresent?: number
    timesAbsent?: number
    teacherComment?: string | null
    principalComment?: string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: number
    averageScore?: number
    classPosition?: number | null
    totalStudents?: number | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
  }

  export type StudentSubjectCreateManyStudentInput = {
    id?: number
    subjectId: number
    createdAt?: Date | string
  }

  export type ResultUpdateWithoutStudentInput = {
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    timesSchoolOpened?: IntFieldUpdateOperationsInput | number
    timesPresent?: IntFieldUpdateOperationsInput | number
    timesAbsent?: IntFieldUpdateOperationsInput | number
    teacherComment?: NullableStringFieldUpdateOperationsInput | string | null
    principalComment?: NullableStringFieldUpdateOperationsInput | string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: FloatFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    classPosition?: NullableIntFieldUpdateOperationsInput | number | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    subjects?: SubjectScoreUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    timesSchoolOpened?: IntFieldUpdateOperationsInput | number
    timesPresent?: IntFieldUpdateOperationsInput | number
    timesAbsent?: IntFieldUpdateOperationsInput | number
    teacherComment?: NullableStringFieldUpdateOperationsInput | string | null
    principalComment?: NullableStringFieldUpdateOperationsInput | string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: FloatFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    classPosition?: NullableIntFieldUpdateOperationsInput | number | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    subjects?: SubjectScoreUncheckedUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    timesSchoolOpened?: IntFieldUpdateOperationsInput | number
    timesPresent?: IntFieldUpdateOperationsInput | number
    timesAbsent?: IntFieldUpdateOperationsInput | number
    teacherComment?: NullableStringFieldUpdateOperationsInput | string | null
    principalComment?: NullableStringFieldUpdateOperationsInput | string | null
    psychomotorRatings?: NullableJsonNullValueInput | InputJsonValue
    affectiveDomain?: NullableJsonNullValueInput | InputJsonValue
    totalScore?: FloatFieldUpdateOperationsInput | number
    averageScore?: FloatFieldUpdateOperationsInput | number
    classPosition?: NullableIntFieldUpdateOperationsInput | number | null
    totalStudents?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentSubjectUpdateWithoutStudentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentSubjectUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectScoreCreateManyResultInput = {
    id?: number
    subject: string
    caScore?: number
    examScore?: number
    totalScore?: number
    grade?: $Enums.Grade | null
    remark?: string | null
    classAverage?: number | null
    highestInClass?: number | null
    lowestInClass?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectScoreUpdateWithoutResultInput = {
    subject?: StringFieldUpdateOperationsInput | string
    caScore?: FloatFieldUpdateOperationsInput | number
    examScore?: FloatFieldUpdateOperationsInput | number
    totalScore?: FloatFieldUpdateOperationsInput | number
    grade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    classAverage?: NullableFloatFieldUpdateOperationsInput | number | null
    highestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    lowestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectScoreUncheckedUpdateWithoutResultInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    caScore?: FloatFieldUpdateOperationsInput | number
    examScore?: FloatFieldUpdateOperationsInput | number
    totalScore?: FloatFieldUpdateOperationsInput | number
    grade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    classAverage?: NullableFloatFieldUpdateOperationsInput | number | null
    highestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    lowestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectScoreUncheckedUpdateManyWithoutResultInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    caScore?: FloatFieldUpdateOperationsInput | number
    examScore?: FloatFieldUpdateOperationsInput | number
    totalScore?: FloatFieldUpdateOperationsInput | number
    grade?: NullableEnumGradeFieldUpdateOperationsInput | $Enums.Grade | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    classAverage?: NullableFloatFieldUpdateOperationsInput | number | null
    highestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    lowestInClass?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectCreateManySubjectInput = {
    id?: number
    studentId: number
    createdAt?: Date | string
  }

  export type StudentSubjectUpdateWithoutSubjectInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type StudentSubjectUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AuthAccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AuthSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
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