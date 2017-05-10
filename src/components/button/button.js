import React, { Component, PropTypes } from 'react';

class Button extends Component {



  render(){
    const confirm = this.props.confirm;

    let buttonText = (confirm === true) ? 'Yes!' : 'Nope.'

    console.log(this.props)
    return (
      <button onClick={this.props.toggleText}>{buttonText}</button>
    );
  }

}

Button.propTypes = {
  confirm: PropTypes.bool,
  className: PropTypes.string,
  data: PropTypes.func
}

export default Button;