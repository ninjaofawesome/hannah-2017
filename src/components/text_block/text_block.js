import React, { Component, PropTypes } from 'react';

class TextArea extends Component {
  render() {

    return(
      <h1> Yo.</h1>
    );
  }
}

TextArea.propTypes = {
  copy: PropTypes.shape({}),
  className: PropTypes.string
}