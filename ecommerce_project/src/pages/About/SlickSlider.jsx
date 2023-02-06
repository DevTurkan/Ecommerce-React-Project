import img1 from '../../assets/image/teamimg1.png';
import img2 from '../../assets/image/teamimg2.png';
import img3 from '../../assets/image/teamimg3.png';
import img4 from '../../assets/image/teamimg4.png';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slickstyle from './SlickSlider.module.css'
import './Slickcarousel.css'

function Carousel() {
    const sliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        infinite: true,

    }

   
    return (
        <div className={slickstyle.content}>
            <Slider {...sliderSettings}>
                
                            <div className={slickstyle.childd}>
                                <div className={slickstyle.ch_img}>
                                    <img src={img1} />
                                </div>
                                <div className={slickstyle.child_text}>
                                    <span>Founder</span>
                                    <h5>Rosalina D. Willson</h5>
                                </div>
                                
                            </div>
                            <div className={slickstyle.childd}>
                                <div className={slickstyle.ch_img}>
                                    <img src={img2} />
                                </div>
                                <div className={slickstyle.child_text}>
                                    <span>CEO</span>
                                    <h5>Ukolilix X. Xilanorix</h5>
                                </div>
                            </div>    
                            <div className={slickstyle.childd}>
                                <div className={slickstyle.ch_img}>
                                    <img src={img3} />
                                </div>
                                <div className={slickstyle.child_text}>
                                    <span>Designer</span>
                                    <h5>Alonso M. Miklonax</h5>
                                </div>
                            </div>    
                            <div className={slickstyle.childd}>
                                <div className={slickstyle.ch_img}>
                                    <img src={img4} />
                                </div>
                                <div className={slickstyle.child_text}>
                                    <span>Designer</span>
                                    <h5>Alonso M. Miklonax</h5>
                                </div>
                            </div>
                            
                            <div className={slickstyle.childd}>
                                <div className={slickstyle.ch_img}>
                                    <img src={img2} />
                                </div>
                                <div className={slickstyle.child_text}>
                                    <span>Designer</span>
                                    <h5>Alonso M. Miklonax</h5>
                                </div>
                            </div>
                                               
            </Slider>

        </div>

    );
  }
  
  export default Carousel;
  