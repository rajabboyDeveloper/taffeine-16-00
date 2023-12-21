import React, { useState, useEffect } from "react";
import l from "./MainOne.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import OwlCard from "./owlcard/OwlCard";
function MainOne() {
  const [slide, setslide] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/home/banner").then((resp) => {
      let data = resp.data.data;
      setslide(data);
    });
  }, []);

  return (
    <section className={l.mainOne}>
      <OwlCarousel
        className="owl-theme"
        autoplay={true}
        loop
        autoplayTimeout={2000}
        autoplayHoverPause={true}
        animateIn={true}
        items={1}
        dots={false}
      >
        {slide.map((items, index) => {
          return (
            <OwlCard
              title={items.title}
              text={items.short_content}
              img={items.url}
            />
          );
        })}
      </OwlCarousel>
    </section>
  );
}

export default MainOne;
