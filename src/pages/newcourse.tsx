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
const courses = [
  {
    id: 1,
    img: "assets/course/1.jpg",
    title: 'Introduction to Programming',
    Description: 'Master Python and learn the fundamentals of Computer Science, like data structures and algorithms. These skills are the key to writing more efficient code and acing technical interviews, but most bootcamps don’t teach them.',
    instructor: 'Admin',
    dateCreate: 'Nov 29, 2020',
    rating: "2.2",
    startDate: 'Dec 12,2020',
    endDate: 'Dec 31,2020',
    payment: "Free",
    duration: "2 Weeks"
  },
  {
    id: 2,
    img: "assets/course/2.jpg",
    title: 'Introduction to C++',
    Description: 'Beginner & Advanced Classes. Free 10-Day Trial. Start Now! Over 7,000+ Courses. Offline Access. Live Mentoring. Skills Assessments. Courses: Software Development, IT Ops, Creative Professional, Data Professional, Architecture, Manufacture & Design',
    instructor: 'Admin',
    dateCreate: 'Nov 20, 2020',
    rating: "4",
    startDate: 'Dec 15,2020',
    endDate: 'Dec 28,2020',
    duration: "1 Weeks",
    payment: "10.000 OMR"
  }
];
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
  alert.header = 'Save';
  alert.subHeader = '';
  alert.message = "Request has been submitted";
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
        <h3 className="requestHeader">Add a Course</h3>
        <p>Make sure to enter as much information as possible</p>
          <IonGrid className="gridShadow">
              <IonRow justify-content-center align-items-end >
                    <IonCol col-3 class="registerFieldDesign">
                      <IonLabel class="labelC">Course Name:</IonLabel>
                      <IonInput className="inputBorder"/>
                    </IonCol>
              </IonRow>
              <IonRow justify-content-center align-items-end >
                    <IonCol col-3 class="registerFieldDesign">
                      <IonLabel class="labelC">Course Description:</IonLabel>
                      <IonTextarea  className="inputBorder"/>
                    </IonCol>
              </IonRow>
              <IonRow justify-content-center align-items-end >
                    <IonCol col-3 class="registerFieldDesign">
                      <IonLabel class="labelC">Start Date:</IonLabel>
                      <IonTextarea  className="inputBorder"/>
                    </IonCol>
              </IonRow>
              <IonRow justify-content-center align-items-end >
                    <IonCol col-3 class="registerFieldDesign">
                      <IonLabel class="labelC">End Date:</IonLabel>
                      <IonTextarea  className="inputBorder"/>
                    </IonCol>
              </IonRow>
              <IonRow justify-content-center align-items-end >
                    <IonCol col-3 class="registerFieldDesign">
                      <IonLabel class="labelC">Add Quiz:</IonLabel>
                      <IonButton expand="full" shape="round" fill="outline" href="#">Add Quiz</IonButton>
                    </IonCol>
              </IonRow>
              <IonRow justify-content-center align-items-end >
                    <IonCol col-3 class="registerFieldDesign">
                      <IonLabel class="labelC">Add Material:</IonLabel>
                      <IonButton expand="full" shape="round" fill="outline" href="#">Upload</IonButton>
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