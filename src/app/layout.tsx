import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS App",
  description: "cool beans 🫘",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className="light">
      <body
        className={cn('min-h-screen font-sans antialiased grainy',
          inter.className
        )}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
