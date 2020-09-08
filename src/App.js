import React from "react";
import "./App.css";
import GameCard from "./components/GameCard/GameCard";

import GameRow from "./components/GameRow/GameRow";
import GameData from "./assets/game-data.json";

function App(props) {
  return (
    <div className="app">
      <GameRow title="Top Games" GameData={GameData["top-Games"]} />
      <GameRow title="Bingo" GameData={GameData["Game-List"].Bingo} />
      <GameRow title="Board" GameData={GameData["Game-List"].Board} />
      <GameRow title="Card" GameData={GameData["Game-List"].Card} />
      <GameRow title="Casino" GameData={GameData["Game-List"].Casino} />
    </div>
  );
}

export default App;
