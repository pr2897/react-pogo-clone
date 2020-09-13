import React from "react";
import "./GameCard.css";
import PeopleIcon from "@material-ui/icons/People";

function GameCard({ name, image, genre, Icon }) {
  const icon = Icon ? (
    <Icon />
  ) : (
    <img className="gamecard__image" src={image} alt={name} />
  );
  return (
    <div className="game-card">
      <div className="card__header">{icon}</div>
      <div className="card__footer">
        <div className="footer__left">
          <h2>{name}</h2>
          <h3>{genre}</h3>
        </div>
        <PeopleIcon />
      </div>
    </div>
  );
}

export default GameCard;
