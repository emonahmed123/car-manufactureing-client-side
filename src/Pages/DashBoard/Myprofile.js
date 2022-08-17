import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Myprofile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div className='w-4/5'>
            <div class=" mx-56 mt-24 w-52 lg:w-80 md:w-auto text-left pl-2 pt-2 h-auto border shadow rounded ">
                <div class="   mb-24  ">
                    <div class="avatar  flex justify-center mb-4 ">
                        <div class="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} alt='...' />
                          </div>
                    </div>
                 <div className='pt-4'>
                {/* <input className='btn-sm rounded-lg btn-secondary'type="file">Change Profile</input> */}
                  <p className="ps-11 pt-5 font-bold text-sm   lg:text-xl"> Name:<span className=''>{user.displayName}</span></p>
                  <p className="ps-11 text-sm   lg:text-xl font-bold">Email: <span className=''>{user.email}</span></p>
                  </div> 
                </div>
                
            </div>
        </div>
    );
};

export default Myprofile;