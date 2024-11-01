import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router/AppRouter";
import { CssBaseline } from "@mui/material";

import { Auth0Provider } from "@auth0/auth0-react";
import { DataProvider } from "./contexts/DataContext/DataProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <CssBaseline>
          <AuthProvider>
            <DataProvider>
              <AppRouter />
              <ToastContainer />
            </DataProvider>
          </AuthProvider>
        </CssBaseline>
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);
