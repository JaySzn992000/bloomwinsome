import { useNavigate } from "react-router";
import Navbar from "../headers_footer/navbar";
import AboutHmImg from "../Slider/AboutHm.jpg";
import "./AboutHm.css";

const AboutHm = () => {
  const navi = useNavigate();

  const naviCollection = () => {
    navi("/collections");
  };

  return (
    <div>
      <Navbar />

      <main className="about-premium">
        <div className="about-premium-container">
          {/* बायाँ भाग – छवि */}
          <div className="about-premium-image-wrapper">
            <img
              loading="lazy"
              className="about-premium-img"
              alt="Premium beauty products"
              src={AboutHmImg}
            />
            <div className="about-premium-img-overlay"></div>
          </div>

          {/* दायाँ भाग – सामग्री */}
          <div className="about-premium-content">
            <div className="about-premium-tag">Welcome to</div>
            <h1 className="about-premium-title">Winsom Bloom</h1>

            {/* शानदार विभाजक रेखा – गोल्ड */}
            <div className="about-premium-divider"></div>

            <p className="about-premium-description">
              Discover premium beauty and personal care products from trusted
              brands like Lotus Herbals, O3 Plus, L'Oréal Paris, Biotique,
              Aroma, and Streax. At Winsom Blooms, we bring you a curated
              collection of skincare, haircare, makeup, and fragrance
              essentials designed to enhance your natural beauty and boost
              your confidence every day.
            </p>

            <button className="about-premium-btn" onClick={naviCollection}>
              <span className="about-premium-btn-text">Explore Collection</span>
              <span className="about-premium-btn-icon">→</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutHm;