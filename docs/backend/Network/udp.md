---
title: UDP 协议
order: 13
nav:
  title: 服务端
  path: /Back-end
  order: 8
group:
  path: /network
  title: 计算机网络
  order: 10
---

# UDP 协议

UDP，即用户数据报协议，是一种传输协议，是 TCP 的替代协议。

它与 TCP 的主要区别在于它是无连接的。

这意味着它更快，每个发送的数据包更轻量级，因为它不包含 TCP 所需的所有信息，并且它确实具有更轻的握手过程。

缺点是 UDP 不如 TCP 可靠。

在 TCP 中，如果数据包丢失，协议能够处理它并重新发送数据包。

在 UDP 中，这不是内置在协议中的，必须在更高级别（构建在它之上）进行处理。没有内置检查来控制是否接收到数据包，以及是否正确接收到数据包。

UDP 于 1980 年在 [RFC 768](https://tools.ietf.org/html/rfc768) 中定义。

依赖 UDP 层的一些最著名的应用协议是 DNS 和 DHCP，更重要的是 HTTP/3 的底层。

UDP 协议使用端口来允许进程之间的通信，就像 TCP 一样。

## 更多资料

[TCP 和 UDP 的区别](https://github.com/lio-zero/blog/blob/main/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP%20%E5%92%8C%20UDP%20%E7%9A%84%E5%8C%BA%E5%88%AB.md)

