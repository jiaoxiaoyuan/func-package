---
title:  arkTs：状态管理
order: 15
nav:
  title: 鸿蒙
  path: /HarmonyOS
  order: 9
group:
  path: /ArkTS
  title: 基础
  order: 1
---

## 鸿蒙 - arkTs：状态管理



### 状态 @State：

#### 在声明式UI中，以状态驱动视图更新

1.  状态（State）：指驱动视图更新的数据（被装饰器标记的变量）
2.  视图（View）：基于UI描述渲染得到的用户界面

#### 使用示例：

```ts
@Entry
@Component
struct Index {
  // 使用状态装饰器
  @State message: string = 'Hello Word'

  build() {
    Column(){
      Text(this.message)
    }
  };
}
```

#### 说明：

+   @State装饰器标记的变量初始化必须有值
+   @State支持Object、Class、string、number、boolean、enum类型以及这些类型的数组
+   嵌套类型以及数组中的对象属性无法触发视图更新（相当于浅层监听）

* * *

### 父子组件数据同步 @Prop和@Link：

#### 对比：

<table><tbody><tr><td></td><td>@Prop</td><td>@Link</td></tr><tr><td>同步类型</td><td>单向同步</td><td>双向同步</td></tr><tr><td>允许装饰的变量类型</td><td><ul><li>@Prop只支持string、number、boolean、enum类型</li><li>父组件对象类型，子组件hi对象类型</li><li>不可以是数组，any</li></ul></td><td><ul><li>父子类型一致：string、number、boolean、enum、object、class以及他们的数组</li><li>数组中元素增、删、替换会引起刷新</li><li>嵌套类型以及数组中的对象属性无法触发视图更新</li></ul></td></tr><tr><td>初始化方式</td><td>不允许子组件初始化</td><td>父子间传递，不允许子组件初始化</td></tr></tbody></table>

#### @Prop使用示例：

PS：@Prop定义的数据在子组件不能初始化

```ts
@Entry
@Component
struct Index {
  @State msg: string = 'Hello Word'

  build() {
    Column() {
      MsgModule({msg:this.msg})
      Button('更改文案')
        .onClick(()=>{
          this.msg = 'Hello arkTs'
        })
    }
  }
}

@Component
struct MsgModule {
  @Prop msg:string
  build(){
    Text(this.msg)
      .fontSize(30)
      .fontColor('red')
  }
}
```

#### @Link使用示例：

PS：

+   @Link定义的数据在子组件不能初始化
+   @Link定义的数据，父组件在使用时候，去掉"this."且前边加"$"符号

```ts
@Entry
@Component
struct Index {
  @State msg: string = 'Hello Word'

  build() {
    Column() {
      MsgModule({msg: $msg})
    }
  }
}

@Component
struct MsgModule {
  @Link msg:string
  build(){
    Row(){
      Text(this.msg)
        .fontSize(30)
        .fontColor('red')
      Button('更改文案')
        .onClick(()=>{
          this.msg = 'Hello arkTs'
        })
    }
  }
}
```

* * *

###  @Provide和@Consume：（跨组件提供双向的数据同步）

  @Provide定义的数组，其他组件在使用时候直接使用@Consume定义使用，不需要在调用组件时候进行参数传递

#### 使用示例：

```ts
@Entry
@Component
struct Index {
  @Provide msg: string = 'Hello Word'

  build() {
    Column() {
      MsgBtnModule()
    }
  }
}

@Component
struct MsgBtnModule {
  build(){
    Row(){
      MsgModule()
    }
  }
}

@Component
struct MsgModule {
  @Consume msg: string
  build(){
    Row(){
      Text(this.msg)
        .fontSize(30)
        .fontColor('red')
      Button('更改文案')
        .onClick(()=>{
          this.msg = 'Hello arkTs'
        })
    }
  }
}
```

* * *

### @ObjectLink和@Observed：（涉及嵌套对象或数组元素为对象的场景中进行双向数据同步）

#### 使用示例：

```ts
@Observed
class ArrInt {
  name: string = ""
  price: number = 0
}

@Entry
@Component
struct Index {
  @State num:number = 0
  @State arr: ArrInt[] = [
    {name: '华为 Meta 50',price: 7999},
    {name: '华为 Meta 60',price: 8999},
    {name: '华为 Meta 60 pro',price: 9999},
  ]


  build() {
    Column() {
      Text('涨价' + this.num.toString() + '次')
        .fontSize(50)
        .margin(20)
      ArrModule({num: $num, arr: $arr})
    }
  }
}

@Component
struct ArrModule {
  @Link num: number
  @Link arr: ArrInt[]

  build(){
    Row(){
      List({space: 10}){
        ForEach(
          this.arr,
          (item: ArrInt) => {
            ListItem(){
              ArrItemModule({item:item, num: $num})
            }
          }
        )
      }
    }
  }
}

@Component
struct ArrItemModule {
  @ObjectLink item: ArrInt
  @Link num: number

  build(){
    Column(){
      Text(this.item.name)
        .fontSize(30)
        .fontColor('red')
      Text(this.item.price.toString())
        .fontSize(30)
        .fontColor('#000')
      Button('涨价')
        .onClick(()=>{
          this.num += 1
        })
    }
  }
}
```
