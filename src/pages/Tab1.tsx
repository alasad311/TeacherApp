import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonTitle,
  IonToolbar
  } from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';
import { MobXProviderContext, observer } from "mobx-react";
import { logOut } from '../store/firebaseService';
import { useHistory } from "react-router";


const Tab1: React.FunctionComponent = () => {
  const history = useHistory();

  const logoutuser = () => {
    
    logOut()
    history.push('/home')
  };
  
  return (
  <IonApp  class="tabContent">
    <IonContent>
      <IonCard class="welcome-card">
        <img src="/assets/shapes.svg" alt=""/>
        <IonCardHeader>
          <IonCardSubtitle>Get Started</IonCardSubtitle>
          <IonCardTitle>Welcome to Teacher App</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>
            Now that your app has been created, you'll want to start building out features and
            components. Check out some of the resources below for next steps.
          </p>
        </IonCardContent>
      </IonCard>
      <IonList>
          <IonItem>
            <IonLabel>
              <IonButton expand="full" shape="round" fill="outline"
              onClick={ () => logoutuser() }
              >Logout</IonButton>
            </IonLabel>
          </IonItem>
        </IonList>

    </IonContent>
  </IonApp>
  );
};

export default Tab1;
