import { useEffect, useState } from "react";
import './ClassPages.css'
import DynamicTitle from "../../DynamicTitle/DynamicTitle";

const ClassPages = () => {
    DynamicTitle("Classes");
    const [allData, setAllData] = useState([]);

    useEffect(() =>{
        fetch("Classes_page.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAllData(data)
        })
    },[])

    return (
        <div className="py-10 px-5">
            <div className="max-w-[1140px] mx-auto">
                <h2 className="text-center lg:text-[45px] text-[34px] mt-10 mb-16">All Type of Instructor Dance Class</h2>
               <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                   {
                     allData.map(data => <div className="border-[1px] rounded-md p-8" key={data._id}>
                        <div className="mb-4">
                           <img src={data.image} alt="" className="w-full h-[340px] object-cover rounded-md" />
                        </div>
                        <h3 className="text-[20px] font-bold text-[#141414] mb-3">Instructor: {data.Instructor_name}</h3>
                        <h5 className="text-[18px] font-bold text-[#141414] mb-3">Name: {data.name}</h5>
                        <h3 className="text-[18px] font-bold text-[#141414] mb-3">Price: ${data.price}</h3>
                        <h5 className="text-[18px] font-bold text-[#141414] mb-3">Available-Seats: {data.Available_seats}</h5>
                        <div className="text-center mt-7">
                           <button type="button" className="px-10 py-2 bg-[#F7921E] font-semibold text-[#FFF] rounded-md">Select</button>
                        </div>
                     </div>)
                   }
               </div>
            </div>
        </div>
    );
};

export default ClassPages;
