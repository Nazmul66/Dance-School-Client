import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
// import { BsFillQuestionOctagonFill } from 'react-icons/bs';
import { FcAnswers } from 'react-icons/fc';

const Testimonial_Section = () => {
    const [review, setReview] = useState([]);

    useEffect(() =>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setReview(data)
        })
    },[])

    return (
        <div className='py-12'>
            <div className='max-w-[1140px] mx-auto'>
                <h4 className="text-center text-[#77ce53] text-[28px] font-extrabold">Testimonial Section</h4>
               <div className="w-[120px] h-[3px] bg-[#fed620] mx-auto mt-6 mb-20"></div>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                review.map((reviews, index) => <SwiperSlide
                    key={index}>
                        <div className='px-20'>
                           <FcAnswers className='mx-auto text-[80px] text-[#151515] mb-12' />
                           <span className='block text-center font-semibold text-[#CD9003] text-[28px] mb-4'>{reviews.name}</span>
                            <p className='text-[18px] font-medium text-center leading-7 text-[#141414]'>{reviews.review}</p>  
                        </div>
                    </SwiperSlide>)
            }
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonial_Section;