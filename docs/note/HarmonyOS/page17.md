---
title:  arkTs：属性动画，显式动画，组件转场动画
order: 17
nav:
  title: 鸿蒙
  path: /HarmonyOS
  order: 9
group:
  path: /ArkTS
  title: 基础
  order: 1
---

### 属性动画：

属性动画是通过设置组件的animation属性来给组件添加动画；

#### 代码示例：

```ts
@Entry
@Component
struct Index {
  @State widthSize: number = 250
  @State heightSize: number = 100
  @State flag: boolean = true

  build() {
    Column() {
      Button('开始动画')
        .onClick(() => {
          if (this.flag) {
            this.widthSize = 150
            this.heightSize = 60
          } else {
            this.widthSize = 250
            this.heightSize = 100
          }
          this.flag = !this.flag
        })
        .margin(30)
        .width(this.widthSize)
        .height(this.heightSize)
        .animation({
          duration: 2000,
          curve: Curve.EaseOut,
          iterations: 3,
          playMode: PlayMode.Normal
        })
    }
      .width('100%')
      .margin({ top: 20 })
  }
}
```

* * *

### 显式动画：

提供全局animateTo显式动画接口来指定由于闭包代码导致的状态变化插入过渡动效。

#### 代码示例：

```ts
@Entry
@Component
struct Index {
  @State widthSize: number = 250
  @State heightSize: number = 100
  private flag: boolean = true

  build() {
    Column() {
      Button('change size')
        .width(this.widthSize)
        .height(this.heightSize)
        .margin(30)
        .onClick(() => {
          if (this.flag) {
            animateTo({}, () => {
              this.widthSize = 150
              this.heightSize = 60
            })
          } else {
            animateTo({}, () => {
              this.widthSize = 250
              this.heightSize = 100
            })
          }
          this.flag = !this.flag
        })
    }
      .width('100%')
      .margin({ top: 5 })
  }
}
```

* * *

### 属性动画 & 显式动画 - animation枚举说明：

| 名称       | 参数类型   | 必填                                                                           | 描述                                                 |
| ---------- | ---------- | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| duration   | number     | 否                                                                             | 设置动画时长，单位为毫秒；默认值：1000。             |
| tempo      | number     | 动画播放速度。数值越大，动画播放速度越快。值为0时，表示不存在动画。默认值：1。 |
| curve      | string     | Curve                                                                          | 设置动画曲线。默认曲线为线性。默认值：Curve.Linear。 |
| delay      | number     | 设置动画延迟执行的时长，单位为毫秒。默认值：0。                                |
| iterations | number     | 设置播放次数。默认值：1。                                                      |
| playMode   | PlayMode   | 设置动画播放模式，默认播放完成后重头开始播放。默认值：PlayMode.Normal。        |
| onFinish   | () => void | 状态回调，动画播放完成时触发的方法。                                           |

#### animation - Curve枚举说明：

+   Linear：表示动画从头到尾的速度都是相同的。
+   Ease：表示动画以低速开始，然后加快，在结束前变慢。
+   EaseIn：表示动画以低速开始。
+   EaseOut：表示动画以低速结束。
+   EaseInOut：表示动画以低速开始和结束。

#### animation - PlayMode枚举说明：

+   Normal：动画按正常播放。
+   Reverse：动画反向播放。
+   Alternate：动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
+   AlternateReverse：动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。

* * *

### 组件转场动画： 

组件内转场主要通过transition属性配置转场参数，在组件插入和删除时显示过渡动效。

代码示例：

```ts
@Entry
@Component
struct Index {
  @State flag: boolean = true

  build() {
    Column() {
      Button(this.flag ? '隐藏组件' : '展示组件')
        .margin(30)
        .onClick(() => {
          animateTo({ duration: 1000 }, () => {
            this.flag = !this.flag
          })
        })
      if (this.flag) {
        Image($r('app.media.icon'))
          .width(300)
          .height(300)
          .transition({ type: TransitionType.Insert, scale: { x: 0, y: 1.0 } })
          .transition({ type: TransitionType.Delete, rotate: { angle: 180 } })
      }
    }
      .width('100%')
  }
}
```

#### TransitionOptions枚举说明：

> **参数名称**`：type`
>
> **参数类型**`：TransitionType`
>
> **必填**：否
>
> **参数描述**：默认包括组件新增和删除。默认值：TransitionType.All。



> **参数名称**`：opacity`
>
> **参数类型**：`number`
>
> **必填**：否
>
> **参数描述**：设置组件转场时的透明度效果，为插入时起点和删除时终点的值。默认值：1。



> **参数名称**`：translate`
>
> **参数类型**：
>
> ```ts
> {
> 
>         x? : number | string,
> 
>         y? : number | string,
> 
>         z? : number | string,
> 
> }
> ```
>
> **必填**：否
>
> **参数描述**
>
> 设置组件转场时的平移效果，为插入时起点和删除时终点的值。
>
> -x：横向的平移距离。
>
> -y：纵向的平移距离。
>
> -z：竖向的平移距离。



> **参数名称**`：scale
>
> **参数类型**：
>
> ```ts
> {
> 
>         x? : number,
> 
>         y? : number,
> 
>         z? : number,
> 
>         centerX? : number | string,
> 
>         centerY? : number | string,
> 
> }
> ```
>
> **必填**：否
>
> **参数描述**
>
> 设置组件转场时的缩放效果，为插入时起点和删除时终点的值。
>
> -x：横向放大倍数（或缩小比例）。
>
> -y：纵向放大倍数（或缩小比例）。
>
> -z：竖向放大倍数（或缩小比例）。
>
> - centerX、centerY指缩放中心点，centerX和centerY默认值是"50%"。
>
> - 中心点为0时，默认的是组件的左上角。
>
>

> **参数名称**`：rotate
>
> **参数类型**：
>
> ```ts
> {
> 
>         x?: number,
> 
>         y?: number,
> 
>         z?: number,
> 
>         angle?: number | string,
> 
>         centerX?: number | string,
> 
>         centerY?: number | string,
> 
> }
> 
> ```
>
> **必填**：否
>
> **参数描述**
>
> - 设置组件转场时的旋转效果，为插入时起点和删除时终点的值。
>
>   -x：横向的旋转向量。
>
>   -y：纵向的旋转向量。
>
>   -z：竖向的旋转向量。
>
>   \- centerX,centerY指旋转中心点，centerX和centerY默认值是"50%"。
>
>   \- 中心点为（0，0）时，默认的是组件的左上角。




#### TransitionType枚举说明：

+    All：指定当前的Transition动效生效在组件的所有变化场景。
+   Insert：指定当前的Transition动效生效在组件的插入显示场景。
+   Delete：指定当前的Transition动效生效在组件的删除隐藏场景。
