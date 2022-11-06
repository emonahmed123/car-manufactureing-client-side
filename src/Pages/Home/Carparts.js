import React, { useEffect, useState } from 'react';
import SinglePart from './SinglePart';
import { useQuery } from 'react-query';
import Loding from '../Shared/Loding'
const CarParts = () => {
   
    // const [parts,setparts]=useState([]);
    const{data:parts, isLoading,refetch} =useQuery('part', ()=>fetch('https://car-manunfuctrue-server.onrender.com/part')
  .then(res=>res.json( ))
   )
    if(isLoading){
        return <Loding></Loding>
    }     

    return (
     
       <div className='w-4/5 mx-auto mt-32'>
            <h2 className='text-3xl my-10 font-bold'> OUR CAR <span className='text-primary'>PARTS</span> </h2>
        
       
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 '>

         {
             parts?.map(part=><SinglePart key={part._id} part={part}></SinglePart>)
         }


           </div>
       

          
             
        </div>
    );
};

export default CarParts;