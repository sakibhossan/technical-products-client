import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import ProductDetail from './Pages/Home/ProductDetail';
import NotFound from './Pages/Shared/NotFound';
import CheckOut from './Pages/Home/CheckOut';
import Navbar from './Pages/Navbar/Navbar';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={
          <RequireAuth>
            <About></About>
          </RequireAuth>

        }></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>


    </div>
  );
}

export default App;
