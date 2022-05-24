import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loding from '../Shared/Loding';
import useToken from '../../hooks/useToken';
const Sigup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
     const navigate =useNavigate()
     const[token] =useToken(user||gUser)
     let SingerrorMessage;
    
    if (loading || gLoading || updating) {
        return <Loding></Loding>
    }
    if (error || gError || updateerror) {
        SingerrorMessage = <p className='text-red-500'>{error?.message} || {gError?.message}|| {updateerror?.message}</p>
    }
  
       if(token){
           navigate('/home')
        }
  




    const onSubmit = async data => {
        console.log(data);
        await  createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name});
    
    }
  
    return (
        <div>
              <div className='flex min-h-min	mt-10 justify-center items-center' >
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: " Name is Required"
                                    },

                                })}
                                type="name" placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"

                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">Email</span>
                            </label>
                            <input
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
                                type="email" placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"

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
                                type="password" placeholder="You password"
                                className="input input-bordered w-full max-w-xs"

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>



                        </div>


                        <input className='btn w-full max-w-xs btn-primary' type="submit" value='SIGN UP' />
                    </form>
                    <p> <small>Already have an account ? <Link className='text-primary' to="/login">Please Login</Link>  </small> </p>
                    {SingerrorMessage}

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary" >  CONTINUE WITH GOOGLE  </button>
                  </div>
            </div>

        </div>
        </div>
    );
};

export default Sigup;