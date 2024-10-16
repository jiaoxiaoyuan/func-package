---
nav:
    title: Vue系列
    path: /vue
    order: 4
group:
    path: /front_end
    title: 前置知识
    order: 1    
title: 添加 .editorconfig 文件
order: 9 
---

# 添加 .editorconfig 文件

> [EditorConfig](https://editorconfig.org/) 有助于跨各种编辑器和 IDE 为在同一项目上工作的多个开发人员维护一致的编码样式。

每个项目都应当包含 `.editorconfig` 文件，它用来统一配置编辑器的换行、缩进存储格式等。

```bash
# http://editorconfig.org
root = true

[*]
indent_style = space                    # 输入的 tab 都用空格代替
indent_size = 2                         # 一个 tab 用 2 个空格代替
end_of_line = lf                        # 换行符使用 unix 的换行符 \n
charset = utf-8                         # 字符编码 utf-8
trim_trailing_whitespace = true         # 去掉每行末尾的空格
insert_final_newline = true             # 每个文件末尾都加一个空行

[*.md]
trim_trailing_whitespace = false        # .md 文件不去掉每行末尾的空格
```

