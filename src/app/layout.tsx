import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Michael Yeng | UGSRC President 2025 Hopeful",
  description: "Official campaign website for Michael Yeng — a visionary leader with a passion for advocacy, service, and impact. Learn more about his mission, experience, and why he's the right choice for UG SRC President.",
  keywords: [
    "Michael Yeng",
    "UGSRC President", 
    "University of Ghana",
    "Student Leadership",
    "Campus Politics",
    "Student Advocacy",
    "Evandy Hall President",
    "Student Government",
    "University Elections",
    "Student Representative Council",
    "UG Elections",
    "Ghana Student Politics"
  ],
  authors: [{ name: "Michael Yeng Campaign Team" }],
  creator: "Michael Yeng Campaign Team",
  publisher: "The Yeng Project",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.michaelyeng.com',
    title: 'Michael Yeng | UGSRC President 2025 Hopeful',
    description: 'Official campaign website for Michael Yeng — a visionary leader with a passion for advocacy, service, and impact. Learn more about his mission, experience, and why he\'s the right choice for UG SRC President.',
    siteName: 'Michael Yeng for UGSRC President',
    images: [
      {
        url: 'https://www.michaelyeng.com/assets/images/HeroImg.jpg',
        width: 1200,
        height: 630,
        alt: 'Michael Yeng - UGSRC President 2025 Hopeful',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michael Yeng | UGSRC President 2025 Hopeful',
    description: 'Official campaign website for Michael Yeng — a visionary leader with a passion for advocacy, service, and impact.',
    images: ['https://www.michaelyeng.com/assets/images/HeroImg.jpg'],
  },
  category: 'Politics',
  alternates: {
    canonical: 'https://www.michaelyeng.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://www.michaelyeng.com" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

