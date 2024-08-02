import { logout } from "./auth.helper";

export const closeSession = () => {
  logout();
  window.location.href = "/login";
};
