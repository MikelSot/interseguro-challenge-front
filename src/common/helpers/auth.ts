import jsCookie from "js-cookie";
import {TOKEN_EXPIRES_DAY, TOKEN_NAME} from "@/common/constants/cookies";


export const setToken = (token: string) => {
  jsCookie.set(TOKEN_NAME, token, {
    secure: true,
    expires: TOKEN_EXPIRES_DAY,
  })
}
