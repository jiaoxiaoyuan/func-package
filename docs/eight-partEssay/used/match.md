---
title: 正则表达式匹配X
order: 51
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

正则表达式匹配X
===

题目描述

>请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配

```js
//s, pattern都是字符串
function match(s, pattern)
{
    var reg=new RegExp("^" + pattern + "$");
    return reg.test(s);
}
```

