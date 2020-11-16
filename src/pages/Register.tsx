import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonInput, IonLabel, IonRow, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import './Register.css';
import { MobXProviderContext, observer } from "mobx-react";
import { useHistory } from "react-router";
const Register: React.FC = () => {
  let initialValues = {
    FirstName: "",
    LastName: "",
    email: "",
    password:"",
    segSelect: ""
  };
  const { store } = React.useContext(MobXProviderContext);
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [firstName, setFirstName] = useState({});
  const [lastName, setLastName] = useState({});
  const [errorInfo, setErrorInfo] = useState({});
  const history = useHistory();
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const { control, handleSubmit, errors, formState  } = useForm({
    defaultValues: initialValues,
    mode : 'onChange' // when the values change... check for errors
  });
  const showError = (_fieldName: string) => {
      return (
        (errors as any)[_fieldName] && (
          <div
            style={{
              color: "red",
              padding: 5,
              paddingLeft: 12,
              fontSize: "smaller"
            }}
          >
            This field is required
          </div>
        )
      );
    
  };
  
  const _doCreateAccount = async (data: any) => {
    setFirstName(data.FirstName)
    setLastName(data.LastName)
    setPassword(data.password)
    setEmail(data.email)
    try {
      let r = await store.doCreateUser({
        email,
        password,
        firstName,
        lastName,
      });
      console.log(r.code)
      if (r.code) {
        throw r;
      } else {
        history.goBack()
      }
    } catch (e) {
      console.log(e);
      setErrorInfo({ showErrorToast: true, errMsg: e.message });
    }
  };

  const onSubmit = (data: any) => {
    _doCreateAccount(data);
  };
  return (
    
    <IonContent class="ion-padding">
    <IonImg src="assets\testIO-logo-rgb-2.png" />
    <h4 className='titre'>Register to </h4>
    <h1 className='nom'>Teacher App</h1>
    <form onSubmit={handleSubmit(onSubmit)} >
                        <IonGrid>
        <IonRow justify-content-center align-items-end>
                <IonCol col-3 class="test">
                  <IonLabel class="labelC">First Name: </IonLabel>
                </IonCol>
                <IonCol col-9>
                <Controller
                render={({ onChange }) => ( 
                <IonInput className="inputBorder" onIonChange={onChange}/>)}
                control={control}
                name="FirstName"
                
                rules={{
                  required: true,
                  minLength: { value: 4, message: "Must be 4 chars long" }
                }}
              />
              {showError("FirstName")}
                </IonCol>
          </IonRow>
          <IonRow justify-content-center align-items-end>
                <IonCol col-3 class="test">
                  <IonLabel class="labelC">Last Name: </IonLabel>
                </IonCol>
                <IonCol col-9>
                <Controller
                render={({ onChange }) => ( 
                <IonInput className="inputBorder" onIonChange={onChange}/>)}
                control={control}
                name="LastName"
                
                rules={{
                  required: true,
                  minLength: { value: 4, message: "Must be 4 chars long" }
                }}
              />
              {showError("LastName")}
                </IonCol>
          </IonRow>
          <IonRow justify-content-center align-items-end >
                <IonCol col-3 class="test">
                  <IonLabel class="labelC">Email: </IonLabel>
                </IonCol>
                <IonCol col-9>
                <Controller
                render={({ onChange }) => (<IonInput className="inputBorder" onIonChange={onChange}/>)}
                control={control}
                name="email"
                rules={{
                  required: "This is a required field",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address"
                  }
                }}
              />
              {showError("email")}
                </IonCol>
          </IonRow>
          <IonRow justify-content-center align-items-end >
                <IonCol col-3 class="test">
                  <IonLabel class="labelC">Role: </IonLabel>
                </IonCol>
                <IonCol col-9>
                <Controller
               render={({ onChange }) => (<IonSegment onIonChange={onChange}>
               <IonSegmentButton value="student">
                 <IonLabel>Student</IonLabel>
               </IonSegmentButton>
               <IonSegmentButton value="Teacher">
                 <IonLabel>Teacher</IonLabel>
               </IonSegmentButton>
             </IonSegment> )}
               control={control}
               name="segSelect"
             
               rules={{
                required: true,
              }}
              />
              {showError("segSelect")}
                  
                </IonCol>
          </IonRow>
          <IonRow justify-content-center align-items-end>
                <IonCol col-3 class="test">
                  <IonLabel class="labelC">Password: </IonLabel>
                </IonCol>
                <IonCol col-9>
                  
                <Controller
               render={({ onChange }) => (<IonInput className="inputBorder"   type="password"  onIonChange={onChange}/>)}
               control={control}
               name="password"
             
               rules={{
                required: true,
                minLength: { value: 8, message: "Must be 8 chars long" }
              }}
              />
              {showError("password")}
                </IonCol>
          </IonRow>
          <IonRow justify-content-center align-items-end>
              <IonCol col-6>
                  <IonButton expand="full" shape="round" fill="outline" href="/home">Back</IonButton>
              </IonCol>
              <IonCol col-6>
                  <IonButton type="submit" expand="full" shape="round" fill="outline" disabled={formState.isValid === false}>Create</IonButton>
              </IonCol>
          </IonRow>     
      </IonGrid>
      
    </form>
  </IonContent>
      
  );
};

export default Register;
