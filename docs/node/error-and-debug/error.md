---
nav:
    title: Node系列
    path: /node
    order: 6
group:
  title: 异常与调试
  path: /error-and-debug
  order: 6
title: 错误
order: 1
---

# 错误

在 Node 中，所有继承了 EventEmitter 的类都可能会发出 error 事件。像 fs.ReadStream 这样的流只是专用的 EventEmitter，有预先定义的 data 和 end 等事件。如果没有设置监听器，error 事件会被抛出。也就是如果不监听这些错误，那它们就会搞垮你的服务器。
