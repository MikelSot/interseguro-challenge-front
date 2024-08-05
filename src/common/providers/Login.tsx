import jsCookie from 'js-cookie'
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from 'react'
import {TOKEN_NAME} from "@/common/constants/cookies";

const LoginContext = createContext({} as LoginContextProps)

const LoginProvider = ({ children }: LoginProviderProps) => {
    const [isLogin, setIsLogin] = useState(false)

    const token = jsCookie.get(TOKEN_NAME as string)

    useEffect(() => {
        if (token) {
            setIsLogin(true)

            return
        }

        setIsLogin(false)
    }, [token])

    return <LoginContext.Provider value={{ isLogin, setIsLogin }}>{children}</LoginContext.Provider>
}

export const useLoginContext = () => useContext(LoginContext)

type LoginProviderProps = {
    children: ReactNode
}

type LoginContextProps = {
    isLogin: boolean
    setIsLogin: Dispatch<SetStateAction<boolean>>
}

export default LoginProvider
