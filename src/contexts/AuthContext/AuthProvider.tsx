import { FC, useContext, useEffect, useState } from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import { AuthContext } from "./AuthContext";
import { ChildrenProps } from "../../common/types/types";
import { CustomAuthContextInterface } from "./AuthContext.types";

export const AuthProvider: FC<ChildrenProps> = ({ children }) => {
  const { user: auth0User, isLoading, isAuthenticated } = useAuth0();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!isLoading && isAuthenticated && auth0User) {
      setUser(auth0User);
    }
  }, [auth0User, isLoading, isAuthenticated]);

  const contextValue: CustomAuthContextInterface = {
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthCustom = () => useContext(AuthContext);
