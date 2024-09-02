---
nav:
    title: DevOps系列
    path: /DevOps
    order: 5
title: 操作日志 git reflog
order: 25

group:
  path: /git
  title: git
  order: 9
  
---

# 操作日志 git reflog

> Manage reflog information

`git reflog` 用于显示所有已执行操作的日志！包括合并、重置、还原，也就是记录了对分支的一切更改行为。

![reflog](./assets/reflog.58c23043.gif)

如果，你不想合并 `origin/master` 分支了。就需要执行 `git reflog` 命令，合并之前的仓库状态位于 `HEAD@{1}` 这个地方，所以我们使用 `git reset` 指令将 `HEAD` 头指向 `HEAD@{1}` 就可以了。

![reflog-reset](./assets/reflog-reset.006c4f34.gif)
