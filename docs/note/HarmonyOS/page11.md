---
title:  arkTs：容器组件
order: 11
nav:
  title: 鸿蒙
  path: /HarmonyOS
  order: 9
group:
  path: /ArkTS
  title: 基础
  order: 1
---

### 垂直布局 - Column({ space: Number})

1.  space：纵向布局元素垂直方向间距。

#### 使用示例：

```ts
Column() {
    // 容器内元素内容
}
    .justifyContent('FlexAlign枚举值')
    .alignItems('HorizontalAlign枚举值')
```

#### FlexAlign 枚举说明：（垂直方向元素对齐方式）

+   Start：元素在主轴方向首端对齐。
+   End：元素在主轴方向尾端对齐。
+   Center：元素在主轴方向中心对齐。
+   SpaceBetween：Flex主轴方向均匀分配弹性元素，其余元素之间距离相同。首尾元素距离两边没有间距。
+   SpaceAround：Flex主轴方向均匀分配弹性元素，其余元素之间距离相同。首尾元素距离两边间距是其他元素间距的一半。
+   SpaceEvenly：Flex主轴方向均匀等间距的分配弹性元素。

#### HorizontalAlign 枚举说明：（垂直方向元素对齐方式）

+   Start：按照语言方向起始端对齐。
+   End：按照语言方向末端对齐。
+   Center：居中对齐，默认对齐方式。

* * *

###  水平布局 - Row({ space: Number})

1.  space：纵向布局元素垂直方向间距。

#### 使用示例：

```ts
Row() {
    // 容器内元素内容
}
    .justifyContent('FlexAlign枚举值')
    .alignItems('VerticalAlign枚举值')
```

#### FlexAlign 枚举说明：（水平方向元素对齐方式）

+   Start：元素在主轴方向首端对齐。
+   End：元素在主轴方向尾端对齐。
+   Center：元素在主轴方向中心对齐。
+   SpaceBetween：Flex主轴方向均匀分配弹性元素，其余元素之间距离相同。首尾元素距离两边没有间距。
+   SpaceAround：Flex主轴方向均匀分配弹性元素，其余元素之间距离相同。首尾元素距离两边间距是其他元素间距的一半。
+   SpaceEvenly：Flex主轴方向均匀等间距的分配弹性元素。

#### VerticalAlign 枚举说明：（水平方向元素对齐方式）

+   Top：顶部对齐。
+   Bottom：底部对齐。
+   Center：居中对齐，默认对齐方式。

* * *

### 列表布局 - List({ space: Number})

1.  space：列表元素之间的间距。

#### 使用示例：

```ts
@Entry
@Component
struct Index {
  build() {
      List({space: 30}) {
       ForEach(
         [1,2,3,4,5,6,7,8,9],
         item=>{
           ListItem(){
             Text(`第${item}个元素`)
               .fontWeight(FontWeight.Bold)
               .height(50)
               .lineHeight(50)
           }
           .width('100%')
           .backgroundColor("#FFF")
           .padding(20)
         }
       )
      }
      .width('100%')
      .height('100%')
      .backgroundColor("#999")
      .listDirection('Axis枚举值')
  };
}
```

#### Axis枚举说明：

+   Vertical：（默认值）列表垂直排列
+   Horizontal：列表水平排列

* * *

### 堆叠容器 - Stack({ alignContent?: Alignment })

堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。

1.  alignContent：设置子组件在容器内的对齐方式。

#### 使用示例：

```ts
@Entry
@Component
struct index {
  build() {
    Stack({ alignContent: 'Alignment枚举值' }) {
      Text('First child, show in bottom')
        .width('90%')
        .height('100%')
        .backgroundColor('#999')
        .align(Alignment.Top)
      Text('Second child, show in top')
        .width('70%')
        .height('60%')
        .backgroundColor('#D2CAB3')
        .align(Alignment.Top)
    }
    .width('100%')
    .height(150)
    .margin({ top: 5 })
  }
}
```

#### Alignment枚举说明：

+   TopStart：顶部起始端对齐。
+   Top：顶部横向居中对齐。
+   TopEnd：顶部尾端对齐。
+   Start：起始端纵向居中对齐。
+   Center：横向和纵向居中对齐。
+   End：尾端纵向居中对齐。
+   BottomStart：底部起始端对齐。
+   Bottom：底部横向居中对齐。
+   BottomEnd：底部尾端对齐。
