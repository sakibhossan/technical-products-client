import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dahboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <h2 className='text -5xl text-purple-500'>Dashboard</h2>

            <Outlet/>
          {/* <!-- Page content here --> */}
     
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard">All Appoinment </Link></li>
            <li><Link to="/dashboard/users">All Users</Link></li>
            <li><Link to="/dashboard/review">All Review</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;