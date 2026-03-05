import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import AboutPickle from "../Slider/AboutPickle.jpg";
import AboutCollectionOne from "../Slider/ourcollectionone.png";
import AboutCollectionTwo from "../Slider/ourcollectiontwo.png";
import "./about.css";

const Aboutus = () => {

return (

<div>

<Navbar></Navbar>

<img className="ListBanner" src="https://www.kimirica.shop/cdn/shop/files/About-Us-Page-BANNER-01_1.jpg?v=1708598103&width=1800"></img>

<section className="about_flex_tw">

<h3>OUR STORY</h3>
<h2>WINSOM BLOOM</h2>
<p className="about_para">
At Winsom Bloom, we believe beauty is about confidence, care,
and self-expression. Our store brings together trusted cosmetics
<br></br> skincare, and haircare products from renowned brands, 
ensuring quality and authenticity in every purchase.<br></br> 
your everyday life.</p>
</section>

<main className="about_flex_">

<section>

<h2 className="co_founder">CO-FOUNDER AND CEO</h2>
<h1>KANCHAN</h1>
<p>
{" "}
“We believe beauty is more than just products — it's about 
confidence and self-care. Our goal is to bring high-quality 
cosmetics that help you look good, feel good,
and enjoy every moment of your beauty routine.”
{" "}
</p>
</section>

<img 
loading="lazy"
className="imgAbout" 
alt=""
src={AboutPickle}></img>

</main>

<main className="about_flex_">

<img alt=""
src={AboutCollectionOne}></img>

<section className="about_firstSection">

<h2>OUR COLLECTIONS</h2>
<h1>INSPIRED BY BEAUTY,<br></br>
CARE & EVERYDAY MOMENTS
</h1>
<p>
{" "}
Our collections are inspired by everyday beauty experiences and the 
moments that make self-care special. We bring together a range of 
skincare, haircare, and personal care products designed to refresh 
and enhance your daily routine. Each product reflects a thoughtful 
blend of quality ingredients, trusted brands, and modern beauty 
trends to create a pleasant and effective self-care experience. 
Our goal is to offer products that help you feel confident, refreshed, 
and naturally beautiful every day.{" "}
</p>
</section>

</main>

<main className="about_flex_">

<section className="about_firstSection">

<h2>BEAUTY EDITS</h2>
<h1>CURATED FOR YOUR EVERYDAY <br></br> GLOW
</h1>
<p>
{" "}
Our collections are thoughtfully curated to celebrate beauty in its 
finest form. Inspired by everyday moments and evolving trends, we 
bring together skincare, haircare, and personal care essentials 
designed to elevate your self-care routine. Each product reflects 
quality, trust, and a touch of luxury, helping you feel confident, 
refreshed, and radiant every single day.
{" "}
</p>
</section>

<img alt=""
src={AboutCollectionTwo}></img>

</main>

<div className="header-ad">
<Header></Header>
</div>

</div>

);

};

export default Aboutus;
