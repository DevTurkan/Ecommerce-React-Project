
import img1 from "../../../../assets/image/slickeImg1.png"
import img2 from "../../../../assets/image/slickeImg2.png"


import React from 'react'
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./slice2.css"

function Sliceslide2() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination]}
        className="s"
      >
        <SwiperSlide>
          <div className="sliceimg1">
             <img src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliceimg2">
             <img src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliceimg1">
             <img src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliceimg2">
             <img src={img2} alt="" />
          </div>
        </SwiperSlide>
  

      </Swiper>
    </>
  )
}

export default Sliceslide2