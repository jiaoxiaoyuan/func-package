---
title: DNS — 域名系统
order: 3
nav:
  title: 服务端
  path: /Back-end
  order: 8
group:
  path: /network
  title: 计算机网络
  order: 10
---

# DNS — 域名系统

你通常不会尝试使用 IP 地址访问网站。可以这么做，但这很罕见。

你通常使用域名。比如 baidu.com 或 lio-zero.com。

这非常方便，因为例如，我可以更改用于托管网站的服务器和公司，同时保持相同的域名。

将人类可读的域名映射为机器可读的 IP 地址的系统称为 DNS（域名系统）。

DNS 是一个服务器网络。您的提供商将拥有自己的 DNS，您的路由器已经预先配置好使用它。

您也可以选择使用阿里的 DNS 服务器，其 IP 地址为 223.5.5.5。

这些 DNS 服务器将接收来自您计算机的请求，然后会询问它们自己的参考 DNS 服务器。

系统组织起来像一棵树。顶部有一个 DNS 服务器，称为根 DNS 服务器。

为了简化，它知道管理每个域扩展（如 `com`、`cn`、`net` 和 `org` 等）的 DNS 服务器的 IP 地址，包括特定于国家的域扩展和新的域扩展（如 `blog`、`dev` 或 `tech`）。

这些 DNS 服务器知道其扩展名下所有域的 IP 地址映射。

当然，系统的设置是为了确保缓存、冗余和承受高并发请求的能力，但这是总体思路。

## DNS 解析

由于我们输入的是域名，而数据包是通过 IP 地址传给对方的。因此我们需要得到域名对应的 IP 地址。这个过程需要依赖一个服务系统，这个系统将域名和 IP 一一映射，我们将这个系统就叫做 DNS（域名系统）。得到具体 IP 的过程就是 DNS 解析。

当然，值得注意的是，浏览器提供了 DNS 数据缓存功能。即如果一个域名已经解析过，那会把解析的结果缓存下来，下次处理直接走缓存，不需要经过 DNS 解析。

另外，如果不指定端口的话，默认采用对应的 IP 的 80 端口。

## DNS 记录

DNS 由多条不同类型的记录组成，每条记录都有自己的用途。以下是最常用的分类：

- A 记录 — 地址记录。用于将域名映射到 IPv4 地址。同样，AAAA 记录用于将域名映射到 IPv6 地址。
- CNAME 记录 — 规范的名称记录。创建指向另一个域或子域的别名，但绝不是 IP 地址。
- ANAME 记录 — 允许您将域的根指向主机名或域名。
- TXT 记录 — 允许添加有限的文本注释，通常用于所有权验证、验证或安全目的。
- MX 记录 — 指定负责接受域的传入和传出电子邮件的邮件服务器。应该指向邮件服务器名称，而不是 IP 地址。

## 更多资料

[Cloudflare 平台有提供了许多资料，包括 DNS](https://www.cloudflare.com/zh-cn/learning/)：

- [什么是 DNS？ | DNS 的工作方式](https://www.cloudflare.com/zh-cn/learning/dns/what-is-dns/)
- [什么是 DNS 服务器？](https://www.cloudflare.com/zh-cn/learning/dns/what-is-a-dns-server/)
- [DNS 记录](https://www.cloudflare.com/zh-cn/learning/dns/dns-records/)
- etc
