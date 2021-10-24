import {
  IonApp,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [birthDate, setBirthDate] = useState('');

  return (
    <IonApp>
      <IonHeader className="App-header">
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime displayFormat="MMM D, YYYY"
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>Biorhythms Results</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
              <p>Physical: 83%</p>
              <p>Emotional: 34%</p>
              <p>Intellectual: 52%</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default App;
