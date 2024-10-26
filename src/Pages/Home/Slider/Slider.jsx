import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slider5 from "../../../assets/Home/5.jpg";
import slider6 from "../../../assets/Home/6.jpg";
import slider7 from "../../../assets/Home/7.jpg";
import slider8 from "../../../assets/Home/8.jpg";
import slider9 from "../../../assets/Home/9.jpg";
import work from "../../../assets/Home/work.png";

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
      <SwiperSlide className="relative">
        {/* <p className="text-left mx-4  absolute md:top-5">
          <span className="font-semibold">Painting:</span> The art of painting
          is a visual medium that involves the application of pigment,
          <br /> color, and other materials on a surface to create images,
          forms, and expressions. <br />{" "}
          <span className="font-semibold">key aspects:</span>Materials,
          Techniques, Styles and Movements etc{" "}
        </p> */}

        <img src={work} alt="image" className="h-[500px] w-full" />
      </SwiperSlide>
      <SwiperSlide className="relative">
        {/* <p className="text-left mx-4 absolute top-5">
          <span className="font-semibold">Water Color Painting:</span>{" "}
          Watercolor painting is a beautiful and versatile form of art <br />{" "}
          that utilizes pigments suspended in a water-based solution.
          <br /> <span className="font-semibold">key aspects:</span>Color
          Mixing, Materials, Control and Spontaneity, Techniques etc{" "}
        </p> */}
        <img src={slider7} alt="" className="h-[500px] w-full" />
      </SwiperSlide>
      <SwiperSlide className="relative">
        {/* <p className="text-left text-white mx-4 absolute top-5">
          <span className="font-semibold">Street Art:</span> Street art is a
          form of visual art that is created <br /> in public spaces, typically
          in urban environments.
          <br /> <span className="font-semibold">key aspects:</span> Public
          Expression, Social and Political Commentary, Visual Diversity,
          Community Engagement etc{" "}
        </p> */}

        <img src={slider8} alt="" className="h-[500px] w-full" />
      </SwiperSlide>
      <SwiperSlide className="relative">
        {/* <p className="text-left mx-4 absolute top-5">
          <span className="font-semibold">Calligraphy Art:</span> Calligraphy
          art is the art of decorative handwriting or lettering, <br /> often
          characterized by its elegance, precision, and expressive qualities.
          <br /> <span className="font-semibold">key aspects:</span> Writing as
          Art, Historical Significance, Styles, Tools and Materials etc{" "}
        </p> */}

        <img src={slider6} alt="" className="h-[500px] w-full" />
      </SwiperSlide>
    </Swiper>
    // <div className=" h-[600px]">
    //   <Carousel>
    //     <div className="h-[500px]">
    //       <img src={work} />
    //     </div>
    //     <div className="h-[500px] ">
    //       <img src={slider6} />
    //     </div>
    //     <div className="h-[500px]">
    //       <img src={slider7} />
    //     </div>
    //     <div className="h-[500px]">
    //       <img src={slider8} />
    //     </div>
    //     <div className="h-[500px]">
    //       <img src={work} />
    //     </div>
    //   </Carousel>
    // </div>
  );
};

export default Slider;
