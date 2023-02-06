import React from "react";
import blogstyle from './Blog.module.css'
import producticon from '../../assets/image/product.png'

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import blog1 from '../../assets/image/blog1.png'
import blog2 from '../../assets/image/blog2.png'
import blog3 from '../../assets/image/blog3.png'
import blog4 from '../../assets/image/blog4.png'
import blog5 from '../../assets/image/blog5.png'
import aboutimg2 from '../../assets/image/aboutimg2.png'
import aboutimg3 from '../../assets/image/aboutimg3.png'
import aboutimg1 from '../../assets/image/aboutimg1.png'
import product1 from '../../assets/image/product1.jpg'
import product2 from '../../assets/image/product2.jpg'
import product3 from '../../assets/image/product3.jpg'
import newsletterimg from "../../assets/image/h-watch.jpg"

import Blogslider from "./BlogSlickslider";
const Blog = () => {
  return(
  <>
    <Header />

    <div className={blogstyle.main}>
        <div className={blogstyle.container}>
          <div className={blogstyle.contact_headline}>
            <div className={blogstyle.headline_text}>
              <ul>
                  <li className={blogstyle.home}>Home</li>
                  <li className={blogstyle.line}></li>
                  <li className={blogstyle.contact}>Blogs</li>
              </ul>
              <h1>Blog List</h1>
            </div>

            <div className={blogstyle.headline_icon}>
              <div className={blogstyle.backicon}>
                <img src={producticon} alt='Image' />
              </div>
            </div>
          </div>

          <div className={blogstyle.blogs}>
              <div className={blogstyle.left_blog}>
                  <div className={blogstyle.left_innerblog}>
                    <div className={blogstyle.first_leftblog}>
                      <div className={blogstyle.first_innerleftblog}>
                        <h4>Dubai’s Offers its Take Nike SB Dunk.</h4>
                        <div className={blogstyle.human1}>
                            <div className={blogstyle.human1_img}><img src={blog1} /></div>
                            <div className={blogstyle.human1_info}>
                              <h6>Ralph Edwards</h6>
                              <ul>
                                <li className={blogstyle.home}>Mar 27, 2022</li>
                                <li className={blogstyle.contact}>9 min to read</li>
                              </ul>
                            </div>
                        </div>
                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                        <div className={blogstyle.btn_1}><button>Read More</button></div>
                      </div>
                    </div>

                    <div className={blogstyle.second_leftblog}>
                    <div className={blogstyle.second_innerleftblog}>
                        <div className={blogstyle.blog2_img}><img src={blog2} /></div>

                        <div className={blogstyle.blog2_content}>
                          <h4>UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan Brand</h4>
                          <div className={blogstyle.human1}>
                              <div className={blogstyle.human1_img}><img src={blog3} /></div>
                              <div className={blogstyle.human1_info}>
                                <h6>Theresa Underwood</h6>
                                <ul>
                                  <li className={blogstyle.home}>Mar 25, 2022</li>
                                  <li className={blogstyle.contact}>300k Views</li>
                                </ul>
                              </div>
                          </div>
                          <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                          <div className={blogstyle.btn_1}><button>Read More</button></div>
                        </div>
                    </div>
                    </div>

                    <div className={blogstyle.three_leftblog}>
                      <div className={blogstyle.three_innerleftblog}>
                        <div className={blogstyle.first3_leftblog}>
                          <div className={blogstyle.first3_innerleftblog}>
                            <h4>“An oral history of the AIM away message (by the people who were there)”</h4>
                            <div className={blogstyle.human1}>
                              <div className={blogstyle.human1_img}><img src={blog3} /></div>
                              <div className={blogstyle.human1_info}>
                                <h6>Theresa Underwood</h6>
                                <ul>
                                  <li className={blogstyle.home}>Mar 22, 2022</li>
                                  <li className={blogstyle.contact}>300k Views</li>
                                </ul>
                              </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={blogstyle.four_leftblog}>
                      <div className={blogstyle.four_innerleftblog}>
                        <div className={blogstyle.videodiv}>
                            <img src={blog4} />
                            <div className={blogstyle.popup_video}>
                              <a target='_blank' href="https://www.youtube.com/watch?v=1iIZeIy7TqM" >
                                <i class="fa-sharp fa-solid fa-play"></i>
                              </a>
                            </div>
                        </div>

                        <div className={blogstyle.blog2_content}>
                          <h4>UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan Brand</h4>
                          <div className={blogstyle.human1}>
                              <div className={blogstyle.human1_img}><img src={blog3} /></div>
                              <div className={blogstyle.human1_info}>
                                <h6>Theresa Underwood</h6>
                                <ul>
                                  <li className={blogstyle.home}>Mar 20, 2022</li>
                                  <li className={blogstyle.contact}>300k Views</li>
                                </ul>
                              </div>
                          </div>
                          <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                          <div className={blogstyle.btn_1}><button>Read More</button></div>
                        </div>
                      </div>
                    </div>

                    <div className={blogstyle.five_leftblog}>
                      <div className={blogstyle.five_innerleftblog}>
                          <Blogslider />
                          
                          <div className={blogstyle.blog5_content}>
                            <h4>UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and Jordan Brand</h4>
                            <div className={blogstyle.human1}>
                                <div className={blogstyle.human1_img}><img src={blog5} /></div>
                                <div className={blogstyle.human1_info}>
                                  <h6>Leslie Alexander</h6>
                                  <ul>
                                    <li className={blogstyle.home}>Mar 15, 2022</li>
                                    <li className={blogstyle.contact}>300k Views</li>
                                  </ul>
                                </div>
                            </div>
                            <p>The Converse x AMBUSH® CTAS Duck Boot and Chuck 70 Fuzzy release November 21 in Greater China. A global release follows November 24.</p>
                            <div className={blogstyle.btn_1}><button>Read More</button></div>
                        </div>




                      </div>
                    </div>

                  </div>
              </div>

              <div className={blogstyle.right_blog}>
                  <div className={blogstyle.right_innerblog}>

                      <div className={blogstyle.right_blog1}>
                          <h6>Latest Posts</h6>

                          <div className={blogstyle.right_posts}>
                              <div className={blogstyle.right_post1}>
                                  <div className={blogstyle.post1_img}>
                                    <img src={aboutimg2} />
                                  </div>

                                  <div className={blogstyle.post1_content}>
                                     <h6>Dubai’s FRAME Offers its Take on</h6>
                                     <div className={blogstyle.content_date}>
                                       <ul>
                                         <li>Mar 27, 2022</li>
                                         <li>300k Views</li>
                                       </ul>
                                     </div>
                                  </div>
                              </div>

                              <div className={blogstyle.right_post2}>
                                  <div className={blogstyle.post1_img}>
                                    <img src={aboutimg3} />
                                  </div>

                                  <div className={blogstyle.post1_content}>
                                     <h6>Apple presents App Best of 2022</h6>
                                     <div className={blogstyle.content_date}>
                                       <ul>
                                         <li>Mar 20, 2022</li>
                                         <li>300k Views</li>
                                       </ul>
                                     </div>
                                  </div>
                              </div>

                              <div className={blogstyle.right_post3}>
                                  <div className={blogstyle.post1_img}>
                                    <img src={aboutimg1} />
                                  </div>

                                  <div className={blogstyle.post1_content}>
                                     <h6>Gallaudet University</h6>
                                     <div className={blogstyle.content_date}>
                                       <ul>
                                         <li>Mar 15, 2022</li>
                                         <li>300k Views</li>
                                       </ul>
                                     </div>
                                  </div>
                              </div>
                              
                          </div>
                      </div>

                      <div className={blogstyle.right_blog2}>
                       <h6>Recent Viewed Products</h6>
                       <div className={blogstyle.right_posts}>
                          <div className={blogstyle.right_post1}>
                            <div className={blogstyle.post1_img}>
                              <img src={product1} />
                            </div>

                            <div className={blogstyle.post1_content}>
                                <h6>Men's Fashion Tshirt</h6>
                                <div className={blogstyle.content_date}>
                                  <span><del>$30</del>$20</span>
                                </div>
                            </div>
                          </div>

                          <div className={blogstyle.right_post2}>
                            <div className={blogstyle.post1_img}>
                              <img src={product2} />
                            </div>

                            <div className={blogstyle.post1_content}>
                                <h6>Nike Shoes</h6>
                                <div className={blogstyle.content_date}>
                                  <span><del>$200</del>$150</span>
                                </div>
                            </div>
                          </div>

                          <div className={blogstyle.right_post3}>
                            <div className={blogstyle.post1_img}>
                              <img src={product3} />
                            </div>

                            <div className={blogstyle.post1_content}>
                                <h6>Addidas Shoes</h6>
                                <div className={blogstyle.content_date}>
                                  <span><del>$300</del>$200</span>
                                </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className={blogstyle.right_blog3}>
                          <h6>Search</h6>
                          <form>
                            <button><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                          <input type='text' name="text" placeholder="Search" />
                          </form>
                      </div>

                      <div className={blogstyle.right_blog4}>
                          <h6>Archives List</h6>
                          <ul>
                            <li>January 2020</li>
                            <li>February 2020</li>
                            <li>March 2020</li>
                            <li>April 2020</li>

                          </ul>
                      </div>

                      <div className={blogstyle.right_blog5}>
                        <h6>Tags</h6>

                        <div className={blogstyle.tagcloud}>
                          <a href="#">Design</a>
                          <a href="#">HTML</a>
                          <a href="#">Graphic</a>
                          <a href="#">Development</a>
                          <a href="#">UI/UX Design</a>
                          <a href="#">eCommerce</a>
                          <a href="#">CSS</a>
                          <a href="#">JS</a>
                        </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className={blogstyle.newsletter}>
              <div className={blogstyle.newsletter_inner}>
                <img src={newsletterimg} alt="" />
                <div className={blogstyle.newsletter_title}>
                  <p> <i className="fa-solid fa-envelope"></i> Newsletter</p>
                  <p>Get weekly update</p>
                  <button href="#">Subscribe</button>
                </div>
              </div>
              
            </div>
        </div>
      </div>


    <Footer />
  </>
  )
};

export default Blog;
