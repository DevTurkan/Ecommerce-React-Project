import React from 'react';
import './Btnslide.css'

export default function BtnSlider({direction, moveSlide}){
    return(
        <button onClick={moveSlide} className={direction === "next" ? 'rightbtn' : 'leftbtn'}>
         
            <i class = {direction === "next" ? "fa-sharp fa-solid fa-arrow-right" : "fa-sharp fa-solid fa-arrow-left"}></i>
        </button>
    )
}