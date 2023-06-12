import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useCart = () =>{
    const {user} = useContext(AuthContext);
    const {refetch,data:classes=[]} = useQuery({
        queryKey:['carts'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
            return res.json();
        }
    })
    return[classes,refetch]
}

export default useCart;