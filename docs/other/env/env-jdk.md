---
title: mac 使用 jenv 管理多个版本的 jdk
order: 15
nav:
  title: 文档
  path: /other
  order: 100
group:
  path: /env
  title: 环境配置
  order: 3
---

mac 使用 jenv 管理多个版本的 jdk
===


## 1\. 安装 jenv

```shell
brew install jenv
```

mac brew 快速配置看这里 [https://gitee.com/cunkai/HomebrewCN](https://gitee.com/cunkai/HomebrewCN)

也可直接从 github 拉取

```shell
git clone https://github.com/jenv/jenv.git ~/.jenv
```

## 2\. 配置环境

查看shell是 zsh还是bash

```shell
echo $0
```

mac 默认是 zsh

### zsh

```shell
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(jenv init -)"' >> ~/.zshrc
```

### bash

```shell
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(jenv init -)"' >> ~/.bash_profile
```

## 3\. 验证 jenv 是否安装

```shell
aaron@AarondeMacBook-Pro ~ % jenv doctor
[OK]	No JAVA_HOME set
[ERROR]	Java binary in path is not in the jenv shims.
[ERROR]	Please check your path, or try using /path/to/java/home is not a valid path to java installation.
	PATH : /opt/homebrew/Cellar/jenv/0.5.4/libexec/libexec:/Users/aaron/.jenv/shims:/Users/aaron/.jenv/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion Tech Preview.app/Contents/Public:/Library/Apple/usr/bin
[OK]	Jenv is correctly loaded
```

注意：如果出现

\[ERROR\] JAVA\_HOME variable already set, scripts that use it directly could not use java version set by jenv  
\[ERROR\] Java binary in path is not in the jenv shims.  
\[ERROR\] Please check your path, or try using /path/to/java/home is not a valid path to java installation.

需要检查两个地方的配置

1.  配置文件中 .zshrc 或 .bash\_profile 配置了 JAVA\_HOME 需删除或注释 之后 source
2.  步骤二设置的不对

正常输出结果

```shell
aaron@AarondeMacBook-Pro  /Library/Java/JavaVirtualMachines/jdk-18.0.1.1.jdk/Contents/Home  jenv doctor
[OK]	JAVA_HOME variable probably set by jenv PROMPT
[OK]	Java binaries in path are jenv shims
[OK]	Jenv is correctly loaded
```

## 4\. 查找已安装的JDK目录

```shell
/usr/libexec/java_home -V
```

```shell
aaron@AarondeMacBook-Pro / % /usr/libexec/java_home -V
Matching Java Virtual Machines (5):
    17.0.2 (arm64) "Oracle Corporation" - "Java SE 17.0.2" /Library/Java/JavaVirtualMachines/jdk-17.0.2.jdk/Contents/Home
    11.0.14 (x86_64) "Oracle Corporation" - "Java SE 11.0.14" /Library/Java/JavaVirtualMachines/jdk-11.0.14.jdk/Contents/Home
    1.8.321.07 (x86_64) "Oracle Corporation" - "Java" /Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home
    1.8.0_322 (arm64) "Azul Systems, Inc." - "Zulu 8.60.0.21" /Library/Java/JavaVirtualMachines/zulu-8.jdk/Contents/Home
    1.8.0_321 (x86_64) "Oracle Corporation" - "Java SE 8" /Library/Java/JavaVirtualMachines/jdk1.8.0_321.jdk/Contents/Home
/Library/Java/JavaVirtualMachines/jdk-17.0.2.jdk/Contents/Home
```

通过 jenv add 命令就可以把需要管理的 JDK 添加到 jenv

## 5\. 向 jenv 添加 JDK 版本

```shell
jenv add /Library/Java/JavaVirtualMachines/jdk-17.0.2.jdk/Contents/Home
```

## 6\. 删除添加到 jenv 的 JDK 版本

添加新版本时，每个版本都会一次性自动加入多个不同版本，有些就是简称而已，其实都指向同一个版本，这里便于区分，可以将简略版本删除

```shell
jenv remove 17
```

## 7\. 查看添加到 jenv 的 JDK 版本

```shell
jenv versions
```

```shell
aaron@AarondeMacBook-Pro / % jenv versions
* system (set by /Users/aaron/.jenv/version)
  1.8
  1.8.0.322
  17
  17.0
  17.0.2
  oracle64-17.0.2
  zulu64-1.8.0.322
```

system 即 jenv global 指定

## 8\. jenv 指定 JDK 版本

```shell
jenv local 1.8
```

若提示没有权限 使用 sudo 即可  
注意：慎用此命令，此命令会在当前目录下生成名为 .java-version 的隐藏文件

## 9\. 指定全局 JDK 版本

```shell
jenv global oracle64-17.0.2
```

ps： global 不会覆盖已经使用了 jenv local 指定了 JDK 版本的命令行窗口

## 10.配置别名实现快速切换

vim ~/.zshrc 或者 vim ~/.bash\_profile

```shell
alias jdk8_intel='jenv global openjdk64-1.8.0.292'
alias jdk8='jenv global zulu64-1.8.0.322'
alias jdk17='jenv global oracle64-17.0.2'
alias jdk18='jenv global oracle64-18.0.1.1'
```

效果

```shell
aaron@AarondeMacBook-Pro  ~  jdk8
aaron@AarondeMacBook-Pro  ~  java -version

openjdk version "1.8.0_322"
OpenJDK Runtime Environment (Zulu 8.60.0.21-CA-macos-aarch64) (build 1.8.0_322-b06)
OpenJDK 64-Bit Server VM (Zulu 8.60.0.21-CA-macos-aarch64) (build 25.322-b06, mixed mode)
```

## 11\. 查看当前jdk所在位置

```shell
jenv which java
```

```shell
aaron@AarondeMacBook-Pro versions % jenv which java
/Users/aaron/.jenv/versions/1.8/bin/java
```

/Users/aaron/.jenv/versions 目录，所有的 jdk 版本都在这里，这里只是引用地址  
通过 ls -l 可以看到实际的安装目录

```shell
aaron@AarondeMacBook-Pro versions % ls -l
total 0
lrwxr-xr-x  1 aaron  staff  58  5 28 20:33 1.8 -> /Library/Java/JavaVirtualMachines/zulu-8.jdk/Contents/Home
lrwxr-xr-x  1 aaron  staff  62  5 28 20:26 17.0 -> /Library/Java/JavaVirtualMachines/jdk-17.0.2.jdk/Contents/Home
lrwxr-xr-x  1 aaron  staff  62  5 28 20:26 oracle64-17.0.2 -> /Library/Java/JavaVirtualMachines/jdk-17.0.2.jdk/Contents/Home
lrwxr-xr-x  1 aaron  staff  58  5 28 20:33 zulu64-1.8.0.322 -> /Library/Java/JavaVirtualMachines/zulu-8.jdk/Contents/Home
```

### mac jdk 默认安装目录

安装目录统一在 /Library/Java/JavaVirtualMachines/

参考文档  
[https://github.com/jenv/jenv](https://github.com/jenv/jenv)
