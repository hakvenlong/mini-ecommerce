import React, { useRef, useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

function Footer() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <>
            <footer className="bg-dark text-white py-5">
                <div className="container">
                    {/* Main Footer */}
                    <div className="row g-4 text-center text-md-start">
                        {/* Shop Links */}
                        <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <h5 className="fw-bold mb-3">Shop</h5>
                            <ul className="list-unstyled small">
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none opacity-75 hover-opacity-100">
                                        Men
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none opacity-75 hover-opacity-100">
                                        Women
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none opacity-75 hover-opacity-100">
                                        Accessories
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <h5 className="fw-bold mb-3">Support</h5>
                            <ul className="list-unstyled small">
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none opacity-75 hover-opacity-100">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none opacity-75 hover-opacity-100">
                                        Shipping Info
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none opacity-75 hover-opacity-100">
                                        Returns
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Connect */}
                        <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
                            <h5 className="fw-bold mb-3">Connect</h5>
                            <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-3">
                                <a
                                    href="#"
                                    className="text-white fs-4 opacity-75 hover-opacity-100"
                                    aria-label="Facebook"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="#"
                                    className="text-white fs-4 opacity-75 hover-opacity-100"
                                    aria-label="Instagram"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="#"
                                    className="text-white fs-4 opacity-75 hover-opacity-100"
                                    aria-label="Twitter"
                                >
                                    Twitter
                                </a>
                            </div>

                            {/* Optional Mini Newsletter */}
                            <p className="small opacity-75 mb-2">Get 10% off your first order!</p>
                            <form className="d-flex flex-column flex-sm-row gap-2">
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="Your email"
                                    aria-label="Email for newsletter"
                                />
                                <button
                                    value="Subscribe"
                                    className="btn btn-primary btn-sm"
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{ backgroundColor: "#5a189a", border: "none" }}
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="my-4 opacity-25" />

                    {/* Copyright */}
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 text-center text-md-start">
                            <p className="mb-0 small opacity-75">
                                © {new Date().getFullYear()} SMOS Store. All rights reserved.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <a href="#" className="text-white small text-decoration-none opacity-75 hover-opacity-100 me-3">
                                Privacy
                            </a>
                            <a href="#" className="text-white small text-decoration-none opacity-75 hover-opacity-100">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to Top Button */}
            <button
                id="scrollUp"
                className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-4 shadow-lg"
                style={{
                    width: "50px",
                    height: "50px",
                    display: "none",
                    zIndex: 1000,
                    backgroundColor: "#5a189a",
                    border: "none",
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                Up Arrow
            </button>

            {/* Optional: Show button on scroll */}
            <style jsx>{`
        window.addEventListener("scroll", () => {
          const btn = document.getElementById("scrollUp");
          if (window.scrollY > 300) {
            btn.style.display = "block";
          } else {
            btn.style.display = "none";
          }
        });
      `}</style>
        </>
    );
}

export default Footer;