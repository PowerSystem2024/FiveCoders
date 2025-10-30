import { useAuth } from "../hooks/useAuth"

function ProfilePage() {
  const {user} = useAuth();
  return (
    <div>
      {JSON.stringify(user, null, 2)}
    </div>
  )
}

export default ProfilePage