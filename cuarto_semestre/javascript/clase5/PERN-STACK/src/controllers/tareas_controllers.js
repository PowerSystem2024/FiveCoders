export const listarTareas = (req, res) => res.send('Obteniendo tareas');
export const listarTarea = (req, res) => res.json(`Obteniendo tarea única`);
export const crearTarea = (req, res) => res.json('Creando tarea');
export const actualizarTarea = (req, res) => res.json(`Actualizando tarea`);
export const eliminarTarea = (req, res) => res.json(`Eliminando tarea`);