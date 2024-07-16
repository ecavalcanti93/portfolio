import { useRef } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_lw5ej65', 'template_yu4cm2q', form.current, {
            publicKey: 'joPmXgM3JdI_XqHjx',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <section id="contact">
            <h1 className="contactPage"> Contact Me </h1>
            <span className="intro">Please fill out the form below to discuss any work opportunities.</span>
            
            <form className="contactForm"
                ref={form}
                onSubmit={sendEmail}>

                <input type="text" className="name" placeholder="Your Name" name="your_name" />
                <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                <textarea name="message" className="message" rows="5" placeholder="Type a Message" />
                <button type="submit" value="Send" className="btnSubmit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;