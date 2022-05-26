import { useEffect, useState } from "react"



const CarPartsHooks =(partId)=>{
 const [parts,setparts]=useState([]);

 useEffect(()=>{
      
       fetch('https://obscure-sierra-06742.herokuapp.com/part')
       .then(res=>res.json())
       .then( data=>setparts(data))

       


 },[])
    return[parts,setparts]



}
export default CarPartsHooks;