import {
  IonApp,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router";
import AddPlayerModal from "../components/AddPlayerModal";

interface AddPlayerProps {
  previousPlayers: string[];
  setCurrentGame: (game: currentGame) => void;
}

const Players: React.FC<AddPlayerProps> = ({
  previousPlayers
  , setCurrentGame
}) => {

  const nav = useHistory();

  const playersWithCheckBoolean = previousPlayers.map(x => ({
    name: x
    , checked: false
  }))

  const startGame = () => {
    setCurrentGame({
      start: new Date().toISOString()
      , players: [
        previousPlayers[0]
        , previousPlayers[1]
        ,"Marge"
      ]
    });
    nav.push('/playgame');
  };

  // //track modal state
  // const [addPlayerModal, setAddPlayerModal] = useState(false);
  // //track state of player
  // const [player, setPlayer] = useState({ name: "Chris" });
  // //tracks state of modal response
  // const [modalResp, setModalResp] = useState<{
  //   cancelled: boolean;
  //   data: any;
  // } | null>(null);

  // const onModalClose = (response: any) => {
  //   setAddPlayerModal(false);
  //   setModalResp(response);
  //   if (!response.cancelled) {
  //     setPlayer({ name: response.data.name });
  //   }
  // };
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>Select Players</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonCard className="ion-padding">
            <IonCardTitle className="ion-padding">Players</IonCardTitle>
            <IonCardSubtitle className='ion-padding'>Select or Add Player</IonCardSubtitle>
            <IonCardContent className="ion-padding">
              {addPlayerModal && (
                <AddPlayerModal
                  isOpen={addPlayerModal}
                  initialData={{ ...player }}
                  onClose={onModalClose}
                />
              )}
              <div>
                <IonList>
                        <IonItem>
                            <IonCheckbox slot="start" />
                            <IonLabel>Me</IonLabel>
                        </IonItem>
                <IonItem>
                <IonCheckbox slot="start" />
                    <IonLabel>{player.name}</IonLabel>
                </IonItem>
                </IonList>
                <div>
                  <pre>{modalResp && JSON.stringify(modalResp, null, 2)}</pre>
                </div>
              </div>
              <IonButton
                onClick={() => {
                  setAddPlayerModal(true);
                }}
              >
                Add New Player
              </IonButton>
            </IonCardContent>
          </IonCard>
                <div className='ion-padding'>
          <IonButton routerLink="/playgame">Continue</IonButton>
          <IonButton routerLink="/home" color="danger">Cancel</IonButton>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};
export default Players;
