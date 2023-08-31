import React, { Component } from 'react';

class ContactUs extends Component {
    state = {  } 
    render() { 
        return (
            <div className='contactus_screen'>
                <div className='image_contactus_screen'>
                    <img src="https://us.123rf.com/450wm/rastudio/rastudio2009/rastudio200900088/155298997-about-us-abstract-concept-vector-illustration-.jpg?ver=6" alt="" />
                </div>
                <div className='text_contactus_screen'>
                    <div className='div1'> <b>About us & Contact Us</b></div>
                    <div className='div2'>
                        <span className='span1'><b> Developer</b></span>
                        <span className='span2'><b> & Designer</b></span>
                    </div>
                    <div className='div3'>
                        I'm a front-end web developer. i can provide clean code
                        and pixel perfect design. this site is a simple marketing
                        page with easy interfaces for interaction with users. For 
                        more about us, you can contact us with mail 
                        ( <span className='span3'><i title='serfa@gmail.com' className="fa-regular fa-envelope"></i> </span>)  
                        or in Social media (links bellow)you can Follow us for more communication.   
                        </div>
                </div>
            </div>
        );
    }
}
export default ContactUs;