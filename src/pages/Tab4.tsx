import React from 'react';
import { IonApp, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonApp className="tabContent">

    <IonContent >
      <div className="container">
        <div>
          <img className="user-img" src="assets/users/empty.jpg" />
          <div className="msg-detail">
            <div className="msg-info">
              <p>
                Student
              </p>
            </div>
            <div className="msg-content">
              <span className="triangle"></span>
              <p className="line-breaker">Test 1</p>
            </div>

          </div>
        </div>
        
      </div>
      <div className="container">
        <div>
          <img className="user-img" src="assets/users/empty.jpg" />
          <div className="msg-detail">
            <div className="msg-info">
              <p>
                Student
              </p>
            </div>
            <div className="msg-content">
              <span className="triangle"></span>
              <p className="line-breaker">Test 1</p>
            </div>

          </div>
        </div>
        
      </div>
    </IonContent>
    <IonFooter no-border>
      <div className="input-wrap">
        <textarea  placeholder="Enter your message!">
        </textarea>
        <button ion-button  icon-only item-right >
         Send
        </button>
      </div>
    </IonFooter>
  </IonApp>
  );
};

export default Tab4;