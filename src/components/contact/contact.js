import React, { Component } from 'react';
import ContactData from './contact_data.json'
import ContactBox from './contact_box/contact_box';

class Contact extends Component {
  constructor() {
    super();
    this.toggleData= this.toggleData.bind(this);
    this.state = {
      visible: false,
      copy: []
    }
  }

  toggleData(confirm){
    console.log(confirm);
    this.setState({
      visible: !this.state.visible
    })
  }

  render(){
    const data = ContactData.contact;

    return(
      <div className="contact">
        {data.map((obj, index) => {
          return (
              <button
                key={`button-${index}`}
                className="button__contact-button"
                onClick={this.toggleData}>{obj.button}
              </button>
            );
        })}
        <ContactBox
          visible={this.state.visible}
          copy={this.state.copy}
        />
      </div>
    );
  }
}


export default Contact;
