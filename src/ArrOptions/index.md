---
title: ArrOptions - 将数组转换为带有指定值和标签的对象数组
nav:
  title: 函数库
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 1
---


## ArrOptions - 将数组转换为带有指定值和标签的对象数组



定义了一个名为ArrOptions的函数，该函数接受一个数组arr和几个其他参数（value, label, type, FieldName, FieldName2），并返回一个新数组。这个新数组中的每个元素都是一个对象，该对象基于arr数组中的元素构建而成。

下面是这段代码的详细解释：

### 参数
- arr: any[] - 一个数组，其中包含任意类型的元素。

- value: string | number - 字符串或数字，表示arr数组中每个元素（对象）的哪个属性应该用作新对象中的value属性。

- label: string - 字符串，表示arr数组中每个元素（对象）的哪个属性应该用作新对象中的label属性。

- type: string = "string" - 字符串，默认为"string"。它决定了value属性的类型。如果type为"string"，则value属性会被强制转换为字符串。

- FieldName?: string（可选）- 如果提供，arr数组中每个元素的这个属性将被添加到新对象的相应属性中。

- FieldName2?: string（可选）- 同上，但用于第二个可选属性。

### 函数体
- 遍历arr数组：使用map函数遍历arr数组中的每个元素（item）。

- 构建新对象：对于arr中的每个item，函数构建一个新的对象result。这个对象至少包含两个属性：value和label。

value：根据type参数的值，value属性被设置为item[value]的原始值（如果type不是"string"）或被强制转换为字符串（如果type是"string"）。
label：label属性直接设置为item[label]的值。

- 添加可选属性：如果提供了FieldName或FieldName2参数，相应的item属性也会被添加到result对象中。

- 返回新数组：map函数的结果是一个新数组，其中包含了所有由arr数组元素转换而来的新对象。

### 示例
假设我们有以下数组和函数调用：
```js
const data = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
];

const options = ArrOptions(data, "id", "name", "number", "age");

```

这将返回以下数组：

```js
[
    { "value": "1", "label": "Alice", "age": 30 },
    { "value": "2", "label": "Bob", "age": 25 }
]
```

## 源代码
```js

const ArrOptions = (
    arr: any[],
    value: string | number,
    label: string,
    type: string = "string",
    FieldName?: string,
    FieldName2?: string
) => {
    return arr.map((item) => {
        const result: any = {
            value: type === "string" ? String(item[value]) : item[value],
            label: item[label],
        };

        if (FieldName) {
            result[FieldName] = item[FieldName];
        }

        if (FieldName2) {
            result[FieldName2] = item[FieldName2];
        }

        return result;
    });
};
export default ArrOptions;
export { ArrOptions };
```

