import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import NavigationClose from "../Logo/CloseTag.png";
import "./Filters.css";

const Filters = ({ allProducts, onFilterUpdate }) => {

const [selectedNames, setSelectedNames] = useState([]);
const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(10000);
const [filtersVisible, setFiltersVisible] = useState(false);

const navigate = useNavigate();
const location = useLocation();

const query = new URLSearchParams(location.search).get("search");

useEffect(() => {
if (query) {
const names = query.split(",").filter(Boolean);
setSelectedNames(names);
}
}, [query]);

useEffect(() => {
onFilterUpdate({
selectedNames,
minPrice,
maxPrice,
});
}, [selectedNames, minPrice, maxPrice, onFilterUpdate]);

const handleNameChange = (name) => {
setSelectedNames((prevNames) => {
const newNames = prevNames.includes(name)
? prevNames.filter((n) => n !== name)
: [...prevNames, name];

const newQuery =
newNames.length > 0
? `?search=${encodeURIComponent(newNames.join(","))}`
: "";
navigate(newQuery, { replace: true });
return newNames;
});
};

const toggleFilters = () => setFiltersVisible((v) => !v);
const closeFilters = () => setFiltersVisible(false);

const collections = useMemo(
() => [
"Face Wash",
"Face Cream",
"Sunscreen",
"Shampoo",
"Hair Serum",
"Hair Color",
],
[]
);

const activeCount = selectedNames.length + (minPrice > 0 || maxPrice < 10000 ? 1 : 0);

return (

<div className="filters-wrapper">

<button className="filter-toggle" onClick={toggleFilters}>
<svg
width="20"
height="20"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<line x1="4" y1="6" x2="20" y2="6" />
<line x1="4" y1="12" x2="20" y2="12" />
<line x1="4" y1="18" x2="20" y2="18" />
</svg>
<span>Filters</span>
{activeCount > 0 && <span className="toggle-badge">{activeCount}</span>}
</button>

{filtersVisible && (
<div className="filters-overlay" onClick={closeFilters} />
)}

<div className={`filters-panel ${filtersVisible ? "open" : ""}`}>

<div className="panel-header">
<div className="panel-title">
<span className="title-icon">✦</span>
<h2>Refine</h2>
<span className="title-accent">Collection</span>
</div>
<button className="panel-close" onClick={closeFilters}>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
<line x1="18" y1="6" x2="6" y2="18" />
<line x1="6" y1="6" x2="18" y2="18" />
</svg>
</button>
</div>

{activeCount > 0 && (
<div className="active-tags">
{selectedNames.map((name) => (
<span key={name} className="tag">
{name}
<button
className="tag-remove"
onClick={() => handleNameChange(name)}
>
✕
</button>
</span>
))}
{(minPrice > 0 || maxPrice < 10000) && (
<span className="tag">
₹{minPrice}–₹{maxPrice}
<button
className="tag-remove"
onClick={() => {
setMinPrice(0);
setMaxPrice(10000);
}}
>
✕
</button>
</span>
)}
</div>
)}

<div className="panel-body">

<div className="filter-group">
<div className="group-header">
<h4>Price Range</h4>
<span className="group-badge">₹</span>
</div>

<div className="price-display">
<span>₹{minPrice.toLocaleString()}</span>
<span className="price-dash">—</span>
<span>₹{maxPrice.toLocaleString()}</span>
</div>

<div className="dual-slider">
<div
className="slider-track-fill"
style={{
left: `${(minPrice / 10000) * 100}%`,
right: `${100 - (maxPrice / 10000) * 100}%`,
}}
/>
<input
type="range"
min="0"
max="10000"
step="50"
value={minPrice}
onChange={(e) => {
const val = Number(e.target.value);
if (val <= maxPrice) setMinPrice(val);
}}
className="slider-input min"
/>
<input
type="range"
min="0"
max="10000"
step="50"
value={maxPrice}
onChange={(e) => {
const val = Number(e.target.value);
if (val >= minPrice) setMaxPrice(val);
}}
className="slider-input max"
/>
</div>
</div>

<div className="filter-group">
<div className="group-header">
<h4>Collections</h4>
<span className="group-badge">{collections.length}</span>
</div>

<div className="collection-grid">
{collections.map((name) => (
<label key={name} className="collection-item">
<input
type="checkbox"
checked={selectedNames.includes(name)}
onChange={() => handleNameChange(name)}
/>
<span>{name}</span>
</label>
))}
</div>
</div>

<button
className="clear-all"
onClick={() => {
setSelectedNames([]);
setMinPrice(0);
setMaxPrice(10000);
navigate("", { replace: true });
}}
>
Clear All Filters
</button>
</div>
</div>
</div>

);
};

export default Filters;