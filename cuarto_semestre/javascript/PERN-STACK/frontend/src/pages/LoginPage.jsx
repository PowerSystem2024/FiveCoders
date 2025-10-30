import {Button, Card, Input, Label } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

function LoginPage() {

  const {register, handleSubmit} = useForm();
  const {signin} = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async(data) => {
    await signin(data); 
    navigate("/profile");
  }

);
  return (

    <div className="h-[calc(100vh-px)] flex items-center justify-center">
      <Card>
        <h1 className="text-4xl text-amber-50 font-bold my-2 text-center">Iniciar sesión</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Ingrese su email" {...register("email", {required: true})} ></Input>
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