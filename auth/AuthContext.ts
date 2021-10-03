import { createContext, useContext } from "react";

export const AuthContext = createContext({
  token: "",
  setToken: (token: string) => {},
});
export const useAuth = () => useContext(AuthContext);
