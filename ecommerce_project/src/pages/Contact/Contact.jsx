import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactstyle from './Contact.module.css';
import producticon from '../../assets/image/product.png'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

function Contact() {
  const form = useRef()
    
  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_ftgy5d7', 'template_dd1uvxj', form.current, 'K6Nc_lBbmaZb9YTZq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    };



  const [errormsg, setErrormsg] = useState('')

  const [nameinput, setNameinput] = useState('')
  const [phoneinput, setPhoneinput] = useState('')
  const [emailinput, setEmailinput] = useState('')
  const [messageinput, setMessageinput] = useState('')

  const Inpnameval = (e) => {
    setNameinput(e.target.value);
  }

  const Inpphoneval = (e) => {
    setPhoneinput(e.target.value);
  }

  const Inpemailval = (e) => {
    setEmailinput(e.target.value);
  }

  const Inpmessageval = (e) => {
    setMessageinput(e.target.value);
  }
  function messageerror() {
    alert('Email has been sent successfully');
  }

  const Clickme =()=>{
    if(nameinput == '' || (nameinput == '' && (phoneinput == '' || emailinput == '' || messageinput == ''))){
        setErrormsg('* Name can not be empty!')
    }
    else if(phoneinput == ''){
        setErrormsg('* Phone number can not be empty!')
        
    }

    else if(emailinput == ''){
        setErrormsg('* Email can not be empty!')
    }

    else if(messageinput == ''){
        setErrormsg('* Message can not be empty!')
    }

    else if(nameinput !== '' && phoneinput !== '' && emailinput !== '' && messageinput !== ''){
        setErrormsg('');
        setNameinput('');
        setPhoneinput('');
        setEmailinput('');
        setMessageinput('');
        setTimeout(messageerror, 2000);
    }

}
  return (
    <>
    <Header/>
    <div className={contactstyle.main}>
        <div className={contactstyle.container}>
            <div className={contactstyle.contact_headline}>
              <div className={contactstyle.headline_text}>
                <ul>
                    <li className={contactstyle.home}>Home</li>
                    <li className={contactstyle.line}></li>
                    <li className={contactstyle.contact}>Contact</li>
                </ul>
                <h1>Contact With Us</h1>
              </div>

              <div className={contactstyle.headline_icon}>
                <div className={contactstyle.backicon}>
                  <img src={producticon} alt='Image' />
                </div>
              </div>
            </div>

            <div className={contactstyle.form_text_div}>
              <div className={contactstyle.form_div}>
                <h3>We would love to hear from you.</h3>
                <p>If you’ve got great products your making or looking to work with us then drop us a line.</p>
              
                <form ref={form} onSubmit={sendEmail} className={contactstyle.form}>
                  <div className={contactstyle.name_phone_mail_div}>
                  
                    <div className={contactstyle.form_name}>
                      <div className={contactstyle.name1}>
                        <label>Name <span>*</span></label>
                        <input className={contactstyle.inp} type='text' name='user_name' value={nameinput} onChange={Inpnameval}/>
                      </div>
                    </div>

                    <div className={contactstyle.form_phone}>
                      <div className={contactstyle.phone1}>
                        <label>Phone <span>*</span></label>
                        <input className={contactstyle.inp} type='tel' name='user_phone' value={phoneinput} onChange={Inpphoneval}/>
                      </div>
                    </div>

                    <div className={contactstyle.form_mail}>
                      <div className={contactstyle.mail1}>
                        <label>Email <span>*</span></label>
                        <input className={contactstyle.inp} type='email' name='user_email' value={emailinput} onChange={Inpemailval}/>
                      </div>
                    </div>
                  </div>

                  <div className={contactstyle.textarea_div}>
                    <div className={contactstyle.form_textarea}>
                      <label>Your message</label>
                      <textarea className={contactstyle.inp} name='message' value={messageinput} onChange={Inpmessageval}></textarea>
                    </div>
                  </div>

                  <div className={contactstyle.btn_div}>
                    <button name='submit' type='submit' onClick={Clickme} className={contactstyle.form_btn}>Send Message</button>
                    <p>{errormsg}</p>
                  </div>
                </form>
              </div>

              <div className={contactstyle.text_div}>
                    <div className={contactstyle.text}>
                      <h4>Our Store</h4>
                      <span className={contactstyle.span_1} >8212 E. Glen Creek Street Orchard Park, NY 14127, United States of America</span>
                      <span className={contactstyle.span_2}>Phone: +123 456 7890</span>
                      <span className={contactstyle.span_3}>Email: Hello@etrade.com</span>
                    </div>

                    <div className={contactstyle.text}>
                      <h4>Careers</h4>
                      <p>Instead of buying six things, one that you really like.</p>
                    </div>

                    <div className={contactstyle.text}>
                      <h4>Opening Hours:</h4>
                      <p>Monday to Saturday: 9am - 10pm
                          <br/>
                          Sundays: 10am - 6pm
                      </p>
                    </div>
              </div>
            </div>
        
            <div className={contactstyle.map}>
              <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Melbourne%20Victoria%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact