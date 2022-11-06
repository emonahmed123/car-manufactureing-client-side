import React from 'react';
import { useForm } from "react-hook-form";
import {toast} from 'react-toastify';
const Addapart = () => {
    const { register, handleSubmit } =  useForm()

    const onSubmit = data => {console.log(data)
    
        
            const url =`https://car-manunfuctrue-server.onrender.com/part`
        
            fetch(url,{
          method:'POST',
          headers:{
             'content-type':'application/json',
             headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
         },
         body:JSON.stringify(data)
        
            })
            .then(res=> res.json())
            .then(result=>{console.log(result)
                if(result.acknowledged){
                    toast.success('Add parts')
                      
                }
            })
    

    };
    
    return (
                  
                   <div className='mx-52' >
                     
                          <form className='mx-45'  onSubmit={handleSubmit(onSubmit)}>
                            <p >Add a new parch</p>
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">Name</span>
                            </label>
                            <input
                                 {...register("name", { required: true, maxLength: 20 })}
                                type="name" placeholder=" Parts Name"
                                className="input input-bordered w-full max-w-xs"

                            />
                        
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">Description</span>
                            </label>
                            <input
                                {...register("description")} 
                                  
                                 
                                type="text" placeholder="Description"
                                className="input input-bordered w-full max-w-xs"

                            />
                         
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">Minimum Order Quantity</span>
                            </label>
                            <input
                                {...register("minimumorderquantity")} 
                                  
                                 
                                type="number" placeholder="Minimum Order Quantity"
                                className="input input-bordered w-full max-w-xs"

                            />
                         
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">Available Quantity</span>
                            </label>
                            <input
                                {...register("availablequantity")} 
                                  
                                 
                                type="number" placeholder="Available Quantity"
                                className="input input-bordered w-full max-w-xs"

                            />
                         
                        </div>
                     
                    
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">Price</span>
                            </label>
                            <input
                                {...register("price" )} 
                                
                                type="number"placeholder="price"
                                className="input input-bordered w-full max-w-xs"

                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">PhotoUrl</span>
                            </label>
                            <input
                                {...register("img" )} 
                                
                                type="text"placeholder="Photo url"
                                className="input input-bordered w-full max-w-xs"

                            />
                        </div>
                           <div className='form-control w-full max-w-xs' > 
                           <input className='btn btn-secondary w-full max-w-xs mt-5 ' type="submit" value='ADD' />
                       
                           </div>
                        
                       </form>
              </div>

    );
};

export default Addapart;