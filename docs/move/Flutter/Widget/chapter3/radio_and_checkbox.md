---
nav:
  title: 移动端
  path: /move
  order: 9
group:
  path: /chapter1
  title: Flutter实战·第二版
  order: 6
title: 单选开关和复选框
order: 33
---

# 3.4 单选开关和复选框

## 3.4.1.简介

Material 组件库中提供了 Material 风格的单选开关`Switch`和复选框`Checkbox`，虽然它们都是继承自`StatefulWidget`，但它们本身不会保存当前选中状态，选中状态都是由父组件来管理的。当`Switch`或`Checkbox`被点击时，会触发它们的`onChanged`回调，我们可以在此回调中处理选中状态改变逻辑。下面看一个简单的例子：

```dart
class SwitchAndCheckBoxTestRoute extends StatefulWidget {
  @override
  _SwitchAndCheckBoxTestRouteState createState() => _SwitchAndCheckBoxTestRouteState();
}

class _SwitchAndCheckBoxTestRouteState extends State<SwitchAndCheckBoxTestRoute> {
  bool _switchSelected=true; //维护单选开关状态
  bool _checkboxSelected=true;//维护复选框状态
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Switch(
          value: _switchSelected,//当前状态
          onChanged:(value){
            //重新构建页面  
            setState(() {
              _switchSelected=value;
            });
          },
        ),
        Checkbox(
          value: _checkboxSelected,
          activeColor: Colors.red, //选中时的颜色
          onChanged:(value){
            setState(() {
              _checkboxSelected=value;
            });
          } ,
        )
      ],
    );
  }
}
```

上面代码中，由于需要维护`Switch`和`Checkbox`的选中状态，所以`SwitchAndCheckBoxTestRoute`继承自`StatefulWidget` 。在其`build`方法中分别构建了一个`Switch`和`Checkbox`，初始状态都为选中状态，当用户点击时，会将状态置反，然后回调用`setState()`通知 Flutter 框架重新构建UI，效果如图3-17所示：

![图3-17](./assets/3-17.a249df4c.png)

## 3.4.2 属性及外观

`Switch`和`Checkbox`属性比较简单，读者可以查看API文档，它们都有一个`activeColor`属性，用于设置激活态的颜色。至于大小，到目前为止，`Checkbox`的大小是固定的，无法自定义，而`Switch`只能定义宽度，高度也是固定的。值得一提的是`Checkbox`有一个属性`tristate` ，表示是否为三态，其默认值为`false` ，这时 Checkbox 有两种状态即“选中”和“不选中”，对应的 value 值为`true`和`false` ；如果`tristate`值为`true`时，value 的值会增加一个状态`null`，读者可以自行测试。

## 3.4.3 注意

通过`Switch`和`Checkbox`我们可以看到，虽然它们本身是与状态（是否选中）关联的，但它们却不是自己来维护状态，而是需要父组件来管理状态，然后当用户点击时，再通过事件通知给父组件，这样是合理的，因为`Switch`和`Checkbox`是否选中本就和用户数据关联，而这些用户数据也不可能是它们的私有状态。我们在自定义组件时也应该思考一下哪种状态的管理方式最为合理。

