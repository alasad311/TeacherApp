import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonSearchbar
  } from '@ionic/react';
import React from 'react';
import './adTab3.css';

const formSubmitted = ()=>{
  const alert = document.createElement('ion-alert');
  alert.header = 'Accpets';
  alert.message = "Request has been added";
  alert.buttons = [{
    text: 'OK',
    handler: () => {
      alert.dismiss();
      return false;
    }
  }]
  document.body.appendChild(alert);
  alert.present()
};
const formSubmittedR = ()=>{
  const alert = document.createElement('ion-alert');
  alert.header = 'Rejected';
  alert.message = "Request has been rejected";
  alert.buttons = [{
    text: 'OK',
    handler: () => {
      alert.dismiss();
      return false;
    }
  }]
  document.body.appendChild(alert);
  alert.present()
};
const adTab3: React.FunctionComponent = () => {

  
  return (
    <IonApp  class="tabContent">
      <IonContent className="requestContent">
      <IonCard class="welcome-card">
        <IonCardHeader>
          <IonCardTitle> Course 1</IonCardTitle>
          <IonCardSubtitle>Description of course request</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton expand="full" shape="round" fill="outline" onClick={ () => formSubmitted()} >Approve</IonButton>
          <IonButton expand="full" shape="round" fill="outline" onClick={ () => formSubmittedR()} >Reject</IonButton>
        </IonCardContent>
      </IonCard>
      <IonCard class="welcome-card">
        <IonCardHeader>
          <IonCardTitle> Course 2</IonCardTitle>
          <IonCardSubtitle>Description of course request</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton expand="full" shape="round" fill="outline" onClick={ () => formSubmitted()} >Approve</IonButton>
          <IonButton expand="full" shape="round" fill="outline" onClick={ () => formSubmittedR() }>Reject</IonButton>

        </IonCardContent>
      </IonCard>
      <IonCard class="welcome-card">
        <IonCardHeader>
          <IonCardTitle> Course 3</IonCardTitle>
          <IonCardSubtitle>Description of course request</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton expand="full" shape="round" fill="outline" onClick={ () => formSubmitted()} >Approve</IonButton>
          <IonButton expand="full" shape="round" fill="outline" onClick={ () => formSubmittedR() }>Reject</IonButton>

        </IonCardContent>
      </IonCard>
      </IonContent>
    </IonApp>
  );
};

export default adTab3;
