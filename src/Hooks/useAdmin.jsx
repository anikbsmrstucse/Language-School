import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const {data: admin=[]} = useQuery({
        queryKey:['isAdmin'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
            return res.json();
        }
    })
    return [admin]
}

export default useAdmin;