import {Inter} from "next/font/google"
import classNames from "classnames"
import "@/styles/globals.scss"
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"
import {ReactNode} from "react"
import AuthWrapper from "@/common/wrappers/AuthWrapper"


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
    return (
    <html lang="es">
        <head>
            <title>Challenge Interseguro</title>
        </head>
    <body className={classNames(inter.className, "text-slate-700")}>
        <ToastContainer position="bottom-right" />
        <AuthWrapper>
            {children}
        </AuthWrapper>
      </body>
    </html>
  )
}
