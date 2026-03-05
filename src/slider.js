import Slider from "react-slick";
import img1 from './Slider/1.img.jpg';
import img3 from './Slider/2.img.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
// import React from "react";
// import img2 from './Slider/3.img.jpg';


const SliderComponent = () => {

const settings = {
dots: true,
infinite: true,
speed: 500, 
slidesToShow: 1, 
slidesToScroll: 1, 
autoplay: true, 
autoplaySpeed: 3000, 
};


return (

<div className="slider_div">

<Slider {...settings}>
<div className="slide_item">
<img src={img1} alt="Slide 1" />
<div className="top_shadow"></div>
</div>

<div className="slide_item">
<img src={img3} alt="Slide 3" />
<div className="top_shadow"></div>
</div>
</Slider>
</div>

);

};

export default SliderComponent;
