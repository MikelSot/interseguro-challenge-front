import jsCookie from "js-cookie";
import {TOKEN_EXPIRES_DAY, TOKEN_NAME} from "@/common/constants/cookies";

export const getToken = () => jsCookie.get(TOKEN_NAME)

export const login = (token: string) => {
  jsCookie.set(TOKEN_NAME, token, {
    secure: true,
    expires: TOKEN_EXPIRES_DAY,
  })
}
export const logout = () => {
  jsCookie.remove(TOKEN_NAME, {
    secure: true,
  });
}
