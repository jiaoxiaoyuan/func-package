---
title: 项目脚手架
order: 2
nav:
  title: 项目
  path: /openSource
  order: 200
group:
  path: /project
  title: 开源
  order: 1
---

项目脚手架
===

## 安装(不推荐)
```shell
npm install @front-base/cli -g
```

## 新建项目(推荐使用npx)
```shell
# npx使用
npx @front-base/cli init 项目名
# 例如
npx @front-base/cli init aaa
npx @front-base/cli i aaa
# 安装后使用
front-cli init aaa
front-cli i aaa
```

## 获取版本号
```bash
front-cli --version
front-cli -V
```

## 获取帮助信息
```
front-cli --help
```

## 已有项目添加git hook
```
front-cli add-githooks
npx @front-base/cli add-githooks
```


# 调试相关
1.
```
pnpm link --global
```

2.`/src/index.js`第一行修改为
```
#!/usr/bin/env node --inspect-brk
```

3.在命令行中执行相应命令，等启动以后，使用`vscode`启动`手动链接到测试任务`

4.卸载全局任务
```
pnpm remove @front-base/cli -g
```



