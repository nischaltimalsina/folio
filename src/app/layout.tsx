import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { ThemeProvider } from "@/context/theme-provider";

import { Particles } from "@/components/shared";
import {
    competencies,
    portfolioKeywords,
    siteConfig,
    skills
} from "@/config/site";

const inter = Barlow({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    keywords: [...skills, ...competencies, ...portfolioKeywords],
    authors: [
        {
            name: "Nischal Timalsina",
            url: "https://nischaltimalsina.com.np"
        }
    ],
    creator: "nischaltimalsina",

    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: "@thelunaticlad"
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png"
    },
    manifest: `${siteConfig.url}/site.webmanifest`
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" }
    ]
};
export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange>
                    <main className="min-h-screen relative w-screen bg-background text-foreground">
                        <Header />
                        <Particles
                            className="fixed h-screen inset-0 top-0 -z-0 "
                            color="#808080"
                        />
                        {children}
                        <Footer />
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
