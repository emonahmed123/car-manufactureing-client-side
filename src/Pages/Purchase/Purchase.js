import React from 'react';
import { useParams } from 'react-router-dom';
import useBookperParthook from '../../hooks/useBookperParthook';

const Purchase = () => {
  const {id} =useParams()
   const [part] =useBookperParthook(id);
    return (
        <div>
           <h1>{part.name}</h1>
        
        </div>
    );
};

export default  Purchase;