import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/Home/1.jpg'
import slider2 from '../../../assets/Home/2.jpg'
import slider3 from '../../../assets/Home/3.jpg'

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Parallax, Pagination, Navigation } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const Slider = () => {
    return (
        <div>
            <Carousel>
                <div className='h-[600px] relative'>
                    <p className='text-left mx-4 absolute top-5'><span className='font-semibold'>Painting:</span> The art of painting is a visual medium that involves the application of pigment, color, and other materials on a surface to create images, forms, and expressions. It is one of the oldest and most widely practiced forms of artistic expression, dating back thousands of years.<br /> <span className='font-semibold'>Here are some key aspects of the art of painting:</span> Mediums and Materials, Techniques, Styles and Movements, Historical Significance etc </p>
                    <img src={slider1} />

                </div>
                <div className='h-[600px]'>
                    <p className='text-left text-white mx-4 absolute top-5'><span className='font-semibold'>Street Art:</span> Street art is a form of visual art that is created in public spaces, typically in urban environments. It encompasses a range of artistic expressions, such as murals, graffiti, stencils, installations, and other forms of artistic interventions in public spaces<br /> <span className='font-semibold'>Here are some key aspects of the art of street art:</span> Public Expression, Social and Political Commentary, Visual Diversity, Community Engagement etc </p>
                    <img src={slider2} />

                </div>
                <div className='h-[600px]'>
                    <p className='text-left mx-4 absolute top-5'><span className='font-semibold'>Calligraphy Art:</span> Calligraphy art is the art of decorative handwriting or lettering, often characterized by its elegance, precision, and expressive qualities. It has a rich history spanning various cultures and has been practiced for centuries as a form of artistic expression, communication, and documentation.<br /> <span className='font-semibold'>Here are some key aspects of calligraphy art:</span> Writing as Art, Historical Significance, Styles and Scripts, Tools and Materials etc </p>
                    <img src={slider3} />

                </div>
            </Carousel>

        </div>

        // <Swiper
        //     style={{
        //         "--swiper-navigation-color": "#fff",
        //         "--swiper-pagination-color": "#fff",
        //     }}
        //     speed={600}
        //     parallax={true}
        //     pagination={{
        //         clickable: true,
        //     }}
        //     navigation={true}
        //     modules={[Parallax, Pagination, Navigation]}
        //     className="mySwiper"
        // >
        //     <div
        //         slot="container-start"
        //         className="parallax-bg"
        //         style={{
        //             "background-image":
        //                 "url(https://swiperjs.com/demos/images/nature-1.jpg)",
        //         }}
        //         data-swiper-parallax="-23%"
        //     ></div>
        //     <SwiperSlide>
        //         <div className="title" data-swiper-parallax="-300">
        //             Slide 1
        //         </div>
        //         <div className="subtitle" data-swiper-parallax="-200">
        //             Subtitle
        //         </div>
        //         <div className="text" data-swiper-parallax="-100">
        //             <p>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        //                 dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
        //                 laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
        //                 Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
        //                 Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
        //                 ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
        //                 tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        //             </p>
        //         </div>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <div className="title" data-swiper-parallax="-300">
        //             Slide 2
        //         </div>
        //         <div className="subtitle" data-swiper-parallax="-200">
        //             Subtitle
        //         </div>
        //         <div className="text" data-swiper-parallax="-100">
        //             <p>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        //                 dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
        //                 laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
        //                 Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
        //                 Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
        //                 ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
        //                 tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        //             </p>
        //         </div>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <div className="title" data-swiper-parallax="-300">
        //             Slide 3
        //         </div>
        //         <div className="subtitle" data-swiper-parallax="-200">
        //             Subtitle
        //         </div>
        //         <div className="text" data-swiper-parallax="-100">
        //             <p>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        //                 dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
        //                 laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
        //                 Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
        //                 Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
        //                 ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
        //                 tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        //             </p>
        //         </div>
        //     </SwiperSlide>
        // </Swiper>
    );
};

export default Slider;