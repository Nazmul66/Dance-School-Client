import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useBooked = () => {
    const {user} = useContext(AuthContext)

    const { refetch, data: book = [] } = useQuery({
        queryKey: ['book', user?.email],
        enabled:!!user?.email ,
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/course?email=${user?.email}`)
            return res.json();
        },
      })
      return [book, refetch]
      
};

export default useBooked;