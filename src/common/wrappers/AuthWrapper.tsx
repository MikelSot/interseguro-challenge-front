import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import jsCookie from "js-cookie";
import {TOKEN_NAME} from "@/common/constants/cookies";
import {PRIVATE_ROUTER, PUBLIC_ROUTES} from "@/common/constants/router";

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false)

  const token = jsCookie.get(TOKEN_NAME as string)

  useEffect(() => {
    if (token) {
      setIsLogin(true)

      return
    }

    setIsLogin(false)
  }, [token])


  console.log("isLogin")
  console.log(isLogin)
  console.log(token)


  const path = router.asPath

  if (!isLogin && PRIVATE_ROUTER.includes(path)) {
    router.push('/login')
  }


  if (!isLogin && PUBLIC_ROUTES.includes(path)) {
    router.push(path)
  }


  if (isLogin) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

type AuthWrapperProps = {
  children: ReactNode
}

export default AuthWrapper;
