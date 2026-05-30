import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul | Full Stack Developer",
  description:
    "Rahul Poonia is a Full Stack Developer specialising in React, Next.js, Node.js, and TypeScript. Building scalable, performant web applications from Jaipur, India.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Developer",
    "Rahul Poonia",
    "Jaipur",
  ],
  authors: [{ name: "Rahul Poonia" }],
  openGraph: {
    title: "Rahul | Full Stack Developer",
    description:
      "Full Stack Developer specialising in React, Next.js, and Node.js.",
    url: "https://rahulpooniadev.vercel.app",
    siteName: "Rahul Poonia Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul | Full Stack Developer",
    description:
      "Full Stack Developer specialising in React, Next.js, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
