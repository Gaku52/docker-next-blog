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
今回は、https接続とssh接続それぞれの特徴を記しておきます。  

## Httpsについて

GitHubが推奨しているのがHttps接続です。  
リポジトリのHTTPSのデフォルトのURL形式を用いて、主にWeb上で通信が行われる。  

### 用語名

[解説サイト様①「【解説】【GitHub】HTTPSとSSHの違い」](https://zenn.dev/nameless_sn/articles/the_differences_between_https_and_ssh)  

## SSHについて

はじめにGitHubにssh接続する際は、公開鍵・秘密鍵の生成します。  
そしてGitHub上に公開鍵を設定することで接続ができるようにます。  

特徴  
・アカウント情報だけでリポジトリに書き込めるので、どこからでも簡単にアクセスできる。  
・HTTPSはすべてのファイアウォールで開かれている点が良い。  

[解説サイト様①「GitHubにSSH接続する方法！(キーの作成からpushまで解説)」](https://codelikes.com/github-ssh-connection/)  

## 考察

セキュリティ、速度、設定が簡単、参考記事の多さなど、私はどちらも設定してみたがHTTPSの方が楽であると感じました。  
基本的に、HTTPSであれば 作業ディレクトリ>.git>config のconfigファイルにリポジトリのURLを設定します。  
