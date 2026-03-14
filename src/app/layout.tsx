import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "X / Motivation",
  description: "Hard truths that push you to act",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
