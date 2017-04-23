import React, { Component } from 'react';

class Sidebar extends Component {

  render() {
    return(
      <div className="countries-list--title">
        <h2> This is a sidebar list.</h2>
        <ul className="countries-list">
          <li className="countries-list__item">Item</li>
        </ul>
      </div>
    );
  }

}

export default Sidebar;