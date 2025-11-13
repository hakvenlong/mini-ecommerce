import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

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
                      {/* Text Content */}
                      <div className="col-lg-6 order-2 order-lg-1">
                        <Card className="border-0 bg-transparent">
                          <Card.Body className="p-4 p-lg-5">
                            <h1 className="display-5 fw-bold mb-3">
                              <span style={{ color: "var(--color-primary)" }}>You Got This</span>
                            </h1>
                            <Card.Title as="h3" className="h2 mb-3" style={{ color: "var(--color-primary)" }}>
                              {slide.title}
                            </Card.Title>
                            <Card.Text className="lead mb-4" style={{ color: "var(--color-muted)" }}>
                              {slide.desc}
                            </Card.Text>

                            <Link to={slide.link}>
                              <Button
                                variant="primary"
                                size="lg"
                                className="px-5 py-3 shadow-sm d-inline-flex align-items-center gap-2"
                                style={{
                                  backgroundColor: "var(--color-primary)",
                                  borderColor: "var(--color-primary)",
                                  fontWeight: "600",
                                }}
                              >
                                Buy now
                              </Button>
                            </Link>
                          </Card.Body>
                        </Card>
                      </div>

                      {/* Images */}
                      <div className="col-sm-6 ">
                        <img
                          src={slide.image}
                          className="img-fluid"
                          alt={slide.altImage}
                          loading="lazy"
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