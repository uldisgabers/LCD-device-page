import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import HomeNav from "./components/HomeNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LCD",
  description: "Tech-task LCD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen bg-gradient-to-b from-deep-dark-blue to-[210px] to-[#E2E3E9] from-[210px] to-1000% px-4">
          <div className="border-b border-[#E2E3E91A]">
            <Navigation />
          </div>
          <HomeNav />
          <div className="max-w-6xl w-full mx-auto">{children}</div>
        </main>
        <footer className="max-w-6xl w-full mx-auto text-[#5C5F70] text-sm absolute inset-x-0 bottom-0 pb-4">
          © 2023 LCD. All rigths reserved.
        </footer>
      </body>
    </html>
  );
}
