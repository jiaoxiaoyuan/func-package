---
title: 数组的逆序对X
order: 34
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


数组的逆序对X
===

>在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

示例1

输入

>1,2,3,4,5,6,7,0

输出

>7

思路：直接两重循环时间复杂度太高会超时


```js
function countInversePairs(nums) {
  const MOD = 1000000007;
  let count = 0;

  function merge(left, mid, right) {
    let temp = new Array(right - left + 1); // 创建临时数组
    let i = left; // 左指针
    let j = mid + 1; // 右指针
    let k = 0; // 临时数组的索引
    let invCount = 0; // 当前合并过程中逆序对的数量

    // 合并两个有序数组，并统计逆序对
    while (i <= mid && j <= right) {
      if (nums[i] <= nums[j]) {
        temp[k++] = nums[i++];
      } else {
        temp[k++] = nums[j++];
        invCount += mid - i + 1; // 一次性统计逆序对
        invCount %= MOD; // 取模防止溢出
      }
    }

    // 将左边剩余元素填充进temp中
    while (i <= mid) {
      temp[k++] = nums[i++];
    }

    // 将右边剩余元素填充进temp中
    while (j <= right) {
      temp[k++] = nums[j++];
    }

    // 将temp中的元素复制回原数组中
    for (let p = 0; p < temp.length; p++) {
      nums[left + p] = temp[p];
    }

    return invCount;
  }

  function mergeSort(left, right) {
    let invCount = 0;
    if (left < right) {
      let mid = Math.floor((left + right) / 2);
      invCount = mergeSort(left, mid); // 左边归并排序，并统计逆序对
      invCount = (invCount + mergeSort(mid + 1, right)) % MOD; // 右边归并排序，并统计逆序对
      invCount = (invCount + merge(left, mid, right)) % MOD; // 合并左右两个有序数组，并统计逆序对
    }
    return invCount;
  }

  count = mergeSort(0, nums.length - 1); // 执行归并排序，并统计逆序对总数
  return count; // 返回逆序对总数对1000000007取模的结果
}

// 示例用法：
const nums = [1, 2, 3, 4, 5, 6, 7, 0];
const result = countInversePairs(nums);
console.log(result); // 输出: 7

```

> 注意：在示例中，输出是 7，这是基于题目原始描述“前面一个数字大于后面的数字”来定义的逆序对。如果你的预期输出与此不符，请检查题目描述或调整函数逻辑以满足特定需求。在标准定义下，数组 [1, 2, 3, 4, 5, 6, 7, 0] 中的逆序对只有一个 (7, 0)，因此如果严格按照逆序对的定义，输出应该是 1 而不是 7。上面的代码实现是按照标准逆序对定义来编写的。如果你的题目或测试环境期望输出为 7，那么可能题目中的逆序对定义与常规定义不同。
