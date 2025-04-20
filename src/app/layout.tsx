import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: {
        default: "Layers X SwiftUI",
        template: "%s - Layers X SwiftUI",
    },
    description: "A landing page by SwiftUI",
    icons: {
        icon: '/assets/favicon.png'
    },
    keywords: "Web agency,UI,UX,Landing page,swiftUI,NextJS,ReactJS,Famer Motion",
    openGraph: {
        title: "Layers X swiftUI",
        description: "A landing page by swiftUI",
        images: ['/assets/mockup.png'],
        url: ''
    },
    twitter: {
        title: "Layers X swiftUI",
        description: "A landing page by swiftUI",
        card: 'summary_large_image',
        creator: 'SwiftUI'
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
            >
                {children}
            </body>
        </html>
    );
}
