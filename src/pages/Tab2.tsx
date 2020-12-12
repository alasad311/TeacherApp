import React, { useState } from 'react';
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonFooter, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonModal, IonRow, IonSearchbar, IonTextarea } from '@ionic/react';
import './Tab2.css';
import { add } from 'ionicons/icons';

const Tab2: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <IonApp  class="tabContent">
      <IonContent>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={() => setShowModal3(true)}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
      <IonSearchbar value="aaa" ></IonSearchbar>
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
              <IonButton  expand="full" shape="round" fill="outline" onClick={() => setShowModal(true)}>View Details</IonButton>
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
              <IonButton  expand="full" shape="round" fill="outline" onClick={() => setShowModal2(true)}>View Details</IonButton>
            </IonCol>
          </IonRow>
        </IonFooter>
        <IonModal isOpen={showModal3} cssClass='my-custom-class'>
         <IonContent>
         <IonItem>
            <IonLabel>Course</IonLabel>
            <IonInput placeholder="Course Name" type="text" className="inputBorder"/>
          </IonItem>
          <IonItem>
            <IonLabel>Description</IonLabel>
            <IonTextarea placeholder="Description" className="inputTextArea" rows={10}  />
          </IonItem>
          <IonItem>
            <IonButton expand="full" shape="round" fill="outline"  onClick={() => setShowModal(false)}>Submit</IonButton>
          </IonItem>
         </IonContent>
         <IonButton onClick={() => setShowModal3(false)}>Close</IonButton>
        </IonModal>
      <IonModal isOpen={showModal} cssClass='my-custom-class'>
      <img src="assets/course/1.jpg" className="courseImageInternal" />
      <IonItem>
        <h2>Introduction to Programming</h2><br />
      </IonItem>
      <IonItem>
      <p className="courseDescInternal">If you want to begin programming, start here. In this fast-paced and entertaining course,
         What Is Programming, you'll learn the fundamentals, the essential ideas, and the concepts 
         for success in any programming language. First, you'll learn how to write a computer program
          and learn how to get the computer to understand it. Next, you'll learn all about the syntax -
           or rules of programming languages. </p>
      </IonItem>
      <IonItem>
      <p>Instructor: Ali Mohammed</p>
      </IonItem>
      <IonItem>
      <p>Time: 3 Weeks</p>
      </IonItem>
      <IonItem>
      <p>Rating: 4.2</p>
      </IonItem>
        <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
      </IonModal>
      <IonModal isOpen={showModal2} cssClass='my-custom-class'>
      <img src="assets/course/2.jpg" className="courseImageInternal" />
      <IonItem>
        <h2>Introduction to C++</h2><br />
      </IonItem>
      <IonItem>
      <p className="courseDescInternal">C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory.</p>
      </IonItem>
      <IonItem>
      <p>Instructor: Abbas Khalfan</p>
      </IonItem>
      <IonItem>
      <p>Time: 1 Weeks</p>
      </IonItem>
      <IonItem>
      <p>Rating: 3.2</p>
      </IonItem>
        <IonButton onClick={() => setShowModal2(false)}>Close</IonButton>
      </IonModal>
      </IonContent>
    </IonApp>
  );
};

export default Tab2;