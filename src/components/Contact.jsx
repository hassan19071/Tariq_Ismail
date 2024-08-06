import React, { useState } from "react";
import "./styling/contact.scss";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { useScroll } from "./ScrollContext";
const Contact = () => {
  let { contactRef } = useScroll();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zwyq7ca", // Replace with your EmailJS Service ID
        "template_2sz4bru", // Replace with your EmailJS Template ID
        e.target,
        "F1Hze4P8926XMxdRu" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );

    e.target.reset(); // Reset the form fields after submission
  };
  return (
    <div className="contact py-5" id="contact" ref={contactRef}>
      <div className="container py-lg-4 py-1">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <div className="head-title">
            <h1>Get in Touch</h1>
          </div>
        </ScrollAnimation>
        <div className="row mt-5">
          <div className="col-lg-7 pe-lg-4">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
              <div className="contact-form">
                <h4>Let's Work Together!</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 mt-2">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-100"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-100"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <input
                        type="text"
                        placeholder="Your Phone Number"
                        className="w-100"
                        name="phone"
                        onChange={handleChange}
                        value={formData.phone}
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <textarea
                        type="text"
                        placeholder="Your Message"
                        className="w-100"
                        rows={10}
                        required
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                      ></textarea>
                    </div>
                    <div className="col-12 mt-4 text-end">
                      <button type="submit">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-5 ps-lg-5 mt-lg-0 mt-4">
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <div className="contact-details">
                <h4>Contact Details</h4>
                <div className="details">
                  <div className="email d-flex align-items-center">
                    <div className="icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="text ms-3">
                      <h6 className="mb-1">Email</h6>
                      <Link to="mailto:vfx.tarek@gmail.com">
                        vfx.tarek@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="phone my-4 d-flex align-items-center">
                    <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="text ms-3">
                      <h6 className="mb-1">Phone Number</h6>
                      <Link to="tel:+966557641755">+966557641755</Link>
                    </div>
                  </div>
                  <div className="address d-flex align-items-center">
                    <div className="icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="text ms-3">
                      <h6 className="mb-1">Address</h6>
                      <span>KSA / Riyadh</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Contact);
