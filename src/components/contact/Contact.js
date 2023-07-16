import React, { useRef } from "react";
import "./contact.css";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-awesome-reveal";



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_burhd43",
        "template_joorwou",
        form.current,
        "0QeMD6RClNIpFYI5Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <Slide  cascade damping={0.1}  > 
    <div className="contact">
      <section className="contact_section">
        <div className="contact_section_title">
          <h3 className="section__subtitle">
            Get in <span>Touch</span>
          </h3>
          <h2 className="section__title">Contact Me</h2>
        </div>

        <div className="contact__container container">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__form"
           
          >
            <div className="contact__group">
              <div className="contact__group__input">
                <input
                  type="text"
                 
                  name="user_name"
                  required
                  placeholder="Enter Your Name"
                  className="contact__input"
                />
                <input
                  type="email"
                
                  name="user_email"
                  required
                  placeholder="Enter Your Email"
                  className="contact__input"
                />
              </div>
            </div>

            <textarea
             
              name="message"
              className="contact__input"
              required
              placeholder="Enter Your Message"
            ></textarea>
            <p className="contact__message" id="contact_message">
             
            </p>
            <Button
              type="submit"
              className="contact__button py-2 px-3 btn btn-success mb-3"
            >
              Send Message
            </Button>
            <ToastContainer />
          </form>
        </div>
      </section>
    </div>
    </Slide>
  );
}

export default Contact;
