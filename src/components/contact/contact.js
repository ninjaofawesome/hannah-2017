import React, { Component } from 'react';
import ContactData from './contact_data.json'
import ContactBox from './contact_box/contact_box';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.toggleData= this.toggleData.bind(this);
    this.state = {
      visible: false,
      copy: {}
    }
  }

  toggleData(copy){
    this.setState({
      visible: !this.state.visible,
      copy: copy
    })
  }


  render(){
    const data = ContactData.contact;

    return(
      <div className="contact">
        {data.map((obj, index) => {
          const copy = obj.copy
           return (
              <button
                key={`button-${index}`}
                className="button__contact-button"
                onClick={() => this.toggleData(copy)}>{obj.button}
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
