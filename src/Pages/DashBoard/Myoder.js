import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate , useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const Myoder = () => {
    const [oders,setOders]=useState([])
    const [user] =useAuthState(auth)
    const navigate =useNavigate()
    useEffect(()=>{
         if(user){
            fetch(`https://obscure-sierra-06742.herokuapp.com/booking?user=${user.email}`,{

              method: 'GET',
              headers: {
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }

            })
            .then(res=>{
               console.log(res)
               if (res.status === 401 || res.status === 403) {
                
                signOut(auth);
                localStorage.removeItem('accessToken')
                navigate('/');
            }
               return res.json()
            })
            .then(data => setOders(data))
         }
     },[user])
    return (
        <div>
         <h1>my order{oders?.length}</h1>    
        
        
    <div  className="overflow-x-auto">
  <table  className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Parts Name</th>
        <th>Payment</th>
      </tr>
    </thead>
  
    <tbody>

   { 
       oders?.map((oder,index)=> <tr key={oder._id}>
                     <th>{index+1}</th>
        <th>{oder.userName}</th>
        <td>{oder.price}</td>
        <td>{oder.Partname}</td>
        <td>{(oder.price  && !oder.paid) && <Link to={`/dashboard/payment/${oder._id}`}><button className='btn btn-secondary'>pay</button></Link>}</td>
        <td>{(oder.price  && oder.paid) && <span className='text-success' > paid </span>} </td>
    
        <td>
          </td>
        
      </tr>)
   }

    
    </tbody>
  </table>
</div>
        
        </div>
    );
};

export default Myoder;