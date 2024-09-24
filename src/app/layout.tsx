import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const pretendardSans = localFont({
  src: "../../public/font/PretendardVariable.woff2",
  variable: "--font-pretendard-sans",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "정해준의 포트폴리오",
  description: "정해준의 포트폴리오 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendardSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
