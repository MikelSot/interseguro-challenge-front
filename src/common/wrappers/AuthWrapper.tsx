"use client"

import {useRouter} from "next/navigation"
import {ReactNode, useEffect} from "react"
import jsCookie from "js-cookie";
import {TOKEN_NAME} from "@/common/constants/cookies";
import {PRIVATE_ROUTER, PUBLIC_ROUTES} from "@/common/constants/router";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


const queryClient = new QueryClient()


const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const router = useRouter()
  const token = jsCookie.get(TOKEN_NAME as string)


  useEffect(() => {
    if (token) {
      router.push('/')

      return
    }

    redirect()
  }, [router])


  const redirect = () => {
    const path = window?.location?.pathname

    if (PRIVATE_ROUTER.includes(path)) {
      router.push('/login')
    }

    if (PUBLIC_ROUTES.includes(path)) {
      router.push(path)
    }
  }

  return (
      <>
        <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
      </>
  )
}

type AuthWrapperProps = {
  children: ReactNode
}

export default AuthWrapper;
