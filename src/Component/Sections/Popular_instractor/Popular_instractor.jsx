import { useEffect, useState } from "react";

const Popular_instructor = () => {
    const [instructor, setInstructor] = useState([]);

    useEffect(() =>{
        fetch("https://dance-school-server.vercel.app/top_instructor")
        .then(res => res.json())
        .then(data => {
            setInstructor(data)
        })
    },[])

    return (
        <div className="py-20 px-5">
            <div className="max-w-[1140px] mx-auto">
                    <h4 className="text-center text-[#77ce53] text-[28px] font-extrabold">Popular Instructor Section</h4>
                    <div className="w-[120px] h-[3px] bg-[#fed620] mx-auto my-6"></div>

                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-7">
                     {
                        instructor.map(teacher => 
                          <div key={teacher.name} className="border-[1px] p-5 rounded-md bg-[#FFF]">
                              <div className="mb-5">
                                  <img src={teacher.image} alt="" className="w-full h-[340px] object-cover rounded-md" />
                              </div>
                              <h3 className="text-[#141414] font-semibold text-[18px] mb-4">Instructor Name: {teacher.name}</h3>
                              <h5 className="text-[#141414] font-semibold text-[16px]">Dancer: {teacher.Dance_name}</h5>
                          </div>)
                     }
                  </div>
            </div>
        </div>
    );
};

export default Popular_instructor;