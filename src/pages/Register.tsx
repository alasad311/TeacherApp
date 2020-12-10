import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonLabel, IonRow, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import './Register.css';
import { MobXProviderContext } from "mobx-react";
import { useHistory } from "react-router";

const Register: React.FC = () => {
  let initialValues = {
    FirstName: "",
    LastName: "",
    email: "",
    password:"",
    segSelect: "",
    Cpassword: ""
  };
  const { store } = React.useContext(MobXProviderContext);
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [firstName, setFirstName] = useState({});
  const [lastName, setLastName] = useState({});
  const [, setErrorInfo] = useState({});
  const history = useHistory();

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const { control, handleSubmit,getValues, errors, formState  } = useForm({
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
              fontSize: "smaller",
              fontWeight: "bold",
              display: "inline"
            }}
          >
           {
              (errors as any)[_fieldName]['message']
           }
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
        history.push("/tab1")
      }
    } catch (e) {
      console.log(e);
      const alert = document.createElement('ion-alert');
      alert.header = '';
      alert.subHeader = 'Error';
      alert.message = e.message;
      alert.buttons = ['OK']
      document.body.appendChild(alert);
      alert.present()
    }
  };

  const onSubmit = (data: any) => {
    _doCreateAccount(data);
  };
  return (
    
    <IonContent class="ion-padding">
    <div className="registerHeader">
      <img src="assets/white-logo.png" className="registerLogo" />
      <h4 className='titre'>Create Account </h4>
      <p  className='underTitle'>Sign up to get help</p>

    </div>
    
    <form onSubmit={handleSubmit(onSubmit)} >
      <IonGrid className="gridShadow">
        <IonRow justify-content-center align-items-end>
                <IonCol col-12 className="registerFieldDesign">
                  <IonLabel class="labelC">First Name:   {showError("FirstName")} </IonLabel>
              
                <Controller
                render={({ onChange }) => ( 
                <IonInput placeholder="First Name" type="text" className="inputBorder" onIonChange={onChange}/>)}
                control={control}
                name="FirstName"
                
                rules={{
                  minLength: { value: 3, message: "Must be 3 chars long" },
                  required: true,
                  
                }}
              />
            
                </IonCol>
          </IonRow>
          <IonRow justify-content-center align-items-end>
                <IonCol col-3 class="registerFieldDesign">
                  <IonLabel class="labelC">Last Name:  {showError("LastName")}</IonLabel>
              
                <Controller
                render={({ onChange }) => ( 
                <IonInput className="inputBorder" placeholder="Last Name" onIonChange={onChange}/>)}
                control={control}
                name="LastName"
                
                rules={{
                  required: true,
                  minLength: { value: 3, message: "Must be 4 chars long" },
                 
                }}
              />
             
                </IonCol>
          </IonRow>
          <IonRow justify-content-center align-items-end >
                <IonCol col-3 class="registerFieldDesign">
                  <IonLabel class="labelC">Email: {showError("email")}</IonLabel>
                
                <Controller
                render={({ onChange }) => (<IonInput placeholder="Email Address" className="inputBorder" onIonChange={onChange}/>)}
                control={control}
                name="email"
                rules={{
                  required: "This is a required field",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address xx@xx.xx"
                  }
                }}
              />
              
                </IonCol>
          </IonRow>
          <IonRow justify-content-center align-items-end >
                <IonCol col-3 class="registerFieldDesign">
                  <IonLabel class="labelC">Role:  {showError("segSelect")}</IonLabel>
                
                <Controller
               render={({ onChange }) => (<IonSegment className="registerSegment" onIonChange={onChange}>
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
             
                  
                </IonCol>
          </IonRow>
          <IonRow justify-content-center align-items-end>
                <IonCol col-3 class="registerFieldDesign">
                  <IonLabel class="labelC">Password: {showError("password")}</IonLabel>
               
                  
                <Controller
               render={({ onChange }) => (<IonInput className="inputBorder" placeholder="Password"  type="password"  onIonChange={onChange}/>)}
               control={control}
               name="password"
             
               rules={{
                required: true,
                validate: {
                  digits: (value) => value && /\d/.test(value) || "Must contain at least one digit " ,
                  length: (value) => value && value.length >= 8 || 'Must be at least 8 character long',
                  uppercase: (value) => value &&  /[A-Z]/.test(value) || 'Must contain at least one uppercase letter',
                  lowerCase: (value) => value &&  /[a-z]/.test(value) || 'Must contain at least one lowcase letter',
                  specialCharacter: (value) => value &&  /[-!$%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/.test(value) || 'Must contain at least one Symbols @ $ -'
                }
            
                
              }}
              />
                </IonCol>
          </IonRow>
          <IonRow justify-content-center align-items-end>
                <IonCol col-3 class="registerFieldDesign">
                  <IonLabel class="labelC">Confirm Password: {showError("Cpassword")}</IonLabel>
               
                <Controller
               render={({ onChange }) => (<IonInput className="inputBorder" placeholder="Confirm Password"  type="password"  onIonChange={onChange}/>)}
               control={control}
               name="Cpassword"
             
               rules={{
                required: true,
                validate: {
                  digits: (value) => value && /\d/.test(value) || "Must contain at least one digit " ,
                  length: (value) => value && value.length >= 8 || 'Must be at least 8 character long',
                  uppercase: (value) => value &&  /[A-Z]/.test(value) || 'Must contain at least one uppercase letter',
                  lowerCase: (value) => value &&  /[a-z]/.test(value) || 'Must contain at least one lowcase letter',
                  specialCharacter: (value) => value &&  /[-!$%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/.test(value) || 'Must contain at least one Symbols @ $ -',
                  password: (value) => value && value == getValues("password")  || "The passwords do not match"
                }
              }}
              />
              
                </IonCol>
          </IonRow>
      </IonGrid>
      <IonGrid>
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
