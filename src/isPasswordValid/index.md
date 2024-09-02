---
title: isPasswordValid - 判断密码是否为N-Y位字符，并且包含英文字母和数字
nav:
  title: 函数库
  path: /lib
group:
  path: /judge
  title: 常用判断函数
  order: 12
---

## isPasswordValid - 判断密码是否为N-Y位字符，并且包含英文字母和数字

 * 判断密码是否有效
 * @param password 密码字符串
 * @param min 密码最小长度, 默认值8
 * @param max 密码最大长度，默认值16
 * @returns 返回布尔值，表示密码是否有效


```js
const isPasswordValid = (
    password: string,
    min: number = 8,
    max: number = 16
): boolean => {
    // 创建一个正则表达式，用于验证密码是否满足要求
    // 要求密码至少包含一个小写字母、一个数字，并且长度在min和max之间
    const passwordRegex: RegExp = new RegExp(
        `^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]{${min},${max}}$`
    );
    // 使用正则表达式测试密码是否满足要求
    return passwordRegex.test(password);
};
```
