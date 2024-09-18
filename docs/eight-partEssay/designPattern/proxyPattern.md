---
title: 代理模式
order: 4
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /designPattern
  title: 设计模式
  order: 3
---

代理模式
===

> 为一个对象提供一个代用品或占位符，以便控制对它的访问。

代理模式确实很方便，通常如果面临一些很大开销的操作，就可以并采用虚拟代理的方式延迟到需要它的时候再去创建，比如懒加载操作。

在某些情况下，一个客户类不想或者不能直接引用一个委托对象，而代理类对象可以在客户类和委托对象之间起到中介的作用。代理可以帮客户过滤掉一些请求并且把一些开销大的对象，延迟到真正需要它时才创建。


在 JS 中比较典型的代理有图片懒加载，合并 http 请求，以及缓存计算乘积。

## 送花的例子

```js
class Flower {
    constructor(name) {
        this.name = name;
    }
}

// 送花人 小明
let xiaoming = {
    name: '小明',
    sendFlower(target) {
        target.receiveFlower(this.name)
    }
}
// 代理B
let B = {
    receiveFlower(customer) {
        // 当然要等小红好心情时才送花，也在送花时，才创建花
        A.listenGoodMood(() => {
            A.receiveFlower(new Flower(customer + '的花'))
        })
    } 
}
// 心仪对象 小红
let A = {
    name: '小红',
    receiveFlower(flower) {
        console.log(this.name + '收到：' + flower.name)
    },
    listenGoodMood(fn) {
        setTimeout(() => {
            fn()
        }, 1000)
    }
}

xiaoming.sendFlower(B) // 小红收到：小明的花
```

## 图片懒加载

下面是一个图片懒加载的例子，我们加先加载默认图片，等真实图片加载完之后再替换默认图片。

```js
const createImage = (function() {
    const img = document.createElement('img');
    document.body.appendChild(img);

    return function(src) {
        img.src = src;
    }
})();

const proxyImage = function(fn) {
    const image = new Image();
    const defaultImg = 'https://rs.vip.miui.com/vip-resource/prod/mio/v136/static/media/lazyLoad.a10ffbd7.png';

    return function(src) {
        fn(defaultImg);

        // 这里加一个延迟，可以更好的看到图片替换的过程。
        setTimeout(function() {
            image.src = src;
            image.onload = function() {
                fn(src);
            };
        }, 2000);
    };
};

const proxy = proxyImage(createImage);
proxy('https://pic1.zhimg.com/80/v2-ec33fcec249a9cabab61b14436432bf0_r.jpg');
```

## ES6的Proxy

> Proxy 是 ES6 提供的专门以代理角色出现的代理器,Vue 3.0 的响应式数据部分弃用了 Object.defineProperty，使用 Proxy 来代替它。

现在用`Proxy`模拟一下另一种场景: 

为了保护不及格的同学，课代表拿到全班成绩单后只会公示及格人的成绩。对考分有疑问的考生，复议后新分数比以前大10分才有权利去更新成绩

```js
const list = {
    'A': 100,
    'B': 70,
    'C': 50
}

const obj = new Proxy(list, {
    get(target, key) {
        if(target[key] > 60) {
            console.log('考试及格')
            return target[key]
        } else {
            console.log('不及格的成绩无法公示')
        }
    },
    set(target, key, newVal) {
        if(newVal - target[key] > 10) {
            target[key] = newVal
            console.log('修改成绩：success')
        } else {
            console.log('修改成绩：error')
        }
    }
})

obj.A;          // 考试及格
obj.B;          // 考试及格
obj.C;          // 不及格的成绩无法公示

obj.A = 111;    // success
obj.B = 20;     // error
```
