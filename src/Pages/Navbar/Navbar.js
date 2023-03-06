import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);
    
    const logOut =()=>{
    signOut(auth);
    localStorage.removeItem('acessToken');
    };

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/myItem'>MyItem</Link></li>
        <li><Link to='/additem'>Add Items</Link></li>
        <li><Link to='/manageitem'>Manage Itmes</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li>{
            user && <Link to='/dashboard'>Dashboard</Link>
            }</li>
        
        <li><Link to='/myprofile'>My Profile</Link></li>
           <li>{user ? <button class="btn btn-ghost"
           onClick={logOut}
           >SignOut</button> :<Link to='/login'>Login</Link>}</li>
            

    </>
    return (
       
        <div class="navbar  bg-success sticky top-0 z-[50] ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  ">

                {menuItems}


                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl"><Link to='/'>Technical Products</Link></a>
            </div>
            <div class="navbar-center hidden lg:flex ">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}

                </ul>
            </div>
           <div className="navbar-end">
           <label  tabIndex="1" for="dahboard-sidebar" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
           </div>
           
           
           
        </div>
       
    );
};

export default Navbar;

