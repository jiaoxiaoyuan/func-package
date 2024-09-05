---
title: Homebrew 配置
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



清除 Homebrew 的缓存通常涉及删除已下载的旧版本软件包以及清理不再需要的文件。这有助于解决一些潜在的问题，并且可以释放磁盘空间。以下是一些常用的命令来清理 Homebrew 的缓存：

1. **清理已下载的旧版本软件包**：
   ```sh
   brew cleanup
   ```

2. **清理所有已下载的公式（Formulae）**：
   ```sh
   brew cleanup -d
   ```

3. **清理所有未链接的已安装软件包**：
   ```sh
   brew cleanup -n
   ```

4. **清理所有已安装软件包的旧版本**：
   ```sh
   brew cleanup --prune=all
   ```

如果你想一次性执行所有清理操作，可以组合使用这些命令。例如：

```sh
brew cleanup
brew cleanup -d
brew cleanup -n
brew cleanup --prune=all
```

此外，如果你想要清理 Cask 安装程序留下的临时文件，可以使用以下命令：

```sh
brew bundle cleanup
```

不过请注意，`brew bundle cleanup` 是针对 `Brewfile` 中定义的 Cask 和 Formulae 的，如果你没有使用 `Brewfile`，这条命令可能不会产生预期的效果。

如果你发现 Homebrew 仍然存在问题，或者在清理后仍然无法找到或安装 `zulu@17`，请让我知道具体的错误信息或者其他细节，以便我能进一步帮助你。
