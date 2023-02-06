import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper2.css";
import img1 from './Slider-img/slider-img1.png'
import img2 from './Slider-img/slider-img2.png'
import img3 from './Slider-img/slider-img3.png'

// import required modules
import { Mousewheel, Pagination } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                loop={true}
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}

                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="ss"
            >
                <SwiperSlide>
                    <div className="sliderbox2">
                        <div className="sliderboximg1">
                            <img src={img1} alt="" />
                            <div className="sliderboxl">
                                <p>Head of Idea</p>
                                <p>James C. Anderson</p>
                            </div>
                        </div>
                    </div>
                    <div className="sliderbox1">
                        <p className="slidep" >“ It’s amazing how much easier it has been to
                            meet new people and create instantly non
                            connections. I have the exact same personal
                            the only thing that has changed is my mind
                            set and a few behaviors. “</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="sliderbox2">
                        <div className="sliderboximg1">
                            <img src={img2} alt="" />
                            <div className="sliderboxl">
                                <p>Head of Idea</p>
                                <p>James C. Anderson</p>
                            </div>
                        </div>
                    </div>
                    <div className="sliderbox1">
                        <p className="slidep" >“ It’s amazing how much easier it has been to
                            meet new people and create instantly non
                            connections. I have the exact same personal
                            the only thing that has changed is my mind
                            set and a few behaviors. “</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="sliderbox2">
                        <div className="sliderboximg1">
                            <img src={img3} alt="" />
                            <div className="sliderboxl">
                                <p>Head of Idea</p>
                                <p>James C. Anderson</p>
                            </div>
                        </div>
                    </div>
                    <div className="sliderbox1">
                        <p className="slidep" >“ It’s amazing how much easier it has been to
                            meet new people and create instantly non
                            connections. I have the exact same personal
                            the only thing that has changed is my mind
                            set and a few behaviors. “</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
