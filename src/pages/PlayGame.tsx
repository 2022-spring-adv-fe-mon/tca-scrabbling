import {
  IonButton,
  IonPage,
  IonApp,
  IonHeader,
  IonContent,
  IonCard,
  IonLabel,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonInput,
  IonCardContent,
  IonCardHeader,
  IonTitle,
} from "@ionic/react";
import { currentGame, gameResult } from "../App";
import { useHistory } from "react-router";

interface PlayGameProps {
  addGameResult: (r: gameResult) => void;
  currentGame: currentGame;
  previousPlayers: string[];
  setCurrentGame: (game: currentGame) => void;
}

const PlayGame: React.FC<PlayGameProps> = ({
  addGameResult,
  currentGame,
  previousPlayers,
  setCurrentGame,
}) => {
  const nav = useHistory();

  const startGame = () => {
    // Setup the payers and the start timestamp.
    setCurrentGame({
      start: new Date().toISOString(),
      players: [previousPlayers[0], previousPlayers[1], "Marge"],
    });
  };

  const endGame = () => {
    addGameResult({
      start: currentGame.start,
      end: new Date().toISOString(),
      players: currentGame.players.map((x: any) => ({
        name: x,
        order: 0,
      })),
      winner: "Marge",
    });

    nav.push("/");
  };

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/players" />
            </IonButtons>
            <IonTitle>Back To Players</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <h1 className="ion-padding">Let's Get Scrabbling!</h1>
          <IonButton className="ion-padding" onClick={startGame}>
            Start Game
          </IonButton>
          <IonCard>
            <IonCardContent>
              <IonCardHeader>Player 1: Me</IonCardHeader>
              <IonLabel>Score:</IonLabel>
              <IonInput type="number" placeholder="Enter Score"></IonInput>
              <IonButtons>
                <IonButton>End Turn</IonButton>
              </IonButtons>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardContent>
              <IonCardHeader className="ion-paddng-left">
                Player 2:
              </IonCardHeader>
              <IonLabel>Score:</IonLabel>
              <IonButtons>
                <IonButton>EndTurn</IonButton>
              </IonButtons>
            </IonCardContent>
          </IonCard>
          <IonButton className="ion-padding" routerLink="/home">
            Quit Game
          </IonButton>
          <IonButton className="ion-padding" onClick={endGame}>
            End Game
          </IonButton>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};
export default PlayGame;
