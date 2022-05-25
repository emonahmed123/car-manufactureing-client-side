import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import  useAdmin from '../../hooks/useAdmin'
const DashBoard = () => {
  const [user] = useAuthState(auth);
  
  const [admin]=useAdmin(user) 
  
   return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
                     <h2 className='text-2xl font-bold text-purple-500' > Welcome to your Dashboard</h2>
                      <Outlet></Outlet>
          
        
        </div> 
        <div class="drawer-side">
          <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
           {
             admin? '' : <>
           
             <li><Link to="/dashboard/addRiview">Add a review </Link></li>
             <li><Link to="/dashboard/order">My Order</Link></li>
             </>
           }
           
           <li><Link to='/dashboard'>My Profile</Link></li>
      
          

           {admin && <>
            <li><Link to="/dashboard/alluser">Make Admin</Link></li>
            <li><Link to="/dashboard/mangepart">Mange Part</Link></li>
           
            <li><Link to="/dashboard/mangeorder">Mange Order</Link></li>
            <li><Link to="/dashboard/addpart">Add part</Link></li>
           
           
           </>} 
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;