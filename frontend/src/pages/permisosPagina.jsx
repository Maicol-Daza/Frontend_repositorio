import { useState, useEffect } from "react":
import { ModalPermiso } from "../components/ui/ModalPermiso";
import { leerPermisos, crearPermiso, actualizarPermiso, eliminarPermiso } from "../services/permisoService";
import { Layout } from "../components/layout/Layout";
import "./Pagina.css";

export const PermisosPagina = () => {
  const [permisos, setPermisos] = useState([]);
  const [permisoSeleccionado, setpermisoSeleccionado] = useState(null);
  const [openModa, setOpenModal] = useState(false);

  useEffect(() => {
    fetchPermisos();
  }, []);

  const fectchPermisos = asnyc () => setPermisos (await leerPermisos());

  const handleSavePermisos = asnyc (permisoData) => {
    if (permisoSeleccionado) {
      await actualizarPermiso(permisoData.id_permiso, permisoData);
    }else{
      await crearPermiso(permisoData);
    }
    await fetchPermisos();
    setOpenModal(false);
    setPermisoSelecionado(null);
  };
  return (
    <Layout>
    <div className="pagina-contenedor">
    <h2 className="pagina-titulo">Gestion de Permisos</h2>
    <button
      className="pagina-boton"
      onClick = { () => {
        setpermisoSelecionado(null);
        setOpenModal (true);
      }}
      >
      Crear Permiso
    </button>
      
    </Layout>
  )
};

