---
title: ES11-matchAll
order: 8
nav:
    title: JavaScript
    path: /js
    order: 2
group:
  path: /notes
  title: 杂记
  order: 200
---

# ES11-matchAll
matchAll


```js
const reg = /[0-3]/g;
const data = '2020';
console.log(data.matchAll(reg))
console.log([...data.matchAll(reg)])



/**
 * 0: ["2", index: 0, input: "2020", groups: undefined]
 * 1: ["0", index: 1, input: "2020", groups: undefined]
 * 2: ["2", index: 2, input: "2020", groups: undefined]
 * 3: ["0", index: 3, input: "2020", groups: undefined]
 */

```
