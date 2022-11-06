import { useEffect, useState } from "react"



const CarPartsHooks =(partId)=>{
 const [parts,setparts]=useState([]);

 useEffect(()=>{
      
       fetch('https://car-manunfuctrue-server.onrender.com/part')
       .then(res=>res.json())
       .then( data=>setparts(data))

       


 },[])
    return[parts,setparts]



}
export default CarPartsHooks;