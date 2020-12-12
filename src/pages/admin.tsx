import { IonApp, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonInput, IonLabel, IonRouterOutlet, IonRow, IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route, useHistory } from "react-router";
import './Login.css';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

import {  } from 'ionicons/icons';

const Login: React.FC = () => {
const history = useHistory();


  
  return (
    <IonContent>
      <IonCard >
        <IonCardHeader>
          <IonCardSubtitle>No Courses Enrolled</IonCardSubtitle>
        </IonCardHeader>
      
      </IonCard>
    </IonContent>
  );
};

export default Login;
