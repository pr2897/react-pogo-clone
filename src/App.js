import React from 'react';
import './App.css';

import GameRow from './components/GameRow/GameRow';
import ListAllGame from './components/ListAllGame/ListAllGame';

import GameData from './assets/game-data.json';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  useParams,
} from 'react-router-dom';
import GameCard from './components/GameCard/GameCard';
import Category from './components/Category/Category';

function App() {
  // const routerContent = () => {
  //   const data = Object.keys(GameData['Game-List']).map(genreTitle => (
  //     <Route
  //       path={`category/${genreTitle}`}
  //       component={() => {
  //         console.log(Object.keys(GameData['Game-List']));
  //         console.log('in Object key:', genreTitle);
  //         return (
  //           <ListAllGame GameData={GameData['Game-List'][`${genreTitle}`]} />
  //         );
  //       }}
  //     />
  //   ));
  //   return JSON.stringify(data);
  // };

  // console.log(routerContent());
  Object.keys(GameData['Game-List']).forEach(_ => console.log(_));
  return (
    <Router>
      <Switch>
        <Route path="/category/:genre" component={Category} />
        {/* {Object.keys(GameData['Game-List']).map(genreTitle => (
          <Route
            path={`category/${genreTitle}`}
            component={() => {
              console.log(Object.keys(GameData['Game-List']));
              console.log('in Object key:', genreTitle);
              return (
                <ListAllGame
                  GameData={GameData['Game-List'][`${genreTitle}`]}
                />
              );
            }}
          />
        ))} */}

        <Route
          path="/home"
          exact
          component={() => (
            <div className="app">
              <GameRow
                title="Top Games"
                GameData={GameData['Game-List']['Top Games']}
              />
              <GameRow
                title="Bingo"
                key="bingo"
                GameData={GameData['Game-List'].Bingo}
              />
              <GameRow
                title="Board"
                key="board"
                GameData={GameData['Game-List'].Board}
              />
              <GameRow
                title="Card"
                key="Card"
                GameData={GameData['Game-List'].Card}
              />
              <GameRow
                title="Casino"
                key="Casino"
                GameData={GameData['Game-List'].Casino}
              />
            </div>
          )}
        />

        <Redirect from="/" to="/home" exact />
      </Switch>
    </Router>
  );
}

export default App;
