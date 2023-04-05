import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Auth from '../pages/auth/auth';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import { useContext, useEffect } from 'react';
import UserContext from '../context/user/UserContext';



const AppRoutes = () => {


  // useEffect el cual verifica el token del usuario

  
  const {verifyToken, authStatus} = useContext(UserContext)

  useEffect(() => {
   const getUser = async() => {
       await verifyToken()
   }

   getUser()
       
  }, [authStatus])


  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={"catalogo"} />
                <Route path='/product/:id' element={"productDetails"} />
                <Route path='/checkout' element={"Checkout"} />
                {!authStatus && <Route path='/auth' element={<Auth />} />}
                {authStatus && <Route path='/user/profile' element={<Profile />} />}
                <Route path='*' element={<Navigate to="/" />} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes