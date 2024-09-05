---
title: editorconfig统一项目代码风格的配置文件
order: 13
nav:
  title: 文档
  path: /other
  order: 100
group:
  path: /env
  title: 环境配置
  order: 3
---

`.editorconfig`统一项目代码风格的配置文件
===

## 什么是.editorconfig文件？

`.editorconfig`文件是编辑器配置文件的标准文件，它定义了编辑器如何格式化代码，如何检查代码，如何编码等。
`.editorconfig` 是一个用于统一代码风格的配置文件，它可以被多个编辑器和IDE识别和应用。通过在项目中添加一个名为 .editorconfig 的文件，可以确保团队成员在不同的编辑器中编写代码时遵循相同的代码风格和规范。


## .editorconfig文件的基本结构
.editorconfig 文件采用简单的键值对格式，每个键值对表示一个配置项。下面是一个基本的 .editorconfig 文件结构：
```shell
root = true
[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

## .editorconfig文件参数详解
以下是常用的 .editorconfig 参数及其可选值的详细解释：
 - `root`：表示该文件是项目的根配置文件，编辑器在查找配置时会从当前文件夹开始逐级向上查找，直到找到该文件为止。可选值为 true 或 false。

 - `[*]`：表示下面的配置适用于所有文件。

 - `charset`：设置文件的字符编码。可选值为 utf-8、utf-8-bom、latin1 等。

 - `indent_style`：设置缩进风格。可选值为 tab（制表符）或 space（空格）。

 - `indent_size`：设置每个缩进级别的空格数。可选值为整数，例如 2 或 4。

 - `end_of_line`：设置换行符的类型。可选值为 lf（Unix 风格）、cr（Mac 风格）或 crlf（Windows 风格）。

 - `insert_final_newline`：设置是否在文件末尾插入一个空行。可选值为 true 或 false。

 - `trim_trailing_whitespace`：设置是否删除行末尾的空白字符。可选值为 true 或 false。

## 其他可选参数
除了上述常用参数，还有一些其他可选参数可以根据项目的需求进行设置：

 - `tab_width`：设置制表符的宽度。可选值为整数。

 - `max_line_length`：设置每行的最大字符数。可选值为整数。

 - `indent_size`：设置每个缩进级别的空格数。可选值为整数。

 - `end_of_line`：设置换行符的类型。可选值为 lf（Unix 风格）、cr（Mac 风格）或 crlf（Windows 风格）。

 - `trim_trailing_whitespace`：设置是否删除行末尾的空白字符。可选值为 true 或 false。

 - `insert_final_newline`：设置是否在文件末尾插入一个空行。可选值为 true 或 false。

 - `charset`：设置文件的字符编码。可选值为 utf-8、utf-8-bom、latin1 等。

 - `root`：设置是否将当前文件夹作为根配置文件。可选值为 true 或 false。

## 个人项目中常使用的配置风格
```shell
# 告诉EditorConfig插件，这是根文件，不用继续往上查找
root = true

# 匹配全部文件
[*]
# 设置字符集
charset = utf-8
# 缩进风格，可选space、tab
indent_style = space
# 缩进的空格数
indent_size = 4
# 结尾换行符，可选lf、cr、crlf
end_of_line = lf
# 在文件结尾插入新行
insert_final_newline = true
# 删除一行中的前后空格
trim_trailing_whitespace = true

[*.js]
# 设置对象字面量的括号之间是否添加空格
# 设置为 true 表示添加空格，设置为 false 表示不添加空格
space_in_empty_object = true

[*.ts]
space_in_empty_object = true

[*.tsx]
space_in_empty_object = true

[*.json]
# 设置对象字面量的括号之间是否添加空格
# 设置为 true 表示添加空格，设置为 false 表示不添加空格
space_in_empty_object = true

# 匹配md结尾的文件
[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```
