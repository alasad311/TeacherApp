import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonItem,
  IonLabel,
  IonList
  } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Tab1.css';
import { logOut } from '../store/firebaseService';
import { useHistory } from "react-router";
import { MobXProviderContext } from 'mobx-react';
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

const Tab1: React.FunctionComponent = () => {
const history = useHistory();
const [role, setRole] = useState("");
const { store } = React.useContext(MobXProviderContext);
const currentRole = async () =>{
  let x = await store.userProfileDetails().then( async (doc:any) => {
    setRole(doc.role);
});
}
useEffect(() => {
  currentRole()
}, [])
const ControlButtons = () => {
  if(role == "student")
  {
    return <IonButton  expand="full" shape="round" fill="outline" onClick={() => history.push("/student/course",0) }>View Program</IonButton>
  }
  else
  {
    return <IonButton  expand="full" shape="round" fill="outline" onClick={() => history.push("/teacher/courses",0)}>View Program</IonButton>

  }
}
const requestControlButton = () => {
  if(role == "student")
  {
  }
  else
  {
    return <IonButton  expand="full" shape="round" fill="outline" onClick={() => history.push("/requests/course",0)}>View Requests</IonButton>

  }
}
  return (
  <IonApp  class="tabContent">
    <IonContent>
    <IonCard class="welcome-card">
        <img src="/assets/shapes.svg" alt=""/>
        <IonCardHeader>
          <IonCardSubtitle>Get Started</IonCardSubtitle>
          <IonCardTitle>Welcome to Private Teacher App</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>
            Now that you have created an account, start by search for courses or request a course.
          </p>
        </IonCardContent>
        <IonItem>
          <IonCol>
              {requestControlButton()}
          </IonCol>
        </IonItem>
      </IonCard>
      <IonCard >
        <IonCardHeader>
        <img src={courses[0].img} alt=""/>
        <IonCardSubtitle>{courses[0].instructor}</IonCardSubtitle>
          <IonCardTitle>{courses[0].title}</IonCardTitle>
        </IonCardHeader>
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

export default Tab1;
