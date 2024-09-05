---
title: 苹果依赖环境配置
order: 6
nav:
  title: 文档
  path: /other
group:
  path: /ios
  title: IOS环境
  order: 2
---

苹果依赖环境配置
===

## 一、Mac安装Homebrew
### 1、安装
`/usr/bin/ruby -e "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install)"`

### 2、常用命令
- 查询：`brew search` 软件名
- 安装：`brew install `软件名
- 卸载：`brew uninstall` 软件名
- 更新`Homebrew`：`brew update `
- 查看 `Homebrew` 配置信息：`brew config `

## 二、安装ruby
### 1、安装
```shell
Brew install ruby
```
### 2、设置
```shell
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
```

### 2、查看版本
```shell
Ruby -v
```
## 三、安装cocoapods
### 1、安装
```shell
sudo gem install -n /usr/local/bin cocoapods
```
### 2、常用命令
```shell
pod --version
pod update
pod install
pod search
```
       
### 3、查看当前源  
```shell
pod repo list
```

### 4、替换源
- (1)删除源：`pod repo remove trunk`或者`pod repo remove master`
- (2)添加新源地址： `pod repo add master https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git`(清华源，其他源地址也是这样添加)
- (3)`pod repo update`
  
### 5、查看安装路径
```shell
gem which cocoapods
```

## 四、gem常用命令
### 1、替换安装源
- (1)删除安装源：`gem sources --remove https://rubygems.org/`
- (2)增加安装源：`gem sources --add https://gems.ruby-china.com`
- (3)查看安装源：`gem sources -l`

### 2、常用命令
- 查看版本：`gem -v`
- 更新所有包: `gem update`
- 更新Rubgem: `gem update --system`
- 清除旧包: `gem cleanup`
- 查看环境：`gem environment`

