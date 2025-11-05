// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { PublicRoutes, PrivateRoutes } from "./navigation";
// import {useAuth} from "../../content/AuthContext.jsx";


// function Navbar({children}) {

//     const location = useLocation();
//     const navigate = useNavigate();
//     const { isAuth, signout, user } = useAuth();
//       const handleNavClick = (e, path) => {
//         // Si la ruta contiene parámetros dinámicos
//         if (path.includes(':id')) {
//             e.preventDefault();
//             const id = prompt('Ingresa el ID de la tarea:');
//             if (id) {
//                 const newPath = path.replace(':id', id);
//                 navigate(newPath);
//             }
//         }
//     };
//   return (
//         <>
//             <nav className="bg-zinc-950 flex justify-between px-20 py-7">
//                 <h1 className="text-white text-xl font-bold">
//                     GESTOR DE TAREAS 
//                 </h1>
//                 <ul className="flex gap-x-2 items-center">
//                     {isAuth ? PrivateRoutes.map(({ name, path }) => (
//                         <li className={`px-3 py-1 rounded ${location.pathname === path ? 'bg-sky-500 text-white' : 'text-gray-300 hover:text-white'}`} key={name} >
//                             <Link to={path} onClick={(e) => handleNavClick(e, path)}>{name}</Link>
//                         </li>
//                     )) : PublicRoutes.map(({ name, path }) => (
//                         <li className={`px-3 py-1 rounded ${location.pathname === path ? 'bg-sky-500 text-white' : 'text-gray-300 hover:text-white'}`} key={name} >
//                             <Link to={path}>{name}</Link>
//                         </li>
//                     ))}
//                     {isAuth && (
//                         <>
//                             <li className="flex items-center gap-x-2 px-3">
//                                 <img
//                                     src={user?.gravatar || `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp`}
//                                     alt="Avatar"
//                                     className="w-8 h-8 rounded-full border-2 border-sky-500"
//                                 />
//                                 <span className="text-white font-medium">{user?.name}</span>
//                             </li>
//                             <li>
//                                 <button
//                                     onClick={signout}
//                                     className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                                 >
//                                     Cerrar Sesión
//                                 </button>
//                             </li>
//                         </>
//                     )}
//                 </ul>
//             </nav>
//             <main>
//                 {children}
//             </main>
//         </>
//     );
// }
// export default Navbar;



import { Link, useLocation, useNavigate } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./navigation";
import { useAuth } from "../../content/AuthContext.jsx";

function Navbar({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuth, signout, user } = useAuth();

    const handleNavClick = (e, path) => {
        // Si la ruta contiene parámetros dinámicos
        if (path.includes(":id")) {
            e.preventDefault();
            const id = prompt("Ingresa el ID de la tarea:");
            if (id) {
                const newPath = path.replace(":id", id);
                navigate(newPath);
            }
        }
    };

    return (
        <>
            <nav className="bg-zinc-950 flex items-center justify-between px-6 md:px-12 py-4 md:py-3">
                {/* Logo + Title */}
                <div className="flex items-center gap-3">
                    <Link to="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded">
                        <img
                            src="../src/assets/Market.png"
                            alt="Market Sur logo"
                            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain rounded-sm"
                        />
                        <h1 className="text-white text-base md:text-lg lg:text-xl font-bold">Market Sur</h1>
                    </Link>
                </div>

                {/* Navigation */}
                <ul className="flex gap-2 items-center">
                    {isAuth
                        ? PrivateRoutes.map(({ name, path }) => (
                            <li
                                className={`px-3 py-1 rounded ${location.pathname === path ? "bg-sky-500 text-white" : "text-gray-300 hover:text-white"}`}
                                key={name}
                            >
                                <Link to={path} onClick={(e) => handleNavClick(e, path)}>
                                    {name}
                                </Link>
                            </li>
                        ))
                        : PublicRoutes.map(({ name, path }) => (
                            <li
                                className={`px-3 py-1 rounded ${location.pathname === path ? "bg-sky-500 text-white" : "text-gray-300 hover:text-white"}`}
                                key={name}
                            >
                                <Link to={path}>{name}</Link>
                            </li>
                        ))}

                    {isAuth && (
                        <>
                            <li className="flex items-center gap-2 px-3">
                                <img
                                    src={user?.gravatar || `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp`}
                                    alt="Avatar"
                                    className="w-8 h-8 rounded-full border-2 border-sky-500"
                                />
                                <span className="text-white font-medium hidden md:inline">{user?.name}</span>
                            </li>

                            <li>
                                <button
                                    onClick={signout}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                                >
                                    Cerrar Sesión
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>

            <main>{children}</main>
        </>
    );
}

export default Navbar;