import React from 'react';
import { IonApp, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonApp  class="tabContent">
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>
              <h2>Tab3</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonApp>
  );
};

export default Tab3;