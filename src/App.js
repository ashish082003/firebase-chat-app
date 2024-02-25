import React from 'react';
import './App.css';
import firebase from 'firebase/app';// firebase sdk
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';// hooks
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyC56dxd_Xd7a2ItLaqA7kr7dWbt6MrywXE",
  authDomain: "chat-app-2f0d2.firebaseapp.com",
  projectId: "chat-app-2f0d2",
  storageBucket: "chat-app-2f0d2.appspot.com",
  messagingSenderId: "1011416772697",
  appId: "1:1011416772697:web:1eb700704f7e94b1df8148",
  measurementId: "G-TP5WJDXQTY"
})

const [user]=useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
