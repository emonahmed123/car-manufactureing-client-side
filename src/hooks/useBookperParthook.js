
import {useEffect,useState}from "react"
const useBookperParthook= id=>{

 const [part,setPart]= useState({})

 useEffect(()=>{
     const url =`https://car-manunfuctrue-server.onrender.com/part/${id}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>setPart(data))
 },[id])

 return[part];
}
export default useBookperParthook;
