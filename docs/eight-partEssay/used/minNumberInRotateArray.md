---
title: 旋转数组的最小数字
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


旋转数组的最小数字 
===


>把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
>输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
>例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
>NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

```js
function minNumberInRotateArray(rotateArray) {
    if (rotateArray.length === 0) return 0
    let max = 0
    let m = 0
    let length = rotateArray.length
    for (let i = 0; i < length; i++) {
        if (rotateArray[i] >= max) {
            max = rotateArray[i]
        } else {
            m = rotateArray[i]
            break
        }
    }
    return m
}
module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};
```

