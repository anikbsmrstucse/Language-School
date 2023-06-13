import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin()
    const {user,loaing} = useContext(AuthContext);
    const location = useLocation()
    if(loaing || isAdminLoading){
        return <div className='h-[100vh] flex justify-start items-center text-center'><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user && isAdmin){
        return children;
    }
   return <Navigate to='/' state={{from: location}} replace></Navigate>
   
};

export default AdminRoute;