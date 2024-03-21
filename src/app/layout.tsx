import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const inter = Barlow({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: {
    default: "Nischal Timalsina",
    template: "%s | Nischal Timalsina",
  },
  description: "A web developer with a love for creating beautiful and functional user interfaces.",
  openGraph: {
    title: "Nischal Timalsina",
    description:
      "A web developer with a love for creating beautiful and functional user interfaces.",
    url: "https://nischaltimalsina.com.np",
    siteName: "Nischal Timalsina",
    images: [
      {
        url: "https://nischaltimalsina.com.np/og.png",
        width: 1260,
        height: 623,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Nischal Timalsina",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
