import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter, IonReactHashRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Players from './pages/Players';
import PlayGame from './pages/PlayGame';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/* Theme variables */
import './theme/variables.css';

import { useState } from 'react';

setupIonicReact();

interface player {
  name: string;
  order: number;
}

export interface gameResult {
  start: string;
  end: string;
  winner: string;
  players: player []
}

export interface currentGame {
  start: string;
  players: string[];
}

const game1: gameResult = {
  start: "2022-02-14T18:55:00"
  , end: "2022-02-14T19:00:00"
  , winner: "Me"
  ,players: [{ name: "Me", order: 1 }, { name: "Chris", order: 2 }, { name: "Jack", order: 3 }]
}

const game2: gameResult = {
  start: "2022-02-14T19:05:00"
  , end: "2022-02-14T19:35:00"
  , winner: "Karen"
  , players: [{ name: "Me", order: 1 }, { name: "Jack", order: 2 }, { name: "Chris", order: 3 }, { name: "Karen", order: 4 }]
}

const gameResults: gameResult[] = [
  game1
  , game2
];

const getUniquePlayers = (games: gameResult[]) => (
  [...new Set(games.flatMap(x=> x.players.map(y => y.name)))]
);

const App: React.FC = () => {

  const [results, setResults] = useState<gameResult[]>(gameResults);
  const [currentGame, setCurrentGame] = useState<currentGame>({
    start: ""
    , players: []
  });

  const addGameResult = (singleGameResult: gameResult) => {
    setResults([
      ...results
      , singleGameResult
    ]);
  };

  return (
  <IonApp>
    <IonReactHashRouter>
        <Route exact path='/home'>
          <Home 
            gameResults={results}
          />
        </Route>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        
        <Route exact path='/players'>
          <Players 
            previousPlayers={getUniquePlayers(results)}
            setCurrentGame={setCurrentGame}
          />
        </Route>
        
        <Route exact path='/playgame'>
          <PlayGame 
            previousPlayers={getUniquePlayers(results)}
            setCurrentGame={setCurrentGame}
            addGameResult={addGameResult}
            currentGame={currentGame}
          />
        </Route>
    </IonReactHashRouter>
  </IonApp>
  );
  };
export default App;
