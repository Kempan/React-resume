import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui';

const ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            console.log(authResult, redirectUrl);
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

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            guest: {
                email: 'guest@guest.se',
                password: 'guestguest'
            }
        };

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        ui.start('#firebaseui-auth-container', uiConfig);
    }

    login(e){
        firebase.auth().signInWithEmailAndPassword(e.email, e.password)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
            if(error.code === 'auth/user-not-found'){
                error.code = 'Fel email, finns ej registrerad.';
            }
            if(error.code === 'auth/invalid-email'){
                error.code = 'Felaktigt formatera emailadress.';
            }
            if(error.code === 'auth/wrong-password'){
                error.code = 'Nope, fel lösenord.';
            }
            if(error.code === 'auth/too-many-requests'){
                error.code = 'För många requests, försök igen';
            }
            this.setState({
                error: error.code
            })
        })
    }

    signUp(e){
        firebase.auth().createUserWithEmailAndPassword(e.email, e.password)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
            if(error.code === 'auth/invalid-email'){
                error.code = 'Felaktigt formatera emailadress.';
            }
            if(error.code === 'auth/weak-password'){
                error.code = 'Lösenordet måste vara minst 6 symboler.';
            }
            if(error.code === 'auth/email-already-in-use'){
                error.code = 'Sorry, upptagen email.';
            }
            this.setState({
                error: error.code
            })
        });
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (

            <div className="login-wrapper">
                <div className="login-container">
                    <div className="top-container">
                        <h1 className="headerText">Talk is weak, show me code</h1>
                        <h3 style={{color: 'white', margin: '0'}}>Logga in eller registrera dig för att komma vidare</h3>
                        {this.state.error ? <p style={{color: 'white',  margin: '0'}}>{this.state.error}</p> : ''}
                    </div>

                    <input
                        id="input-email"
                        style={{display:'inline', width:'auto'}}
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <input
                        style={{display:'inline', width:'auto'}}
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <br/><br/>
                    <button style={{marginRight: '10px'}} onClick={() => this.login(this.state)}>
                        Logga in
                    </button>
                    <button style={{marginRight: '10px'}} onClick={() => this.signUp(this.state)}>
                        Skapa konto
                    </button>
                    <button onClick={() => this.login(this.state.guest)}>
                        Fortsätt som gäst
                    </button>

                    <div id="firebaseui-auth-container"></div>
                    <div id="loader">Loading...</div>
                </div>
            </div>
        );
    }
}

export default Login;
