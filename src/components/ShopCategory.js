import { useState, useEffect } from "react";
import Fragrances from "../Slider/Fragrance.jpeg";
import Skincares from "../Slider/Skincare.jpeg";
import Candles from "../Slider/Candle.jpg";
import "./ShopCategory.css";

const ShopCategory = () => {

const categories = [
{ id: 1, img: Skincares, label: "Skin Care" },
{ id: 2, img: "https://www.kimirica.shop/cdn/shop/files/Hand_care.png?v=1708602649&width=500", label: "Hand Care" },
{ id: 3, img: "https://www.kimirica.shop/cdn/shop/files/Hair.jpg?v=1708603061&width=500", label: "Hair Care" },
{ id: 4, img: Candles, label: "Candles" },
{ id: 5, img: Fragrances, label: "Fragrance" },
{ id: 6, img: "https://www.kimirica.shop/cdn/shop/files/Bath_5609c1e0-57bb-468e-b43a-aaf0495db491.jpg?v=1708605958&width=500", label: "Bath Care" },
{ id: 7, img: "https://www.kimirica.shop/cdn/shop/files/Body-01.jpg?v=1708605116&width=500", label: "Body Care" },
];

const [currentIndex, setCurrentIndex] = useState(0);
const [slidesPerView, setSlidesPerView] = useState(4);

useEffect(() => {
const updateSlides = () => {
if (window.innerWidth < 480) setSlidesPerView(1);
else if (window.innerWidth < 768) setSlidesPerView(2);
else if (window.innerWidth < 1024) setSlidesPerView(3);
else setSlidesPerView(4);
};
updateSlides();
window.addEventListener("resize", updateSlides);
return () => window.removeEventListener("resize", updateSlides);
}, []);

const maxIndex = Math.max(0, categories.length - slidesPerView);
const totalSlides = Math.ceil(categories.length / slidesPerView);

const goToSlide = (index) => {
if (index < 0) index = 0;
if (index > maxIndex) index = maxIndex;
setCurrentIndex(index);
};

const nextSlide = () => goToSlide(currentIndex + 1);
const prevSlide = () => goToSlide(currentIndex - 1);

const visibleItems = categories.slice(
currentIndex * slidesPerView,
currentIndex * slidesPerView + slidesPerView
);

return (

<section className="shop-slider-wrapper">
<div className="shop-slider-container">
<div className="shop-slider-header">
<span className="slider-badge">✦ curated collections</span>
<h2 className="slider-title">
Shop by <span className="slider-highlight">Category</span>
</h2>
<p className="slider-sub">
Explore our range of premium essentials — each crafted for your ritual.
</p>
</div>

<div className="slider-track-wrapper">
<button className="slider-arrow prev" onClick={prevSlide} disabled={currentIndex === 0}>
‹
</button>

<div className="slider-track">
{visibleItems.map((item, idx) => (
<div className="slider-card" key={item.id}>
<div className="slider-image-wrap">
<img src={item.img} alt={item.label} loading="lazy" />
<div className="slider-overlay">
<span className="slider-shop-btn">Discover</span>
</div>
</div>
<div className="slider-card-footer">
<span className="slider-dot"></span>
<span className="slider-label">{item.label}</span>
</div>
</div>
))}
</div>

<button className="slider-arrow next" onClick={nextSlide} disabled={currentIndex === maxIndex}>
›
</button>
</div>

<div className="slider-dots">
{Array.from({ length: totalSlides }).map((_, idx) => (
<span
key={idx}
className={`slider-dot-indicator ${idx === currentIndex ? "active" : ""}`}
onClick={() => goToSlide(idx)}
/>
))}
</div>
</div>
</section>
);
};

export default ShopCategory;