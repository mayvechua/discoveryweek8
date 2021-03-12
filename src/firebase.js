import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBQAfMecyjAhaDQzC9tV2qTw2Rbti3L90s",
    authDomain: "bt3103-week-1c5b7.firebaseapp.com",
    projectId: "bt3103-week-1c5b7",
    storageBucket: "bt3103-week-1c5b7.appspot.com",
    messagingSenderId: "344783320511",
    appId: "1:344783320511:web:f20df4a6328dd5e2a5dd0a",
    measurementId: "G-FHR0J5WSQ4"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;