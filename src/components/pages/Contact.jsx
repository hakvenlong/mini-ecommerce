// src/pages/Contact.jsx
import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const SERVICE_ID = "service_iql4pgv";
  const TEMPLATE_ID = "template_2i57xde";
  const PUBLIC_KEY = "e2uILIjttPqFgj8Nh";

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const sendEmail = (e) => {
    e.preventDefault();
    const formEl = form.current;

    // Trigger HTML5 validation
    setValidated(true);
    if (!formEl.checkValidity()) {
      setStatus('Please fix the errors in the form.');
      return;
    }

    setIsSubmitting(true);
    setStatus('');

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formEl)
      .then(
        (result) => {
          console.log('EmailJS SUCCESS:', result.status, result.text);
          setStatus('Thank you! Your message has been sent successfully.');
          formEl.reset();
          setValidated(false);
        },
        (error) => {
          console.error('EmailJS ERROR:', error);
          const errMsg = error.text || error.message || 'Unknown error';
          const errCode = error.status ? ` (${error.status})` : '';
          toast.error(`Failed to send: ${errMsg}${errCode}. Please try again.`);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-3 py-md-5">
      <div className="container">
        {/* Title */}
        <div className="row justify-content-md-center">
          <div className="col-12 text-center">
            <h2 className="mb-4 display-5 fw-bold">Contact Us</h2>
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
              title="SMOS Store Location"
              className="rounded shadow-sm"
            ></iframe>
          </div>
        </div>

        {/* Form + Info */}
        <div className="row justify-content-md-center">
          {/* Contact Form */}
          <div className="col-12 col-md-6">
            <form
              ref={form}
              onSubmit={sendEmail}
              noValidate
              className={`needs-validation ${validated ? 'was-validated' : ''}`}
            >
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                  minLength="2"
                />
                <div className="invalid-feedback">
                  Please enter your name (at least 2 characters).
                </div>
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>

              {/* Subject */}
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  id="subject"
                  placeholder="How can we help?"
                  required
                  minLength="3"
                />
                <div className="invalid-feedback">
                  Please enter a subject (at least 3 characters).
                </div>
              </div>

              {/* Message */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message here..."
                  required
                  minLength="10"
                ></textarea>
                <div className="invalid-feedback">
                  Message must be at least 10 characters.
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5"
                  style={{ backgroundColor: '#FE980F', borderColor: '#FE980F' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>

              {/* Status Alert */}
              {status && (
                <div
                  className={`alert mt-3 ${status.includes('Thank') || status.includes('success')
                      ? 'alert-success'
                      : 'alert-danger'
                    }`}
                  role="alert"
                >
                  {status}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-6 mt-5 mt-md-0">
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <h5 className="fw-bold">Contact Information</h5>
                <p className="small text-muted mb-2">
                  <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                  SMOS store No. 86A, Street 110,<br />
                  Russian Federation Blvd (110), Phnom Penh
                </p>
                <p className="small text-muted mb-2">
                  <i className="bi bi-telephone-fill text-primary me-2"></i>
                  +855 123 456 789
                </p>
                <p className="small text-muted mb-2">
                  <i className="bi bi-envelope-fill text-primary me-2"></i>
                  info@smosstore.com
                </p>
              </div>

              <div className="col-12 col-md-6 mb-4">
                <h5 className="fw-bold">Follow Us</h5>
                <div className="d-flex gap-3">
                  <a href="https://web.facebook.com/" target="_blank" className="text-dark" aria-label="Facebook"><i className="bi bi-facebook fs-4"></i></a>
                  <a href="https://x.com/" target="_blank" className="text-dark" aria-label="Twitter"><i className="bi bi-twitter fs-4"></i></a>
                  <a href="https://www.instagram.com/" target="_blank" className="text-dark" aria-label="Instagram"><i className="bi bi-instagram fs-4"></i></a>
                  <a href="https://www.linkedin.com/" target="_blank" className="text-dark" aria-label="LinkedIn"><i className="bi bi-linkedin fs-4"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;