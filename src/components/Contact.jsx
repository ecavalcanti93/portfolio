import { useRef, useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const emailField = e.target.elements.your_email;
    const emailValue = emailField.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    emailjs
      .sendForm("service_lw5ej65", "template_yu4cm2q", form.current, {
        publicKey: "joPmXgM3JdI_XqHjx",
      })
      .then(
        () => {
          setMessage("Email sent successfully!");
          setMessageType("success");
          e.target.reset();
        },
        (error) => {
          setMessage(`Failed to send email: ${error.text}`);
          setMessageType("error");
        }
      );
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section
      className="flex flex-col mx-auto max-w-screen-lg p-5 m-10 items-center gap-2"
      id="contact"
    >
      <h1 className="text-4xl font-bold sm:text-5xl">Contact Me </h1>
      <span className="text-center p-5">
        Please fill out the form below to discuss any work opportunities.
      </span>

      <form
        className="flex flex-col gap-2.5 justify-center items-center text-redSpecial"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          className="bg-blackSpecial mb-4 rounded-sm sm:w-150 pl-2.5 pt-2.5 placeholder:text-neutral-700 placeholder:italic"
          placeholder="Your Name"
          name="your_name"
          required
        />
        <input
          type="email"
          className="bg-blackSpecial mb-4 rounded-sm sm:w-150 pl-2.5 pt-2.5 placeholder:text-neutral-700 placeholder:italic"
          placeholder="Your Email"
          name="your_email"
          required
        />
        <textarea
          name="message"
          className="bg-blackSpecial rounded-sm sm:w-150 pl-2.5 pt-2.5 placeholder:text-neutral-700 placeholder:italic"
          rows="5"
          placeholder="Type a Message"
          required
        />
        {message && (
  <div className={`message ${messageType}`}>
    {message}
  </div>
)}
      <div className="pt-5">
        <button
          type="submit"
          value="Send"
          id="btnSubmit"
          className="flex pt-2 pb-2 pl-8 pr-8 text-white rounded-sm bg-redSpecial cursor-pointer"
        >
          Submit
        </button>
      </div>
      </form>
    </section>
  );
};

export default Contact;
