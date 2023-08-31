import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
    const {refetch,data: courses=[]} = useQuery({
        queryKey:['classes'],
        queryFn: async()=>{
            const res = await fetch('https://language-school-assignment-12-server.vercel.app/classes')
            return res.json();
        }
    })
    return[courses,refetch]
}

export default useClasses;