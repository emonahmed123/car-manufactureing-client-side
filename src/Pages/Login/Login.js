import React, { useEffect } from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useForm } from 'react-hook-form';
import auth  from '../../firebase.init'
import Loding from '../Shared/Loding';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] =useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm( );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let loginerrorMessage;
    const navigate =useNavigate()
    const location =useLocation(); 
    
    let from = location.state?.from?.pathname || "/";
   
     useEffect(()=>{
        if(gUser||user){
            navigate(from,{replace:true});
        }


     },[user,gUser,from,navigate])
    if (loading || gLoading) {
         return <Loding></Loding>
    }
  

    
    if (error ||  gError) {
        loginerrorMessage = <p className='text-red-500' >{error?.message}|| {gError?.message}</p>
    }
    

    
    const onSubmit = data => {
         console.log(data);
        signInWithEmailAndPassword(data.email ,data.password)

    }
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-bold">Email</span>
                        </label>
                        <input
                                  type="email" placeholder="Your Email"
                                  className="input input-bordered w-full max-w-xs"
                          {...register("email", {
                                required: {
                                    value: true,
                                    message: " Email is Required"
                                }, 
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email '
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-bold">Password</span>
                        </label>
                      
                      <input
                              type="password" placeholder="You password"
                              className="input input-bordered w-full max-w-xs"

                            {...register("password", {
                                required: {
                                    value: true,
                                    message: " Password   is Required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                        </label>
                    </div>

                 <input className='btn w-full max-w-xs btn-primary' type="submit" value='LOGIN' />
                </form> 
                <p> <small>New to Car-parts-meungfectara <Link className='text-primary' to="/sigup">Create New Account</Link>  </small> </p>
                 {loginerrorMessage}

                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary">  CONTINUE WITH GOOGLE  </button>
            </div>
        </div>

     </div>
);
   
};

export default Login;