import  {AuthContext} from "../content/authContext.js";
import { useContext } from "react";
function ProfilePage() {
  const {user} = useContext(AuthContext);
  return (
    <div>
      {JSON.stringify(user, null, 2)}
    </div>
  )
}

export default ProfilePage