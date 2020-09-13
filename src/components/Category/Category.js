import React, { useEffect } from 'react';
import { Link, Switch, useParams } from 'react-router-dom';
import GameRow from '../GameRow/GameRow';

import GameData from '../../assets/game-data.json';
import GameCard from '../GameCard/GameCard';

import './Category.css';

function Category(props) {
  const { genre } = useParams();

  return (
    <div className="category">
      <Link to="/">Click Here to go Home</Link>
      <div className="game__list">
        {GameData['Game-List'][`${genre}`].map(
          ({ name, image, genre, title }) => {
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
          }
        )}
      </div>
    </div>
  );
}

export default Category;
