import React, { Component, PropTypes } from 'react';

class Sidebar extends Component {

  listItems(data) {

    if (!data) {
      return null;
    }

    const className = this.props.className;
    const type = this.props.type;

    let eachItem;

    if (type === 'countries') {
      eachItem = data.map((item) => {
        return (item.map((obj, index) => {
          return <li key={index} className={`${className}__sidebar--list-item`}>{obj.country}</li>;
        }));
      });
    }

    if (type === 'jobs') {
      eachItem = data.map((item) => {
        return (item.map((obj, index) => {
          return(
            <li key={index} className={`${className}__sidebar-list-item`}>
              <span className={`${className}__sidebar-position`}>{obj.title}: </span>
              <span className={`${className}__sidebar-company`}>{obj.company}</span>
            </li>
          );
        }));
      });
    }


    return eachItem;
  }

  render() {
    const data = this.props.data;
    const className = this.props.className;
    const title = this.props.title;

    return(
      <div className={`${className}__sidebar`}>
        <h2 className={`${className}__sidebar-title`}>{title}</h2>
        <ul className={`${className}__sidebar-list`}>
          {this.listItems(data)}
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  data: PropTypes.shape({}),
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string
}

export default Sidebar;