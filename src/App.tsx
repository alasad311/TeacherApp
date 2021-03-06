import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonLoading, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/react';
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
import { apps, book, cog,person, home, people,gitPullRequest, chatbubble} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Details from './pages/Tab1Detail';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Admin from './pages/admin';
import forgot from './pages/forgot'
import request from './pages/request'
import courseDetails from './pages/course_details'
import payment from './pages/payment'
import coursestd from './pages/coursestd'
import courseteacher from './pages/courseteacher'
import courseUpdate from './pages/courseupdate'
import courseStudents from './pages/enrolledstudents'
import courserequests from './pages/courserequests'
import newcourse from './pages/newcourse'
import certificate from './pages/certificate'

const PrivateRoutes = () => {
  return (
    // <IonReactRouter>
    //   <IonRouterOutlet>
    //     {/****** AUTH CREATE ACCOUNT */}
    //     <Route path="/home" component={Home} exact={true} />
    //     <Route path="/login" component={login} exact={true} />
    //     <Route path="/register" component={Register} exact={true} />
    //     <Route path="/admin" component={Admin} exact={true} />
    //     <Route path="/forgotpassword" component={forgot} exact={true} />
    //     <Route exact path="/" render={() => <Redirect to="/home" />} />
    //   </IonRouterOutlet>
    // </IonReactRouter>
     <IonApp>
     <IonReactRouter>
               {/****** AUTH CREATE ACCOUNT */}
        <Route path="/home" component={Home} exact={true} />
        <Route path="/login" component={login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route path="/admin" component={Admin} exact={true} />
        <Route path="/forgotpassword" component={forgot} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />

     </IonReactRouter>
     </IonApp>
  );
};
const PublicRoutes = () => {
  return (
    <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/tab1"  component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} /> 
          <Route path="/tab4" component={Tab4} /> 
          <Route path="/request" component={request} /> 
          <Route path="/course_details" component={courseDetails} /> 
          <Route path="/payment" component={payment} /> 
          <Route path="/student/course" component={coursestd} /> 
          <Route path="/student/chat" component={Tab4} /> 
          <Route path="/teacher/course" component={courseteacher} /> 
          <Route path="/teacher/chat" component={Tab4} /> 
          <Route path="/course/update" component={courseUpdate} /> 
          <Route path="/course/students" component={courseStudents} /> 
          <Route path="/requests/course" component={courserequests} /> 
          <Route path="/newcourse" component={newcourse} /> 
          <Route path="/certificate" component={certificate} /> 
          <Route exact path="/" render={() => <Redirect to="/tab1" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={book} />
            <IonLabel>Courses</IonLabel>
          </IonTabButton>
         
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={people} />
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
      <IonLoading isOpen message="Loading App..." />
    </IonApp>
  ) : (
    <IonApp>{store.authenticatedUser ? <PublicRoutes /> : <PrivateRoutes />}</IonApp>
  );
};

export default observer(App);



