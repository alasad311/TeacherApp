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
import './adTab1.css';


const adTab1: React.FunctionComponent = () => {

  
  return (
    <IonApp  class="tabContent">
    
       <IonSearchbar value="" ></IonSearchbar>
    <IonContent>
      <IonCard >
        <IonCardHeader>
          <IonCardSubtitle>List of All Users</IonCardSubtitle>
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

export default adTab1;
