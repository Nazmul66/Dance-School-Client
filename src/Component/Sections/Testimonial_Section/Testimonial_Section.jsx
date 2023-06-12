import { useEffect, useState } from 'react';
import './Testimonial_Section.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
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
        <div className='py-12 testimonial'>
            <div className='max-w-[1140px] mx-auto'>
                <h4 className="text-center headings text-[28px] font-extrabold">Testimonial Section</h4>
               <div className="w-[120px] h-[3px] divider mx-auto mt-6 mb-20"></div>

        <Swiper 
               autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      577: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    }}
            modules={[Autoplay, Navigation]} 
            className="mySwiper">
            {
                review.map((reviews, index) => <SwiperSlide
                    key={index}>
                        <div className='lg:px-20 px-7'>
                           <FcAnswers className='mx-auto text-[80px] text-[#151515] mb-12' />
                           <span className='block text-center font-semibold text-[#CD9003] text-[28px] mb-4'>{reviews.name}</span>
                            <p className='text-[18px] font-medium text-center leading-7 para'>{reviews.review}</p>  
                        </div>
                    </SwiperSlide>)
            }
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonial_Section;