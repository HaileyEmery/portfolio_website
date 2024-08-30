import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hailey Emery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className=" flex min-h-screen flex-col items-center justify-between md:p-24 pt-24 pb-24 pl-4 pr-4 sm:pl-12 sm:pr-12 bg-blue-100 dark:bg-blue-900 dark:from-inherit">
      <div className="z-10 w-full max-w-5xl items-center justify-between">
          <div className="fixed left-0 top-0 w-full flex flex-wrap justify-between border-b border-purple-900 bg-blue-200 pb-4 pt-6 backdrop-blur-2xl dark:border-purple-200 dark:bg-blue-800 dark:from-inherit">
            <div className="ml-100 flex basis-full md:basis-1/12 justify-center">
              <Link href="/" className="text-3xl font-extrabold">HE</Link>
            </div>
            <div className="flex basis-full md:basis-1/2 lg:basis-1/3 justify-around">
              <Link href="/Resume" className="text-bg"> Resume </Link>
              <Link href="/Coursework" className="text-bg"> Coursework </Link>
              <Link href="/Projects" className="text-bg"> Projects </Link>
            </div>
          </div>

          <div className="fixed left-0 bottom-0 w-full flex flex-wrap justify-evenly align-text-bottom border-t border-purple-800 bg-blue-200 pb-6 pt-8 backdrop-blur-2xl dark:border-purple-200 dark:bg-blue-800 dark:from-inherit">
            <Link className="text-md" href="https://www.linkedin.com/in/HaileyEmery02">LinkedIn</Link>
            <p className="text-xl">Hailey Emery</p>
            <Link className="text-md" href="https://www.github.com/HaileyEmery">Github</Link>
          </div>
          <div className="flex flex-col w-full gap-y-10 mt-8 md:mt-3">
            {children}
          </div>
      </div>
      </main>          
      </body>
    </html>
  );
}
