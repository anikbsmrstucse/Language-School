import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTeacher from '../Hooks/useTeacher';

const TeacherRoute = ({children}) => {
    const [isTeacher,isTeacherLoading] = useTeacher()
    const {user,loaing} = useContext(AuthContext);
    const location = useLocation()
    if(loaing || isTeacherLoading){
        return <div className='h-[100vh] flex justify-start items-center text-center'><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user && isTeacher){
        return children;
    }
   return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default TeacherRoute;