import { createContext } from "react";
import { CustomAuthContextInterface } from "./AuthContext.types";

export const AuthContext = createContext<CustomAuthContextInterface>({
  user: null,
  setUser: () => {},
});
