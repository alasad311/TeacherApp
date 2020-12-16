import {
  IonApp,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonRow,
  IonSearchbar
  } from '@ionic/react';
import React from 'react';
import './adTab2.css';

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
const formSubmitted = ()=>{
  const alert = document.createElement('ion-alert');
  alert.header = 'Delete';
  alert.message = "Deleted Successfully";
  alert.buttons = [{
    text: 'OK',
    handler: () => {
      alert.dismiss();
      return false;
    }
  }]
  document.body.appendChild(alert);
  alert.present()
};
const adTab2: React.FunctionComponent = () => {

  
  return (
    <IonApp  class="tabContent">
    
       <IonSearchbar value="" ></IonSearchbar>
    <IonContent>
      <IonCard >
        <IonCardHeader>
          <IonCardSubtitle>List of All Courses</IonCardSubtitle>
        </IonCardHeader>
      
      </IonCard>
      <IonCard >
        <IonCardHeader>
        <img src={courses[0].img} alt=""/>
        <IonCardSubtitle>{courses[0].instructor}</IonCardSubtitle>
          <IonCardTitle>{courses[0].title}</IonCardTitle>
        </IonCardHeader>
        <IonItem>
          <IonCol>
          <IonButton  expand="full" shape="round" fill="outline"  onClick={ () => formSubmitted() }>Delete</IonButton>
          </IonCol>
        </IonItem>
      </IonCard>
    </IonContent>
    </IonApp>
  );
};

export default adTab2;
