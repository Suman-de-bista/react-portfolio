import React from 'react';

const Contacts = () => {
    return (
        <div className='contact' id='nav-to-contact'>
            <div className="contact-heading">Contacts</div>
            <div className='contact-input-main'>
                <div className="contact-input contact-name">
                    <input type='text' placeholder='Name'/>
                </div>
                <div className="contact-input contact-email">
                    <input type='email' placeholder='Email'/>
                </div>
                <div className="contact-input contact-subject">
                    <input type='text' placeholder='Subject'/>
                </div>
            </div>
            <div className="contact-message">
                <textarea placeholder='Your Message'/>
            </div>
            <div className="contact-send-btn">
            <input type='submit' value='Send Message'/>
            </div>
        </div>
    );
}

export default Contacts;
