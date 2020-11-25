import Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAYFbx9e_s7vIBT80GtyOlIkZ-Qzy3_RFs",
    authDomain: "sample-1bc68.firebaseapp.com",
    databaseURL: "https://sample-1bc68.firebaseio.com",
    projectId: "sample-1bc68",
    storageBucket: "sample-1bc68.appspot.com",
    messagingSenderId: "542103543497",
    appId: "1:542103543497:web:61bc92804ddd2a62f63718",
    measurementId: "G-3JEK9GCJ4V"
  };

  const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();