import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contacts.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "port_1",     
      "template_vqqjbqx",    // e.g., "template_xxxx"
      form.current,
      "d4Gg7Hs-XiBo_5YIT"      // e.g., "user_xxxx"
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send. Please try again.");
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>📬 Contact Me</h2>
      <p>Send me a message directly here:</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
