import React, { useRef } from "react";
import { IonButton, IonPage, IonApp, IonHeader, IonContent, IonCard, IonLabel, IonToolbar, IonButtons, IonBackButton, IonInput, IonCardContent, IonCardHeader } from "@ionic/react";


const PlayGame: React.FC = () => {
    const pageRef = useRef();
    return (
        <IonPage ref={pageRef}>
            <IonApp>
                <IonHeader>
                <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/players" />
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
                        <IonCardHeader className='ion-paddng-left' >Player 2:</IonCardHeader> 
                    <IonLabel>Score:</IonLabel>
                    <IonButtons>
                    <IonButton>EndTurn</IonButton>
                    </IonButtons>
                    </IonCardContent>
                    </IonCard>
                    <IonButton routerLink='/home'>Quit Game</IonButton>
                    <IonButton routerLink='/home' >End Game</IonButton>
                </IonContent>
            </IonApp>
        </IonPage>
    );
};
export default PlayGame;
 