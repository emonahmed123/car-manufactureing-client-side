import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Myprofile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center   mb-24 mx-14 lg:text-left">
                    <div class="avatar">
                        <div class="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} />


                        </div>
                    </div>
                  
                            <button className='btn btn-secondary  btn-xs'>Change Profile Picture</button>
                           
                    <p className="ps-11 pt-5"> <span className='text-xl'>Name:{user.displayName}</span></p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Location</span>
                                </label>
                                <input type="text" placeholder="Location" class="input input-bordered" />

                            </div>
                            <div class="form-control mt-6">
                                <input type="submit" value="submit" class="input input-bordered btn-secondary" />
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myprofile;