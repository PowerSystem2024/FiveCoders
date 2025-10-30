import { createContext } from "react";

export const AuthContext = createContext();

//define el tipo de contexto que se va a manejar en la aplicación. 
// En este caso, se trata de un contexto de autenticación (AuthContext) que probablemente contendrá información sobre el usuario autenticado, su estado de autenticación y posibles errores relacionados con la autenticación.
//AuthProvider.jsx es el proveedor de este contexto, que envuelve a los componentes hijos y les proporciona acceso a los valores definidos en el contexto. Gestiona el estado de autenticación y proporciona funciones para actualizar ese estado.
//useAuth.jsx es un hook personalizado que facilita el acceso al contexto de autenticación desde cualquier componente funcional dentro de la aplicación.
//main.jsx es el punto de entrada de la aplicación React, donde se configura el enrutamiento y se envuelve la aplicación con el AuthProvider para que todos los componentes tengan acceso al contexto de autenticación.