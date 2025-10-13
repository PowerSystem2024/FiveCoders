import { pool } from "../db.js";

export const listarTareas = async (req, res) => {
    console.log(req.userId);
    const result = await pool.query("SELECT * FROM tareas where usuario_id = $1", [req.userId]);
    return res.json(result.rows);
};

export const listarTarea = async (req, res) => {
    const result = await pool.query("SELECT * FROM tareas WHERE id = $1", [req.params.id]);
    if (result.rows.length === 0)
        return res.status(404).json({ message: "Tarea no encontrada" });
    return res.json(result.rows);
};

export const crearTarea = async (req, res, next) => {
  const { titulo, descripcion } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tareas (titulo, descripcion, usuario_id) VALUES ($1, $2, $3) RETURNING *",
      [titulo, descripcion, req.userId]
    );
    res.json(result.rows);
    console.log(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "La tarea ya existe" });
    }
    console.log(error);
    next(error);
  }
};

export const actualizarTarea = async (req, res) => {
    const {titulo, descripcion} = req.body;
    const id = req.params.id;
    const result = await pool.query("UPDATE tareas SET titulo = $1, descripcion = $2 WHERE id = $3 RETURNING *", [titulo, descripcion, id]);
    if (result.rows.length === 0)
        return res.status(404).json({ message: "Tarea no encontrada" });   
    return res.json(result.rows); 
};

export const eliminarTarea = async (req, res) => {

    const result = await pool.query("DELETE FROM tareas WHERE id = $1 RETURNING *", [req.params.id]);
    if (result.rows.length === 0)
        return res.status(404).json({ message: "Tarea no encontrada" });    
    return res.json(`Tarea ${result.rows.id} eliminada con exito`);
};
