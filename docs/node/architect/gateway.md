---
nav:
    title: Node系列
    path: /node
    order: 6
group:
    path: /architect
    title: 服务端架构设计
    order: 22
title: 网关设计
order: 10
---

# 网关设计

与将模块高度耦合并部署为一个大的应用程序相比，微服务的目标是将应用程序充分分解或者解耦为松散耦合的许多微服务或者模块，这样做对下面几点有很大帮助：

- 每个微服务都可以独立于应用程序中的同级服务进行部署、升级、扩展、维护和重新启动。
- 通过自治的跨职能团队进行敏捷开发和敏捷部署。
- 运用技术时具备灵活性和可扩展性

在微服务架构中，我们根据各自的特定需求部署不同的松耦合服务，其中每个服务都有其更细粒度的 API 模型，用以服务于不同的客户端（Web，移动和第三方 API）。

## 客户端到微服务的连接

在考虑客户端与每个已部署的微服务 直接通信 的问题时，应考虑以下挑战：

1. 如果微服务向客户端公开了细粒度的 API，则客户端应向每个微服务发出请求。在典型的单页中，可能需要进行 多次服务器往返，才能满足请求。对于较差的网络条件下运行的设备（例如移动设备），这可能会更糟。
2. 微服务中存在的 多种通信协议（例如 gRpc、thrift、REST、AMQP 等）使客户端很难轻松采用所有这些协议。
3. 必须在每个微服务中实现 通用网关功能（例如身份验证、授权、日志记录）。
4. 在不中断客户端连接的情况下，很难在微服务中进行更改。例如，在合并或划分微服务时，可能需要重新编写客户端部分代码。

## API 网关

为了解决上述挑战，人们引入了一个附加层，该附加层位于客户端和服务器之间，充当从客户端到服务器的反向代理路由请求。与面向对象设计的模式相似，它为封装底层系统架构的 API 提供了一个单一的入口，称为 API 网关。

简而言之，它的行为就像 API 管理员一样，但重要的是不要将 API 管理与 API Gateway 混为一谈。

## API 网关的功能

### 路由

网关封装了底层系统并与客户端分离，为客户端提供了与微服务系统进行通信的单个入口点。

### 整合

API 网关整合了一些边缘的重复功能，无需让每个微服务都实现它们。它包括如下功能：

- 认证和授权
- 服务发现集成
- 缓存响应结果
- 重试策略、熔断器、QoS
- 限速和节流
- 负载均衡
- log 日志、链路追踪、关联
- Header、query 字符串 以及 claims 转义
- IP 白名单
- IAM
- 集中式日志管理（服务之间的 transaction ID、错误日志等）
- 身份的提供方，验证与授权

## 后端服务前端模式

后端服务前端模式（BFF，Backend for Frontend）

它是 API 网关模式的一种变体。它提供了基于客户端的多个网关，而不是提供给客户端一个单一的入口点。目的是根据客户端的需求提供量身定制的 API，从而消除了为所有客户端制作通用 API 造成的大量的浪费。

> 到底需要多少 BFF？

BFF 的基本概念是为每种用户体验开发利基后端。菲尔·卡尔萨多（PhilCalçado） 的指导建议是“一种体验，一种 BFF”。如果跨客户端（IOS 客户端、Android 客户端、Web 浏览器等）的要求有很大差异，并且单个代理或 API 的发布时间有严格要求，则 BFF 是一个很好的解决方案。还应注意，更复杂的设计需要复杂的步骤。

### GraphQL 与 BFF

GraphQL 是一种 API 的查询语言。PhilCalçado 提出 BFF 和 GraphQL 的想法是相似的，但不是互斥的概念。他补充说，BFF 与你端口的形状无关，而在于赋予客户端对应用程序的自治权，您可以在其中构建与许多 BFF 或 OSFA（one-size-fits-all）的 GraphQL API。

## 著名的 API 网关

### Netflix API 网关：Zuul

Netflix 的流媒体服务可在 1000 多种不同类型的设备（电视、机顶盒、智能手机、游戏系统、平板电脑等）上使用，在高峰时段可以每秒处理 50,000 个请求，这种需求是 OSFA （one-size-fits-all）的 REST API 难以满足的，因此他们为每个设备量身定制了 API 网关。

Netflix 的 Zuul 2 是所有进入 Netflix 云基础架构的请求的第一步。Zuul 2 大大改进了架构和功能，使我们的网关能够处理、路由和保护 Netflix 的云系统，并帮助为我们的 1.25 亿会员提供最佳体验。

### 亚马逊 API 网关

AWS 提供了完备的托管服务，用于创建、发布、维护、监视以及保护 REST、HTTP 和 WebSocket，开发人员可以在其中创建用于访问 AWS 或其他 Web 服务的 API，并将数据存储在 AWS 云上面。

### Kong API 网关

Kong Gateway 是一个开源的，轻量级的微服务 API 网关，可提供无与伦比的延迟性能优化和可伸缩性。如果您只需要这些基础能力，那么它就是很合适的选项。只需要增加更多节点就可以轻松横向扩展。它以非常低的延迟来支持大量可变的工作负载。

> 选择正确的网关

评估标准里面，一些常见的指标包括简便性、开源还是专有、可伸缩性和灵活性、安全性、后续功能、社区、管理（支持情况、监控和部署）、环境配置（安装、配置、是否支持托管）、定价和文档等。

## API 组合与聚合

API 网关中的一些 API 请求直接映射到单个服务的 API 上，可以通过将请求路由到相应的微服务来提供服务。但是，在需要从多个微服务获得结果的复杂 API 操作的情况下，可以通过 API 组合 / 聚合（分散 - 收集机制）来提供服务。在需要同步通信的情况下，如果服务彼此依赖，则必须遵循链式组合模式。组合层必须支持很大一部分的 ESB / 集成功能，例如转换、编排、弹性和稳定性模式。
根容器的部署必须配备特殊的分发器和聚合器功能（或微服务）。分发者负责分解成细粒度的任务，并将这些任务分发给微服务实例。聚合器负责聚合业务工作流从组合微服务中得出的结果。

具备复杂功能的网关会增大测试和部署的难度。强烈建议大家避免在 API 网关中进行聚合和数据转换。领域专属的功能更应该遵循软件开发实践的定义，在应用程序的代码中完成。Netflix API Gateway Zuul 2 从他们在 Zuul 到原始系统的网关中，删除了许多业务逻辑。

### Service Mesh 与 API 网关

微服务中的 Service Mesh 是处理进程间通信的可配置网络基础结构层。这和通常称为 Sidecar 代理或 Sidecar 网关的东西很像。它提供了许多功能，例如：

- 负载均衡
- 服务发现
- 健康检查
- 安全性

从表面上看，API 网关和 Service Mesh 似乎解决了相同的问题，因此好像是多余的。它们确实解决了相同的问题，但是应用在不同的场景。API 网关被部署为业务解决方案的一部分，被外部的服务发现，处理纵向的流量（面对外部客户端），但是，Service Mesh 是用来处理横向流量（在不同的微服务之间）。

实现 Service Mesh 可避免在您自己的代码中出现一些弹性交互，例如熔断器、服务发现、健康检查以及服务观察。对于少量的微服务，应考虑使用其他替代方法来进行故障管理，因为 Service Mesh 集成可能代价太大了。但对于大量的微服务，它的收益是显著的。

结合这两种技术可能是确保应用程序正常运行时间和弹性伸缩能力的一种有效方法，同时又可以确保您的应用程序易于使用。将两者视为同样的产品是不对的，最好将两者视为在涉及微服务和 API 的部署中相辅相成的工具。

### API 网关实现的注意事项

- 可能产生的单点故障或者瓶颈
- 由于通过 API 网关进行了额外的网络跳转以及复杂性风险，响应时间增长了

---

**参考资料：**

- [谈谈微服务设计中的 API 网管模式](https://mp.weixin.qq.com/s/sVBy4kvqKCMT44BKe78fHg)
