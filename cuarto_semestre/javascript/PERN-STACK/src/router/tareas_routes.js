import Router  from "express-promise-router";
import { listarTareas, listarTarea, crearTarea, actualizarTarea, eliminarTarea } from '../controllers/tareas_controllers.js';

const router = Router();//sirve para crear las rutas
router.get('/tareas', listarTareas );
router.get('/tareas/:id', listarTarea);
router.post('/tareas',  crearTarea);
router.put('/tareas/:id', actualizarTarea);     
router.delete('/tareas/:id', eliminarTarea);

export default router;