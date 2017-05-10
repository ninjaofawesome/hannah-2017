import React, { Component } from 'react';
import Button from '../button/button';
import ContactData from './contact_data.json';

class Contact extends Component {

  constructor(props){
    super(props);
    this.toggleText = this.toggleText.bind(this);

    this.state = { confirm : []}
  }

  toggleText(){
    this.setState({ confirm: ContactData.contact })
  }

  render(){

    console.log(this.toggleText);
    return(
      <div className="contact">
        <Button
          confirm={true}
          className="contact"
          data={this.toggleText}
        />
        <Button
          confirm={false}
          className="contact"
          data={this.toggleText}
        />
      </div>
    );
  }

}

export default Contact;
