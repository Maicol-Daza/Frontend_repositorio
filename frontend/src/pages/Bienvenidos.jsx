import { useAuthcontext } from "../context/AuthContext";
import { UseNavigate } from "react-router-dom";
import { Layout } from "../components/layout/layout";

import "./Principal.css";

export const Bienvenudos = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return(
    <Layout>
       <div className="bienvenido-dashboard">
          <h1 className="Bienvenido-saludo">Bienvenido {user?.nombre}</h1>
         <p className="bienvenido-rol">Rol: {user?.rol}</p>
       </div>
    </Layout>
  );
};
