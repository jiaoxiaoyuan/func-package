---
title: 发布订阅模式（观察者模式）
order: 3
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /designPattern
  title: 设计模式
  order: 3
---

发布订阅模式（观察者模式）
===
> 发布—订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。  
> —— 来自《JavaScript设计模式与实践》

设计模式让人最有议论，或者说最让人模糊的，就是**发布订阅模式**和**观察者模式**了，这也是面试的一个考点。

不妨先来看一下~

## 发布订阅模式

适用于业务场景中当一个对象的状态发生变化时，需要自动通知其他关联对象，自动刷新对象状态，或者说执行对应对象的方法

**比如你是一个老师，需要通知班里家长的时候，你可以建一个群（列表）。每次通知事件的时候只要群发到群里(循环执行这个列表就好了)，而不用关心这个群里有谁，反正都是学生的家长。**

实现流程:

- 每一个观察者（Observer）都有一个`update`方法，并且观察者的状态就是等待被触发
- 每一个主题（subject）都可以通过`attach`方法接纳N个观察者所观察，即观察者们存储在主题的`observers`数组里
- 主题有初始化状态`init`、获取信息`getMessage`和设置信息`setMassage`三个通用型方法
- 当主题的状态发生变化时，通过特定的`notifyAllObervers`方法通知所有观察者

```js
// 创建一个主题，保存状态，状态变化之后触发所有观察者对象
class Subject {
    constructor() {
        this.message = '暂无通知';
        this.observers = [];    // 缓存需要通知的订阅者
    }
    // 获取信息
    getMessage() {  
        return this.message
    }
    // 设置信息
    setMassage(message) {
       this.message = message;
       this.notifyAllObservers()
    }
    // 发布通知
    notifyAllObservers() {  
        this.observers.forEach(observer => observer.update())
    }
    // 添加订阅者对象
    attach(observer) {  
       this.observers.push(observer)
    }
}

// 观察者
class Observer {
    constructor(name , message) {
       this.name = name;
       this.message = message;
       this.message.attach(this);
    }
    update() {
        console.log(`${this.name} 收到通知: ${this.message.getMessage()}`)
    }
}

// 创建班级群（主题 Subject）
let message = new Subject();

// 邀请家长进群（观察者 Observer）
let a = new Observer('张三', message);
let b = new Observer('李四', message);
let c = new Observer('王五', message);

// 发布信息
message.setMassage('明天开家长会')
message.setMassage('后天开始放假')
message.setMassage('在家也要好好学习')

// 张三 收到通知: 明天开家长会
// 李四 收到通知: 明天开家长会
// 王五 收到通知: 明天开家长会
// 张三 收到通知: 后天开始放假
// 李四 收到通知: 后天开始放假
// 王五 收到通知: 后天开始放假
// 张三 收到通知: 在家也要好好学习
// 李四 收到通知: 在家也要好好学习
// 王五 收到通知: 在家也要好好学习
```

主题每次改变状态后都会触发所有观察者状态更新，主题触发了3次状态，观察者一定`update`了9次。


## 观察者模式


## 两者区别

可以理解为（来自Github）

- 观察者模式：没中间商赚差价
- 发布订阅模式：有中间商赚差价
