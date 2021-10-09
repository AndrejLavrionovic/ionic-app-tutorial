import { IonButton, IonToast } from '@ionic/react';
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
        <IonButton onClick={handleClick}>Click Me</IonButton>
        <IonToast isOpen={showToast} message="Hello World!" />
      </main>
    </div>
  );
}

export default App;
