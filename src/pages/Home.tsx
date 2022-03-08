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
  gameResults: gameResult[]
}

const Home: React.FC <HomeProps> = ({gameResults}) => {
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
            <IonButton className='ion-padding' routerLink='players'>New Game</IonButton>
            <IonCardTitle className='ion-padding'>Stats</IonCardTitle>
            <IonCard>
              <IonCardHeader className="ion-text-center">
                <h3>
                Total Games Played: {gameResults.length}
                </h3>
              </IonCardHeader>
            </IonCard>
            <IonCard>
              <IonCardHeader className="ion-text-center">
                Leader Board
              </IonCardHeader>
            </IonCard>
            <IonCard>
              <IonCardHeader className="ion-text-center">
                Longest Game
              </IonCardHeader>
            </IonCard>
            <IonCard>
              <IonCardHeader className="ion-text-center">
                Shortest Game
              </IonCardHeader>
            </IonCard>
            <IonCard>
              <IonCardHeader className="ion-text-center">
                Fastest Word Played
              </IonCardHeader>
            </IonCard>
            <IonCard>
              <IonCardHeader className="ion-text-center">
                Highest Word Score
              </IonCardHeader>
            </IonCard>
          </IonCard>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default Home;
