import axios from "axios";

const RAW_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") ||
  "http://localhost:8000";

export const http = axios.create({
  baseURL: `${RAW_BASE}/api`,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

let accessToken: string | null = null;
const isBrowser = typeof window !== "undefined";

export function loadToken() {
  if (isBrowser && !accessToken) {
    const t = window.localStorage.getItem("access_token");
    if (t) {
      accessToken = t;
      http.defaults.headers.common["Authorization"] = `Bearer ${t}`;
    }
  }
}

loadToken();

export function setToken(token: string) {
  accessToken = token;

  if (isBrowser) {
    window.localStorage.setItem("access_token", token);
  }

  http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
