import React, { Component } from 'react';

class ContactBox extends Component {

  createMarkup(copy) {
    return {__html: copy}
  }

  render(){
    const visible = this.props.visible;
    const copy = this.props.copy;

    return(
      <div
      className={`contact__contact-box-copy ${visible ? 'contact__contact-box-copy--visible' : 'contact__contact-box-copy--hidden'}`}
      dangerouslySetInnerHTML={this.createMarkup(copy)}
      />
    );
  }
}

export default ContactBox;