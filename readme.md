# GAS の運用保守

## やりたいこと

本番環境のコード管理が煩雑になるため、github でブランチで管理することによってそれをなくす

## 構成

<img src="https://user-images.githubusercontent.com/51277745/210707048-cc21baf9-33c9-4768-b6a0-abea079142d3.png" width=80% alt="構成図">

- リモートリポジトリに developer のブランチ生成、コード確認後に master に結合
  - developer ブランチに流した後、テスト環境の gas に流すでも可
- バツの箇所は prepush や gas の権限関係で書き込みに行けないようにする
  - 1 人で開発しているのなら master ブランチに直接書き込みに行くでも良

## secrets

使用している環境変数(各々設定変更が必要)

- ACCESS_TOKEN
- ID_TOKEN
- CLIENT_ID
- CLIENT_SECRET
- ID_TOKEN

上記までは、認証情報(clasprc.json の中身)

- SCRIPT_ID
  gas のスクリプト ID

※dev 環境で clasp push をする場合は dev 用の secrets が必要
.github/workflow/push_to_dev.yml ファイルを参照してください
