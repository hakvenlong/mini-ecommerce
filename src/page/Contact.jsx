// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // TODO: Send data to backend or email service
      alert('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
    setValidated(true);
  };

  return (
    <section className="py-3 py-md-5">
      <div className="container">
        {/* Title */}
        <div className="row justify-content-md-center">
          <div className="col-12 text-center">
            <h2 className="mb-4 display-5">Contact Us</h2>
            <p className="text-secondary mb-5">
              We'd love to hear from you! Fill out the form below to get in touch.
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="row justify-content-md-center mb-5">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d584.705292147838!2d104.89480649013795!3d11.567967498737799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095173761d4a53%3A0xcd09ff2f4d326e3f!2sSETEC%20Institute!5e0!3m2!1sen!2skh!4v1755776714215!5m2!1sen!2skh"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SETEC Institute Location"
            ></iframe>
          </div>
        </div>

        {/* Form + Info */}
        <div className="row justify-content-md-center">
          {/* Contact Form */}
          <div className="col-12 col-md-6">
            <form
              id="contact-form"
              noValidate
              className={validated ? 'was-validated' : ''}
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">Please enter your name.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">Please enter a valid email address.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">Please enter a subject.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="invalid-feedback">Please enter your message.</div>
              </div>

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ backgroundColor: '#FE980F', borderColor: '#FE980F' }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="col-12 col-md-6 mt-5 mt-md-0">
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <h5>Contact Information</h5>
                <p>
                  <i className="bi bi-geo-alt"></i>{' '}
                  SMOS store No. 86A, Street 110, Russian Federation Blvd (110), Phnom Penh
                </p>
                <p>
                  <i className="bi bi-telephone"></i> +885 123 456 789
                </p>
                <p>
                  <i className="bi bi-envelope"></i> info@smosstore.com
                </p>
              </div>

              <div className="col-12 col-md-6 mb-4">
                <h5>Follow Us</h5>
                <div>
                  <a href="#" className="text-dark me-3" aria-label="Facebook">
                    <i className="bi bi-facebook fs-4"></i>
                  </a>
                  <a href="#" className="text-dark me-3" aria-label="Twitter">
                    <i className="bi bi-twitter fs-4"></i>
                  </a>
                  <a href="#" className="text-dark me-3" aria-label="Instagram">
                    <i className="bi bi-instagram fs-4"></i>
                  </a>
                  <a href="#" className="text-dark" aria-label="LinkedIn">
                    <i className="bi bi-linkedin fs-4"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;