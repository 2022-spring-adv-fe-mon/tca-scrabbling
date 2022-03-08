/* Using with IonModal Component */

import React, { useState, useEffect, useRef } from 'react';
import { 
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton, 
    IonContent, 
    IonItem,
    IonLabel,
    IonInput
} from '@ionic/react';

interface player {
    name: string;
    order: number;
}

const players: player [] = [

];

const AddPlayerModal: React.FC<{
    initialData: any;
    isOpen: boolean;
    onClose: Function;
}> = ({ initialData, isOpen, onClose }) => {
    const [dataName, setDataName] = useState<string | null | undefined >(
      initialData.name
    );
    const pageRef = useRef();
    return (
        <IonModal isOpen={isOpen}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add Player</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonItem>
                    <IonLabel>Player Name: </IonLabel>
                    <IonInput
                        value={dataName}
                        onIonChange={(e) => setDataName(e.detail.value)}
                    ></IonInput>
                </IonItem>
                <IonButton
                    onClick={() => {
                        onClose({ cancelled: false, data: { name: dataName } });
                        setDataName(null);
                    }}>
                        Add Player
                </IonButton>

                <IonButton
                    color="danger"
                    onClick={() => {
                        onClose({ cancelled: true, data: null });
                        setDataName(null);
                    }}
                >
                        Cancel
                </IonButton>
            </IonContent>
        </IonModal>
    );
};
export default AddPlayerModal;
