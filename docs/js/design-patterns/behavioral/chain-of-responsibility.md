---
nav:
  title: JavaScript
  path: /js
  order: 2
group:
  title: 行为型
  order: 84
title: 职责链模式
order: 5
---

# 职责链模式

**职责链模式（Chain of Responsibility）**：解决请求的发送者和请求的接受者之间的耦合，通过职责链上的多个对象对分解请求流程，实现请求在多个对象之间的传递，直到有对象处理它为止。

## 概述

- **解决问题**：职责链上的处理者负责处理请求，客户只需要将请求发送到职责链上即可，无须关心请求的处理细节和请求的传递，所以职责链将请求的发送者和请求的处理者解耦了。
- **何时使用**：在处理消息的时候以过滤很多道
- **如何解决**：拦截的类都实现统一接口
- **核心代码**：Handler 里面聚合它自己，在 HandlerRequest 里判断是否合适，如果没达到条件则向下传递，向谁传递之前 set 进去。
- **应用实例**：
  - 如果早高峰能顺利挤上公交车的话，那么估计这一天都会过得很开心。因为公交车上人实在太多了，经常上车后却找不到售票员在哪，所以只好把两块钱硬币往前面递。除非你运气够好，站在你前面的第一个人就是售票员，否则，你的硬币通常要在 N 个人手上传递，才能最终到达售票员的手里。
  - 中学时代的期末考试，如果你平时不太老实，考试时就会被安排在第一个位置。遇到不会答的题目，就把题目编号写在小纸条上往后传递，坐在后面的同学如果也不会答，他就会把这张小纸条继续递给他后面的人。
- **优点**：
  - 降低耦合度。它将请求的发送者和接收者解耦。
  - 简化对象。使得对象不需要知道链的结构。
  - 增强给对象指派职责的灵活性。通过改变链内的成员活着调动它们的次序，允许动态地新增活着删除责任。
  - 增加新的请求处理类很方便
- **缺点**：
  - 不能保证请求一定被接收
  - 系统性能将受到一定影响，而且在进行代码调试时不太方便，可能会造成循环调用
  - 可能不容易观察运行时的特征，有碍于除错
- **使用场景**：
  - 有多个对象可以处理同一个请求，具体哪个对象处理该请求由运行时刻自动确定
  - 在不明确指定接收者的情况下，向多个对象中的一个提交一个请求
  - 可动态指定一组对象处理请求

## 结构

职责链模式包含如下角色：

- 抽象处理者（Handler）：定义一个处理请求的抽象类。如果需要，可以定义一个方法以设定返回对下家的引用。
- 具体处理者（ConcreteHandler）：具体处理者接到请求后，可以选择将请求处理掉，或者将请求传给下家。由于具体处理者持有对下家的引用，因此，如果需要，具体处理者可以访问下家。
