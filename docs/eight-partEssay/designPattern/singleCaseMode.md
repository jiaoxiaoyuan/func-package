---
title: 单例模式
order: 1
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /designPattern
  title: 设计模式
  order: 3
---

单例模式
====
> 单例模式（Singleton Pattern）是 JavaScript 中最简单的设计模式之一。

> 保证一个类仅有一个实例，并提供一个访问它的全局访问点。

实现的方法为先判断实例存在与否，如果存在则直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。

单例模式是一种常用的模式，有一些对象我们往往只需要一个，比如线程池、全局缓存、浏览器中的window对象、弹窗、或是购物车等。

试想一下，当我们单击登录按钮的时候，页面中会出现一个登录浮窗，而这个登录浮窗是唯一的，无论单击多少次登录按钮，这个浮窗都只会被创建一次，那么这个登录浮窗就适合用单例模式来创建。

```js
class Modal {
	constructor(name) {
		this.name = name;
		this.getName();
	}
    getName() {
        return this.name;
    }
}
Modal.create = (function() {
    let instance = null;
    return function(name) {
        if (!instance) {
           instance = new Modal(name);
        }
        return instance
    }
})()
let a = Modal.create('aaa');
let b = Modal.create('bbb');

// 因为单例模式是只实例化一次，所以下面的实例是相等的
console.log(a, b) 	// 两个都是aaa
console.log(a === b) 	// true
```

上述代码是一种简单版单例模式，通过js的立即执行函数和闭包函数，将初始实例确定，之后便可通过判定`instance`是否存在，果存在则直接返回，反之则创建了再返回，即确保一个类只有一个实例对象。

“透明版”单例模式：

用户从这个类创建对象的时候，可以像使用其他普通类一样

```js
let Modal = (function(){
    let instance;
    return function(name) {
        if (instance) {
           return instance;
        }
        this.name = name;
        return instance = this;
    }
})();

Modal.prototype.getName = function() {
    return this.name
}

let a = new Modal('问题框');
let b = new Modal('回答框');

console.log(a === b); // true
console.log(a.getName());  // '问题框'
console.log(b.getName());  // '问题框'
```

用代理实现：

跟之前不同的是，我们把负责管理单例的逻辑移到了代理类`ProxySing`中，这样一来，`Modal`就变成了一个普通类。

```js
let Modal = function(name) {
    this.name = name
    this.getName()  
}

Modal.prototype.getName = function() {
    return this.name
}

let ProxySing = (function(){
    let instance;
    return function(name) {
        if (!instance) {
            instance = new Modal(name)
        }
        return instance
    }
})()

let a = new ProxySing('问题框');
let b = new ProxySing('回答框');

console.log(a === b); // true
console.log(a.getName());  // '问题框'
console.log(b.getName());  // '问题框'
```
