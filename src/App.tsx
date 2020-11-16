import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonLabel, IonLoading, IonMenuButton, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import login from './pages/Login';
import Register from './pages/Register';
import { MobXProviderContext, observer } from "mobx-react";
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { flash, apps } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Details from './pages/Tab1Detail';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
const PrivateRoutes = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        {/****** AUTH CREATE ACCOUNT */}
        <Route path="/home" component={Home} exact={true} />
        <Route path="/login" component={login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};
const PublicRoutes = () => {
  return (
    <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
        <Route path="/tab1"  component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab2/details" component={Details} />
          <Route path="/tab3" component={Tab3} /> 
          <Route exact path="/" render={() => <Redirect to="/tab1" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={flash} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={apps} />
            <IonLabel>Courses</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={apps} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
    </IonReactRouter>
    </IonApp>
    
  );
};

const App = () => {
  const { store } = React.useContext(MobXProviderContext);

  return !store.authCheckComplete ? (
    <IonApp>
      <IonLoading isOpen message="Starting App..." />
    </IonApp>
  ) : (
    <IonApp>{store.authenticatedUser ? <PublicRoutes /> : <PrivateRoutes />}</IonApp>
  );
};

export default observer(App);

