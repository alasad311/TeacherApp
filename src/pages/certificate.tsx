import React, { useEffect, useState } from 'react';
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonNote, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './certificate.css';
import { MobXProviderContext } from 'mobx-react';
import { useHistory } from 'react-router';
import { IndexKind } from 'typescript';


const CourseDetails: React.FC = () => {
const { store } = React.useContext(MobXProviderContext);
const history = useHistory();


const courseID = Number(history.location.state)?Number(history.location.state):0;


  return (
    <IonApp  class="tabContent">
      <IonContent className="requestContent">
        <IonCard>
          <IonItem>
          <IonButton  expand="full" shape="round" fill="outline" href="/tab1">Back</IonButton>
          </IonItem>
          <IonItem>
            <img src="assets/course/sample.jpg" />
          </IonItem>
        </IonCard>
      </IonContent>
    </IonApp>
  );
};

export default CourseDetails;