import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMongoose } from 'react-icons/si';
import '../styles/Slider.css';
// Additional Swiper modules if needed
import { Autoplay } from 'swiper/modules';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";

// Install modules

const MySwiperComponent = () => {


 return (

  <Swiper


   breakpoints={{
    640: {
     slidesPerView: 1
    },
    768: {
     slidesPerView: 2
    },
    1024: {
     slidesPerView: 3
    }
   }}
   modules={[Autoplay]}
   autoplay={{
    delay: 2000,
    disableOnInteraction: false,
   }}
   loop={true}


   spaceBetween={20}
   pagination={{ clickable: true }}
  >
   <div className='flex justify-center right-0'>
    <SlideNextButton />
   </div>

   {[FaHtml5, FaCss3Alt, FaJs, SiTailwindcss, FaReact, SiNextdotjs, FaNodeJs, SiExpress, SiMongodb, SiMongoose].map((Icon, index) => (
    <div
     key={index}  >

     <SwiperSlide
      className="slide rounded-full " >
      <Icon

       size={100} className='icon' color="#FFD700" >
      </Icon>
     </SwiperSlide>
    </div>
   ))}

  </Swiper>
 );
}

export default MySwiperComponent;


const SlideNextButton = () => {
 const swiper = useSwiper();
 return (
  <div className="flex gap-4 m-10 ">
   <motion.button
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, delay: 0.8 }}
    viewport={{ once: true }}
    className=" rounded-lg p-1 bg-[#FFD700] hover:scale-[1.1]"

    onClick={() => swiper.slidePrev()} >
    <FaChevronLeft className="text-3xl " />
   </motion.button>
   <motion.button
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, delay: 1.2 }}
    viewport={{ once: true }} onClick={() => swiper.slideNext()} className=" rounded-lg p-1 bg-[#FFD700] hover:scale-[1.1]">
    <FaChevronRight className="text-3xl " />
   </motion.button>
  </div>
 );
};
