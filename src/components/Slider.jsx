
const sliderDesc = [
    {
        title:"Impossible is Nothing",
        desc: "It represented pushing boundaries and striving for the impossible in sports and life.",
        image: "https://cdn.runrepeat.com/storage/gallery/product_content/39602/adidas-campus-00-s-forefoot-stack-2-21229473-main.jpg",
        subImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        altImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        altSubImage: "shoes",
    },
    {
        title:"Impossible is Nothing",
        desc: "It represented pushing boundaries and striving for the impossible in sports and life.",
        image: "https://cdn.runrepeat.com/storage/gallery/product_content/39602/adidas-campus-00-s-forefoot-stack-2-21229473-main.jpg",
        subImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        altImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        altSubImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    },
    {
        title:"Impossible is Nothing",
        desc: "It represented pushing boundaries and striving for the impossible in sports and life.",
        image: "https://cdn.runrepeat.com/storage/gallery/product_content/39602/adidas-campus-00-s-forefoot-stack-2-21229473-main.jpg",
        subImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        altImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        altSubImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    }
]


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
                                    {sliderDesc.map((sliderDesc) =>(
                                         <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-sm-6 d-flex align-items-center" data-aos="fade-right">
                                                <div>
                                                    <h1><span>You Got This</span></h1>
                                                    <h2>{sliderDesc.title}</h2>
                                                    <p>{sliderDesc.desc}</p>
                                                    <a type="button" className="btn btn-primary get mb-3"
                                                        aria-label="Get it now">Get it now</a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6" data-aos="fade-left">
                                                <img src={sliderDesc.image} className="girl img-fluid"
                                                    alt={sliderDesc.altImage} loading="lazy" />
                                                <img src={sliderDesc.subImage} className="pricing" alt={sliderDesc.altSubImage}
                                                    loading="lazy" />
                                            </div>      
                                        </div>
                                    </div> 
                                    ))}
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