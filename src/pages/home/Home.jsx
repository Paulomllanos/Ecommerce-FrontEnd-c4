import Hijo from "../../components/ejemplo/Hijo"

const Home = () => {

  const monito = 0;

  return (
    <div>
        <h1>Hola, soy el incio de esta pagina</h1>
        <Hijo />
        <h1>{monito}</h1>
    </div>
  )
}

export default Home;