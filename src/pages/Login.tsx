import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonImg, IonInput, IonLabel, IonRow, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { MobXProviderContext, observer } from "mobx-react";
import { useHistory } from "react-router";
import './Login.css';
const Login: React.FC = () => {
  let initialValues = {
    email: "",
    password:""
  };

  const { store } = React.useContext(MobXProviderContext);
  const history = useHistory();
  const [errorInfo, setErrorInfo] = useState({});

  const { control, handleSubmit, errors, formState  } = useForm({
    defaultValues: initialValues,
    mode : 'onChange' // when the values change... check for errors
  });

  const onSubmit = async (data: any) => {

    // if(data.email == "admin@test.com" && data.password == "admin1234")
    // {
    //   history.push('/admin')
    // }else{
      store.doLogin(data.email,data.password)
      try {
        let r = await store.doLogin(data.email,data.password)
        console.log(r.code)
        if (r.code) {
          throw r;
        } else {
          history.push('/tab1')
        }
      } catch (e) {
        
          const alert = document.createElement('ion-alert');
          alert.header = 'Alert';
          alert.subHeader = 'Error';
          alert.message = 'Email or password is incorrect';
          alert.buttons = ['OK'];
      
          document.body.appendChild(alert);
          alert.present();
        
        


        //setErrorInfo({ showErrorToast: true, errMsg: e.message });
      }    
    
  };
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
           }        </div>
      )
    );
  
};
  return (
    
    <IonContent class="ion-padding">
   
    <div className="loginHeader">
      <img className="loginHeaderIMG" src="assets\white-logo.png" />
      <h4 className='loginTitle'>Login </h4>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} >
      <IonGrid className="loginGrid">
          <IonRow justify-content-center align-items-end class="test">
                <IonCol col-12 class="loginFieldDesign">
                  <IonLabel class="loginLable">Email {showError("email")}</IonLabel>
                <Controller
                  render={({ onChange }) => (<IonInput className="inputBorder" onIonChange={onChange}/>)}
                  control={control}
                  name="email"
                  rules={{
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "invalid email address"
                    }
                  }}
                />
                
                </IonCol>
          </IonRow>
          <IonRow justify-content-center align-items-end class="test">
          <IonCol col-12 class="loginFieldDesign">
                  <IonLabel class="loginLable">Password  {showError("password")}</IonLabel>
                  <Controller
                render={({ onChange }) => (<IonInput className="inputBorder"   type="password"  onIonChange={onChange}/>)}
                control={control}
                name="password"
              
                rules={{
                  required: true,
                  minLength: { value: 1, message: "Field Required" }
                }}
                />
               
                </IonCol>
          </IonRow>
          </IonGrid>
          
          <IonGrid>
            <IonRow>
              <IonCol col-12><a href="/forgotpassword">Forgot Password</a></IonCol>
            </IonRow>
          <IonRow justify-content-center align-items-end class="test">
              <IonCol col-6>
                  <IonButton expand="full" shape="round" fill="outline" href="/home">Back</IonButton>
              </IonCol>
              <IonCol col-6>
                  <IonButton type="submit" expand="full" shape="round" fill="outline" disabled={formState.isValid === false}>Log In  </IonButton>
              </IonCol>
          </IonRow>
      </IonGrid>
    </form>
  </IonContent>
  );
};

export default Login;
