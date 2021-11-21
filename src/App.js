
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom"
import {Redirect} from 'react-router'
import SignIn from './screens/LoginScreens'
import SignUp from './screens/SignUpScreen'
import LandingPage from './screens/LandingPage'
import EditUrlScreen from './screens/EditUrlScreen'
// Import the functions you need from the SDKs you need
import firebase from "firebase";
import {Provider} from 'react-redux';
import store from './redux/store'
import DashBoard from './screens/DashBoard'
import StatisticScreen from './screens/StatisticScreen' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZWWK-NppFUefV71CitgcyR_JlVNqbydQ",
  authDomain: "urlshortner-65dd0.firebaseapp.com",
  projectId: "urlshortner-65dd0",
  storageBucket: "urlshortner-65dd0.appspot.com",
  messagingSenderId: "1011945942150",
  appId: "1:1011945942150:web:1714e1a8437e747327f507",
  measurementId: "G-7BKNZ77T7K"
};

//Initializing firebase app if not initialized
!firebase.apps.length ? firebase.initializeApp( firebaseConfig) : firebase.app()



function App() {
  return (
    <Provider store={store}>
    <div  >
      <Switch>
     
        <Route exact path="/" component={withRouter(LandingPage)}/>
        <Route exact path="/signup" component={withRouter(SignUp)}/>
        <Route exact path="/login" component={withRouter(SignIn)}/>
        <Route exact path="/dashboard" component={withRouter(DashBoard)}/>
        <Route exact path="/editurl" component={withRouter(EditUrlScreen)}/>
        <Route exact path="/statistics" component={withRouter(StatisticScreen)}/>
        
      </Switch>
     
    </div>
    </Provider>
  );
}

export default App;
