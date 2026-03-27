import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Image Background Remover",
  description: "Instantly remove backgrounds from images with one click, no signup required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
