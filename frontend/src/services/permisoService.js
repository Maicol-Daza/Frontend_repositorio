const API_URL = "http://localhost:3000/api/permisos";

export const leerPermisos = async () => {
const res = await fetch(API_URL);    
if (!res.ok) throw new Error("Error al obtener permisos");
return res.json(); 
};

export const crearPermisos = async (permiso) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(permiso),
    });
    if (!res.ok) throw new UNSAFE_ErrorResponseImpl("Error al actulizar permiso");
    return res.JSON();
};

export const actulizarPermiso = async (id, data) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "aplication/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al actulizar permiso");
    return res.json();
};

export const eliminarPermiso = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE"});
    if (!res.ok) throw new Error("Error al eliminar permiso");
    return res.json();
};