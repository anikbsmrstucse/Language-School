import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useTeacher = () => {
    const {user} = useContext(AuthContext);
    const {data: teacher=[]} = useQuery({
        queryKey:['teacher'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/users/teacher/${user?.email}`);
            return res.json();
        }
    })
    return [teacher];
}

export default useTeacher;