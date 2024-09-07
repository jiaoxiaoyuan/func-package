---
title: 基础组件
order: 3
nav:
  title: 鸿蒙
  path: /HarmonyOS
  order: 9
group:
  path: /ArkTS
  title: 基础
  order: 1
---

## 1、组件介绍

组件（Component）,是界面搭建及显示的最小单元。

组件根据功能可以分为五大类：**基础组件、容器组件、媒体组件、绘制组件、画布组件**

## **2、基础组件**

基础组件是视图层的基本组成单元，它包含：Text、Image、TextInput、Button、LoadingProgress……

### 2.1、Text

Text组件可以在界面上展示一段文本信息，它可以包含子组件Span。

对于包含文本文本元素的组件（如：Text,Span,Button,TextInput……）可以使用fontSize()，fontColor()，fontWeight()，fontFamily()，fontStyle()这些文本样式设置文本的大小、颜色、粗细、字体等信息。

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>fontColor</td><td>ResourceColor</td><td>设置文本颜色</td></tr><tr><td>fontSize</td><td>Length | Resource</td><td>设置文本尺寸，Length为number类型时，使用fp单位</td></tr><tr><td>fontStyle</td><td>FontStyle</td><td>设置文本的字体样式、默认值：FontStyle.Normal</td></tr><tr><td>fontWeight</td><td>number | FontWeight| string</td><td><p>设置文本字体的粗细</p><p>number取值是[400,900],间隔是100，值越大越粗</p><p>string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder”、“lighter”、“regular”、“medium”，分别对应FontWeight中相应的枚举值。</p><p>默认值：FontWeight.Normal</p></td></tr><tr><td>fontFamily</td><td>string | Resource&nbsp;&nbsp;</td><td>设置文本的字体列表。使用多个字体，使用“，”进行分割，优先级按顺序生效。例如：“Arial，sans-serif</td></tr></tbody></table>

#### 2.1.1、通用属性与文本样式设置

```ts
@Entry
@Component
struct Index {

  build() {
    Row() {
      Column() {
        Text('Harmony OS')
          .margin({bottom:15})
        Text('鸿蒙系统')
          .fontColor(Color.Blue)
          .fontSize(20)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily('Arial')
      }
      .width('100%')
    }
    .backgroundColor(0xF1F3F5)
    .height('100%')
  }
}
```

#### 2.1.2、文本对齐方式设置

```ts
@Entry
@Component
struct Index {

  build() {
    Row() {
      Column() {
        Text('Harmony OS')
          .margin({bottom:15})
          .width(200)
          .height(50)
          .textAlign(TextAlign.Start)    // 对齐方式
          .backgroundColor(0xE6F2FD)
        Text('鸿蒙系统')
          .fontColor(Color.Blue)
          .fontSize(20)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily('Arial')
      }
      .width('100%')
    }
    .backgroundColor(0xF1F3F5)
    .height('100%')
  }
}
```

textAlign参数类型为TextAlign,定义了几种类型

+   Start：默认值，水平对齐首部
+   Center：水平居中对齐
+   End：水平对齐尾部

#### 2.1.3、设置文本超长显示

当文本的内容过多超出了Text组件范围时，可以使用textOverflow设置文本截取方式，配合maxLines使用，单独设置不生效

maxLines用来设置文本显示的最大行数

如果把textOverflow设置为Ellipsis，那么它会把显示不下的文本使用“...”表示

```ts
@Entry
@Component
struct Index {

  build() {
    Row() {
      Column() {
        Text('Harmony OS')
          .margin({bottom:15})
          .width(200)
          .height(50)
          .textAlign(TextAlign.Start)
          .backgroundColor(0xE6F2FD)
        Text('鸿蒙系统')
          .fontColor(Color.Blue)
          .fontSize(20)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily('Arial')
          .margin({bottom:15})
        Text('滨海昌正企业管理有限公司成立于2011年，主要从事母婴行业品牌开发与销售，是集产品研发、品牌运营、销售服务及物流供应链为一体的公司。现有团队人数800人，其中管理人员100+人。')
          .fontSize(18)
          // 文本超长显示设置使用textOverflow配合maxLines一起使用
          .maxLines(1)
          .textOverflow({overflow: TextOverflow.Ellipsis})
          .backgroundColor(0xE6F2FD)
      }
      .width('100%')
    }
    .backgroundColor(0xF1F3F5)
    .height('100%')
  }
}
```

#### 2.1.4、设置文本装饰线

使用decoration设置文本的装饰线样式及其颜色

它包含两个参数：type用来指定装饰线的样式，其参数类型是TextDecorationType；color用来指定装饰线的颜色，其参数类型是Color，它是一个可选参数。

```ts
@Entry
@Component
struct Index {

  build() {
    Row() {
      Column() {
        Text('Harmony OS')
          .margin({bottom:15})
          .width(200)
          .height(50)
          .textAlign(TextAlign.Start) // 设置文本对齐方式
          .backgroundColor(0xE6F2FD)
          .fontSize(20)
          .decoration({type: TextDecorationType.Underline, color: Color.Black}) // 设置文本装饰线
        Text('鸿蒙系统')
          .fontColor(Color.Blue)
          .fontSize(20)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily('Arial')
          .margin({bottom:15})
        Text('滨海昌正企业管理有限公司成立于2011年，主要从事母婴行业品牌开发与销售，是集产品研发、品牌运营、销售服务及物流供应链为一体的公司。现有团队人数800人，其中管理人员100+人。')
          .fontSize(18)
          // 超长文本使用textOverflow与maxLines配合设置
          .maxLines(1)
          .textOverflow({overflow: TextOverflow.Ellipsis})
          .backgroundColor(0xE6F2FD)
      }
      .width('100%')
    }
    .backgroundColor(0xF1F3F5)
    .height('100%')
  }
}
```

TexDecorationType包含以下几种类型：

+   None：表示不使用装饰线
+   Overline：表示使用上划线装饰
+   LineThrough：表示使用删除线来装饰
+   Underline：表示使用下划线装饰

### 2.2、Image

Image组件用来渲染展示图片，只需要给定图片地址、宽和高，图片就可以加载出来

```ts
@Entry
@Component
struct Test {

  build() {
    Row() {
      Column() {
       Image($r("app.media.icon"))
         .width(100)
         .height(100)
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

#### 2.2.1、设置图片的缩放类型

图片资源放在项目的：src/main/resources/base/media 目录

为了使用图片在页面中有更好的显示效果，有时候需要对图片进行缩放处理。

可以使用objectFit属性来设置图片的缩放类型，其参数的类型是ImageFit。

```ts
@Entry
@Component
struct Test {

  build() {
    Row() {
      Column() {
       Image($r("app.media.image"))
         .objectFit(ImageFit.Cover) // 默认的缩放方式
         .width(200)
         .height(300)
         .backgroundColor(0xCCCCCC)
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

ImageFit包含如下几种类型：

+   Contain：保持宽高比进行缩小或放大，使用得图片完全显示在显示边界中
+   Cover：默认值，保持宽高比进行缩小或放大，使得图边两边都大于或等于显示边界
+   Auto：自适应显示
+   Fill：不保持宽高比进行放大或缩小，使用图片充满显示边界
+   ScaleDown：保持宽高比显示，图片缩小或者保持不变
+   None：保持原极尺寸显示

#### 2.2.2、加载网络图片

如果需要加载网络图片需要在module.json5中申请网络访问权限

```ts
{
    "module" : {
        "requestPermissions":[
           {
             "name": "ohos.permission.INTERNET"
           }
        ]
    }
}
```

```ts
@Entry
@Component
struct Test {

  build() {
    Row() {
      Column() {
       Image($r("app.media.image"))
         .objectFit(ImageFit.Contain) // 默认的缩放方式
         .width(200)
         .height(300)
         .backgroundColor(0xCCCCCC)
         .margin({bottom:15})
        // 加载网图图片
        Image('https://p1.itc.cn/q_70/images03/20210217/d74ec9f0a1dc431a87c5cb4742ee17b1.jpeg')
          .width(200)
          .height(200)
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

### 2.3、TextInput

TextInput组件用来输入单行文本，响应输入事件。

```ts
@Entry
@Component
struct TextInputTest {


  build() {
    Row() {
      Column() {
        TextInput()
          .fontColor(Color.Blue)
          .fontSize(20)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily('Arial')
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

与Text组件一样，也支持文本样式的设置。

#### 2.3.1、设置输入提示语

要在输入框中添加提示语可以使用placeholder属性来实现，同时还可以使用placeholderColor和placeholderFont来分别设置提示文本的颜色和样式。

```ts
@Entry
@Component
struct TextInputTest {


  build() {
    Row() {
      Column() {
        TextInput()
          .fontColor(Color.Blue)
          .fontSize(20)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily('Arial')
          .margin({bottom: 15})
        TextInput({placeholder: '请输入账号'})
          .placeholderColor(0x999999)
          .placeholderFont({size: 20, weight: FontWeight.Medium, family: 'cursive', style: FontStyle.Italic})
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

#### 2.3.2、设置输入类型

可以使用type属性来设置输入框类型。其类型是InputType

```ts
@Entry
@Component
struct TextInputTest {


  build() {
    Row() {
      Column() {
        TextInput()
          .fontColor(Color.Blue)
          .fontSize(20)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily('Arial')
          .margin({bottom: 15})
        TextInput({placeholder: '请输入账号'})
          .placeholderColor(0x999999)
          .placeholderFont({size: 20, weight: FontWeight.Medium, family: 'cursive', style: FontStyle.Italic})
          .margin({bottom: 15})
        TextInput({placeholder: '请输入密码'})
          .type(InputType.Password) // 指定输入的类型
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

InputType包含以下几种输入类型：

+   Normal：基本输入模式。支持输入数字、字母、下划线、空格、特殊字符
+   Password：密码输入模式
+   Email：e-mail地址输入模式
+   Number：纯数字输入模式

#### 2.3.3、设置光标的位置

```ts
@Entry
@Component
struct TextInputTest {

  controller: TextInputController = new TextInputController();

  build() {
    Row() {
      Column() {
        TextInput()
          .fontColor(Color.Blue)
          .fontSize(20)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily('Arial')
          .margin({bottom: 15})
        TextInput({placeholder: '请输入账号'})
          .placeholderColor(0x999999)
          .placeholderFont({size: 20, weight: FontWeight.Medium, family: 'cursive', style: FontStyle.Italic})
          .margin({bottom: 15})
        TextInput({placeholder: '请输入密码'})
          .type(InputType.Password) // 指定输入的类型
          .margin({bottom: 15})
        TextInput({controller: this.controller})
          .margin({bottom: 15})
        Button('设置光标的位置')
          .onClick(() => {
            this.controller.caretPosition(2)  // 设置光标的位置在第二个字符之后
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

上面使用了TextInputColler的caretPosition方法来设置光标所在的位置。

#### 2.3.4、获取输入文本

可以给TextInput设置onChange事件，输入文本发生变化时触发回调，从而拿到输入框中的文本信息。

```ts
@Entry
@Component
struct TextInputTest {

  controller: TextInputController = new TextInputController();
  @State username: string = ''; // 保存用户输入的账号

  build() {
    Row() {
      Column() {
        TextInput()
          .fontColor(Color.Blue)
          .fontSize(20)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily('Arial')
          .margin({bottom: 15})
        TextInput({placeholder: '请输入账号'})
          .placeholderColor(0x999999)
          .placeholderFont({size: 20, weight: FontWeight.Medium, family: 'cursive', style: FontStyle.Italic})
          .margin({bottom: 15})
        TextInput({placeholder: '请输入密码'})
          .type(InputType.Password) // 指定输入的类型
          .margin({bottom: 15})
        TextInput({controller: this.controller})
          .margin({bottom: 15})
        Button('设置光标的位置')
          .onClick(() => {
            this.controller.caretPosition(2)  // 设置光标的位置在第二个字符之后
          })
          .margin({bottom: 15})
        TextInput({placeholder: 'username'})
          .caretColor(Color.Blue) // 光标的颜色
          .onChange((value: string) => {
            this.username = value;
          })
          .margin({bottom: 15})
        Text(this.username)
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

### 2.4、Button

Button组件主要用来响应点击操作，可以包含子组件。

```ts
@Entry
@Component
struct ButtonTest {

  build() {
    Row() {
      Column() {
        Button('登录',{type: ButtonType.Capsule, stateEffect: true})
          .width('90%')
          .height(40)
          .fontSize(16)
          .fontWeight(FontWeight.Medium)
          .backgroundColor('#007DFF')
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

#### 2.4.1、按钮样式

type用来定义按钮的样式，其类型是ButtonType

stateEffect用于设置按钮按下时是否开启切换效果，当状态为false时，点击效果关闭，默认值为true

type的样式可以有如下：

+   Capsule：胶囊型按钮（圆角默认是高度的一半）
+   Circle：圆形按钮
+   Normal：普通按钮（默认，不带圆角）

#### 2.4.2、按钮点击事件

可以给Button绑定onClick事件，当用户点击Button的时候，则会执行onClick方法，调用其中的逻辑代码。

```ts
@Entry
@Component
struct ButtonTest {

  @State text: string = '';
  @State isShow: boolean = false;

  build() {
    Row() {
      Column() {
        TextInput({placeholder:'请输入内容'})
          .margin({bottom: 15})
          .onChange((value: string) => {
            this.isShow = false;
            this.text = value;
          })
        Button('登录',{type: ButtonType.Capsule, stateEffect: true})
          .width('90%')
          .height(40)
          .fontSize(16)
          .fontWeight(FontWeight.Medium)
          .backgroundColor('#007DFF')
          .margin({bottom: 15})
          .onClick(() => {  // 绑定按钮点击事件
            this.isShow = !this.isShow;
          })
        if(this.isShow) {
          Text(this.text);
        }
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

#### 2.4.3、包含子组件按钮

```ts
@Entry
@Component
struct ButtonTest {

  @State text: string = '';
  @State isShow: boolean = false;

  build() {
    Row() {
      Column() {
        TextInput({placeholder:'请输入内容'})
          .margin({bottom: 15})
          .onChange((value: string) => {
            this.isShow = false;
            this.text = value;
          })
        Button('登录',{type: ButtonType.Capsule, stateEffect: true})
          .width('90%')
          .height(40)
          .fontSize(16)
          .fontWeight(FontWeight.Medium)
          .backgroundColor('#007DFF')
          .margin({bottom: 15})
          .onClick(() => {  // 绑定按钮点击事件
            this.isShow = !this.isShow;
          })
        if(this.isShow) {
          Text(this.text)
            .margin({bottom: 15})
        }
        Button({type: ButtonType.Circle, stateEffect: true}) {
          // 子组件，在其中放置一个图片
          Image($r('app.media.delete'))
            .width(32)
            .height(32)
        }
        .width(64)
        .height(64)
        .backgroundColor(0x317aff)

      }
      .width('100%')
    }
    .height('100%')
  }
}
```

### 2.5、LoadingProgress

这个组件用来显示加载进度。

```ts
@Entry
@Component
struct LoadingTest {

  build() {
    Row() {
      Column() {
        LoadingProgress()
          .color(Color.Blue)
          .height(64)
          .width(64)
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

## 3、资源引用

Resource是资源引用类型，用于设置组件属性的值。

资源文件（字符串、图片、音频……）统一存放在resources目录下。

开发者可以根据屏幕尺寸呈现不同的局效果，根据语言不同使用不同的字符串。

```ts
@Entry
@Component
struct ResourceTest {

  build() {
    Row() {
      Column() {
        Button('登录', {type: ButtonType.Capsule, stateEffect: true})
          .width(300)
          .height(40)
          .fontSize(16)
          .fontWeight(FontWeight.Medium)
          .backgroundColor('#007DFF')
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

上面的按钮则是写死的，我们可以把相应的资源存放在对应的资源文件中

资源文件的目录：entry/src/main/resources  
string.json用来存放字符串资源

```ts
{
    "string": [
        {
            "name": "login_text",
            "value": "登录"
        }
    ]
}
```

同时对于字符串资源需要在en\_US,zh\_CN目录下对应加上这个login\_text键对应的值

en\_US目录下的string.json

```ts
{
    "string": [
        {
            "name": "login_text",
            "value": "login"
        }
    ]
}
```

zh\_CN目录下的string.json

```ts
{
    "string": [
        {
            "name": "login_text",
            "value": "登录"
        }
    ]
}
```

在float.json中新增如下键值对

```ts
{
  "float": [
    {
      "name": "button_width",
      "value": "300vp"
    },
    {
      "name": "button_height",
      "value": "40vp"
    },
    {
      "name": "login_fontSize",
      "value": "18fp"
    }
  ]
}
```

在color.json中新增一个键button\_color

```ts
{
  "color": [
    {
      "name": "start_window_background",
      "value": "#FFFFFF"
    },
    {
      "name": "button_color",
      "value": "#1890ff"
    }
  ]
}
```

配置了上面这些资源后，在使用时就中以以$r('app.type.name')的形式引用应用资源。

type代表资源的类型（或者是资源的存放位置）可以取值是：color,float,string,plural,media

name代表资源的命名

通过引用资源代码可以修改为如下：

```ts
@Entry
@Component
struct ResourceTest {

  build() {
    Row() {
      Column() {
        Button($r('app.string.login_text'), {type: ButtonType.Capsule, stateEffect: true})
          .width($r('app.float.button_width'))
          .height($r('app.float.button_height'))
          .fontSize($r('app.float.login_fontSize'))
          .fontWeight(FontWeight.Medium)
          .backgroundColor($r('app.color.button_color'))
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
