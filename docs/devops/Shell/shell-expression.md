---
title: Shell-表达式
order: 23
nav:
    title: DevOps系列
    path: /DevOps
    order: 7
group:
  path: /Shell
  title: Shell
  order: 2
---

# 表达式

## 文件表达式

| 表达式                        | 说明                                           |
| :---------------------------- | :--------------------------------------------- |
| `-e <filename>`               | 如果 `<filename>` 存在，则为真                 |
| `-d <filename>`               | 如果 `<filename>` 为目录，则为真               |
| `-f <filename>`               | 如果 `<filename>` 为常规文件，则为真           |
| `-L <filename>`               | 如果 `<filename>` 为符号链接，则为真           |
| `-r <filename>`               | 如果 `<filename>` 可读，则为真                 |
| `-w <filename>`               | 如果 `<filename>` 可写，则为真                 |
| `-x <filename>`               | 如果 `<filename>` 可执行，则为真               |
| `-s <filename>`               | 如果文件长度不为 0，则为真                     |
| `-h <filename>`               | 如果文件是软链接，则为真                       |
| `<filename1> -nt <filename2>` | 如果 `<filename1>` 比 `<filename2>` 新，则为真 |
| `<filename1> -ot <filename2>` | 如果 `<filename>` 比 `<filename3>` 旧，则为真  |

## 整数变量表达式

| 表达式 | 说明     |
| :----- | :------- |
| `-eq`  | 等于     |
| `-ne`  | 不等于   |
| `-gt`  | 大于     |
| `-ge`  | 大于等于 |
| `-lt`  | 小于     |
| `-le`  | 小于等于 |

## 字符串变量表达式

| 表达式            | 说明                                                      |
| :---------------- | :-------------------------------------------------------- |
| `if [ $a = $b ]`  | 如果 `$a` 等于 `$b`，则为真（字符串允许使用赋值号做等号） |
| `if [ $a != $b ]` | 如果 `$a` 不等于 `$b`，则为真                             |
| `if [ -n $a ]`    | 如果 `$a` 非空（非 0），返回 0（`true`）                  |
| `if [ -z $a ]`    | 如果 `$a` 为空，则为真                                    |
| `if [ $a ]`       | 如果 `$a` 非空，返回 0（与 `-n` 蕾丝）                    |
