

function Footer (){
    return(
        <>
         <footer className="footer bg-dark text-white">
        <div className="container">
            <h2 data-aos="fade-up">Let's Shop Beyond Boundaries</h2>
            <div className="row my-4">
                <div className="col-6 col-sm-6 col-md-3 mb-3">
                    <h5>Service</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Online Help</a></li>
                        <li><a href="#" className="text-white">Contact Us</a></li>
                        <li><a href="#" className="text-white">Order Status</a></li>
                        <li><a href="#" className="text-white">Change Location</a></li>
                        <li><a href="#" className="text-white">FAQ’s</a></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3 mb-3">
                    <h5>Quick Shop</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">T-Shirt</a></li>
                        <li><a href="#" className="text-white">Mens</a></li>
                        <li><a href="#" className="text-white">Womens</a></li>
                        <li><a href="#" className="text-white">Gift Cards</a></li>
                        <li><a href="#" className="text-white">Shoes</a></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3 mb-3">
                    <h5>Policies</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Terms of Use</a></li>
                        <li><a href="#" className="text-white">Privacy Policy</a></li>
                        <li><a href="#" className="text-white">Refund Policy</a></li>
                        <li><a href="#" className="text-white">Billing System</a></li>
                        <li><a href="#" className="text-white">Ticket System</a></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3 mb-3">
                    <h5>About Shopper</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Company Information</a></li>
                        <li><a href="#" className="text-white">Careers</a></li>
                        <li><a href="#" className="text-white">Store Location</a></li>
                        <li><a href="#" className="text-white">Affiliate Program</a></li>
                        <li><a href="#" className="text-white">Copyright</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h5>Stay Updated</h5>
                    <p>Get the latest updates from our site and stay in the loop!</p>
                    <form className="d-flex justify-content-center">
                        <input className="form-control w-50" type="email" placeholder="Your email address"
                            aria-label="Email subscription"/>
                        <button className="btn btn-primary ms-2" type="submit" aria-label="Subscribe">Subscribe</button>
                    </form>
                </div>
            </div>
            <p className="mt-4 text-center">© 2025 SMOS Store. All rights reserved.</p>
        </div>
    </footer>

    <div id="scrollUp" title="Back to Top">
        <i className="bi bi-arrow-up-circle-fill"></i>
    </div>

        </>
    )
}

export default Footer