import React, { Component } from 'react';
import Button from '../button/button';
import ContactBox from './contact_box/contact_box';

class Contact extends Component {

  render(){

    console.log(this.props);
    return(
      <div className="contact">
        <h2 className="contact__title">It would be a pleasure to meet you, though.</h2>
        <p className="contact__cta-text">You've heard a lot about me, I'd like to know more about you.  Want to get coffee?</p>
        <Button
          confirm={true}
          className="contact"
          data={this.props.addData}
        />
        <Button
          confirm={false}
          className="contact"
          data={this.props.addData}
        />
        {Object
          .keys(this.props.allData)
          .map((key) => {
            return(
              <ContactBox
              key={key}
              details={this.props.allData[key]}
              />
            );
          })}
      </div>
    );
  }

}

export default Contact;
