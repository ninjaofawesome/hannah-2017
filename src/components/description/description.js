import React, { Component, PropTypes } from 'react';
import Sidebar from '../sidebar/sidebar';


class Description extends Component {
  render() {
    const items=this.props.items;
    const className=this.props.className;
    const text=this.props.content.content.copy;

    return(
      <div className="description-container">
        <h2> This is a description</h2>
        <div className={`${className}__text-area`}>
          {text}
        </div>
        <Sidebar
        data={items}
        className={className} />
      </div>
    );
  }

}

Description.propTypes = {
  items: PropTypes.shape({}),
  content: PropTypes.shape({}),
  className: PropTypes.string
}

export default Description;