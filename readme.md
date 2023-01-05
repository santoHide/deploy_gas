# GASの運用保守

## やりたいこと
本番環境のコード管理が煩雑になるため、githubでブランチで管理することによってそれをなくす

## 構成

<img src="https://user-images.githubusercontent.com/51277745/210707048-cc21baf9-33c9-4768-b6a0-abea079142d3.png" width=80% alt="構成図">

- リモートリポジトリにdeveloperのブランチ生成、コード確認後にmasterに結合
  - developerブランチに流した後、テスト環境のgasに流すでも可
- バツの箇所はprepushやgasの権限関係で書き込みに行けないようにする
  - 1人で開発しているのならmasterブランチに直接書き込みに行くでも良

## secrets
使用している環境変数(各々設定変更が必要)
- ACCESS_TOKEN
- ID_TOKEN
- CLIENT_ID
- CLIENT_SECRET
- ID_TOKEN

上記までは、個人のログインの認証情報(clasprc.jsonの中身)
- SCRIPT_ID

gasのスクリプトID
