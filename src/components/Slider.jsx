
function Slider() {
    return (
        <>
            <section id="slider" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="slider-carousel" className="carousel slide" data-bs-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-bs-target="#slider-carousel" data-bs-slide-to="0" className="active"></li>
                                    <li data-bs-target="#slider-carousel" data-bs-slide-to="1"></li>
                                    <li data-bs-target="#slider-carousel" data-bs-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-sm-6 d-flex align-items-center" data-aos="fade-right">
                                                <div>
                                                    <h1><span>You Got This</span></h1>
                                                    <h2>Impossible is Nothing</h2>
                                                    <p>It represented pushing boundaries and striving for the impossible in
                                                        sports and life.</p>
                                                    <button type="button" className="btn btn-primary get mb-3"
                                                        aria-label="Get it now">Get it now</button>
                                                </div>
                                            </div>
                                            <div className="col-sm-6" data-aos="fade-left">
                                                <img src="./images/home/slider1.png" className="girl img-fluid"
                                                    alt="Fashion Model 1" loading="lazy" />
                                                <img src="./images/home/logo-image.png" className="pricing" alt="Pricing Badge"
                                                    loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-sm-6 d-flex align-items-center" data-aos="fade-right">
                                                <div>
                                                    <h1><span>Just do it</span></h1>
                                                    <h2>Greatness is earned, never awarded</h2>
                                                    <p>The harder you push, the more you are pulled. Take the high road and
                                                        go higher. Giving up is simply not an option</p>
                                                    <button type="button" className="btn btn-primary get mb-3"
                                                        aria-label="Get it now">Get it now</button>
                                                </div>
                                            </div>
                                            <div className="col-sm-6" data-aos="fade-left">
                                                <img src="./images/home/slider2.png" className="girl img-fluid"
                                                    alt="Fashion Model 2" loading="lazy" />
                                                <img src="./images/home/logo-image2.png" className="pricing" alt="Pricing Badge"
                                                    loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-sm-6 d-flex align-items-center" data-aos="fade-right">
                                                <div>
                                                    <h1><span>O</span>ur Turn</h1>
                                                    <h2>It signifies a time for action and empowerment, encouraging
                                                        individuals to make their mark on the world.</h2>
                                                    <button type="button" className="btn btn-primary get mb-3"
                                                        aria-label="Get it now">Get it now</button>
                                                </div>
                                            </div>
                                            <div className="col-sm-6" data-aos="fade-left">
                                                <img src="./images/home/slider3.png" className="girl img-fluid"
                                                    alt="Fashion Model 3" loading="lazy" />
                                                <img src="./images/home/logo-image3.png" className="pricing" alt="Pricing Badge"
                                                    loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#slider-carousel" className="carousel-control-prev" data-bs-slide="prev"
                                    aria-label="Previous slide">
                                    <i className="fas fa-angle-left"></i>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a href="#slider-carousel" className="carousel-control-next" data-bs-slide="next"
                                    aria-label="Next slide">
                                    <i className="fas fa-angle-right"></i>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider