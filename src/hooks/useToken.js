import {useState,useEffect}from 'react'


const useToken = user =>{
const [token , setToken] =useState('');
// console.log(user)
// console.log(token)
useEffect(()=>{
// console.log('user insdie in token',user )
 const email =user?.user?.email;
// //  console.log(email)
  const currentUser ={email:email};
  if(email){
     fetch(`https://obscure-sierra-06742.herokuapp.com/user/${email}`,{
         method:'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(currentUser)
      })
      .then(res=>res.json())
     .then(data=>{
       console.log('data inside token',data)
        const accessToken = data.token ;    
       localStorage.setItem('accessToken',accessToken)
         setToken(accessToken)
    })

}
},[user])
return [token] ;

}

export default useToken;