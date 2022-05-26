import React from 'react';
import{ useState } from 'react';
import { useQuery } from 'react-query';
import Loding from '../Shared/Loding';
import DeletinConfromparts from './DeletinConfromparts';
import MangePartRow from './MangePartRow';
const ManageParts = () => {
      const [deletingPart,setDeletingPart]=useState(null)
     const {data:parts, isLoading,refetch} =useQuery('parts',()=>fetch('https://obscure-sierra-06742.herokuapp.com/part').then(res => res.json()));

         if(isLoading){
             return <Loding></Loding>
         }


    return (
        <div>
            <h1 className='text-xl text-secondary'>Parts:{parts.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th ></th>
                            <th >Name</th>
                            <th >Id</th>
                            <th >Delete parts</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                 
                    {
          parts.map((part,index)=><MangePartRow
          key={part._id}
          part={part}
          index={index}
          refetch={refetch}
          setDeletingPart={setDeletingPart}
          ></MangePartRow>)
          }
         </tbody>
          </table>
            </div>

        {
            deletingPart && <DeletinConfromparts deletingPart={deletingPart}  setDeletingPart={setDeletingPart}
                    refetch={refetch}
            >

            </DeletinConfromparts>
        }


        </div>
    );
};

export default ManageParts;