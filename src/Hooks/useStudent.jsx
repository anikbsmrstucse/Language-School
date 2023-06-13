import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () =>{
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isStudent, isLoading:isStudentLoading} = useQuery({
        queryKey:['student',user?.email],
        enabled:!loading,
        // queryFn:async()=>{
        //     const res = await fetch(`http://localhost:5000/users/student/${user?.email}`);
        //     return res.json();
        // }
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/student/${user?.email}`);
            console.log('student',res);
            return res.data.student;
        }
    })
    return [isStudent,isStudentLoading];
}

export default useStudent;