---
title: 类型断言
order: 2
group:
  title: 进阶
  order: 2
nav:
  title: TypeScript
  path: /ts
  order: 3
---

# 类型断言

类型断言（Type Assertion）可以用来手动指定一个值的类型。

## 语法

```ts
<类型>值;

// 或

值 as 类型;
```

在 tsx 语法（React 的 JSX 语法的 TS 版）中必须用后一种。

## 示例

示例：将一个联合类型的变量指定为一个更加具体的类型

当 TypeScript 不确定一个联合类型到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：

```ts
function getLength(something: string | number): number {
  return something.length;
}

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
```

而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型的属性或方法，比如：

```ts
function getLength(something: string | number): number {
  if (something.length) {
    return something.length;
  } else {
    return something.toString().length;
  }
}

// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
// index.ts(3,26): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
```

上例中，获取 `something.length` 的时候会报错。

此时可以使用类型断言，将 `something` 断言成 `string`：

```ts
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
```

类型断言的用法加上，在需要断言的变量前加上 `<Type>` 即可。

类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的。

```ts
function toBoolean(something: string | number): boolean {
  return <boolean>something;
}

// index.ts(2,10): error TS2352: Type 'string | number' cannot be converted to type 'boolean'.
//   Type 'number' is not comparable to type 'boolean'.
```
