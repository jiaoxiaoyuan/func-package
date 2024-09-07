---
title: 自定义组件，自定义组件函数，公共样式函数
order: 1
nav:
  title: 鸿蒙
  path: /HarmonyOS
  order: 9
group:
  path: /Component
  title: 组件
  order: 1
---

### 自定义组件：

#### 定义自定义组件： 

```ts
@Component
export struct Header {
  private title: ResourceStr

  build(){
    Row(){
      Image($r('app.media.icon'))
        .width(20)
      Text(this.title)
        .fontSize(22)
        .fontWeight(FontWeight.Bold)
      Blank()
      Image($r('app.media.icon'))
        .width(20)
    }
    .width('100%')
    .padding(10)
  }
}
```

#### 使用自定义组件： 

```ts
import {Header} from '../components/Header'

@Entry
@Component
struct Index {
  build() {
    Column(){
      Header({title: '22'})
    }
  };
}
```

* * *

### 自定义组件函数：

#### 定义和使用自定义组件函数（全局使用）：

```ts
import {Header} from '../components/Header'

// 自定义全局自定义组件函数
@Builder function ItemCard (item) {
  Text(`第${item}个元素`)
    .fontWeight(FontWeight.Bold)
    .height(50)
    .lineHeight(50)
};

@Entry
@Component
struct Index {
  build() {
    Column(){
      Header({title: '22'})
      List({space: 30}) {
       ForEach(
         [1,2,3,4,5,6,7,8,9],
         item=>{
           ListItem(){
            // 使用全局自定义组件函数
             ItemCard(item)
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
      .listDirection(Axis.Vertical)
    }
  };
}
```

#### 定义和使用自定义组件函数（局部使用）：

```ts
import {Header} from '../components/Header'
@Entry
@Component
struct Index {

  @Builder ItemCard (item) {
    // 自定义组件函数
    Text(`第${item}个元素`)
      .fontWeight(FontWeight.Bold)
      .height(50)
      .lineHeight(50)
  };

  build() {
    Column(){
      Header({title: '22'})
      List({space: 30}) {
       ForEach(
         [1,2,3,4,5,6,7,8,9],
         item=>{
           ListItem(){
            // 使用自定义函数
             this.ItemCard(item)
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
      .listDirection(Axis.Vertical)
    }
  };
}
```

* * *

### 公共样式函数：

#### 定义和使用自定义组件函数（全局使用）：

```ts
/**
 * 定义全局样式函数
 * Extend 继承某个组件（只能在全局时使用）
 * 想定义fontColor但是不适用继承会报错
 */
@Extend(Text) function ListStyle () {
    .fontColor('#FFF')
    .padding(20)
    .backgroundColor('#999')
}

@Entry
@Component
struct Index {
  build() {
    Column(){
      Text('Hello Word')
        .ListStyle() // 使用全局样式函数
    }
  };
}
```

#### 定义和使用自定义组件函数（局部使用）：

```ts
@Entry
@Component
struct Index {
  // 定义全局样式函数
  @Styles  ListStyle () {
    .height(100)
    .padding(20)
    .backgroundColor('#999')
  }

  build() {
    Column(){
      Text('Hello Word')
        .ListStyle() // 使用全局样式函数
    }
  };
}
```
