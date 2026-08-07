import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoNitiArya from "../Logo/LogoNitiArya.png";
import HeartIcon from "../Images_ToolsSymbols/Heart.jpg";
import UserIcon from "../Images_ToolsSymbols/user.jpg";
import CartIcon from "../Images_ToolsSymbols/Cart.jpg";
import SearchIcon from "../Images_ToolsSymbols/search_icon.png";
import BarsIcon from "../Images_ToolsSymbols/Bars.png";
import eyeliner from "../Slider/eyeliner.png";
import compact from "../Slider/compact.png";
import facilnav from "../Slider/facilnav.png";
import lipstick from "../Slider/lipstick.png";
import Topnav from "./Topnav";
import "./navbar.css";

const Navbar = () => {

const navigate = useNavigate();
const location = useLocation();

const [loggedInUser, setLoggedInUser] = useState(null);
const [scrolled, setScrolled] = useState(false);
const [searchOpen, setSearchOpen] = useState(false);  
const [searchQuery, setSearchQuery] = useState("");
const [mobileOpen, setMobileOpen] = useState(false);
const [wishlistCount, setWishlistCount] = useState(0);
const [openMenu, setOpenMenu] = useState({
collections: false,
bath: false,
skincare: false,
});

const cart = useSelector((state) => state.cart);
const cartCount = cart?.length || 0;
const isDarkNavbarPage = location.pathname !== "/";

useEffect(() => {
const stored = localStorage.getItem("loggedInUser");
if (stored) setLoggedInUser(JSON.parse(stored));
}, []);

useEffect(() => {
if (location.state?.loggedInUser) {
const user = location.state.loggedInUser;
setLoggedInUser(user);
localStorage.setItem("loggedInUser", JSON.stringify(user));
}
}, [location.state]);

useEffect(() => {
const handleScroll = () => setScrolled(window.scrollY > 0);
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
document.body.style.overflow = mobileOpen ? "hidden" : "";
return () => { document.body.style.overflow = ""; };
}, [mobileOpen]);

useEffect(() => {
const updateWishlist = () => {
const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
setWishlistCount(stored.length);
};
updateWishlist();
window.addEventListener("storage", updateWishlist);
window.addEventListener("wishlistUpdated", updateWishlist);
return () => {
window.removeEventListener("storage", updateWishlist);
window.removeEventListener("wishlistUpdated", updateWishlist);
};
}, []);

const navigateHome = () => navigate("/");
const navigateEcart = () => navigate("/Ecart");
const heartNavi = () => navigate("/WishList");
const orderhistory = () => navigate("/ItemHistory");
const seeAllProducts = () => navigate("/collections");
const naviToLogin = () => navigate("/Registeration");

const naviRegist = () => {
if (!loggedInUser) navigate("/Registeration");
else navigate("/Profile");
};

const logout = () => {
setLoggedInUser(null);
localStorage.removeItem("loggedInUser");
navigate("/collections");
};

const naviToBathBody = () => navigate("/bath-body");
const naviToSkinCare = () => navigate("/skincare");
const naviToHairCare = () => navigate("/hair-care");
const naviToMakeup = () => navigate("/makeup");
const naviToPerfume = () => navigate("/perfume");

const naviProductFashWash = () => navigate("/face-wash");
const naviGatefacecream = () => navigate("/face-cream");
const naviGateShirt = () => navigate("/sunscreen");
const naviGateShampoo = () => navigate("/shampoo");
const naviGateSerum = () => navigate("/hair-serum");
const naviGatehairColor = () => navigate("/hair-color");
const naviGateSunscreen = () => navigate("/o3plus");
const naviGatelotus = () => navigate("/lotus");
const naviGatelorealparis = () => navigate("/lorealparis");
const naviGatePants = () => navigate("/biotique");
const naviGatearoma = () => navigate("/aroma");
const navigateStreax = () => navigate("/streax");

const handleSearchKeyDown = (e) => {
if (e.key === "Enter") {
if (searchQuery.trim()) {
navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
setSearchOpen(false);
setSearchQuery("");
}
}
};

const handleSearchSubmit = () => {
if (searchQuery.trim()) {
navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
setSearchOpen(false);
setSearchQuery("");
}
};

const toggleMenu = (key) => {
setOpenMenu((prev) => ({ ...prev, [key]: !prev[key] }));
};

const toggleMobile = () => setMobileOpen(!mobileOpen);
const toggleSearch = () => setSearchOpen(!searchOpen);

return (

<div>

<nav
className={`winsome-navbar ${scrolled ? "scrolled" : ""} ${
isDarkNavbarPage ? "forceDark" : ""
}`}>

<div className="navbar-left">
<button className="navbar-bars" onClick={toggleMobile} aria-label="Menu">
<img src={BarsIcon} alt="menu" />
</button>
<img
src={LogoNitiArya}
className="navbar-logo"
onClick={navigateHome}
alt="Niti Arya"/>
</div>

<ul className="navbar-center">
<li className="nav-item">
<button className="nav-link" onClick={seeAllProducts}>
Collections
</button>
<div className="mega-dropdown">
<div className="mega-column">
<span className="mega-title">Bath & Body</span>
<a onClick={naviProductFashWash}>Face Wash</a>
<a onClick={naviGatefacecream}>Face Cream</a>
<a onClick={naviGateShirt}>Sunscreen</a>
<a onClick={naviGateShampoo}>Shampoo</a>
<a onClick={naviGateSerum}>Hair Serum</a>
<a onClick={naviGatehairColor}>Hair Color</a>
</div>
<div className="mega-column">
<span className="mega-title">Skin Care</span>
{/* <a onClick={naviToSkinCare}>All Skin Care</a> */}
<a onClick={naviGateSunscreen}>O3 Plus</a>
<a onClick={naviGatelotus}>Lotus Herbals</a>
</div>
<div className="mega-column">
<span className="mega-title">Hair Care</span>
{/* <a onClick={naviToHairCare}>All Hair Care</a> */}
<a onClick={naviGatelorealparis}>L'Oréal Paris</a>
<a onClick={navigateStreax}>Streax</a>
</div>
<div className="mega-column">
<span className="mega-title">Makeup & Perfume</span>
<a onClick={naviToMakeup}>Makeup</a>
<a onClick={naviToPerfume}>Perfume</a>
<a onClick={naviGatePants}>Biotique</a>
<a onClick={naviGatearoma}>Aroma</a>
</div>
<div className="mega-column featured">
<span className="mega-title">Featured</span>
<img src={facilnav} className="mega-img" alt="face" />
<img src={lipstick} className="mega-img" alt="lipstick" />
</div>
</div>
</li>

<li className="nav-item">
<button className="nav-link" onClick={naviToBathBody}>
Bath & Body
</button>
<div className="mega-dropdown bath-dropdown">
<div className="mega-column">
<span className="mega-title">Shop by Category</span>
<a onClick={naviProductFashWash}>Face Wash</a>
<a onClick={naviGatefacecream}>Face Cream</a>
<a onClick={naviGateShirt}>Sunscreen</a>
<a onClick={naviGateShampoo}>Shampoo</a>
<a onClick={naviGateSerum}>Hair Serum</a>
<a onClick={naviGatehairColor}>Hair Color</a>
</div>
<div className="mega-column">
<span className="mega-title">Essentials</span>
<img src={compact} className="mega-img" alt="compact" />
<img src={eyeliner} className="mega-img" alt="eyeliner" />
</div>
<div className="mega-column">
<span className="mega-title">New Arrivals</span>
<img src={facilnav} className="mega-img" alt="face" />
<img src={lipstick} className="mega-img" alt="lipstick" />
</div>
</div>
</li>

<li className="nav-item">
<button className="nav-link" onClick={naviToSkinCare}>
Skin Care
</button>
</li>
<li className="nav-item">
<button className="nav-link" onClick={naviToHairCare}>
Hair Care
</button>
</li>
<li className="nav-item">
<button className="nav-link" onClick={naviToMakeup}>
Makeup
</button>
</li>
<li className="nav-item">
<button className="nav-link" onClick={naviToPerfume}>
Perfume
</button>
</li>
</ul>

<div className="navbar-right">
<div className="search-wrapper">
<button className="search-btn" onClick={toggleSearch} aria-label="Search">
<img src={SearchIcon} alt="search" />
</button>
</div>

<div className="icon-wrapper">
<img src={HeartIcon} className="nav-icon" onClick={heartNavi} alt="wishlist" />
{wishlistCount > 0 && <span className="heart_badge">{wishlistCount}</span>}
</div>

{loggedInUser ? (
<div className="icon-wrapper auth-group">
<img src={UserIcon} className="nav-icon" onClick={naviRegist} alt="profile" />
<button className="auth-link" onClick={logout}>Logout</button>
</div>
) : (
<>
<img src={UserIcon} className="nav-icon" onClick={naviRegist} alt="login" />
{/* <button className="auth-link" onClick={naviToLogin}>Log In</button> */}
</>
)}

<div className="icon-wrapper">
<img src={CartIcon} className="nav-icon nav-icon_cart" onClick={navigateEcart} alt="cart" />
{cartCount > 0 && <span className="wishlist_badge">{cartCount}</span>}
</div>

<span className="nav-divider" />

{loggedInUser && (
<button className="auth-link" onClick={orderhistory} style={{ fontSize: "0.6rem" }}>
Orders
</button>
)}
</div>
</nav>

<div className={`search-overlay ${searchOpen ? "open" : ""}`}>
<div className="search-overlay-content">
<button
className="search-overlay-close"
onClick={() => {
setSearchOpen(false);
setSearchQuery("");
}}
aria-label="Close search"
>
✕
</button>
<input
type="text"
className="search-overlay-input"
placeholder="Search for products, brands, categories…"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
onKeyDown={handleSearchKeyDown}
autoFocus={searchOpen}
/>
<button className="search-overlay-submit" onClick={handleSearchSubmit}>
Search
</button>
</div>
</div>

<div className={`mobile-overlay ${mobileOpen ? "open" : ""}`} onClick={toggleMobile} />

<div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
<button className="mobile-close" onClick={toggleMobile}>
<i className="fas fa-times" />
</button>

<div className="mm-brand">
<img src={LogoNitiArya} alt="Niti Arya" className="mm-logo" />
</div>

<div className="mm-section">
<button
className={`mm-link ${openMenu.collections ? "open" : ""}`}
onClick={() => toggleMenu("collections")}
>
Collections <span className="mm-arrow"><i className="fas fa-chevron-right" /></span>
</button>
<div className={`mm-sub ${openMenu.collections ? "open" : ""}`}>
<a onClick={naviToBathBody}>Bath & Body</a>
<a onClick={naviToSkinCare}>Skin Care</a>
<a onClick={naviToHairCare}>Hair Care</a>
<a onClick={naviToMakeup}>Makeup</a>
<a onClick={naviToPerfume}>Perfume</a>
</div>
</div>

<div className="mm-section">
<button
className={`mm-link ${openMenu.bath ? "open" : ""}`}
onClick={() => toggleMenu("bath")}
>
Bath & Body <span className="mm-arrow"><i className="fas fa-chevron-right" /></span>
</button>
<div className={`mm-sub ${openMenu.bath ? "open" : ""}`}>
<a onClick={naviProductFashWash}>Face Wash</a>
<a onClick={naviGatefacecream}>Face Cream</a>
<a onClick={naviGateShirt}>Sunscreen</a>
<a onClick={naviGateShampoo}>Shampoo</a>
<a onClick={naviGateSerum}>Hair Serum</a>
<a onClick={naviGatehairColor}>Hair Color</a>
</div>
</div>

<div className="mm-section">
<button className="mm-link" onClick={naviToSkinCare}>Skin Care</button>
</div>
<div className="mm-section">
<button className="mm-link" onClick={naviToHairCare}>Hair Care</button>
</div>
<div className="mm-section">
<button className="mm-link" onClick={naviToMakeup}>Makeup</button>
</div>
<div className="mm-section">
<button className="mm-link" onClick={naviToPerfume}>Perfume</button>
</div>

<div className="mm-section">
<span className="mm-link" style={{ pointerEvents: "none", opacity: 0.6 }}>
Brands
</span>
<div className="mm-sub" style={{ maxHeight: "200px", paddingLeft: "1rem" }}>
<a onClick={naviGatelotus}>Lotus Herbals</a>
<a onClick={naviGateSunscreen}>O3 Plus</a>
<a onClick={naviGatelorealparis}>L'Oréal Paris</a>
<a onClick={naviGatePants}>Biotique</a>
<a onClick={naviGatearoma}>Aroma</a>
<a onClick={navigateStreax}>Streax</a>
</div>
</div>

<div className="mm-auth">
{loggedInUser ? (
<>
<button className="mm-link" onClick={() => { toggleMobile(); naviRegist(); }}>
My Profile
</button>
<button className="mm-link" onClick={() => { toggleMobile(); orderhistory(); }}>
Order History
</button>
<button className="mm-link" onClick={() => { toggleMobile(); logout(); }}>
Logout
</button>
</>
) : (
<button className="mm-link" onClick={() => { toggleMobile(); naviToLogin(); }}>
Log In / Register
</button>
)}
</div>
</div>
</div>

);
};

export default Navbar;