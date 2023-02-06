import React, { useState, useEffect , useRef} from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import c from "./home.module.scss";
import "../../../src/App.css";
import Slayder from "./Swiper/Slayder";
import headPhones from "../../assets/image/home-headphonesimg.png";
import choose1 from "../../assets/image/choose1.png";
import choose2 from "../../assets/image/choose2.png";
import choose3 from "../../assets/image/choose3.png";
import choose4 from "../../assets/image/choose4.png";
import choose5 from "../../assets/image/choose5.png";
import vr1 from "../../assets/image/vr1.png";
import vr2 from "../../assets/image/vr2.png";
import hwatch from "../../assets/image/h-watch.jpg";
import Swiper2 from "./Swiper2/Swiper2";

import Sliceslide2 from "./Slice-slides/Slice-slide2/Sliceslide2";
import Sliceslide1 from "./Slice-slides/Slice-slide1/Sliceslide1";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  //   const [selecteduser,setSelectedUser]= useState("") 
  //   useEffect(() => {
  //     fetch('http://localhost:3000/selectedUser')
  //         .then(response => response.json())
  //         .then(data => setSelectedUser(data));
  // }, [setSelectedUser]);
  // console.log(selecteduser);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "October,25, 2022";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  const inputValue = useRef()

  const notify = (e) => {
    e.preventDefault()

    if(inputValue.current.value.length == 0){
      toast.error('Please write the email!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    else{

      toast.success(' you will get the weekly update!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });;
    }


    inputValue.current.value = ""

  }

  return (
    <>
      <Header />
      <div className={c.home}>
        <div className={c.homeSlicei}>
          <div className="container">
            <div className={c.homeSlice}>
              <div className={c.homeSlice1}>
                <Sliceslide1 />
              </div>
              <div className={c.homeSlice2}>
                <Sliceslide2 />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={c.homeLet1}>
            <p>
              {" "}
              <i className="fa-solid fa-layer-group"></i> Categories
            </p>
            <p>Browse by Category</p>
          </div>

          <Slayder />

          <div className={c.homePart1}>
            <div className="row">
              <div className="col-6 col-xs-12 col-sm-12">
                <div className={c.homeHeadphoneL}>
                  <p>
                    <i className="fa-solid fa-headphones"></i>Don’t Miss!!
                  </p>
                  <p>
                    Enhance Your <br /> Music Experience
                  </p>
                  <div className={c.homeTimer}>
                    <ul>
                      <li>{days}</li>
                      <li>{hours}</li>
                      <li>{minutes}</li>
                      <li>{seconds}</li>
                    </ul>
                  </div>
                  <button>Check iy Out</button>
                </div>
              </div>
              <div className={`${c.imgcol6} col-6 col-xs-12 col-sm-12`}>
                <div className={c.homeHeadphonesimg}>
                  <img src={headPhones} alt="" />
                  <div className={c.homeanima}>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={c.homeChoose}>
            <p>
              {" "}
              <i className="fa-regular fa-thumbs-up"></i> Why Us
            </p>
            <p>Why People Choose Us</p>
            <div className={`${c.Chooserow} row`}>
              <div className={c.chooseImg}>
                <img src={choose1} alt="" />
                <p>
                  Fast & Secure <br /> Delivery
                </p>
              </div>
              <div className={c.chooseImg}>
                <img src={choose2} alt="" />
                <p>
                  100% Guarantee <br /> On Product
                </p>
              </div>
              <div className={c.chooseImg}>
                <img src={choose3} alt="" />
                <p>
                  24 Hour Return <br /> Policy
                </p>
              </div>
              <div className={c.chooseImg}>
                <img src={choose4} alt="" />
                <p>
                  24 Hour Return <br /> Policy
                </p>
              </div>
              <div className={c.chooseImg}>
                <img src={choose5} alt="" />
                <p>
                  Next Level Pro <br /> Quality
                </p>
              </div>
            </div>
          </div>

          <div className={c.homevr}>
            <div className="row">
              <div className={`${c.col6} col-6 col-xs-12 col-sm-12`}>
                <div className={c.vr1i}>
                  <img src={vr1} alt="" />
                </div>
                <div className={c.vr1l}>
                  <p>Rich sound </p>
                  <p>for less.</p>
                  <a href="#">
                    Collections <i className="fa-solid fa-arrow-right"></i>{" "}
                  </a>
                </div>
              </div>
              <div className={`${c.col6} col-6 col-xs-12 col-sm-12`}>
                <div className={c.vr1i}>
                  <img src={vr2} alt="" />
                </div>
                <div className={c.vr2l}>
                  <a href="#">50% Offer in Winter </a>
                  <p>Get VR </p>
                  <p>Reality Glass.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={c.hsubs}>
            <img src={hwatch} alt="" />
            <div className={c.hsubsl}>
              <p> <i className="fa-solid fa-envelope"></i> Newsletter</p>
              <p>Get weekly update</p>
              <div className={c.hsubsemail}>
                <i className="fa-solid fa-envelope"></i>
                <form onSubmit={(e) => notify(e)} id="banner-message">
                  <input
                    ref={inputValue}
                    type="email"
                    id="inputEmail"
                    placeholder="email"
                    required=""
                    autoFocus=""
                    onInvalid="this.setCustomValidity('Not Valid')" onInput="setCustomValidity('')"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                  <button className={c.subslbutton}   >Subscribe</button>
                </form>
                <ToastContainer position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover />
              </div>
            </div>
          </div>
        </div>

        <div className={c.homeFeedback}>
          <div className="container">
            <p>
              <i>
                <i className="fa-solid fa-quote-left"></i>
              </i>
              Testimonials
            </p>
            <p>Users Feedback</p>
            <Swiper2 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
