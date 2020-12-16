import React, { useEffect, useState } from 'react';
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonFooter, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonModal, IonRow, IonSearchbar, IonTextarea } from '@ionic/react';
import './Tab2.css';
import { add } from 'ionicons/icons';
import { MobXProviderContext } from 'mobx-react';
import { useHistory } from 'react-router';

const Tab2: React.FC = () => {
  const [role, setRole] = useState("");
  const history = useHistory();
  const { store } = React.useContext(MobXProviderContext);
  const currentRole = async () =>{
    let x = await store.userProfileDetails().then( async (doc:any) => {
      setRole(doc.role);
      
  });
}
  useEffect(() => {
    currentRole()
  }, [])


  return (
    <IonApp  class="tabContent">
      <IonContent>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={() => (role === "student") ? history.push("request") :history.push("newcourse") }>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
      <IonSearchbar value="" ></IonSearchbar>
      <IonCard>
        <IonItem>
          <IonAvatar slot="start">
            <img src="assets/users/empty.jpg" />
          </IonAvatar>
          <IonLabel>
            <h3>Admin</h3>
            <p>Nov 30, 2020</p>
          </IonLabel>
        </IonItem>

        <img src="assets/course/1.jpg" className="courseImage" />
        <IonCardHeader>
          <IonCardTitle className="courseTitle">Introduction to Programming</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
        Become a Web Development Pro with these valuable skills. Start Your Course Today. 
        </IonCardContent>
        <IonFooter>
          <IonRow>
            <IonCol text-center>
              <IonButton  expand="full" shape="round" fill="outline" onClick={() => history.push("/course_details",0)}>View Details</IonButton>
            </IonCol>
          </IonRow>
        </IonFooter>
      </IonCard>
      <IonCard>
        <IonItem>
          <IonAvatar slot="start">
            <img src="assets/users/empty.jpg" />
          </IonAvatar>
          <IonLabel>
            <h3>Admin</h3>
            <p>Nov 29, 2020</p>
          </IonLabel>
        </IonItem>

        <img src="assets/course/2.jpg" className="courseImage" />
        <IonCardHeader>
          <IonCardTitle className="courseTitle">Introduction to C++</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
        Learn C++ Online At Your Own Pace. Start Today and Become an Expert in Days. 
        </IonCardContent>
      </IonCard>
      <IonFooter>
          <IonRow>
            <IonCol text-center>
              <IonButton  expand="full" shape="round" fill="outline" onClick={() => history.push("/course_details",1)}>View Details</IonButton>
            </IonCol>
          </IonRow>
        </IonFooter>
       
      </IonContent>
    </IonApp>
  );
};

export default Tab2;