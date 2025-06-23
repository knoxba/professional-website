import React, { useState, useEffect } from 'react';
import './Contact.css';
import './ParallaxShapes.css';

function Contact() {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="parallax-shapes">
        <div 
          className="triangle-shape triangle-5"
          style={{
            transform: `translateY(${scrollY * 0.5}px) rotate(30deg)`
          }}
        />
        <div 
          className="triangle-shape triangle-6"
          style={{
            transform: `translateY(${scrollY * -0.4}px) rotate(-60deg)`
          }}
        />
      </div>
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info-card animate-fade-in">
            <div className="card-header">
              <div className="title-badge">
                <h3>Contact Information</h3>
              </div>
            </div>
            <div className="description-box">
              <p>Feel free to reach out for any questions or opportunities!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>your.email@example.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>(206) 698-8187</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Seattle, WA</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://linkedin.com/in/bradlyaknox" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <div className="contact-form-card animate-fade-in delay-1">
            <div className="card-header">
              <div className="title-badge">
                <h3>Send Message</h3>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;