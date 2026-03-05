import Navbar from "../headers_footer/navbar";
import BiotiqueFavroute from "../Slider/biotique1.png";
import BiotiqueFavrouteTwo from "../Slider/biotique2.png";
import "./FavFavroute.css";

const FavFavroute = () => {

return (

<div>

<Navbar></Navbar>

<div className="Fav_Trending">

<h1>Most Trending</h1>
<div className="FavFavroute_flex_hm">
<section>
<img 
loading="lazy"
className="imgAbout" 
alt=""
src={BiotiqueFavroute}></img>
<button><span>EXPLORE NOW</span></button>
</section>

<section>
<img
src={BiotiqueFavrouteTwo}
loading="lazy"
className="imgAbout" 
alt=""
></img>
<button><span>EXPLORE NOW</span></button>
</section>
</div>

</div>

</div>

);

};

export default FavFavroute;
