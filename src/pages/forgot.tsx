import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonLabel, IonRow, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import './forgot.css';
import { MobXProviderContext } from "mobx-react";
import { useHistory } from "react-router";

const Register: React.FC = () => {
  let initialValues = {
    email: "",
  };
  const { store } = React.useContext(MobXProviderContext);
  const [email, setEmail] = useState({});
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
  
  const _resetPassword = async (data: any) => {
    setEmail(data.email)
    try {
      let r = await store.doResetPassword(data.email);
     
      const alert = document.createElement('ion-alert');
      alert.header = '';
      alert.subHeader = 'Success';
      alert.message = 'Password has been resetted check your email';
      alert.buttons = [{
        text: 'OK',
        handler: () => {
          alert.dismiss();
          history.push('/home')
          return false;
        }
      }]
  
      document.body.appendChild(alert);
      alert.present()
     
      // if (r.code) {
      //   throw r;
      // } else {
      //   // history.goBack()
      // }
    } catch (e) {
      console.log(e);
      
      const alert = document.createElement('ion-alert');
      alert.header = 'Alert';
      alert.subHeader = 'Error';
      alert.message = 'Email doesnt match our';
      alert.buttons = ['OK'];
  
      document.body.appendChild(alert);
      alert.present();
    }
  };
  const onSubmit = (data: any) => {
    _resetPassword(data);
  };
  return (
    
    <IonContent class="ion-padding">
    <div className="registerHeader">
      <img src="assets/white-logo.png" className="registerLogo" />
      <h4 className='titre'>Forgot Password </h4>
      <p  className='underTitle'></p>

    </div>
    
    <form onSubmit={handleSubmit(onSubmit)} >
      <IonGrid className="gridShadow">
        
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
      </IonGrid>
      <IonGrid>
      <IonRow justify-content-center align-items-end>
              <IonCol col-6>
                  <IonButton expand="full" shape="round" fill="outline" href="/home">Back</IonButton>
              </IonCol>
              <IonCol col-6>
                  <IonButton type="submit" expand="full" shape="round" fill="outline" disabled={formState.isValid === false}>Submit</IonButton>
              </IonCol>
          </IonRow>     
      </IonGrid>
    </form>
  </IonContent>
      
  );
};

export default Register;
