import { IonApp, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import React from 'react';
import scrabbling from '../components/scrabbling.jpg';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='ion-text-center' >SCRABBLING</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonImg src={scrabbling} className='ion-padding' alt='scrabble game'></IonImg>
        <IonCard> 
          <IonCardHeader className='ion-text-center' >Start New Game Below</IonCardHeader>
          <IonButton  routerLink='/players'>New Game</IonButton>
          <IonCardTitle>
            Stats
          </IonCardTitle>
          <IonCard>
           <IonCardHeader className='ion-text-center' >Leader Board</IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader className='ion-text-center' >Longest Game</IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader className='ion-text-center' >Shortest Game</IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader className='ion-text-center' >Fastest Word Played</IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader className='ion-text-center'>Highest Word Score</IonCardHeader>
          </IonCard>
        </IonCard>
      </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default Home;
