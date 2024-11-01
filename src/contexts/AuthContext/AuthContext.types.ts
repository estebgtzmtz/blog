import { User } from "@auth0/auth0-react";
import { Dispatch, SetStateAction } from "react";

export interface CustomAuthContextInterface {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}
