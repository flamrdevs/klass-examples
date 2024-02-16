import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "next-tailwind",
  description: "klass example with next + tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
