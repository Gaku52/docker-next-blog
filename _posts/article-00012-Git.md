---
title: 'GitHubの接続方式httpsとsshそれぞれのメリット・デメリットの調査'
excerpt: 'この度は、GitHubのリポートリポジトリと接続する際の方式についての調査を行います。'
coverImage: '/assets/blog/github/github.png'
date: '2022-11-05'
ogImage:
  url: '/assets/blog/github/github.png'
tags:
  - 'Ubuntu'
  - 'Linux'
  - 'WSL2'
---

## 概要

GitHubのリポートリポジトリへ接続は、今やGitが開発時に必須ですので把握しておきたい所になると思います。  
今回は、https接続とssh接続それぞれのメリットデメリットの調査を行い、記しておきます。  

## 状況と原因

https接続をしていた時に疑問に思ったことがあります。  
push時に、Gitのアカウント名とパスワードを毎回聞かれることです。  

## 解決方法

### 参考サイト様
