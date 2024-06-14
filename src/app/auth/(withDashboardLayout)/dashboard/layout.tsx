"use client";

import React from "react";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ProtectedRoute from "@/compolib/ProtectedRoute/ProtectedRoute";
import Navbar from "@/compolib/shared/Navbar/Navbar";
import { ThemeProvider } from "../../../../../components/ArouraBgDemo/ThemeProvider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function WithDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ProtectedRoute>
        <Provider store={store}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster richColors />
            <Navbar />
            <div className=" dark:bg-black bg-white  dark:dark:bg-dot-white/[0.2] bg-grid-black/[0.2] ">
                    <div className="">
                        <div className="drawer lg:drawer-open">
                            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content flex flex-col items-center justify-center">
                                {children}                    
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full text-base-content dark:bg-black ">
                                    <Link href={`/`}><li className='text-white hover:bg-green-500'><a>Home</a></li></Link>
                                    <Link href={`/auth/dashboard/add-skills`}><li className='text-white hover:bg-green-500'><a>Add Skills</a></li></Link>
                                    <Link href={`/auth/dashboard/add-blogs`}><li className='text-white hover:bg-green-500'><a>Add Blogs</a></li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
          </ThemeProvider>
        </Provider>
      </ProtectedRoute>
    </div>
  );
}







