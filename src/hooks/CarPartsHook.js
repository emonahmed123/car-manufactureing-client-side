import { useEffect, useState } from "react"



const CarPartsHooks =(partId)=>{
 const [parts,setparts]=useState([]);

 useEffect(()=>{
      
       fetch('http://localhost:5000/part')
       .then(res=>res.json())
       .then( data=>setparts(data))

       


 },[])
    return[parts,setparts]



}
export default CarPartsHooks;