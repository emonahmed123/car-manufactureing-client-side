import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Review from "../Home/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://car-manunfuctrue-server.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="text-gray-600 body-font py-4">
      
    <h4 className='text-3xl  font-bold tex-center'>Cheak Review  <span className='text-primary'>Then Trust Us</span></h4>
  
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 gap-5'>
{
                reviews.map(review =><Review key={review._id}review={review} ></Review>)
}
            </div>     
             
     
    </section>
  );
};

export default Reviews;