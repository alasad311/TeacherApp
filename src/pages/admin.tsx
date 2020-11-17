import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonInput, IonLabel, IonRow } from '@ionic/react';
import React from 'react';
import './Login.css';
const Login: React.FC = () => {


  
  return (
    <IonContent class="ion-padding">
    <IonImg src="assets\testIO-logo-rgb-2.png" />
    <h1 className='nom'>Private Teacher App</h1>
      <IonGrid>
          <IonRow justify-content-center align-items-end class="test">
                <IonCol col-3>
                 <p>1. Control users</p>
                 <p>2. Approve courses</p>
                 <p>3. Statistics Report</p>
                </IonCol>
          </IonRow>
          <IonRow justify-content-center align-items-end class="test">
              <IonCol col-6>
                  <IonButton expand="full" shape="round" fill="outline" href="/home">Back</IonButton>
              </IonCol>
          
          </IonRow>
         
      </IonGrid>
  </IonContent>
  );
};

export default Login;
