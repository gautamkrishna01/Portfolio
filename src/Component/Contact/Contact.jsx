import React from 'react'
import "./contact.css"
import Phone from "../../Images/phone.jpg"
import Email from "../../Images/email.png"
import Address from "../../Images/address.png"
import { useRef } from 'react'
import emailjs from 'emailjs-com';
import Git from "../../Images/git.png"
import Linkedin from "../../Images/linkedin.jpg"


export const Contact = () => {
    const formRef  = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_aaxgo19', 'template_cclvvna', formRef.current, 'user_MHuHX2Vtfid1T8boilZSZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <>
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" />
                            9861437377
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" />
                            gtmkrishna400@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" />
                            Boudha,Kathmandu
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <div className="c-right">
                        <p>Get in touch .Always freelancing if the right project come along me.</p>
              
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea  rows="5"  placeholder="Message"name="message"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            <div className="connect">Connect In</div>
            <div className="icons">
                <a href="https://github.com/gautamkrishna01"><img src={Git} /></a>
                <a href="https://www.linkedin.com/in/krishna-gautam-65931617b/"><img src={Linkedin} /></a>
            </div>
        </div>
        </>
    )
}
