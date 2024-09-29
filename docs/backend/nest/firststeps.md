---
title: 第一步
order: 2
nav:
  title: 服务端
  path: /Back-end
  order: 8
group:
  path: /nestjs
  title: Nest
  order: 1
---

## 第一步

在这一组文章中, 您将学习到 Nest 的**核心基本原理**。为了了解基本的 Nest 应用程序构建模块，我们将构建一个基本的涵盖了大量基础功能的 CRUD 应用程序。

## 语言

我们爱上了 [TypeScript](https://www.tslang.cn/)，但最重要的是，我们喜欢 [Node.js](http://nodejs.cn/)。 这就是为什么 Nest 兼容 TypeScript 和**纯 JavaScript**。 Nest 默认基于最新的语言特性，要在 Nest 中使用原生的 JavaScript 框架，我们需要一个 [Babel](https://babeljs.cn/) 编译器。

在文档示例中，我们主要使用 TypeScript ，但您始终可以将代码片段**切换**为普通 JavaScript 语法 (只需单击每个片段右上角的 language 按钮即可切换)。

【译者注：中文文档暂不支持 language 切换】

## 先决条件

请确保您的操作系统上安装了 [Node.js](http://nodejs.cn/download/)**（>= 10.13.0, v13 版本除外）**。

**一分钟安装 node.js** （支持 X86 ARM MIPS 等架构，需要版本管理或者系统为 Raspbian 请直接看 NVM）

#### **windows**

1.  [点击下载 Node.js](https://nodejs.org/zh-cn)
    
2.  安装 Node.js
    

Powershell/CMD 可以打印出这个说明安装成功。（部分系统需要重启后环境变量才生效，如果不会配置环境变量请直接默认安装）

`$node -v`
`v14.17.3`
`$ npm -v`
`7.x.x`

#### **linux（建议）**

（NVM 支持 所有 Linux 及 Raspbian ，支持多版本管理，[windows 点击进入](https://nodejs.org/zh-cn)）

`curl -o- https://ghproxy.com/https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`

如果没 curl ，可以使用 wget 安装

`wget -qO- https://ghproxy.com/https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`

使用淘宝加速下载（可选）

`export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node`

使用 NVM 安装 nodejs ：

 `nvm install --lts`

终端可以打出以下信息说明安装成功：

`$node -v`
`v14.17.3`
 `$ npm -v`
`7.x.x`

#### **MacOS (X86)**

1.  [点击下载 Node.js](https://nodejs.org/zh-cn)
    
2.  安装 Node.js
    

打印出这个说明安装成功。（部分系统需要重启后环境变量才生效）

 `$node -v`
 `v14.17.3`
 `$ npm -v`
 `7.x.x`

#### **MacOS (M1)**

1.  [点击下载 Node.js](https://npm.taobao.org/mirrors/node/v16.5.0/node-v16.5.0.pkg)
    
2.  安装 Node.js
    

打印出这个说明安装成功。（部分系统需要重启后环境变量才生效）

`$node -v`
`v16.5.0`
`$ npm -v`
`7.x.x`

#### **Debian 系**

（支持 ARM 及 X86 平台)

`curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -`
`sudo apt-get install -y nodejs`

（如果安装缓慢，可以使用[国内镜像源](http://mirrors.ustc.edu.cn/help/nodesource.html)） 终端可以打出以下信息说明安装成功：

`$node -v`
`v14.17.3`
`$ npm -v`
`7.x.x`

#### **Redhat 系**

（支持 X86 平台）

 `curl -sL https://rpm.nodesource.com/setup_16.x | bash -`

（如果安装缓慢，可以使用[国内镜像源](http://mirrors.ustc.edu.cn/help/nodesource.html)） 终端可以打出以下信息说明安装成功：
```bash
$node -v
v14.17.3
$ npm -v
7.x.x
```

#### **Snap**

（支持 所有 Linux ）

1.  `sudo snap install node --classic --channel=14`

（如果提示 snap 不存在，请先安装 snapd） 终端可以打出以下信息说明安装成功：

```bash
$node -v
v14.17.3
$ npm -v
7.x.x
```

## 起步

使用 [Nest CLI](https://www.bookstack.cn/read/nestjs-8-zh/$cli?id=overview) 建立新项目非常简单。 在安装好 npm 后，您可以使用下面命令在您的 OS 终端中创建 Nest 项目：
```bash
npm i -g @nestjs/cli
nest new project-name
```

将会创建 `project-name` 目录， 安装 node\_modules 和一些其他样板文件，并将创建一个 `src` 目录，目录中包含几个核心文件。

```bash
src
 ├── app.controller.spec.ts
 ├── app.controller.ts
 ├── app.module.ts
 ├── app.service.ts
 └── main.ts

```

以下是这些核心文件的简要概述：

|                        |                                                                 |
| ---------------------- | --------------------------------------------------------------- |
| app.controller.ts      | 带有单个路由的基本控制器示例。                                  |
| app.controller.spec.ts | 对于基本控制器的单元测试样例                                    |
| app.module.ts          | 应用程序的根模块。                                              |
| app.service.ts         | 带有单个方法的基本服务                                          |
| main.ts                | 应用程序入口文件。它使用 `NestFactory` 用来创建 Nest 应用实例。 |

`main.ts` 包含一个异步函数，它负责**引导**我们的应用程序：

```js
/* main.ts */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

要创建一个 Nest 应用实例，我们使用了 `NestFactory` 核心类。`NestFactory` 暴露了一些静态方法用于创建应用实例。 `create()` 方法返回一个实现 `INestApplication` 接口的对象。该对象提供了一组可用的方法，我们会在后面的章节中对这些方法进行详细描述。 在上面的 `main.ts` 示例中，我们只是启动 HTTP 服务，让应用程序等待 HTTP 请求。

请注意，使用 Nest CLI 搭建的项目会创建一个初始项目结构，我们鼓励开发人员将每个模块保存在自己的专用目录中。

## 平台

Nest 旨在成为一个与平台无关的框架。 由于平台无关性，我们以创建可重用的逻辑组件，开发人员可以跨越多种不同类型的应用程序来使用这些组件。 从技术上讲，创建了适配器以后，Nest 可以与任何 node.js 的 HTTP 框架一起工作。有两个支持开箱即用的 HTTP 平台：[express](https://expressjs.com/) 和 [fastfy](https://www.fastify.io/)。您可以选择最适合您需求的产品。

|                  |                                                                                                                                                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| platform-express | [Express](https://expressjs.com/) 是一个众所周知的 node.js 简约 Web 框架。 这是一个经过实战考验，适用于生产的库，拥有大量社区资源。 默认情况下使用 `@nestjs/platform-express` 包。 许多用户都可以使用 Express ，并且无需采取任何操作即可启用它。 |
| platform-fastify | [Fastify](https://www.fastify.io/) 是一个高性能，低开销的框架，专注于提供最高的效率和速度。 在[这里](https://www.bookstack.cn/read/nestjs-8-zh/$techniques?id=%E6%80%A7%E8%83%BD%EF%BC%88fastify%EF%BC%89)阅读如何使用它。                       |

无论使用哪种平台，它都会暴露自己的 API。 它们分别是 `NestExpressApplication` 和 `NestFastifyApplication`。

将类型传递给 NestFactory.create() 函数时，如下例所示，app 对象将具有专用于该特定平台的函数。 但是，请注意，除非您确实要访问底层平台 API，否则无需指定类型。

`const app = await NestFactory.create<NestExpressApplication>(AppModule);`

## 运行应用程序

安装过程完成后，您可以在系统命令行工具中运行以下命令，以启动应用程序：

 `$ npm run start`

此命令启动 HTTP 服务监听定义在 `src/main.ts` 文件中定义的端口号。在应用程序运行后, 打开浏览器并访问 `http://localhost:3000/`。 你应该看到 `Hello world!` 信息。

