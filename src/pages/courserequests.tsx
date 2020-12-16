import React, { useEffect, useState } from 'react';
import { IonApp, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonProgressBar, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './enrolledstudents.css';
import { MobXProviderContext } from 'mobx-react';
import { useHistory } from 'react-router';

const Tab3: React.FC = () => {
  const { store } = React.useContext(MobXProviderContext);
const history = useHistory();
const [role, setRole] = useState("");
const [courseType, setcourseType] = useState<string>('aaaa');
const [instructor, setInstructor] = useState<string>('aaaa');
const courseID = Number(history.location.state)?Number(history.location.state):0;

const currentRole = async () =>{
  let x = await store.userProfileDetails().then( async (doc:any) => {
  
});
}

const formSubmitted = ()=>{
  const alert = document.createElement('ion-alert');
  alert.header = 'Update';
  alert.subHeader = '';
  alert.message = "Update has be complete successfully";
  alert.buttons = [{
    text: 'OK',
    handler: () => {
      alert.dismiss();
      history.push("tab1")
      return false;
    }
  }]
  document.body.appendChild(alert);
  alert.present()
};
useEffect(() => {
  currentRole()
}, [])

  return (
    <IonApp  class="tabContent">
      <IonContent className="requestContent">
      <IonCard class="welcome-card">
        <IonCardHeader>
          <IonCardTitle> Course 1</IonCardTitle>
          <IonCardSubtitle>Description of course request</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton expand="full" shape="round" fill="outline" href="#">Save Request</IonButton>
        </IonCardContent>
      </IonCard>
      <IonCard class="welcome-card">
        <IonCardHeader>
          <IonCardTitle> Course 2</IonCardTitle>
          <IonCardSubtitle>Description of course request</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton expand="full" shape="round" fill="outline" href="#">Save Request</IonButton>
        </IonCardContent>
      </IonCard>
      <IonCard class="welcome-card">
        <IonCardHeader>
          <IonCardTitle> Course 3</IonCardTitle>
          <IonCardSubtitle>Description of course request</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton expand="full" shape="round" fill="outline" href="#">Save Request</IonButton>
        </IonCardContent>
      </IonCard>
      </IonContent>
    </IonApp>
  );
};

export default Tab3;