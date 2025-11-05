import {Button, Card, Input, Label } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { useAuth } from "../content/AuthContext.jsx";

function LoginPage() {

  const {register, handleSubmit, formState: {errors}} = useForm();
  const {signin, errors: loginErrors} = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async(data) => {
    const user = await signin(data); 
    if(user) {navigate("/profile");

    }
  });
  return (

    <div className="min-h-screen bg-blue-500 flex items-center justify-center px-4">
      <Card>
        {loginErrors && loginErrors.map((error) =>(
            <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">{error}</p>
          ))}

        <h2 className="text-gray-800 text-2xl font-semibold mb-6 text-center">Iniciar sesión</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Ingrese su email"
            {...register("email", {required: true})}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">Este campo es obligatorio</span>
          )}
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Ingrese su contraseña"
            {...register("password", {required: true})}
          />
          {errors.password && (
            <span className="text-red-500 text-xs">Este campo es obligatorio</span>
          )}

          <div className="mt-6">
            <Button>Iniciar sesión</Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          <p className="text-gray-600">¿No tienes cuenta?{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-600 font-medium">
              Registrate
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}

export default LoginPage