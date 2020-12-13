import {
  IonApp,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonSearchbar
  } from '@ionic/react';
import React from 'react';
import './adTab3.css';


const adTab3: React.FunctionComponent = () => {

  
  return (
    <IonApp  class="tabContent">
       <IonSearchbar value="" ></IonSearchbar>
    <IonContent>
      <IonCard >
        <IonCardHeader>
          <IonCardSubtitle>List of All Requests</IonCardSubtitle>
        </IonCardHeader>
      
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

export default adTab3;
