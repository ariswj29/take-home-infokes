import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Toolbar from "@/components/Toolbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Windows Explorer",
  description: "Windows Explorer by Aris Wildan Jannatan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-cols-5 h-screen">
          <div className="col-span-1 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <Sidebar />
          </div>
          <div className="col-span-4">
            <Toolbar />
            <div className="">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
