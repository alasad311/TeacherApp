import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonRow } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonContent class="ion-padding">
    <div className="logoHolder">
      <IonImg class="homeImage" src="assets\tran-logo.png" />
      <h3 className="logoName">Private Teacher</h3>
    </div>
    <IonImg class="bkImage" src="assets\education.jpg" />
      <h2 className="HomeWelcome">Welcome</h2>
      <p className="HomeSen">Let us help you to connect with a teachers or join our pre-made course </p>
    <IonGrid>
        <IonRow justify-content-center align-items-end class="test">
              <IonCol col-6>
                  <IonButton class="HomeBtn" expand="full" shape="round" fill="outline" href="/register">Sign Up </IonButton>
              </IonCol>
              <IonCol col-6>
                  <IonButton class="HomeBtn" expand="full" shape="round" fill="outline" href="/login">Log In  </IonButton>
              </IonCol>
        </IonRow>
    </IonGrid>
  </IonContent>
  );
};

export default Home;
