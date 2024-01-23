import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Web của tui",
  description: "Nội dung mô tả",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
