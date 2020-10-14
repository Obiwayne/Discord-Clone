import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD9MLAZqM6EE5ML64PpRcrYQaqg_-dOoFw",
    authDomain: "discord-clone-f9559.firebaseapp.com",
    databaseURL: "https://discord-clone-f9559.firebaseio.com",
    projectId: "discord-clone-f9559",
    storageBucket: "discord-clone-f9559.appspot.com",
    messagingSenderId: "386949417258",
    appId: "1:386949417258:web:084c77cd9f1b869b3d3653",
    measurementId: "G-GB76KRLH4P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;