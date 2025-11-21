"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* ヘッダー */}
      <header className="w-full border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/next.svg" alt="Next.js logo" width={100} height={22} />
          <span className="font-semibold text-lg">My App</span>
        </div>
        <nav className="flex gap-6 text-sm">
          <a href="/accounts" className="hover:underline">
            アカウント一覧
          </a>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="rounded-md border border-gray-300 px-3 py-1.5 hover:bg-gray-100 transition"
          >
            ログアウト
          </button>
        </nav>
      </header>

      {/* メイン */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-md w-full bg-gray-50 rounded-2xl shadow p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome back 👋</h1>
          <p className="text-gray-600 mb-6">
            You are logged in! This is your sample dashboard page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="rounded-lg bg-blue-600 text-white font-medium px-6 py-3 hover:bg-blue-700 transition"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Docs
            </a>
            <a
              className="rounded-lg border border-gray-300 font-medium px-6 py-3 hover:bg-gray-100 transition"
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Vercel
            </a>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="border-t border-gray-200 p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  );
}
