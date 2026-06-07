import { useNavigate } from "react-router";
import LogoNitiArya from "../Logo/LogoNitiArya.png";
import { useState } from "react";
import "./header.css";

const Header = () => {

const naviHome = useNavigate();

const navigateHome = () => {
naviHome("/");
};

const NavitoProductlist = useNavigate();

const naviToCollection = () => {
NavitoProductlist('/collections')
}

const naviAbout = useNavigate()
const naviToAboutus = () => {
naviAbout('/aboutus')
}

const naviContact = useNavigate();
const naviToContactus = () => {
naviContact('/contactus')
}

const privacyNavi = useNavigate();
const privacyNavigate = () => {
privacyNavi('/privacy-policy')
}

const returnPolicy = useNavigate();
const returnPolicyNavi = () => {
returnPolicy('/return-policy')
}

const termsAndCOndition = useNavigate();
const termsAndCOnditionNavi = () => {
termsAndCOndition('/terms-conditions')
}

const MyFaqs = useNavigate()
const Faqs = () => {
MyFaqs('/FAQs')
}

const [email, setEmail] = useState("");
const [subscribed, setSubscribed] = useState(false);
const [error, setError] = useState("");

const handleSubscribe = () => {

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(emailPattern.test(email)){
setSubscribed(true);
setError("");
}
else{
setSubscribed(false);
setError("Please enter a valid email");
}

};

return (

<div>

<header className="normal_header">

<p>EXCLUSIVELY ON WINSOMEBLOOM.SHOP</p>

<div className="exclusive_flx">

<div>
<img src="https://www.kimirica.shop/cdn/shop/files/Home_Page_Footer_Logo-01.svg?v=1676481515&width=184"></img>
<label>EXCLUSIVE OFFERS</label>
</div>

<div>
<img src="https://www.kimirica.shop/cdn/shop/files/Home_Page_Footer_Logo-02.svg?v=1676481516&width=184"></img>
<label>FREE SAMPLES</label>
</div>

<div>
<img src="https://www.kimirica.shop/cdn/shop/files/Home_Page_Footer_Logo-03.svg?v=1676481515&width=184"></img>
<label>FREE SHIPPING</label>
</div>

<div>
<img src="https://www.kimirica.shop/cdn/shop/files/Home_Page_Footer_Logo-04_cc785fe0-e358-421e-9047-8446eee2910f.svg?v=1676481520&width=184"></img>
<label>PERSONALIZED GIFTING</label>
</div>

</div>

<div className="div_header">

<div className="header_dv">

<img className="nMheader_dvLogo"
onClick={navigateHome}
loading="lazy"
src={LogoNitiArya} alt="logo"></img>

<h3>NEWSLETTER</h3>

<p>Sign up to our newsletter to receive <br></br>
exclusive offers.</p>

<input
className="newsletter"
placeholder="E-mail"
value={email}
onChange={(e) => setEmail(e.target.value)}
></input>

<br></br>

<button onClick={handleSubscribe}>
<span>SUBSCRIBE</span>
</button>

{subscribed && (
<p style={{color:"#ffff", marginTop:"10px"}}>
You have subscribed successfully
</p>
)}

{error && (
<p style={{color:"#fff", marginTop:"10px"}}>
{error}
</p>
)}

</div>

<ul>
<h4>ABOUT KIMIRICA</h4>
<li onClick={naviToCollection}><a>Shop our Products</a></li>
<li onClick={naviToAboutus}><a>About us</a></li>
<li onClick={naviToContactus}><a>Contact us</a></li>
<li onClick={Faqs}><a>FAQs</a></li>
</ul>

<ul>
<h4>CUSTOMER SERVICES</h4>
<li onClick={privacyNavigate}><a>Privacy Policy</a></li>
<li onClick={returnPolicyNavi}><a>Return Policy</a></li>
<li onClick={termsAndCOnditionNavi}><a>Terms & Conditions</a></li>
</ul>

<ul>
<h4>CONNECT WITH US</h4>
<li><a>Email: WINSOMEBLOOM.SHOP</a></li>
<li><a>Phone: +91 77039 75629</a></li>
<br></br>
<li><a>Address : 15/34,
House Rd, <br></br>
U Block, DLF Phase 3, Sector 24, <br></br>
Gurugram 122002</a></li>
</ul>

</div>

<div className="footer_bottom">
<p>© 2026 Designed & Developed by JSON Softech.</p>
</div>

</header>
</div>

);

};

export default Header;
