import React, { useEffect, useState } from 'react'
import n from "./newPage.module.scss"
import newPageimg from "../../assets/image/new-pageImg.jpg"
import logoLarge from "../../assets/image/logo-large.png"
import { useNavigate } from "react-router-dom"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function NewPage() {

  const navigate = useNavigate()

  const goto = () => {
    navigate("/")
  }

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "October, 25, 2022";

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


  return (
    <>
      <Header />
      <div className={n.new}>
        <div className={n.newImg}>
          <img src={newPageimg} alt="" />
        </div>
        <div className={n.newLetter}>
          <img src={logoLarge} alt="" />
          <p>Our new website is on the way</p>
          <p>We're coming soon! We're working hard to give you <br />
            the best experince.</p>

          <ul>
            <li>{days}</li>
            <li>{hours}</li>
            <li>{minutes}</li>
            <li>{seconds}</li>
          </ul>
          <button onClick={() => goto()} >Go to Home</button>
        </div>



      </div>
      <Footer />
    </>

  )
}

export default NewPage