import { useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState(null);
  const signin = async (data) => {
    const res = await axios.post("http://localhost:3001/api/sigin", data, {
      withCredentials: true, // esto es para que envie las cookies desde el backend
    });
    console.log(res);
    setUser(res.data);
  };

  const signup = async (data) => {
    const res = await axios.post("http://localhost:3001/api/signup", data, {
      withCredentials: true, // esto es para que envie las cookies desde el backend
    });
    console.log(res);
    setUser(res.data);
  };

  const contextValue = {
    user,
    isAuth,
    errors,
    signup,
    signin,
    setUser,
    setIsAuth,
    setErrors,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
