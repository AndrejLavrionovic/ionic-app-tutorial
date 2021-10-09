import { IonButton, IonIcon, IonToast } from '@ionic/react';
import { play as playIcon } from 'ionicons/icons';
import React, { useState } from 'react';

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My app</h1>
      </header>
      <main>
        <IonButton onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />
          Click Me
        </IonButton>
        <IonToast isOpen={showToast} message="Hello World!" />
      </main>
    </div>
  );
}

export default App;
