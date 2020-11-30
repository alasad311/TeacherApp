import React from 'react';

import { IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { useParams } from 'react-router';
const Details: React.FunctionComponent = () => {
  let { course_id } = useParams(); // here is your date

  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
  <p>{course_id}</p>
      </IonContent>
    </React.Fragment>
  );
};

export default Details;
