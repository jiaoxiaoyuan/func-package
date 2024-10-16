---
nav:
    title: Vue系列
    path: /vue
    order: 4
group:
  title: 基础概念
  order: 3
title: 计算属性 Computed
order: 6
---

# 计算属性 Computed

相关的官方文档：

- 了解相关的使用方式，应该先阅读 [计算属性和侦听器：计算属性](https://vue3js.cn/docs/zh/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%92%8C%E4%BE%A6%E5%90%AC%E5%99%A8)
- [响应式计算和侦听：计算值](https://vue3js.cn/docs/zh/guide/reactivity-computed-watchers.html#%E8%AE%A1%E7%AE%97%E5%80%BC)

应用场景：

1. 模版中，较长的表达式会让模版变得复杂和难以维护，为了解决这个问题 `computed` 孕育而生
2. 具有缓存效果，提示了性能，当依赖数据未发生变化，调用的是缓存的数据

对于任何包含响应式数据的 **复杂逻辑**，都应该使用 **计算属性**

## 计算属性和函数方法

计算属性是基于它们的反应依赖滚系缓存的。计算属性只在相关响应式依赖发生改变时它们才会重新求值。

相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。

> 我们为什么需要缓存？

假设我们有一个性能开销比较大的计算属性 `list`，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 `list`。如果没有缓存，我们将不可避免的多次执行 `list` 的 `getter`！如果你不希望有缓存，请用 `method` 来替代。
