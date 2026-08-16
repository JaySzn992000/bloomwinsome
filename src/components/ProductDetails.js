import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart } from "../action/action";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import Zoom from "react-medium-image-zoom";
import Slider from "react-slick";
import { connect } from "react-redux";
import "./ProductDetails.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-medium-image-zoom/dist/styles.css";
import winsomeproductdetails from "../Slider/winsomeproductdetails.png";
import axios from "axios";

const ProductDetails = ({ addToCart, cart }) => {

const { category, id } = useParams();
const navigate = useNavigate();
const [arrayStore, setArrayStore] = useState(null);
const [cartCount, setCartCount] = useState(cart.length);
const [mainImage, setMainImage] = useState("");
const [selectedThumb, setSelectedThumb] = useState(null);

useEffect(() => {
fetch(`https://omega-zg6z.onrender.com/products/${id}`)
.then((res) => res.json())
.then((data) => {});
}, [id]);

useEffect(() => {
const fetchProduct = async () => {
try {
const response = await axios.get(
"https://omega-zg6z.onrender.com/fetchProductslist"
);
const data = response.data;
const product = data.find((product) => product.id === parseInt(id));
setArrayStore(product);
setMainImage(product?.file_path || "");
} catch (error) {
console.log("Error fetching product:", error);
}
};
fetchProduct();
}, [id]);

const handleAddToCart = () => {
if (arrayStore) {
const isProductInCart = cart.some((item) => item.id === arrayStore.id);
if (isProductInCart) {
alert("This product is already in your cart.");
} else {
const productToAdd = {
...arrayStore,
price: arrayStore.price,
originalPrice: arrayStore.price,
};
addToCart(productToAdd);
setCartCount(cartCount + 1);
localStorage.setItem(`cart-added-${id}`, JSON.stringify(true));
alert("Product added to cart!");
}
}
};

const handleGoToCart = () => {
navigate("/ECart");
};

const handleThumbnailClick = (imagePath) => {
setMainImage(imagePath);
};

if (!arrayStore) {
return <div className="loading-state">Loading…</div>;
}

const sliderSettings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
autoplay: true,
autoplaySpeed: 4000,
};

const productImages = [
arrayStore.file_path,
arrayStore.file_path1,
arrayStore.file_path2,
arrayStore.file_path3,
].filter(Boolean);

return (

<div className="product-details-page">

<Navbar cartCount={cartCount} />

<div className="product-details-container">

<div className="breadcrumb">
Home <span>›</span> Skincare <span>›</span> Serums <span>›</span>
<span className="current">{arrayStore.name}</span>
</div>

<div className="product-details-grid">

<div className="product-gallery">

<div className="gallery-main">
<Zoom>
<img
className="main-image"
src={mainImage || arrayStore.file_path}
alt={arrayStore.name}
/>
</Zoom>
<div className="zoom-hint">
<i className="fas fa-search-plus"></i>
</div>
</div>

<div className="gallery-thumbs">
{productImages.map((img, idx) => (
<div
key={idx}
className={`thumb ${mainImage === img ? "active" : ""}`}
onClick={() => {
handleThumbnailClick(img);
setSelectedThumb(img);
}}
>
<img src={img} alt={`Thumbnail ${idx + 1}`} />
</div>
))}
</div>
</div>

<div className="mobile-slider">
<Slider {...sliderSettings}>
{productImages.map((img, idx) => (
<div key={idx}>
<img
className="mobile-slide-img"
src={img}
alt={`Slide ${idx + 1}`}
/>
</div>
))}
</Slider>
</div>

<div className="product-info">
<div className="product-category">✦ Brightening Serum</div>
<h1 className="product-name">{arrayStore.name}</h1>
<div className="product-subtitle">
with Hyaluronic Acid + Ferulic Acid
</div>

<div className="product-rating">
<div className="stars">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>
</div>
<span className="review-count">
{arrayStore.review || "4.8"} (1,247 reviews)
</span>
</div>

<div className="product-price">
<span className="current">₹{arrayStore.price}</span>
<span className="original">₹{Math.round(arrayStore.price * 1.4)}</span>
<span className="badge-save">SAVE 38%</span>
</div>

<p className="product-description">
{arrayStore.description ||
"A potent, dermatologist-tested serum that visibly brightens, evens skin tone, and boosts radiance."}
</p>

<div className="product-features">
<span className="feature">
<i className="fas fa-check-circle"></i> 15% Vitamin C
</span>
<span className="feature">
<i className="fas fa-check-circle"></i> Hyaluronic Acid
</span>
<span className="feature">
<i className="fas fa-check-circle"></i> Ferulic Acid
</span>
<span className="feature">
<i className="fas fa-check-circle"></i> Cruelty‑Free
</span>
<span className="feature">
{/* <i className="fas fa-check-circle"></i> 30 ml */}
</span>
</div>

<div className="product-actions">
<button className="btn-primary" onClick={handleAddToCart}>
<i className="fas fa-shopping-bag"></i> Add to Cart
</button>
<button className="btn-secondary" onClick={handleGoToCart}>
<i className="fas fa-arrow-right"></i> Go to Cart
</button>
</div>

<div className="product-trust">
<span className="trust-item">
<i className="fas fa-truck"></i> Free shipping
</span>
<span className="trust-item">
<i className="fas fa-undo-alt"></i> 30‑day return
</span>
<span className="trust-item">
<i className="fas fa-shield-alt"></i> Authentic guarantee
</span>
</div>
</div>
</div>

<div className="product-description-full">
<div className="inner">
<h2>
<i className="fas fa-feather-alt"></i> Description
</h2>
<p>
{arrayStore.description ||
"Our Radiance Boost Vitamin C Serum is a luxurious, high‑performance formulation designed to revive dull, tired skin…"}
</p>
</div>
</div>
</div>

<Header />
</div>

);
};

const mapStateToProps = (state) => ({
cart: state.cart,
});

export default connect(mapStateToProps, { addToCart })(ProductDetails);