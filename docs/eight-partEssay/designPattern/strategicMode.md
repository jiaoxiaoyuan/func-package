---
title: 策略模式
order: 2
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /designPattern
  title: 设计模式
  order: 3
---

策略模式
===

> 定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。

适用于业务场景中需要判断多种条件，甚至包含复杂条件嵌套的，可以使用策略模式来提升代码的可维护性和可读性。

比如支付，权限校验，各种复杂的判断场景。

```js
/* 策略类 */
var levelOBJ = {
    "A": (money) => {
        return money * 4;
    },
    "B": (money) => {
        return money * 3;
    },
    "C": (money) => {
        return money * 2;
    } 
}

/* 环境类 */
var calculateBouns = (level, money) => {
    return levelOBJ[level](money);
}

calculateBouns('A', 10000) // 40000
calculateBouns('B', 20000) // 60000
```

实现一个表单校验：

```html
<input type='text' name='username'>
<input type='password' name='passsword'>
<button>提交</button>
```

验证规则如下：

```js
const button = document.querySelector('button')
const text = document.querySelector('input[type="text"]')
const password = document.querySelector('input[type="password"]')

button.onclick = () => {
    if(text.value === '') {
        console.log('用户名不能为空')
        return false;
    }
    if(password.value.length < 6) {
        console.log('密码不能少于6位')
        return false;
    }
}
```

这是一个很常见的思路

下面，使用策略模式重构表单校验，新增可扩展性的方法，可根据需求场景来自由发挥。

```js
class Validator {
    constructor() {
        /**
         * 验证列表
         * 验证规则
         */
        this.rules = []
        this.strategies = {
            isEmpty: (val, msg) => {
                if (!val) return msg
            },
            minLength: (val, msg) => {
                if (val.length < 10) {
                    return msg
                }
            }
        }
    }
    // 添加验证内容
    add(val, rule, msg) {
        this.rules.push(() => {
            return this.strategies[rule].call(null, val, msg)
        })
    }
    // 新增验证规则
    addType(val, fn) {
        this.strategies[val] = fn
    }
    // 开始校验，返回校验后的结果
    star() {
        for (let i of this.rules) {
            const result = i()
            if (result) {
                return result
            }
        }
    }
}

const button = document.querySelector('button')
const text = document.querySelector('input[type="text"]')
const password = document.querySelector('input[type="password"]')

button.onclick = () => {
    const validator = new Validator()

    // validator.addType('mobile', (val, msg) => {
    //     if (!/(^1[3|5|8][0-9]{9}$)/.test(val)) {
    //         return msg
    //     }
    // })
    validator.add(text.value, 'isEmpty', '用户名不能为空')
    validator.add(password.value, 'minLength', '密码不能少于10位')

    const result = validator.star()
    if (result) {
        alert(result)
    } else {
        // ..success
    }
}
```
