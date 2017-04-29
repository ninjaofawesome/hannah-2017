import React, { Component, PropTypes } from 'react';
import Sidebar from '../sidebar/sidebar';


class Description extends Component {
  render() {
    const items=this.props.items;
    const sidebarClass=this.props.className;

    return(
      <div className="description-container">
        <h2> This is a description</h2>
        <Sidebar
        data={items}
        className={sidebarClass} />
      </div>
    );
  }

}

Description.propTypes = {
  items: PropTypes.shape({}),
  className: PropTypes.string
}

export default Description;