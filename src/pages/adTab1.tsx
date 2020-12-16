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
  IonProgressBar,
  IonRow,
  IonSearchbar
  } from '@ionic/react';
import React from 'react';
import './adTab1.css';
const formSubmitted = ()=>{
  const alert = document.createElement('ion-alert');
  alert.header = 'Blocked';
  alert.message = "User has been blocked successfully";
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

const adTab1: React.FunctionComponent = () => {

  
  return (
    <IonApp  class="tabContent">
    
       <IonSearchbar value="" ></IonSearchbar>
    <IonContent>
    <IonCard class="welcome-card">
        <IonCardHeader>
          <img src="assets/users/empty.jpg" className="userProfile" />
          <IonCardSubtitle className="paddingName">Student 1</IonCardSubtitle>
          <IonCardTitle>Course 1 <IonProgressBar color="primary" value={0.25}></IonProgressBar><br /></IonCardTitle>
          <IonCardTitle>Course 2 <IonProgressBar color="primary" value={0.5}></IonProgressBar><br /></IonCardTitle>
          <IonCardTitle>Course 3 <IonProgressBar color="primary" value={0.75}></IonProgressBar><br /></IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton expand="full" shape="round" fill="outline"   onClick={ () => formSubmitted() } >Block User</IonButton>
          <IonButton expand="full" shape="round" fill="outline" href="assets/course/sample.jpg">Certificate</IonButton>
        </IonCardContent>
      </IonCard>
      <IonCard class="welcome-card">
        <IonCardHeader>
          <img src="assets/users/empty.jpg" className="userProfile" />
          <IonCardSubtitle className="paddingName">Student 2</IonCardSubtitle>
          <IonCardTitle>Course 1 <IonProgressBar color="primary" value={0.25}></IonProgressBar><br /></IonCardTitle>
          <IonCardTitle>Course 2 <IonProgressBar color="primary" value={0.5}></IonProgressBar><br /></IonCardTitle>
          <IonCardTitle>Course 3 <IonProgressBar color="primary" value={0.75}></IonProgressBar><br /></IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton expand="full" shape="round" fill="outline" onClick={ () => formSubmitted() } >Block User</IonButton>
          <IonButton expand="full" shape="round" fill="outline" href="assets/course/sample.jpg">Certificate</IonButton>
        </IonCardContent>
      </IonCard>
      <IonGrid>
          <IonRow justify-content-center align-items-end class="test">
              <IonCol col-6>
                  <IonButton expand="full" shape="round" fill="outline" href="/home">Logout</IonButton>
              </IonCol>
          
          </IonRow>
         
      </IonGrid>
    </IonContent>
    </IonApp>
  );
};

export default adTab1;
