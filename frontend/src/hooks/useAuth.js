import { useState, useEffect } from "react";
import { loginRequest } from "../service/authService";

export cosnt useAuth = () => {
  const [user, setUser] = useState (null);
  const [token, serToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token && !user){
      // aqui se valida el token de backend
      const storedUser = JSON.parse (localStorage.getItem("user"));
      if (storedUser) set (storedUser);
    }
  },[token]);

  const login = async ( email, password) => {
    const data = await loginRequest ({ email,password });

    if (data.token) {
      setToken( data.token);
      setUser( data.usuario);

      localStorage.setItem ("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.usuario));

      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    serToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  return { user, token, login, logout };
};
