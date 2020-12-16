import React, { useEffect, useState } from 'react';
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonNote, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './payment.css';
import { MobXProviderContext } from 'mobx-react';
import { useHistory } from 'react-router';
import { IndexKind } from 'typescript';
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

const Payment: React.FC = () => {
const { store } = React.useContext(MobXProviderContext);
const history = useHistory();
const [role, setRole] = useState("");
const currentRole = async () =>{
  let x = await store.userProfileDetails().then( async (doc:any) => {
    setRole(doc.role);
});
}
useEffect(() => {
  currentRole()
}, [])

const courseID = Number(history.location.state)?Number(history.location.state):0;


const payment = ()=>{
  if(courses[courseID].payment != "Free")
  {
    const alert = document.createElement('ion-alert');
    alert.header = 'Paied';
    alert.subHeader = 'Success';
    alert.message = "You have been enrolled";
    alert.buttons = [{
      text: 'OK',
      handler: () => {
        alert.dismiss();
        history.push("/tab1",courseID)
        return false;
      }
    }]
    document.body.appendChild(alert);
    alert.present()
  }
  else
  {
    history.push("/tab1",courseID)
  }
};

const ControlButtons = () => {
  if(role == "student")
  {
    return <IonButton  expand="full" shape="round" fill="outline" onClick={() => payment() }>Pay {courses[courseID].payment}</IonButton>
  }
  
}
  return (
    <IonApp  class="tabContent">
      <IonContent className="requestContent">
        <IonCard>
          <IonItem>
            <h5>Course Name: {courses[courseID].title}</h5><br />
          </IonItem>
          
          <img src={courses[courseID].img} className="courseImage" />

         
          <IonItem>
            <IonCol>
             {ControlButtons()}
            </IonCol>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonApp>
  );
};

export default Payment;