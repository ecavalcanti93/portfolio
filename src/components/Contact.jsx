import { useRef, useState, useEffect } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import GitHub from "../images/GithubLogo.png"
import LinkedIn from "../images/LinkedinLogo.png"
import Instagram from "../images/InstagramLogo.png"
import Behance from "../images/BehanceLogo.png"


const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const emailField = e.target.elements.your_email;
        const emailValue = emailField.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
          setMessage('Please enter a valid email address.');
          setMessageType('error');
          return;
      }
    
        emailjs
          .sendForm('service_lw5ej65', 'template_yu4cm2q', form.current, {
            publicKey: 'joPmXgM3JdI_XqHjx',
          })
          .then(
            () => {
              setMessage('Email sent successfully!');
              setMessageType('success');
              e.target.reset();
            },
            (error) => {
              setMessage(`Failed to send email: ${error.text}`);
              setMessageType('error');
            },
          );
      };

      useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
                setMessageType('');
            }, 10000); 

            return () => clearTimeout(timer); 
        }
    }, [message]);

    return (
        <section id="contact">
            <h1 className="contactPage"> Contact Me </h1>
            <span className="intro">Please fill out the form below to discuss any work opportunities.</span>
            

            <form className="contactForm"
                ref={form}
                onSubmit={sendEmail}>

                <input type="text" className="name" placeholder="Your Name" name="your_name" />
                <input type="email" className="email" placeholder="Your Email" name="your_email" required/>
                <textarea name="message" className="message" rows="5" placeholder="Type a Message" />
                {message && (
                    <div className={`message ${messageType}`}>
                        {message}
                    </div>
                )}
                <button type="submit" value="Send" className="btnSubmit">Submit</button>
                <div className="links">
                <a href="https://github.com/ecavalcanti93" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub" className="logoLink"/></a>
                <a href="https://www.linkedin.com/in/ecavalcanti93/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn" className="logoLink"/></a>
                <a href="https://www.instagram.com/designer.ec/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" className="logoLink"/></a>
                <a href="https://www.behance.net/ecavalcanti" target="_blank" rel="noopener noreferrer"><img src={Behance} alt="Behance" className="logoLink"/></a>
                </div>
            </form>
        </section>
    )
}

export default Contact;