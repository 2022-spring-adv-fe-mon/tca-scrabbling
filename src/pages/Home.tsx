import {
  IonApp,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";

import scrabbling from "../components/scrabbling.jpg";
import { gameResult } from "../App";

interface HomeProps {
  gameResults: gameResult[];
}

const calculateWinningPercentage = (results: gameResult[], who: string) =>
  results.filter((x) => x.winner === who).length /
  results.filter(
    (x) => x.winner !== "~~None~~" && x.players.some((y) => y.name === who)
  ).length;

const calculateLongestGame = (r: gameResult[]) =>
  Math.max(...r.map((x) => Date.parse(x.end) - Date.parse(x.start)));

const calculateShortestGame = (r: gameResult[]) =>
  Math.min(...r.map((x) => Date.parse(x.end) - Date.parse(x.start)));

const Home: React.FC<HomeProps> = ({ gameResults }) => {
  const margesWinningPercentage = !isNaN(
    calculateWinningPercentage(gameResults, "Marge")
  )
    ? calculateWinningPercentage(gameResults, "Marge")
    : 0;

  return (
    <IonPage>
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="ion-text-center">SCRABBLING</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonImg
            src={scrabbling}
            className="ion-padding"
            alt="scrabble game"
          ></IonImg>
          <IonCard>
            <IonButton className="ion-padding" routerLink="players">
              New Game
            </IonButton>
            <IonCardTitle className="ion-padding">Stats</IonCardTitle>
            {/* <IonCard> */}
            {/* <IonCardHeader className="ion-text-center"> */}
            <h3>Total Games Played: {gameResults.length}</h3>
            {/* </IonCardHeader> */}
            {/* </IonCard>
            <IonCard>
              <IonCardHeader className="ion-text-center"> */}
            <h3>Leader Board</h3>
            <h3>
              My Winning Percent:{" "}
              {calculateWinningPercentage(gameResults, "Me")}
            </h3>
            <h3>Marge's Winning Percent: {margesWinningPercentage}</h3>
            {/* </IonCardHeader>
            </IonCard>
            <IonCard>
              <IonCardHeader className="ion-text-center"> */}
            <h3>
              Longest Game (min):{" "}
              {calculateLongestGame(gameResults) / 1000 / 60}
            </h3>
            {/* </IonCardHeader>
            </IonCard>
            <IonCard>
              <IonCardHeader className="ion-text-center"> */}
            <h3>
              Shortest Game (min):{" "}
              {calculateShortestGame(gameResults) / 1000 / 60}
            </h3>
            {/* </IonCardHeader>
            </IonCard>
            <IonCard>
              <IonCardHeader className="ion-text-center"> */}
            <h3>Fastest Word Played</h3>
            {/* </IonCardHeader>
            </IonCard>
            <IonCard>
              <IonCardHeader className="ion-text-center"> */}
            <h3>Highest Word Score</h3>
            {/* </IonCardHeader>
            </IonCard> */}
          </IonCard>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default Home;
