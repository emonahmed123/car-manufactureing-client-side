import React from 'react';
import { useParams } from 'react-router-dom';
import useBookperParthook from '../../hooks/useBookperParthook';

const Purchase = () => {
  const {id} =useParams()
   const [part] =useBookperParthook(id);
    const handlePurchase =(event)=>{
        event.preventDefault()
    }
   return (
        <div>
         
               <form onSubmit={handlePurchase}  className=' grid grid-cols-1 gap-3 justify-items-center mt-10' >
       <input type="text"  disabled value={part?.name}className="input input-bordered w-full max-w-xs" />
       <input type="text"  disabled value={part?._id}className="input input-bordered w-full max-w-xs" />

       <input type="text" name='name'  disabled   placeholder="Your Name"className="input input-bordered w-full max-w-xs" />
       <input type="email" name='email' disabled   placeholder="Email Address"className="input input-bordered w-full max-w-xs" />
       <input type="text" name='phone' placeholder="Phone Number"className="input input-bordered w-full max-w-xs" />
       <input type="submit"  value="Click to Purchase"className="btn btn-secondary w-full max-w-xs" />
      
       </form>




        
        </div>
    );
};

export default  Purchase;