import React from 'react';

const MangePartRow = ({part,index,setDeletingPart}) => {
   const {name,_id}=part
    return (
       
          <tr>
            <th>{index + 1}</th>
            <td>
            {name} 
            </td>
            <td>{_id}</td>
           
            <td>
             <label onClick={()=>setDeletingPart(part)} for="deletemodal" className="btn btn-xs btn-error">Delete</label> 
             
                
                
                </td>
        </tr>
       
    );
};

export default MangePartRow;