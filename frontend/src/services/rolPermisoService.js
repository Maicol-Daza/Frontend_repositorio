const API_URL = "http://localhost:3000/api/rol-permiso";

export const leerRolpermisos = async () => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al obtener rol-permisos");
    return res.json();
};

export const leerPermisosDeRol = async (idRol) => {
    const res = await fetch(`${API_URL}/rol/${idRol}`);
    if (!res.ok) throw new Error("Error al obtener permiso del rol ");
    return res.json();
};

export const leerRolPermisosDeRol = async (id) => {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Error al obtener rol-permiso");
    return res.json();
};

