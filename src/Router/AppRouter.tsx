import { Navigate, Route, Routes } from "react-router-dom";

import BlogRoutes from "../blog/Routes/BlogRoutes";
import SignIn from "../auth/pages/SignIn";
import { useAuth0 } from "@auth0/auth0-react";
import { Skeleton } from "@mui/material";

export const AppRouter = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Skeleton variant="rectangular" height={118} />;
  }

  return (
    <Routes>
      {isAuthenticated ? (
        <Route path="/*" element={<BlogRoutes />} />
      ) : (
        <Route path="/auth" element={<SignIn />} />
      )}

      {/* default route */}
      <Route path="/*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};
