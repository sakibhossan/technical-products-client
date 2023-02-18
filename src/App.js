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
import ManageProduct from './Pages/Home/ManageProduct';
import AddItem from './Pages/Home/AddItem/AddItem';
import MyItem from './Pages/Home/MyItem';
import Payment from './Pages/Home/Payment';
import Dashboard from './Pages/Home/Dashboard';
import MyAppointments from './Pages/Home/MyAppointments';
import MyReview from './Pages/Home/MyReview';
import Allusers from './Pages/Home/Allusers';



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
        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem/>
          </RequireAuth>

        }></Route>
        <Route path='/payment/:id' element={
          <RequireAuth>
           <Payment></Payment>
          </RequireAuth>

        }></Route>
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageProduct/>
          </RequireAuth>

        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem/>
          </RequireAuth>

        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>

        }>

 <Route index element={<MyAppointments></MyAppointments>}></Route>
 <Route path='review' element={<MyReview></MyReview>}></Route>
 <Route path='users' element={<Allusers></Allusers>}></Route>

        </Route>
        <Route path='/checkout/:productId' element={
          <RequireAuth><CheckOut></CheckOut></RequireAuth>
        }></Route>
        
        <Route path='/products/:productId' element={<RequireAuth>
          <ProductDetail></ProductDetail>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>


    </div>
  );
}

export default App;
