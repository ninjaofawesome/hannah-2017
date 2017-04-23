import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import { descriptionWork } from './description-work/description-work';


class Description extends Component {
  render() {
    return(
      <div className="description-container">
        <h2> This is a description</h2>
        <p>{descriptionWork}</p>
        <Sidebar />
      </div>
    );
  }

}

export default Description;