import React, { useRef, useState, useEffect } from "react";
import videoone from "../Slider/video1.mp4";
import videotwo from "../Slider/video2.mp4";
import videothree from "../Slider/video3.mp4";
import videofour from "../Slider/video4.mp4";
import videofive from "../Slider/video5.mp4";
import videosix from "../Slider/video6.mp4";
import videoseven from "../Slider/video7.mp4";
import "./videoslider.css";

const BestArrivals = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const arrivals = [
    { id: 1, title: "Glow & Glam", video: videoone, duration: "0:24", likes: 24 },
    { id: 2, title: "Rose Petal", video: videotwo, duration: "0:31", likes: 18 },
    { id: 3, title: "Velvet Matte", video: videothree, duration: "0:19", likes: 32 },
    { id: 4, title: "Golden Hour", video: videofour, duration: "0:27", likes: 41 },
    { id: 5, title: "Blush Pink", video: videofive, duration: "0:22", likes: 15 },
    { id: 6, title: "Midnight Rose", video: videosix, duration: "0:35", likes: 27 },
    { id: 7, title: "Silk & Satin", video: videoseven, duration: "0:29", likes: 19 },
  ];

  // Update active dot on scroll
  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;

    const updateIndex = () => {
      const { scrollLeft, scrollWidth, clientWidth } = ref;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) {
        setActiveIndex(0);
        return;
      }
      const ratio = scrollLeft / maxScroll;
      const index = Math.round(ratio * (arrivals.length - 1));
      setActiveIndex(Math.min(index, arrivals.length - 1));
    };

    ref.addEventListener("scroll", updateIndex);
    // Initial update after layout
    requestAnimationFrame(updateIndex);
    window.addEventListener("resize", updateIndex);

    return () => {
      ref.removeEventListener("scroll", updateIndex);
      window.removeEventListener("resize", updateIndex);
    };
  }, [arrivals.length]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.querySelector(".arrival_card");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(container).gap) || 16;
    const cardWidth = card.offsetWidth + gap;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="arrivals_container">
      {/* Decorative glow */}
      <div className="arrivals_glow arrivals_glow--1"></div>
      <div className="arrivals_glow arrivals_glow--2"></div>

      {/* Header */}
      <div className="arrivals_header">
        <div className="arrivals_header-left">
          <span className="arrivals_badge">✦ New Arrivals</span>
          <h2>Best Sellers on Trend</h2>
          <p className="arrivals_subtitle">Curated makeup looks · fresh drops every week</p>
        </div>
        <div className="arrivals_controls">
          <button onClick={() => scroll("left")} aria-label="Scroll left">
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button onClick={() => scroll("right")} aria-label="Scroll right">
            <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg>
          </button>
        </div>
      </div>

      {/* Scrollable video cards */}
      <div className="arrivals_flex" ref={scrollRef}>
        {arrivals.map((item, index) => (
          <div key={item.id} className="arrival_card">
            <div className="arrival_video-wrapper">
              <video
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                controls={false}
                className="arrival_video"
              >
                <source src={item.video} type="video/mp4" />
              </video>
              <div className="arrival_video-overlay">
                <div className="arrival_play-icon">
                  <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
              </div>
            </div>
            <div className="arrival_card-footer">
              <span className="arrival_title">{item.title}</span>
              <div className="arrival_meta">
                <span className="arrival_duration">{item.duration}</span>
                <span className="arrival_like">
                  <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  {item.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="arrivals_scroll-hint">
        {arrivals.map((_, idx) => (
          <span key={idx} className={idx === activeIndex ? "active" : ""} />
        ))}
      </div>
    </div>
  );
};

export default BestArrivals;