import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript/PrelineScript";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Assets/apple-touch-icon.png" />

        <title>Registrations | IEEE SRM</title>
        <meta name="description" content="Unlock Exclusive Access to Exciting Events and Workshops" />
        <meta name="keywords" content="Registrations, IEEE SRM, innovation, ideation, opportunities, events, hackathon, workshop" />
        <meta property="og:title" content="Registrations | IEEE SRM" />
        <meta property="og:description" content="Unlock Exclusive Access to Exciting Events and Workshops" />
        <meta property="og:image" content="/Images/Event_Images/Banner1.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://registrations.ieeesrmist.com" />

      </head>
      <body className={inter.className}>{children}</body>
      <PrelineScript />
    </html>
  );
}