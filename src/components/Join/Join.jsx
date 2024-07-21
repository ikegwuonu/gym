import React, { useRef } from 'react';
import'./Join.css';
import emailjs from '@emailjs/browser';


export const Join = () => {
    const form= useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_2yh4d51', 'template_m581ot6', form.current, {
            publicKey: 'cDVuHy-VOb1Y9osOD',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    

  return (
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'> WITH US?</span>
            </div>
            
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user-email' placeholder='Enter your email' />
                <button className='btn btn-join' type='submit'>Join now</button>
            </form>
        </div>
    </div>
  )
}
