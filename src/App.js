import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Login from './Pages/Login';

import firebase from 'firebase';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {},
      resumeData: {},
      loading: true
    };
  }

  authListener(){
    firebase.auth().onAuthStateChanged((user) => {
        this.setState({user, loading: false});
    })
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  renderApp(){
    return(
        <>
          <Header data={this.state.resumeData.main}/>
          <About data={this.state.resumeData.main}/>
          <Resume data={this.state.resumeData.resume}/>
          <Portfolio data={this.state.resumeData.portfolio}/>
          <Contact data={this.state.resumeData.main}/>
          <Footer data={this.state.resumeData.main}/>
        </>
    )
  }

  renderLogin(){
    return(
        <>
          <Login />
        </>
    )
  }

  componentDidMount(){
    this.authListener();
    this.getResumeData();
  }

  render() {

    if(this.state.loading){
      return <div></div>
    }

    return (
      <div className="App">
        { this.state.user ? this.renderApp() : this.renderLogin() }
      </div>
    );
  }
}

export default App;
