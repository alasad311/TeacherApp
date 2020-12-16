import React, { constructor, useEffect, useRef, useState } from 'react';
import { IonApp, IonButton, IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { useHistory } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { MobXProviderContext } from 'mobx-react';
const Tab3: React.FC = () => {
  let initialValues = {
    password:"",
    Cpassword: ""
  };
const history = useHistory();
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState({});
const { store } = React.useContext(MobXProviderContext);
const { control, handleSubmit,getValues, errors, formState  } = useForm({
  defaultValues: initialValues,
  mode : 'onChange' // when the values change... check for errors
});

const currentFullName = async () =>{
  let x = await store.userProfileDetails().then( async (doc:any) => {
    setFullName(doc.firstName+" "+doc.lastName);
    
});
}

useEffect(() => {
  currentFullName()
}, [])

console.log(fullName)

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
const onSubmit = (data: any) => {
  saveChanges(data);
  
};
const saveChanges = async (data: any) => {
  try {
    let r = await store.doChangePassword(data.password);
    const alert = document.createElement('ion-alert');
    alert.header = '';
    alert.subHeader = 'Success';
    alert.message = 'Password has been changed successfully';
    alert.buttons = [{
      text: 'OK',
      handler: () => {
        alert.dismiss();
        logoutuser();
        return false;
      }
    }]

    document.body.appendChild(alert);
    alert.present()
  } catch (e) {
    console.log(e);
  }
}
const logoutuser = () => {
  
  store.doLogout();
  history.push('/home')
};
  return (
    
    <IonApp  class="tabContent">
    <IonContent has-header="true">
      <div id="profile-bg"></div>
      <div id="content">
        <div id="profile-info">
          <img id="profile-image" src="assets/users/empty.jpg" />
          <h3 id="profile-name">{fullName}</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
        <IonList>
        
            <IonItem justify-content-center align-items-end>
            <IonCol col-3 class="registerFieldDesign">
                  <IonLabel class="labelC">New Password: <br />{showError("password")}</IonLabel>
               
                  
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
          </IonItem>
          <IonItem justify-content-center align-items-end>
          <IonCol col-3 class="registerFieldDesign">
                  <IonLabel class="labelC">Confirm Password: <br /> {showError("Cpassword")}</IonLabel>
               
                  
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
                  specialCharacter: (value) => value &&  /[-!$%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/.test(value) || 'Must contain at least one Symbols @ $ -'
                }
            
                
              }}
              />
                </IonCol>
          </IonItem>
          
          <IonItem ng-repeat="post in posts">
          <IonButton className="logoutBtn" expand="full" shape="round" fill="outline"
              onClick={ () => logoutuser() }
              >Logout</IonButton>
            <IonButton type="submit" expand="full" shape="round" fill="outline" disabled={formState.isValid === false}>Submit</IonButton>
          </IonItem>
        </IonList>
        </form>
      </div>
    </IonContent>
    </IonApp>
  );
};

export default Tab3;