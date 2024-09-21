import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import InstagramIcon from '@mui/icons-material/Instagram';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });

  const [popupMessage, setPopupMessage] = useState(''); // State for popup message

  // This method handles form field changes.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_3qqr7zi', // Replace with your EmailJS service ID
        'template_jcf613n', // Replace with your EmailJS template ID
        e.target,
        'P4W6UWLXGAcepa4eM' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setPopupMessage(`Got your message, ${formData.from_name}. Thanks for reaching out!`);
          setTimeout(() => setPopupMessage(''), 4000); // Hide message after 4 seconds
          setFormData({
            from_name: '',
            reply_to: '',
            message: '',
          });
        },
        (error) => {
          setPopupMessage('Oops! Something went wrong. Please try again.');
          setTimeout(() => setPopupMessage(''), 4000); // Hide message after 4 seconds
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Me</h2>
        <p>Feel free to reach out through the form or find me on social media.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Your name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="reply_to">Email</label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                placeholder="Your email"
                value={formData.reply_to}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row full-width">
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-submit">Send Message</button>
          </div>
        </form>
      </div>

      <div className="contact-socials">
        <div className="social-icons">
          <a href="https://github.com/santoshdannana" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/santosh-kumar-4972791a2" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/_santoshhhhh_/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faInstagram}  />
          </a>
        </div>
      </div>

      {/* Popup message at the bottom-right corner */}
      {popupMessage && <div className="popup-message">{popupMessage}</div>}
    </div>
  );
};

export default Contact;
