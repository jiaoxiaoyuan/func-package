---
title: concatenateNames - 拼接名称列表
nav:
  title: 函数库
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 12
---
## concatenateNames - 拼接名称列表

```js
/**
 * 连接数据项中的名称
 *
 * @param data 数据项数组
 * @param key 数据项中用于获取名称的键名，默认为 'name'
 * @returns 返回由逗号分隔的名称字符串
 */
```
#### 定义了一个名为 concatenateNames 的函数，该函数接受两个参数：一个 data 数组和一个可选的 key 参数。下面是这段代码的详细解释：

```js
export function concatenateNames(data: DataItem[], key: keyof DataItem = 'name'): string {
	// 通过映射函数提取每个数据项中指定键对应的值，构成新的数组
	const names = data.map(item => item[key])

	// 使用逗号连接名称
	// Join the names with a comma
	return names.join(',')
}
```

## 函数签名
```js
function concatenateNames(data: DataItem[], key: keyof DataItem = 'name'): string {
    // ...
}
```
data: DataItem[]：data 是一个类型为 DataItem 的数组。这里假设 DataItem 是一个已定义的类型，但在这段代码中并没有给出它的定义。

key: keyof DataItem = 'name'：key 是一个可选参数，它的类型是 DataItem 类型的键（即 DataItem 的属性名）。如果调用者没有为 key 提供值，那么它会有一个默认值 'name'。

## 函数体

```js
const names = data.map(item => item[key])
```

这行代码使用数组的 map 方法遍历 data 数组中的每一个元素（即每一个 DataItem）。

对于每一个 DataItem，它都通过 item[key] 获取该元素上 key 属性对应的值。

所有这些值被收集到一个新的数组 names 中。


## 返回值
```js
return names.join(',')
```
这行代码使用数组的 join 方法将 names 数组中的所有元素连接成一个字符串。元素之间用逗号 , 分隔。
连接后的字符串就是函数的返回值。

## 示例

假设 DataItem 是这样的类型：
```js
type DataItem = {
    name: string;
    age: number;
    city: string;
};
```

下面是一个使用 concatenateNames 函数的示例：
```js
const data: DataItem[] = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
];

console.log(concatenateNames(data));             // 输出: Alice,Bob,Charlie
console.log(concatenateNames(data, 'city'));     // 输出: New York,Los Angeles,Chicago

```
