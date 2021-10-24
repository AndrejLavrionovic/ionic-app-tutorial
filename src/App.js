import {
  IonApp,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
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
          <IonLabel position="stacked">Name:</IonLabel>
          <IonInput value={name}
            onIonChange={(event) => setName(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime displayFormat="MMM D, YYYY"
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <p>Name: {name}</p>
        <p>DOB: {birthDate}</p>
      </IonContent>
    </IonApp>
  );
}

export default App;
