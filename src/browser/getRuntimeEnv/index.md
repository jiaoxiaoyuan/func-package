---
title: getRuntimeEnv - 获取运行环境
order: 1
nav:
  title: 函数库
  path: /lib
  order: 1
group:
  path: /browser
  title: 浏览器相关
  order: 12
---

### getRuntimeEnv

> 获取当前运行环境,返回运行环境的集合判断
> 
> `@returns {Object}` 返回一个包含各种环境信息的对象。
>
### 对象包含的属性有：
  - `isWeex`: 是否在 `Weex` 环境中运行
  - `isIE`: 是否在 `IE` 浏览器中运行
  - `isIE9`: 是否是 `IE9` 浏览器
  - `isEdge`: 是否在 `Edge` 浏览器中运行
  - `isAndroid`: 是否在 `Android` 设备上运行
  - `isIOS`: 是否在 `iOS` 设备上运行
  - `isChrome`: 是否在 `Chrome` 浏览器中运行


### Demo:

```tsx | pure
import { getRuntimeEnv } from 'func-package';

const env = getRuntimeEnv();
console.log(env);
/* {
  isAndroid: false
  isChrome: true
  isEdge: false
  isIE: false
  isIE9: false
  isIOS: false
  isWeex: false
}
*/
```
