---
title: 两个栈实现一个队列
order: 5
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


两个栈实现一个队列
===

```js
var stack1=[],stack2=[];
function push(node)
{
    stack1.push(node);
}
function pop()
{
    if(stack2.length==0){
        if(stack1.length==0){
            return null;
        }else{
            var len = stack1.length;
            for(var i=0;i<len;i++){
                stack2.push(stack1.pop());
            }
            return stack2.pop();
        }
    }else{
        return stack2.pop();
    }
}
```

 > 这段JavaScript代码实现了一个特殊的栈结构，它使用两个数组（stack1和stack2）来模拟栈的操作。这种实现方式主要是为了实现pop操作的时间复杂度在均摊情况下为O(1)。

## 函数解释

- `push(node)`:
  1. 这个函数接受一个参数node，并将其推入stack1数组的顶部。
  2. stack1用于存储所有推入的元素，直到需要执行pop操作。
   
- `pop()`:

  1. 这个函数用于从栈中弹出一个元素。它的行为依赖于stack2的长度。
  2. 如果stack2为空（stack2.length == 0）：
     - 首先检查stack1是否为空。如果stack1也为空，说明栈中没有元素可以弹出，因此返回null。
     - 如果stack1不为空，则将stack1中的所有元素逐一弹出，并推入stack2中。这样做的目的是反转stack1中元素的顺序，使得最后推入的元素位于stack2的顶部。
     - 然后从stack2中弹出一个元素并返回。这个元素就是原本在stack1顶部的元素，也就是最后推入的元素。
  3. 如果stack2不为空，则直接从stack2中弹出一个元素并返回。这是因为stack2中已经存储了反转后的元素顺序，所以可以直接从中弹出元素。

## 均摊时间复杂度分析
 - 对于push操作，时间复杂度始终为O(1)，因为只是简单地将元素推入stack1。

 - 对于pop操作，虽然在某些情况下（当stack2为空且stack1不为空时）需要遍历整个stack1来反转元素顺序，但这个过程不是每次pop都会发生的。实际上，每次从stack1转移到stack2的元素，在后续的pop操作中都可以直接从stack2中O(1)时间复杂度内弹出，直到stack2为空。因此，如果将多次pop操作看作一个整体，均摊下来的时间复杂度仍然是O(1)。


## 总结
这段代码通过两个栈（实际上是两个数组）的巧妙配合，实现了一个在均摊情况下具有O(1)时间复杂度的栈结构。这种实现方式在处理大量数据时能够显著提高性能。
