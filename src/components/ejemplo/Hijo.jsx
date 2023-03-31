import { useContext } from "react"
import UserContext from "../../context/user/UserContext"

const Hijo = () => {
   
  const {msg} = useContext(UserContext)


  return (
    <div>
        <h1>{msg}</h1>
    </div>
  )
}

export default Hijo