import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useTeacherClass = () => {
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {refetch,data:teacherClass,loading:teacherClassLoading} = useQuery({
        queryKey:['teacherclass',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/classes/${user?.email}`)
            console.log('teacher class',res.data);
            return res.data;
        }
    })
    return [teacherClass,teacherClassLoading,refetch]
}

export default useTeacherClass;