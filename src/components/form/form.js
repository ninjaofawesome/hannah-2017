import React, { Component } from 'react'

class Form extends Component {

  render(){
    return(
      <div className="greeting-form">
        <h1>Hello! </h1>
        <form action="GET">
          <input type="text" value="What's your name?" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default Form;