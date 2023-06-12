import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useStudent = () =>{
    const {user} = useContext(AuthContext);
    const {data: student=[]} = useQuery({
        queryKey:['student'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/users/student/${user?.email}`);
            return res.json();
        }
    })
    return [student];
}

export default useStudent;