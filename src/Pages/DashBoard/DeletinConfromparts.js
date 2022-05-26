import React from 'react';
import { toast } from 'react-toastify';

const DeletinConfromparts = ({deletingPart, refetch,setDeletingPart}) =>{
     const {name,_id} =deletingPart;
  const handleDelete =()=>{
       
    fetch(`https://obscure-sierra-06742.herokuapp.com/part/${name}`,{
         method: 'DELETE',
         headers: {
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        if(data.deletedCount){
            toast.success(`parts: ${name} is deleted.`)
            setDeletingPart(null)
            refetch();
        }
    })




  }

    return (
        <div>
            <input type="checkbox" id="deletemodal"  className="modal-toggle" />
<div  className="modal modal-bottom sm:modal-middle">
  <div  className="modal-box">
    <h3  className="font-bold text-lg text-red">Are you sure deleting Parts{name}</h3>
    <p  className="py-4">Click and delete that</p>
    <div  className="modal-action">
    <button onClick={() => handleDelete()}  className="btn btn-xs btn-error">Delete</button>
      <label for="deletemodal"  className="btn btn-xs">Cancel</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeletinConfromparts;