import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Rahul | Full Stack Developer",
  description:
    "Rahul is a Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building scalable, performant web applications.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Developer",
    "Rahul",
  ],
  authors: [{ name: "Rahul" }],
  creator: "Rahul",
   icons: {          
    icon: "/globe.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
      url: "https://rahulpooniadev.vercel.app",
    title: "Rahul | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and Node.js. Building scalable web experiences.",
    siteName: "Rahul Portfolio",
      images: [
    {
      url: "https://github.com/rahulpoonia-dev.png",
      width: 400,
      height: 400,
      alt: "Rahul - Full Stack Developer",
    },
      ],

  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and Node.js.",
        images: ["https://github.com/rahulpoonia-dev.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}