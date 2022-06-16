import React from 'react';
import github from './github.png';
import linkedin from './linkedin.png';
import email from './email.png';
import document from './document.png';

// import { validateEmail } from '../../..utils/helper';
// import { Row, Col } from 'react-bootstrap'; 

function ContactForm() {

    return (
        <section>
 <h1 data-testid='h1tag' className="contact">Contact Me</h1>
 <div className="contact-container">
 <div className="contact-icons">
  
        <a href="https://github.com/ErinJordan222"><img src={github}/></a>
     
        <a href="https://www.linkedin.com/in/erin-jordan-6b58a51a0/"><img src={linkedin}/></a>
        
        <a href="mailto:erinjordan2790@gmail.com"><img src={email}/></a>
       
            <a href="https://docs.google.com/document/d/18Pn1AhG1UqE-DTjAZ8Akk-5OmIOflbFkg3u6J7HJ3Cc/edit"><img src={document}/></a>
     
</div>
 

</div>



        </section>
    )
}

export default ContactForm;