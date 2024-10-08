---
title: TCP 协议
order: 12
nav:
  title: 服务端
  path: /Back-end
  order: 8
group:
  path: /network
  title: 计算机网络
  order: 10
---

# TCP 协议

TCP 表示传输控制协议，它是 Web 和其他应用程序（如电子邮件）的基础。

TCP 在 1981 年的 [RFC 793](https://tools.ietf.org/html/rfc793) 中定义，是 Internet 最古老的支柱之一。

TCP 位于 Internet 协议（IP）之上，并构建了一个基础系统，HTTP、FTP、IMAP 等应用程序级协议都基于该系统。

与 IP 和 UDP 不同，TCP 是面向连接的。

在通过 TCP 进行传输之前，必须建立连接。以小数据包的形式发送数据，当通信结束时，连接关闭。

当数据通过 TCP 传输时，必须发生一个相对复杂的称为握手的工作流程。

这里不会详细介绍，但这种握手允许端到端连接，这确保了 TCP 可以提供其特有的功能之一：可靠性。使用 TCP，我们总是可以知道发送方发送的数据包是否被接收方正确接收。

如果数据包丢失，协议能够处理它并重新发送数据包。

在 IP 协议上，连接发生在计算机之间。在 TCP 中，使用端口的概念，连接发生在进程之间。

与 IP 地址关联的端口允许唯一标识计算机上的进程。例如：`localhost:8080` 或 `google.com:1234`

每个应用程序协议都有一个默认端口。例如 HTTP 为 80，HTTPS 为 443，FTP 为 21。这就是为什么您通常不必在浏览器中指定端口的原因。

> 推荐：[常见的网络端口及对应服务](https://github.com/lio-zero/blog/blob/main/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E5%B8%B8%E8%A7%81%E7%9A%84%E7%BD%91%E7%BB%9C%E7%AB%AF%E5%8F%A3%E5%8F%8A%E5%AF%B9%E5%BA%94%E6%9C%8D%E5%8A%A1.md)。

程序不需要使用默认值，这就是为什么特别是在本地计算机上，启动新应用程序时可能会看到 3000 或 8080 之类的端口。

端口号范围从 1 到 65535（端口号是 16 位无符号，对应 2^16 个可能值）。

