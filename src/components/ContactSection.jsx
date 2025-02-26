import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
  
      
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: null
        }));
      }
    };
  
    const validateForm = () => {
      const newErrors = {};

      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
  
      // Subject validation
      if (!formData.subject.trim()) {
        newErrors.subject = 'Subject is required';
      }
  
      // Message validation
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      } else if (formData.message.trim().length < 10) {
        newErrors.message = 'Message must be at least 10 characters';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        console.log('Form submitted:', formData);
        setSubmitted(true);
  
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
  
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    };
  
    return (
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <p>Have questions? We're here to help.</p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="info-item">
                <h3>Email Us</h3>
                <p>support@resumecraft.example</p>
              </div>
              <div className="info-item">
                <h3>Call Us</h3>
                <p>+91 987654321</p>
              </div>
              <div className="info-item">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9am - 5pm</p>
              </div>
              <div className="social-links">
                <a href="#" className="social-link"><FaFacebook/></a>
                <a href="#" className="social-link"><FaInstagram/></a>
                <a href="#" className="social-link"><FaXTwitter/></a>
                <a href="#" className="social-link"><FaLinkedin/></a>
              </div>
            </div>
            <div className="contact-form-container">
              {submitted ? (
                <div className="success-message">
                  <h3>Thank you for your message!</h3>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'error' : ''}
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                      rows="5"
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
  