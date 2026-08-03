import "./Commitments.css";

const Commitments = () => {

const commitments = [
{
id: 1,
img: "https://www.kimirica.shop/cdn/shop/files/Home-Page-Icons-New-01_d7e8cbec-7ebd-4239-945b-1322a6a731dc.png?v=1708684016&width=240",
title: "Clean Formulations",
desc: "SLS & Paraben Free Products",
},
{
id: 2,
img: "https://www.kimirica.shop/cdn/shop/files/Home-Page-Icons-New-02_ebe0af63-f692-4b25-af02-9465595a6363.png?v=1708684028&width=240",
title: "Cruelty Free Beauty",
desc: "No Animal Testing",
},
{
id: 3,
img: "https://www.kimirica.shop/cdn/shop/files/Home-Page-Icons-New-03_9ad9dc53-b471-4d64-8d52-561791b4df5f.png?v=1708684051&width=240",
title: "Natural Ingredients",
desc: "Carefully Selected Beauty Products",
},
{
id: 4,
img: "https://www.kimirica.shop/cdn/shop/files/Home-Page-Icons-New-05_cbfd1d84-31d8-4a2f-b5fa-116c9b84fd9f.png?v=1708684063&width=240",
title: "IFRA Certified",
desc: "Natural Extracts, Safe Fragrances",
},
{
id: 5,
img: "https://www.kimirica.shop/cdn/shop/files/Home-Page-Icons-New-06_bfe7fee0-469c-4df6-9c0c-dfb421a55003.png?v=1708684075&width=240",
title: "Dermatologically Tested",
desc: "Suitable For Most Skin Types",
},
];

return (

<div className="commitments_container">
<div className="commitments_center">
<div className="section_accent">
<span className="accent_line"></span>
<span className="accent_diamond">◆</span>
<span className="accent_line"></span>
</div>

<h2>
<span className="heading_sub">Our Promise</span>
Thoughtful Commitments
</h2>

<p className="section_subtitle">
We believe in conscious beauty choices. Our commitment focuses on quality,
care and responsible products that enhance your everyday beauty experience.
</p>

<section className="commitments_flex">
{commitments.map((item, index) => (
<div
className="commitment_item"
key={item.id}
style={{ animationDelay: `${index * 0.1}s` }}
>
<div className="icon_wrapper">
<div className="icon_ring"></div>
<img src={item.img} alt={item.title} loading="lazy" />
</div>
<h4>{item.title}</h4>
<label>{item.desc}</label>
</div>
))}
</section>

<div className="section_accent bottom">
<span className="accent_line"></span>
<span className="accent_diamond">✦</span>
<span className="accent_line"></span>
</div>
</div>
</div>
);
};

export default Commitments;