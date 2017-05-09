import React, { Component, PropTypes } from 'react';

class Button extends Component {

  constructor(props){
    super(props);

    const confirmation = {

    }

  }

  render(){
    const confirm = this.props.confirm;

    let buttonText = (confirm === true) ? 'Yes!' : 'Nope.'

    return (
      <button onClick={this.props.toggleText}>{buttonText}</button>
    );
  }

}

Button.propTypes = {
  confirm: PropTypes.bool,
  className: PropTypes.string
}

export default Button;