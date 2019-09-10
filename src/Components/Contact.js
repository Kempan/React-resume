import React, { Component } from 'react';

class Contact extends Component {

   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="twelve columns text-center">

                  <p className="lead">{message}</p>
                  <p className="lead"><a className="lead" href="mailto:joakim.edwardh@hotmail.com">Använd denna länken sålänge!</a></p>

               </div>

            </div>

            <div className="row">
               <div className="nine columns">
                  <form action="" method="post" id="contactForm" name="contactForm">
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Namn <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Ämne</label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Meddelande <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                        </div>

                        <div>
                           <button className="submit">Skicka</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset>
                  </form>

                  <div id="message-warning">Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>


               <aside className="three columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Kontakt uppgifter</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span><br />
                        <a className="lead" href="mailto:joakim.edwardh@hotmail.com">{email}</a>
                     </p>
                  </div>

                  {/*<div className="widget widget_tweets">*/}
                     {/*<h4 className="widget-title">Latest Tweets</h4>*/}
                     {/*<ul id="twitter">*/}
                        {/*<li>*/}
                              {/*<span>*/}
                                 {/*This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.*/}
                                 {/*Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum*/}
                           {/*<a href="#">http://t.co/CGIrdxIlI3</a>*/}
                              {/*</span>*/}
                           {/*<b><a href="#">2 Days Ago</a></b>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                              {/*<span>*/}
                                 {/*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,*/}
                                 {/*eaque ipsa quae ab illo inventore veritatis et quasi*/}
                           {/*<a href="#">http://t.co/CGIrdxIlI3</a>*/}
                              {/*</span>*/}
                           {/*<b><a href="#">3 Days Ago</a></b>*/}
                        {/*</li>*/}
                     {/*</ul>*/}
                  {/*</div>*/}
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
