import Slider from "react-slick";
import img1 from './Slider/1.img.jpg';
import img3 from './Slider/2.img.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';

const SliderComponent = () => {

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
arrows: true,
};

return (

<div className="slider_div">

<Slider {...settings}>

<div className="slide_item">
<img src={img1} alt="Modern Work Desk" />

<div className="image_overlay"></div>

<div className="banner_content">
<h1 className="banner_title">LUXURY HOME Cosmetics</h1>
<p className="banner_subtitle">
Enhance your productivity with intelligently designed work desks.
</p>
<button className="banner_btn">Explore Collection →</button>
</div>
</div>

<div className="slide_item">
<img src={img3} alt="Curve Comfort Desk" />
<div className="image_overlay"></div>
<div className="banner_content">
<h1 className="banner_title">Curve Comfort</h1>
<p className="banner_subtitle">
Ergonomic design that adapts to your natural movements.
</p>
<button className="banner_btn">Shop Now →</button>
</div>
</div>
</Slider>
</div>

);
};

export default SliderComponent;