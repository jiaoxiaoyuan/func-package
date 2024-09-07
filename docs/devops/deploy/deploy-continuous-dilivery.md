---
title: 部署-持续交付
order: 50
nav:
    title: DevOps系列
    path: /DevOps
    order: 7
group:
  path: /deploy
  title: deploy
  order: 5
---

# 持续交付



![持续交付](../Linux/assets/continuous-delivery.b2a5ac2e-20240823233926585.png)

> **Continuous Delivery (CD or CDE) **is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time and, when releasing the software, doing so manually.

**持续交付**（Continuous Delivery，简称 CD），是在 CI 的基础进行了扩展，在 CI 环节完成了软件构建和测试工作并形成了新的版本，那么接下来就要进行交付，而这里的交付并不是交付到生产环境，而是类生产环境（STAGING），我们可以理解为灰度环境或者预发环境，进而接受部分真实流量的测试。如果没有问题的话则通过手动的方式部署到生产环境。如下图所示：

---

**参考资料：**

- [持续交付的思考](https://zhangyuyu.github.io/continuous-delivery/)
