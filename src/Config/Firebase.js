import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA0iOnDGChZ2CayDUn0mGHa_wKsvW9rUf8",
    authDomain: "resume-c7e3f.firebaseapp.com",
    databaseURL: "https://resume-c7e3f.firebaseio.com",
    projectId: "resume-c7e3f",
    storageBucket: "",
    messagingSenderId: "835332708687",
    appId: "1:835332708687:web:85976600d7a42fcc"
};

firebase.initializeApp(firebaseConfig);

export default firebase;