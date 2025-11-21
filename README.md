# sample

Next.js + GraphQL + Prisma を中心に構築した Web アプリケーション。  
フロントエンドは urql、バックエンドは Apollo Server を採用し、GraphQL Code Generator による型安全な開発を行っています。  
認証には NextAuth を利用しています。

ログイン,一覧取得のみの最小構成

---

## 📦 技術スタック

- **Next.js** (App Router)
- **Apollo Server** (GraphQL API サーバー)
- **Prisma** (ORM)
- **urql** (GraphQL クライアント)
- **GraphQL Code Generator** (型生成)
- **NextAuth** (認証)

---

## 🚀 セットアップ

### 1. 依存パッケージのインストール

```bash
npm install
```

2. 環境変数の設定
   .env に以下の内容を記載してください。

```bash
DATABASE_URL=""

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret

# その他必要に応じて設定
```

---

### 🔑 GraphQL API

---

バックエンド (Apollo Server)  
エンドポイント: /api/graphql  
スキーマ定義: graphql/schema.graphql  
フロントエンド (urql)

urql クライアントを使って API と通信  
GraphQL Code Generator による hooks (useQuery, useMutation etc.) を自動生成

---

### 💡 開発メモ

---

DB アクセス → Prisma 経由で実装。マイグレーション管理も Prisma で行う。  
GraphQL 型定義 → schema.graphql を更新後、graphql-codegen で型を再生成。  
フロントエンド → urql を使い、generated ディレクトリの hooks を利用。  
認証 → NextAuth を通じて session を取得し、GraphQL リゾルバ側でも参照可能。
