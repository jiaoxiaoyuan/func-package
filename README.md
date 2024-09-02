![](https://img.mtsws.cn/LightPicture/2023/08/8b794e021120837b.png)

# func-package
> 函数库, 面向复杂业务场景的 js 类库

## 安装 & 使用

1. 通过 npm /yarn

```bash
# yarn add func-package
npm install func-package
```

## API Doc

[func-package 文档](http://tool.4rvi.cn)

## 更新日志
### 0.0.7
`2024-08-21`
- 数据结构相关
    - 添加 `addKeyAndSortNames` - 提取名字的首个字母排序


### 0.0.6
`2024-08-07`
- 数学计算
    - 添加 `arraySum` - 计算数组中指定字段值的总和


### 0.0.4-beta.9
`2024-08-01
   - 数据结构相关
     - 新增 `ArrOptions` - 将数组转换为带有指定值和标签的对象数组

### 0.0.4-beta.7
`2024-07-25`
- 数学计算
    - 添加 `convertBytesToUnit` - 将字节数转换为指定的存储单位（KB或MB）
- 数据结构相关
    - ArrayRemove - 移除数组中指定的条目
    - ArrayClear - 清空的数组
    - ArrayRemove 移除数组中指定的条目
    - ArrayClear 清除数组
    - filterArrayByCodes 根据指定的字段数组过滤数组
- 字符串操作
    - 添加 `replaceBlank` - 替换字符串中的空白字符
    - 添加 `getFileExtension` - 获取文件扩展名
- 常用判断函数
    - 添加 `isPasswordValid` - 判断密码是否有效


### 0.0.4-beta.5
`2024-07-16`
- 字符串
  - 添加 `concatenateNames` 函数 - 拼接名称列表

### 0.0.4-beta.2
`2024-06-03`
- 系统基础库
    - 添加 `Versions` 判断版本大小

`2024-05-27`
- 浏览器相关
   - 新增 `IndexedDB` 数据库的 `TypeScript` 类 `IndexedDBHelper`
 

### 0.0.4-beta.1
`2024-05-26`

- 浏览器相关
  - getRuntimeEnv - 获取运行环境
  - getSelection - 获取选中文本
  - redirect - 重定向
  - store - 本地存储库
- 字符串操作
  - base64 - base64编码和解码
  - camelize - 横线转驼峰命名
  - charCount - 获取字符数
  - formatNumber - 数值千分位格式化
  - formatPercent - 值转换为百分数表示
  - hyCompact - 紧凑型驼峰命名转换
  - hyphenate - 驼峰命名转横线命名
  - randomStr - 生成随机字符串
  - repeat - 生成重复字符串
  - uuid - 生成唯一id
- 常用判断函数
  - isArray - 判断数组类型
  - isEmpty - 判断空对象
  - isPc - 判断设备类型
  - isPhone - 判断手机号格式
  - isEmail - 判断邮箱函数
  - isIdCard - 判断身份证格式函数
  - lang - 判断中英文
  - regexp - 常用正则表达式
  - dataDesensitization - 数据脱敏
- 数据结构相关
  - cloneDeep - 数据深拷贝
  - arrayToListNode - 数组转成链表
  - linkListToArray - 链表结构转数组结构
  - dateCalculate - 日期计算
  - timeCutStr - 计算时间差
  - timeSub - 计算时间间隔
  - transformArray - 树结构转扁平数组
  - formatDate - 时间格式化
  - getRawType - 获取数据类型
  - obj2url - 将对象参数解析为url字符串
  - transformTree - 扁平转树结构
  - url2obj - url字符串转对象  
  - bothLinkedList - 双向链表
- 图片处理函数
  - compressImg - 自定义压缩图片函数
  - file2img - 文件转图片对象
  - hex2rgba - hex色值转rgba
  - rgba2obj - 将rgba值转化为rgba对象
  - genRandomColor - 获取随机颜色
- js高级函数
  - debounce - 防抖函数
  - parser - json超级解析器
  - sleep - 睡眠函数
  - throttle - 节流函数
- 常用算法和数据结构
  - bubbleSort - 冒泡排序
  - quickSort - 快速排序
- 数学计算
  - average - 计算数组平均值
  - difference - 创建一个排除指定项的数组
  - random - 返回区域内随机数
  - shuffle - 打乱数组
  - factorial - 阶乘
  - fibonacci - 计算斐波那契数
  - sum - 求和数组
- 几何计算
  - coordinatesInCircle - 生成圆内任意坐标
  - coordinatesInRect - 生成矩形内任意坐标
  - judgePointInCircle - 判断一点是否在圆内
- dom操作
  - downloadFileWithText - 下载文本文件
  - downloadFileWithUrl - 下载链接文件
  - $ - 通过id,class等获取dom
  - getDomPageXY - 获取dom元素在当前文档中的绝对位置
  - getDomScreenXY - 获取dom元素相对于screen绝对位置
  - getDomText - 获取文本内容
  - xss - 转义html标签



## parser

> 该 json 解析器基于原生`JSON API`进行的上层封装, 支持序列化函数类型

- 支持原生 json api 调用方式`nativeStringify`, `nativeParse`
- 支持序列化和反序列化函数 `stringify`, `fastStringify`, `parse`
- 支持序列化和反序列化正则 `stringify`, `fastStringify`, `parse`
- 内置开箱即用的工具方法
  - 判断函数类型 `isFunc`
  - 判断对象类型 `isObj`
  - 判断数组类型 `isArr`
  - 判断对象或数组类型 `isArrOrObj`
  - 判断正则类型 `isRegExp`

Demo:

```tsx
/**
 * title: 打开控制台查看结果
 */
import { parser } from 'func-package';

const door = {
  a: 1,
  b: function () {},
  c: {
    c1: 'h5-dooring',
    c2: () => {},
    c3: {
      c: '3fvc',
      d: {
        dd: () => {},
        ee: /[a-z]/g,
      },
    },
  },
  d: /[0-9]/g,
};

// 将对象序列化
console.log('stringify', parser.stringify(door));
console.log('fastStringify', parser.fastStringify(door));

// 将json数据反解析成对象
console.log(parser.parse(parser.stringify(door)));

console.log('native stringify', parser.nativeStringify(door));
```

### 注意⚠️
对于出现`regeneratorRuntime is not defined问题的解决`, 我们可以在webpack做如下配置, 来支持es的async / await :
```bash
npm install --save-dev @babel/plugin-transform-runtime
```

配置:

```js
 use: {
     loader: 'babel-loader',
     options: {
         plugins: ["@babel/plugin-transform-runtime"]
     }
 }

```
