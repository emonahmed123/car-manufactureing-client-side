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
          
<div className="card  h-[525px] relative lg:max-w-lg  bg-base-100 shadow-xl">
  <figure class="px-10 pt-10 h-48">
    <img  className='md:w-48 md:h-48 md:rounded-none rounded-full mx-auto'src={img}alt="Shoes" class="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center pt-24 pb-12  ">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>Price ${price}</p>
    <p>Minimum order quantity:{minimumorderquantity}</p>
    <p>Available quantity:{availablequantity}</p>
    <div className=" absolute bottom-0 w-full ">
      <button onClick={()=>NavigaetPurchase(_id)} class="btn   btn-secondary w-full text-white    bg-gradient-to-r from-secondary to-primary">Buy Now</button>
    </div>
    {/* card-actions */}
  </div>
</div>









        </div> 
     )
};

export default SinglePart;