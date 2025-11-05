import {Button, Card, Input, Label } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { useAuth } from "../content/AuthContext";

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

    <div className="h-[calc(100vh-px)] flex items-center justify-center">
      <Card>
        
          {loginErrors  && loginErrors .map((error) =>(
            <p className="bg-red-500 text-white p-2">{error}</p>
          )
)}
        <h1 className="text-4xl text-amber-50 font-bold my-2 text-center">Iniciar sesión</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Ingrese su email" {...register("email", {required: true})} ></Input>
           {
            errors.email && <span className="text-red-500">Este campo es obligatorio</span>
          }
          <Label htmlFor="password">Contraseña</Label>
          <Input type="password" placeholder="Ingrese su contraseña" {...register("password", {required: true})} ></Input>
          <Button>Iniciar sesión</Button>
        </form>
        <div className="flex justify-between my-4 text-amber-50">
          <p>¿No tienes cuenta?</p>
          <Link to="/register"> - Registrate </Link>

        </div>
        </Card>  
    </div>
  )
}

export default LoginPage