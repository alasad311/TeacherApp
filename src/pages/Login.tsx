import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonInput, IonLabel, IonRow, IonSegment, IonSegmentButton } from '@ionic/react';
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

    if(data.email == "admin@test.com" && data.password == "admin1234")
    {
      history.push('/admin')
    }else{
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
        console.log(e);
        setErrorInfo({ showErrorToast: true, errMsg: e.message });
      }    
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
            fontSize: "smaller"
          }}
        >
          This field is required
        </div>
      )
    );
  
};
  return (
    <IonContent class="ion-padding">
    <IonImg src="assets\testIO-logo-rgb-2.png" />
    <h4 className='titre'>Login to </h4>
    <h1 className='nom'>Private Teacher App</h1>
    <form onSubmit={handleSubmit(onSubmit)} >
      <IonGrid>
          <IonRow justify-content-center align-items-end class="test">
                <IonCol col-3>
                  <IonLabel class="labelC">Username: </IonLabel>
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
          <IonRow justify-content-center align-items-end class="test">
                <IonCol col-3>
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
