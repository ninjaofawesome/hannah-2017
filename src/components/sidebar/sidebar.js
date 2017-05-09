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
          return <li key={index} className={`${className}-sidebar__list-item`}>{obj.country}</li>;
        }));
      });
    }

    if (type === 'jobs') {
      eachItem = data.map((item) => {
        return (item.map((obj, index) => {
          return(
            <li key={index} className={`${className}-sidebar__list-item`}>
              <span className={`${className}-sidebar__position`}>{obj.title}</span>
              <span className={`${className}-sidebar__company`}>{obj.company}</span>
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
      <div className={`${className}-sidebar`}>
        <h2 className={`${className}-sidebar__title`}>{title}</h2>
        <ul className={`${className}-sidebar__list`}>
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