import { IonApp, IonBackButton, IonButton, IonButtons, IonCard, IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useRef } from "react";
import { RouteComponentProps } from "react-router";


const Players: React.FC<RouteComponentProps> = (props) => {
    const pageRef = useRef();
    return (
        <IonPage ref={pageRef}>
            <IonApp>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/home" />
                        </IonButtons>
                    </IonToolbar>
                        <h1>Choose Players</h1>
                </IonHeader>
                <IonContent>
                    <IonButton>Add New Player</IonButton>
                    <IonCard>
                    <IonList>
                        <IonItem>
                            <IonCheckbox slot="start" />
                            <IonLabel>
                                <h3>Me</h3>
                            </IonLabel>
                        </IonItem>
                    </IonList>
                    </IonCard>
                    <IonButton onClick={() => props.history.push('/playgame')} >Continue</IonButton>
                    <IonButton onClick={() => props.history.push('/home')} >Cancel</IonButton>
                </IonContent>
            </IonApp>
        </IonPage>
    );
};
export default Players;