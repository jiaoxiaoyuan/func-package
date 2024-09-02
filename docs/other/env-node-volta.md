---
title: Node与项目环境工具volta
order: 9
nav:
  title: 文档
  path: /other
  order: 100
group:
  path: /env
  title: 环境配置
  order: 3
---

Volta：高效管理 Node.js 版本与项目环境的利器
===

**Volta** 是一个由前端开发人员设计的工具链管理器，旨在简化和加速 JavaScript 开发流程。它通过提供无缝的 Node.js 版本管理、包管理和项目环境设置，使开发人员能够专注于代码编写，而不是配置和环境管理。

#### **主要特点**

1.  **即时切换**：允许在项目之间快速切换 Node.js 和 npm 版本，确保项目使用正确的版本环境。
2.  **全局工具管理**：支持全局安装工具（如 yarn、typescript），并确保它们在任何项目中都能使用。
3.  **自动安装**：项目中定义的 Node.js 和 npm 版本会自动安装和切换，无需手动配置。
4.  **一致性**：确保在团队中的每个开发人员使用相同的工具版本，减少由于环境差异引起的问题。
5.  **性能优化**：通过优化的路径和工具链管理，加速命令执行和依赖安装过程。

#### **使用场景**

Volta 适用于需要频繁切换项目和工具版本的开发人员，以及希望在团队中保持一致开发环境的情况。它能够显著提高开发效率，减少环境配置带来的麻烦，使开发人员更专注于实际编码工作。

## 一、安装

**下载压缩包文件**

[github.com/volta-cli/v…](https://github.com/volta-cli/volta/releases "https://github.com/volta-cli/volta/releases")

**解压&配置方式**

在 Linux 或 macOS 上，将解压后的 `volta` 目录复制到你选择的安装位置（例如 `/usr/local/volta`）。

```shell
export VOLTA_HOME="/usr/local/volta"
export PATH="$VOLTA_HOME/bin:$PATH"
```

**brew安装方式**

```shell
brew install volta
```

**重载 Shell 配置文件**

```shell
source ~/.bashrc 
# 或者
source ~/.zshrc
```

**验证安装**

```shell
volta --version
```

## 二、使用方式

安装完成后，你可以使用 Volta 来管理 Node.js 版本和全局工具。以下是一些常用命令：

+   **安装 Node.js**：

```shell
volta install node
```

+   **安装特定版本的 Node.js**：

```shell
volta install node@14
```

+   **安装全局工具（如 yarn）** ：

```shell
volta install yarn
```

+   **设置项目环境**：
+   在项目根目录下创建一个 `.volta` 文件夹，并添加 `node` 和 `yarn` 版本信息：

```shell
volta pin node@14
volta pin yarn@1.22.10
```

**查看当前使用的 Node.js 版本**：

```shell
volta list node
```

**移除 node 版本**

```shell
volta uninstall node@14
```

**查询 node 安装路径**

```shell
volta which node
```

## 三、pin 命令

```shell
volta pin node@14.17.0
volta pin yarn@1.22.10
```

当你使用 `volta pin node` 命令来为项目固定 Node.js 版本时，Volta 会在你的项目根目录的 `package.json` 文件中添加或更新与 Volta 相关的配置。具体而言，它会在 `package.json` 文件中添加一个 `volta` 字段，用来记录固定的 Node.js 版本和其他工具版本信息。

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Your project description",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "volta": {
    "node": "14.17.0",
    "yarn": "1.22.10"
  },
  "dependencies": {
    "some-package": "^1.0.0"
  }
}
```

### **配置的作用**

1.  **项目环境固定**：
    
    1.  `package.json` 中的 `volta` 字段记录了项目所需的 Node.js 和工具版本。当开发人员克隆项目并进入项目目录时，Volta 会自动切换到指定的 Node.js 和工具版本，确保环境一致。
2.  **简化设置**：
    
    1.  新加入项目的开发人员只需安装 Volta 并进入项目目录，就能自动使用项目指定的 Node.js 和工具版本，无需手动安装和配置。
3.  **版本管理**：
    
    1.  通过 `package.json` 文件，可以清晰地看到项目依赖的 Node.js 和工具版本，方便管理和维护。
