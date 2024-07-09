import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "./providers/ConvexClerkProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Podcaster",
    description: "Generated your podcast using AI",
    icons: {
        icon: '/icons/podcaster.png',
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <ConvexClerkProvider>{children}</ConvexClerkProvider>
        </body>
        </html>
    );
}
