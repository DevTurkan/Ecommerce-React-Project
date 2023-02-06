
import React, { useState, useEffect } from 'react'
import './scroll.css'



function ScrollToTop() {

    const [showScrollButton, setScrollButton] = useState(false)

    useEffect(() => {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 300) {
                setScrollButton(true)
            }
            else {
                setScrollButton(false)
            }
        })

        if(showScrollButton === true){
           window.scrollTo = 200
        }

//div getelementbyid

    }, []);



    return (
        <div>
            {
                showScrollButton && <a href="#" className='top' ><i className="fa-solid fa-arrow-up"></i></a>
            }

        </div>
    )


}

export default ScrollToTop