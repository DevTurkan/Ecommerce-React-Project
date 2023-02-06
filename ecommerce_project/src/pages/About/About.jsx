// import React from 'react'
import React from 'react'
import aboutstyle from './About.module.css'
import producticon from '../../assets/image/product.png'
import aboutphoto1 from '../../assets/image/aboutimg1.png'
import boximg1 from '../../assets/image/boximg1.png'
import boximg2 from '../../assets/image/boximg2.png'
import boximg3 from '../../assets/image/boximg3.png'

import aboutphoto2 from '../../assets/image/aboutimg2.png'
import aboutphoto3 from '../../assets/image/aboutimg3.png'
import newsletterimg from "../../assets/image/h-watch.jpg"

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import Carousel from '../About/SlickSlider'

import { Link } from 'react-router-dom'
function about() {
  return (
    <>
    <Header />
    <div className={aboutstyle.main}>
        <div className={aboutstyle.container}>
          <div className={aboutstyle.contact_headline}>
            <div className={aboutstyle.headline_text}>
              <ul>
                  <li className={aboutstyle.home}>Home</li>
                  <li className={aboutstyle.line}></li>
                  <li className={aboutstyle.contact}>About Us</li>
              </ul>
              <h1>About Our Store</h1>
            </div>

            <div className={aboutstyle.headline_icon}>
              <div className={aboutstyle.backicon}>
                <img src={producticon} alt='Image' />
              </div>
            </div>
          </div>

          <div className={aboutstyle.img_text_div1}>
            <div className={aboutstyle.img_div1}><img src={aboutphoto1} /></div>

            <div className={aboutstyle.text_div1}>
              <div className={aboutstyle.text_inner_div1}>
                <span className={aboutstyle.inner_span1}> <i className="fa-sharp fa-solid fa-basket-shopping"></i> About Store</span>
                <h3>Online shopping includes both buying things online.</h3>
                <span className={aboutstyle.inner_span2}>Salesforce B2C Commerce can help you create unified, intelligent digital commerce experiences — both online and in the store.</span>
                <div className={aboutstyle.inner_text}>
                  <div className={aboutstyle.inner_text1}><p>Empower your sales teams with industry tailored solutions that support manufacturers as they go digital, and adapt to changing markets & customers faster by creating new business.</p></div>
                  <div className={aboutstyle.inner_text2}><p>Salesforce B2B Commerce offers buyers the seamless, self-service experience of online shopping with all the B2B</p></div>
                </div>
              </div>
            </div>
            
          </div>
           
        </div>
{/* ----------------------------------------------------------- */}
        <div className={aboutstyle.common}>
            <div className={aboutstyle.container}>
              <div className={aboutstyle.boxes_div1}>
                <div className={aboutstyle.box}>
                  <div className={aboutstyle.box1}>
                    <div className={aboutstyle.box_img}><img src={boximg1} /></div>
                    <div className={aboutstyle.box_text}>
                      <h6>40,000+ Happy Customer</h6>
                      <p>Empower your sales teams with industry tailored solutions that support.</p>
                    </div>
                  </div>
                </div>

                <div className={aboutstyle.box}>
                  <div className={aboutstyle.box2}>
                    <div className={aboutstyle.box_img}><img src={boximg2} /></div>
                    <div className={aboutstyle.box_text}>
                      <h6>16 Years of Experiences</h6>
                      <p>Empower your sales teams with industry tailored solutions that support.</p>
                    </div>  
                  </div>
                </div>

                <div className={aboutstyle.box}>
                  <div className={aboutstyle.box3}>
                    <div className={aboutstyle.box_img}><img src={boximg3} /></div>
                    <div className={aboutstyle.box_text}>
                      <h6>12 Awards Won</h6>
                      <p>Empower your sales teams with industry tailored solutions that support.</p>
                    </div>  
                  </div>
                </div>

              </div>
            </div>
        </div>
{/* ----------------------------------------------------------- */}
        
        <div className={aboutstyle.commoncarousel}>
          <div className={aboutstyle.commoncarouseltext}>
            <span><i class="fa-solid fa-users"></i>Our Team</span>
            <h3>Expart Management Team</h3>
          </div>
          <Carousel />
        </div>
{/* ----------------------------------------------------------- */}


        <div className={aboutstyle.common3}>
          <div className={aboutstyle.container}>
            

           <div className={aboutstyle.img_text_div2}>
              <div className={aboutstyle.img_div2}><img src={aboutphoto2} /></div>

              <div className={aboutstyle.text_div2}>
                <div className={aboutstyle.text_inner_div2}>
                  <span>Features #01</span>
                  <h4>Solutions that work together</h4>
                  <p>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                  <Link className={aboutstyle.linkk1} to="/contactUs" >Get In Touch</Link>
                </div>
              </div>
              
            </div>

            <div className={aboutstyle.img_text_div2}>

              <div className={aboutstyle.text_div2}>
                <div className={aboutstyle.text_inner_div3}>
                  <span>Features #01</span>
                  <h4>Solutions that work together</h4>
                  <p>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                  <Link className={aboutstyle.linkk1} to="/contactUs" >Get In Touch</Link>
                </div>
              </div>
              
              <div className={aboutstyle.img_div2}><img src={aboutphoto3} /></div>

            </div>

            <div className={aboutstyle.newsletter}>
              <div className={aboutstyle.newsletter_inner}>
                <img src={newsletterimg} alt="" />
                <div className={aboutstyle.newsletter_title}>
                  <p> <i className="fa-solid fa-envelope"></i> Newsletter</p>
                  <p>Get weekly update</p>
                  <button href="#">Subscribe</button>
                </div>
              </div>
              
            </div>

          </div>
        </div>









    </div>











    <Footer />
    </>
  )
}

export default about