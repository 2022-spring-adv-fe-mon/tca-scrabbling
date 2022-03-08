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
} from "@ionic/react";
import { gameResult } from "../App";
import { useHistory } from 'react-router-dom';

interface PlayGameProps {
  addGameResult: (r: gameResult) => void;
}

const PlayGame: React.FC<PlayGameProps> = ({addGameResult}) => {

  const history = useHistory();

  const endGame = () => {
    addGameResult({
      start: ""
      , end: ""
      , players: []
      , winner: ""
    });

    history.push("/");
  };

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref='/players' />
            </IonButtons>
          </IonToolbar>
          <h1>Let's Get Scrabbling!</h1>
        </IonHeader>
        <IonContent>
          <IonButton>Start Game</IonButton>
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
          <IonButton routerLink='/home'>Quit Game</IonButton>
          <IonButton 
            onClick={endGame}
          >
            End Game
          </IonButton>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};
export default PlayGame;
