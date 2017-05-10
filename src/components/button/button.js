import React, { Component } from 'react';

class Button extends Component {

  constructor() {
    super();

    this.addText = this.addText.bind(this);
  }

  addText(event) {
    event.preventDefault();

    console.log('hiiiieeee!');
    let confirm =  {
      "copy":  "<p>Great! Drop me a line at <a href='mailto:hey@hereshannahs.info?Coffee'>hey@hereshannahs.info</a> and we'll caffinate.</p>"
    }

    if (this.props.confirm === false) {
      confirm = {
        "copy":  "<p>No problem!  Life is busy. Let's get coffee in the future.</p>  <p>In case I missed something, you might want to.. </p><ul><li>Check out <a href='https://github.com/ninjaofawesome?tab=repositories' target='_blank'>My GitHub Profile</a></li><li>Take a peek at <a href='https://www.linkedin.com/in/hannahnordgren/' target='_blank'>My LinkedIn Profile</a></li><li><a href='mailto:hey@hereshannahs.info?Coffee'>Email me.</a>  (I like emails.)</li></ul>"
        }
    }

    const confirmObj = {
      "confirm" : confirm
    }

    this.props.data(confirmObj);
  }

  render(){
    const confirm = this.props.confirm;

    let buttonText = (confirm === true) ? 'Yes!' : 'Nope.';
    return (
      <button onClick={(e) => this.addText(e)}>{buttonText}</button>
    );
  }

}

// Button.propTypes = {
//   confirm: PropTypes.bool,
//   className: PropTypes.string,
//   data: PropTypes.func
// }

export default Button;