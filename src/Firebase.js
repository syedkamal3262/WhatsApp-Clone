//import firesbase 
import firebase from 'firebase';

//firebase confrigation App
const firebaseConfig = {
    apiKey: "AIzaSyCRptSD7LbgvAgHcDESdh2nlmU9HKPrpHk",
    authDomain: "whatsapp-clone-b34ae.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-b34ae.firebaseio.com",
    projectId: "whatsapp-clone-b34ae",
    storageBucket: "whatsapp-clone-b34ae.appspot.com",
    messagingSenderId: "257336274928",
    appId: "1:257336274928:web:9e3b8fc459ac473d373735"
  };

//firebase initialization
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firestore initialization
const db = firebaseApp.firestore();
//firebase Authentication initialization
const auth = firebaseApp.auth();
//Google Authentication initialization
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;