import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui'

const firebaseConfig = {
    apiKey: "AIzaSyA0iOnDGChZ2CayDUn0mGHa_wKsvW9rUf8",
    authDomain: "resume-c7e3f.firebaseapp.com",
    databaseURL: "https://resume-c7e3f.firebaseio.com",
    projectId: "resume-c7e3f",
    storageBucket: "",
    messagingSenderId: "835332708687",
    appId: "1:835332708687:web:85976600d7a42fcc"
};

const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
};

firebase.initializeApp(firebaseConfig);

const ui = new firebaseui.auth.AuthUI(firebase.auth());

const startFirebaseUI = function (elementId) {
    ui.start(elementId, uiConfig)
}

export default startFirebaseUI;