import React from 'react';
import { useNavigate } from 'react-router-dom';

const SinglePart = ({part}) => {

  const {_id,name,img,description,price,minimumorderquantity,availablequantity} = part;
   
   const navigate =useNavigate();
   const NavigaetPurchase =(_id)=>{
      
       navigate(`/purchase/${_id}`)
   }


  return (
         <div> 
          
<div class="card  lg:max-w-lg bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img  className='w-24 h-24 md:w-48 md:h-auto  md:rounded-none rounded-full mx-auto'src={img}alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
    <p>price ${price}</p>
   <p> minimum order quantity:{minimumorderquantity}</p>
    <p>available quantity:{availablequantity}</p>
    <div class="card-actions">
      <button onClick={()=>NavigaetPurchase(_id)} class="btn btn-sm  btn-secondary text-white    bg-gradient-to-r from-secondary to-primary">Buy Now</button>
    </div>
  </div>
</div>









        </div> 
     )
};

export default SinglePart;