import React from 'react';
import { toast } from 'react-toastify';

const DeletinConfromparts = ({deletingPart, refetch,setDeletingPart}) =>{
     const {name,_id} =deletingPart;
  const handleDelete =()=>{
       
    fetch(`http://localhost:5000/part/${name}`,{
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
            <input type="checkbox" id="deletemodal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg text-red">Are you sure deleting Parts{name}</h3>
    <p class="py-4">Click and delete that</p>
    <div class="modal-action">
    <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
      <label for="deletemodal" class="btn btn-xs">Cancel</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeletinConfromparts;