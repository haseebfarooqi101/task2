// src/utils/cookies/index.js
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options = { path: "/" }) => {
  cookies.set(name, value, options);
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const deleteCookie = (name) => {
  cookies.remove(name, { path: "/" });
};
