import React, { useEffect, useState } from 'react';
import SinglePart from './SinglePart';
import { useQuery } from 'react-query';
import Loding from '../Shared/Loding'
const CarParts = () => {
   
    // const [parts,setparts]=useState([]);
    const{data:parts, isLoading,refetch} =useQuery('part', ()=>fetch('https://obscure-sierra-06742.herokuapp.com/part')
  .then(res=>res.json( ))
   )
    if(isLoading){
        return <Loding></Loding>
    }     

    return (
     
       <div>
            <h2 className='text-3xl my-10 text-primary'> Our car parts</h2>
        
       
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 '>

         {
             parts?.map(part=><SinglePart key={part._id} part={part}></SinglePart>)
         }


           </div>
       

          
             
        </div>
    );
};

export default CarParts;