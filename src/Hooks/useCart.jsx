import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () =>{
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {refetch,data:classes=[]} = useQuery({
        queryKey:['carts',user?.email],
        enabled:!loading,
        // queryFn:async()=>{
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
        //         headers:{
        //             authorization:`Bearer ${token}`
        //         }
        //     });
        //     return res.json();
        // }
        queryFn:async()=>{
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            console.log('axios data',res);
            return res.data;
        }
    })
    return[classes,refetch]
}

export default useCart;