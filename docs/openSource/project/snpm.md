---
title: 切换镜像源
order: 1
nav:
  title: 项目
  path: /openSource
  order: 200
group:
  path: /project
  title: 开源
  order: 1 
# group:
#   path: /snpm
#   title: npm镜像管理
#   order: 1
---


##  切换镜像源的库


建议全局安装，加上-g参数

``` bash
npm i @front-base/snpm -g
```
    

### `snpm ls` 查看目前源

``` bash
* npm-------  https://registry.npmjs.org/
  
  yarn------  https://registry.yarnpkg.com/

  tencent---  https://mirrors.cloud.tencent.com/npm/

  cnpm------  https://r.cnpmjs.org/

  taobao----  https://registry.npmmirror.com/
  
  npmMirror-  https://skimdb.npmjs.com/registry/

  ```

### `snpm use` 切换源

选择你要切换的源

### `snpm current `查看当前源

当前源: `npm`

### `snpm add` 添加源

1.输入添加的名称
2.输入源地址

### `snpm ping` 测试源

请选择镜像 `cnpm`
响应时长: 1635ms

### `snpm delete` 删除自定义源

add添加的源都可以删除


### `snpm rename` 重命名

自定义添加的源都可以进行重新命名

### `snpm edit` 编辑自定义镜像地址

## 用法汇总

``` bash
Usage: snpm [options] [command]

Options:

  -V, --version   output the version number

  -h, --help      display help for command


Commands:
  ls              查看镜像

  use             请选择镜像

  current         查看当前源

  ping            测试镜像地址速度

  add             自定义镜像

  delete          删除自定义的源

  rename          重命名

  edit            编辑自定义镜像地址

  help [command]  display help for command
```


开源地址
```bash
https://gitee.com/NativeBase/snpm.git
https://github.com/jiaoxiaoyuan/snpm.git
```
