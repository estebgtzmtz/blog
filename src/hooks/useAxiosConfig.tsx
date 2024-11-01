import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";

const useAxiosConfig = () => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const setInterceptor = async () => {
      axios.interceptors.request.use(
        async (config) => {
          try {
            const token = await getAccessTokenSilently();
            if (token && config.headers) {
              config.headers.Authorization = `Bearer ${token}`;
            }
          } catch (error) {
            console.error("Error obtaining the token:", error);
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    };

    setInterceptor();
  }, [getAccessTokenSilently]);
};

export default useAxiosConfig;
