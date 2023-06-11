import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
    const { user } = useContext(AuthContext);

    const token = localStorage.getItem("access-token")

    const { data: isStudent = [] } = useQuery({
        queryKey: ['isStudent', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/users/student/${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
      })
      return [isStudent]
};

export default useStudent;