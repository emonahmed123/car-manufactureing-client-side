import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate ,  useLocation,} from 'react-router-dom';
import auth from '../../firebase.init';

import Loding from '../Shared/Loding';

const RequireAuth = ({children}) => {
    const [user, loading, ] = useAuthState(auth);
    const location =useLocation();   

    if(loading){
           return <Loding></Loding>
       }

         if(!user){
            return <Navigate to="/login" state={{ from: location }} replace />;
         }
    return children
  
};

export default RequireAuth;