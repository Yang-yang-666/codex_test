import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "合桃轩｜精选文玩核桃",
  description: "精选同树配对文玩核桃，一物一拍、尺寸实测、瑕疵明示。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
