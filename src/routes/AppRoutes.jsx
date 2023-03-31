import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Auth from '../pages/auth/auth';
import Home from '../pages/home/Home';



const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={"catalogo"} />
                <Route path='/product/:id' element={"productDetails"} />
                <Route path='/checkout' element={"Checkout"} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/user/profile' element={"perfil"} />
                <Route path='*' element={"Error"} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes