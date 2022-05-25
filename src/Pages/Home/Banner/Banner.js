import React from 'react';
import banner from '../../../assest/banner1/banner1.jpg.jpg'
const Banner = () => {
    return (
       <div>

        
      
         <div className="hero min-h-screen" style={{
           background:`url(${banner})`,
           backgroundSize: 'cover'                    
        }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Our parts</h1>
      <p className="mb-5">We provide best car parts</p>
        
    </div>
  </div>
</div>



       </div>
    );
};

export default Banner;