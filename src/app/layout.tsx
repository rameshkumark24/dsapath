import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSA Mastery Roadmap",
  description: "A dedicated roadmap to master Data Structures and Algorithms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Class "dark" forces dark mode globally
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased flex min-h-screen flex-col bg-zinc-950 text-zinc-100`}
      >
        <Navbar />
        {/* Main content wrapper with constraints for a clean UI */}
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}