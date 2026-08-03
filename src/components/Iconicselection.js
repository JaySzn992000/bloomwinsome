import "./Iconicselection.css";

const Iconicselection = () => {

const products = [
{ id: 1, name: "Makeup", img: "https://www.lotus.in/cdn/shop/products/EcostayMakeupFixer_opencap.jpg?v=1752235863&width=1000" },
{ id: 2, name: "Face Wash", img: "https://www.lotus.in/cdn/shop/files/LOTUS00000041_7_fb2da59d-8e63-457c-8a30-8d9e11958373.jpg?v=1733814814&width=700" },
{ id: 3, name: "Face Powder", img: "https://www.lotus.in/cdn/shop/files/1200x1200copy_63.jpg?v=1752126308&width=700" },
{ id: 4, name: "Lip Oil", img: "https://www.lotus.in/cdn/shop/files/Translucentbenefits.jpg?v=1706339499&width=1000" },
{ id: 5, name: "Face Plate", img: "https://www.lotus.in/cdn/shop/files/1200x1200_59265b22-e4dd-4373-97f9-f7549a1f8cc2.jpg?v=1709537516&width=700" },
{ id: 6, name: "Mascara", img: "https://www.lotus.in/cdn/shop/files/EcostayMascara_1ed0cd37-e129-4239-b0b7-5ea968baed8b.jpg?v=1688801513&width=700" },
{ id: 7, name: "Lip Balm", img: "https://www.lotus.in/cdn/shop/files/2_44dcc590-c8ae-4d61-a9cb-16481f6778b8.png?v=1731564134&width=1000" },
{ id: 8, name: "Body Lotion", img: "https://www.lotus.in/cdn/shop/files/EcostayPrimer_16459c3c-228e-4a7e-926f-a17e2b68e9e5.jpg?v=1688803655&width=700" },
];

return (

<section className="iconic-wrapper">
<div className="iconic-container">
<div className="iconic-header">
<span className="iconic-badge">✦ curated for you</span>
<h2 className="iconic-title">
Iconic <span className="iconic-highlight">Selections</span>
</h2>
<p className="iconic-sub">
Discover our most loved essentials, handpicked for your beauty ritual.
</p>
</div>

<div className="iconic-grid">
{products.map((product, index) => (
<div
className="iconic-card"
key={product.id}
style={{ animationDelay: `${index * 0.06}s` }}
>
<div className="iconic-image-wrap">
<img
src={product.img}
alt={product.name}
loading="lazy"
className="iconic-img"
/>
<div className="iconic-overlay">
<span className="iconic-view">Explore</span>
</div>
</div>
<div className="iconic-footer">
<span className="iconic-dot"></span>
<span className="iconic-label">{product.name}</span>
</div>
</div>
))}
</div>
</div>
</section>
);
};

export default Iconicselection;