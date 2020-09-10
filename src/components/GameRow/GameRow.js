import React from "react";
import GameCard from "../GameCard/GameCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./GameRow.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function GameRow({ deviceType, title, GameData }) {
  return (
    <>
      <div className="gamerow">
        <h1>{title}</h1>
      </div>
      <div className="gamelist">
        <Carousel
          showDots={true}
          responsive={responsive}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-20-px card-width"
        >
          {GameData.map(({ name, image, genre }) => (
            <GameCard name={name} image={image} genre={genre} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default GameRow;
