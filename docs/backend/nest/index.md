---
title: nestjs介绍
order: 1
nav:
  title: 服务端
  path: /Back-end
  order: 8
group:
  path: /nestjs
  title: Nest
  order: 1
---

## 介绍

`Nest (NestJS)` 是一个用于构建高效、可扩展的`Node.js`服务器端应用程序的框架。它使用渐进式 `JavaScript`，使用 `TypeScript` 构建并完全支持`TypeScript`（但仍允许开发人员使用纯 JavaScript 进行编码），并结合了 `OOP（面向对象编程）、FP（函数式编程）和 FRP（函数式反应式编程）`的元素。

在底层，`Nest` 使用了强大的 `HTTP `服务器框架，比如`Express`（默认），并且可以选择配置为使用`Fastify`！

`Nest` 在这些常见的 `Node.js` 框架（`Express/Fastify`）之上提供了一个抽象层级，但也将它们的 API 直接暴露给开发人员。这使开发人员可以自由使用可用于底层平台的无数第三方模块。

## 理念
近年来，由于 `Node.js，JavaScript` 已成为前端和后端应用程序的网络“通用语”。这催生了`Angular、React和Vue`等很棒的项目，它们提高了开发人员的工作效率，并支持创建快速、可测试和可扩展的前端应用程序。然而，虽然 Node（和服务器端 JavaScript）存在大量出色的库、帮助程序和工具，但它们都没有有效地解决架构的主要问题。

`Nest` 提供了一个开箱即用的应用程序架构，允许开发人员和团队创建高度可测试、可扩展、松散耦合且易于维护的应用程序。该架构深受 Angular 的启发。

## 安装

首先，您可以使用`Nest CLI`构建项目，或者克隆一个启动项目（两者都会产生相同的结果）。

要使用 `Nest CLI` 构建项目，请运行以下命令。这将创建一个新的项目目录，并使用初始核心 `Nest` 文件和支持模块填充该目录，为您的项目创建一个常规的基础结构。建议初次使用的用户使用Nest CLI创建新项目。我们将在第一步中继续使用这种方法。

```bash
npm i -g @nestjs/cli
nest new project-name
```
## 替代方案 

或者，使用Git安装 TypeScript 启动项目：
```bash
$ git clone https://github.com/nestjs/typescript-starter.git project
$ cd project
$ npm install
$ npm run start

```
>提示：如果您想克隆没有 git 历史记录的存储库，可以使用degit。

打开浏览器并导航到http://localhost:3000/.

要安装启动项目的 `JavaScript` 风格，请在上面的命令行中使用`javascript-starter.git`。

您还可以通过使用`npm（或yarn）`安装核心和支持文件来从头开始手动创建新项目。当然，在这种情况下，您将负责自己创建项目样板文件。

```bash
npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
```


## 相关书籍

[《深入浅出 Node.js》](https://union-click.jd.com/jdc?e=&p=JF8AAMQDIgZlGmsVAhADURNdHDJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRUCEANRE10cHUtCCUZrEBxaXRNvH35ib3U-fgBgdGh7BlguQw4eN1QrWx0GFARUGVwWMiIHUisNewITBlQaWhAGFQBlGmsVBREAUBNcFgMXD1MTaxICGzdVG14VABUCSR1dFAQSBlYbayUyETdlK1slASJFO0kJHQoRUF0dW0FVQgIGGl9GUBEOVhhZFQAQBVFMDBdQIgVUGl8c)

[《狼书（卷1）：更了不起的 Node.js》](https://union-click.jd.com/jdc?e=&p=JF8AAMQDIgZlGmsVARUEVxheHDJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRUBFQRXGF4cHUtCCUZrUVprQBVNOmZnVHEGAQJuBFdvEEg5Uw4eN1QrWx0GFARUGVwWMiIHUisNewITBlQaWhACFwRlGmsVBREAUBNcFwcVD1YeaxICGzdVG14VABUCSR1dFAQSBlYbayUyETdlK1slASJFOx5fRgVAVFcdDBEFQQIFE1gcB0UCBxkOQAUQBlVMC0FRIgVUGl8c)

[《狼书（卷2）：Node.js Web应用开发》](https://union-click.jd.com/jdc?e=&p=JF8AAMQDIgZlGmsVARUHUBNYEzJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRUBFQdQE1gTHUtCCUZrQkVJASYBWxFidkdcegVqYRRwXWQfZQ4eN1QrWx0GFARUGVwWMiIHUisNewITBlQaWhACFwRlGmsVBREAUBNcEAETBlEYaxICGzdVG14VABUCSR1dFAQSBlYbayUyETdlK1slASJFO0xfQQITAVZPXBcAFwICS1sdVUABV05eQFcaB10YXRAEIgVUGl8c)

[《深入理解 TypeScript》](https://union-click.jd.com/jdc?e=&p=JF8AAMQDIgZlGmsVARQDURxYEDJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRUBFANRHFgQHUtCCUZraFBxBi8cWBxnR3EsRAVLUUQBMmRcZQ4eN1QrWx0GFARUGVwWMiIHUisNewITBlQaWhACFwRlGmsVBREAUBNcEgsSAVcbaxICGzdVG14VABUCSR1dFAQSBlYbayUyETdlK1slASJFO0kOHAdGU1xIWUBXQQJTS1wdAhABVhJZHQoWD1UeDxMCIgVUGl8c)

[《前端serverless面向全栈的无服务器架构实战》](https://union-click.jd.com/jdc?e=&p=JF8AAMQDIgZlGmsVABEGXBxfEjJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRUAEQZcHF8SHUtCCUZrYF0SYUtIX3dgR0c2ExMQQhJhL0cAdQ4eN1QrWx0GFARUGVwWMiIHUisNewITBlQaWhACFwRlGmsVBREAURpbFwUQD1ISaxICGzdVG14VABUCSR1dFAQSBlYbayUyETdlK1slASJFOxtbFgobB1NPDkUKEwIFHAlFBRVTBkkPEAcQAwEbWhBXIgVUGl8c)

[《JavaScript悟道》](https://union-click.jd.com/jdc?e=&p=JF8AAMQDIgZlGmsVARsOVxhfHTJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRUBGw5XGF8dHUtCCUZrcnx7Xx4SGxxhQHUdUhMWcEpVB1tbUw4eN1QrWx0GFARUGVwWMiIHUisNewITBlQaWhAGFQBlGmsVBREAURpbEgYRAVYSaxICGzdVG14VABUCSR1dFAQSBlYbayUyETdlK1slASJFOx4JFgpADgBIDhYHEQIBH1tGV0UBVxIMRgtFDwAcDkIHIgVUGl8c)

[《Node.js设计模式》](https://union-click.jd.com/jdc?e=&p=JF8AALsDIgZlGmsXAxcDXBpZFzJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRcDFwNcGlkXHUtCCUZrXnhPWh5cLEVnaVdUBRNLQAhvUFMoQw4eN1QrWx0GFARUGVwWMiIHUisQewMiBmUbXBYFFgZVH14dBRUEZRxbHDISB1AbWRIHDgFTGl0VAxEHZStrFjIiN1UrWCVAfFIAHA8cA0YOUUsPHAdGAl0SWBYEEwcHGF1HBhBUBx5cJQATBlES)

[《Node.js 区块链开发》](https://union-click.jd.com/jdc?e=&p=JF8AAM4DIgZlGFwXARMOUR9bFTISD1UYUhAGEgRTHmtRXUpZCisCUEdTRV4FRU1HRltKQA4KUExbSxtTFQEbAlEbWBMHDV4QRwYlXRNTERxSSAJyf1J5X2B1WUYcTQdzYh4LZRprFQoWAVYaWRIBIjdVHGtUbBsBVx5cJQMiB1IYXBAKFQRcGlkUBSIAVRJrFQIXB1ccXgkEFAZTG1oWAiI3ZRhrJTISN1YrGXsBQA9dSQ8UBBUCVEheEgNGVAEdDBAHElACHwkTA0dSVytZFAMWDg)

[《实现领域驱动设计》](https://union-click.jd.com/jdc?e=&p=JF8AAMQDIgZlGmsVABIFVR5THDJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRUAEgVVHlMcHUtCCUZrE31sADEbEBFien1QE11eAWVEFGAbQw4eN1QrWx0GFARUGVwWMiIHUisNewITBlQaWhACFwRlGmsVBREAURpbEAcaB1MeaxICGzdVG14VABUCSR1dFAQSBlYbayUyETdlK1slASJFO0lSFANCA1xMUxELFQICSQkcUUAOVRlYQldHDgZOXBIDIgVUGl8c)

[《Node.js：来一打 C++ 扩展》](https://union-click.jd.com/jdc?e=&p=JF8AAMQDIgZlGmsVARAOVB5aEDJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRUBEA5UHloQHUtCCUZrYwFtUhNZHBBhWkdRRylKSVJYPGw_ZQ4eN1QrWx0GFARUGVwWMiIHUisNewITBlQaWhACFwRlGmsVBREAUBNcEQsRBF0faxICGzdVG14VABUCSR1dFAQSBlYbayUyETdlK1slASJFOxpZEQtGAlNPWR1VQQJcGA5GABYCVk5YFgFBBwZLUxNXIgVUGl8c)

[《JavaScript 权威指南》](https://union-click.jd.com/jdc?e=&p=JF8AAMQDIgZlGmsVAxoBUB5ZEjJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRUDGgFQHlkSHUtCCUZrSn1KXVdOJFBhEXFTfjNqUhFBDEclZQ4eN1QrWx0GFARUGVwWMiIHUisNewITBlQaWhADFgRlGmsVBREAUBNcEwoXBFYZaxICGzdVG14VABUCSR1dFAQSBlYbayUyETdlK1slASJFO0taHAdAUlQTDEUKRQJRG1kcCxZXUBwPEwESDgVMWBUAIgVUGl8c)

数据库:

[《PostgreSQL修炼之道：从小工到专家（第2版）》](https://union-click.jd.com/jdc?e=&p=JF8AAMQDIgZlGmsVARQFUhhaFTJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRUBFAVSGFoVHUtCCUZrYGtLXw9uLh1hb1s3WA8TX2ZfCGI9dQ4eN1QrWx0GFARUGVwWMiIHUisNewITBlQaWhADFgRlGmsVBREAUBNcHAQTD1ceaxICGzdVG14VABUCSR1dFAQSBlYbayUyETdlK1slASJFOx9bRwYUUgFJWkJWEQICGAgdURsCBh9dQVdAAVVOWRFQIgVUGl8c)

[《MySQL必知必会》(](https://union-click.jd.com/jdc?e=&p=JF8AAMQDIgZlGmsVARsHXBNSFjJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRUBGwdcE1IWHUtCCUZrfHVGRAMbA11nW0MRUgRoXmJCCmUwQw4eN1QrWx0GFARUGVwWMiIHUisNewITBlQaWhAGFQBlGmsVBREAUBNcHQUTBVwYaxICGzdVG14VABUCSR1dFAQSBlYbayUyETdlK1slASJFOxIPQAsbAwUcWBUKFQJVSQlGA0FQUR0JFwIXUFUTWhUKIgVUGl8c)

[《MongoDB从入门到商业实战》](https://union-click.jd.com/jdc?e=&p=JF8AAMQDIgZlGmsVARYBXRpaFTJWWA1FBCVbV0IUWVALHEpCAUdETlcNVQtHRRUBFgFdGloVHUtCCUZrY1BvZR1cHnBgS1MiQSxOVUR-U0g5Uw4eN1QrWx0GFARUGVwWMiIHUisNewITBlQaWhACFwRlGmsVBREAUBNdFAAQB10SaxICGzdVG14VABUCSR1dFAQSBlYbayUyETdlK1slASJFOx1YEQcVBQIYCBNQGwIHTgtGURBXBR5eQFEQDwUfWkYFIgVUGl8c)
