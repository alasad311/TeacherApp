import React from 'react';
import { IonApp, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
 
  return (
    <IonApp  class="tabContent">
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>
              <h2>Tab2</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonApp>
  );
};

export default Tab2;