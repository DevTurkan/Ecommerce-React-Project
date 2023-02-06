import React from 'react'
import "./footer.css"
import f1 from "../../assets/image/f-1.png"
import f2 from "../../assets/image/f-2.png"
import f3 from "../../assets/image/f-3.png"
import f4 from "../../assets/image/f-4.png"
import fimg1 from '../../assets/image/f-img1.png'
import fimg2 from '../../assets/image/f-img2.png'
import fimg3 from '../../assets/image/f-img3.png'
import fcard1 from "../../assets/image/f-card1.png"
import fcard2 from "../../assets/image/f-card2.png"
import fcard3 from "../../assets/image/f-card3.png"


const Footer = () => {
  return (
    <>

      <div className="footer">
        <div className="container">
          <div className="row rowf-1">
            <div className="col-3  col-sm-6 col-xs-12 ">
              <div className="f-part1">
                <div className="f-img">
                  <img src={f3} alt="" />
                </div>
                <div className="f-letter">
                  <p>Fast & Secure Delivery</p>
                  <p>Tell about your service.</p>
                </div>
              </div>
            </div>
            <div className="col-3 col-sm-6 col-xs-12 ">
              <div className="f-part1">
                <div className="f-img">
                  <img src={f1} alt="" />
                </div>
                <div className="f-letter">
                  <p>Money Back Guarantee</p>
                  <p>Within 10 days.</p>
                </div>
              </div>
            </div>
            <div className="col-3 col-sm-6 col-xs-12 ">
              <div className="f-part1">
                <div className="f-img">
                  <img src={f4} alt="" />
                </div>
                <div className="f-letter">
                  <p>24 Hour Return Policy</p>
                  <p>No question ask.</p>
                </div>
              </div>
            </div>
            <div className="col-3 col-sm-6 col-xs-12 ">
              <div className="f-part1">
                <div className="f-img">
                  <img src={f2} alt="" />
                </div>
                <div className="f-letter">
                  <p>Pro Quality Support</p>
                  <p>24/7 Live support. </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row rowf-2">
            <div className="col-3 col-xs-12 col-sm-6">
              <div className="f-letter2">
                <p>Support</p>
                <ul>
                  <li><a href="#">685 Market Street,</a> </li>
                  <li><a href="#">Las Vegas, LA 95820,</a> </li>
                  <li> <a href="#">United States.</a> </li>
                  <li> <i className="fa-regular fa-envelope"></i> <a href="#">example@domain.com</a></li>
                  <li> <i className="fa-solid fa-phone"></i> <a href="#">(+01) 850-315-5862</a></li>
                </ul>
              </div>
            </div>
            <div className="col-3 col-xs-12 col-sm-6">
              <div className="f-letter3">
                <p>Account</p>
                <ul>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Login / Register</a></li>
                  <li><a href="#">Cart</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">Shop</a></li>
                </ul>
              </div>
            </div>
            <div className="col-3 col-xs-12 col-sm-6">
              <div className="f-letter3">
                <p>Quick Link</p>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms Of Use</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-3 col-xs-12 col-sm-6">
              <div className="f-letter3">
                <p>Download App</p>
                <p>Save $3 With App & New User only</p>
                <div className="f-img">
                  <div className="row">
                    <div className="col-6 col-sm-4 col-xs-4">
                      <img src={fimg1} alt="" />
                    </div>
                    <div className="col-6 col-sm-4 col-xs-4">
                      <div className="row">
                        <div className="col-12 fimg2">
                          <img src={fimg2} alt="" />
                        </div>
                        <div className="col-12">
                          <img src={fimg3} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row rowf-3">

            <div className="col-4 col-sm-12 col-xs-12">
              <div className="f-social">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li> <a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li> <a href="#"><i className="fa-brands fa-twitter"></i></a> </li>
                  <li> <a href="#"><i className="fa-brands fa-linkedin"></i></a> </li>
                  <li> <a href="#"><i className="fa-brands fa-github"></i></a> </li>
                </ul>

              </div>
            </div>
            <div className="col-4 col-sm-12 col-xs-12">

              <div className="f-reserved">
                <p>© 2022. All rights reserved by Axilthemes.</p>
              </div>

            </div>

            <div className="col-4 col-sm-12 col-xs-12">

              <div className="f-cards">
                <p>Accept For</p>
                <img src={fcard1} alt="" />
                <img src={fcard2} alt="" />
                <img src={fcard3} alt="" />

              </div>

            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default Footer