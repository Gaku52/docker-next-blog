---
title: 'WEBサーバとは？'
excerpt: 'apacheとnginxの違いを調査し、技術選定理由とバックエンドのチューニングのための知識をつけます。'
coverImage: '/assets/blog/backend/backend.png'
date: '2022-11-22T23:00:00'
ogImage:
  url: '/assets/blog/backend/backend.png'
tags:
  - 'WEBサーバ'
  - 'apache'
  - 'nginx'
---

## ■WEBサーバとは？

WEBサーバは、起動中はアクセスを待機しており  
アクセスがきたときに、HTMLデータを返すコンピュータのことをいう。  

### ◆apacheとは？

![apache_logo](/assets/blog/backend/apache_logo.png)  

apacheとは正式には「Apache HTTP Server」といい、WEBサーバ用のソフトウェアである。  
1995年にリリースされており、古くからあり現在もシェア率が高い。  
スクリプト言語により動的なコンテンツを返す必要がある場合は、Apache HTTP Serverが優れている。

### ◆nginxとは？

![nginx_logo](/assets/blog/backend/nginx_logo.png)  

nginxは、apacheの次(2番目)に使われているWEBサーバ用のソフトウェアである。  
またApache HTTP Serverのパフォーマンス制限に対処すべくして生み出された、高負荷に強い。C10K問題に対応している。  
Nginxの設定ファイル（nginx.conf）は、Apacheの設定ファイル（httpd.conf）よりも直感的で設定しやすい面もある。  
