---
title: HTML面试题
order: 2
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /frontEnd
  title: 面试题
  order: 100
---



> 了解即可👀：代表每次只需要观看一遍即可，无需特定记住，**其他的则为高频常见面试题，需要记住**


## 1、对HTML语义化的理解

-   有利于SEO
-   可读性更强，结构更清晰
-   方便视障人群使用阅读



## 2、`<!DOCTYPE html>`(⽂档类型) 的作用

-   **告诉浏览器（解析器）应该以什么样（html或xhtml）的文档类型定义来解析文档**

-   **标准模式**、**兼容模式**两种模式

-   加了是按标准模式解析




## 3、script标签中defer和async的区别

**解析到脚本时，都是异步执行，它们都不会阻塞页面的解析**

-   **defer**
    -   异步加载脚本，**等到文档所有元素解析完成之后才执行**，DOMContentLoaded事件执行之前
    -   如果有**多个设置了defer的script标签存在，则会按照顺序执行所有的script；**
-   **async**
    -   **使得script脚本异步的加载并在允许的情况下执行**
    -   **async的执行，并不会按着script在页面中的顺序来执行，而是谁先加载完谁执行。**



## 4、行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

-   行内元素有：`a b span img input select strong`；
-   块级元素有：`div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p`；
-   空元素(**没有内容的HTML元素**)有：`br、meta、hr、link、input、img`



## 5、渐进增强和优雅降级之间的区别

**（1）渐进增强（progressive enhancement）**：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再**针对高级浏览器进行效果、交互等方面的改进和追加功能**，以达到更好的用户体验。

 **（2）优雅降级 graceful degradation**： 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。



## 6、label 的作用是什么

label 标签来**定义表单控件的关系**：当用户选择label标签时，浏览器会自动将焦点转到和label标签相关的表单控件上

```html
    <label for="user">点击聚焦</label>
    <input type="text" id="user">
```



## 7、HTML5有哪些更新

-   语义化标签、媒体标签、表单
-   DOM查询操作
    -   document.querySelector()
    -   document.querySelectorAll()
-   Web存储



## 8、src 和 href 的区别

src 和 href 都是**用来引用外部的资源**

- **src**

  -   表示对资源的引用，指向的内容会嵌入到当前标签所在的位置
  -   指向的资源下载并应⽤到⽂档内，如请求js脚本
  -   **堵塞解析**，所以⼀般js脚本会放在页面底部

- **href**

  - 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系

  - **不会堵塞**，停⽌对当前⽂档的处理

    

## 9、iframe 有那些优点和缺点

iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。

**优点：**

-   用来加载速度较慢的内容（如广告）
-   可以使脚本可以并行下载
-   可以实现跨子域通信

**缺点：**

-   iframe 会**阻塞主页面的 onload 事件，即加载事件**
-   无法被一些搜索引擎索识别
-   会产生很多页面，不容易管理



## 10、常用的 meta 标签有哪些

-   `charset`，用来描述HTML文档的编码类型
-   `keywords`，页面关键词
-   `description`，页面描述
-   `refresh`，页面重定向和刷新
-   `viewport`，适配移动端，可以控制视口的大小和比例





 