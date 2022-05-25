import React from 'react';
import Banner from './Banner/Banner';
import BussinesSamary from './BussinesSamary';
import CarParts from './Carparts';
import ExtraSection1 from './ExtraSection1';
import ExtraSection2 from './ExtraSection2';
import Reviews from './Reviews';


const Home = () => {
    return (
        <div>
      
           <Banner></Banner>
           <CarParts></CarParts>
              <ExtraSection1></ExtraSection1>
                <ExtraSection2></ExtraSection2>
           <BussinesSamary></BussinesSamary>
              <Reviews></Reviews>

        </div>
    );
};

export default Home;