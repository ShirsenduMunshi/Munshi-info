import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClientThemeProvider } from "@/components/ClientThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Added weights for better font flexibility
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"], // Added weights for consistency
});

export const metadata = {
  title: "Munshi-info",
  description: "Discover insightful blogs on technology, programming, and development at Munshi-info. Stay updated with expert-written content, tips, and tutorials crafted to inspire and empower developers and tech enthusiasts.",
  author: "Shirsendu Munshi",
  keywords: "technology, programming, development, blogs, tutorials", // Added keywords for SEO
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased `}> {/* Improved accessibility with background colors */}
        <ClientThemeProvider>
          <Navbar />
          <main>{children}</main> {/* Wrapped children in a <main> tag for semantic structure */}
        </ClientThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
