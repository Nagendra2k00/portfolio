import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Nagendra Kumar K S",
  description:
    "Modern portfolio website showcasing the skills, experience, and projects of Nagendra Kumar K S — a full-stack developer with expertise in Java, Python, React, Next.js, Spring Boot, and AI integrations.",
  keywords: [
    "Nagendra Kumar K S",
    "portfolio",
    "fullstack developer",
    "web development",
    "Java",
    "Spring Boot",
    "Python",
    "React",
    "Next.js",
    "TypeScript",
    "machine learning",
    "AI integration",
  ],
  authors: [{ name: "Nagendra Kumar K S" }],
  openGraph: {
    title: "Nagendra Kumar K S - Professional Fullstack Developer",
    description:
      "Portfolio of Nagendra Kumar K S, showcasing fullstack development, AI integrations, and innovative project solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagendra Kumar K S - Professional Fullstack Developer",
    description:
      "Portfolio of Nagendra Kumar K S, showcasing fullstack development, AI integrations, and innovative project solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
