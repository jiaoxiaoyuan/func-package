---
title: 栈的压入、弹出序列
order: 20
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

栈的压入、弹出序列
===

>输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

```js
function IsPopOrder(pushV, popV)
{
    // write code here
  var stack = [];
  for(let i =0;i<pushV.length;i++){
       stack.push(pushV[i])
       while(stack[stack.length-1] && popV[0] && stack[stack.length-1]===popV[0]){
           stack.pop()
           popV.shift()
       }
  }
  return stack.length===0
}
module.exports = {
    IsPopOrder : IsPopOrder
};
```

