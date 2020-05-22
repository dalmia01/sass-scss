import React from 'react';
import '../assets/scss/contactform.scss';

const ContactForm = props =>{
  return (
    <div className='contactform'>
      <div className='fixed_bg'>
      <div></div>
      <div></div>
      </div>
      <div className='form'>
        <div className='info'>
          <b>Contact Info</b>
          <div><ion-icon name="location"></ion-icon>387, Vikaspuri Street, Delhi, India, 110018</div>
          <div><ion-icon name="mail"></ion-icon>dalmia01@gmail.com</div>
          <div><ion-icon name="call"></ion-icon>+91 97 111 37485</div>
          <div className='icons'>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-pinterest"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="logo-skype"></ion-icon>
          </div>
        </div>
        
        <div className='contact'>
          <h6>Send a Message</h6>
          <div className='name'>
            
            <div className='firstname'>
              <input type='text' required/>
              <span className='floating_label' >First Name</span>
            </div>
            
            <div className='lastname'>
              <input type='text' required/>
              <span className='floating_label'>Last Name</span>
            </div>
          
          </div>
          
          <div className='email_phone'>
            
            <div className='email'>
              <input type='text' required/>
              <span className='floating_label' >Email Address</span>
            </div>
            
            <div className='phone'>
              <input type='text' required/>
              <span className='floating_label'>Mobile Phone</span>
            </div>
          
          </div>
          
          <div className='write'>
            <div><textarea required></textarea>
            <span className='floating_label' >Write your message here</span></div>
          </div>
          
          <div className='btn'>
            <input type='submit' />
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default ContactForm;