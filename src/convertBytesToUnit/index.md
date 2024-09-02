---
title: convertBytesToUnit - 将字节数转换为指定的存储单位（KB或MB）
nav:
  title: 函数库
  path: /lib
group:
  path: /math
  title: 数学计算
  order: 13
---


 
 ## convertBytesToUnit - 将字节数转换为指定的存储单位（KB或MB）

 * 将字节数转换为指定的存储单位（KB或MB）
 * @param {number} bytes - 字节数
 * @param {'KB' | 'MB'} [unit='MB'] - 目标单位，默认为'MB'
 * @returns {string} 转换后的存储大小（带单位）



```js
function convertBytesToUnit(bytes: number, unit = "MB"): string | number {
    // 定义单位转换表
    const units: { [key: string]: number } = {
        // 千字节
        KB: 1024,
        // 兆字节
        MB: 1024 * 1024,
    };

    // 如果给定的单位不在单位转换表中
    if (!units.hasOwnProperty(unit)) {
        // 直接返回原始字节数
        return bytes;
    }
    // 转换字节数为指定单位的值
    const convertedValue = bytes / units[unit];
    // 返回保留三位小数的转换值和单位
    return `${convertedValue.toFixed(3)} ${unit}`;
}

```
