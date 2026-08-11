import o3plussunscreen from "../Slider/o3plusessunscreen.png";
import o3plushandmask from "../Slider/o3plushandmask.png";
import o3pluspedicure from "../Slider/o3pluspedicure.png";
import o3plushydrogelmask from "../Slider/o3plushydrogelmask.png";
import "./Featured.css";
import { useNavigate } from "react-router";

const Featured = () => {

const navi = useNavigate();

const naviCollections = () => {
navi("/collections");
};

const featuredItems = [
{ id: 1, img: o3plussunscreen, label: "Muted Pastels", sub: "Sunscreen" },
{ id: 2, img: o3plushandmask, label: "Diva Dreams", sub: "Mascara" },
{ id: 3, img: o3pluspedicure, label: "Luminous Glow", sub: "Foundation" },
{ id: 4, img: o3plushydrogelmask, label: "Velvet Finish", sub: "Compact Powder" },
];

return (

<div className="featured-wrapper">
<div className="featured-header">
<span className="featured-line"></span>
<h2 className="featured-title">Featured In</h2>
<span className="featured-line"></span>
</div>

<div className="featured-scroll-container">
{featuredItems.map((item) => (
<div className="featured-card" key={item.id}>
<div className="featured-card-image-wrapper">
<img src={item.img} alt={item.label} className="featured-card-img" />
<div className="featured-card-overlay">
<button className="featured-card-btn" onClick={naviCollections}>
Discover
</button>
</div>
</div>
<div className="featured-card-content">
<p className="featured-card-sub">{item.sub}</p>
<h3 className="featured-card-label">{item.label}</h3>
</div>
</div>
))}
</div>
</div>

);
};

export default Featured;