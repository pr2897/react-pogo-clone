import React from "react";
import GameCard from "../GameCard/GameCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import App from "../../App";

import gameData from "../../assets/game-data.json";

import "./ListAllGame.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

function ListAllGame({ GameData }) {
  return (
    <>
      <div className="all-game-list">
        {GameData.map(({ name, image, genre }) => (
          <GameCard name={name} image={image} genre={genre} key={name} />
        ))}
      </div>
    </>
  );
}

export default ListAllGame;
