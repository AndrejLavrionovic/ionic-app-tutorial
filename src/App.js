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
import { useLocalStorage } from './hooks';

function App() {
  const [birthDate, setBirthDate] = useLocalStorage('bod', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

  return (
    <IonApp>
      <IonHeader className="App-header">
        <IonToolbar color="primary">
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {birthDate && <BiorithmCard birthDate={birthDate} targetDate={targetDate} />}
        <IonItem>
          <IonLabel position="fixed">Date of Birth:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Target Date:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY"
            value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
