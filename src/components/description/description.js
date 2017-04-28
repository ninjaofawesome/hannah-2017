import React, { Component, PropTypes } from 'react';
import Sidebar from '../sidebar/sidebar';


class Description extends Component {
  render() {
    const countries=this.props.items;

    return(
      <div className="description-container">
        <h2> This is a description</h2>
        <Sidebar
        data={countries}
        direction="right" />
      </div>
    );
  }

}

Description.propTypes = {
  items: PropTypes.shape({})
}

export default Description;