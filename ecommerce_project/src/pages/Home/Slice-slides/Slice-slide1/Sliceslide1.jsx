import React from 'react'
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './slick1.css'
import commit from "../../../../assets/image/reyler.png"
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./slick1.css"


function Sliceslide1() {
  return (

    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      direction={"vertical"}
      loop={true}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="s1"
    >

      <SwiperSlide>
        <div className="slick1">
          <p><i class="fa-solid fa-fire-flame-curved"></i>Hot Deal In This Week</p>
          <p>Smart Digital <br /> Watch</p>
          <div className="slick1img">

            <Link to="/shop" >
              <button> <i class="fa-solid fa-cart-shopping"></i>Shop Now</button>
            </Link>
            <img src={commit} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slick1">
          <p><i class="fa-solid fa-fire-flame-curved"></i>Hot Deal In This Week</p>
          <p>Roco Wireless  <br /> Headphones</p>
          <div className="slick1img">

            <button> <i class="fa-solid fa-cart-shopping"></i>Shop Now</button>
            <img src={commit} alt="" />
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  )
}

export default Sliceslide1