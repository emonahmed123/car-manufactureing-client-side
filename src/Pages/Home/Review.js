import React from 'react'
import ReactStars from "react-rating-stars-component";
const Review = ({review}) => {
  return (
    <div>
      

      <div className=' mt-24 '>
            <div className="card h-52 lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body">
    <p>{review.reviewContent.slice(0 ,90)}</p>

       <div className='flex itmes-center'>
       <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
    <img src={review.img} alt=''/>
  </div>
</div>
<div>
      <h4 className='text-xl'>{review.name}</h4>
  
   <ReactStars
                    size={34}
                    value={review.star}
                    activeColor="#ffd700"
                
                  />
  </div>
       </div>
  </div>
</div>
 </div>
    </div>
  )
}

export default Review
