import React from 'react';
import {toast} from 'react-toastify';
const UserRow = ({user,index,refetch}) => {
   const{email,role} =user;
   
   const Adminmake = () =>{
    fetch(`http://localhost:5000/user/admin/${email}`,{
        method:'PUT',
        headers:{
         authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
        
        })
        .then(res=>{
          if(res.status === 403){
              toast.error('Faillded to Make an admin')
          } 
            return res.json()
            })
         .then(data =>{
              console.log(data)
             if(data.modifiedCount>0){
             toast.success('Make amin Sucees')
            refetch()
            
          }
         })
   
}
   return (
        <div>
              <tr>
        
        <th>{index+1} </th>
        <td>{email}</td>
        <td>{role !== 'admin' &&  <button onClick={Adminmake} className='btn btn-xs'>Make admin</button> }</td>
        {/* <td><button className='btn btn-xs'>Remove User</button> </td> */}
   
      </tr> 
        </div>
    );
};

export default UserRow;