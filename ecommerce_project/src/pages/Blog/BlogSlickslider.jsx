import React, {useState} from 'react';
import sblog1 from '../../assets/image/sblog1.png';
import blog4 from '../../assets/image/blog4.png';
import './Btnslide.css'

import bstyl from './BlogSlickslider.module.css'
import BtnSlider from './Btnslide';
import dataSlider from './dataSlider'
const Blogslider = () => {

    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () =>{
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if(slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () =>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }
    return(
        <div className={bstyl.container_slider}>

            {dataSlider.map((obj, index) => {
                return(
                <div className={slideIndex === index + 1 ? "slide_active" : "slide"}>
                  <img src={obj.imag} width='100%'/>
                </div>
                )
            })}
            
            <BtnSlider moveSlide={nextSlide} direction={'next'} />
            <BtnSlider moveSlide={prevSlide} direction={'prev'} />

        </div>
    )

}

export default Blogslider;