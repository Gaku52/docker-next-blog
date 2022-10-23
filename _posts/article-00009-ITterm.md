---
title: 'IT用語①'
excerpt: 'IT用語の意味の理解、また語源や使われ方などを学ぶ目的としております。'
coverImage: '/assets/blog/ITterm/ITterm.jpeg'
date: '2022-10-24'
ogImage:
  url: '/assets/blog/ITterm/ITterm.jpeg'
tags:
  - 'IT用語'
  - '学習'
---

## 概要

IT業界には専門用語が多く、それらを習得するにあたっての学習には工夫が必要だと考えています。  
そこで本記事ページでは、用語理解を深める仕組み化を目的として各項目の必須知識や基本用語をまとめていきます。

## Docker用語

Dockerとは？  
[解説サイト様①「Docker入門（第一回）～Dockerとは何か、何が良いのか～」](https://knowledge.sakura.ad.jp/13265/)  
[解説サイト様②「【初心者向け】Docker（ドッカー）とは何か？」](https://aiacademy.jp/media/?p=1106)  
[解説サイト様③「Docker とは(AWS)」](https://aws.amazon.com/jp/docker/)  
[解説サイト様④「5分で分かるDocker」](https://atmarkit.itmedia.co.jp/ait/articles/2108/23/news022.html)  
[解説サイト様⑤「Dockerとは？使い方から基本コマンドまでサンプル付きで解説！」](https://camp.trainocate.co.jp/magazine/whats-docker/)  
[解説サイト様⑥「Dockerとは何かを入門者向けに解説！基本コマンドも」](https://udemy.benesse.co.jp/development/system/docker.html)  
[解説サイト様⑦「【5分でわかる】Dockerとは？わかりやすく解説」](https://engineer-life.dev/docker/)

### Framer Motion

https://www.framer.com/motion

[Framer](https://www.framer.com/)が提供しているアニメーションライブラリです。

どんなアニメーションでも、基本的に**props だけ**で完結してしまうのが特徴です。

```tsx
<motion.div
  drag="x"
  dragConstraints={{ left: -100, right: 100 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
/>
```

カスタムコンポーネントは`motion`関数に渡してアニメーションをつけます。

```tsx
const MotionComponent = motion(Component);
...
<MotionComponent animate={{ scale: 0.5 }} />
```

## `motion`+`Slot`で何ができる？

`motion`と`Slot`を組み合わせて`motion(Slot)`を作ります。すると、

`motion`が提供してくれる手軽でリッチなアニメーション機能をそのまま、提供元を完全に隠蔽して提供する

ことができるようになります。

何を言っているのか、私もよくわからないので具体例に移りましょう。

## 具体例

`motion(Slot)`を使って、みんな大好き「[ふわっ](https://qiita.com/yuneco/items/24a209cb14661b8a7a20)」が手軽に実装できるようにしましょう。

### 実装

```tsx
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';

const ContentLayout = motion(Slot);

type Custom = {
  y?: number;
  once?: boolean;
  amount?: number;
  duration?: number;
};

const defaultCustom: Custom = {
  y: 20,
  once: true,
  amount: 0.3,
  duration: 0.6,
};

const config = (
  custom?: Custom,
): React.ComponentProps<typeof ContentLayout> => {
  const { y, once, amount, duration } = { ...defaultCustom, ...custom };

  return {
    initial: {
      opacity: 0,
      y,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once,
      amount,
    },
    transition: {
      duration,
    },
  };
};

type Props = {
  children: React.ReactNode;
  custom?: Custom;
};

export const Enter = React.forwardRef<
  React.ElementRef<typeof ContentLayout>,
  Props
>(({ children, custom }, forwardedRef) => (
  <ContentLayout {...config(custom)} ref={forwardedRef}>
    {children}
  </ContentLayout>
));

Enter.displayName = 'Enter';
```

### 使い方

たったこれだけで、`h1`がふわっと入場します。

```tsx
<Enter>
  <h1>Hello CodeSandbox</h1>
</Enter>
```

CodeSandbox に使用例を上げました。

@[codesandbox](https://codesandbox.io/embed/nifty-fast-gs8cjy?fontsize=14&hidenavigation=1&theme=dark)

ぜひ、別窓で開いて余計な`div`が生成されていないことをお確かめください。

### 注意点

`motion`は内部的に ref を使用します。なので、対象のコンポーネントがカスタムコンポーネントである場合、正しく ref をフォワーディングしている必要があります。

ref や`forwardRef`をご存知ない方は、調べてみてください。きっと、`Slot`や`motion`に比べてはるかに多くの記事がヒットするでしょう。

## まとめ

`motion(Slot)`で再利用性バツグンのアニメーションコンポーネントを作ることができました。

実装自体`motion`の軽い延長に過ぎないので、簡単にオリジナルのアニメーションコンポーネントが作れると思います。是非お試しください。

私も色々実装してみて、またの機会に紹介したいと思います。

`motion(Slot)`で再利用性バツグンのアニメーションコンポーネントを作ることができました。

実装自体`motion`の軽い延長に過ぎないので、簡単にオリジナルのアニメーションコンポーネントが作れると思います。是非お試しください。

私も色々実装してみて、またの機会に紹介したいと思います。最下部の段落は15行書くこと。
