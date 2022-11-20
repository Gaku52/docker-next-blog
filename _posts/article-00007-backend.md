---
title: 'WEBサーバとは？バックエンド学習①'
excerpt: 'apacheとnginxの違いを調査し、技術選定理由とバックエンドのチューニングのための知識をつける。'
coverImage: '/assets/blog/backend/backend.png'
date: '2022-11-20'
ogImage:
  url: '/assets/blog/backend/backend.png'
tags:
  - 'WEBサーバ'
  - 'apache'
  - 'nginx'
---

## ■WEBサーバとは？

WEBサーバは、起動中ずっとアクセスを待機しており  
アクセスがきたときに、HTMLで返すコンピュータのことをいう。  

### ◆apacheとは？

![apache_logo](/assets/blog/backend/apache_logo.png)  

apacheとは、正式には「Apache HTTP Server」といいミドルウェアのWEBサーバにあたる。  
1995年にリリースされており、古くからあるWEBサーバで現在もシェア率が高い。  
スクリプト言語により動的なコンテンツを返す必要がある場合は、Apache HTTP Serverの方が優れている。

### ◆nginxとは？

![nginx_logo](/assets/blog/backend/nginx_logo.png)  

nginxは、apacheの次に使われているWEBサーバである。  
またApacheWEBサーバーのパフォーマンス制限に対処すべくして生み出された、高負荷に強いWEBサーバーである。C10K問題に対応している。  
Nginxの設定ファイル（nginx.conf）は、Apacheの設定ファイル（httpd.conf）よりも直感的で設定しやすい面もある。  
