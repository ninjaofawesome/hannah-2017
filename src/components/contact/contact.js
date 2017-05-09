import React, { Component } from 'react';
import Button from '../button/button';
import ContactData from './contact_data.json';

class Contact extends Component {

  constructor(props){
    super(props);
    this.toggleText = this.toggleText.bind(this);
  }

  toggleText(){
    this.setState({ confirm: })
  }

  render(){
    return(
      <div className="contact">
        <Button
          confirm={true}
          className="contact"
        />
        <Button
          confirm={false}
          className="contact"
        />
      </div>
    );
  }

}

export default Contact;
