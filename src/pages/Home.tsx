import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonRow } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonContent class="ion-padding">
    <IonImg src="assets\testIO-logo-rgb-2.png" />
      <h4 className='titre'>Welcome to </h4>
      <h1 className='nom'>Private Teacher App</h1>

    <IonGrid>
        <IonRow justify-content-center align-items-end class="test">
              <IonCol col-6>
                  <IonButton expand="full" shape="round" fill="outline" href="/register">Sign Up </IonButton>
              </IonCol>
              <IonCol col-6>
                  <IonButton expand="full" shape="round" fill="outline" href="/login">Log In  </IonButton>
         
              </IonCol>
        </IonRow>
    </IonGrid>
  </IonContent>
  );
};

export default Home;
