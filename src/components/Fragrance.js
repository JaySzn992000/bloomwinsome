import React from "react";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import AboutPickle from "../Slider/AboutPickle.svg";
import { Helmet } from "react-helmet";
import "./Fragrance.css";
import Commitments from "./Commitments";
import FAqQuestions from "./FAqQuestions";

const Fragrance = () => {

return (

<div>

{/*  */}

<Navbar></Navbar>


<img src="https://www.kimirica.shop/cdn/shop/files/Sub-Catagory-Page-Banner-Four-01.jpg?v=1708084490&width=1920"></img>

<main className="Fragrance_flex_">

<img 
loading="lazy"
className="imgAbout" 
alt="Traditional Indian pickle jar with spices"
src="https://www.kimirica.shop/cdn/shop/files/LOVESTORYBODYLOTION_BODYWASHBODYCAREDUO_Listing_Images-New-03.jpg?v=1753351188&width=600"
></img>

<section className="fragrance_container">

<h2>BOTTEL CONSTRUCT</h2>
<h1> THOUGHTFUL. LUXURIOUS. <br></br> SUSTAINABLE.</h1>
<p>
{" "}
Made with 100% recyclable, eco-friendly materials, 
the packaging features lead-free textured glass bottle 
with a non-slip grip. The auto-snap magnetic cap adds 
ease to the functionality, while the sleek high-grade 
aluminium label completes the luxury experience.{" "}
</p>
</section>

</main>


{/*  */}


<main className="Fragrance_flex_">

<section className="fragrance_container">

<h2>BOTTEL CONSTRUCT</h2>
<h1> THOUGHTFUL. LUXURIOUS. <br></br> SUSTAINABLE.</h1>
<p>
{" "}
Made with 100% recyclable, eco-friendly materials, 
the packaging features lead-free textured glass bottle 
with a non-slip grip. The auto-snap magnetic cap adds 
ease to the functionality, while the sleek high-grade 
aluminium label completes the luxury experience.{" "}
</p>
</section>


<img 
loading="lazy"
className="imgAbout" 
alt="Traditional Indian pickle jar with spices"
src="https://www.kimirica.shop/cdn/shop/files/b6025f9400d185b0a3de6f289cf4305b16fe8a96.jpg?v=1746424445&width=800"
></img>


</main>

<Commitments></Commitments>
<FAqQuestions></FAqQuestions>

<section className="about_flex_tw">

</section>

{/*  */}

<div className="header-ad">
<Header></Header>
</div>

</div>

);

};

export default Fragrance;
