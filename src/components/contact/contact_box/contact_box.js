import React, { Component } from 'react';

class ContactBox extends Component {

  createMarkup(copy) {
    return {__html: copy}
  }

  render(){
    const copy = this.props.details.confirm.copy;

    return(
      <div
      className="contact__contact-box-copy"
      dangerouslySetInnerHTML={this.createMarkup(copy)}
      />
    );
  }
}

export default ContactBox;