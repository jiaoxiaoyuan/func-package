---
title: ArrayRemove - 移除数组中指定的条目
nav:
  title: 函数库
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 9
---


## ArrayRemove - 移除数组中指定的条目

 * 移除数组中指定的条目
 * @param array - 待操作的数组
 * @param item - 要删除的元素
 * @returns 删除成功返回true，否则返回false
 

 ```js
function ArrayRemove<T>(array: T[], item: T) {
    // 查找要删除的元素在数组中的索引
    const index = array.indexOf(item);
    // 如果索引大于等于0，表示找到了要删除的元素
    if (index >= 0) {
        // 使用splice方法从数组中删除该元素
        array.splice(index, 1);
        // 返回true表示成功删除
        return true;
    }
    // 如果没有找到要删除的元素，返回false
    return false;
}
 ```
