---
title: 'WSL2でNext.jsプロジェクトの変更時にHOT Reloadが遅いときの解決法'
excerpt: 'WSL2でWEBアプリ開発時において、HOTリロードが遅いときの状況と原因について記します。'
coverImage: '/assets/blog/Ubuntu/Ubuntu.png'
date: '2022-11-02'
ogImage:
  url: '/assets/blog/Ubuntu/Ubuntu.png'
tags:
  - 'Ubuntu'
  - 'Linux'
  - 'WSL2'
---

## 概要

WSL2＋Dockerの実行環境でNext.jsプロジェクトを実行環境としたとき、変更時にリアルタイム更新(HOT Reload)が遅い現象が起こりました。  

実際どれくらい遅いというと、ローカル開発と比べて3~5秒遅いと思われます。(体感)  

せっかくDockerの環境で開発したいと思っても、これではローカルの方がいいかな...となってしまいます。  

そこで、今回は状況分析から解決策実施まで行いました。

## 状況と原因

状況としてWLS2のmnt/cからWindows上のディレクトリへアクセスしていたのですが、それが原因のようです。  

データ更新の際、毎回Windowsへアクセスしているため時間がかかっているとのこと。

## 解決方法

コマンド操作でディレクトリを、WSL2のhomeディレクトリ上へコピーする。  
Ubuntu側で直接WEBアプリ開発環境を構築することもでき、HOT Reload速度も向上します。  

### 参考サイト様

[解説サイト様①「DockerでNext.jsの開発環境を作ったがローカルで開発することにした」](https://blog.kapiecii.com/posts/2022/07/24/docker-and-nextjs/)  
[解説サイト様②「(続き)Windows+WSL2でReactの開発環境を作った」](https://onl.la/Dwj9qFg)  
