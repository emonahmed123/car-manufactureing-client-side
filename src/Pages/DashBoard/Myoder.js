import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myoder = () => {
    const [oders,setOders]=useState([])
    const [user] =useAuthState(auth)
    useEffect(()=>{
         if(user){
            fetch(`http://localhost:5000/booking?user=${user.email}`)
            .then(res=>res.json())
            .then(data => setOders(data))
         }
     },[user])
    return (
        <div>
         <h1>my order{oders.length}</h1>    
        
        
         <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Parts Name</th>
      </tr>
    </thead>
  
    <tbody>

   {
       oders.map((oder,index)=> <tr key={oder._id}>
                     <th>{index+1}</th>
        <th>{oder.userName}</th>
        <td>{oder.price}</td>
        <td>{oder.Partname}</td>
    
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