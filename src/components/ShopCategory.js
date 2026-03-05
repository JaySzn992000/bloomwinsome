import Fragrances from "../Slider/Fragrance.jpeg"
import Skincares from "../Slider/Skincare.jpeg"
import Candles from "../Slider/Candle.jpg"
import "./ShopCategory.css";

const ShopCategory = () => {

return (

<div>

<div className="shopcategory_center">

<h2>SHOP BY CATEGORY</h2>

<section className="shopcategory_flex">

<div className="shopcategory_card">
<img src={Skincares}></img>
<label>SKIN CARE</label>
</div>

<div className="shopcategory_card">
<img src="https://www.kimirica.shop/cdn/shop/files/Hand_care.png?v=1708602649&width=500" />
<label>HAND CARE</label>
</div>

<div className="shopcategory_card">
<img src="https://www.kimirica.shop/cdn/shop/files/Hair.jpg?v=1708603061&width=500" />
<label>HAIR CARE</label>
</div>

<div className="shopcategory_card">
<img src={Candles}></img>
<label>CANDLE</label>
</div>
<div className="shopcategory_card">
<img src={Fragrances}></img>
<label>FRAGRANCE</label>
</div>

<div className="shopcategory_card">
<img src="https://www.kimirica.shop/cdn/shop/files/Bath_5609c1e0-57bb-468e-b43a-aaf0495db491.jpg?v=1708605958&width=500" />
<label>BATH CARE</label>
</div>

<div className="shopcategory_card">
<img src="https://www.kimirica.shop/cdn/shop/files/Body-01.jpg?v=1708605116&width=500" />
<label>BODY CARE</label>
</div>

</section>

</div>

</div>

)

} 

export default ShopCategory;