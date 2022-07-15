import React from "react";
import { Link } from "react-router-dom";
import Hero1 from "/src/img/hero_1.webp";
import Hero2 from "/src/img/hero_2.webp";
import Hero3 from "/src/img/hero_3.webp";


export const Hero = () => {
	return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active heroImage">
            <img src={Hero1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
                <Link to="/">
				<span className="btn btn-warning" href="#" role="button">
					CTA Link
				</span>
			    </Link>
            </div>
            </div>
            <div className="carousel-item heroImage">
            <img src={Hero2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
                <Link to="/">
				<span className="btn btn-warning" href="#" role="button">
					CTA Link
				</span>
			    </Link>
            </div>
            </div>
            <div className="carousel-item heroImage">
            <img src={Hero3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
                <Link to="/">
				<span className="btn btn-warning" href="#" role="button">
					CTA Link
				</span>
			    </Link>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
	);
};

export default Hero;