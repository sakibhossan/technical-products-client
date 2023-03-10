import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdminRole from '../../hooks/useAdminRole';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdminRole(user);
    return (
        <div class="drawer drawer-mobile mt-10 mb-8">
        <input id="dahboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            {/* <h2 className='text -5xl text-purple-500 mx-auto'>Dashboard</h2> */}

            <Outlet/>
          {/* <!-- Page content here --> */}
     
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link className=' bg-gradient-to-r  from-white to-gray-300 ...hover:from-green-400 hover:to-blue-500' to="/dashboard ">All Appoinment </Link></li>
           {admin && <li><Link className='  bg-gradient-to-r  from-white to-gray-300 ...hover:from-green-400 hover:to-blue-500 mt-2' to="/dashboard/users">All Users</Link></li>}
            <li><Link className='  bg-gradient-to-r  from-white to-gray-300 ...hover:from-green-400 hover:to-blue-500 mt-2 ' to="/dashboard/review">All Review</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;