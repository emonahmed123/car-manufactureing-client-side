import React, { useState } from 'react';
import auth from "../../firebase.init"
import {useAuthState} from "react-firebase-hooks/auth"
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
const AddReview = () => {
   
    const [user] = useAuthState(auth);
    const [star, setStar] = useState([]);
    const ratingChanged = (newRating) => {
      setStar(newRating);
    };
    const email = user.email;
    const name = user.displayName;
    const img = user.photoURL;
    const handleReview = (event) => {
      event.preventDefault();
      const reviewContent = event.target.review.value;
      const review = {
        name,
        img,
        email,
        star,
        reviewContent,
      };
      fetch("http://localhost:5000/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast("Your review has taken successfully");
            event.target.reset();
          }
        });
    };

    return (
        <div>
            <h1 className='text-xl'>Add Review</h1>
                   
         <div className='mx-48 mb-24 mt-10'>
         <ReactStars
          count={5}
          onChange={ratingChanged}
          size={34}
          activeColor="#ffd700"
        />


         </div>


               <form onSubmit={handleReview}>
                   
               <div className="form-control w-full max-w-xs mx-48">
                            <label className="label">
                                <span className="label-text text-bold">Review</span>
                            </label>
                            <textarea
            required
            name="review"
            style={{ width: "300px" }}
            className="textarea border-gray-400 "
            placeholder="Give Us Review"
      
          ></textarea>
                            <input className='btn btn-secondary mt-5' type="submit" value='Review Add' />
                             </div>
                   
                   </form> 
        </div>
    );
};

export default AddReview;