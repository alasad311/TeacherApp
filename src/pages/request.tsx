import React, { useEffect, useState } from 'react';
import { IonApp, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './request.css';
import { MobXProviderContext } from 'mobx-react';
import { useHistory } from 'react-router';
const coureCatOptions = {
  header: 'Course Category',
  subHeader: 'Select Course Category',
  message: 'Only select one Course Category'
};
const instructorOptions = {
  header: 'Instructor',
  subHeader: 'Select Instructor',
  message: 'Only select one Instructor'
};
const Tab3: React.FC = () => {
  const { store } = React.useContext(MobXProviderContext);
const history = useHistory();
const [role, setRole] = useState("");
const [courseType, setcourseType] = useState<string>('aaaa');
const [instructor, setInstructor] = useState<string>('aaaa');

const currentRole = async () =>{
  let x = await store.userProfileDetails().then( async (doc:any) => {
    if(doc.role != "student")
    {
      history.push("tab1");
    }
    
});
}

const formSubmitted = ()=>{
  const alert = document.createElement('ion-alert');
  alert.header = 'Request';
  alert.subHeader = 'Sent';
  alert.message = "You request has been sent to the instructor";
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
    <IonApp  class="tabContent requestTab">
      <IonContent className="requestContent">
        <h3 className="requestHeader">Request a Course</h3>
        <p>Make sure to enter as much information as possible</p>
          <IonGrid className="gridShadow">
              <IonRow justify-content-center align-items-end >
                    <IonCol col-3 class="registerFieldDesign">
                      <IonLabel class="labelC">Course Name:</IonLabel>
                      <IonInput placeholder="Course Name" className="inputBorder"/>
                    </IonCol>
              </IonRow>
              <IonRow justify-content-center align-items-end >
                    <IonCol col-3 class="registerFieldDesign">
                      <IonLabel class="labelC">Course Category:</IonLabel>
                      <IonSelect value={courseType} placeholder="Select One"  okText="Okay" cancelText="Dismiss" onIonChange={e => setcourseType(e.detail.value)} 
                      interface="alert" interfaceOptions={coureCatOptions}>
                        <IonSelectOption value="red">A</IonSelectOption>
                        <IonSelectOption value="AA">B</IonSelectOption>
                        <IonSelectOption value="BB">C</IonSelectOption>
                      </IonSelect>
                    </IonCol>
              </IonRow>
              <IonRow justify-content-center align-items-end >
                    <IonCol col-3 class="registerFieldDesign">
                      <IonLabel class="labelC">Intstructor:</IonLabel>
                      <IonSelect value={instructor} placeholder="Select One"  okText="Okay" cancelText="Dismiss" onIonChange={e => setInstructor(e.detail.value)} 
                      interface="alert" interfaceOptions={instructorOptions}>
                        <IonSelectOption value="red">A</IonSelectOption>
                        <IonSelectOption value="AA">B</IonSelectOption>
                        <IonSelectOption value="BB">C</IonSelectOption>
                      </IonSelect>
                    </IonCol>
              </IonRow>
              <IonRow justify-content-center align-items-end >
                    <IonCol col-3 class="registerFieldDesign">
                      <IonLabel class="labelC">Course Description:</IonLabel>
                      <IonTextarea className="inputBorder" rows={6} cols={20} placeholder="Any Information about the course"></IonTextarea>
                    </IonCol>
              </IonRow>
          </IonGrid>
          <IonGrid>
          <IonRow justify-content-center align-items-end>
                  <IonCol col-6>
                      <IonButton expand="full" shape="round" fill="outline" href="/tab1">Back</IonButton>
                  </IonCol>
                  <IonCol col-6>
                      <IonButton  expand="full" shape="round" fill="outline"  onClick={ () => formSubmitted() } >Submit</IonButton>
                  </IonCol>
              </IonRow>     
          </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default Tab3;