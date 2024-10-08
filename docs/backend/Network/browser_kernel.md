---
title: 浏览器内核
order: 24
nav:
  title: 服务端
  path: /Back-end
  order: 8
group:
  path: /network
  title: 计算机网络
  order: 10
---

# 浏览器内核

[浏览器内核](https://zh.wikipedia.org/wiki/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%95%E6%93%8E)主要分为两部分：**页面渲染引擎**（Rendering Engine，也称为 Browser Engine、Layout Engine）和 **JavaScript 引擎**，内核更加倾向于渲染引擎。

- **渲染引擎** — 负责取得网页的内容（HTML、XML、图像等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。
- **JavaScript 引擎** — 负责解析和执行 JavaScript 来实现网页的动态效果。

最开始渲染引擎和 JavaScript 引擎并没有区分的很明确，后来 JavaScript 引擎越来越独立，内核就倾向于只指渲染引擎。

不同浏览器的内核也不尽相同，所以各个浏览器对网页的解析存在一定的差异。

## 常见的五种内核

| 浏览器                    | 页面渲染引擎（内核） | JavaScript 引擎                              | CSS 前缀  |
| ------------------------- | -------------------- | -------------------------------------------- | --------- |
| Chrome                    | WebKit -> Blink      | V8                                           | `-webkit` |
| Firefox                   | Gecko                | SpiderMonkey（世界上第一款 JavaScript 引擎） | `-moz`    |
| Safari                    | WebKit               | JavaScriptCore（即 Nitro）                   | `-webkit` |
| Internet Explorer（IE）   | Trident              | Chakra                                       | `-ms`     |
| Opera                     | Presto -> Blink      | Carakan                                      | `-o`      |
| Microsoft Edge（代替 IE） | EdgeHTML -> Blink    | Carakan                                      | `-webkit` |

上面表格中，旧 Chrome 和旧 Opera 的内核为 Webkit，新版的为 Blink。所有以 [Chromium](https://zh.wikipedia.org/wiki/Chromium) 为基础的浏览器都使用 Blink。

- EdgeHTML 引擎是 Trident 的一个分支
- [Blink](https://zh.wikipedia.org/wiki/Blink) 引擎是 WebKit 中 WebCore 组件的一个分支

