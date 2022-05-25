import React from 'react';

const Review = ({review}) => {
        return (
            <div>
                <div className="card  lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
             <h1>Our Rating</h1>
      <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>
           <div className='flex itmes-center'>
 

    <div>
          <h4 className='text-xl'> Name:<small> {review.name}</small> </h4>
          
      </div>
           </div>
      </div>
    </div>
     </div>
        );
};

export default Review;