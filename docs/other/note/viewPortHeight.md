---
title: 判断某一区域是否在可视区内
order: 22
nav:
  title: 文档
  path: /other
  order: 100
group:
  path: /note
  title: 随记
  order: 4
---

判断某一区域是否在可视区内
===

```js

export const isInViewPort = (el) => {
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  const top = el.getBoundingClientRect() && el.getBoundingClientRect().top
  console.log('top', top)
  return top <= viewPortHeight + 100 && top > 0
}

```
