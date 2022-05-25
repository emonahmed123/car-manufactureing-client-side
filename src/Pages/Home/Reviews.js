import React from 'react';
import Review from './Review';

const Reviews = () => {
    const reviews =[

        {
            _id:1,
            name:'Alif',
           
        },
        {
            _id:2,
            name:'Sumon',
            
           
      
        },
        {
            _id:3,
            name:'Jahid',
            

        },
    ]
    
    return (
        <section className='my-28'>
            <div className='flex justify-center '>
                  <div className='text-center'  >
                      <h4 className='text-xl text-primary font-bold tex-center'>Cheak Review then trust us</h4>
                   
                  </div>
                  

            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
{
                reviews.map(review =><Review key={review._id}review={review} ></Review>)
}
            </div>
        </section>
    );
};

export default Reviews;