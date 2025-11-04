import { useAuth } from "../content/AuthContext.jsx";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container.jsx";


function HomePage() {
const { isAuth, user } = useAuth();
  return(

 <Container className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-green-600 text-center">
            BIENVENIDOS A PROYECTO PERN BY FIVECODERS
          </h1>
          <p className="text-2xl text-gray-500">
            APLICACIÓN DE GESTIÓN DE TAREAS
          </p>
        </div>

        {/* Descripción */}
        <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800">
          <p className="text-xl text-gray-300 leading-relaxed">
              Aplicación full-stack construida con <span className="text-amber-500 font-semibold">PostgreSQL</span>,{" "}
            <span className="text-green-400 font-semibold">Express</span>,{" "}
            <span className="text-blue-400 font-semibold">React</span> y{" "}
            <span className="text-amber-500 font-semibold">Node.js</span>
          </p>
        </div>

        {/* Call to Action */}
        {isAuth ? (
          <div className="space-y-4">
            <p className="text-xl text-white">
              Hola, <span className="text-sky-400 font-semibold">{user?.name}</span>! 👋
            </p>
            <Link
              to="/tareas"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Ver mis Tareas
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-xl text-gray-500">
              Estás a un paso de mejorar tu productividad. ¡Únete ahora!
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/login"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-8 py-4 rounded-lg text-lg border border-zinc-700 transition-all transform hover:scale-105"
              >
                Registrarse
              </Link>
            </div>
          </div>
        )}

      </div>
    </Container>
  )
  
}

export default HomePage