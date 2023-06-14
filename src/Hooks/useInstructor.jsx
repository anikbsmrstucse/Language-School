import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const {refetch,data: instructors=[]} = useQuery({
        queryKey:['instructors'],
        queryFn:async()=>{
            const res = await fetch('https://language-school-assignment-12-server-anikbsmrstucse.vercel.app/instructors');
            return res.json();
        }
    })

    return [instructors,refetch]
}

export default useInstructor;