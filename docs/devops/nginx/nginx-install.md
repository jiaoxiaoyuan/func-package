---
title: Nginx-安装教程
order: 28
nav:
    title: DevOps系列
    path: /DevOps
    order: 5
group:
  path: /Nginx
  title: Nginx
  order: 3
---

# 安装教程

## 四项确认

- 确认系统网络（`ping`）
- 确认 `yum` 可用（`yum list | grep gcc`）
- 确定关闭 `iptables`（`iptables -F`）
- 确认停用 `selinux`

## 两项安装

```bash
yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake
yum -y install wget httpd-tools vim
```

## 安装源

```bash
cd /etc/yum.repos.d
vim nginx.repo

# 添加
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
```

## 进行安装

```bash
yum list | grep nginx
yum install nginx
```

## 查看版本

查看版本

```bash
nginx -v
```
