import type { Metadata } from "next";
import { Inter } from "next/font/google";
import classNames from "classnames";
import "@/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ReactNode } from "react"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "interseguro-challenge-front",
  description: "interseguro-challenge-front",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="es">
      <body className={classNames(inter.className, "text-slate-700")}>
        <ToastContainer position="bottom-right" />
        {children}
      </body>
    </html>
  )
}
