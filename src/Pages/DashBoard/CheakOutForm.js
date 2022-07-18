import React from 'react';
import { CardElement, useElements, useStripe,} from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { useState } from 'react';

const CheakOutForm = ({part}) => {
    const stripe = useStripe();
    const elements = useElements();
     const [cardError,setCardError]=useState('')
     const [succes,setSucces]=useState('')
     const [transactionid,setTransactionid]=useState('')
     const [Processing, setProcessing]=useState(false)
  
    const [clientSecret,setClientSecret]=useState('');
    const {price,name,_id}=part;

     useEffect(()=>{
        fetch(`http://localhost:5000/create-payment-intent`,{
    method:"POST",
    headers: {
      'content-type':'application/json',
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
   },
   body:JSON.stringify({price})
   
   }).then(res=>res.json())
   .then(data=>{
    if(data?.clientSecret){
      console.log(data)
      setClientSecret(data.clientSecret)
      
    }

        })
         
     },[price])

     const handleSubmit= async(event)=>{
 
    event.preventDefault()
   
    if (!stripe || !elements) {
     
      return;
    }
    const card = elements.getElement(CardElement);
  
    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
  
    setCardError(error?.message || '')
    setProcessing(true) 
    // if(error){
    //   console.log(error)
    //   setCardError(error.message)
    // }
    // else{
    //   setCardError('')
    // }
  
    const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
              clientSecret,
      {
        payment_method: {
          card:card,
          billing_details: {
            name:name ,
          },
        },
      },
    );
    if(intentError){
      setCardError(intentError?.message)
      setProcessing(false) 
  
    }
    else{
      console.log(paymentIntent)
      console.log(_id)
      setTransactionid(paymentIntent.id)
      setCardError('')
      setSucces('Your Payment is completed')
      
      const payment={
        parts:_id,
        transactionId:paymentIntent.id
      }
      // console.log(paymentIntent.id)
      fetch(`http://localhost:5000/booking/${_id}`, {
        method:'PATCH',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify(payment)
    }).then(res=>res.json())
    .then(data => {
        setProcessing(false);
        console.log(data);
    })
  
  }



  
  
  }
  

   
   return (
   <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary' type="submit" disabled={!stripe||!clientSecret}>
        Pay
      </button>
    </form>
   {
    cardError && <p className='text-primary'>{cardError}</p>
    
  }
  {
    succes && <div>
      <p className='text-primary'>{succes} </p>
      <p>Your transaction Id:<span>{transactionid}</span> </p>
   
     </div>
  }
   
   
   
   </>
   )
  } ;
/*
1.insatall stripe react stripe js
2. open stripe account on stripe website.
 3.get pulishable key pk
4. create cheakout form using Card elementm useSripe,useElements,
5.get card element ingo(creadit card info)
6.
7.card error 
*/

export default CheakOutForm;