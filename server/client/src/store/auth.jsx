//Context API , Rem: 3 Step, Creat,Provide and Consume i:e CPC

// Here Context API,  using because we dont want to localstorage token for every page,So, create once and use everywhere.

import { createContext, useContext, useEffect, useState } from "react";

//======================Create==================================//

export const AuthContext = createContext();

//=======================Provide=================================//
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState("");

  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIn:", isLoggedIn);

  // tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // Jwt authentication - to get the currentuser data
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("userdata", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // to fetch the services from DB.
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`servies frontend error: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        LogoutUser,
        isLoggedIn,
        user,
        services,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//=======================Consume=================================//
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    // meaning if tag doesnot use on main app.
    throw new Error("useAuth used outside of the Provider");
  }

  return authContextValue;
};
