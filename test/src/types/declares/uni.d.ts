// 解决unipromise返回值不正确
type Empty = null | undefined | void | never;
type IfElse<T, D> = T extends Empty ? D : T;
type Else<T, D> = T extends Empty ? never : D;
type NonNullable<T> = T extends Empty ? never : T;

/**
 * 定义`promise`的`uni`
 * 用于覆盖原本错误的类型
 */
type PromiseUni<T> = {
  [P in keyof T]: (
    ...args: Parameters<T[P]>
  ) => IfElse<
    ReturnType<T[P]>,
    Else<
      Parameters<Parameters<T[P]>[0]['success']>[0],
      Promise<
        [
          Parameters<Parameters<T[P]>[0]['fail']>[0],
          Parameters<Parameters<T[P]>[0]['success']>[0]
        ]
      >
    >
  >;
};
declare const uni: PromiseUni<UniApp.Uni>;
