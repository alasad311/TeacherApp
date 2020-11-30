import React from 'react';
import { IonApp, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { logOut } from '../store/firebaseService';
import { useHistory } from "react-router";

const Tab3: React.FC = () => {
  const history = useHistory();

const logoutuser = () => {
  
  logOut()
  history.push('/home')
};
  return (
    <IonApp  class="tabContent">
    <IonContent has-header="true">
      <div id="profile-bg"></div>
      <div id="content">
        <div id="profile-info">
          <img id="profile-image" src="assets/users/empty.jpg" />
          <h3 id="profile-name">Test Name</h3>
        </div>
        <IonList>
          <IonItem ng-repeat="post in posts">
          <IonButton className="logoutBtn" expand="full" shape="round" fill="outline"
              onClick={ () => logoutuser() }
              >Logout</IonButton>
          </IonItem>
        </IonList>
      </div>
    </IonContent>
    </IonApp>
  );
};

export default Tab3;