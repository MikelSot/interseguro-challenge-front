import jsCookie from "js-cookie";

export const TOKEN_COOKIE_NAME = "authToken"; // Nome do cookie
export const TOKEN_EXPIRES = 7; // Days to expire token
export const TOKEN_EXPIRES_LAPSE = 604800000; // 7 days in milliseconds

export const isAuthenticated = () => !!jsCookie.get(TOKEN_COOKIE_NAME);

export const getToken = () => jsCookie.get(TOKEN_COOKIE_NAME);

export const login = (token: string) =>
  jsCookie.set(TOKEN_COOKIE_NAME, token, {
    secure: true,
    expires: TOKEN_EXPIRES,
  });

export const logout = () => {
  jsCookie.remove(TOKEN_COOKIE_NAME, {
    secure: true,
  });
};

export const removeExpiredToken = () => {
  const token = jsCookie.get(TOKEN_COOKIE_NAME);

  if (!token) return;

  const { exp: expirationTime } = JSON.parse(atob(token.split(".")[1]));

  if (expirationTime * 1000 < Date.now() + TOKEN_EXPIRES_LAPSE) return;

  jsCookie.remove(TOKEN_COOKIE_NAME, {
    secure: true,
  });
};
