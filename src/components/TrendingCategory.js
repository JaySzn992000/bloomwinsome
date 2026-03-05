import trendingone from "../Slider/trendingone.jpg"
import trendingtwo from "../Slider/trendingtwo.jpg"
import "./TrendingCategory.css";

const TrendingCategory = () => {

return (

<div>

<div className="trending_category">

<h2>TRENDING CATEGORIES</h2>

<main className="Trending_flex_hm">

<section>
<img src={trendingone}
loading="lazy"
className="imgAbout" 
alt="Traditional Indian pickle jar with spices"
></img>
</section>

<section>
<img
loading="lazy"
className="imgAbout" 
alt="Traditional Indian pickle jar with spices"
src={trendingtwo}></img>
</section>

</main>

</div>

</div>

);

};

export default TrendingCategory;
