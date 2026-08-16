import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../headers_footer/navbar";
import Filters from "../components/Filters";
import { connect } from "react-redux";
import { addToCart } from "../action/action";
import Header from "../headers_footer/header";
import axios from "axios";
import FAqQuestions from "../components/FAqQuestions";

const Shampoofetch = ({ addToCart, filter }) => {

const [filteredProducts, setFilteredProducts] = useState([]);
const [allProducts, setAllProducts] = useState([]);
const [wishlistCount, setWishlistCount] = useState(0);
const [wishlistStatus, setWishlistStatus] = useState({});
const [cartCount, setCartCount] = useState(0);
const [arrayStore, setArrayStore] = useState([]);
const [products, setProducts] = useState([]);

useEffect(() => {
axios
.get("/fetchProductslist")
.then((res) => setProducts(res.data))
.catch((err) => console.error(err));
}, []);

const handleAddToCart = (product) => {
if (!product) return;
const isProductInCart = JSON.parse(localStorage.getItem("cart"))?.some(
(item) => item.id === product.id
);
if (isProductInCart) {
alert("This product is already in your cart.");
} else {
addToCart(product);
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
localStorage.setItem(`cart-added-${product.id}`, JSON.stringify(true));
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

const location = useLocation();
const query = new URLSearchParams(location.search).get("search");

useEffect(() => {
if (query) {
axios
.get("https://omega-zg6z.onrender.com/fetchshampoo", {
params: { search: query },
})
.then((response) => setAllProducts(response.data))
.catch((error) => console.error("Error fetching products:", error));
} else {
axios
.get("https://omega-zg6z.onrender.com/fetchshampoo")
.then((response) => setAllProducts(response.data))
.catch((error) => console.error("Error fetching all products:", error));
}
}, [query]);

useEffect(() => {
if (!allProducts.length) return;
let updatedProducts = [...allProducts];
if (filter?.selectedNames?.length > 0) {
updatedProducts = updatedProducts.filter((product) =>
filter.selectedNames.some((name) =>
product.img?.toLowerCase().includes(name.toLowerCase())
)
);
}
const min = filter?.minPrice ?? 0;
const max = filter?.maxPrice ?? 100000;
updatedProducts = updatedProducts.filter(
(product) => Number(product.price) >= min && Number(product.price) <= max
);
setFilteredProducts(updatedProducts);
}, [filter, allProducts]);

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
const updatedStatus = {
...wishlistStatus,
[product.id]: !wishlistStatus[product.id],
};
setWishlistStatus(updatedStatus);
setWishlistCount(wishlist.length);
localStorage.setItem("wishlistStatus", JSON.stringify(updatedStatus));
};

const slugify = (text) => {
return text
.toLowerCase()
.replace(/[^a-z0-9]+/g, "-")
.replace(/(^-|-$)/g, "");
};

return (

<div className="premium-wrapper">

<div id="sticky_products_height">
<div className="sticky-wrapper">
<section>
<div>
<div className="flex_productlist">
{filteredProducts.map((productlist) => (
<div key={productlist.id} className="produclist_divContainer">

<i
onClick={() => sendToWishlist(productlist)}
className={`fa-regular fa-heart fa-heart_products ${
wishlistStatus[productlist.id] ? "fa-solid wishlist-active" : ""
}`}
></i>

<Link to={`/products/${slugify(productlist.name)}/${productlist.id}`}>
<img
src={productlist.file_path}
alt={productlist.name}
loading="lazy"/>
</Link>

<div className="padding_contain">
<div className="flex_inr">
<Link to={`/products/${slugify(productlist.name)}/${productlist.id}`}>
<li>{productlist.name}</li>
</Link>
<div className="price_div">
<i className="fa fa-solid fa-indian-rupee-sign"></i>
<span className="fa_Price">{productlist.price}</span>
</div>
<div className="review_Center">
<span className="fa_Review">{productlist.review}</span>
<span className="review-stars">
{"".repeat(Math.round(productlist.review || 0))}
{"".repeat(5 - Math.round(productlist.review || 0))}
</span>
</div>
</div>
<button
className="add_crt"
onClick={() => handleAddToCart(productlist)}
>
</button>
</div>
</div>
))}
</div>
</div>
</section>
</div>
</div>

<FAqQuestions />

</div>
);
};

export default connect(null, { addToCart })(Shampoofetch);