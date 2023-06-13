import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useTeacher = () => {
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isTeacher, isLoading:isTeacherLoading} = useQuery({
        queryKey:['teacher',user?.email],
        enabled:!loading,
        // queryFn:async()=>{
        //     const res = await fetch(`http://localhost:5000/users/teacher/${user?.email}`);
        //     return res.json();
        // }
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/teacher/${user?.email}`);
            console.log('teacher',res);
            return res.data.teacher;
        }
    })
    return [isTeacher,isTeacherLoading];
}

export default useTeacher;