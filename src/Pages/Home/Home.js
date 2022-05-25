import React from 'react';
import Banner from './Banner/Banner';
import BussinesSamary from './BussinesSamary';
import CarParts from './Carparts';
import Reviews from './Reviews';


const Home = () => {
    return (
        <div>
      
           <Banner></Banner>
           <CarParts></CarParts>
           <BussinesSamary></BussinesSamary>
              <Reviews></Reviews>

        </div>
    );
};

export default Home;