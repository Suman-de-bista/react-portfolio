import React from 'react';
import emailjs from 'emailjs-com';

const Contacts = () => {

    const sendEmail = (e) =>{        
        emailjs.sendForm(
            'service_ewm5l3i',
            'template_8fx5u18',
            e.target,
            'user_XsJbmN1O10NyUEyyrnpYO'
            ).then(res => res.json()
            ).catch(err => console.log(err));
    }
    return (
        <div className='contact' id='contact'>
            <div className="contact-heading">Contacts</div>
            <form className='contact-input-main' onSubmit={sendEmail}>
                <div className="contact-input contact-name">
                    <input type='text' name='name' placeholder='Name'/>
                </div>
                <div className="contact-input contact-email">
                    <input type='email' name='user-email' placeholder='Email'/>
                </div>
                <div className="contact-input contact-subject">
                    <input type='text' name='subject' placeholder='Subject'/>
                </div>
            
            <div className="contact-message">
                <textarea placeholder='Your Message' name='message' />
            </div>
            <div className="contact-send-btn">
            <input type='submit' value='Send Message'/>
            </div>
            </form>
        </div>
    );
}

export default Contacts;
