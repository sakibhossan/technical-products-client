import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';



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
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>

      </Routes>


    </div>
  );
}

export default App;
