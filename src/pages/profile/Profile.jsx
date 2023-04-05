import UserContext from "../../context/user/UserContext";
import { useContext } from "react";

const Profile = () => {

    const {infoUser} = useContext(UserContext)

    const {name, email, isAdmin} = infoUser

  return (
    <div>
        <h1>{name}</h1>
        <h3>{email}</h3>
        <p>{isAdmin ? "Administrador" : "cliente"}</p>
    </div>
  )
}

export default Profile