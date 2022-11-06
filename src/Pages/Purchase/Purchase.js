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
    const handlePurchase =(event)=>{     
      event.preventDefault()
          const price =part.price;
          const orderQuentey= parseInt(event.target.order.value) 
          const totalPrice =price * orderQuentey;
                   if(part.availablequantity < orderQuentey){
                    return toast.error("Sorry!! You can not order more then stock")
     
                   }
                   if(orderQuentey < 1){
                     return toast.error ("Sorry!! minimum order 50")
                   }
     
     
          const booking={
             partId:part._id,
             Partname:part.name,
             price:totalPrice,
             user:user.email,
             userName:user.displayName,
             phone:event.target.phone.value,
             address:event.target.address.value,
             orderQuentey
            }
        fetch('https://car-manunfuctrue-server.onrender.com/booking',{

        method:'POST',
        headers:{
            'content-type':'application/json',
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
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
     <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
   <figure class="px-10 pt-10 h-48">
    <img  className='md:w-48 md:h-48 md:rounded-none rounded-full mx-auto'src={part.img}alt="Shoes" class="rounded-xl" />
   </figure>
   <div className="card-body items-center text-center pt-24  ">
    <h2 className="card-title">{part.name}</h2>
    <p>{part.description}</p>
    <p>price ${part.price}</p>
    <p> minimum order quantity:{part.minimumorderquantity}</p>
    <p>available quantity:{part.availablequantity}</p>
  
    </div>
  </div>
     
            <div>
              
           <h1 className='text-2xl text-primary'> Purchaseing to {part.name}</h1>
         <form onSubmit={handlePurchase}  className=' grid grid-cols-1 gap-3 justify-items-center mt-10' >
       <input type="text"  disabled value={part?.name}className="input input-bordered w-full max-w-xs" />
       <input type="text" name='name' value={user?.displayName ||''} disabled   placeholder="Your Name"className="input input-bordered w-full max-w-xs" />
       <input type="email" name='email' value={user?.email||''}  disabled   placeholder="Email Address"className="input input-bordered w-full max-w-xs" />
       <input type="text" name='phone' placeholder="Phone Number"className="input input-bordered w-full max-w-xs" />
       <input type="number" name='order' required placeholder="Oder Quantity"className="input input-bordered w-full max-w-xs" />
       <input type="text"  name='address' placeholder="Enter Your Address"className="input input-bordered w-full max-w-xs" />
          
        <input type="submit"  value="Click to Purchase"className="btn btn-primary w-full max-w-xs"/>
              
           
       </form>
        
        </div>
  </div>
    );
};

export default  Purchase;