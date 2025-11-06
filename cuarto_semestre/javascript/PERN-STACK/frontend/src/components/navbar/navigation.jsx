import { MdAddTask } from 'react-icons/md';
import { BiTask, BiUserCircle } from 'react-icons/bi';

export const PublicRoutes = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
    { name: 'About', path: '/about' }
];
export const PrivateRoutes = [
  { name: "Perfil", path: "/profile", icon: <BiUserCircle /> },
  { name: "Tareas", path: "/tareas", icon: <BiTask /> },
  { name: "Agregar", path: "/tareas/crear", icon: <MdAddTask /> }
];