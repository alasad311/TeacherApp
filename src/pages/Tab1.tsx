import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList
  } from '@ionic/react';
import React from 'react';
import './Tab1.css';
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
          <IonCardTitle>Welcome to Private Teacher App</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>
            Now that you have created an account, start by search for courses or request a course.
          </p>
        </IonCardContent>
      </IonCard>
      <IonCard >
        <IonCardHeader>
          <IonCardSubtitle>No Courses Enrolled</IonCardSubtitle>
        </IonCardHeader>
      
      </IonCard>
    </IonContent>
  </IonApp>
  );
};

export default Tab1;
