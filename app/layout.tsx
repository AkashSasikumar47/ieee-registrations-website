import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Registrations | IEEE SRM",
  description: "Unlock Exclusive Access to Exciting Events and Workshops",
  openGraph: {
    title: "Registrations | IEEE SRM",
    description: "Unlock Exclusive Access to Exciting Events and Workshops",
    images: [
      {
        url: "https://drive.google.com/file/d/1PMn2oet8C5650q6hhXmZSmT98GVDwhit/view?usp=sharing",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    url: "https://registrations.ieeesrmist.com/",
    type: "website",
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}