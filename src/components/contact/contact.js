import React, { Component, PropTypes } from 'react';
import ContactData from './contact_data.json'
import ContactBox from './contact_box/contact_box';

class Contact extends Component {
  constructor() {
    super();
    this.toggleData= this.toggleData.bind(this);
    this.state = {
      visible: false
    }
  }

  toggleData(){
    this.setState({
      visible: !this.state.visible
    })
  }

  render(){
    const data = ContactData.contact;

    return(
      <div className="contact">
        {data.map((obj, index) => {
          console.log(obj);
          return (
            <div>
              <button
                key={`button-${index}`}
                className="button__contact-button"
                confirm={obj.confirm}
                onClick={this.toggleData}>{obj.button}</button>
                <ContactBox
                  copy={obj.copy}
                  visible={this.state.visible}
                />
              </div>
            );
        })}
      </div>
    );
  }
}

Contact.propTypes = {
  addData: PropTypes.func,
  allData: PropTypes.shape({})
}

export default Contact;
