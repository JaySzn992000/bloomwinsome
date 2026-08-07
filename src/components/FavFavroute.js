import { useNavigate } from "react-router";
import Navbar from "../headers_footer/navbar";
import BiotiqueFavroute from "../Slider/biotique1.png";
import BiotiqueFavrouteTwo from "../Slider/biotique2.png";
import "./FavFavroute.css";

const FavFavroute = () => {

const navi = useNavigate();

const naviCollections = () => {
navi('/collections');
};

return (

<div className="fav-wrapper">

<Navbar />

<section className="trending-section">

<div className="section-header">
<span className="badge">✦ curated picks</span>
<h2 className="main-title">
Most <span className="highlight">Trending</span>
</h2>
<p className="sub-text">
Everyday essentials loved by our community
</p>
</div>

<div className="product-grid">

<div className="product-card">
<div className="image-wrap">
<img
loading="lazy"
src={BiotiqueFavroute}
alt="Biotique Bio Dew"
className="product-img"
/>
<span className="pill-tag">bestseller</span>
</div>
<div className="card-footer">
<h3 className="product-title">Biotique Bio Dew</h3>
<p className="product-desc">
Fresh &amp; radiant — your daily glow ritual
</p>
<button onClick={naviCollections} className="shop-btn">
Explore
<svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
<line x1="5" y1="12" x2="19" y2="12" />
<polyline points="12 5 19 12 12 19" />
</svg>
</button>
</div>
</div>

<div className="product-card">
<div className="image-wrap">
<img
loading="lazy"
src={BiotiqueFavrouteTwo}
alt="Biotique Bio Bloom"
className="product-img"
/>
<span className="pill-tag new">new</span>
</div>
<div className="card-footer">
<h3 className="product-title">Biotique Bio Bloom</h3>
<p className="product-desc">
Botanical infusion for a luminous, fresh look
</p>
<button onClick={naviCollections} className="shop-btn">
Explore
<svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
<line x1="5" y1="12" x2="19" y2="12" />
<polyline points="12 5 19 12 12 19" />
</svg>
</button>
</div>
</div>
</div>
</section>
</div>

);
};

export default FavFavroute;