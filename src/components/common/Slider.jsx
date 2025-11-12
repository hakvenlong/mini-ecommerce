import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';   // <-- added
import 'bootstrap/dist/css/bootstrap.min.css';

const sliderDesc = [
  {
    title: "Impossible is Nothing",
    desc: "It represented pushing boundaries and striving for the impossible in sports and life.",
    image: "https://cdn.runrepeat.com/storage/gallery/product_content/39602/adidas-campus-00-s-forefoot-stack-2-21229473-main.jpg",
    subImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    altImage: "Adidas Shoes",
    altSubImage: "Adidas Logo",
  },
  {
    title: "Impossible is Nothing",
    desc: "It represented pushing boundaries and striving for the impossible in sports and life.",
    image: "https://cdn.runrepeat.com/storage/gallery/product_content/39602/adidas-campus-00-s-forefoot-stack-2-21229473-main.jpg",
    subImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    altImage: "Adidas Shoes",
    altSubImage: "Adidas Logo",
  }
];

function Slider() {
  return (
    <section id="slider" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div id="slider-carousel" className="carousel slide" data-bs-ride="carousel">
              {/* ---- Indicators (dynamic) ---- */}
              <ol className="carousel-indicators">
                {sliderDesc.map((_, i) => (
                  <li
                    key={i}
                    data-bs-target="#slider-carousel"
                    data-bs-slide-to={i}
                    className={i === 0 ? "active" : ""}
                  />
                ))}
              </ol>

              {/* ---- Slides ---- */}
              <div className="carousel-inner">
                {sliderDesc.map((slide, i) => (
                  <div
                    key={i}
                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                  >
                    <div className="row align-items-center">
                      {/* Text */}
                      <div className="col-sm-6" data-aos="fade-right">
                        <Card className="border-0 bg-transparent">
                          <Card.Body className="p-4">
                            <Card.Title as="h2" className="display-5 fw-bold">
                              <span className="text-primary">You Got This</span>
                            </Card.Title>
                            <Card.Title as="h3" className="mt-3">{slide.title}</Card.Title>
                            <Card.Text className="lead">{slide.desc}</Card.Text>

                            {/* Real button (swap with Placeholder.Button if you need a skeleton) */}
                            <Button variant="primary" size="lg" className="mt-3">
                              Get it now
                            </Button>

                            {/* Example of a placeholder button (uncomment if needed) */}
                            {/* <Placeholder.Button variant="primary" size="lg" className="mt-3">
                              Get it now
                            </Placeholder.Button> */}
                          </Card.Body>
                        </Card>
                      </div>

                      {/* Images */}
                      <div className="col-sm-6 position-relative" data-aos="fade-left">
                        <img
                          src={slide.image}
                          className="img-fluid girl"
                          alt={slide.altImage}
                          loading="lazy"
                          style={{
                            borderRadius: "15px",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                          }}
                        />
                        <img
                          src={slide.subImage}
                          className="position-absolute bottom-0 end-0 mb-4 me-4 pricing"
                          alt={slide.altSubImage}
                          style={{ width: "80px", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.2))" }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ---- Controls ---- */}
              <a
                href="#slider-carousel"
                className="carousel-control-prev"
                data-bs-slide="prev"
                aria-label="Previous slide"
              >
                <i className="fas fa-angle-left fa-2x text-dark" />
                <span className="visually-hidden">Previous</span>
              </a>
              <a
                href="#slider-carousel"
                className="carousel-control-next"
                data-bs-slide="next"
                aria-label="Next slide"
              >
                <i className="fas fa-angle-right fa-2x text-dark" />
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;