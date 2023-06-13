import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const {refetch,data: users=[]} = useQuery({
        queryKey:["users"],
        queryFn:async()=>{
            // const token = localStorage.getItem('access-token')
            const res = await axiosSecure.get(`/users`)
            return res.data;
        }
        // queryFn:async()=>{
        //     const token = localStorage.getItem('access-token')
        //     const res = await fetch(`http://localhost:5000/users`,{
        //         headers:{
        //             authorization:`Bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // }
    })

    return [users,refetch]
}

export default useUser;