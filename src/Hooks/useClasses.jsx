import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
    const {refetch,data: courses=[]} = useQuery({
        queryKey:['classes'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/classes')
            return res.json();
        }
    })
    return[courses,refetch]
}

export default useClasses;