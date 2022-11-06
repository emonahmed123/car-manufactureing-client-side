import React from 'react';
import { useParams } from 'react-router-dom';
import {useQuery}from 'react-query'
import {loadStripe} from '@stripe/stripe-js';
import CheakOutForm from './CheakOutForm';
import { Elements } from '@stripe/react-stripe-js';
import Loding from '../Shared/Loding';

const stripePromise = loadStripe('pk_test_51L19tWBgZuDeK2D0tjjsERvbJbIZ46yVmzFHaIlVzrwDe0Fh2I1HaHNp9WzAvTklZQEPIzzFGteLafAgHwxdq7HA00QrSKFdJk');

const Payment = () => {
   const {id} =useParams();
   const url =`https://car-manunfuctrue-server.onrender.com/booking/${id}`
      const {data:part,isLoading} =useQuery(['booking',id],()=>fetch(url,{

        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
 }).then(res=>res.json()))
 
     if(isLoading){
         return <Loding></Loding>
     } 
 return (
    <div className='mt-11' >
       
    <div class="card w-full mx-auto max-w-md bg-base-100 shadow-xl">
    <div class="card-body">
      <p>Hello {part?._id}</p>
       <h2 class="card-title">Payfor:{part?.name}</h2>
      <p>Your Purchase Quantity: {part?.orderQuentey} </p>
    <p>Please pay ${part?.price}</p>
      <div class="card-actions justify-end">
         
      </div>
    </div>
  </div>
      <div class="card flex-shrink-0 w-full mx-auto max-w-md  max-w-sm shadow-2xl bg-base-100 my-12">
        <div class="card-body">
     
       
          <div class="form-control mt-6">
          <Elements stripe={stripePromise}>
    <CheakOutForm part={part} />
        </Elements>
          </div>
        </div>
      </div>
    </div>
  
    );
};

export default Payment;