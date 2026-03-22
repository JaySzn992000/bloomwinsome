import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoNitiArya from "../Logo/LogoNitiArya.png";
import Heart from "../Images_ToolsSymbols/Heart.jpg";
import User from "../Images_ToolsSymbols/user.jpg";
import Cart from "../Images_ToolsSymbols/Cart.jpg";
import Search from "../Images_ToolsSymbols/search_icon.png";
import Bars from "../Images_ToolsSymbols/Bars.png";
import eyeliner from "../Slider/eyeliner.png"
import compact from "../Slider/compact.png"
import facilnav from "../Slider/facilnav.png"
import lipstick from "../Slider/lipstick.png"
import { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {


const [loggedInUser, setLoggedInUser] = useState(null);
const navigate = useNavigate();
const location = useLocation();

const isDarkNavbarPage = location.pathname !== "/";


const [openMenu, setOpenMenu] = useState({
store: false,
bath: false,
skincare: false,
collections: false,
});

const toggleMenu = (key) => {
setOpenMenu(prev => ({
...prev,
[key]: !prev[key]
}));
};

useEffect(() => {
const storedUser = localStorage.getItem("loggedInUser");
if (storedUser) {
setLoggedInUser(JSON.parse(storedUser));
}
}, [] );

useEffect(() => {
if (location.state && location.state.loggedInUser) {
const user = location.state.loggedInUser;
setLoggedInUser(user);
localStorage.setItem("loggedInUser", JSON.stringify(user));
}
}, [location.state] );

useEffect(() => {
const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
setWishlistCount(storedWishlist.length);
}, [location] );

const navigateEcart = () => {
navigate("/Ecart");
};

const logout = () => {
setLoggedInUser(null);
localStorage.removeItem("loggedInUser");
navigate("/collections");
};


const naviProductPage = () => {
navigate("/collections");
};


const naviToStoreBrand = () => {
navigate("/collections");
};


const naviProductFashWash = () => {
navigate("/face-wash")
}


const profileNavi = useNavigate();

const naviReg = useNavigate();
const naviRegist = () => {
if (!loggedInUser) {
naviReg("/Registeration");
} else if (loggedInUser) {
profileNavi("/Profile");
}

};


const navigateHome = () => {
navigate("/");
};

const orderhistory = () => {
navigate("/ItemHistory");
};

const heartNavi = () => {
navigate("/WishList");
};

const naviGatefacecream = () => {
navigate("/face-cream");
};

const naviGateShirt = () => {
navigate("/sunscreen");
};

const naviGateShampoo = () => {
navigate("/shampoo")
}

const naviGateSerum = () => {
navigate("/hair-serum")
}

const naviGatehairColor = () => {
navigate("/hair-color")
}

const naviGateSunscreen = () => {
navigate("/o3plus")
}

const naviGatelotus = () => {
navigate("/lotus")
}

const naviGatelorealparis = () => {
navigate("/lorealparis");
};

const naviGatePants = () => {
navigate("/biotique");
};

const naviGatearoma = () => {
navigate("/aroma");
};

const navigateStreax = () => {
navigate("/streax")
}

const naviToBathBody = () => {
navigate('/bath-body')
}

const naviToHairCare = () => {
navigate('/hair-care')
}

const naviToSkinCare = () => {
navigate('/skincare')
}

const naviToMakeup = () => {
navigate('/makeup')
}

const naviToPerfume = () => {
navigate('/perfume')
}

const naviToLogin = () => {
navigate('/Registeration')
}

const clickOpen = () => {
const slider = document.querySelector(".navProduct_Slider");

if (slider.classList.contains("close")) {
slider.classList.remove("close");
}
slider.classList.add("active");
};

const CloseTag = () => {
const slider = document.querySelector(".navProduct_Slider");

if (slider.classList.contains("active")) {
slider.classList.remove("active");
}

slider.classList.add("close");
};

const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const handleScroll = () => {
if (window.scrollY > 0) {
setScrolled(true);
} else {
setScrolled(false);
}
};

window.addEventListener("scroll", handleScroll);
return () => {
window.removeEventListener("scroll", handleScroll);
};
}, [] );

const [afterSearch_prodct, setafterSearch_prodct] = useState(false);
const searchProducts = () => {
setafterSearch_prodct((prevState) => !prevState);
};

const [searchQuery, setSearchQuery] = useState("");

const handleKeyDown = (e) => {
if (e.key === "Enter") {
navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
}
};

const [wishlistCount, setWishlistCount] = useState(0);
useEffect(() => {

const updateWishlistCount = () => {
const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
setWishlistCount(storedWishlist.length);
};

updateWishlistCount();

window.addEventListener("storage", updateWishlistCount);

return () => {
window.removeEventListener("storage", updateWishlistCount);
window.addEventListener("wishlistUpdated", updateWishlistCount);
};
}, [] );

const cart = useSelector((state) => state.cart);
const cartCount = cart.length;

const seeAllProducts = () => {
navigate('/collections')
}


return (

<div>

<nav className={`Product_navbar ${scrolled ? "scrolled" : ""} ${isDarkNavbarPage ? "forceDark" : ""}`}>

<div className="fa_barsLogo_Container">

<div>

<img 
onClick={clickOpen}
src={Bars}
className="fa fa-bars fa_bars_nav"
loading="lazy"
alt=""
></img>

</div>

<img onClick={navigateHome}
className="logo_img" src={LogoNitiArya}
loading="lazy"
alt=""
></img>

{/* 1ND NAV */}

<div className="flex_nav_ProfileSection">

<ul className="nav_profileSection">

<img
src={Heart}
onClick={heartNavi}
className="navProfile_img fa fa-heart"
></img>

{wishlistCount > 0 && (
<span className="wishlist-count">{wishlistCount}</span>
)}

<img
onClick={naviRegist}
className="navProfile_img user_right fa fa-user"
src={User}
></img>

<ul>
<li onClick={naviRegist}>
</li>
</ul>

</ul>

<img
src={Cart}
onClick={navigateEcart}
className="fa fa-shopping-cart navProfile_img"
></img>

{cartCount > 0 && <span className="cart-count">{cartCount}</span>}

<ul>
<li className="navProfile_">
</li>
</ul>

<input
type="text"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
onKeyDown={handleKeyDown}
className={`search_products ${
afterSearch_prodct ? "afterSearch_prodct" : ""
}`}
placeholder="Search Our Product"
>
</input>

<img
src={Search}
onClick={searchProducts} className="fa fa-search"
></img>

<i ></i>

<div>

<ul className="navProduct_Slider">

<div>

<div className="flex_div_prfle">

<img
src="https://cdn-icons-png.flaticon.com/128/2997/2997911.png"
onClick={CloseTag}
id="CloseTag"
alt=""
loading="lazy" />

</div>

<div className="flex_div_prfle">

<div className="flex_icon_">
<li onClick={seeAllProducts}>
<a href="">COLLECTIONS</a>
</li>
<img id="iconArrow" src="https://cdn-icons-png.flaticon.com/128/2985/2985179.png"></img>
</div>

<div className="flex_icon_ storeBrand">

<li onClick={() => toggleMenu("store")}>
<a href="javascript:void(0)">STORE BRAND</a>
</li>

<section className={`storeBrand_dropdown ${openMenu.store ? "open" : ""}`}>
<li><a>M.A.C</a></li>
<li><a>Maybelline</a></li>
<li><a>L'Oréal Paris</a></li>
<li><a>Lakmé</a></li>
<li><a>Aroma</a></li>
<li><a>Sugar</a></li>
</section>

</div>

<div className="flex_icon_ storeBrand">

<li onClick={() => toggleMenu("bath")}>
<a href="javascript:void(0)">
BATH & BODY
</a>
</li>

<section className={`storeBrand_dropdown ${openMenu.bath ? "open" : ""}`}>
<li><a>Aloe Vera Gel</a></li>
<li><a>Banana Powder</a></li>
<li><a>Beetroot Powder</a></li>
<li><a>Kasturi Haldi</a></li>
</section>

</div>

<div className="flex_icon_ storeBrand">

<li onClick={() => toggleMenu("skincare")}>
<a href="javascript:void(0)">
SKINCARE
</a>
</li>

</div>

{loggedInUser && (
<div className="flex_icon_">
<li onClick={orderhistory}>
<a href="">Order History</a>
</li>
</div>
)}

{loggedInUser ? (

<div className="sign_out flex_icon_ div_log_signout">
<li onClick={logout}>
<a href="">Log Out</a>
</li>
</div>

) : (

<div className="flex_icon_ div_log_signout">
<li onClick={naviToLogin}>
<a href="">Log ln</a>
</li>
</div>

)}

</div>
</div>

</ul>
</div>
</div>

</div>

{/* 3nd NAV */}

<ul className="nav_ul">

{/* 1ST HOVER */}

<div className="div_ul">

<li className="hover_products">
<a onClick={naviToStoreBrand}  href="">COLLECTIONS</a>

<div className="listing_Products">
<ul>

<li onClick={naviGatelotus}>
<a href="">Lotus Herbals</a>
</li>

<li onClick={naviGateSunscreen}>
<a href="">O3 Plus</a>
</li>
<li onClick={naviGatelorealparis}>
<a href="">Loreal Paris</a>
</li>
<li onClick={naviGatePants}>
<a href="">Biotique</a>
</li>
<li onClick={naviGatearoma}>
<a href="">Aroma</a>
</li>
<li onClick={navigateStreax}>
<a href="">Streax</a>
</li>
</ul>

<ul>
<li onClick={naviProductPage}>
<img src={facilnav}></img>
<br></br>
</li>
</ul>

<ul>
<li onClick={naviProductPage}>
<img src={lipstick}></img>
<br></br>
</li>
</ul>

</div>

</li>

</div>

{/* 2ND HOVER */}

<div className="div_ul">

<li className="hover_products">
<a onClick={naviToBathBody}  href="">BATH & BODY</a>

<div className="listing_Products">

<ul>
<li onClick={naviProductFashWash}>
<a href="">Face Wash</a>
</li>
<li onClick={naviGatefacecream}>
<a href="">Face Cream</a>
</li>
<li onClick={naviGateShirt}>
<a href="">Sunscreen</a>
</li>
<li onClick={naviGateShampoo}>
<a href="">Shampoo</a>
</li>
<li onClick={naviGateSerum}>
<a href="">Hair Serum</a>
</li>
<li onClick={naviGatehairColor}>
<a href="">Hair Color</a>
</li>
</ul>

{/*  */}

<ul>
<li onClick={naviProductPage}>
<img src={compact}></img>
<br></br>
</li>
</ul>

<ul>
<li onClick={naviProductPage}>
<img src={eyeliner}></img>
<br></br>
</li>
</ul>

</div>

</li>

</div>

{/* 3RD HOVER */}

<div className="div_ul">

<li className="hover_products">
<a onClick={naviToSkinCare}  href="">SKIN CARE</a>
</li>
</div>

{/* 4TH HOVER */}

<div className="div_ul">

<li className="hover_products">
<a onClick={naviToHairCare}  href="">HAIR CARE</a>
</li>
</div>

{/*  */}

<ul className="div_ul">
<li onClick={naviToMakeup}>
<a href="">MAKEUP</a>
</li>
</ul>

{/*  */}

<ul className="div_ul">
<li onClick={naviToPerfume}>
<a href="">PERFUME</a>
</li>
</ul>

{/*  */}

</ul>

</nav>

</div>

);

};

export default Navbar;