import React, { Component, PropTypes } from 'react';

class Sidebar extends Component {

  listItems(data) {

    if (!data) {
      return null;
    }

    const className = this.props.className
    const countries = data.countries;
    const jobs = data.jobs;

    let eachItem;

    if (countries) {
      eachItem = countries.map((item, index) => {
        return <li key={index} className={`${className}__list-item`}>{item.country}</li>;
      });
    }

    if (jobs) {
      eachItem = jobs.map((item, index) => {
        return(
          <li key={index} className={`${className}__list-item`}>
            <span className={`${className}__position`}>{item.title}</span>
            <span className={`${className}__company`}>{item.company}</span>
          </li>
        );
      });
    }


    return eachItem;
  }

  render() {
    const data = this.props.data;
    const className = this.props.className;

    return(
      <div className={`${className}__title`}>
        <h2> This is a sidebar list.</h2>
        <ul className={`${className}__list`}>
          {this.listItems(data)}
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  data: PropTypes.PropTypes.shape({}),
  className: PropTypes.string
}

export default Sidebar;