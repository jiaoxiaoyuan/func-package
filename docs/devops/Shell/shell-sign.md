---
title: Shell-特殊符号
order: 22
nav:
    title: DevOps系列
    path: /DevOps
    order: 7
group:
  path: /Shell
  title: Shell
  order: 2
---

# 特殊符号

## 井号

## 账户 Home 目录

## 分号

在 Shell 中，担任 **连续指令** 功能的符号就是分号（`;`）。

```bash
cd ~/backup ; mkdir startup ; cp ~/.* startup/.
```

## 连续分号

## 逗号

## 单引号

## 双引号

## 倒引号

## 逗点

## 斜线

## 倒斜线

## 管道

管道和重定向

管道与管道符

- 管道和信号一样，也是进程通信的方式之一
- 匿名管道（管道符）是 Shell 编程经常用到的通信工具
- 管道符是 `|`，将前一个命令执行的结果传递给后面的命令

```bash
ps | cat

echo 123 | ps
```

## 惊叹号

## 冒号

## 问号

## 星号

## 次方运算

## 钱号

## 指令群组

## 大括号

## 中括号

## 逻辑符号

逻辑符号分两种：**或逻辑符** 和 **并逻辑符**。

## 后台工作

## 特殊字符

特殊字符：一个字符不仅有字面意义，还有元意（meta-meaning）

- `#` 注释
- `;` 分号
- `\` 转义符号
- `"` 和 `''` 符号

### 转义符号

单个字符前的转义符号：

- `\n`、`\r`、`t` 单个字母的转义
- `\$`、`\"`、`\\` 单个非字母的转义

## 赋值运算符

- `=` 赋值运算符，用于算数赋值和字符串赋值
- 使用 `unset` 取消为变量的赋值
- `=` 除了作为赋值运算符还可以作为测试操作符

## 算数运算符

基本运算算符：`+`、`-`、`*`、`/`、`**`、`%`

使用 `expr` 进行运算：

```bash
expr 4 + 5
```

## 数字常量

数字常量的使用方法：

```bash
let “变量名=变量值”
```

- 变量值使用 `0` 开头为八进制。
- 变量值使用 `0x` 开头为十六进制

## 双圆括号

双圆括号是 `let` 命令的简化：

```bash
(( a = 10))

(( a++ ))

echo $(( 10 + 20 ))
```

## 重定向符号

一个进程默认会打开标准输入、标准输出、错误输出三个文件描述符。

输入重定向符号：`<`

```bash
# 先编辑文本文件，并随便输入字符后保存
vim a.txt

# 将 a.txt 读入到 var2 变量中，代替手动输入
read var2 < a.txt

# 输出 var2 变量，打印出 a.txt 内容
echo $var2
```

输出重定向符号：`>`、`>>`、`2>`、`&>`

- `>`：相当于 `1>`，代表从左到右的重定向方向
- `>>`：代表追加，也就是不改变重定向目标文件原有的内容，追加在后面
- `2>`：错误重定向

接上例子

```bash
# 将变量 var2 值输出到 b.txt
echo $var2 > b.txt

# 查看 b.txt 验证
cat b.txt
```

```bash
# 把cmd命令的输出重定向到文件file中。如果file已经存在，则清空原有文件，使用bash的noclobber选项可以防止复盖原有文件。
* cmd > file

# 把cmd命令的输出重定向到文件file中，如果file已经存在，则把信息加在原有文件後面。
* cmd >> file

# 使cmd命令从file读入
* cmd < file

# 从命令行读取输入，直到一个与text相同的行结束。除非使用引号把输入括起来，此模式将对输入内容进行shell变量替换。
# 如果使用<<- ，则会忽略接下来输入行首的tab，结束行也可以是一堆tab再加上一个与text相同的内容，可以参考後面的例子。
# * cmd << text

# 把word（而不是文件word）和後面的换行作为输入提供给cmd。
* cmd <<< word

# 以读写模式把文件file重定向到输入，文件file不会被破坏。仅当应用程序利用了这一特性时，它才是有意义的。
* cmd <> file

# 功能同>，但即便在设置了noclobber时也会复盖file文件，注意用的是|而非一些书中说的!，目前仅在csh中仍沿用>!实现这一功能。
* cmd >| file

# 把文件"filename"截断为0长度.# 如果文件不存在, 那么就创建一个0长度的文件(与'touch'的效果相同).
: > filename

# 把输出送到文件描述符n
cmd >&n

# 把输出 到文件符m的信息重定向到文件描述符n
cmd m>&n

# 关闭标准输出
cmd >&-

# 输入来自文件描述符n
cmd <&n

# m来自文件描述各个n
cmd m<&n

# 关闭标准输入
cmd <&-

# 移动输入文件描述符n而非复制它。（需要解释）
cmd <&n-

# 移动输出文件描述符 n而非复制它。（需要解释）
cmd >&n-
```

`/dev/null` 在 Unix 系统中时一个特殊的设备文件，它丢弃一切写入其中的数据（但报告写入操作成功），读取它则会立即得到一个 EOF。

用处：禁止标准输出

```bash
# 文件内容丢失，而不会输出到标准输出，禁止标准错误
cat $filename > /dev/null


# 表示 2 的输出重定向等同于 1，那么文本标题的语句 1>/dev/null，首先表示标准输出重定向到空设备文件，也就是不输出任何信息到终端，说白了就是不显示任何信息
2>&1

#
```
