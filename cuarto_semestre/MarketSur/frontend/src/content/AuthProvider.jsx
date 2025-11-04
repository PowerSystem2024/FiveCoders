import { useState } from "react";
import { AuthContext } from "./authContext.js";
import axios from "axios";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState(null);
  const signin = async (data) => {

    try {
      const res = await axios.post("http://localhost:3001/api/signin", data, {
        withCredentials: true, // esto es para que envie las cookies desde el backend
      });
      console.log(res);
      setUser(res.data);
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }

  };

  const signup = async (data) => {
    const res = await axios.post("http://localhost:3001/api/signup", data, {
      withCredentials: true, // esto es para que envie las cookies desde el backend
    });
    console.log(res);
    setUser(res.data);
  };

  return (
    <AuthContext.Provider value={{ user, isAuth, errors, signup, setUser, signin, setIsAuth }}>{children}</AuthContext.Provider>
  );
}
