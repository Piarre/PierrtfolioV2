"use client";

import Header from "@/components/header";
import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <title>Pierre IDE</title>
        <meta name="description" content="a 16 yo french dev." />*
        <meta name="robots" content="noindex,nofollow" />
        <meta name="robots" content="all" />
      </head>
      <body
        className={`${dmsans.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          className={`bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-40rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#9984D4] ${
            mounted ? "opacity-100" : "opacity-0"
          }  transition-opacity delay-200 duration-1000 ease-in-out`}
        ></div>
        <div
          className={`bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#cc5e45] ${
            mounted ? "opacity-100" : "opacity-0"
          }  transition-opacity delay-500 duration-1000 ease-in-out`}
        ></div>
        <div
          className={`bg-[#fbe2e3] absolute top-[10rem] -z-10 right-[0rem] h-[30rem] w-[10rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#791E94] ${
            mounted ? "opacity-100" : "opacity-0"
          }  transition-opacity delay-700 duration-1000 ease-in-out`}
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
