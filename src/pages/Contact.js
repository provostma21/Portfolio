import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../pages/Styles/Contact.css";

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

emailjs.init(publicKey);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        console.log("Message Sent!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="form-center">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h3>
          Have any comments or questions for me? <br></br>Then, feel free to
          fill out the contact form below!
        </h3>
        <input type="text" name="user_name" placeholder="Name" />
        <br></br>
        <input type="email" name="user_email" placeholder="Email" />
        <br></br>
        <textarea name="message" placeholder="Your Message" />
        <input className="send-btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
