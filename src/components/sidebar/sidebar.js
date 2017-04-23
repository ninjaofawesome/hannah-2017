import React, { Component } from 'react';
import SidebarData from './sidebar.json';

class Sidebar extends Component {

  listCountries(SidebarData) {

    if (!SidebarData) {
      return null;
    }

    const visitedCountries = SidebarData.countries.map((place, index) => {
      return <li className="countries-list__item">{place.country}</li>;
    });

    return visitedCountries;
  }

  render() {

    return(
      <div className="countries-list--title">
        <h2> This is a sidebar list.</h2>
        <ul className="countries-list">
          {this.listCountries(SidebarData)}
        </ul>
      </div>
    );
  }

}

export default Sidebar;