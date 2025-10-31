import { pool } from "../db.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import md5 from "md5";


export const signin = async (req, res) => {
  const {email, password} = req.body;
  const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);

  if (result.rowCount === 0){
    return res.status(400).json({ message: "El correo no está registrado" });
  }
  const validPassword = await bcrypt.compare(password, result.rows[0].password);

  if (!validPassword){
    return res.status(400).json({ message: "Contraseña incorrecta" });
  }
    const token = await createAccessToken({ id: result.rows[0].id }); //acá creamos el token para el usuario. De esta forma, cada vez que el usuario inicie sesión, se le asignará un token único que podrá usar para autenticar sus solicitudes posteriores.

    res.cookie("token", token, {
      //httpOnly: true,
      secure: true, // Asegura que la cookie 
      sameSite: "none",
      maxAge: 60 * 60 * 24 * 1000,
    })
    return res.json(result.rows[0]);
}


export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const gravatar = "https://www.gravatar.com/avatar/" + md5(email);
    console.log(hashedPassword);
    const result = await pool.query(
      "INSERT INTO usuarios (name, email, password, gravatar) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, hashedPassword, gravatar]
    );
    const token = await createAccessToken({ id: result.rows[0].id });

    res.cookie("token", token, {
      //httpOnly: true,
      secure: true, // Asegura que la cookie 
      sameSite: "none",
      maxAge: 60 * 60 * 24 * 1000,
    });

    return res.status(201).json(result.rows[0]);
    //return res.json({token: token});
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ message: "El usuario ya existe" });
    }
    next(error);
  }
};

export const signout = async (req, res) => {
  res.clearCookie("token");
  return res.json("Cierre de sesión exitoso");
}

export const profile = async (req, res) => {
  const result = await pool.query("SELECT * FROM usuarios WHERE id = $1", [req.userId]);
  return res.json(result.rows[0]);

}
