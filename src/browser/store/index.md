---
title: store - 本地存储库
nav:
  title: 函数库
  path: /lib
group:
  path: /browser
  title: 浏览器相关
  order: 2
---

## store

> 基于 `localStorage` 上层封装的支持过期时间设置的缓存库, 支持操作回调.

## 说明
 - 这是一个自定义的`localStorage`封装库，支持设置带有过期时间的键值对数据。`store`对象包含了设置（`set`）、获取（`get`）和删除（`remove`）键值对的方法，并且有一个回调机制来通知操作的状态和结果。
    - `set(key, value, time?, cb?)`: 将数据存储到 `localStorage` 中,支持设置过期时间。`time` 可以是 `Date` 或 `number` 类型,默认为一个月。`cb` 为回调函数,可获取操作状态和存储的 `key` 和`value`。
   
    - `get(key, cb?)`: 从 `localStorage` 中获取数据,如果数据已过期,则会自动删除。`cb` 为回调函数,可获取操作状态和获取的 `value`。
   
    - `remove(key, cb?)`: 从 `localStorage` 中删除指定 `key` 的数据,并返回删除的内容。`cb` 为回调函数,可获取操作状态和删除的 `value`。
   
    - `status` 属性定义了操作状态的枚举值,分别为: `SUCCESS`、`FAILURE`、`OVERFLOW`、`TIMEOUT`。
   
    - `getKey(key)`: 获取带有前缀的 `key` 值。
   
    - `storage` 属性保存 `localStorage` 或 `window.localStorage` 对象。


## Demo:

```tsx | pure
import { store } from 'func-package';

// 将对象序列化
store.set('name', 'dooring', Date.now() + 1000);
console.log(store.get('name'));
setTimeout(() => {
  console.log(store.get('name'));
}, 1000);

// 设置成功后的回调
store.set('dooring', 'xuxiaoxi', Date.now() + 1000, (status, key, value) => {
  console.log('success');
});


// 设置数据,过期时间为1小时后
store.set('foo', 'bar', new Date().getTime() + 1000 * 60 * 60, (status, key, value) => {
    console.log(status, key, value);
});

// 获取数据
const result = store.get('foo', (status, value) => {
    console.log(status, value);
});
console.log(result); // { status: 0, value: 'bar' }

// 删除数据
store.remove('foo', (status, value) => {
    console.log(status, value);
});

```


