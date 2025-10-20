import express from 'express';
import morgan from 'morgan';
import tareasRoutes from './router/tareas_routes.js';
import authRoutes from './router/auth_routes.js';   
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();// Crear la aplicación de Express- sirve para crear el servidor

app.use(morgan("dev")); // Middleware de logging
app.use(cors({ origin: 'http://localhost:5173', credentials: true })); // Configurar CORS
app.use(cookieParser()); // Middleware para parsear cookies
app.use(express.json()); // Middleware para parsear JSON
app.use(express.urlencoded({ extended: false })); //sirve para parsear formularios

app.get('/', (req, res) => {res.json('Bienvenidos al proyecto!')});
app.use('/api', tareasRoutes); // Rutas de tareas
app.use('/api', authRoutes); // Rutas de autenticación

app.use((err, req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: err.message
  });
});

export default app;

