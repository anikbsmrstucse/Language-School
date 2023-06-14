import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolled = () => {
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {refetch,data:enroll=[],isLoading:enrollLoading} = useQuery({
        queryKey:['payment',user?.email],
        enabled:!loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/payment?email=${user.email}`)
            return res.data;
        }
    })
    return [enroll,refetch,enrollLoading]
}
export default useEnrolled;