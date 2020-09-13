import React from 'react';
import GameCard from '../GameCard/GameCard';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import App from '../../App';

import gameData from '../../assets/game-data.json';

import './GameRow.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import Name from '../Name/Name';

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

function GameRow({ deviceType, title, GameData, location }) {
  let rowContent = null;
  let moreIcon = null;

  // console.log(GameData);

  if (GameData.length > 4) {
    rowContent = GameData.slice(0, 4).map(({ name, image, genre, title }) => {
      console.log(title);
      return (
        <GameCard
          name={name}
          image={image}
          genre={genre}
          key={name}
          title={title}
        />
      );
    });
    moreIcon = (
      <Router>
        <Link to={`category/${title}`}>
          <GameCard
            name={`See All ${title} Games`}
            Icon={AddCircleOutlineIcon}
            key={title}
          />
        </Link>
      </Router>
    );
  } else {
    rowContent = GameData.map(({ name, image, genre }) => (
      <GameCard name={name} image={image} genre={genre} key={name} />
    ));
  }

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
          {rowContent}
          {moreIcon}
        </Carousel>
      </div>
    </>
  );
}

export default GameRow;
