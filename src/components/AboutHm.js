import Navbar from "../headers_footer/navbar";
import AboutHmImg from "../Slider/AboutHm.jpg";
import "./AboutHm.css";

const AboutHm = () => {

return (

<div>

<Navbar></Navbar>

<main className="about_flex_hm">

<img 
loading="lazy"
className="imgAbout" 
alt="Traditional Indian pickle jar with spices"
src={AboutHmImg}></img>

<section>

<h3>WELCOME TO</h3>
<h2>WINSOM BLOOM</h2>
<p>
{" "}
Discover premium beauty and personal care products from trusted brands like 
Lotus Herbals, O3 Plus, L'Oréal Paris, Biotique, Aroma, and Streax. 
At Winsom Blooms, we bring you a curated collection of skincare, haircare, 
makeup, and fragrance essentials designed to enhance your natural beauty 
and boost your confidence every day{" "}
</p>

<button><span>DISCOVER NOW</span></button>

</section>

</main>

</div>

);

};

export default AboutHm;
