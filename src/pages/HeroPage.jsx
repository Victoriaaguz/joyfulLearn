
import React from "react"
import { Link } from "react-router-dom";

const images = [
    "./img/BuildingBlocks.jpg", 
    "./img/circleTime.jpg",
    "./img/Cutting.jpg",
    "./img/freePlay.jpg",
    "./img/paintingHouse.jpg",
    "./img/Sharing.jpg",
    "./img/colorBox.jpeg",
    "./img/CreatingArt.jpg",
    "./img/In_class.JPEG"

];

export default function HeroPage() {
    return(
      <div>
      {/* Hero Section with Image */}
      <section id="heroSection" className="hero-section">
          <div className="hero-section-content-box">
              <p className="section-title"></p>
              <h1 className="hero-section-title">
                  <span className="hero-section-title-color">JoyFullLearning </span>
              </h1>
              <p className="hero-section-description">
                  Supporting each child's natural love of learning and play. 
              </p>
              <button className="btn btn-primary">SCHEDULE A TOUR</button>
          </div>
      </section>
      <section className="gallery-section">
        <p className="gallery-subtitle">
            <em> We offer a play-based, progressive, part-time program for children ages 2.5 to 5 years old.</em>
        </p>
        <div className="photo-grid">
            {images.map((src,index)=> (
                <img key={index} src={src} alt={`Gallery ${index + 1}`} className="photo-item"/>
            ))}
        </div>
      </section>
      <section className="welcome-section">
        <div className="welcome-content">
            <h1 className="welcome-title">Welcome! </h1>
            <p className="welcome-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor fuga laudantium 
                <br/>
                <br/>
                 Cumque praesentium omnis non culpa, est sunt rem, itaque quisquam veritatis iusto minus 
            </p>
        </div>
        <div className="welcome-buttons">
            <Link to="./Teaching" className="btn btn-primary">Philosophy</Link>
            <Link to="/Staff" className="btn btn-primary">Meet The Staff</Link>
            <Link to="/enrollment" className="btn btn-primary">Enrollment</Link>

        </div>
      </section>
      <section className="testimonial-section">
        <img 
        src="./img/TheCrew.jpeg"
        alt="Kids crew"
        className="testimonial-image"
        />
        <blockquote className="testimonial-quote">
            <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor fuga laudantium Cumque praesentium omnis non culpa, est sunt rem, itaque quisquam veritatis iusto minus "
            </p>
            <footer className="testimonial-author">PARENT</footer>
        </blockquote>
      </section>
  </div>
    );
}
