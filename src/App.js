import {
  IonApp,
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';
import BiorithmCard from './components/BiorhythmCard';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const targetDate = new Date().toISOString();

  return (
    <IonApp>
      <IonHeader className="App-header">
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {birthDate && <BiorithmCard birthDate={birthDate} targetDate={targetDate} />}
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY"
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
