import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Slider.css'

import slider1 from '../../../assets/Home/1.jpg'
import slider2 from '../../../assets/Home/2.jpg'
import slider3 from '../../../assets/Home/3.jpg'
import slider4 from '../../../assets/Home/4.jpg'

const Slider = () => {
    return (
        <Swiper
            pagination={{
                type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide className='relative'>

                <p className='text-left mx-4 absolute top-5'><span className='font-semibold'>Painting:</span> The art of painting is a visual medium that involves the application of pigment, color, and other materials on a surface to create images, forms, and expressions. It is one of the oldest and most widely practiced forms of artistic expression, dating back thousands of years.<br /> <span className='font-semibold'>Here are some key aspects of the art of painting:</span> Mediums and Materials, Techniques, Styles and Movements, Historical Significance etc </p>

                <img src={slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <p className='text-left mx-4 absolute top-5'><span className='font-semibold'>Water Color Painting:</span> Watercolor painting is a beautiful and versatile form of art that utilizes pigments suspended in a water-based solution. It is known for its translucent and delicate appearance, creating luminous and ethereal effects.<br /> <span className='font-semibold'>Here are some key aspects of the art of Water Color Painting:</span>Color Mixing, Materials, Control and Spontaneity, Techniques, Styles and Movements etc </p>
                <img src={slider4} alt="" />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <p className='text-left text-white mx-4 absolute top-5'><span className='font-semibold'>Street Art:</span> Street art is a form of visual art that is created in public spaces, typically in urban environments. It encompasses a range of artistic expressions, such as murals, graffiti, stencils, installations, and other forms of artistic interventions in public spaces<br /> <span className='font-semibold'>Here are some key aspects of the art of street art:</span> Public Expression, Social and Political Commentary, Visual Diversity, Community Engagement etc </p>

                <img src={slider2} alt="" />
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <p className='text-left mx-4 absolute top-5'><span className='font-semibold'>Calligraphy Art:</span> Calligraphy art is the art of decorative handwriting or lettering, often characterized by its elegance, precision, and expressive qualities. It has a rich history spanning various cultures and has been practiced for centuries as a form of artistic expression, communication, and documentation.<br /> <span className='font-semibold'>Here are some key aspects of calligraphy art:</span> Writing as Art, Historical Significance, Styles and Scripts, Tools and Materials etc </p>

                <img src={slider3} alt="" />
            </SwiperSlide>


        </Swiper>
       
    );
};

export default Slider;