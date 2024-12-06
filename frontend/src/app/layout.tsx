"use client";

import React, { use, useEffect, useState } from "react";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Toolbar from "@/components/Toolbar";
import Home from "./page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("asc");
  console.log(searchQuery, "search layout");

  useEffect(() => {
    document.title = "Explorer";
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="grid grid-cols-5 h-screen">
          <div className="col-span-1 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <Sidebar />
          </div>
          <div className="col-span-4">
            <Toolbar setSearchQuery={setSearchQuery} setSort={setSort} />
            <div>
              <Home searchQuery={searchQuery} sort={sort} />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
