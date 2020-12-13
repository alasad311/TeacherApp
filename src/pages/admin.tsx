import { IonApp, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonInput, IonLabel, IonRouterOutlet, IonRow, IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route, useHistory } from "react-router";
import './Login.css';
import { apps, book, cog,person, home, people,gitPullRequest} from 'ionicons/icons';

import { IonReactRouter } from '@ionic/react-router';
import adTab1 from './adTab1';
import adTab2 from './adTab2';
import adTab3 from './adTab3';
import {  } from 'ionicons/icons';

const Login: React.FC = () => {
const history = useHistory();


  
  return (
    <IonApp>
    <IonReactRouter>
            <IonRouterOutlet>
          <Route path="/admin/tab1" component={adTab1} exact={true} />
          <Route path="/admin/tab2" component={adTab2} exact={true} />
          <Route path="/admin/tab3" component={adTab3} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/admin/tab1">
            <IonIcon icon={person} />
            <IonLabel>Users</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/admin/tab2">
            <IonIcon icon={book} />
            <IonLabel>Courses</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/admin/tab3">
            <IonIcon icon={gitPullRequest} />
            <IonLabel>Requests</IonLabel>
          </IonTabButton>
        </IonTabBar>
             </IonReactRouter>
             </IonApp>
  );
};

export default Login;
