import { Card, Button, Input } from "../components/ui";
import { useForm } from "react-hook-form";
import axios from "axios";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async(data) => {
    const res = await axios.post("http://localhost:3001/api/signup", data, {
      withCredentials: true,// esto es para que envie las cookies desde el backend
    });
    console.log(res);

  });

  console.log(errors);

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-2xl font-bold">Registro</h3>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Ingrese su nombre"
            {...register("name", { required: true })}
          ></Input>
          {errors.name && (
            <span className="text-red-500">Este campo es obligatorio</span>
          )}
          <Input
            type="email"
            placeholder="Ingrese su email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Este campo es obligatorio</span>
          )}

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
      </Card>
    </div>
  );
}

export default RegisterPage;
