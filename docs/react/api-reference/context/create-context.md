---
nav:
    title: React系列
    path: /react
    order: 5
group:
    title: Context API
    order: 31
title: React.createContext
order: 1
---

# React.createContext

官方文档：[Context API](https://zh-hans.reactjs.org/docs/context.html#api)

创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 `<Provider>` 中读取到当前的 `context` 值。

## 基本用法

语法：

```jsx | pure
const ContextInstance = React.createContext(defaultValue);
```

代码示例：

<!-- <code src="https://tsejx.github.io/react-guidebook/~demos/react-guidebook-createcontext/index.tsx" /> -->

```jsx | pure
import React from 'react';

const Context = React.createContext({
  checked: true,
  onToggle: () => {},
});

class ContextProvider extends React.Component {
  // 注意书写顺序；handleToggle 作为箭头函数不能 bind 因此需要写在上面；如果不喜欢这样的顺序则可以书写普通函数放在下面但记得 bind
  handleSwitchToggle = () => {
    this.setState({ checked: !this.state.checked });
  };

  // 1. 重写 state
  state = {
    checked: true,
    onToggle: this.handleSwitchToggle,
  };

  render() {
    // 2. 通过 Provider 组件的 value 将 state 提供出去
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

const ContextConsumer = Context.Consumer;

class ChildComponent extends React.Component {
  render() {
    return (
      <ContextConsumer>
        {({ checked, onToggle }) => <div onClick={() => onToggle()}>{checked ? '✅' : '❌'}</div>}
      </ContextConsumer>
    );
  }
}

class ParentComponent extends React.Component {
  // 更新 state 不会执行
  componentDidUpdate() {
    console.log('ParentComponent did updated');
  }
  render() {
    return <ChildComponent></ChildComponent>;
  }
}

class WrapperComponent extends React.Component {
  // 更新 state 不会执行
  componentDidUpdate() {
    console.log('WrapperComponent did updated');
  }
  render() {
    return <ParentComponent></ParentComponent>;
  }
}

const App = () => {
  return (
    <ContextProvider>
      <WrapperComponent></WrapperComponent>
    </ContextProvider>
  );
};

export default () => <App />;

```


只有当组件所处的树中没有匹配到 `Provider` 时，其 `defaultValue` 参数才会生效。这有助于在不使用 `Provider` 包装组件的情况下对组件进行测试。

⚠️ **注意**：

- 将 `undefined` 传递给 `Provider` 的 `value` 时，消费组件的 `defaultValue` 不会生效。

## 静态属性

### ReactContext.contextType

挂载在 class 上的 `contextType` 属性会被重赋值为一个由 `React.createContext()` 创建的 Context 对象。这能让你使用 `this.context` 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 `render` 函数中。

```jsx | pure
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    // 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作
  }
  componentDidUpdate() {
    let value = this.context;
  }
  componentWillUnmount() {
    let value = this.context;
  }
  render() {
    let value = this.context;
    // 基于 MyContext 组件的值
  }
}

MyClass.contextType = MyContext;
```

### ReactContext.displayName

用于设置 ReactContext 对象在开发者调试工具中显示的名称。

```jsx | pure
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

// 在 DevTools 中显示 MyDisplayName.Provider 和 MyDisplayName.Consumer
const App = () => {
  return (
    <MyContext.Provider>
      <div>
        <MyContext.Consumer></MyContext.Consumer>
      </div>
    </MyContext.Provider>
  );
};
```
