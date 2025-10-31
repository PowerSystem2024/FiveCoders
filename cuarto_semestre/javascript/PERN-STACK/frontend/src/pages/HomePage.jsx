import { useContext } from 'react';
import { AuthContext } from "../content/authContext.js";

function HomePage() {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <div>HomePage</div>
  )
}

export default HomePage