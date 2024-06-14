"use client";

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../../components/ArouraBgDemo/ThemeProvider";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ThemeLogger from "../../components/ArouraBgDemo/ThemeLogger";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider store={store}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeLogger/>
            <NextTopLoader/>
            <Toaster richColors />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
