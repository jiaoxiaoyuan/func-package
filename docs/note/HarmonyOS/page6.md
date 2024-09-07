---
title: ArkTS组件通用属性
order: 6
nav:
  title: 鸿蒙
  path: /HarmonyOS
  order: 9
group:
  path: /ArkTS
  title: 基础
  order: 1
---

## 1、组件通用属性

### 1.1、尺寸设置

用来设置组件的宽度、边距

相关属性

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数说明</strong></td><td><strong>描术</strong></td></tr><tr><td>width</td><td>Length</td><td>设置组件的自身宽度，缺省的情况组件宽度为其内容的宽度</td></tr><tr><td>height</td><td>Length</td><td>设置组件的自身高度，缺省的情况组件高度为其内容的度度</td></tr><tr><td>size</td><td><p>{</p><p>&nbsp; width?:Length,</p><p>&nbsp; height?:Length</p><p>}</p></td><td>设置组件的宽度尺寸</td></tr><tr><td>padding</td><td>Padding | Length</td><td><p>设置组件内边距，当参数为Length时，四个方向的内边距同时生效</p><p>默认值为0</p></td></tr><tr><td>margin</td><td>Margin | Length</td><td><p>设置组件外边距，当参数为Length时，四个方向的内边距同时生效</p><p>默认值为0</p></td></tr><tr><td>constraintSize</td><td><p>{</p><p>&nbsp; minWidth?:Length,</p><p>&nbsp; maxWidth?:Length,</p><p>&nbsp; minHeight?:Length,</p><p>&nbsp; maxHeight?:Length</p><p>}</p></td><td><p>设置约束尺寸，组件布局时，进行尺寸范围限制</p><p>默认值：</p><p>{</p><p>&nbsp; minWidth:0,</p><p>&nbsp; maxWidth:Infinity,</p><p>&nbsp; minHeight?:0,</p><p>&nbsp; maxHeight?:Infinity</p><p>}</p></td></tr><tr><td>layoutWeight</td><td>number | string</td><td><p>容器尺寸确定时，元素与兄弟元素主轴布局尺寸按权重进行分配，忽略本身尺寸设置，表示自己适应占满剩余空间。</p><p>默认值：0</p><p><span>注意：仅在Row/Column/Flex布局中生效</span></p></td></tr></tbody></table>

```ts
@Entry
@Component
struct Index {

  build() {
    // 列部局容器（从上到下，每个组件之间有10vp的间隙）
    Column({space: 10}) {
      Text('margin and padding').fontSize(12).fontColor('#36D').width('90%')

      Row() {
        Row() {
          // size设置组件的宽高
          Row().size({ width: '100%', height: '100%' }).backgroundColor(Color.Blue)
        }
        // 设置组件的宽（80vp）,高（90vp）,内边距（10），外边距（20），背景色为白色
        .width(80).height(90).padding(10).margin(20).backgroundColor(Color.White)
      }
      // 组件背景色为粉色
      .backgroundColor(Color.Pink)

      Text('constraintSize').fontSize(12).fontColor('#36D').width('90%')
      Text('这是一个长的字符串，这个字符串会非常的长，这是一个长的字符串，这个字符串会非常的长，这是一个长的字符串，这个字符串会非常的长，这是一个长的字符串，这个字符串会非常的长')
        .width('90%')
        // 约束组件最大宽度是200vp
        .constraintSize({maxWidth: 200})

      Text('layoutWeight').fontSize(12).fontColor('#36D').width('90%')
      // 父容器尺寸确定，设置了layoutWeight的子元素在主轴布局尺寸按权重进行分配，忽略本身尺寸设置
      Row() {
        
        Text('layoutWeight(1)')
          .size({ width: '30%', height: 100 }).backgroundColor(Color.Orange).textAlign(TextAlign.Center)
        // 权重为1,占主轴的1/3
          .layoutWeight(1)
        Text('layoutWeight(2)')
          .size({ width: '30%', height: 100 }).backgroundColor(Color.Red).textAlign(TextAlign.Center)
        // 权重为2,占主轴的2/3
          .layoutWeight(2)
        Text('no layoutWeight')
          .size({ width: '30%', height: 100 }).backgroundColor(Color.Gray).textAlign(TextAlign.Center)
      }
      .size({ width: '90%', height: 120 }).backgroundColor(Color.Yellow)
    }.width('100%').margin({ top: 5})
  }
}
```

### 1.2、位置设置

用来设置组件的对齐方式、布局方向和显示位置

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>align</td><td>Alignment</td><td><p>设置元素内容的对齐方式，只有当设置的width,height的大小超过元素本身内容时才生效</p><p>默认值：Alignment.Center</p></td></tr><tr><td>direction</td><td>Direction</td><td><p>高置元素水平方向上的布局</p><p>默认值：Direction.Auto</p></td></tr><tr><td>position</td><td><p>{</p><p>&nbsp; x:Length,</p><p>y:Length</p><p>}</p></td><td><p>使用绝对定位，设置元素锚点相对于父容器顶部起点的偏移位置</p><p>在布局容器中，设置这个属性不影响父容器布局，仅在绘制时做位置调整</p></td></tr><tr><td>markAnchor</td><td><p>{</p><p>&nbsp; x:Length,</p><p>y:Length</p><p>}</p></td><td><p>设置元素在位置定位时的锚点，以元素顶部作为基点进行偏移。</p><p>默认值是：</p><p>{</p><p>&nbsp; x: 0,</p><p>&nbsp; y: 1</p><p>}</p></td></tr><tr><td>offset</td><td><p>{</p><p>&nbsp; x:Length,</p><p>y:Length</p><p>}</p></td><td><p>相对布局完成位置坐标偏移量，设置这个属性，不影响父容器布局，仅在绘制时进行位置调整。</p><p>默认值：</p><p>{</p><p>&nbsp; x: 0,</p><p>&nbsp; y: 1</p><p>}</p></td></tr></tbody></table>

```ts
@Entry
@Component
struct PositionTest {

  build() {
    Column() {
      Column({ space: 10 }) {
        Text('align').fontSize(12).fontColor('#36D').width('90%')
        Text('top start')
          // 设置元素内容的对齐方式
          .align(Alignment.TopStart)
          .height(50)
          .width('90%')
          .fontSize(16)
          .backgroundColor(Color.Pink)

        Text('direction').fontSize(12).fontColor('#36D').width('90%')
        Row() {
          Text('1').height(50).width('25%').maxFontSize(16).backgroundColor(Color.Pink).textAlign(TextAlign.Center)
          Text('2').height(50).width('25%').maxFontSize(16).backgroundColor(Color.Yellow).align(Alignment.TopStart)
          Text('3').height(50).width('25%').maxFontSize(16).backgroundColor(Color.Pink).align(Alignment.Top)
          Text('4').height(50).width('25%').maxFontSize(16).backgroundColor(Color.Yellow).align(Alignment.Bottom)
        }
        .width('90%')
        // 元素水平方向上的布局
        .direction(Direction.Rtl)
      }
    }
    .width('100%').margin({top: 5}).direction(Direction.Rtl)
    
  }
}
```

```ts
@Entry
@Component
struct PositionTest2 {

  build() {
    Column({space: 15}) {
      // 绝对定位，容器左上角相对于父组件左上角的偏移量
      Text('position').fontSize(12).fontColor('#36D').width('90%')
      Row() {
        Text('1').size({width:'30%',height:'50'}).backgroundColor('#78a355').border({width:1}).fontSize(16)
        Text('2 position(30,10)')
          .size({width: '60%',height:'30'})
          .backgroundColor('#b22c46')
          .border({width:1})
          .fontSize(16)
          .align(Alignment.Start)
          .position({x:30,y:10})
        Text('3').size({width:'45%',height:'50'}).backgroundColor('#007d65').border({width:1}).fontSize(16)
        Text('4 position(50%,70%)')
          .size({width:'50%',height:'50'})
          .backgroundColor('#c37e00')
          .border({width:1})
          .fontSize(16)
          .position({x:'50%',y:'70%'})
      }
      .width('90%').height(100).border({width:1,style:BorderStyle.Dashed})

      // 相对于起点偏移，其中x为最终定位点距离起点水平方向间距，x>0则向左，反之则向右
      // y为最终定位点距离起点垂直方向间距，y>0则向上，反之则向下
      Text('markAnchor').fontSize(12).fontColor('#36D').width('90%')
      Stack({alignContent: Alignment.TopStart}) {
        Row()
          .size({width: '100', height: '100'})
          .backgroundColor('#f2eada')
        Text('text')
          .size({width: 25, height: 25})
          .backgroundColor('#f15a22')
          .markAnchor({x: 25,y: 25})
        Text('text')
          .size({width: 25, height: 25})
          .backgroundColor('#f15a22')
          .markAnchor({x: -100,y: -25})
        Text('text')
          .size({width: 25, height: 25})
          .backgroundColor('#f15a22')
          .markAnchor({x: 25,y: -25})
      }
      .margin({top: 25}).border({width:1,style: BorderStyle.Dashed})

      // 相对定位，x>0向右偏移，反之向左，y>0向下偏移，反之向上
      Text('offset').fontColor('#36D').fontSize(12).width('90%')
      Row() {
        Text('1').size({width:'15%',height:'50'}).backgroundColor('#fedcbd').border({width:1}).fontSize(16)
        Text('2 offset(15,30)')
          .size({width:120,height:'50'})
          .backgroundColor('#4e72b8')
          .border({width: 1})
          .fontSize(16)
          .align(Alignment.Start)
          .offset({x:15,y:30})
        Text('3').size({width:'15%',height:'50'}).backgroundColor('#fedcbd').border({width:1}).fontSize(16)
        Text('4 offset(-5%,20%)')
          .size({width:100,height:'50'})
          .backgroundColor('#4e72b8')
          .border({width:1})
          .fontSize(16)
          .offset({x: '-5%',y:'20%'})
      }.width('90%').height(100).border({width:1,style:BorderStyle.Dashed})
    }
    .width('100%').margin({top: 25})
  }
}
```

### 1.3、布局约束

通过组件的宽高比和显示优先级约束组件显示效果。

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数说明</strong></td><td><strong>描述</strong></td></tr><tr><td>aspectRatio</td><td>number</td><td>指定当前组件的宽高比</td></tr><tr><td>displayPriority</td><td>number</td><td><p>设置当前组件在布局容器中显示的优先级</p><p>当父容器的空间不足时，低优先级的组件会隐藏</p><p><span>注意：仅在Row/Column/Flex(单行)容器组件中生效</span></p></td></tr></tbody></table>

```ts
@Entry
@Component
struct AspectRatioTest {
  private children: string[] = ['1','2','3','4','5','6']

  build() {
    Column({space: 20}) {
      Text('using container: row').fontSize(12).fontColor('#36D').width('100%')
      Row({space: 10}) {
        ForEach(this.children,(item) => {
          Text(item)
            .backgroundColor('#deab8a')
            .fontSize(16)
              // 指定组件的宽高比是1.5
            .aspectRatio(1.5)
            .height(60)
          Text(item)
            .backgroundColor('#deab8a')
            .fontSize(16)
              // 指定组件宽高比是1.5
            .aspectRatio(1.5)
            .width(60)
        },item => item)
      }
      .size({width: '100%',height: 100})
      .backgroundColor('#feeeed')
      .clip(true)

      Text('using container: grid').fontSize(12).fontColor('#36D').width('100%')
      Grid() {
        ForEach(this.children,(item) => {
          GridItem(){
            Text(item)
              .backgroundColor('#deab8a')
              .fontSize(16)
              .width(60)
              .aspectRatio(1.5)
          }
        },item => item)
      }
      .columnsTemplate('1fr 1fr 1fr')
      .columnsGap(10)
      .rowsGap(10)
      .size({width:'100%',height:165})
      .backgroundColor('#feeeed')
    }.padding(10)
  }
}
```

```ts
// ../model/ContainerInfo.ts

export class ContainerInfo {
  label: string = ''
  size: string = ''
}

export class ChildInfo {
  text: string = ''
  priority: number = 0
}
```

```ts
import {ContainerInfo,ChildInfo} from '../model/ContainerInfo'

@Entry
@Component
struct DisplayPriorityTest {

  private container: ContainerInfo[] = [
    {label: 'Big container',size: '90%'},
    {label: 'Middle container',size: '50%'},
    {label: 'Small container',size: '30%'}
  ];
  private children: ChildInfo[] = [
    {text: '1\n(priority:2)', priority: 2},
    {text: '2\n(priority:1)', priority: 1},
    {text: '3\n(priority:3)', priority: 3},
    {text: '4\n(priority:1)', priority: 1},
    {text: '5\n(priority:2)', priority: 2}
  ]
  @State currentIndex: number = 0

  build() {
    Column({ space: 10 }) {
      Button(this.container[this.currentIndex].label).backgroundColor('#5c7a29')
        .onClick(() => {
          this.currentIndex = (this.currentIndex + 1) % this.container.length;
        })

      Flex({justifyContent: FlexAlign.SpaceBetween}) {
        ForEach(this.children, (item:ChildInfo) => {
          Text(item.text)
            .width(120)
            .height(60)
            .fontSize(24)
            .textAlign(TextAlign.Center)
            .backgroundColor('#b22c46')
            // 设置组件显示的优先级
            .displayPriority(item.priority)
        },item => item)
      }
      .width(this.container[this.currentIndex].size)
      .backgroundColor('#d3d7d4')
    }
    .width('100%')
    .margin({top:50})
  }
}
```

### 1.4、Flex布局

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数说明</strong></td><td><strong>描述</strong></td></tr><tr><td>flexBasis</td><td>string | number</td><td><p>设置组件在父亲容器主轴方向上的基准尺寸</p><p>默认值：‘auto’，表示组件在主轴方向上的基准尺寸为组件原大小</p></td></tr><tr><td>flexGrow</td><td>number</td><td><p>设置父容器的剩余空间分配给此属性所在组件的比例</p><p>默认值：0</p></td></tr><tr><td>flexShrink</td><td>number</td><td><p>设置父容器压缩尺寸分配给此属性所在组件的比例</p><p>默认值：1</p></td></tr><tr><td>alignSelf</td><td>ItemAlign</td><td><p>子组件在父容器交叉轴的对齐格式，覆盖Flex布局容器中alignItems默认配置</p><p>默认值：ItemAlign.Auto</p></td></tr></tbody></table>

```ts
@Entry
@Component
struct FlexTest1 {

  build() {
    Column({space:5}) {
      Text('flexBasis').fontSize(12).fontColor('#36D').width('90%')
      // 基于主轴的基准尺寸
      Flex() {
        Text('flexBasis(100)')
          .flexBasis(100) // 宽度为100vp
          .height(100)
          .backgroundColor('#f391a9')
          .textAlign(TextAlign.Center)
        Text('flexBasis(auto)')
          .flexBasis('auto') // 保存原本宽度的60%
          .width('60%')
          .height(100)
          .backgroundColor('#8f4b2e')
          .textAlign(TextAlign.Center)
      }
      .width('90%').height(120).padding(10).backgroundColor('#deab8a')

      Text('flexShrink').fontSize(12).fontColor('#36D').width('90%')
      // flexShrink()表示该元素的压缩比例，它对超出的总尺寸进行计算
      // 压缩比例为0则不压缩
      Flex({direction:FlexDirection.Row}) {
        Text('flexShrink(0)')
          .flexShrink(0)
          .width('50%')
          .height(100)
          .backgroundColor('#f391a9')
          .textAlign(TextAlign.Center)
        Text('default flexShrink')  // 默认情况下 flexShrink的值值是1
          .width('40%')
          .height(100)
          .backgroundColor('#f391a9')
          .textAlign(TextAlign.Center)
        Text('flexShrink(1)')
          .flexShrink(1)
          .width('40%')
          .height(100)
          .backgroundColor('#f391a9')
          .textAlign(TextAlign.Center)
      }
      .width('90%').height(120).padding(10).backgroundColor('#deab8a')

      Text('alignSelf').fontSize(12).fontColor('#36D').width('90%')
      // alignSelf会覆盖掉Flex布局容器中的alignItems设置
      Flex({direction: FlexDirection.Row,alignItems: ItemAlign.Center}) {
        Text('no alignSelf,height:70')
          .width('33%')
          .height(70)
          .backgroundColor('#f391a9')
          .textAlign(TextAlign.Center)
        Text('alignSelf End')
          .alignSelf(ItemAlign.End)
          .width('33%')
          .height(70)
          .backgroundColor('#f391a9')
          .textAlign(TextAlign.Center)
        Text('no alignSelf,height:100%')
          .width('34%')
          .height('100%')
          .backgroundColor('#f391a9')
          .textAlign(TextAlign.Center)
      }
      .width('90%').height(120).padding(10).backgroundColor('#deab8a')

    }
    .width('100%')
    .margin({top: 5})
  }
}
```

### 1.5、边框设置

属性

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>border</td><td><p>{</p><p>&nbsp; width?:Length | EdgeWidths,</p><p>&nbsp; color?:ResourceColor | EdgeColors,</p><p>&nbsp; radius?:Length | BorderRadiuses,</p><p>&nbsp; style?:BorderStyle |&nbsp;EdgeStyles</p><p>}</p></td><td><p>统一边框样式设置</p><p>width:边框的宽度</p><p>color:边框的颜色</p><p>radius:边框圆角半径</p><p>style:设置边框样式</p><p>边框宽度默认值为0，也就是不显边框</p></td></tr><tr><td>borderStyle</td><td>BorderStyle | EdgeStyles</td><td><p>设置边框样式</p><p>默认值：BorderStyle.Solid</p><p><span>注意：api 9后支持ArkTS卡片中使用，但只支持设置相同的边框样式</span></p></td></tr><tr><td>borderWidth</td><td>Length | EdgeWidths</td><td><p>设置边框的宽度，不支持百分比</p><p><span>注意：api 9后支持ArkTS卡片中使用，但只支持设置相同的边框宽度</span></p></td></tr><tr><td>borderColor</td><td>ResourceColor | EdgeColors</td><td><p>设置边框颜色</p><p>默认值：Color.Black</p><p><span>注意：api 9后支持ArkTS卡片中使用，但只支持设置相同的边框颜色</span></p></td></tr><tr><td>borderRadius</td><td>Length | BorderRadiuses</td><td><p>设置边框的圆角半径，不支持百分比</p><p><span>注意：api 9后支持ArkTS卡片中使用，但只支持设置相同的边框圆角半径</span></p></td></tr></tbody></table>

**EdgeWidths**

api 9中支持的，引入这个对象时，至少要传入一个参数参

其相关的参数如下：

left:Length                左边框的宽度

right:Length                右边框的宽度

top:Length                上边框的宽度

bottom:Length                下边框宽度

**EdgeColors**

api 9中支持的，引入这个对象时，至少要传入一个参数参

其相关的参数如下：

left:ResourceColor                左边框的颜色

right:ResourceColor                右边框的颜色

top:ResourceColor                上边框的颜色

bottom:ResourceColor                下边框颜色

**EdgeRadiuses**

api 9中支持的，引入这个对象时，至少要传入一个参数参

其相关的参数如下：

topLeft:Length                左上角圆角半径

topRight:Length                右上角圆角半径

bottomLeft:Length                左下角圆角半径

bottomRight:Length                右下角圆角半径

**EdgeStyles**

api 9中支持的，引入这个对象时，至少要传入一个参数参

其相关的参数如下：

left:BorderStyle                左边框的样式

right:BorderStyle                右边框的样式

top:BorderStyle                上边框的样式

bottom:BorderStyle                下边框样式

```ts
@Entry
@Component
struct BorderTest {

  build() {
    Column({space: 10}) {
      Flex({justifyContent: FlexAlign.SpaceAround,alignItems:ItemAlign.Center}) {
        Text('dashed')
          .borderStyle(BorderStyle.Dashed).borderWidth(5).borderColor('#003a6c').borderRadius(10)
          .width(120).height(120).textAlign(TextAlign.Center).fontSize(16)
        Text('dotted')
          .border({width: 5, color: '#769149', radius: 10, style: BorderStyle.Dotted})
          .width(120).height(120).textAlign(TextAlign.Center).fontSize(16)
      }.width('100%').height(150)

      Text('.border')
        .fontSize(30)
        .width(300)
        .height(300)
        .border({
          width: {left: '50px',right: '100px',top: '200px',bottom: '300px'},
          color: {left: '#1a2933', right: '#401c44', top: Color.Pink, bottom: Color.Orange},
          radius: {
            topLeft: 10,
            topRight: 20,
            bottomLeft:40,
            bottomRight: 60
          },
          style: {
            left: BorderStyle.Dotted,
            right: BorderStyle.Dotted,
            top: BorderStyle.Solid,
            bottom: BorderStyle.Dashed
          }
        }).textAlign(TextAlign.Center)
    }
  }
}
```

###  1.6、图片边框设置

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>borderImage</td><td>BorderImageOption</td><td><p>图片边框或渐变色边框</p><p>支持在卡片中使用</p></td></tr></tbody></table>

**BorderImageOption**

 souurce:string|Resource|linearGradient      边框图片源或渐变色设置

slice:Length|EdgeWidths          设置图片边框的切割宽度，默认值为0，当设置为负数时直接取默认值，当设置为Length时，则统一设置四个角的宽度。如果使用EdgeWidths则可以分别设置Top,Bottom,Left,Right

width:Length|EdgeWidths        设置图片边框的宽度，默认值为0，当设置为负数时直接取默认值，当设置为Length时，则统一设置四边的宽度。如果使用EdgeWidths则可以分别设置Top,Bottom,Left,Right

outset:Length|EdgeWidths        设置边框图片向外延生距离，默认值是0，当设置为负数时直接取默认值，当设置为Length时，则统一设置四边的向外延生距离。如果使用EdgeWidths则可以分别设置Top,Bottom,Left,Right  
repeat:RepeatMode        设置边框图片的重复方式，默认值：RepeatMode.Stretch

fill:boolean        设置边框图片中心填充，默认值：false

RepeatMode枚举说明：

Repeat                被切割图片重复平铺在图片的边框上，超出部分会被裁剪

Stretch                被切割图片以拉伸填充的方式铺满图片边框

Round                被切割图片以整数次平铺在图片边框上，无法以整数次平铺时压缩被切割图片

Space                被切割图片以整数次平铺在图片边框上，无法以整数次平铺时以空白填充

```ts
@Entry
@Component
struct BorderImageTest2 {
  @State WidthValue: number = 0;
  @State SliceValue: number = 0;
  @State OutSetValue: number = 0;
  @State RepeatValue: RepeatMode[] = [RepeatMode.Repeat, RepeatMode.Stretch,RepeatMode.Round,RepeatMode.Space];
  @State SelectIndex: number = 0;
  @State SelectText: string = 'Repeat';
  @State FillValue: boolean = false;

  build() {
    Row() {
      Column({ space: 20 }) {
        Row() {
          Text('borderImage').textAlign(TextAlign.Center).fontSize(50)
        }
        .borderImage({
          source: $r('app.media.my_border'),  // 边框图片源或渐变色设置
          slice: this.SliceValue, // 设置图片边框的切割宽度
          width: this.WidthValue, // 设置图片边框的宽度
          outset: this.RepeatValue[this.SelectIndex], // 设置边框图片向外延生距离
          repeat: this.RepeatValue[this.SelectIndex], //  设置边框图片的重复方式
          fill: this.FillValue  // 设置边框图片中心填充
        })

        Column() {
          Text(`borderImageSlice = ${this.SliceValue}px`)
          Slider({
            value: this.SliceValue,
            min: 0,
            max: 100,
            style: SliderStyle.OutSet
          })
            .onChange((value:number,mode:SliderChangeMode) => {
              this.SliceValue = value;
            })
        }

        Column() {
          Text(`borderImageWidth = ${this.WidthValue}}px`)
          Slider({
            value: this.WidthValue,
            min:0,
            max:100,
            style:SliderStyle.OutSet
          })
            .onChange((value:number,mode:SliderChangeMode) => {
              this.WidthValue = value;
            })
        }

        Column() {
          Text(`borderImageOutSet = ${this.OutSetValue}px`)
            Slider({
              value: this.OutSetValue,
              min:0,
              max:100,
              style:SliderStyle.OutSet
            })
              .onChange((value:number,mode:SliderChangeMode) => {
                this.OutSetValue = value;
              })
        }

        Row() {
          Text('borderImageRepeat:')
          Select([{value:'Repeat'},{value:'Stretch'},{value:'Round'},{value:'Space'}])
            .value(this.SelectText)
            .onSelect((index:number,text:string) => {
              this.SelectIndex = index;
              this.SelectText = text;
            })
        }

        Row() {
          Text(`borderImageFill: ${this.FillValue}`)
          Toggle({type:ToggleType.Switch,isOn: this.FillValue})
            .onChange((isOn:boolean) => {
              this.FillValue = isOn;
            })
        }
      }
      .width('100%')
    }
    .height('100%')
  }

}
```

### 1.7、背景设置

用来设置组件的背景样式

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>backgroundColor</td><td>ResourceColor</td><td><p>设置组件的背景色</p><p>支持在卡片中使用</p></td></tr><tr><td>backgroundImage</td><td><p>src:ResourceStr,</p><p>repeat?:ImageRepeat</p></td><td><p>src:图片地址，支持网络图片资源和本地图片（不支持svg类型的图片）</p><p>repeat:设置背景图片的重复样式，默认不重复。当设置的背景图片为透明底色图片，且同时设置了backgroundColor时，二者叠加显示，背景颜色在最底部。</p><p>支持在卡片中使用</p></td></tr><tr><td>backgroundImageSize</td><td><p>{</p><p>&nbsp; width?:Length,</p><p>&nbsp; height?:Length</p><p>} | ImageSize</p></td><td><p>设置背景图像的高度和宽度。当输入为{width:Length,height:Length}对象时，如果只设置一个属性 ，则第二个属性保持图片原始宽度比进行调整</p><p>width与height取值范围：[0,+∞]</p><p>默认值：ImageSize.Auto</p><p>支持在卡片中使用</p><p>设置为小于0时，按值为0显示</p></td></tr><tr><td>backgroundImagePosition</td><td>Position | Alignment</td><td><p>设置背景图在组件中显示位置，相对于组件左上角的坐标</p><p>默认值：</p><p>{</p><p>&nbsp; x: 0,</p><p>&nbsp; y: 0</p><p>}</p><p>x和y值设置百分比时，偏移量是相对组件自身宽高计算的</p><p>支持在卡片中使用</p></td></tr></tbody></table>

```ts
@Entry
@Component
struct BackgroundTest {

  build() {
    Column({space:5}) {
      Text('background color').tipStyle()
      // backgroundColor,设置背景颜色
      Row().width('90%').height(50).backgroundColor('#c77eb5').border({width: 1})

      Text('background image repeat along X').tipStyle()
      Row()
        // 设置背景图片
        .backgroundImage($r('app.media.my_border'), ImageRepeat.X)
        // 设置背景图像的高度和宽度
        .backgroundImageSize({width: '250px',height:'140px'})
        .width('90%')
        .height(70)
        .border({width: 1})

      Text('background image repeat along Y').tipStyle()
      Row()
        .backgroundImage($r('app.media.my_border'), ImageRepeat.Y)
        .backgroundImageSize({width: '500px',height:'120px'})
        .width('90%')
        .height(100)
        .border({width:1})

      Text('background image size').tipStyle()
      Row()
        .width('90%').height(150)
        .backgroundImage($r('app.media.my_border'), ImageRepeat.NoRepeat)
        .backgroundImageSize({width: 1000,height:500})
        .border({width: 1})

      Text('background fill the box(Cover)').tipStyle()
      // 不保证图片完整的情况下占满盒子
      Row()
        .width(200)
        .height(50)
        .backgroundImage($r('app.media.my_border'), ImageRepeat.NoRepeat)
        .backgroundImageSize(ImageSize.Cover)
        .border({width: 1})

      Text('background fill the box(Contain)').tipStyle()
      // 保证图片完整的情况下放到最大
      Row()
        .width(200)
        .height(50)
        .backgroundImage($r('app.media.my_border'), ImageRepeat.NoRepeat)
        .backgroundImageSize(ImageSize.Contain)
        .border({width: 1})

      Text('background image position').tipStyle()
      Row()
        .width(100)
        .height(50)
        .backgroundImage($r('app.media.my_border'), ImageRepeat.NoRepeat)
        .backgroundImageSize({width:1000,height:560})
        // 设置背景图在组件中显示位置，相对于组件左上角的坐标
        .backgroundImagePosition({x: -500, y: -300})
        .border({width: 1})
    }
    .width('100%').height('100%').padding({top: 5})
  }
}

@Extend(Text) function tipStyle() {
  .fontSize(12).width('90%').fontColor('#36D')
}
```

###  1.8、透明度设置

用来设置组件的透明度

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>optacity</td><td>number | Resource</td><td><p>元素的透明度配置</p><p>取值范围：[0,1]</p><p>1表示不透明，0表示完全透明（看不到组件，但是在布局中占位）</p><p>默认值：1</p><p>支持卡片中使用</p><p><span>注意：子组件可以继承父组件此属性</span></p></td></tr></tbody></table>

```ts
@Extend(Text) function tipStyle1() {
  .fontSize(12).width('90%').fontColor('#36D')
}

@Extend(Text) function opacityStyle(opacity:number) {
  .width('90%').height(50).opacity(opacity).backgroundColor('#005344')
}

@Entry
@Component
struct OpacityTest {

  build() {
    Column({space: 5}) {
      // @ts-ignore
      Text('opacity(1)').tipStyle1()
      Text().opacityStyle(1)
      Text('opacity(0.7)').tipStyle1()
      Text().opacityStyle(0.7)
      Text('opacity(0.4)').tipStyle1()
      Text().opacityStyle(0.4)
      Text('opacity(0.1)').tipStyle1()
      Text().opacityStyle(0.1)
      Text('opacity(0)').tipStyle1()
      Text().opacityStyle(0)
    }
    .width('100%')
    .padding({top:5})
  }
}
```

### 1.9、显隐控制

控制组件是否可见

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>visibility</td><td>Visibility</td><td><p>控制当前组件显示或隐藏</p><p>默认值：Visibility.Visible</p><p>支持卡片中使用</p><p>注意：根据场景不同可以使用条件渲染来代替</p></td></tr></tbody></table>

```ts
@Entry
@Component
struct VisibilityTest {

  build() {
    Column() {
      Column() {
        // 隐藏组件不参与占位
        Text('None').fontSize(12).width('90%').fontColor('#36D')
        Row().visibility(Visibility.None).width('90%').height(80).backgroundColor('#008792')

        // 隐藏组件参与占位
        Text('Hidden').fontSize(12).width('90%').fontColor('#36D')
        Row().visibility(Visibility.Hidden).width('90%').height(80).backgroundColor('#008792')

        // 显示组件，默认情况下就是显示模式
        Text('Visible').fontSize(12).width('90%').fontColor('#36D')
        Row().visibility(Visibility.Visible).width('90%').height(80).backgroundColor('#008792')
      }
      .width('90%').border({width: 1})
    }
    .width('100%').margin({top: 5})
  }
}
```

### 1.10、禁用控制

控制组件是否可交互，可交互状态下可以响应点击事件、触摸事件、拖拽事件、按键事件、鼠标事件

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>enable</td><td>boolean</td><td><p>为true则可交互为false不可交互</p><p>默认值：true</p><p>支持在卡片中使用</p></td></tr></tbody></table>

```ts
import Prompt from '@system.prompt'
@Entry
@Component
struct EnableTest {
  @State isEnable: boolean = false

  build() {
    Flex({justifyContent: FlexAlign.SpaceAround}){
      Button('点击我').enabled(this.isEnable).backgroundColor('#78a355').opacity(0.8)
        .onClick(() => {
          Prompt.showToast({
            message:'你点击了按钮',
            duration:2000
          })
        })
      Row(){
        Text('切换状态:').fontSize(12).fontColor('#36D').lineHeight(20)
        Toggle({type: ToggleType.Switch,isOn: this.isEnable})
          .onChange((isOn:boolean) => {
            this.isEnable = isOn;
          })
      }
    }
    .width('100%')
    .padding({top: 5})
  }
}
```

###  1.11、浮层

用来设置组件的遮罩文本

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>overlay</td><td><p>value:string,</p><p>options?:{</p><p>&nbsp; align?:Alignment,</p><p>&nbsp; offset?:{x?:number,y?:number}</p><p>}</p></td><td><p>在当前组件上设置遮罩文本</p><p>value：文本内容</p><p>options：文本定位</p><p>默认值：</p><p>{</p><p>&nbsp; align:Alignment.TopStart,</p><p>&nbsp; offset:{x:0,y:0}</p><p>}</p><p>支持在卡片中使用</p></td></tr></tbody></table>

```ts
@Entry
@Component
struct OverlayTest {

  build() {
    Column() {
      Column(){
        Text('floating layer')
          .fontSize(12).fontColor('#36D').maxLines(1)
        Column() {
          Image($r('app.media.my_border'))
            .width(240).height(240)
            .overlay('这里的文本是图片组件上的遮罩文本',{
              align: Alignment.Bottom,
              offset: {x: 0, y: -15}
            })
        }
        .border({width:2,color:Color.Black})
      }.width('100%')
    }.padding({top: 15})

  }
}
```

### 1.12、Z序控制

用来控制组件的堆叠循序

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>zIndex</td><td>number</td><td><p>同一容器中兄弟组件显示层级关系</p><p>zIndex值越大，显示的层级越高</p><p>支持在卡片中使用</p></td></tr></tbody></table>

```ts
@Entry
@Component
struct ZIndexTest {

  build() {
    Column(){
      Stack() {
        // stack会重叠组件，默认后定义的在最上面
        // 具有较高zIndex值的元素会在zIndex较小的元素前面
        Text('1, zIndex(2)')
          .size({width: '40%', height: '30%'}).backgroundColor('#b3424a')
          .textAlign(TextAlign.Center)
          .zIndex(2)
        Text('2, default zIndex(1)')
          .size({width: '70%', height: '50%'}).backgroundColor('#6d8346')
          .align(Alignment.TopStart)
          .zIndex(1)
        Text('3, zIndex(0)')
          .size({width: '90%', height: '80%'}).backgroundColor('#867892')
          .align(Alignment.TopStart)
      }.width('100%').height(200)
    }.width('100%').height(200)
  }
}
```

###  1.13、图形变换

用于对组件进行旋转、平移、缩放、矩阵变换等操作。

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数说明</strong></td><td><strong>描述</strong></td></tr><tr><td>rotate</td><td><p>{</p><p>&nbsp; x?:number,</p><p>&nbsp; y?:number,</p><p>&nbsp; z?:number,</p><p>&nbsp; angle:number | string,</p><p>&nbsp; centerX?:number | string,</p><p>&nbsp; centerY?:number | string</p><p>}</p></td><td><p>可使组件在以组件左上角为坐标原点坐标系进行旋转</p><p>其中x,y,z指定一个矢量，作为旋转轴</p><p>angle：指定旋转的角度，当为负值时表示相对于旋转轴逆时针旋转</p><p>centerX,centerY用于指定旋转的中心点</p><p>默认值：</p><p>{</p><p>&nbsp; x:0,</p><p>&nbsp; y:0,</p><p>&nbsp; z:0,</p><p>&nbsp; centerX:'50%',</p><p>&nbsp; centerY:'50%'</p><p>}</p><p>支持在卡片中使用</p></td></tr><tr><td>translate</td><td><p>{</p><p>&nbsp; x?:number | string,</p><p>&nbsp; y?:number | string,</p><p>&nbsp; z?:number | string</p><p>}</p></td><td><p>可使组件在以组件左上角为坐标原点的坐标系中进行移动,x,y,z的值分别表示在对应轴上移动的距离</p><p>值为正时表示向对应轴的正向移动，值为负时表示向对应轴的反向移动</p><p>支持在卡片中使用</p></td></tr><tr><td>scale</td><td><p>{</p><p>&nbsp; x?:number,</p><p>&nbsp; y?:number,</p><p>&nbsp; z?:number,</p><p>&nbsp; centerX?:number | string,</p><p>&nbsp; centerY?:number | string</p><p>}</p></td><td><p>可以分别设置X轴、Y轴、Z轴的缩放比例,默认值是1</p><p>同时可以通过centerX和centerY设置缩放中心点</p><p>默认值：</p><p>{</p><p>&nbsp; x:0,</p><p>&nbsp; y:0,</p><p>&nbsp; z:0,</p><p>&nbsp; centerX:'50%',</p><p>&nbsp; centerY:'50%'</p><p>}</p><p>支持卡片中使用</p></td></tr><tr><td>transform</td><td>Matrix4Transit</td><td>设置当前组件的变换矩阵</td></tr></tbody></table>

```ts
import matrix4 from '@ohos.matrix4'
@Extend(Text) function textStyleExtend() {
  .fontColor('#36D').padding(15).fontSize(12)
}

@Extend(Row) function rowStyleExtend(color:ResourceStr) {
  .width(100).height(100).backgroundColor(color)
}

@Entry
@Component
struct TransformTest {

  build() {
    Column(){
      Text('rotate').width('90%').textStyleExtend()
      Row()
        // 组件以矢量(0,0,1)为旋转轴，绕中心点顺时针旋转300度
        .rotate({
          x: 0,
          y: 0,
          z: 1,
          centerX: '50%',
          centerY: '50%',
          angle: 300
        })
        .rowStyleExtend('#ef5b9c')

      Text('translate').textStyleExtend()
      Row()
        // x轴方向平移100，y轴方向平移10
        .translate({x: 100,y:10})
        .rowStyleExtend('#f47920')

      Text('scale').textStyleExtend()
      Row()
        // 高度缩小一倍，宽度放大一倍，z轴在2D下看不到效果的
        .scale({x:2,y:0.5})
        .rowStyleExtend('#87843b')

      Text('Matrix4').textStyleExtend()
      Row()
        .rowStyleExtend('#003a6c')
        .transform(matrix4.identity().translate({x: 50, y: 50}).scale({x: 1.5,y:1}).rotate({
          x:0,
          y:0,
          z:1,
          angle:60
        }))
    }
    .width('100%').margin({top: 5})
  }
}
```

### 1.14、图像效果

设置组件的模糊、阴影效果以及设置图片的图像效果

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>blur</td><td>number</td><td><p>为当前组件添加内容模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊</p><p>取值范围：[0,+∞)</p><p>支持卡片中使用</p></td></tr><tr><td>backdropBlur</td><td>number</td><td><p>为当前组件添加背景模糊效果，入参为模糊半径，模糊半径越大越模糊，为0时不模糊。</p><p>取值范围：[0,+∞)</p><p>支持卡片中使用</p></td></tr><tr><td>shadow</td><td><p>{</p><p>&nbsp; radius:number|Resource,</p><p>&nbsp; color?:Color|string|Resource,</p><p>&nbsp; offesetX?:number | Resource,</p><p>&nbsp; offsetY?:number | Resource</p><p>}</p></td><td><p>为当前组件添加阴影效果。</p><p>radius为模糊半径，必填</p><p>color为阴影的颜色，默认是灰色</p><p>offsetX为x轴的偏移量，默认是0</p><p>offsetY为y轴的偏移量，默认是0</p><p>偏移量的单位是px</p><p>支持在卡片中使用</p></td></tr><tr><td>grayscale</td><td>number</td><td><p>为当前组件添加灰度效果,值定义为灰度转换的比例</p><p>默认值：0.0</p><p>取值范围：[0,1]</p><p>入参1.0则完全转为灰度图像，入参则0.0图像无变化，入参在0.0和1.0之间时，效果呈线性变化</p><p>设置小于0的值时，按值为0处理，设置大于1的值时，按值为1处理。</p><p>支持在卡片中使用</p></td></tr><tr><td>brightness</td><td>number</td><td><p>为当前组件添加高光效果，入参为高光比例</p><p>值为1时无效果，小于1则变暗，0为全黑，大于1则亮度增加</p><p>取值范围:[0,+∞]</p><p>默认值：1.0</p><p>支持在卡片中使用</p></td></tr><tr><td>saturate</td><td>number</td><td><p>为当前组件添加饱和度效果（饱和度为颜色中的含色成分和消色成分(灰)的比例）</p><p>入参为1显示原图</p><p>大于1含色成分越高，饱和度越高</p><p>小于1消色成分越高，饱和度越低</p><p>默认值：1.0</p><p>支持在卡片中使用</p></td></tr><tr><td>contrast</td><td>number</td><td><p>为当前组件添加对比度效果</p><p>入参数为对比度的值</p><p>当值为1时显示原图，值越大对比度越高</p><p>当值为0时显示全灰色</p><p>取值范围：[0,+∞)</p><p>默认值：1.0</p><p>当设置小于0的值时，按值为0处理</p><p>支持卡片中使用</p></td></tr><tr><td>invert</td><td>number</td><td><p>反转输入图像</p><p>入参为图像反转比例</p><p>值为1时完全反转，为0时图像无变化</p><p>默认值：0</p><p>设置值小于0时按0处理</p><p>支持在卡片中使用</p></td></tr><tr><td>sepia</td><td>number</td><td><p>把图像转为深褐色</p><p>入参为图像反转的比例</p><p>值为1则完全是深褐色的，值为0图像无变化</p><p>默认值：0</p><p>支持在卡片中使用</p></td></tr><tr><td>hueRotate</td><td>number | string</td><td><p>色相旋转效果</p><p>入参为旋转角度</p><p>取值范围：(-∞, +∞)</p><p>默认值：0</p><p>支持在卡片中使用</p></td></tr><tr><td>colorBlend</td><td>Color | stirng |&nbsp;Resorce</td><td><p>为当前组件添加颜色叠加效果</p><p>入参为叠加的颜色</p><p>支持在卡片中使用</p></td></tr></tbody></table>

字体背景模糊：

```ts
@Entry
@Component
struct ImageEffectsTest1 {

  build() {
    Column({space: 10}) {
      // 模糊字体
      Text('字体模糊').fontSize(12).fontColor('#36D').width('90%')
      Flex({alignItems: ItemAlign.Center}) {
        Text('正常字休').margin(10)
        Text('模糊级别1')
          .blur(1).margin(10)
        Text('模糊级别2')
          .blur(2).margin(10)
        Text('模糊级别3')
          .blur(3).margin(10)
      }
      .width('90%').height(40)
      .backgroundColor('#feeeed')

      // 背景模糊
      Text('背景模糊').fontSize(12).fontColor('#36D').width('90%')
      Text()
        .width('90%')
        .height(40)
        .backdropBlur(5)
        .backgroundImage($r('app.media.my_border'))
        .backgroundImageSize({width: 1200,height: 160})
    }
    .width('100%').margin({top: 5})
  }
}
```

图像效果：

```ts
@Entry
@Component
struct ImageEffectsTest2 {

  build() {
    List({space: 10}) {
      ListItem(){
        Column(){
          Text('阴影效果').fontSize(12).fontColor('#36D').width('90%')
          Image($r('app.media.my_border'))
            .width('90%')
            .height(60)
            .shadow({ radius: 10,
              color: '#afb4db',
              offsetX: 20,
              offsetY: 30 })
        }.width('100%')
      }

      ListItem(){
        Column({space:5}){
          // 灰度设置为0~1，当为1时则完全灰度了
          Text('灰度效果').fontSize(12).fontColor('#36D').width('90%')
          Image($r('app.media.my_border')).width('90%').height(40).grayscale(0.8)
          Image($r('app.media.my_border')).width('90%').height(40).grayscale(0.4)
        }.width('100%')
      }

      ListItem(){
        Column({space:5}){
          // 高光效果，1为正常图片，小于1则变暗，大于1则变亮
          Text('高光效果').fontSize(12).fontColor('#36D').width('90%')
          Image($r('app.media.my_border')).width('90%').height(40).brightness(1.3)
        }
        .width('100%')
      }

      ListItem(){
        Column({space:5}){
          // 饱和度，原图是1，大于1含色成分越高，饱和度越高；小于1消色成分越高，饱和度越低
          Text('饱和度').fontSize(12).fontColor('#36D').width('90%')
          Image($r('app.media.my_border')).width('90%').height(40).saturate(2.0)
          Image($r('app.media.my_border')).width('90%').height(40).saturate(0.5)
        }
        .width('100%')
      }

      ListItem(){
        Column({space:5}){
          // 对比度，原图为1，大于1则越清晰，小于1则越模糊
          Text('对比度').fontSize(12).fontColor('#36D').width('90%')
          Image($r('app.media.my_border')).width('90%').height(40).contrast(2.0)
          Image($r('app.media.my_border')).width('90%').height(40).contrast(0.5)
        }
        .width('100%')
      }

      ListItem(){
        Column({space:5}){
          // 图像反转比例
          Text('图像反转').fontSize(12).fontColor('#36D').width('90%')
          Image($r('app.media.my_border')).width('90%').height(40).invert(0.2)
          Image($r('app.media.my_border')).width('90%').height(40).invert(0.8)
        }
        .width('100%')
      }

      ListItem(){
        Column({space:5}){
          // 叠加添色
          Text('叠加添色').fontSize(12).fontColor('#36D').width('90%')
          Image($r('app.media.my_border')).width('90%').height(40).colorBlend(Color.Green)
          Image($r('app.media.my_border')).width('90%').height(40).colorBlend(Color.Blue)
        }
        .width('100%')
      }

      ListItem(){
        Column({space:5}){
          // 深褐色
          Text('深褐色').fontSize(12).fontColor('#36D').width('90%')
          Image($r('app.media.my_border')).width('90%').height(40).sepia(0.8)
        }
        .width('100%')
      }

      ListItem(){
        Column({space:5}){
          // 色相旋转
          Text('色相旋转').fontSize(12).fontColor('#36D').width('90%')
          Image($r('app.media.my_border')).width('90%').height(40).hueRotate(90)
        }
        .width('100%')
      }

    }
    .width('100%')
    .margin({top: 5})
  }
}
```

### 1.15、形状裁剪

用于对组件进行裁剪、遮罩处理

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>clip</td><td>Circle | Ellipse | Path | Rect | boolean</td><td><p>为相应类型的组件，按指定的形状对当前组件进行裁剪</p><p>参数为boolean类型时，设置是否按照父容器边缘轮廓进行裁</p><p>默认值：false</p><p>支持在卡片中使用</p></td></tr><tr><td>mask</td><td>Circle | Ellipse | Path | Rect</td><td>在当前组件上加上指定形状的遮罩</td></tr></tbody></table>

```ts
@Entry
@Component
struct ClipTest {

  build() {
    Column({space: 15}) {
      Text('clip').fontSize(12).width('90%').fontColor('#36D')
      Row() {
        Image($r('app.media.my_border'))
          .width('500px')
          .height('300px')
      }
      .clip(true) // 这里要设置为true,否则下方的圆角不会生效
      .borderRadius(35)

      Image($r('app.media.my_border'))
        .width('500px')
        .height('300px')
        // 使用一个300px直径的圆对图片进行裁剪
        .clip(new Circle({width: '300px', height: '300px'}))

      Text('mask').fontSize(12).width('90%').fontColor('#36D')
      Image($r('app.media.my_border'))
        .width('500px')
        .height('300px')
        //使用一个500*300的方形进行遮罩
        .mask(new Rect({width:'500px', height: '300px'}).fill(Color.Gray))
    }
    .width('100%')
    .margin({top: 15})
  }
}
```

###  1.16、文本样式

用来设置文的样式

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>fontColor</td><td>ResourceColor</td><td><p>设置字体的颜色</p><p>支持在卡片中使用</p></td></tr><tr><td>fontSize</td><td>Length</td><td><p>设置字体的大小</p><p>单位为fp</p><p>默认值：16</p><p>支持在卡片中使用</p></td></tr><tr><td>fontStyle</td><td>FontStyle</td><td><p>设置字体的样式</p><p>默认值是：FontStyle.Normal</p><p>支持在卡片中使用</p></td></tr><tr><td>fontWeight</td><td>number | FontWeight | string</td><td><p>设置字休的粗细</p><p>number值取值范围[100,900],取值间隔是100，默认值是400</p><p>FontWeight中是字体粗细的枚举值："bold"、"bolder"、"lighter"、"regular"、"medium"</p><p>默认是：FontWeight.Normal</p><p>支持在卡片中使用</p></td></tr><tr><td>fontFamily</td><td>string | Resouce</td><td><p>设置字体列表</p><p>默认字体：'HarmonyOS Sans'</p><p>支持卡片中使用</p></td></tr><tr><td>lineHeight</td><td>string | number | Resource</td><td><p>设置文本的行高</p><p>设置值不大于0时，不限制文本行高，自适应字体大小，Length为number类型时单位为fp</p><p>支持卡片中使用</p></td></tr><tr><td>decoration</td><td><p>{</p><p>&nbsp; type:TextDecorationType</p><p>&nbsp; color?:ResourceColor</p><p>}</p></td><td><p>设置文本装饰线样式及其颜色。</p><p>默认值：</p><p>{</p><p>type: TextDecorationType.None,</p><p>color：Color.Black</p><p>}</p><p>支持卡片中使用</p></td></tr></tbody></table>

```ts
@Entry
@Component
struct TextStyleTest {

  build() {
    Column({space: 5}){
      Text('默认文本')
      Text('红色字体文本').fontColor(Color.Red)
      Text('默认字体大小')
      Text('字体大小为10pf').fontSize(10)
      Text('斜体样式文本').fontStyle(FontStyle.Italic)
      Text('字体粗细为700').fontWeight(700)
      Text('字体粗细为Bolder').fontWeight(FontWeight.Bolder)
      Text('字本装饰器').decoration({
        type:TextDecorationType.LineThrough,
        color:Color.Red
      })
    }
    .width('100%')
    .padding({top:5})
  }
}
```

### 1.17、渐变颜色

设置组件的颜色渐变效果

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数说明</strong></td><td><strong>描述</strong></td></tr><tr><td>linearGradient</td><td><p>{</p><p>&nbsp; angle?:number|string,</p><p>&nbsp; direction?:GradientDirection,</p><p>&nbsp; colors:Array&lt;[ResourceColor,number]&gt;,</p><p>&nbsp; repeating?:boolean</p><p>}</p></td><td><p>线性渐变</p><p>angle:线性渐变的起始角度。0点方向顺时针旋转为正向角度</p><p>黑认值：180</p><p>direction:线性渐变的方向，设置过angle则不生效</p><p>默认值：GradientDirection.Bottom</p><p>colors:渐变色描述</p><p>repeating:为渐变的颜色重复着色</p><p>默认值：false</p><p>支持卡片使用</p></td></tr><tr><td>sweepGradient</td><td><p>{</p><p>&nbsp; center:Point,</p><p>&nbsp; start?:number | string,</p><p>&nbsp; end?:number | string,</p><p>&nbsp; rotation?:number | string,</p><p>&nbsp; colors:Array&lt;[ResourceColor,number]&gt;,</p><p>&nbsp; repeating?:boolean</p><p>}</p></td><td><p>角度渐变</p><p>center:角度渐变的中心点，相对于当前组件左上角的坐标</p><p>start:角度渐变的起点，默认值：0</p><p>end:角度渐变的终点，默认值：0</p><p>rotation:角度渐变的旋转角度，默认值：0</p><p>colors:渐变色的颜色描述</p><p>repeating:为渐变的颜色重复着色,默认值：false</p><p>支持在卡片中使用</p><p><span>注意：设置为小于0的值时，按值为0处理。设置为大于360的值时，按值为360处理。当start、end、rotation的数据类型为string，值为"90"或"90%"，与90效果一致</span></p></td></tr><tr><td>radialGradient</td><td><p>{</p><p>&nbsp; center:Point,</p><p>&nbsp; radius:number | string,</p><p>&nbsp; colors:Array&lt;[ResourceColor,number]&gt;,</p><p>repeating?:boolean</p><p>}</p></td><td><p>径向渐变</p><p>center:径向渐变的中心点，相对于当前组件左上角的坐标</p><p>radius:径向渐变的半径，取值范围[0,+∞}</p><p>设为小于0的值时，按0处理</p><p>color:渐变的颜色描述</p><p>repeating:渐变颜色重复着色</p><p>默认值：false</p><p>支持卡片中使用</p></td></tr></tbody></table>

```ts
@Entry
@Component
struct ColorGradientTest {
  build() {
    Column({ space: 10 }) {
      Text('linearGradient').fontSize(12).fontColor('#36D').width('90%')
      Row()
        .width('90%')
        .height(30)
        .linearGradient({
          angle:90,
          colors:[['#ef5b9c',0.0],['#f47920',0.6],['#426ab3',1.0]]
        })
      Text('linearGradient Repeat').fontSize(12).width('90%').fontColor('#36D')
      Row()
        .width('90%')
        .height(30)
        .linearGradient({
          direction: GradientDirection.Left,  // 渐变的方向
          // 当颜色数组元素占比小于1时可以使用重复着色,如果不重复则最后一段会使用最后一个颜色值
          colors:[['#ef5b9c',0.0],['#f47920',0.3],['#426ab3',0.5]],
          repeating:true
        })
      Text('sweepGradient').fontSize(12).fontColor('#36D').width('90%')
      Row()
        .width(100)
        .height(100)
        .sweepGradient({
          center:[50,50],
          start:0,
          end:359,
          colors:[['#ef5b9c',0.0],['#f47920',0.6],['#426ab3',1.0]]
        })
      Text('radialGradient Repeat').fontSize(12).fontColor('#36D').width('90%')
      Row()
        .width(100)
        .height(100)
        .radialGradient({
          center:[50,50],
          radius:60,
          colors:[['#ef5b9c',0.0],['#f47920',0.3],['#426ab3',0.5]],
          repeating:true
        })
    }.width('100%').padding({ top: 5 })
  }
}
```

###  1.18、Popup控制

为组件绑定popup弹窗，并设置弹窗的内容，交互逻辑和显示状态

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>bindPopup</td><td><p>show:boolean</p><p>popup:PopupOptions | CustomPopupOptions</p></td><td><p>给组件绑定Popup弹窗</p><p>show为true弹出弹窗，默认值是false</p><p>popup:配置当前弹窗的提示参数</p><p><span>注意：popup弹窗必须等待页面全部构建完成才能展示，因此show不能在页面构建中设置为true，否则会导致popup弹窗显示位置及形状错误</span></p></td></tr></tbody></table>

 PopupOptions类型说明

<table><tbody><tr><td><strong>名称</strong></td><td><strong>类型</strong></td><td><strong>描述</strong></td></tr><tr><td>message</td><td>string</td><td><p>必填</p><p>弹窗的信息内空</p></td></tr><tr><td>placementOnTop</td><td>boolean</td><td><p>非必填</p><p>是否在组件上方显示，默认是false</p></td></tr><tr><td>primaryButton</td><td><p>{</p><p>&nbsp; value:string,</p><p>&nbsp; action:() =&gt; void</p><p>}</p></td><td><p>非必填</p><p>第一个按钮</p><p>value:按钮文本</p><p>action：点击时的回调函数</p></td></tr><tr><td>secondaryButton</td><td><p>{</p><p>&nbsp; value:string,</p><p>&nbsp; action:() =&gt; void</p><p>}</p></td><td><p>非必填</p><p>第二个按钮</p><p>value:按钮文本</p><p>action：点击时的回调函数</p></td></tr><tr><td>onStateChange</td><td>(event:{isVisible:boolean}) =&gt; void</td><td><p>非必填</p><p>弹窗状态变化事件回调，参数isVisible为弹窗当前的显示状态</p></td></tr><tr><td>arrowOffset</td><td>length</td><td><p>非必填</p><p>popup箭头在弹窗处的偏移。箭头在气泡上下方时，数值为0表示箭头居最左侧，偏移量为箭头至最左侧的距离，默认居中。箭头在气泡左右侧时，偏移量为箭头至最上侧的距离，默认居中。如果显示在屏幕边缘，气泡会自动左右偏移，数值为0时箭头始终指向绑定组件</p></td></tr><tr><td>showInSubWindow</td><td>boolean</td><td><p>非必填</p><p>是否在子窗口显示气泡</p><p>默认值为false。</p></td></tr></tbody></table>

CustomPopupOptions类型说明

<table><tbody><tr><td><strong>名称</strong></td><td><strong>类型说明</strong></td><td><strong>描述</strong></td></tr><tr><td>builder</td><td>CustomBuilder</td><td><p>必填</p><p>提示气泡内容的构造器</p></td></tr><tr><td>placement</td><td>Placement</td><td><p>非必填</p><p>气泡组件优先显示的位置，当前位置显示不下时，会自动调整位置</p><p>默认值：Placement.Bottom</p></td></tr><tr><td>popupColor</td><td>ResourceColor</td><td><p>非必填</p><p>提示气泡的颜色</p></td></tr><tr><td>enableArrow</td><td>boolean</td><td><p>非必填</p><p>是否显示箭头</p><p>默认值：true</p></td></tr><tr><td>autoCancel</td><td>boolean</td><td><p>非必填</p><p>页面有操作时，是否自动关闭气泡</p><p>默认值:true</p></td></tr><tr><td>onStateChange</td><td>(event:{isVisible:boolean})=&gt;void</td><td><p>非必填</p><p>弹窗状态变化事件回调，参数为弹窗当前的显示状态</p></td></tr><tr><td>arrowOffset</td><td>Length</td><td><p>非必填</p><p>popup箭头在弹窗处的偏移</p></td></tr><tr><td>showInSubWindow</td><td>boolean</td><td><p>非必填</p><p>是否在子窗口显示气泡，默认值为false</p></td></tr></tbody></table>

```ts
import Prompt from '@system.prompt';
@Entry
@Component
struct PoupTest {
  @State handlePopup: boolean = false;
  @State customPopup: boolean = false;

  // popup构造器定义弹框内容
  @Builder popupBuilder() {
    Row({space: 2}) {
      Image($r('app.media.my_border')).width(24).height(24).margin({left: -5})
      Text('Custom Popup').fontSize(12)
    }.width(120).height(50).padding(5)
  }

  build() {
    Flex({direction: FlexDirection.Column}) {
      // PopupOptions类型设置弹框的内容
      Button('PopupOptions')
        .onClick(() => {
          this.handlePopup = !this.handlePopup;
        })
        .bindPopup(this.handlePopup,{
          message: '使用PopupOptions来设置弹框内容',
          placementOnTop: true, // 是否在组件上方显示
          showInSubWindow: false, // 是否在子窗口显示气泡
          primaryButton: {
            // 第一个按钮
            value: '确定',
            action: () => {
              this.handlePopup = !this.handlePopup
              Prompt.showToast({
                message: '点击了弹窗中的【确定】按钮',
                duration: 2000
              })
            }
          },
          secondaryButton: {
            // 第二个按钮
            value: '取消',
            action: () => {
              this.handlePopup = !this.handlePopup
              Prompt.showToast({
                message: '点击了弹窗中的【取消】按钮',
                duration: 2000
              })
            }
          },
          onStateChange: (e) => {
            if(!e.isVisible) {
              this.handlePopup = false
            }
          }
        })
        .position({x:100, y:50})

      // CustomPopupOptions类型设置弹框内容
      Button('CustomPopupOptions')
        .onClick(() => {
          this.customPopup = !this.customPopup;
        })
        .bindPopup(this.customPopup,{
          builder: this.popupBuilder(), // 提示气泡内容的构造器
          placement: Placement.Top, // 气泡组件优先显示的位置
          maskColor: '#6a6da9',
          popupColor: Color.Yellow, // 提示气泡的颜色
          enableArrow: true,  // 是否显示箭头
          showInSubWindow: false,
          onStateChange: (e) => {
            if(!e.isVisible) {
              this.customPopup = false
            }
          }
        })
        .position({x: 80, y: 200})
    }
    .width('100%').padding({top:5})
  }
}
```

###  1.19、菜单

为组件绑定弹出式菜单，弹出式菜单以垂直列表形式显示菜单项，可通过长按、点击或鼠标右键触发

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>bindMenu</td><td>Array&lt;MenuIte&gt; | CustomBuilder</td><td><p>给组件绑定菜单，点击后弹出菜单</p><p>弹出的菜单支持文本和自定义菜单两种</p></td></tr><tr><td>bindContextMenu</td><td><p>content:CustomBilder</p><p>responseType:ResponseType</p></td><td>给组件绑定菜单，触发方式为长按或者右键点击，弹出菜单项需要自定义。</td></tr></tbody></table>

MenuItem说明

<table><tbody><tr><td><strong>名称</strong></td><td><strong>类型</strong></td><td><strong>描述</strong></td></tr><tr><td>value</td><td>string</td><td>菜单项文本</td></tr><tr><td>action</td><td>() =&gt; void</td><td>点击菜单项的事件回调</td></tr></tbody></table>

```ts
import Prompt from '@system.prompt'
@Entry
@Component
struct MenuTest {
  @State listData: number[] = [0,0,0]

  @Builder MenuBuilder() {
    Flex({direction:FlexDirection.Column,justifyContent:FlexAlign.Center,alignItems:ItemAlign.Center}) {
      ForEach(this.listData,(item,index) => {
        Column() {
          Row() {
            Image($r('app.media.icon')).width(20).height(20).margin({right:5})
            Text(`Menu${index + 1}`).fontSize(20)
          }
          .height(30)
          .justifyContent(FlexAlign.Center)
          .align(Alignment.Center)
          .onClick(() => {
            Prompt.showToast({
              message: `你点击了【Menu${index + 1}】`
            })
          })
          if(index != this.listData.length - 1) {
            Divider().height(10).width('80%').color('#ccc')
          }
        }.padding(5).height(40)
      })
    }
  }

  build() {
    Column(){
      Row(){
        Text('click for Menu').fontSize(12).fontColor('#36D')
          .bindMenu([
            {
              value: '菜单一',
              action:() => {
                Prompt.showToast({
                  message: '点击了菜单一',
                  duration: 2000
                })
              }
            },
            {
              value: '菜单二',
              action:() => {
                Prompt.showToast({
                  message: '点击了菜单二',
                  duration: 2000
                })
              }
            }
          ])

        Text('click for Menu').fontSize(12).fontColor('#36D')
          .bindMenu(this.MenuBuilder())

      }
      .width('80%')
      .justifyContent(FlexAlign.SpaceAround)


    }.height('100%').padding(5)
  }
}
```

### 1.20、焦点控制

自定义组件的走焦效果，可设置组件是否走焦和具体的走焦顺序，tab键或者方向键切换焦点

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>focusable</td><td>boolean</td><td>设置当前组件是否可以获焦</td></tr><tr><td>tabIndex</td><td>number</td><td><p>自定义组件tab键走焦能力</p><p>tabIndex &gt;= 0：表示元素是可聚焦的，并且可以通过tab键走焦来访问到该元素</p><p>tabIndex &lt; 0（通常是tabIndex = -1）：表示元素是可聚焦的，但是不能通过tab键走焦来访问到该元素</p><p>默认值：0</p></td></tr><tr><td>defaultFocus</td><td>boolean</td><td><p>设置当前组件是否为当前页面上的默认焦点</p><p>默认值：false</p></td></tr><tr><td>groupDefaultFocus</td><td>boolean</td><td><p>设置当前组件是否为当前组件所在容器获焦时的默认焦点</p><p>默认值：false</p></td></tr><tr><td>focusOnTouch</td><td>boolean</td><td><p>设置当前组件是否支持点击获焦能力</p><p>默认值：false</p></td></tr></tbody></table>

focusControl

requestFocus(value:string):boolean

方法语句中可使用的全局接口，调用此接口可以主动让焦点转移至参数指定的组件上

返回值boolean表示是否成功给目标组件申请到焦点

焦点事件当前仅支持在真机上显示运行效果。

### 1.21、悬浮态

设置组件的鼠标悬浮态显示效果

属性：hoverEffect

参数类型：HoverEffect

设置当前组件悬停态下的悬浮效果。

默认值：HoverEffect.Auto

```ts
@Entry
@Component
struct HoverTest {
  @State isHoverVal: boolean = false

  build() {
    Column({ space: 5 }) {
      Column({ space: 5 }) {
        Text('Scale').fontSize(20).fontColor(Color.Gray).width('90%').position({ x: 0, y: 80 })
        Column()
          .width('80%').height(200).backgroundColor(Color.Gray)
          .position({ x: 40, y: 120 })
          .hoverEffect(HoverEffect.Scale)
          .onHover((isHover: boolean) => {
            console.info('Scale isHover: ' + isHover)
            this.isHoverVal = isHover
          })
        Text('Board').fontSize(20).fontColor(Color.Gray).width('90%').position({ x: 0, y: 380 })
        Column()
          .width('80%').height(200).backgroundColor(Color.Gray)
          .hoverEffect(HoverEffect.Highlight)
          .position({ x: 40, y: 420 })
          .onHover((isHover: boolean) => {
            console.info('Highlight isHover: ' +isHover )
            this.isHoverVal = isHover
          })
      }
      .hoverEffect(HoverEffect.None)
      .width('100%').height('100%').border({ width: 1 })
      .onHover((isHover: boolean) => {
        console.info('HoverEffect.None')
        this.isHoverVal = isHover
      })
    }
  }
}
```

### 1.22、组件标识

id为组件的唯一标识，在整个应用内唯一。本模块提供组件标识相关接口，可以获取指定id组件的属性，也提供向指定id组件发送事件的功能。

**getInspectorByKey**

getInspectorByKey(id: string): string

获取指定id的组件的所有属性，不包含子组件信息。

返回的是一个组件属性列表的JSON字符串

**getInspectorTree**

getInspectorTree(): Object

获取组件树及组件属性

返回的是组件树及组件属性列表的JSON对象

**sendEventByKey**

sendEventByKey(id: string, action: number, params: string): boolean

给指定id的组件发送事件

action支持取值：10表示点击事件；11表示长按事件

params:为事件参数，无参时传空字符串

返回值，找不到指定id的组件时返回false，其余情况返回true

**sendTouchEvent**

sendTouchEvent(event: TouchObject): boolean

发送触摸事件

返回值，事件发送失败时返回false，其余情况返回true

**sendKeyEvent**

sendKeyEvent(event: KeyEvent): boolean

发送按键事件

返回值，事件发送失败时返回false，其余情况返回true

**sendMouseEvent**

sendMouseEvent(event: MouseEvent): boolean

发送鼠标事件

返回值，事件发送失败时返回false，其余情况返回true

### 1.23、触摸热区

适用于支持通用点击事件、通用触摸事件、通用手势处理的组件

<table><tbody><tr><td><strong>名称</strong></td><td><strong>参数类型</strong></td><td><strong>描述</strong></td></tr><tr><td>responseRegion</td><td>Array&lt;Rectangle&gt; |&nbsp;Retangle</td><td><p>设置一个或多个触摸热区，包括位置和大小</p><p>默认触摸热区为整个组件，默认值</p><p>{</p><p>x：0,&nbsp; &nbsp; &nbsp; &nbsp;//&nbsp;触摸点相对于组件左上角的x轴坐标</p><p>y：0,&nbsp; &nbsp; &nbsp; &nbsp; //&nbsp;触摸点相对于组件左上角的y轴坐标</p><p>width：'100%',&nbsp; &nbsp; &nbsp; &nbsp; //&nbsp;触摸热区的宽度</p><p>height：'100%'&nbsp; &nbsp; &nbsp; &nbsp; //&nbsp;触摸热区的高度</p><p>}</p><p>支持在卡片中使用</p></td></tr></tbody></table>

### 1.24、多态样式

设置组件不同状态下的样式

在组件结构体中，使用@Styles 的样式方法,如下所示：

```ts
@Styles pressedStyles() {
    .backgroundColor("#ED6F21")
    .borderRadius(10)
    .borderStyle(BorderStyle.Dashed)
    .borderWidth(2)
    .borderColor("#33000000")
    .width(120)
    .height(30)
    .opacity(1)
  }
```

在组件中，使用stateStyles来引入定义的样式，如下所示：

```ts
Text("pressed")
        .backgroundColor("#0A59F7")
        .borderRadius(20)
        .borderStyle(BorderStyle.Dotted)
        .borderWidth(2)
        .borderColor(Color.Red)
        .width(100)
        .height(25)
        .opacity(1)
        .fontSize(14)
        .fontColor(Color.White)
        .stateStyles({
          pressed: this.pressedStyles,
        })
```

### 1.25、触摸测试控制

设置组件的触摸测试类型。ArkUI开发框架在处理触屏事件时，会在触屏事件触发前，进行按压点和组件区域的触摸测试来收集需要响应触屏事件的组件，然后基于触摸测试结果分发相应的触屏事件。hitTestBehavior属性可以设置不同的触摸测试响应模式，影响组件的触摸测试收集结果，最终影响后续的触屏事件分发。

HitTestMode枚举值有如下：

Default：默认触摸测试效果，自身和子节点都响应触摸测试，但会阻塞兄弟节点的触摸测试

Block:自身响应触摸测试，阻塞子节点和兄弟节点的触摸测试

Transparent:自身和子节点都响应触摸测试，不会阻塞兄弟节点的触摸测试

None:自身不响应触摸测试，不会阻塞子节点和兄弟节点的触摸测试

### 1.26、分布式迁移标识

组件的分布式迁移标识，指明了该组件在分布式迁移场景下可以将特定状态恢复到对端设备

restoreId: number类型，标记支持分布式迁移的组件Id，用于两端设备组件的配对。同一个应用中各个支持分布式迁移组件的Id必须不同

支持组件：List,Grid,Scorll

### 1.27、点击控制

设置组件是否可以响应点击事件、触摸事件等手指交互事件

touchable：boolean类型，设置当前组件是否可以响应点击事件、触摸事件等手指交互事件，默认是true
