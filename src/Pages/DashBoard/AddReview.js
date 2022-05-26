import React, { useState } from 'react';

const AddReview = () => {
     const [addReviews,setAddReviews] =useState([])

      const handleCliked =event=>{
        event.preventDefault()
                const review =event.target.review.value;
                
             setAddReviews(review)

      }
      console.log(addReviews)
    return (
        <div>
            <h1 className='text-xl'>Add review</h1>
            
                  <h1>  {addReviews}  </h1>

               <form onSubmit={handleCliked }>
                   
               <div className="form-control w-full max-w-xs mx-48">
                            <label className="label">
                                <span className="label-text text-bold">Review</span>
                            </label>
                            <input name='review'
                            
                                  
                
                                type="text"  placeholder="Description"
                                className="input input-bordered w-full max-w-xs"

                            />
                            <input className='btn btn-secondary mt-5' type="submit" value='Review Add' />
   
                        </div>
                   
                   </form> 
               


        </div>
    );
};

export default AddReview;