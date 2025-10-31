import { Card, Button, Input, Label } from "../components/ui";
import {  useForm } from "react-hook-form";
import { Link , useNavigate} from "react-router-dom";
import {  useAuth } from "../content/AuthContext.jsx";

function RegisterPage() {
  const {register, handleSubmit, formState: { errors }} = useForm();

  const {signup, errors: setUserErrors} = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async(data) => {
  const user  = await signup(data);
    if(user){
      navigate("/tareas");
    }
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        {setUserErrors && setUserErrors.map((error) =>(
            <p className="bg-red-500 text-white p-2">{error}</p>
          ))}

        <h2 className="text-white text-4xl font-bold my-4">Registro</h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Nombre</Label>
          <Input
            placeholder="Ingrese su nombre"
            {...register("name", { required: true })}
          ></Input>
          {errors.name && (
            <span className="text-red-500">Este campo es obligatorio</span>
          )}
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Ingrese su email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Este campo es obligatorio</span>
          )}
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Ingrese su contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">Este campo es obligatorio</span>
          )}

          <Button>Registrarse</Button>
        </form>
           <div className="flex justify-between my-4">
          <p>¿Ya tienes cuenta?</p>
          <Link to="/login">Iniciar sesión</Link>

        </div>
      </Card>
    </div>
  );
}

export default RegisterPage;
