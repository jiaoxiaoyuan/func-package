---
title: 浏览器渲染机制
order: 22
nav:
  title: 服务端
  path: /Back-end
  order: 8
group:
  path: /network
  title: 计算机网络
  order: 10
---

# 关键渲染路径（浏览器渲染机制）

[**关键渲染路径**](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)（Critial Rendering Path，CRP）是浏览器将 HTML、CSS 和 JavaScript 转换为屏幕上的像素所经历的步骤序列。

**优化关键渲染路径可提高渲染性能**。

关键渲染路径包含了文档对象模型（DOM）、CSS 对象模型（CSSOM）、渲染树和布局。

**关键渲染路径可以分为以下五步**：

- `构建 DOM 树`
- `构建 CSSOM 树`
- `创建渲染树`
- `生成布局`
- `绘制`

在解析 HTML 时会创建 DOM。HTML 可以请求 JavaScript，而 JavaScript 反过来，又可以更改 DOM。HTML 包含或请求样式，依次来构建 CSSOM。浏览器引擎将两者结合起来以创建渲染树。布局确定页面上所有内容的大小和位置。确定布局后，将像素绘制到屏幕上。

这些只是简短的概况了这部分流程，详细内容查看最后。

## 优化 CRP

提升页面加载速度需要通过被加载资源的优先级、控制它们加载的顺序和减小这些资源的体积。

性能提示包含：

1. 通过异步重要资源的下载来减小请求数量
2. 优化必须的请求数量和每个请求的文件体积
3. 通过区分关键资源的优先级来优化被加载关键资源的顺序，来缩短关键路径长度。

另外，可以阅读一下[网站性能优化 — CRP](https://segmentfault.com/a/1190000008550336)这篇文章。

以上关于 CRP 的详细步骤内容可查阅 [MDN Docs：Critical rendering path](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path) 和 [Google 的 Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)

## 更多资料

- [script 标签上的 defer 和 async 属性是什么？](https://github.com/lio-zero/blog/blob/main/HTML/script%20%E6%A0%87%E7%AD%BE%E4%B8%8A%E7%9A%84%20defer%20%E5%92%8C%20async%20%E5%B1%9E%E6%80%A7%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F.md)
- [浏览器如何解析 CSS？](https://github.com/lio-zero/blog/blob/main/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%A6%82%E4%BD%95%E8%A7%A3%E6%9E%90%20CSS%EF%BC%9F.md)
- [浏览器如何解析 HTML？](https://github.com/lio-zero/blog/blob/main/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%A6%82%E4%BD%95%E8%A7%A3%E6%9E%90%20HTML%EF%BC%9F.md)

