---
title: scrcpy安卓屏幕镜像工具
order: 12
nav:
  title: 文档
  path: /other
  order: 100
group:
  path: /env
  title: 环境配置
  order: 3
---

安卓投屏神器 Scrcpy 安装与使用（支持 Mac、Windows、Linux）
===



### 一、简介

+   [Scrcpy](https://scrcpy.org/download/) 可以在电脑上通过无线投屏操作安卓手机对于测试安卓设备非常方便，省去了电脑到安卓设备端来回奔波。
    
+   它支持将 `Android` 设备屏幕投放到 `Windows`、`macOS` 或 `Linux` 上。
    

### 二、安装

+   安装 `Scrcpy`，各平台安装方式
    
    +   [Windows - 64位 - 官方下载地址](https://onboardcloud.dl.sourceforge.net/project/scrcpy.mirror/v2.0/scrcpy-win64-v2.0.zip)
        
    +   [Windows - 32位 - 官方下载地址](https://liquidtelecom.dl.sourceforge.net/project/scrcpy.mirror/v2.0/scrcpy-win32-v2.0.zip)
        
    +   Linux：`执行 $ apt install scrcpy 进行安装`
        
    +   macOS：`执行 $ brew install scrcpy 进行安装`，附：[Mac Homebrew 安装与卸载](https://blog.csdn.net/zz00008888/article/details/113867051)
        
    
    最好将工具配置成环境变量，可以全局使用，例如 `Windows` 安装后，需要启动，也可以进入软件下载的文件夹中使用指令执行命令。
    
+   [安装 adb](https://blog.csdn.net/zz00008888/article/details/133696691)
    
    只有通过 `adb` 连接上安卓设备才能使用投屏。
    
    如果本地有安卓环境，则可以使用本地的 `adb`，如果没有，则可以看下文章内的 `单独安装 adb` 文章，安卓好后，需要配置好环境变量，方便全局使用。
    
    ```shell
    # 附 mac 单独安装，如果有安卓环境，则没必要单独安装，其他平台看文章详情吧。
    $ brew install android-platform-tools
    ```
    

### 三、使用

+   [adb 常用命令](https://blog.csdn.net/weixin_45544843/article/details/121952910)。
    
+   按上面步骤安装好后，开始尝试投屏手机，列一下步骤
    
    +   有线连接电脑跟手机，投屏方式：
        
        ```shell
        # 1、首先将手机与电脑连接。
        # 2、打开手机的开发者模式 并 开启USB调试，这里每个手机的位置不完全相同，请自行百度。
        # 3、确保手机与电脑连接，在弹出的USB连接方式选择传输文件，没有连接成功重新接入下，可以通过下面命令查看是否连接成功：
        # 输出的 List of devices attached 下面有设备信息表示成功，没有表示没连接成功
        $ adb devices
        List of devices attached
        7f58ca3 device
        # 4、开始投屏
        $ scrcpy
        # 5、结束投屏，中断命令即可
        ```
        
    +   无线连接电脑跟手机，投屏方式：
        
        ```shell
        # 1、前期还是需要有线连接获取设备信息，首先将手机与电脑连接。
        # 2、打开手机的开发者模式 并 开启USB调试，这里每个手机的位置不完全相同，请自行百度。
        # 3、确保手机与电脑连接，在弹出的USB连接方式选择传输文件，没有连接成功重新接入下，可以通过下面命令查看是否连接成功：
        # 输出的 List of devices attached 下面有设备信息表示成功，没有表示没连接成功
        $ adb devices
        List of devices attached
        7f58ca3 device
        # 4、确保电脑和手机在同一网络（wifi）下，查看手机 IP 信息：
        #   1）、手机查询，查看手机连接的 wifi 信息中 IPv4 地址。（例如：10.0.90.0）
        #   2）、命令查询，需连接
            # 进入手机命令环境
            $ adb shell
            # 查看手机设备信息，找到 wlan0 中 inet addr: xxx.xxx.xxx.xx 就是当前设备IP地址
            $ ifconfig
            # 退出手机命令环境
            $ exit
        # 5、连接手机主要还是为了设置手机调试端口，等下方便无线访问，先在就可以拔掉数据线了
        $ adb tcpip 5555
        # 6、连接手机
        $ adb connect 10.0.90.0:5555
        # 7、开始投屏
        $ scrcpy
        # 8、结束投屏，中断命令即可，如果下次不在需要，还需要断开连接
        # 或 $ adb disconnect 10.0.90.0:5555
        $ adb disconnect
        ```
        

### 四、更多指令

+   文件拖放安装 `APK`
    
    将 `APK` 文件 (文件名以 `.apk` 结尾) 拖放到 `scrcpy` 窗口来安装。不会有视觉反馈，终端会输出一条日志。
    
+   多设备连接的情况
    
    当电脑通过 `adb` 连接了多个安卓设备后，启动 `Scrcpy` 就会报如下错误：`ERROR: Multiple (2) ADB devices` 表示无法选择投屏哪台设备，此时可断开 `adb` 连接的其他设备或者为 `Scrcpy` 选择一个投屏设备。
    
    查看已连接的设备：
    
    ```shell
    $ adb devices
    List of devices attached
    SKPN45IF8DBMRG59        device
    192.168.5.126:5555      device
    ```
    
    选择其中一个设备，可以执行以下命令连接其中一个设备：
    
    ```shell
    $ scrcpy --serial SKPN45IF8DBMRG59
    # 或
    $ scrcpy -s SKPN45IF8DBMRG59
    ```
    
+   投屏状态下录屏
    
    ```shell
    $ scrcpy --record file.mp4
    # 或
    $ scrcpy -r file.mkv
    ```
    
+   非投屏状态下录屏
    
    ```shell
    $ scrcpy --no-display --record file.mp4
    # 或
    $ scrcpy -Nr file.mkv
    ```
    
+   显示触摸
    
    ```shell
    $ scrcpy --show-touches
    # 或
    $ scrcpy -t
    ```
    
+   防止设备休眠
    
    ```shell
    $ scrcpy --stay-awake
    # 或
    $ scrcpy -Sw
    ```
    
+   关闭手机屏幕，投屏操作下关闭手机屏幕，只在电脑上看到手机的亮屏状态，可以使用快捷键 `Ctrl + O`，或者尝试以下命令
    
    ```shell
    $ scrcpy --turn-screen-off
    # 或
    $ scrcpy -S
    ```
    
+   窗口置顶，设置电脑上的手机界面置顶在最上层，方便在进行其他操作时也可以看到手机画面
    
    ```shell
    $ scrcpy --always-on-top
    # 或
    $ scrcpy -T
    ```
    
+   限制分辨率，设备分辨率越高，延迟越大，用这个命令可以限制分辨率大小，保证性能
    
    ```shell
    $ scrcpy --max-size 1024
    # 或
    $ scrcpy -m 1024
    ```
    
+   调整码率，默认码率是 `8M`，码率越高，画质越好，同时延迟越大，可自行调整
    
    ```shell
    $ scrcpy --bit-rate 2M
    # 或
    $ scrcpy -b 2M
    ```
    
+   更多指令参考文章：
    
    [https://blog.csdn.net/weixin\_42167233/article/details/131164766](https://blog.csdn.net/weixin_42167233/article/details/131164766)  
    [https://blog.csdn.net/weixin\_43204579/article/details/129611713](https://blog.csdn.net/weixin_43204579/article/details/129611713)  
    [https://blog.51cto.com/u\_15389271/6193509](https://blog.51cto.com/u_15389271/6193509)
