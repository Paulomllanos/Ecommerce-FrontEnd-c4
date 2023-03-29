import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';



const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={"home"} />
                <Route path='/products' element={"catalogo"} />
                <Route path='/product/:id' element={"productDetails"} />
                <Route path='/checkout' element={"Checkout"} />
                <Route path='/auth' element={"auth"} />
                <Route path='/user/profile' element={"perfil"} />
                <Route path='*' element={"Error"} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes