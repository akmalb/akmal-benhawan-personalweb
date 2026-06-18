import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Source_Serif_4, Noto_Sans_Thai } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "อักมาล เบนหวัน | นักวิชาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏยะลา",
  description:
    "เว็บไซต์ส่วนตัวทางวิชาการของนายอักมาล เบนหวัน นักวิชาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏยะลา งานวิจัยด้านปัญญาประดิษฐ์ การวิเคราะห์ข้อมูล และบิ๊กดาต้า",
  keywords: [
    "อักมาล เบนหวัน",
    "Akmal Benhawan",
    "มหาวิทยาลัยราชภัฏยะลา",
    "นักวิชาการคอมพิวเตอร์",
    "Data Analytics",
    "Artificial Intelligence",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} ${notoSansThai.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
