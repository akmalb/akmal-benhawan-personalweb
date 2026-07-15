import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Source_Serif_4, Noto_Sans_Thai } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const SITE_URL = "https://akmal-benhawan-personalweb.vercel.app";

const SITE_TITLE =
  "อักมาล เบ็ญหาวัน | นักวิชาการคอมพิวเตอร์ ชำนาญการ มหาวิทยาลัยราชภัฏยะลา";

const SITE_TITLE_EN =
  "Akmal Benhawan | Computer Technical Officer, Professional Level";

const SITE_DESCRIPTION =
  "เว็บไซต์ส่วนตัวทางวิชาการของ อักมาล เบ็ญหาวัน นักวิชาการคอมพิวเตอร์ ชำนาญการ มหาวิทยาลัยราชภัฏยะลา ผู้ทำงานด้านระบบสารสนเทศ ปัญญาประดิษฐ์ การวิเคราะห์ข้อมูล บิ๊กดาต้า งานวิจัย และการถ่ายทอดความรู้ด้านเทคโนโลยี";

const SITE_DESCRIPTION_EN =
  "Academic portfolio of Akmal Benhawan, Computer Technical Officer, Professional Level at Yala Rajabhat University, focusing on information systems, artificial intelligence, data analytics, big data, research, and technology training.";

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
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "อักมาล เบ็ญหาวัน",
    "Akmal Benhawan",
    "Yala Rajabhat University",
    "นักวิชาการคอมพิวเตอร์",
    "Computer Technical Officer",
    "Artificial Intelligence",
    "Data Analytics",
    "Big Data",
    "Information Systems",
    "Machine Learning",
    "Academic Portfolio",
    "YRU",
  ],
  authors: [{ name: "Akmal Benhawan" }],
  creator: "Akmal Benhawan",
  publisher: "Akmal Benhawan",
  alternates: {
    canonical: "/",
    languages: {
      th: "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "Akmal Benhawan Academic Portfolio",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE_EN,
    description: SITE_DESCRIPTION_EN,
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Analytics />
      </body>
    </html>
  );
}
