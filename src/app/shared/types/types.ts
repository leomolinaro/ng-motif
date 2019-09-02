export type DeepPartial<T> = {
  [P in keyof T]?:
    T[P] extends (infer U)[] ? DeepPartial<U>[] :
    T[P] extends object ? DeepPartial<T[P]> :
    T[P];
};

export type DeepRequired<T> = {
  [P in keyof T]-?:
    T[P] extends (infer U)[] ? DeepRequired<U>[] :
    T[P] extends object ? DeepRequired<T[P]> :
    T[P];
};

// return True if T is `any`, otherwise return False
export type IsAny<T, True, False = never> = (
  | True
  | False) extends (T extends never ? True : False)
  ? True
  : False;

// return True if T is `unknown`, otherwise return False
export type IsUnknown<T, True, False = never> = unknown extends T
  ? IsAny<T, False, True>
  : False;

// return True if T strictly includes U, otherwise return False
export type StrictlyIncludes<T, U, True, False = never> = Exclude<
  U,
  T
> extends never
  ? (IsAny<T, 1, 0> extends 1
      ? True
      : (IsAny<U, 1, 0> extends 1
          ? False
          : (IsUnknown<T, 1, 0> extends 1 ? IsUnknown<U, True, False> : True)))
  : False;