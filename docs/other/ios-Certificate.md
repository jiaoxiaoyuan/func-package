---
title: IOS开发证书配置(Xamarin.Forms)
order: 6
nav:
  title: 文档
  path: /other
group:
  path: /ios
  title: IOS环境
  order: 2
---

IOS开发证书配置(基于Xamarin.Forms, 其他开发环境配置大同小异)
===

## 一、前期需要准备的工具

**Xcode** ：用于设置、下载、上传本机证书。安装了Xcode之后，Visual studio for mac的一些功能才正常使用。

**Visual studio  2022 for mac 预览版** ：开发环境，不必多说。第一次配置我用的上Visual Studio Community for Mac，配置过程中没发现什么区别。下载地址：  [Visual Studio 2022 for Mac 预览](https://visualstudio.microsoft.com/zh-hans/vs/mac/preview/)。



Android 文件传输：可以直接将编译好的apk文件发布到Andriod手机上，B测试时方便快速发布。  下载地址：Android File Transfer-Android File Transfer mac下载 V1.0.12-PC6苹果网     备用百度网盘链接: https://pan.baidu.com/s/1iT0C_ZCpY2r1XqGc-KjF4g 提取码: 2bfl

[
](https://blog.csdn.net/icerose/article/details/122806175)

**爱思助手**：可以将编译好的app直接安装到手机上，不用上传到APP store，方便测试。 下载地址：[爱思助手官网_苹果助手_苹果刷机助手_苹果越狱助手](https://www.i4.cn/)



**Transporter**：可让您以简单轻松的方式将内容交付到 Apple store的工具，比iTunes Connect 好用。（当时研究了3种上传工具，这个最好用）下载地址： [‎App Store 上的“Transporter”](https://apps.apple.com/cn/app/transporter/id1450874784)



安装完毕后如下图所示：

![img](./assets/1656576376213-24bb9aa0-d470-4a2a-a672-90a9b3f34229.png)

## 二、申请开发者证书和发布证书

相对于Android签名分发，Apple要复杂的得多，所以先说介绍Apple签发配置。

1、开发测试时用到的各项配置文件及作用说明

网上教程很多截图都是老版的Developer的，这里结合新版截图，先对说IOS开发中各项配置的文件从就用角度做简要说明（具体的申请程程在后文再详细介绍）。



首先要说明的中文developer Apple Developer (简体中文) 文站只是一个 摆设，所以的操作都发进入英文的“帐户”页面才能操作。

![img](./assets/1656576469467-54a47325-3b7d-4016-8a69-1b52d152e28b.png)

![img](./assets/1656576494366-e3f8a84b-4110-41d0-8367-0334c83ecb46.png)

进入证书、身份和配置文件页面。前期开发和发面主要是用到Certificates, Identifiers 、Profiles为三项。

![img](./assets/1656576525169-3604bf57-7dd5-425e-8f5e-e82462c033eb.png)

### （1）Certificate

​        针对于“人”的身份证，将来可以溯源APP是哪个企业或个人开发的，或者开发者在APP用应用了哪些特殊服务（例如消推送服务）。

从开发者要度来说，证书主要有3大类：

​        开发者证书（Development），安装了这个证书的mac计算机才能进行开发。

​        分发证书（Distribution），发布App时使用，只有能包含了Distribution证书的APP才能在上传到到App Store或是发布给其它人进行B测试，才能在非开发环境的系统上正常运行。

​         服务证书（Services），当开发者用到比较敏感的服务时，才需要添加这类证书。

具体细分说明如下：

![img](./assets/1656576605328-9f8e0120-7742-45a8-9070-c63da3fcb346.png)

### （2）Identifiers

针对**APP**的身份证，是每个APP或是给相关APP的都至少有一个标识，如果用到某项特别的服务还有可能需要添加服务的身份标识（例如消推送服务）。  Identifiers也有多种类型，一般开发APP主要用到的是**“App IDs ”**。

![img](./assets/1656576639380-04133f3a-c27f-4481-9fc7-a31f2b77772e.png)

APP IDs分为2类，Explicit（专用型）和 Wildcard（通用型）

Explicit（专用型）与APP是一一对应的，Wildcard（通用型）可以给多APP证明，是一对多的关系，但是Wildcard（通用型）有很多权限用不了。所以，**一般选用Explicit（专用型）即可**。

![img](./assets/1656576669638-6f93d71e-e1d5-48c5-89a9-91d39ff8203c.png)

![img](./assets/1656576684347-6741f64a-50d6-430b-9e7e-a9e415a0c6c4.png)

### （3） Devices （可用设备）

只有添加到设备列表中的设备才可以有进行真机测试或者测试，否则在真机上运行时会提示“找不到证书”，然后退出。在开发时，相关证书都配置无误后，连接上真机调试程序，Visual Studio 会自动进行Devices注册，不需要手工注册。设备一旦注册不可以再删除，只能禁用。只能等到每年688元续费时，再申请删除。（当时我在删除的坑里找了好半的半天的安钮...）

![img](./assets/1656576802348-b768cc72-fe44-4b8f-bb0e-84a7535ecf6c.png)

### （4） Profiles（配置文件）

就是把 Certificates、Identifiers、Devices信息打包生成的一个文件，用于开发、发布、安装和运行。分为Development和Distribution两大类，其实Development类Xcode会自动生成，通常分发时主要用Distribution即可。Distribution中主要用两类：Ad Hoc（内部分发，用于B测试）和App Store（发布到App Store）

![img](./assets/1656576846245-6cae616b-cf58-4e04-a9d2-6dfca07459d6.png)

完整的Profile文件内容如下：

![img](./assets/1656576867943-289f59b9-d654-4c11-ab97-2c4e38a891de.png)

## 三、在Visual Stuio 2022 for Mac中 Apple及Android证书申请及配置流程说明

### 1、申请本地密钥

申请本地密钥文件，申请证书时需要上传，本地密钥文件即可以用于开发证书也可以用分发证书。

![img](./assets/1656577038543-2818b123-9ed9-4170-a7a2-3e79ccfd094b.png)

![img](./assets/1656577049428-93992e38-7523-4817-8d7e-83706eebe5c8.png)

### 2 、在Visual studio 2022 for mac中登录AppleID并生成证书

(1)在Visual Studio 2022 for Mac 中可以直接一键生成证书（比登录developer网站方便很多）

需要提醒的是通过Apple ID登录后，并不能马上在”Apple开发者帐户“表中显示出来。退出VS后，重新进入才会显示。如果不行的就多操作几次，或者先在Xcode登录一下，再回到Visual Studio

![img](./assets/1656577298003-3b6c273a-b2d8-43c0-935f-445012fb081c.png)

![img](./assets/1656577324301-3177d6f8-b7ac-4098-b432-72af84c2dc77.png)

(2)登录到 Apple Developer   [Sign In - Apple](https://developer.apple.com/account/) 网站 查看开发者证书和分发证书。

![img](./assets/1656577351717-ea3dffb6-989e-4699-8149-b38d4f7be9ef.png)

![img](./assets/1656577359852-c06a0ef9-12e0-4605-b222-31a951ac0431.png)

### 3、在Visual studio 2022 for mac中创建Android开发者密钥

![img](./assets/1656577394171-4ac387ee-9abf-4488-b451-d0b13833967d.png)

输入证书信息后，点击OK按钮 

![img](./assets/1656577417553-c1c635d3-d45e-4a6d-819c-191affa0c8a2.png)

密码生成后，可以打开访达，将密钥保证起来，以备以后发生重装系统之类的事情后导入。

![img](./assets/1656577438616-a9134d46-feab-4890-894e-52260762f540.png)

至此，开发前的配置工作，执行完毕，可以建立新的项目准备开发。

## 四、在Visual Stuido 2022 for Mac 中建立夸平台项目及真机测试设置说明

### 1、新建多平台应用

![img](./assets/1656577486206-4b768e21-6d0d-4713-8146-a3a109092db4.png)

**Organization ID 填写的内容要记录下来，以后在Developer网站申请Identifier时需要。**

![img](./assets/1656577505070-700af529-d158-444a-9b06-cd5c9cfef113.png)

![img](./assets/1656577514777-10da84ba-76a5-4d0e-8c67-3c0bed779a2a.png)

### 2、设定启动的调试程序，准备真机测试

#### 1）调试选项说明

![img](./assets/1656577549436-cfa48f12-1b52-4f9c-8097-10f7aea89185.png)

在模拟器中运行效果如下图所示

![img](./assets/1656577570730-ecafe99d-04a5-47b0-9039-2bab4890d2d2.png)

#### 2）连接Iphone手机真机调试

在developer网站，添加新的项目

![img](./assets/1656577629519-de55adc9-3579-4747-98c1-064d70958323.png)

![img](./assets/1656577659736-ca002805-5ffd-498a-bb41-ad079db9524a.png)

![img](./assets/1656577674209-24f99f02-f7c8-4dee-8fc1-22e74bf2d565.png)

![img](./assets/1656577687118-f712a817-0fc7-449c-8ad1-74f8dc8c5009.png)

![img](./assets/1656577694458-893ee31f-e022-44c4-a32f-cae46b3d9a3e.png)

项目建立完成后，生成配置文件。配置文件至少需要3个，develop（开发用配置文件，其中定义了哪些设备可以开发时真机调试）、Ad  Hoc（内部测试配置文件，其中定义了哪些设备可以进运行B测试版的app）、App Store（发布到App Store用）。添加新配置文件的过程类似，下文件添加develop为例。

![img](./assets/1656577715753-3b0bb0d2-6abb-435a-afaa-030bb1141736.png)

![img](./assets/1656577724874-68fc246e-4885-4054-9d46-0e783e5cf2f2.png)

![img](./assets/1656577736785-6971721c-bb99-467d-8976-8171a3a38936.png)

![img](./assets/1656577746233-161be5a1-f838-4365-9a11-c74feb3c2ed6.png)

![img](./assets/1656577755220-d6e4c33c-e69e-454d-8260-f01956392376.png)

![img](./assets/1656577766867-930fb7a3-576b-483a-9217-8f1ce2c9f726.png)

全部配置文件全部生成后，如下图所示：

![img](./assets/1656577782105-edffda87-000f-40bd-aeb3-8caf2c2d3e59.png)

打开Visual Studio 2020 for Mac 查看 配置文件是否已下载到本地。通常是自动下载的，如果没有自动同步，则需要手工下载。

![img](./assets/1656577820799-0c1e8839-018a-4874-9c02-b46367e08399.png)

关闭“首先项”窗口，将真机连接到计算机，开发始测试。如果接入电脑后，手机未在列表中显示，请检查在手机上是否设置为“信任”此计算机； 重新插拔电脑数据；稍等自动刷新等操作。

![img](./assets/1656577844208-fa706a2d-7c8b-461e-8415-b9478280a790.png)

首次运行进，可能会弹出如下窗口，密码文本框中输入录入计算机的密码即可。

![img](./assets/1656577859416-b45e9725-9ee8-4775-a50e-5cca4c966c2a.png)

实际运行效查如下图所示

![img](./assets/1656577874628-d17b14a1-1043-4bf0-a00f-17e3d9877c24.png)

#### 3）连接Android手机真机调试

（可能是预览版还是我设置的原因，在Visual Studio 2022 for Mac下出现APP可以自动安装到真机但不是卡死（如下图）和Androi版本错与Xamarin版本不匹配的问题，同一个解决方案在2019版却没有这些问题。以下操作步骤在Visual Studio 2019 for Mac中进行，具体操作和菜单位置2019版和2022版基本一致）

![img](./assets/1656577947216-3f396d49-3751-4271-9112-bd407ce5a56f.png)

[
](https://blog.csdn.net/icerose/article/details/122806175)

手机端启动开发者选项，设置如下。

![img](./assets/1656577990102-327251b0-04c2-41aa-a966-423bdeb681fe.png)

PS：华为手机连接之后是无法识别的（当时以为是我开发者设置的问题，浪费了很多时间，最后确认设置没有问题，还是连不上，不知道是不是为华操作系统的原因。）。我找朋友压榨来的小米5可以正深常识别。

在Visual Studio中设置识别的Android手机，注意如果Visual Studio 窗口上端处于窗口顶端，那么要点击下图所示的上箭头位置，才能显示出来。（此坑也害得本人，各种查找为才能手机连接之后V S看不到...浪费很多时间。）

![img](./assets/1656578021783-1a46e441-e651-49b8-8f78-32682f61474e.png)

选择连接的设备

![img](./assets/1656578043491-aedeee2d-d2b7-4012-899c-07f47c3fcf0c.png)

运行效果如下

![img](./assets/1656578061587-a8553b3d-a913-4789-8cce-9756df21d566.png)

## 五、内部分发测试

APP开发完毕之后，需要分发给内部人员测试，这个时期程序升级较多而且用户量较少，可以能过考备分发的方式进行。

### 1、 iphone分发

能运行分发版本APP必须是AdHoc证书中包含的设备（不知道AdHoc是什么证书，以及如何添加设备请阅读本文前边的内容）

![img](./assets/1656578115924-4f435b59-4a63-44e5-bb09-39039223e632.png)

#### （1）编译IOS项目，签名发布到本地

第一次发布时需要新建立存档，第二次发布时可以通过“查看存档”进行发布。

![img](./assets/1656578146176-a6622dc5-524d-4435-abec-618ac1770926.png)

![img](./assets/1656578154316-28b6b12f-061e-4acb-8b7e-41faf5613b38.png)

![img](./assets/1656578163989-87b19f31-c84d-4b97-9281-f917850d68d0.png)

![img](./assets/1656578175168-e2a3daba-cab8-4c72-b7f3-b0ba74690dd6.png)

![img](./assets/1656578184243-940507f6-c156-4809-8c96-66345d8e5069.png)

![img](./assets/1656578201774-e0d1ae72-6f8f-44d1-80b4-6ead08520582.png)

#### （2) 通过爱思助手将程序安装测试设备中

![img](./assets/1656578217212-4d203103-0a0e-4ae4-80f4-727b82527651.png)

确保手机连接成功

![img](./assets/1656578236731-41ebc677-617b-45f6-b9dd-e99552064bbf.png)

![img](./assets/1656578243552-a08da7ec-a484-465d-964a-4b5d32bc7f21.png)

![img](./assets/1656578252888-874b5266-71eb-4d34-849f-c86bdf61f6c4.png)

![img](./assets/1656578270034-641b0479-f19b-48a5-a42a-51b05c394667.png)

### 2、Android分发

### 1）编译Android项目，并发布到本地

![img](./assets/1656578298366-3d58d2e1-d22a-424f-b0dd-827e71f230d0.png)

![img](./assets/1656578308244-5eac60e3-2007-4e2e-8754-3a5b96891cb6.png)

![img](./assets/1656578317866-b7ae7384-f5df-4594-a46b-6edd5d6aab5c.png)

![img](./assets/1656578328817-3a31e077-3cea-4e14-92cd-b52b7fc52da0.png)

选择文件保存的位置

![img](./assets/1656578347034-4d46f7e5-005b-46e5-875f-50b5ff9ecfa0.png)

![img](./assets/1656578355717-3694cea1-4ce5-45cc-820a-f737878859df.png)

![img](./assets/1656578365876-5698bc6e-5cfb-442e-b04a-74d4574afb12.png)

共生成2个文件，一个含有签名，另一个不含签名。

![img](./assets/1656578384198-e11c71de-670d-4e21-97ad-fc784ba2998b.png)

### 2)通过Android文件传输入App，将程序传入Android手机

启动Android文件传输APP，将手机接入电脑

![img](./assets/1656578408902-5da1c086-710e-4218-adc7-e078433eb7c4.png)

![img](./assets/1656578501534-a2556d07-c7f8-4417-9551-0d0678d059f2.png)

![img](./assets/1656578512154-f2cb4854-2305-4a7e-8a39-4a0cf116b8af.png)

新建一个文件夹（推荐文件夹命以以ZZ开头，在手机中比较容易找到），并将签了名的apk文件考到andriod手机中。

![img](./assets/1656578530056-b1f8f072-4fb7-4b2d-9f22-50528fe82be1.png)

在手上通过文件管理器进行安装（各款手机安装流程可能不相同，尽下图仅从参考） 

![img](./assets/1656578554385-eca519c8-9f03-477f-ad03-1503996d5ba7.png)

 安装、运行效果如下

![img](./assets/1656578579039-68e94575-7756-4f16-b5ca-152b38c9b378.png)

## 六、 App Store 上架

因为Android的应用市场较多，具体上架流程不同，无多做说明。本文中对iso App上架到 App Store作说明。

### 1、编译上架App Store 的签名程序

![img](./assets/1656578719525-d2a9810f-c085-49ea-b869-a2aa1cccde3e.png)

![img](./assets/1656578731155-3827f4f7-1bb4-46ed-9354-d3358d6eb91a.png)

![img](./assets/1656578741764-6e7b948c-3d14-4a05-ad02-0d4e77956694.png)

![img](./assets/1656578758824-d93ed72a-36ba-4d02-a3d1-f2938ad2ebf1.png)

![img](./assets/1656578824684-247046f1-1ff2-48e8-a805-49aa47d10349.png)

![img](./assets/1656578834744-f34a0e65-a419-4167-9815-a45f8871f025.png)

### 2、在Developer网站中建立新的App Store Connet程序

注意：需要重新退回Developer 英文网站根页出下，才能找到链接。

网址是：[Sign In - Apple](https://developer.apple.com/account)

![img](./assets/1656578890460-04c42ff8-9275-477c-8c5f-80e24cece6db.png)

![img](./assets/1656578959080-93d00c10-6116-4b71-b094-83743c4a0eda.png)

![img](./assets/1656579101753-1e794b67-6221-4652-aa55-e914f82870b1.png)

![img](./assets/1656579112128-0d154334-8636-4761-948f-c490502527b8.png)

![img](./assets/1656579123948-a653fe2b-67d5-4d5b-9719-fca4a20baa31.png)

 根据实际情况输入需要信息后，点击**“保存”，****注意此时还没有上传App****不要“提交”**

### 3、 通过**Transporter上传APP程序**

![img](./assets/1656579227077-f3187b02-6f1f-4f45-a21b-b5c3a0c67605.png)

![img](./assets/1656579235004-71d935f6-8c1d-4830-a201-7738b3802646.png)

![img](./assets/1656579250300-a0b47302-3aff-4e7d-ab29-81bc5f048699.png)

![img](./assets/1656579260770-e3b709bf-2498-415b-9ad9-f7cc976ec09b.png)

![img](./assets/1656579279459-cc4836f4-868f-4ed5-83c8-f005dfbe3747.png)

![img](./assets/1656579286670-b41aa2de-f526-4f73-8314-37c632d86009.png)

上传成功后，回到Develoer网站，提交 等待审核。


![img](./assets/1656579303585-908a07ff-487a-45ed-b5e2-9a2d120d48d8.png)

各类文件的详细说明请查看 [iOS 申请证书，Certificates, Identifiers &Profiles 简介 - 简书](https://www.jianshu.com/p/ef61c4365e7f)

[
](https://blog.csdn.net/icerose/article/details/122806175)
