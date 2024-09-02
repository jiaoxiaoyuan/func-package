---
title:  arkTs：基础组件
order: 11
nav:
  title: 鸿蒙
  path: /HarmonyOS
group:
  path: /ArkTS
  title: 基础
  order: 1
---

### 图片组件 - Image(src: string | PixelMap | Resource)

1.  string格式：加载远程地址图片（需要配置ohos.permission.INTERNET）
2.  PixelMap格式：加载像素图
3.  Resource格式：加载本地图片（Image($r('app.media.icon'))）

```ts
Image($r('app.media.icon'))
    .width('90%')
    .borderRadius(20)
```

* * *

### 文本组件 - Text(content: string | Resource)

1.  string格式：直接填写文本内容
2.  Resource：读取本地资源文件

```ts
Text('文本展示内容')
// 页面展示：文本展示内容

Text($r('app.string.module_desc'))
// 页面展示：模块描述
// 根据本机信息，在限定词目录下找到的module_desc的值
```

* * *

### 文本输入框 - TextInput({ placeholder?: string, text?: string })

1.  placeholder：（非必填）输入框无值时候的提示文本内容 
2.  text：（非必填）输入框默认值

```ts
TextInput({ 
    placeholder: '请输入账号', 
    text: 'admin' 
})
    .type('输入框类型枚举值')
    .onChange(value => {
        // 输入框的值发生变化时的回调函数，value是当前输入框的值
    })
    
```

type枚举说明：

+   Normal：（默认值）基本输入模式；支持输入数字、字母、下划线、空格、特殊字符。
+   Password：密码输入模式。支持输入数字、字母、下划线、空格、特殊字符。
+   Email：邮箱地址输入模式。支持数字，字母，下划线，以及@字符。
+   Number：纯数字输入模式。
+   PhoneNumber：电话号码输入模式。支持输入数字、+ 、-、\*、#，长度不限。

* * *

###  按钮 - Button(label?: string)

1.  label：（非必填）按钮展示文本

```ts
// label传值 - 文字型按钮
Button('提交')
    .type('按钮类型枚举值')
    .onClick(() => {
        // 按钮点击事件回调
    })

// label不传值 - 自定义按钮
Button(){
    Image($r('app.media.icon'))
        .width(10)
        .height(10)
}
```

type枚举说明：

+   Normal：（默认值）普通按钮
+   Capsule：胶囊形按钮
+   Circle：圆形按钮

* * *

### 空白 - Blank()

```ts
// 占据父元素的空白区域，类似于 宽度=父元素宽度-所有子元素宽度
Blank()
```

* * *

### 进度条 - Progress({value: number, total?: number, type?: ProgressType})

1.  value：当前进度值，最小值为0，最大值为total值。
2.  total：进度总长，默认值100。
3.  type：进度条类型，默认线性进度条。

```ts
@Entry
@Component
struct Index {
  build() {
    Column() {
      Progress({
        value: 0,
        total: 1,
        type: 'ProgressType枚举值'
      })
    }
  }
}
```

ProgressType枚举说明：

+    Linear：线性样式。从API version9开始，高度大于宽度的时候自适应垂直显示。
+   Ring：环形无刻度样式，环形圆环逐渐显示至完全填充效果。
+   Eclipse：圆形样式，显示类似月圆月缺的进度展示效果，从月牙逐渐变化至满月。
+   ScaleRing：环形有刻度样式，显示类似时钟刻度形式的进度展示效果。从API version9开始，刻度外圈出现重叠的时候自动转换为环形无刻度进度条。
+   Capsule：胶囊样式，头尾两端圆弧处的进度展示效果与Eclipse相同；中段处的进度展示效果与Linear相同。高度大于宽度的时候自适应垂直显示。

* * *

