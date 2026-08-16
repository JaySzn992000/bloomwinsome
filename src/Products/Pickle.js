import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import Navbar from "../headers_footer/navbar";
import axios from "axios";
import { connect } from "react-redux";
import { addToCart } from "../action/action";
import "./Pickle.css";

const Pickle = ({ showFilters = true, limit, addToCart }) => {
const [allProducts, setAllProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
const location = useLocation();
const query = new URLSearchParams(location.search).get("search");

useEffect(() => {
axios
.get("https://omega-zg6z.onrender.com/fetchProductslist")
.then((response) => {
setAllProducts(response.data);
setFilteredProducts(response.data);
})
.catch((error) => {
console.error("Error fetching products:", error);
});
}, []);

useEffect(() => {
if (query) {
axios
.get("https://omega-zg6z.onrender.com/fetchProductslist", {
params: { search: query },
})
.then((response) => {
setAllProducts(response.data);
setFilteredProducts(response.data);
})
.catch((error) => {
console.error("Error with search query:", error);
});
} else {
setFilteredProducts(allProducts);
}
}, [query, allProducts]);

const handleFilterUpdate = (filteredData) => {
setFilteredProducts(filteredData);
};

const limitedProducts = filteredProducts.slice(0, 6);

const [wishlistStatus, setWishlistStatus] = useState({});
const [wishlistCount, setWishlistCount] = useState(0);
const [cartCount, setCartCount] = useState(0);
const [cartItems, setCartItems] = useState([]);

useEffect(() => {
const cart = JSON.parse(localStorage.getItem("cart")) || [];
setCartCount(cart.length);
}, []);

const sendToWishlist = (product) => {
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const productIndex = wishlist.findIndex((item) => item.id === product.id);

if (productIndex === -1) {
wishlist.push(product);
} else {
wishlist.splice(productIndex, 1);
}

localStorage.setItem("wishlist", JSON.stringify(wishlist));
window.dispatchEvent(new Event("storage"));

const updatedWishlistStatus = {
...wishlistStatus,
[product.id]: !wishlistStatus[product.id],
};
setWishlistStatus(updatedWishlistStatus);
localStorage.setItem("wishlistStatus", JSON.stringify(updatedWishlistStatus));
setWishlistCount(wishlist.length);
};

const handleAddToCart = (product) => {
if (!product) return;

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const isProductInCart = cart.some(
(item) => String(item.id) === String(product.id)
);

if (isProductInCart) {
alert("This product is already in your cart.");
} else {
addToCart(product);

const updatedCart = [...cart, product];
localStorage.setItem("cart", JSON.stringify(updatedCart));

setCartCount(updatedCart.length);
alert("Product added to cart!");
}
};

useEffect(() => {
const storedWishlistStatus =
JSON.parse(localStorage.getItem("wishlistStatus")) || {};
setWishlistStatus(storedWishlistStatus);

const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
setWishlistCount(wishlist.length);
}, []);

return (
<div className="pickle-root">
{showFilters && <Navbar />}
{showFilters && (
<Filters allProducts={allProducts} onFilterUpdate={handleFilterUpdate} />
)}

<div className="pickle-wrapper">
<div className="pickle-container">
<div className="pickle-inner">
<section>
<div className="pickle-grid">
{limitedProducts.map((product) => (
<div key={product.id} className="pickle-card">

<i
onClick={() => sendToWishlist(product)}
className={`fa-regular fa-heart pickle-heart ${
wishlistStatus[product.id] ? "fa-solid pickle-heart-active" : ""
}`}
></i>

<Link to={`/product/${product.id}`}>
<img
src={product.file_path}
alt={product.name}
loading="lazy"
className="pickle-img"
/>
</Link>

<div className="pickle-content">
<div className="pickle-details">
<Link to={`/product/${product.id}`}>
<li className="pickle-title">{product.name}</li>
</Link>
<div className="pickle-price">
<i className="fa-solid fa-indian-rupee-sign pickle-rupee"></i>
<span className="pickle-amount">{product.price}</span>
</div>
<div className="pickle-rating">
<span className="pickle-stars">
{"★".repeat(Math.round(product.review || 0))}
{"☆".repeat(5 - Math.round(product.review || 0))}
</span>
<span className="pickle-review-count">{product.review}</span>
</div>
</div>
<button
className="pickle-cart-btn"
onClick={() => handleAddToCart(product)}
>
<span>ADD TO CART</span>
</button>
</div>
</div>
))}
</div>
</section>
</div>
</div>
</div>
</div>

);
};

export default connect(null, { addToCart })(Pickle);