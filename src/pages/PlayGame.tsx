import React, { useRef } from "react";
import { IonButton, IonPage, IonApp, IonHeader, IonContent, IonCard, IonLabel, IonToolbar, IonButtons, IonBackButton, IonInput } from "@ionic/react";
import { RouteComponentProps } from "react-router";

const PlayGame: React.FC<RouteComponentProps> = (props) => {
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
                    <h1>Player 1: Me</h1>
                    <IonLabel>Score:</IonLabel>
                    <IonInput type="number" placeholder="Enter Score"></IonInput>
                    <IonButtons>
                    <IonButton>End Turn</IonButton>
                    </IonButtons>
                    </IonCard>
                    <IonCard>
                    <h1>Player 2: </h1>
                    <IonLabel>Score:</IonLabel>
                    <IonButtons>
                    <IonButton>EndTurn</IonButton>
                    </IonButtons>
                    </IonCard>
                    <IonButton onClick={() => props.history.push('/home')}>Quit Game</IonButton>
                    <IonButton onClick={() => props.history.push('/home')} >End Game</IonButton>
                </IonContent>
            </IonApp>
        </IonPage>
    );
};
export default PlayGame;
 