import {
  IonApp,
  IonContent,
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

  return (
    <IonApp>
      <IonHeader className="App-header">
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel>Name:</IonLabel>
          <IonInput value={name}
            onIonChange={(event) => setName(event.detail.value)}
          />
        </IonItem>
        <p>Name: {name}</p>
      </IonContent>
    </IonApp>
  );
}

export default App;
