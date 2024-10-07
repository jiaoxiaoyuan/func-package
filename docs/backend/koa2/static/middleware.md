---
title: koa2-static中间件使用
order: 100
nav:
  title: 服务端
  path: /Back-end
  order: 8
group:
  path: /Koa
  title: Koa.js
  order: 2
---

# koa-static中间件使用

## 使用例子
demo源码

[https://github.com/ChenShenhai/koa2-note/blob/master/demo/static-use-middleware/](https://github.com/ChenShenhai/koa2-note/blob/master/demo/static-use-middleware/)

```js
const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(static(
  path.join( __dirname,  staticPath)
))


app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})

```

#### 效果

##### 访问[http://localhost:3000](http://localhost:3000)
![static-server-result](./assets/static-server-result-01-20241007190949943.png)

##### 访问[http://localhost:3000/index.html](http://localhost:3000/index.html)
![static-server-result](./assets/static-server-result-02-20241007190958148.png)

##### 访问[http://localhost:3000/js/index.js](http://localhost:3000/js/index.js)
![static-server-result](./assets/static-server-result-03-20241007191006309.png)

