---
title: Android-Studio 安装
order: 7
nav:
  title: 文档
  path: /other
  order: 100
group:
  path: /Android
  title: Android环境
  order: 3
---


android-studio-2022.2.1.20 下载地址与安装配置教程【Win】
===


[**点我可“直接下载”android-studio-2022.1.1.21****【无需网盘】**](https://jj.kkfw.net/soft/android-studio/win/android-studio-2022.1.1.21-windows.zip)  
[**点我用“百度网盘下载”android-studio-2022.1.1.21**](https://pan.baidu.com/s/1TjKYHX9jQf8f9Vbzr1Ra9g?pwd=6666)


* * *

#### \*先解压压缩包

1、如果有解压密码，密码是：960906  
2、如果下载的文件不是zip格式，则忽略此步骤！  
解压的话，右键是需要有下图的**“解压到当前文件夹”**的。如果没有的话，请先在下方，下载解压工具，安装完解压工具再进行软件解压及安装操作！谢谢哈！  

* * *

[**64位系统解压工具：点我下载**](https://jj.kkfw.net/%E5%B7%A5%E5%85%B7/WinRAR%2064.exe)  
[**32位系统解压工具：点我下载**](https://jj.kkfw.net/%E5%B7%A5%E5%85%B7/winrar-x32.exe) ![](https://go.kkjs.net/wp-content/uploads/2023/11/017dc603bf4a6b14fac7937fa1b4aafd.png)

* * *

解压之后会得到如下两个文件，其中上面是环境安装包，下面是jdk。

## ![](https://go.kkjs.net/wp-content/uploads/2024/01/fcc7b7bc48e58eb628a7c6a112674f70.png)


## 一、安装步骤介绍

1.  卸载已有的Android Studio（没有安装过的小伙伴跳过此步骤）
2.  安装JDK，并配置环境变量
3.  安装Android Studio并进行自定义配置

## 二、卸载Android Studio（第一次安装的小伙伴可跳过）

只卸载编译器是不行的，还要将编译器的一些配置文件删掉，防止重新安装时跳过自定义配置。

![8fbacba60eef7b52af3615f03f8218d8](https://go.kkjs.net/wp-content/uploads/2023/08/8fbacba60eef7b52af3615f03f8218d8.png "8fbacba60eef7b52af3615f03f8218d8")

勾选 Android User Settings

![e7ce11e8e00b4e65956a880ba65af87d](https://go.kkjs.net/wp-content/uploads/2023/08/e7ce11e8e00b4e65956a880ba65af87d.png "e7ce11e8e00b4e65956a880ba65af87d")

之后一直点下一步，默认步骤就可以了  
之后进入user文件夹 C:user用户名

![c0ce94871a4442db6fcab626deb7340c](https://go.kkjs.net/wp-content/uploads/2023/08/c0ce94871a4442db6fcab626deb7340c.png "c0ce94871a4442db6fcab626deb7340c")

文件夹中找到一下几个文件进行手动删除：

![73ad1b59dbde9da29a75088b71b7db12](https://go.kkjs.net/wp-content/uploads/2023/08/73ad1b59dbde9da29a75088b71b7db12.png "73ad1b59dbde9da29a75088b71b7db12")

再进入到AppData文件夹中（也在这个文件夹里）‘找到这两个文件夹

![e38f97204f7f9d1877b054d25a419ee9](https://go.kkjs.net/wp-content/uploads/2023/08/e38f97204f7f9d1877b054d25a419ee9.png "e38f97204f7f9d1877b054d25a419ee9")

进入Local文件夹下的Google文件夹，删除以下文件夹

![3b9bea0696eb442378daad29212a8b64](https://go.kkjs.net/wp-content/uploads/2023/08/3b9bea0696eb442378daad29212a8b64.png "3b9bea0696eb442378daad29212a8b64")

再进入Roaming文件夹下的Google文件夹，删除以下文件

![7075196cf31a4ceae0f6be1fc2c13714](https://go.kkjs.net/wp-content/uploads/2023/08/7075196cf31a4ceae0f6be1fc2c13714.png "7075196cf31a4ceae0f6be1fc2c13714")

恭喜你！！这样就完成了Android Studio的卸载

## 三、安装JDK并进行环境配置

Android Studio由于版本问题只适配JDK8，所以包里也是JDK8，这样会在后续开发中出现各种奇奇怪怪的错误

1、双击JDK8 安装

![585784e7dab4377be9a551ef88c2d3e5](https://go.kkjs.net/wp-content/uploads/2023/08/585784e7dab4377be9a551ef88c2d3e5.png "585784e7dab4377be9a551ef88c2d3e5")

![c85858cda4f1073c7453f374feaaee55](https://go.kkjs.net/wp-content/uploads/2023/08/c85858cda4f1073c7453f374feaaee55.png "c85858cda4f1073c7453f374feaaee55")

然后去C盘或D盘 根目录创建一个 JDK8 的文件夹，自定义安装路径，方便后续环境配置。我这里在C盘为案例。

![51be3685a82456ea209f2b17b14a4d3f](https://go.kkjs.net/wp-content/uploads/2023/08/51be3685a82456ea209f2b17b14a4d3f.png "51be3685a82456ea209f2b17b14a4d3f")

这里路径修改为刚创建的文件夹 JDK8 然后点击确定。

![42904d72a110d2a0c488148c363f7a52](https://go.kkjs.net/wp-content/uploads/2023/08/42904d72a110d2a0c488148c363f7a52.png "42904d72a110d2a0c488148c363f7a52")![02653b0237538d01cf43b63b3c0076f8](https://go.kkjs.net/wp-content/uploads/2023/08/02653b0237538d01cf43b63b3c0076f8.png "02653b0237538d01cf43b63b3c0076f8")

改为路径，下一步

![7720c5abb2f689a8b73ec97b7f71cc6c](https://go.kkjs.net/wp-content/uploads/2023/08/7720c5abb2f689a8b73ec97b7f71cc6c.png "7720c5abb2f689a8b73ec97b7f71cc6c")

这里再点击更改为刚修改的文件夹 路径

![cd731fc7bae8be7d9ac858febcf470cd](https://go.kkjs.net/wp-content/uploads/2023/08/cd731fc7bae8be7d9ac858febcf470cd.png "cd731fc7bae8be7d9ac858febcf470cd")

改完下一步

![012ac49cf5ba205794b75482973605d9](https://go.kkjs.net/wp-content/uploads/2023/08/012ac49cf5ba205794b75482973605d9.png "012ac49cf5ba205794b75482973605d9")

出现任何提示，点击X。

### 2\. JDK配置环境变量

此电脑右击 ——> 选择高级系统设置

![24abf2f5ebf5723c53a10c5567cd733e](https://go.kkjs.net/wp-content/uploads/2023/08/24abf2f5ebf5723c53a10c5567cd733e.png "24abf2f5ebf5723c53a10c5567cd733e")

点击环境变量

![a027b59f2e648329f22f92f333c2e8ef](https://go.kkjs.net/wp-content/uploads/2023/08/a027b59f2e648329f22f92f333c2e8ef.png "a027b59f2e648329f22f92f333c2e8ef")

在系统变量中进行配置

![c233d6a458fc16dc16400877495f7b15](https://go.kkjs.net/wp-content/uploads/2023/08/c233d6a458fc16dc16400877495f7b15.png "c233d6a458fc16dc16400877495f7b15")

点击新建 添加JAVA\_HOME环境变量

![9c90128bf6816487b3fa0ae9fa97eb80](https://go.kkjs.net/wp-content/uploads/2023/08/9c90128bf6816487b3fa0ae9fa97eb80.png "9c90128bf6816487b3fa0ae9fa97eb80")

再编辑Path变量

![d2f16af7d7e26734f21bff9f8144a14a](https://go.kkjs.net/wp-content/uploads/2023/08/d2f16af7d7e26734f21bff9f8144a14a.png "d2f16af7d7e26734f21bff9f8144a14a")

添加%JAVA\_HOME%bin

![99a2dd04eeb7d24d1d39a0d9a72cea4e](https://go.kkjs.net/wp-content/uploads/2023/08/99a2dd04eeb7d24d1d39a0d9a72cea4e.png "99a2dd04eeb7d24d1d39a0d9a72cea4e")

### 3\. 验证安装

win+r 进入cmd模式

![95b210047967fb24844193ac5099e788](https://go.kkjs.net/wp-content/uploads/2023/08/95b210047967fb24844193ac5099e788.png "95b210047967fb24844193ac5099e788")

输入 java -version 出现如下显示证明配置成功

![8b353fd0e81589eee274a4e854ee4617](https://go.kkjs.net/wp-content/uploads/2023/08/8b353fd0e81589eee274a4e854ee4617.png "8b353fd0e81589eee274a4e854ee4617")

## 四、安装Android Studio

双击安装包，安装。

![4ce6dcbc53b48b7d9dbf789d9af7aef8](https://go.kkjs.net/wp-content/uploads/2023/08/4ce6dcbc53b48b7d9dbf789d9af7aef8.png "4ce6dcbc53b48b7d9dbf789d9af7aef8")

![12a40272a11bbbc76d570c467d9d3be5](https://go.kkjs.net/wp-content/uploads/2023/08/12a40272a11bbbc76d570c467d9d3be5.png "12a40272a11bbbc76d570c467d9d3be5")

勾选Android Virtual Device

![eb8b30ad59455f70cfd3f8dc81162a9c](https://go.kkjs.net/wp-content/uploads/2023/08/eb8b30ad59455f70cfd3f8dc81162a9c.png "eb8b30ad59455f70cfd3f8dc81162a9c")

自定义安装位置

![46d6425716f97811f6bad6fdfabab29f](https://go.kkjs.net/wp-content/uploads/2023/08/46d6425716f97811f6bad6fdfabab29f.png "46d6425716f97811f6bad6fdfabab29f")

![d32130c52ea27d53c01dbdef7597f796](https://go.kkjs.net/wp-content/uploads/2023/08/d32130c52ea27d53c01dbdef7597f796.png "d32130c52ea27d53c01dbdef7597f796")

等待

![b244d29308acb07b69d9960639b84c24](https://go.kkjs.net/wp-content/uploads/2023/08/b244d29308acb07b69d9960639b84c24.png "b244d29308acb07b69d9960639b84c24")

![a8018e1646062120d0296ae91bcec409](https://go.kkjs.net/wp-content/uploads/2023/08/a8018e1646062120d0296ae91bcec409.png "a8018e1646062120d0296ae91bcec409")

![43840764eced4d0358626ec6bcc5e633](https://go.kkjs.net/wp-content/uploads/2023/08/43840764eced4d0358626ec6bcc5e633.png "43840764eced4d0358626ec6bcc5e633")

![3a59344ef9dc4b0cee69ba3e19e03122](https://go.kkjs.net/wp-content/uploads/2023/08/3a59344ef9dc4b0cee69ba3e19e03122.png "3a59344ef9dc4b0cee69ba3e19e03122")

![1c8569444c5cae51a1b13d835915cbe5](https://go.kkjs.net/wp-content/uploads/2023/08/1c8569444c5cae51a1b13d835915cbe5.png "1c8569444c5cae51a1b13d835915cbe5")

![fc11c9f68dbae620c76c62ef3c840982](https://go.kkjs.net/wp-content/uploads/2023/08/fc11c9f68dbae620c76c62ef3c840982.png "fc11c9f68dbae620c76c62ef3c840982")

进入欢迎界面

![7e8dc3573f6acbf736301b42c6f34f4a](https://go.kkjs.net/wp-content/uploads/2023/08/7e8dc3573f6acbf736301b42c6f34f4a.png "7e8dc3573f6acbf736301b42c6f34f4a")

这一步很重要！！！这一步很重要！！！一定要选择Custom 自定义选项

![581b47312210ffeea011b1e6a09fec32](https://go.kkjs.net/wp-content/uploads/2023/08/581b47312210ffeea011b1e6a09fec32.png "581b47312210ffeea011b1e6a09fec32")

不要配置刚才下载的JDK，用它默认的就好

![06f14e49772c867543656b26be376e68](https://go.kkjs.net/wp-content/uploads/2023/08/06f14e49772c867543656b26be376e68.png "06f14e49772c867543656b26be376e68")

选择皮肤

![c3d2900d42222d44c300ec5c4d92d856](https://go.kkjs.net/wp-content/uploads/2023/08/c3d2900d42222d44c300ec5c4d92d856.png "c3d2900d42222d44c300ec5c4d92d856")

一定要在C盘之外的磁盘，创建一个新的SDK文件，要不然你的C盘会被占用好几个G

![672d0d61689a26fc95dd0f8ecada99f8](https://go.kkjs.net/wp-content/uploads/2023/08/672d0d61689a26fc95dd0f8ecada99f8.png "672d0d61689a26fc95dd0f8ecada99f8")

默认设置就好，这里配置的是虚拟机的运行内存，不用跟我的一样，根据您的实际内存自定义，一般四分之一到二分之一的实际内存都行。

![218f4f84f9aa146ab5c502f2d131cdcf](https://go.kkjs.net/wp-content/uploads/2023/08/218f4f84f9aa146ab5c502f2d131cdcf.png "218f4f84f9aa146ab5c502f2d131cdcf")

![3408c7736984750079d10b3ab11f4e1a](https://go.kkjs.net/wp-content/uploads/2023/08/3408c7736984750079d10b3ab11f4e1a.png "3408c7736984750079d10b3ab11f4e1a")

这两项都要点一下Accept，这就是为什么很多人finish不能点的原因，如果有三项的的话，那就三项都点Accept

![153397534dc9d56ffbd609a01b081cb4](https://go.kkjs.net/wp-content/uploads/2023/08/153397534dc9d56ffbd609a01b081cb4.png "153397534dc9d56ffbd609a01b081cb4")

等待

![515f9b32ded6e9d512c2912431a21c1e](https://go.kkjs.net/wp-content/uploads/2023/08/515f9b32ded6e9d512c2912431a21c1e.png "515f9b32ded6e9d512c2912431a21c1e")

![74ca670aaea11fe8dcc37a4811e7fbe3](https://go.kkjs.net/wp-content/uploads/2023/08/74ca670aaea11fe8dcc37a4811e7fbe3.png "74ca670aaea11fe8dcc37a4811e7fbe3")

至此，完成安装。

![5404c86d5544c0e86a1451add6e48b43](https://go.kkjs.net/wp-content/uploads/2023/08/5404c86d5544c0e86a1451add6e48b43.png "5404c86d5544c0e86a1451add6e48b43")

新建工程时建议在D盘或者其他C盘外创建一个新的空间，方便之后管理，Language默认是Kotlin，选择Java

![972ce75cc87ddc51f7f448acf00ac4dc](https://go.kkjs.net/wp-content/uploads/2023/08/972ce75cc87ddc51f7f448acf00ac4dc.png "972ce75cc87ddc51f7f448acf00ac4dc")

由于众所周知的原因，Android SDK官方镜像在国内无法访问。

请自行百度

<!-- ## Android Studio设置国内镜像代理 -->

<!-- 我们只做软件下载和安装服务，谢谢理解。 -->
