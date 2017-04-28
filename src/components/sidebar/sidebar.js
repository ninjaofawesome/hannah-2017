import React, { Component, PropTypes } from 'react';

class Sidebar extends Component {

  listItems(data) {

    if (!data) {
      return null;
    }

    let dataItems;

    if (data.countries) {
      dataItems = data.countries;
    }

    const eachItem = dataItems.map((item, index) => {
      console.log(item);
      return <li key={index} className="countries-list__item">{item.country}</li>;
    });

    return eachItem;
  }

  render() {
    const data = this.props.data;
    // todo: add left or right;
    const direction = this.props.direction;

    return(
      <div className="countries-list--title">
        <h2> This is a sidebar list.</h2>
        <ul className="countries-list">
          {this.listItems(data)}
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  direction: PropTypes.string
}

export default Sidebar;