import { getCookie, setCookie, deleteCookie } from "../Cookies";

export const isUserLoggedIn = () => {
  return !!getCookie("authToken");
};

export const loginUser = (email) => {
  setCookie("authToken", email);
};

export const logoutUser = () => {
  deleteCookie("authToken");
};
