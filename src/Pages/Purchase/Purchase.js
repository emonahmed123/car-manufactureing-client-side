import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useBookperParthook from '../../hooks/useBookperParthook';
import {toast} from 'react-toastify';
const Purchase = () => {
  const {id} =useParams()
    const [user] =useAuthState(auth)
  const [part] =useBookperParthook(id);
    const handlePurchase =(event)=>{       event.preventDefault()
        const booking={
             partId:part._id,
             Partname:part.name,
             price:part.price,
             user:user.email,
             userName:user.displayName,
             phone:event.target.phone.value,
             address:event.target.address.value
        }
        fetch('http://localhost:5000/booking',{

        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.acknowledged){
              toast('Booking done')
          }
          else{
              toast('please try after')
          }

        })

    }
   return (
        <div className='my-11'> 
                    <h1 className='text-2xl text-primary'> Purchaseing to {part.name}</h1>
               <form onSubmit={handlePurchase}  className=' grid grid-cols-1 gap-3 justify-items-center mt-10' >
       <input type="text"  disabled value={part?.name}className="input input-bordered w-full max-w-xs" />
       <input type="text" name='name' value={user?.displayName ||''} disabled   placeholder="Your Name"className="input input-bordered w-full max-w-xs" />
       <input type="email" name='email' value={user?.email||''}  disabled   placeholder="Email Address"className="input input-bordered w-full max-w-xs" />
       <input type="text" name='phone' placeholder="Phone Number"className="input input-bordered w-full max-w-xs" />
       <input type="text" name='address' placeholder="Enter Your Address"className="input input-bordered w-full max-w-xs" />
       <input type="submit"  value="Click to Purchase"className="btn btn-primary w-full max-w-xs" />
      
       </form>




        
        </div>
    );
};

export default  Purchase;