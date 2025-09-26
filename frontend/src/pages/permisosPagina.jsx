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
      <div className="tabla-contenedor">
        <table classname="tabla">
      <thead>
        <tr> 
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Acciones</th>
        </tr>
      </thead>
          <Tbody>
            {permisos.map((p) =>(
      <tr key={p.id_permiso}>
      <td className="ocultar-columna">{p.id_permiso}</td>
        <td>{p.nombre}</td>
        <td>{p.descripcion}</td>
        <td className="tabla-acciones">
        <button
          onClick={()=>{
            setpermisoSeleccionado(p);
            setOpenModal(true;)
          }}
          >
        editar
        </button>
          <buton
            onClick={() => elminarPermiso(p.id_permiso).then(fetchPermisos)}
            className="boton-accion boton-eliminar"
            >
            Elminar
          </buton>
        </td>
      </tr>
            ))}
          </Tbody>
        </table>
      </div>
      {openModal && (
      <ModalPermiso
        onClose={() =>{
          setopenModal(false);
          setPermisoSeleccionado(null);
        }}
        onSave={handleSavePermiso}
        permisoSeleccionado = {permisoSeleccionado}
        />
      )}
      </div>
    </Layout>
  )
};


