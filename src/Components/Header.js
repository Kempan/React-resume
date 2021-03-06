import React, { Component } from 'react';
import firebase from 'firebase';

class Header extends Component {

    logout(){
        firebase.auth().signOut();
    }

   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         // var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         // var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#hide-nav-wrap" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Start</a></li>
                  <li><a className="smoothscroll" href="#about">Om mig</a></li>
                  <li><a className="smoothscroll" href="#resume">Cv</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Projekt</a></li>
                  <li><a className="smoothscroll" href="#contact">Kontakt</a></li>
                   <li><button className="smoothscroll logout-button" onClick={this.logout}>Logga ut</button></li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">{name}</h1>
                  <h3 className="description">{description}.</h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
