import React from 'react';
import { useQuery } from 'react-query';
import Loding from '../Shared/Loding';
import UserRow from './UserRow';
const Alluser = () => {

    const {data:user,isLoading,refetch } =useQuery('user',()=>fetch('http://localhost:5000/user',{
        method:"GET",   
       headers: {
             authorization: `Bearer ${localStorage.getItem('accessToken')}`
         }
 
     }).then(res=>res.json()))
      if(isLoading){
      return <Loding></Loding>
      }



   
      if(isLoading){
          return <Loding></Loding>
      }
    return (
        <div>
        <h2 className='text-2xl' >All users:{user.length}</h2>
   
   
        <div class
        Name="overflow-x-auto">
<table className="table w-full">

<thead>
<tr>
    <th>Email</th>

  </tr>
</thead>

<tbody>
   {
     user.map((user,index)=><UserRow  user={user} index={index} key={user._id} refetch={refetch}></UserRow>)

   }
</tbody>
</table>
</div>
   
   
   
   
    </div>
    );
};

export default Alluser;