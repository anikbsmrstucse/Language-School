import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useStudent from '../Hooks/useStudent';

const StudentRoute = ({children}) => {
    const [isStudent,isStudentLoading] = useStudent()
    const {user,loaing} = useContext(AuthContext);
    const location = useLocation()
    if(loaing || isStudentLoading){
        return <div className='h-[100vh] flex justify-start items-center text-center'><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user && isStudent){
        return children;
    }
   return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default StudentRoute;