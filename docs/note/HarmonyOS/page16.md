---
title:  arkTs：状态管理
order: 16
nav:
  title: 鸿蒙
  path: /HarmonyOS
group:
  path: /ArkTS
  title: 基础
  order: 1
---

页面栈最大容量为32，使用router.clear()可以清空页面栈，释放资源

### 跳转方式：

1.  router.pushUrl：目标页压入页面栈，使用router.back()可以返回上个页面。
2.  router.replaceUrl：目标页替换当前页，会清空页面栈，释放资源；无法返回上个页面。

### 实例模式：

1.  Standard：（默认）标准实例模式，每次跳转都会创建一个目标页压入栈顶。
2.  Single：单实例模式，如果目标页已经存在于栈中，则离栈顶最近的同url页面会被移动到栈顶并重新加载

### 使用示例：

#### index.ets页面代码：

```ts
import router from '@ohos.router';

@Entry
@Component
struct Index {
  build() {
    Column() {
      Button('跳转页面')
        .onClick(()=>{
          // 路由跳转
          router.pushUrl(
            {
            url: 'pages/Header', // 路由地址
            params: {id: '996'} // 携带参数
          },
            router.RouterMode.Single,
            err => {
              if(err){
                console.log(JSON.stringify(err))
              }
            }
          )
        })
    }
  }
}
```

#### Header.ets页面代码：

```ts
import router from '@ohos.router'

@Entry
@Component
struct Header {
  // 接收页面参数
  params: any = router.getParams()

  build(){
    Row() {
      Text(this.params.id) // 展示参数
        .fontSize(30)
      Button('返回上个页面')
        .onClick(()=>{
          // pushUrl跳转情况下可以返回上个页面
          router.back()
        })
    }
  }
}
```
