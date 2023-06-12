import './Banner_Section.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper";
import { Link } from 'react-router-dom';
import { Bounce, JackInTheBox, Slide } from 'react-awesome-reveal';

const Banner_Section = () => {

    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
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
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="w-full h-[100vh] slider relative ">
               <div className='lg:w-[60%] w-full absolute top-[50%] translate-y-[-50%] lg:left-24 left-0 px-5'>
                 <JackInTheBox>
                   <div className='flex items-center lg:justify-normal justify-center lg:mb-0 mb-5'>
                      <h3 className='text-white text-[20px]'>01</h3>
                      <div className='w-[100px] h-[1px] bg-white mx-4'></div>
                      <h5 className='text-white text-[20px]'>Ballet Dance</h5>
                   </div>
                   </JackInTheBox>
                   <Bounce>
                     <h2 className='lg:text-[100px] text-[54px] lg:mb-0 mb-5 lg:text-left text-center text-white'>Dance School</h2>
                   </Bounce>
                   <Slide>
                      <p className='text-white lg:text-[20px] text-[18px] text-center lg:text-left font-medium lg:pr-6 pr-0 mb-10'>A dance school, also known as a dance studio or dance academy, is an institution that provides structured training and education in various styles of dance. Dance schools cater to individuals of all ages and skill levels, from young children to adults, and offer a wide range of dance programs.</p>
                   </Slide>
                   <div className='lg:text-left text-center'>
                      <Link className='text-white px-12 py-3 bg-[#f7921e] transition-all hover:bg-[#77ce53] font-bold rounded-lg '>SEE MORE</Link>
                   </div>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="w-full h-[100vh] slider2 relative ">
               <div className='lg:w-[60%] w-full absolute top-[50%] translate-y-[-50%] lg:left-24 left-0 px-5'>
                <JackInTheBox>
                   <div className='flex items-center lg:justify-normal justify-center lg:mb-0 mb-5'>
                      <h3 className='text-white text-[20px]'>02</h3>
                      <div className='w-[100px] h-[1px] bg-white mx-4'></div>
                      <h5 className='text-white text-[20px]'>Tap Dance</h5>
                   </div>
                  </JackInTheBox>
                  <Bounce>
                     <h2 className='lg:text-[100px] text-[54px] lg:mb-0 mb-5 lg:text-left text-center text-white'>Dance School</h2>
                   </Bounce>
                   <Slide>
                      <p className='text-white lg:text-[20px] text-[18px] text-center lg:text-left font-medium lg:pr-6 pr-0 mb-10'>A dance school, also known as a dance studio or dance academy, is an institution that provides structured training and education in various styles of dance. Dance schools cater to individuals of all ages and skill levels, from young children to adults, and offer a wide range of dance programs.</p>
                   </Slide>
                   <div className='lg:text-left text-center'>
                      <Link className='text-white px-12 py-3 bg-[#f7921e] transition-all hover:bg-[#77ce53] font-bold rounded-lg '>SEE MORE</Link>
                   </div>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-[100vh] slider3 relative ">
               <div className='lg:w-[60%] w-full absolute top-[50%] translate-y-[-50%] lg:left-24 left-0 px-5'>
                <JackInTheBox>
                   <div className='flex items-center lg:justify-normal justify-center lg:mb-0 mb-5'>
                      <h3 className='text-white text-[20px]'>03</h3>
                      <div className='w-[100px] h-[1px] bg-white mx-4'></div>
                      <h5 className='text-white text-[20px]'>Break Dance</h5>
                   </div>
                  </JackInTheBox>
                  <Bounce>
                     <h2 className='lg:text-[100px] text-[54px] lg:mb-0 mb-5 lg:text-left text-center text-white'>Dance School</h2>
                   </Bounce>
                    <Slide>
                        <p className='text-white lg:text-[20px] text-[18px] text-center lg:text-left font-medium lg:pr-6 pr-0 mb-10'>A dance school, also known as a dance studio or dance academy, is an institution that provides structured training and education in various styles of dance. Dance schools cater to individuals of all ages and skill levels, from young children to adults, and offer a wide range of dance programs.</p>
                     </Slide>
                   <div className='lg:text-left text-center'>
                      <Link className='text-white px-12 py-3 bg-[#f7921e] transition-all hover:bg-[#77ce53] font-bold rounded-lg '>SEE MORE</Link>
                   </div>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="w-full h-[100vh] slider4 relative">
               <div className='lg:w-[60%] w-full absolute top-[50%] translate-y-[-50%] lg:left-24 left-0 px-5'>
                <JackInTheBox>
                   <div className='flex items-center lg:justify-normal justify-center lg:mb-0 mb-5'>
                      <h3 className='text-white text-[20px]'>04</h3>
                      <div className='w-[100px] h-[1px] bg-white mx-4'></div>
                      <h5 className='text-white text-[20px]'>Hiphop Dance</h5>
                   </div>
                   </JackInTheBox>
                   <Bounce>
                     <h2 className='lg:text-[100px] text-[54px] lg:mb-0 mb-5 lg:text-left text-center text-white'>Dance School</h2>
                   </Bounce>
                   <Slide>
                       <p className='text-white lg:text-[20px] text-[18px] text-center lg:text-left font-medium lg:pr-6 pr-0 mb-10'>A dance school, also known as a dance studio or dance academy, is an institution that provides structured training and education in various styles of dance. Dance schools cater to individuals of all ages and skill levels, from young children to adults, and offer a wide range of dance programs.</p>
                   </Slide>
                   <div className='lg:text-left text-center'>
                      <Link className='text-white px-12 py-3 bg-[#f7921e] transition-all hover:bg-[#77ce53] font-bold rounded-lg '>SEE MORE</Link>
                   </div>
               </div>
            </div>
        </SwiperSlide>
      </Swiper>
    );
};

export default Banner_Section;