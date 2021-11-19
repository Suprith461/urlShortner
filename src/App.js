import logo from './logo.svg';
import './App.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
