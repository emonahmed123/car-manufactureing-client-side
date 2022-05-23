import React from 'react';
import banner from '../../../assest/banner1/banner1.jpg.jpg'
const Banner = () => {
    return (
       <div>

        
      
         <div class="hero min-h-screen" style={{
           background:`url(${banner})`,
           backgroundSize: 'cover'                    
        }}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Our parts</h1>
      <p class="mb-5">We provide best car parts</p>
        
    </div>
  </div>
</div>



       </div>
    );
};

export default Banner;